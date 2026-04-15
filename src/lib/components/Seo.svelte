<script lang="ts">
	interface Props {
		title: string;
		description: string;
		section?: string;
		/** Absolute URL to OG image — defaults to dynamic /og endpoint */
		image?: string;
		/** Canonical path, e.g. "/about" — site origin prepended automatically */
		path?: string;
		type?: 'website' | 'article';
	}

	import { SITE_URL as SITE } from '$lib/config';

	let { title, description, section = '', image, path = '', type = 'website' }: Props = $props();

	const fullTitle = $derived(title === 'El Terreno' ? title : `${title} | El Terreno`);
	const ogImage = $derived(
		image ??
			`/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}${section ? `&section=${encodeURIComponent(section)}` : ''}`
	);
	const canonical = $derived(`${SITE}${path}`);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<!-- Open Graph -->
	<meta property="og:type" content={type} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="{SITE}{ogImage}" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content="El Terreno" />
	<meta property="og:locale" content="en_GB" />

	<!-- Twitter / X -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="{SITE}{ogImage}" />

	<!-- Extra -->
	<meta name="robots" content="index, follow" />
	<meta name="geo.region" content="EC-B" />
	<meta name="geo.placename" content="Guaranda, Bolívar, Ecuador" />
</svelte:head>
