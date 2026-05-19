import { fail, redirect, error } from '@sveltejs/kit';
import { query, rowToPost } from '$lib/server/db.js';
import { uploadImage, deleteImageByUrl } from '$lib/server/s3.js';
import { calcReadTime } from '$lib/server/auth.js';

export async function load({ params }) {
	const rows = await query('SELECT * FROM posts WHERE id = ? LIMIT 1', [params.id]);
	if (!rows[0]) error(404, 'Post not found');
	return { post: rowToPost(rows[0]) };
}

export const actions = {
	update: async ({ request, params }) => {
		const fd = await request.formData();

		const category = fd.get('category')?.toString();
		const title = fd.get('title')?.toString().trim() ?? '';
		const date = fd.get('date')?.toString() ?? '';
		const excerpt = fd.get('excerpt')?.toString().trim() ?? '';
		const bodyRaw = fd.get('body')?.toString() ?? '[]';
		const department = fd.get('department')?.toString().trim() || null;
		const location = fd.get('location')?.toString().trim() || null;
		const deadline = fd.get('deadline')?.toString().trim() || null;
		const applyLink = fd.get('apply_link')?.toString().trim() || null;
		const imageFile = /** @type {File | null} */ (fd.get('image'));
		const published = fd.get('published') === '1' ? 1 : 0;
		const currentImageUrl = fd.get('current_image')?.toString() ?? '';

		if (!title) return fail(400, { error: 'Title is required' });
		if (!date) return fail(400, { error: 'Date is required' });

		/** @type {string[]} */
		let body = [];
		try {
			body = JSON.parse(bodyRaw);
		} catch {
			return fail(400, { error: 'Invalid body format' });
		}

		// Upload new image if provided
		let imageUrl = currentImageUrl;
		if (imageFile && imageFile.size > 0) {
			try {
				imageUrl = await uploadImage(imageFile);
				// Delete old R2 image if it was previously uploaded
				if (currentImageUrl.includes('.r2.dev/')) {
					await deleteImageByUrl(currentImageUrl);
				}
			} catch (err) {
				return fail(400, { error: /** @type {Error} */ (err).message });
			}
		}

		const readTime = category === 'news' ? calcReadTime(body, excerpt) : '';
		const dateLabel = new Date(date + 'T00:00:00').toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});

		try {
			await query(
				`UPDATE posts SET
					category = ?, title = ?, date_label = ?, date_iso = ?,
					read_time = ?, image_url = ?, excerpt = ?, body = ?,
					department = ?, location = ?, deadline = ?, apply_link = ?,
					published = ?
				 WHERE id = ?`,
				[
					category, title, dateLabel, date,
					readTime, imageUrl, excerpt, JSON.stringify(body),
					department, location, deadline, applyLink,
					published,
					params.id
				]
			);
		} catch (err) {
			console.error(err);
			return fail(500, { error: 'Database error. Please try again.' });
		}

		return { success: true };
	},

	delete: async ({ params }) => {
		// Get image to potentially delete from R2
		const rows = await query('SELECT image_url FROM posts WHERE id = ?', [params.id]);
		if (rows[0]?.image_url?.includes('.r2.dev/')) {
			await deleteImageByUrl(rows[0].image_url);
		}
		await query('DELETE FROM posts WHERE id = ?', [params.id]);
		redirect(303, '/admin/posts');
	}
};
