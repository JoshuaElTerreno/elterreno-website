import type { RequestHandler } from '@sveltejs/kit';
import satori from 'satori';
import sharp from 'sharp';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const fontBlack = readFileSync(
	resolve('node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff')
);
const fontBold = readFileSync(
	resolve('node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff')
);

export const GET: RequestHandler = async ({ url }) => {
	const title = url.searchParams.get('title') ?? 'El Terreno';
	const description =
		url.searchParams.get('description') ??
		'Foundation & Cultural Exchange Centre · Guaranda, Ecuador';
	const section = url.searchParams.get('section') ?? '';

	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					width: '1200px',
					height: '630px',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#1e2134',
					padding: '72px 80px',
					fontFamily: 'Montserrat',
					position: 'relative',
					overflow: 'hidden'
				},
				children: [
					// Accent bar top
					{
						type: 'div',
						props: {
							style: {
								position: 'absolute',
								top: '0',
								left: '0',
								right: '0',
								height: '6px',
								background: 'linear-gradient(90deg, #22395c, #1f6366, #58ba96, #f9ba47, #da7939, #9b372f)',
								display: 'flex'
							}
						}
					},
					// Section label
					...(section
						? [
								{
									type: 'div',
									props: {
										style: {
											fontSize: '14px',
											fontWeight: '700',
											letterSpacing: '0.18em',
											textTransform: 'uppercase',
											color: '#58ba96',
											marginBottom: '24px',
											display: 'flex'
										},
										children: section
									}
								}
							]
						: []),
					// Logo row
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								flexDirection: 'column',
								gap: '0px',
								marginBottom: section ? '28px' : '40px',
								marginTop: section ? '0px' : '12px'
							},
							children: [
								{
									type: 'div',
									props: {
										style: {
											fontSize: '18px',
											fontWeight: '700',
											letterSpacing: '0.22em',
											textTransform: 'uppercase',
											color: '#f9ba47',
											display: 'flex'
										},
										children: 'El Terreno'
									}
								},
								{
									type: 'div',
									props: {
										style: {
											fontSize: '11px',
											fontWeight: '700',
											letterSpacing: '0.1em',
											color: 'rgba(249,186,71,0.55)',
											textTransform: 'uppercase',
											display: 'flex'
										},
										children: 'Foundation & Cultural Exchange Centre'
									}
								}
							]
						}
					},
					// Main title
					{
						type: 'div',
						props: {
							style: {
								fontSize: title.length > 40 ? '52px' : '64px',
								fontWeight: '900',
								textTransform: 'uppercase',
								color: '#fffffe',
								lineHeight: '1.0',
								letterSpacing: '-0.01em',
								marginBottom: '28px',
								display: 'flex',
								flexWrap: 'wrap',
								maxWidth: '1000px'
							},
							children: title
						}
					},
					// Description
					{
						type: 'div',
						props: {
							style: {
								fontSize: '22px',
								fontWeight: '700',
								color: 'rgba(255,255,254,0.65)',
								lineHeight: '1.5',
								maxWidth: '820px',
								display: 'flex',
								flexWrap: 'wrap'
							},
							children: description
						}
					},
					// Bottom row — location
					{
						type: 'div',
						props: {
							style: {
								position: 'absolute',
								bottom: '48px',
								left: '80px',
								right: '80px',
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center'
							},
							children: [
								{
									type: 'div',
									props: {
										style: {
											fontSize: '13px',
											fontWeight: '700',
											letterSpacing: '0.14em',
											textTransform: 'uppercase',
											color: 'rgba(88,186,150,0.7)',
											display: 'flex'
										},
										children: 'Guaranda, Ecuador'
									}
								},
								{
									type: 'div',
									props: {
										style: {
											fontSize: '13px',
											fontWeight: '700',
											letterSpacing: '0.1em',
											textTransform: 'uppercase',
											color: 'rgba(88,186,150,0.7)',
											display: 'flex'
										},
										children: 'elterrenoecuador.com'
									}
								}
							]
						}
					}
				]
			}
		},
		{
			width: 1200,
			height: 630,
			fonts: [
				{ name: 'Montserrat', data: fontBold, weight: 700, style: 'normal' },
				{ name: 'Montserrat', data: fontBlack, weight: 900, style: 'normal' }
			]
		}
	);

	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return new Response(png, {
		headers: {
			'Content-Type': 'image/png',
			'Cache-Control': 'public, max-age=604800, immutable'
		}
	});
};
