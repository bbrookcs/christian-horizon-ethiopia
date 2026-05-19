import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import {
	S3_ENDPOINT,
	S3_ACCESS_KEY,
	S3_SECRET_KEY,
	S3_BUCKET_NAME,
	R2_PUBLIC_URL
} from '$env/static/private';

const s3 = new S3Client({
	region: 'auto',
	endpoint: S3_ENDPOINT,
	credentials: {
		accessKeyId: S3_ACCESS_KEY,
		secretAccessKey: S3_SECRET_KEY
	}
});

const ALLOWED_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

/**
 * Upload a File object to Cloudflare R2 and return its public URL.
 * @param {File} file
 * @param {string} [folder]
 * @returns {Promise<string>}
 */
export async function uploadImage(file, folder = 'posts') {
	if (!ALLOWED_TYPES.includes(file.type)) {
		throw new Error(`Unsupported image type: ${file.type}`);
	}
	if (file.size > MAX_SIZE) {
		throw new Error('Image exceeds 5 MB limit');
	}

	const ext = file.name.split('.').pop()?.toLowerCase() ?? 'jpg';
	const key = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

	const buffer = Buffer.from(await file.arrayBuffer());

	await s3.send(
		new PutObjectCommand({
			Bucket: S3_BUCKET_NAME,
			Key: key,
			Body: buffer,
			ContentType: file.type,
			CacheControl: 'public, max-age=31536000'
		})
	);

	return `${R2_PUBLIC_URL}/${key}`;
}

/**
 * Delete an object from R2 by its full public URL.
 * @param {string} url
 */
export async function deleteImageByUrl(url) {
	try {
		const key = url.replace(`${R2_PUBLIC_URL}/`, '');
		await s3.send(new DeleteObjectCommand({ Bucket: S3_BUCKET_NAME, Key: key }));
	} catch {
		// non-fatal
	}
}
