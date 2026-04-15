<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="El Terreno"
	description="Foundation & Cultural Exchange Centre in Guaranda, Ecuador. Co-creating vibrant, prosperous communities through cultural exchange, volunteering, internships and sustainable development in the Andes."
	path="/"
/>

<!-- HERO -->
<section class="hero">
	<div class="hero-inner">
		<h1>Transforming Communities,<br />Transforming Lives.</h1>
		<span class="hero-sub">
			We Envision A World Of Diverse Cultural Ecosystems,<br />Where We All Live Successful And
			Significant Lives.
		</span>
		<a href="/about" class="btn">About Us</a>
	</div>
</section>

<!-- PROJECTS -->
<div class="band band-projects"></div>
<div class="content-panel panel-projects">
	<div class="panel-text">
		<span class="panel-label">El Terreno Foundation</span>
		<h2>Projects</h2>
		<p class="panel-body">
			<strong>Mission:</strong> To co-create more vibrant, prosperous, and regenerative communities
			where migration is a choice — not a necessity.
		</p>
		<div class="cta-row">
			<a href="/foundation/projects" class="btn-ghost">Projects</a>
			<a href="/foundation/impact" class="btn-ghost">Impact</a>
			<a href="/foundation/donate" class="btn-std">Donate</a>
		</div>
	</div>
</div>

<!-- PROGRAMMES -->
<div class="band band-programmes"></div>
<div class="content-panel panel-programmes">
	<div class="panel-text">
		<span class="panel-label">Cultural Exchange Centre</span>
		<h2>Programmes</h2>
		<p class="panel-body">
			<strong>Mission:</strong> To be a bridge between modern and ancestral thought, building the
			next generation of conscious global leaders.
		</p>
		<div class="cta-row">
			<a href="/programmes" class="btn-ghost-dk">Programmes</a>
			<a href="/programmes/internships" class="btn-ghost-dk">Methodology</a>
			<a href="/programmes#apply" class="btn-std">Apply</a>
		</div>
	</div>
</div>

<!-- VISITS -->
<div class="band band-visits"></div>
<div class="content-panel panel-visits">
	<div class="panel-text">
		<span class="panel-label">Cultural Exchange Centre</span>
		<h2>Visits</h2>
		<p class="panel-body">
			Breathtaking sunsets above the clouds, ancestral indigenous culture, steamy jungle waterfalls,
			inspiring community projects and the majestic Chimborazo volcano — all on your doorstep.
		</p>
		<div class="cta-row">
			<a href="/tourism/accommodation" class="btn-ghost">Accommodation</a>
			<a href="/tourism" class="btn-ghost">Activities</a>
			<a href="/contact" class="btn-std">Book</a>
		</div>
	</div>
</div>

<!-- LATEST FROM EL TERRENO -->
<section class="latest-section">
	<div class="latest-half">
		<div class="latest-half-header">
			<h2>Latest From El Terreno</h2>
			<span class="view-all">View all →</span>
		</div>
		<div class="blog-stack">
			<div class="blog-row">
				<div class="blog-row-img"></div>
				<div>
					<span class="blog-tag">Blog · Apr 2025</span>
					<h3>Safety In Ecuador: What You Need To Know In 2026</h3>
				</div>
			</div>
			<div class="blog-row">
				<div class="blog-row-img"></div>
				<div>
					<span class="blog-tag">Newsletter · Sep 2025</span>
					<h3>Nourished By Food And Ceremony</h3>
				</div>
			</div>
			<div class="blog-row">
				<div class="blog-row-img"></div>
				<div>
					<span class="blog-tag">Newsletter · Aug 2025</span>
					<h3>The Act Of Creation In Cultural Exchange</h3>
				</div>
			</div>
			<div class="blog-row">
				<div class="blog-row-img"></div>
				<div>
					<span class="blog-tag">Blog · Jun 2025</span>
					<h3>What Does Ayni Mean? Sacred Reciprocity In The Andes</h3>
				</div>
			</div>
			<div class="blog-row">
				<div class="blog-row-img"></div>
				<div>
					<span class="blog-tag">Newsletter · Apr 2025</span>
					<h3>Five Lessons From Five Years In Guaranda</h3>
				</div>
			</div>
			<div class="blog-row">
				<div class="blog-row-img"></div>
				<div>
					<span class="blog-tag">Blog · Feb 2025</span>
					<h3>Carnaval De Guaranda: Ecuador's Most Notorious Festival</h3>
				</div>
			</div>
		</div>
	</div>
	<div class="latest-half">
		<div class="latest-half-header">
			<h2>On Instagram</h2>
			<a href="https://www.instagram.com/elterrenoguaranda/" target="_blank" rel="noopener"
				>@elterrenoguaranda →</a
			>
		</div>
		<div class="ig-grid">
			<div class="ig-cell"></div>
			<div class="ig-cell"></div>
			<div class="ig-cell"></div>
			<div class="ig-cell"></div>
			<div class="ig-cell"></div>
			<div class="ig-cell"></div>
		</div>
		<p class="ig-note">Follow us for field updates, community stories and life in the Andes.</p>
	</div>
</section>

