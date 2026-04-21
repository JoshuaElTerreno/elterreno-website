import type { RequestHandler } from '@sveltejs/kit';
import { SITE_URL as SITE } from '$lib/config';

const pages = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' },
	{ path: '/about', changefreq: 'monthly', priority: '0.9' },
	{ path: '/projects', changefreq: 'monthly', priority: '0.8' },
	{ path: '/projects/projects', changefreq: 'monthly', priority: '0.8' },
	{ path: '/projects/impact', changefreq: 'monthly', priority: '0.7' },
	{ path: '/projects/donate', changefreq: 'monthly', priority: '0.8' },
	{ path: '/programmes', changefreq: 'monthly', priority: '0.9' },
	{ path: '/programmes/volunteering', changefreq: 'monthly', priority: '0.8' },
	{ path: '/programmes/changemakers', changefreq: 'monthly', priority: '0.8' },
	{ path: '/programmes/associates', changefreq: 'monthly', priority: '0.7' },
	{ path: '/tourism', changefreq: 'monthly', priority: '0.9' },
	{ path: '/tourism/accommodation', changefreq: 'monthly', priority: '0.8' },
	{ path: '/tourism/events', changefreq: 'weekly', priority: '0.7' },
	{ path: '/contact', changefreq: 'yearly', priority: '0.6' }
];

export const GET: RequestHandler = () => {
	const now = new Date().toISOString().split('T')[0];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		({ path, changefreq, priority }) => `  <url>
    <loc>${SITE}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
