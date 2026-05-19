import { query, rowToPost } from '$lib/server/db.js';

export async function load({ url }) {
	const cat = url.searchParams.get('category') ?? 'all';
	const search = url.searchParams.get('q') ?? '';

	let sql = 'SELECT * FROM posts WHERE 1=1';
	/** @type {any[]} */
	const params = [];

	if (cat !== 'all') {
		sql += ' AND category = ?';
		params.push(cat);
	}
	if (search) {
		sql += ' AND (title LIKE ? OR excerpt LIKE ?)';
		params.push(`%${search}%`, `%${search}%`);
	}

	sql += ' ORDER BY date_iso DESC, created_at DESC';

	const rows = await query(sql, params);

	return {
		posts: rows.map(rowToPost),
		category: cat,
		search
	};
}
