import { redirect } from '@sveltejs/kit';
import { verifyToken } from '$lib/server/auth.js';

export async function load({ cookies, url }) {
	const token = cookies.get('auth_token');

	if (!token) {
		redirect(303, `/login?redirect=${encodeURIComponent(url.pathname)}`);
	}

	const payload = await verifyToken(token);

	if (!payload) {
		cookies.delete('auth_token', { path: '/' });
		redirect(303, '/login');
	}

	return {
		user: {
			id: payload.sub,
			email: payload.email,
			name: payload.name ?? 'Admin',
			role: payload.role ?? 'editor'
		}
	};
}
