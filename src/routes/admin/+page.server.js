import { query, rowToPost } from '$lib/server/db.js';

export async function load() {
	const rows = await query(
		'SELECT * FROM posts ORDER BY date_iso DESC, created_at DESC LIMIT 10'
	);
	const allRows = await query('SELECT category, COUNT(*) AS cnt FROM posts GROUP BY category');

	/** @type {Record<string, number>} */
	const counts = { news: 0, vacancy: 0, total: 0 };
	for (const r of allRows) {
		counts[r.category] = Number(r.cnt);
		counts.total += Number(r.cnt);
	}

	return {
		recentPosts: rows.map(rowToPost),
		counts
	};
}
