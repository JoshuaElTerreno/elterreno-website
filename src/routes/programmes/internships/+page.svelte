<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Internships"
	description="18 specialist internship tracks across social enterprise, community development, education, media and more in Ecuador. Build your career while making a genuine difference in the Andes."
	section="Programmes"
	path="/programmes/internships"
/>

<section class="section-banner int-banner">
	<span class="eyebrow">Programmes</span>
	<h1>Internships</h1>
	<p>18 specialist internship tracks across social enterprise, community development, education, media and more. Build your career while making a genuine difference in the Ecuadorian Andes.</p>
</section>

<div class="page-content">
	<div class="two-col">
		<main>
			<div class="content-block">
				<h3>Overview</h3>
				<div class="placeholder">[ Overview content — coming soon ]</div>
			</div>

			<div class="content-block">
				<h3>What's Included</h3>
				<ul>
					<li>Full board accommodation at El Terreno</li>
					<li>Personalised placement matched to your field and goals</li>
					<li>Dedicated mentor from El Terreno's professional network</li>
					<li>Weekly 1-to-1 sessions and structured feedback</li>
					<li>Access to all community programmes and events</li>
					<li>Certificate of completion and LinkedIn recommendation</li>
				</ul>
			</div>

			<div class="content-block">
				<h3>Specialist Tracks</h3>
				<p>We offer 18 specialist internship tracks designed around El Terreno's active projects and community needs. Each track is tailored to your background and career stage.</p>
				<div class="placeholder">[ Specialist tracks list — coming soon ]</div>
				<p>See our active projects for inspiration: <a href="/projects/projects">Foundation Projects →</a></p>
			</div>

			<div class="content-block">
				<h3>How It Works</h3>
				<ul>
					<li>Apply online and complete a short discovery call with our team</li>
					<li>We match you to the most suitable track and mentor</li>
					<li>You arrive at El Terreno for an orientation week</li>
					<li>Your placement runs for a minimum of 4 weeks, up to 6 months</li>
					<li>You complete a final project and present to the community before departing</li>
				</ul>
			</div>

			<div class="content-block">
				<h3>Testimonials</h3>
				<div class="placeholder">[ Testimonials — coming soon ]</div>
			</div>

			<div class="content-block">
				<a href="/contact" class="btn-std">Book a discovery call</a>
			</div>
		</main>

		<aside class="sidebar">
			<div class="sidebar-box">
				<h4>All Programmes</h4>
				<a href="/programmes">Overview</a>
				<a href="/programmes/volunteering">Volunteering</a>
				<a href="/programmes/internships" class="current">Internships</a>
				<a href="/programmes/sabbatical">Sabbatical</a>
				<a href="/programmes/associates">Associates</a>
			</div>

			<div class="sidebar-box">
				<h4>Quick Facts</h4>
				<div class="placeholder">[ Quick facts — coming soon ]</div>
			</div>
		</aside>
	</div>
</div>

<style>
	.int-banner {
		background: #F9BA47;
		color: #1E2134;
	}

	.int-banner .eyebrow {
		color: #9B372F;
		opacity: 1;
	}

	.int-banner h1 {
		color: #22395C;
	}

	.int-banner p {
		color: rgba(34, 57, 92, 0.7);
		opacity: 1;
	}

	.content-block a {
		color: #9B372F;
		font-size: 0.85rem;
		font-weight: 700;
		text-decoration: none;
	}

	.content-block a:hover {
		text-decoration: underline;
	}
</style>
