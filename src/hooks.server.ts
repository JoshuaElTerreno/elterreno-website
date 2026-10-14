import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Serve noindex, nofollow on all non-production deployments (preview, development, branch deploys)
	if (process.env.VERCEL_ENV !== 'production') {
		response.headers.set('X-Robots-Tag', 'noindex, nofollow');
	}

	return response;
};
