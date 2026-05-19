import { query, rowToPost } from '$lib/server/db.js';

export async function load() {
	const rows = await query(
		'SELECT * FROM posts WHERE published = 1 ORDER BY date_iso DESC, created_at DESC'
	);
	return { posts: rows.map(rowToPost) };
}
