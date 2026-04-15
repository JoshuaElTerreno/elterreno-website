<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Support Our Work"
	description="Support El Terreno Foundation's community development projects in Ecuador. Your donation helps co-create more vibrant, prosperous communities in the Ecuadorian Andes."
	section="El Terreno Foundation"
	path="/foundation/donate"
/>

<!-- BANNER -->
<section class="section-banner banner-dark">
	<span class="eyebrow" style="color:rgba(255,255,255,0.5);">Foundation</span>
	<h1>Support Our Work</h1>
	<p>
		Every contribution directly funds community projects in Bolívar, Ecuador. No overhead — your
		money goes straight to impact.
	</p>
</section>

<!-- PAGE CONTENT -->
<div class="page-content">
	<div class="two-col">
		<!-- MAIN COLUMN -->
		<main>
			<div class="content-block">
				<h3>What your donation does</h3>
				<div class="placeholder">[ Donation impact breakdown ]</div>
			</div>

			<div class="content-block">
				<h3>Donate via Donorbox</h3>
				<div class="placeholder">[ Donorbox embed ]</div>
				<a
					href="https://donorbox.org/volunteer-community-activities"
					class="btn btn-primary"
					target="_blank"
					rel="noopener noreferrer"
				>
					Donate on Donorbox
				</a>
			</div>

			<div class="content-block">
				<h3>Other ways to support</h3>
				<ul>
					<li>Volunteer or intern with us</li>
					<li>Partner with the Foundation</li>
					<li>Share our work</li>
					<li>Corporate or institutional giving</li>
				</ul>
			</div>
		</main>

		<!-- SIDEBAR -->
		<aside class="sidebar">
			<div class="sidebar-box">
				<h4>Foundation</h4>
				<a href="/foundation">Overview</a>
				<a href="/foundation/projects">Projects</a>
				<a href="/foundation/impact">Impact</a>
				<a href="/foundation/donate" class="current">Donate</a>
			</div>

			<div class="sidebar-box">
				<h4>Registration</h4>
				<p>Fundación El Terreno<br />Reg: 0291526609001</p>
			</div>
		</aside>
	</div>
</div>

<style>
	.section-banner h1 {
		color: #fffffe;
	}

	.btn-primary {
		margin-top: 1rem;
	}

	/* Light-background hover override for .btn used on white content area */
	.btn-primary:hover {
		background: transparent;
		color: #1e2134;
		border-color: #9b372f;
	}
</style>
