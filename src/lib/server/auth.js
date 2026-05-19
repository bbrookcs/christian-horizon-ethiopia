import { SignJWT, jwtVerify } from 'jose';
import { JWT_SECRET } from '$env/static/private';

const secret = new TextEncoder().encode(JWT_SECRET);

/**
 * @param {{ sub: number|string, email: string, name: string, role: string }} payload
 */
export async function signToken(payload) {
	return new SignJWT(/** @type {any} */ (payload))
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('7d')
		.sign(secret);
}

/**
 * @param {string} token
 * @returns {Promise<any|null>}
 */
export async function verifyToken(token) {
	try {
		const { payload } = await jwtVerify(token, secret);
		return payload;
	} catch {
		return null;
	}
}

/** Calculates read time from text content (200 wpm average). */
export function calcReadTime(/** @type {string[]} */ paragraphs, /** @type {string} */ excerpt = '') {
	const text = [excerpt, ...paragraphs].join(' ');
	const words = text.trim().split(/\s+/).filter(Boolean).length;
	const minutes = Math.max(1, Math.ceil(words / 200));
	return `${minutes} min read`;
}

/** Slugify a title into a URL-safe ID. */
export function slugify(/** @type {string} */ title) {
	const base = title
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.trim()
		.replace(/\s+/g, '-')
		.slice(0, 60);
	const suffix = Date.now().toString(36).slice(-4);
	return `${base}-${suffix}`;
}
