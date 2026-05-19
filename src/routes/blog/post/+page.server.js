import { query, rowToPost } from '$lib/server/db.js';
import { error } from '@sveltejs/kit';

export async function load({ url }) {
	const id = url.searchParams.get('id') ?? url.searchParams.get('type') ?? '';

	const rows = await query(
		'SELECT * FROM posts WHERE id = ? AND published = 1 LIMIT 1',
		[id]
	);

	if (!rows[0]) error(404, 'Post not found');

	return { post: rowToPost(rows[0]) };
}
