import type { RequestHandler } from './$types';

export const GET: RequestHandler = () => {
	const isProduction = process.env.VERCEL_ENV === 'production';

	const body = isProduction
		? `User-agent: *
Allow: /

Sitemap: https://elterrenoecuador.com/sitemap.xml`
		: `User-agent: *
Disallow: /`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
};
