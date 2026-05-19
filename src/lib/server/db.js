import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import { DATABASE_URL } from '$env/static/private';

/** @type {mysql.Pool | null} */
let pool = null;

function getPool() {
	if (!pool) {
		pool = mysql.createPool({
			uri: DATABASE_URL,
			waitForConnections: true,
			connectionLimit: 10,
			queueLimit: 0
		});
	}
	return pool;
}

/**
 * @param {string} sql
 * @param {any[]} [params]
 * @returns {Promise<any[]>}
 */
export async function query(sql, params = []) {
	await ensureInit();
	const [rows] = await getPool().execute(sql, params);
	return /** @type {any[]} */ (rows);
}

// ── DB initialisation (runs once) ────────────────────────────────────────────

let _initPromise = /** @type {Promise<void> | null} */ (null);

async function ensureInit() {
	if (!_initPromise) {
		_initPromise = _initDb().catch((err) => {
			// Reset so next request retries instead of getting stuck on the error
			_initPromise = null;
			throw err;
		});
	}
	return _initPromise;
}

async function _initDb() {
	const p = getPool();

	// Create tables (safe if already exist)
	await p.execute(`
		CREATE TABLE IF NOT EXISTS admin_users (
			id            INT AUTO_INCREMENT PRIMARY KEY,
			email         VARCHAR(255) UNIQUE NOT NULL,
			password_hash VARCHAR(255) NOT NULL,
			name          VARCHAR(255),
			role          VARCHAR(50) DEFAULT 'editor',
			created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
		)
	`);

	await p.execute(`
		CREATE TABLE IF NOT EXISTS posts (
			id          VARCHAR(120)  PRIMARY KEY,
			category    ENUM('news','vacancy') NOT NULL,
			title       VARCHAR(500)  NOT NULL,
			date_iso    DATE          NOT NULL,
			created_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
		)
	`);

	// ── Migrations: add columns that may be missing on existing tables ──────────
	/** @param {string} col @param {string} definition */
	async function addColIfMissing(col, definition) {
		const [rows] = /** @type {any} */ (await p.execute(
			`SELECT 1 FROM INFORMATION_SCHEMA.COLUMNS
			 WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = 'posts' AND COLUMN_NAME = ?`,
			[col]
		));
		if (!rows.length) {
			await p.execute(`ALTER TABLE posts ADD COLUMN ${definition}`);
		}
	}

	await addColIfMissing('date_label',  'date_label  VARCHAR(100)');
	await addColIfMissing('read_time',   'read_time   VARCHAR(50)');
	await addColIfMissing('image_url',   'image_url   VARCHAR(2000)');
	await addColIfMissing('excerpt',     'excerpt     TEXT');
	await addColIfMissing('body',        'body        JSON');
	await addColIfMissing('department',  'department  VARCHAR(255)');
	await addColIfMissing('location',    'location    VARCHAR(255)');
	await addColIfMissing('deadline',    'deadline    VARCHAR(255)');
	await addColIfMissing('apply_link',  'apply_link  VARCHAR(2000)');
	await addColIfMissing('published',   'published   TINYINT(1) DEFAULT 1');
	await addColIfMissing('author_id',   'author_id   INT');
	await addColIfMissing('updated_at',  'updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP');

	// Seed default admin user (INSERT IGNORE = no-op if already exists)
	const hash = await bcrypt.hash('admin123', 12);
	await p.execute(
		`INSERT IGNORE INTO admin_users (email, password_hash, name, role) VALUES (?, ?, ?, ?)`,
		['admin@heds.org', hash, 'HEDS Admin', 'admin']
	);

}

/**
 * Try to convert a stored deadline string to YYYY-MM-DD for <input type="date">.
 * Handles both YYYY-MM-DD (new) and "November 5, 2024" (legacy) formats.
 * @param {string | null} raw
 */
function deadlineToIso(raw) {
	if (!raw) return '';
	if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
	const d = new Date(raw);
	return isNaN(d.getTime()) ? '' : d.toISOString().split('T')[0];
}

/**
 * Format a YYYY-MM-DD deadline string to "5 November 2024" for display.
 * Falls back to the raw value if it's not a recognised date.
 * @param {string | null} raw
 */
function formatDeadline(raw) {
	if (!raw) return null;
	const iso = deadlineToIso(raw);
	if (!iso) return raw; // Legacy human-readable — return as-is
	return new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', {
		day: 'numeric', month: 'long', year: 'numeric'
	});
}

/**
 * Map a raw DB row to the Post shape the front-end expects.
 * @param {any} row
 */
export function rowToPost(row) {
	const rawDeadline = row.deadline ?? null;
	return {
		id: row.id,
		category: row.category,
		title: row.title,
		date: row.date_label,
		dateIso: row.date_iso instanceof Date ? row.date_iso.toISOString().split('T')[0] : row.date_iso,
		readTime: row.read_time ?? '',
		image: row.image_url ?? '/img4.jpg',
		excerpt: row.excerpt ?? '',
		body: typeof row.body === 'string' ? JSON.parse(row.body) : (row.body ?? []),
		department: row.department ?? null,
		location: row.location ?? null,
		deadline: formatDeadline(rawDeadline),   // human-readable for blog display
		deadlineIso: deadlineToIso(rawDeadline), // YYYY-MM-DD for <input type="date">
		applyLink: row.apply_link ?? null,
		published: !!row.published,
		createdAt: row.created_at
	};
}