<style>
	.hero {
		min-height: 80vh;
		display: flex;
		align-items: flex-start;
		padding: 3.5rem 5rem 5rem;
		background: #1e2134;
	}
	.hero-inner {
		max-width: 640px;
	}
	.hero h1 {
		font-size: clamp(2.2rem, 5vw, 4rem);
		font-weight: 900;
		letter-spacing: -0.01em;
		line-height: 1.02;
		text-transform: uppercase;
		color: #fffffe;
		margin-bottom: 1.2rem;
	}
	.hero-sub {
		font-size: 0.84rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #58ba96;
		margin-bottom: 2rem;
		display: block;
		line-height: 2;
		white-space: nowrap;
	}
	.band {
		height: 6px;
		width: 100%;
	}
	.band-projects {
		background: linear-gradient(90deg, #22395c, #1f6366, #22395c);
	}
	.band-programmes {
		background: linear-gradient(90deg, #f9ba47, #da7939, #f9ba47);
	}
	.band-visits {
		background: linear-gradient(90deg, #9b372f, #da7939, #9b372f);
	}
	.content-panel {
		padding: 5rem;
		display: flex;
		align-items: flex-start;
		gap: 4rem;
		text-align: center;
	}
	.panel-text {
		flex: 1;
	}
	.panel-label {
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
		display: block;
	}
	.content-panel h2 {
		font-size: clamp(2rem, 3.5vw, 3.2rem);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.01em;
		line-height: 0.95;
		margin-bottom: 1rem;
	}
	.panel-body {
		font-size: 0.95rem;
		line-height: 1.8;
		margin-bottom: 1.6rem;
		max-width: 560px;
		margin-left: auto;
		margin-right: auto;
	}
	.cta-row {
		display: flex;
		gap: 0.55rem;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.btn-ghost {
		display: inline-block;
		padding: 0.62rem 1.35rem;
		font-family: inherit;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		background: transparent;
		color: #fffffe;
		border: 1.5px solid rgba(255, 255, 255, 0.4);
		border-radius: 24px;
		transition: all 0.25s;
		white-space: nowrap;
	}
	.btn-ghost:hover {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.7);
	}
	.btn-ghost-dk {
		display: inline-block;
		padding: 0.62rem 1.35rem;
		font-family: inherit;
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		background: transparent;
		color: #22395c;
		border: 1.5px solid rgba(34, 57, 92, 0.45);
		border-radius: 24px;
		transition: all 0.25s;
		white-space: nowrap;
	}
	.btn-ghost-dk:hover {
		background: rgba(34, 57, 92, 0.12);
		border-color: #22395c;
	}
	.panel-projects {
		background: #22395c;
		color: #fffffe;
	}
	.panel-projects .panel-label {
		color: #58ba96;
	}
	.panel-projects h2 {
		color: #f9ba47;
	}
	.panel-projects .panel-body {
		color: rgba(255, 255, 255, 0.8);
	}
	.panel-programmes {
		background: #f9ba47;
		color: #1e2134;
	}
	.panel-programmes .panel-label {
		color: #9b372f;
	}
	.panel-programmes h2 {
		color: #22395c;
	}
	.panel-programmes .panel-body {
		color: rgba(30, 33, 52, 0.75);
	}
	.panel-visits {
		background: #9b372f;
		color: #fffffe;
	}
	.panel-visits .panel-label {
		color: #da7939;
	}
	.panel-visits h2 {
		color: #f9ba47;
	}
	.panel-visits .panel-body {
		color: rgba(255, 255, 255, 0.8);
	}
	.latest-section {
		background: #1e2134;
		display: grid;
		grid-template-columns: 1fr 1fr;
		border-top: 1px solid rgba(88, 186, 150, 0.12);
	}
	.latest-half {
		padding: 3.5rem 4rem;
		text-align: center;
	}
	.latest-half + .latest-half {
		border-left: 1px solid rgba(88, 186, 150, 0.12);
	}
	.latest-half-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 1.75rem;
		padding-bottom: 0.85rem;
		border-bottom: 1px solid rgba(88, 186, 150, 0.12);
	}
	.latest-half-header h2 {
		font-size: 0.95rem;
		font-weight: 900;
		text-transform: uppercase;
		color: #fffffe;
		letter-spacing: 0.05em;
	}
	.latest-half-header a,
	.view-all {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #58ba96;
		text-decoration: none;
	}
	.latest-half-header a:hover {
		color: #fffffe;
	}
	.blog-stack {
		display: flex;
		flex-direction: column;
	}
	.blog-row {
		display: grid;
		grid-template-columns: 58px 1fr;
		gap: 0.85rem;
		align-items: center;
		padding: 0.85rem 0;
		border-bottom: 1px solid rgba(88, 186, 150, 0.08);
		text-decoration: none;
		text-align: left;
		transition: opacity 0.15s;
	}
	.blog-row:last-child {
		border-bottom: none;
	}
	.blog-row:hover {
		opacity: 0.75;
	}
	.blog-row-img {
		width: 58px;
		height: 46px;
		border-radius: 3px;
		background: rgba(88, 186, 150, 0.1);
	}
	.blog-tag {
		font-size: 0.56rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: #58ba96;
		display: block;
		margin-bottom: 0.2rem;
	}
	.blog-row h3 {
		font-size: 0.82rem;
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1.35;
		color: #f9ba47;
	}
	.ig-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 3px;
		margin-bottom: 0.85rem;
	}
	.ig-cell {
		aspect-ratio: 1;
		background: rgba(88, 186, 150, 0.08);
		border-radius: 2px;
	}
	.ig-note {
		font-size: 0.78rem;
		color: rgba(88, 186, 150, 0.5);
		line-height: 1.5;
	}
	@media (max-width: 900px) {
		.hero {
			padding: 3rem 2rem;
		}
		.hero-sub {
			white-space: normal;
			font-size: 0.68rem;
		}
		.content-panel {
			padding: 3rem 2rem;
			flex-direction: column;
			gap: 2rem;
		}
		.latest-section {
			grid-template-columns: 1fr;
		}
		.latest-half + .latest-half {
			border-left: none;
			border-top: 1px solid rgba(88, 186, 150, 0.12);
		}
		.latest-half {
			padding: 2.5rem 2rem;
		}
	}
</style>
