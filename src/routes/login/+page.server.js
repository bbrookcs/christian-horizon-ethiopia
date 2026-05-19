import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { query } from '$lib/server/db.js';
import { signToken } from '$lib/server/auth.js';

export const actions = {
	default: async ({ request, cookies, url }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString().trim() ?? '';
		const password = data.get('password')?.toString() ?? '';

		if (!email || !password) {
			return fail(400, { error: 'Email and password are required.' });
		}

		let user;
		try {
			const rows = await query('SELECT * FROM admin_users WHERE email = ? LIMIT 1', [email]);
			user = rows[0];
		} catch (err) {
			console.error('DB error during login:', err);
			return fail(500, { error: 'Server error. Please try again.' });
		}

		if (!user || !(await bcrypt.compare(password, user.password_hash))) {
			return fail(401, { error: 'Invalid email or password.' });
		}

		const token = await signToken({
			sub: user.id,
			email: user.email,
			name: user.name ?? 'Admin',
			role: user.role ?? 'editor'
		});

		cookies.set('auth_token', token, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7 // 7 days
		});

		const redirectTo = url.searchParams.get('redirect') ?? '/admin';
		redirect(303, redirectTo);
	}
};
