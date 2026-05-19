import { query, rowToPost } from '$lib/server/db.js';

export async function load() {
	const rows = await query(
		`SELECT * FROM posts
		 WHERE published = 1 AND category = 'news'
		 ORDER BY date_iso DESC, created_at DESC
		 LIMIT 3`
	);
	return { spotlightPosts: rows.map(rowToPost) };
}
