import { fail, redirect } from '@sveltejs/kit';
import { query } from '$lib/server/db.js';
import { uploadImage } from '$lib/server/s3.js';
import { calcReadTime, slugify, verifyToken } from '$lib/server/auth.js';

export const actions = {
	create: async ({ request, cookies }) => {
		// Resolve logged-in user from cookie (parent() is not available in actions)
		const token = cookies.get('auth_token');
		const payload = token ? await verifyToken(token) : null;
		const authorId = payload?.sub ?? null;

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

		// Validation
		if (!title) return fail(400, { error: 'Title is required' });
		if (!date) return fail(400, { error: 'Date is required' });
		if (!excerpt) return fail(400, { error: 'Excerpt is required' });
		if (category !== 'news' && category !== 'vacancy')
			return fail(400, { error: 'Invalid category' });
		if (category === 'vacancy' && !applyLink)
			return fail(400, { error: 'Apply link is required for vacancies' });

		/** @type {string[]} */
		let body = [];
		try {
			body = JSON.parse(bodyRaw);
		} catch {
			return fail(400, { error: 'Invalid body format' });
		}

		// Upload image
		let imageUrl = '/img4.jpg';
		if (imageFile && imageFile.size > 0) {
			try {
				imageUrl = await uploadImage(imageFile);
			} catch (err) {
				return fail(400, { error: /** @type {Error} */ (err).message });
			}
		}

		// Auto read time (vacancies get empty string to satisfy NOT NULL column)
		const readTime = category === 'news' ? calcReadTime(body, excerpt) : '';

		// Slug
		const id = slugify(title);

		// Date label
		const dateLabel = new Date(date + 'T00:00:00').toLocaleDateString('en-GB', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});

		try {
			await query(
				`INSERT INTO posts
					(id, category, title, date_label, date_iso, read_time, image_url, excerpt, body,
					 department, location, deadline, apply_link, author_id)
				 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
				[
				id, category, title, dateLabel, date, readTime, imageUrl,
				excerpt, JSON.stringify(body),
				department, location, deadline, applyLink,
				authorId
				]
			);
		} catch (err) {
			console.error(err);
			return fail(500, { error: 'Database error. Please try again.' });
		}

		redirect(303, '/admin/posts');
	}
};
