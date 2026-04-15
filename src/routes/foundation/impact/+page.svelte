<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Our Impact"
	description="Measuring the difference El Terreno Foundation makes — community projects, livelihoods supported, and regenerative change in Guaranda, Bolívar, Ecuador."
	section="El Terreno Foundation"
	path="/foundation/impact"
/>

<!-- BANNER -->
<section class="section-banner banner-dark">
	<span class="eyebrow" style="color:rgba(255,255,255,0.5);">Foundation</span>
	<h1>Our Impact</h1>
	<p>We are proud of what we have achieved — but we have ambitions for much more.</p>
</section>

<!-- PAGE CONTENT -->
<div class="page-content">
	<!-- STATS ROW -->
	<div class="stats-row impact-stats">
		<div class="stat">
			<span class="number">130+</span>
			<span class="label">Community workshops</span>
		</div>
		<div class="stat">
			<span class="number">5</span>
			<span class="label">Years active</span>
		</div>
		<div class="stat">
			<span class="number">17</span>
			<span class="label">Communities</span>
		</div>
		<div class="stat">
			<span class="number">100s</span>
			<span class="label">Lives impacted</span>
		</div>
	</div>

	<!-- TWO-COL LAYOUT -->
	<div class="two-col">
		<!-- MAIN COLUMN -->
		<main>
			<div class="content-block">
				<h3>The context</h3>
				<p>
					The Bolívar province of Ecuador is one of the country's most marginalised regions. 40% of
					rural residents live in poverty, 48% of children experience malnutrition, and 26% of
					teenage girls become pregnant before the age of 18. Illiteracy stands at 10% — far above
					the national average — with girls and women disproportionately affected.
				</p>
				<p>
					90% of surrounding communities are indigenous, predominantly Kichwa-speaking. Centuries of
					colonisation followed by modern globalisation have eroded language, culture, and
					traditional knowledge systems. El Terreno works at the intersection of these challenges —
					alongside communities as partners, not subjects.
				</p>
			</div>

			<div class="content-block">
				<h3>What we've achieved</h3>
				<div class="placeholder">[ Impact timeline / stories ]</div>
				<p>
					Since launching in July 2022, El Terreno has delivered over 130 community workshops across
					17 communities in the Bolívar province. We operate 18 active project areas spanning
					health, education, environment, culture, and economic development — all co-designed with
					the communities we serve.
				</p>
			</div>

			<div class="content-block">
				<h3>Stories from the field</h3>
				<div class="placeholder">[ Case studies / testimonials ]</div>
			</div>
		</main>

		<!-- SIDEBAR -->
		<aside class="sidebar">
			<div class="sidebar-box">
				<h4>Foundation</h4>
				<a href="/foundation">Overview</a>
				<a href="/foundation/projects">Projects</a>
				<a href="/foundation/impact" class="current">Impact</a>
				<a href="/foundation/donate">Donate</a>
			</div>
		</aside>
	</div>
</div>

<style>
	.section-banner h1 {
		color: #fffffe;
	}

	.impact-stats {
		background: transparent;
		border: 1px solid #ccccca;
	}
</style>
