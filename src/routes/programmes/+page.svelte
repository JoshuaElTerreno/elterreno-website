<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Programmes"
	description="Volunteering, internships, sabbaticals and residencies in Ecuador. Build the next generation of conscious global leaders through meaningful work in the Andes."
	section="Cultural Exchange Centre"
	path="/programmes"
/>

<!-- ── HERO ── -->
<section class="prog-hero">
	<p class="eyebrow">Cultural Exchange Centre</p>
	<h1>Programmes</h1>
	<p class="mission-line">
		<span class="mission-text">To be a bridge between modern and ancestral thought, building the next generation of conscious global leaders.</span>
	</p>
</section>



<!-- ── BAND: quad ── -->
<div class="band band-quad"></div>

<!-- ── SECTION 1: Find Your Programme ── -->
<section class="prog-section" id="programmes">
	<p class="s-label">01 — Choose Your Path</p>
	<h2>What Best Describes You?</h2>

	<div class="accordion-wrapper">
		<!-- Nomad -->
		<details class="prog-accordion">
			<summary>
				<span class="acc-title">Nomad</span>
				<span class="acc-desc">"I'm exploring the world, finding myself and discovering my true passions"</span>
				<span class="acc-icon">+</span>
			</summary>
			<div class="acc-content">
				<div class="acc-option">
					<h4>Volunteering <span>(free / low cost)</span></h4>
					<p>Support El Terreno’s mission through practical day-to-day tasks, such as cooking cleaning and manual labour</p>
					<a href="/programmes/volunteering" class="card-link">Learn more →</a>
				</div>
			</div>
		</details>

		<!-- Apprentice -->
		<details class="prog-accordion">
			<summary>
				<span class="acc-title">Apprentice</span>
				<span class="acc-desc">"I've chosen my direction and I'm ready to turn my studies into real-world experience"</span>
				<span class="acc-icon">+</span>
			</summary>
			<div class="acc-content">
				<div class="acc-option">
					<h4>Changemaker <span>(from $250 / week)</span></h4>
					<p>With professional support, deliver hands-on sustainable development projects that make an impact in low-income, indigenous communities</p>
					<a href="/programmes/internships" class="card-link">Learn more →</a>
				</div>
			</div>
		</details>

		<!-- Practitioner -->
		<details class="prog-accordion">
			<summary>
				<span class="acc-title">Practitioner</span>
				<span class="acc-desc">"I have solid professional experience and I'm ready to take on more responsibility and leadership"</span>
				<span class="acc-icon">+</span>
			</summary>
			<div class="acc-content">
				<div class="acc-option">
					<h4>Changemaker <span>(from $250 / week)</span></h4>
					<p>With professional support, grow your leadership skills through hands-on sustainable development projects that make an impact in low-income, indigenous communities</p>
					<a href="/programmes/internships" class="card-link">Learn more →</a>
				</div>
				<div class="acc-option">
					<h4>Associate <span>(free / low cost)</span></h4>
					<p>Use your high-level skills to support El Terreno’s growth in finance, marketing and business development</p>
					<a href="/programmes/associates" class="card-link">Learn more →</a>
				</div>
			</div>
		</details>

		<!-- Leader -->
		<details class="prog-accordion">
			<summary>
				<span class="acc-title">Leader</span>
				<span class="acc-desc">"I have built teams and delivered results, but I'm questioning what it's all for"</span>
				<span class="acc-icon">+</span>
			</summary>
			<div class="acc-content">
				<div class="acc-option">
					<h4>Changemaker <span>(from $250 / week)</span></h4>
					<p>Use your existing skills to lead hands-on sustainable development projects that make an impact in low-income, indigenous communities</p>
					<a href="/programmes/internships" class="card-link">Learn more →</a>
				</div>
				<div class="acc-option">
					<h4>Associate <span>(free / low cost)</span></h4>
					<p>Support El Terreno’s growth in finance, marketing and business development</p>
					<a href="/programmes/associates" class="card-link">Learn more →</a>
				</div>
			</div>
		</details>

		<!-- Mentor -->
		<details class="prog-accordion">
			<summary>
				<span class="acc-title">Mentor</span>
				<span class="acc-desc">"I have decades of experience and hard-won wisdom that I want to pass on while I still can"</span>
				<span class="acc-icon">+</span>
			</summary>
			<div class="acc-content">
				<div class="acc-option">
					<h4>Changemaker <span>(from $250 / week)</span></h4>
					<p>Share your expertise to guide sustainable development projects that make an impact in low-income, indigenous communities</p>
					<a href="/programmes/internships" class="card-link">Learn more →</a>
				</div>
				<div class="acc-option">
					<h4>Associate <span>(free / low cost)</span></h4>
					<p>Support El Terreno’s growth in finance, marketing and business development</p>
					<a href="/programmes/associates" class="card-link">Learn more →</a>
				</div>
			</div>
		</details>
	</div>
</section>

<!-- ── BAND: quiz ── -->
<div class="band band-quiz"></div>

<!-- ── SECTION 3: Find Your Fit ── -->
<section class="prog-section" id="apply">
	<p class="s-label">02 — Not Sure Where To Start?</p>
	<div class="quiz-inner">
		<div class="quiz-left">
			<h2>Find Your Fit</h2>
			<p>Take our programme quiz to get a personalised recommendation in under two minutes, or get in touch with our team directly and we'll help you find the right path.</p>
		</div>
		<div class="quiz-right">
			<a
				href="https://el-terreno.involve.me/programme-quiz"
				target="_blank"
				rel="noopener noreferrer"
				class="btn-quiz"
			>Take The Quiz</a>
			<a href="/contact" class="btn-contact-ghost">Contact Us</a>
		</div>
	</div>
</section>

<!-- ── BAND: proof ── -->
<div class="band band-proof"></div>

<!-- ── SECTION 4: Social Proof ── -->
<section class="prog-section" id="social-proof">
	<p class="s-label">03 — What People Say</p>
	<h2>Social Proof</h2>

	<div class="ratings-row">
		<div class="rating-badge">
			<span class="stars">★★★★★</span>
			<span class="platform">GoOverseas</span>
		</div>
		<div class="rating-badge">
			<span class="stars">★★★★★</span>
			<span class="platform">Volunteer World</span>
		</div>
		<div class="rating-badge">
			<span class="stars">★★★★★</span>
			<span class="platform">Google</span>
		</div>
	</div>

	<div class="quotes-grid">
		<div class="quote-card">
			<p class="quote-text">"The mentoring was genuinely world-class. I got access to professionals I never would have met otherwise, and their guidance shaped the direction of my career."</p>
			<p class="quote-attr">— Lukas F., Internship, Switzerland</p>
		</div>
		<div class="quote-card">
			<p class="quote-text">"I expected to feel like an outsider. Instead I felt like I was part of something real — something being built with care and intention."</p>
			<p class="quote-attr">— Priya M., Volunteering, Canada</p>
		</div>
		<div class="quote-card">
			<p class="quote-text">"The Sabbatical programme gave me the space to think clearly about my career for the first time in years. I left knowing exactly what I needed to do next."</p>
			<p class="quote-attr">— Sarah W., Sabbatical, Australia</p>
		</div>
	</div>
</section>

<style>
	/* ── Hero ── */
	.prog-hero {
		background: #F9BA47;
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 3.5rem 5rem 4rem;
	}

	.prog-hero .eyebrow {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #9B372F;
		margin-bottom: 0.6rem;
		display: block;
	}

	.prog-hero h1 {
		color: #22395C;
		font-size: clamp(3rem, 7vw, 5.5rem);
		line-height: 0.92;
		margin-bottom: 1.25rem;
		letter-spacing: -0.02em;
	}

	.mission-line {
		font-size: 1rem;
		max-width: 580px;
		line-height: 1.65;
		margin: 0 auto;
	}

	.mission-line em {
		font-style: italic;
	}

	.tinkuy {
		color: #9B372F;
		font-style: italic;
	}

	.mission-text {
		color: #1E2134;
	}

	/* ── Section bands ── */
	.band {
		height: 6px;
	}

	.band-video {
		background: linear-gradient(90deg, #F9BA47, #DA7939, #F9BA47);
	}

	.band-quad {
		background: linear-gradient(90deg, #F9BA47, #22395C, #F9BA47);
	}

	.band-quiz {
		background: linear-gradient(90deg, #F9BA47, #9B372F, #F9BA47);
	}

	.band-proof {
		background: linear-gradient(90deg, #F9BA47, #1F6366, #F9BA47);
	}

	/* ── Shared section ── */
	.prog-section {
		background: #F9BA47;
		padding: 5rem;
		text-align: center;
	}

	.s-label {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: #9B372F;
		margin-bottom: 0.75rem;
		display: block;
	}

	.prog-section h2 {
		color: #22395C;
		font-size: clamp(2rem, 3.5vw, 3rem);
		line-height: 0.95;
		margin-bottom: 1.5rem;
	}

	/* ── Video ── */
	/* ── Accordion ── */
	.accordion-wrapper {
		max-width: 800px;
		margin: 0 auto;
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.prog-accordion {
		background: #1E2134;
		border-radius: 4px;
		overflow: hidden;
		border-left: 3px solid transparent;
		transition: border-color 0.2s;
	}
	
	.prog-accordion:hover {
		border-left-color: #58BA96;
	}

	.prog-accordion summary {
		display: flex;
		align-items: center;
		padding: 1.5rem;
		cursor: pointer;
		list-style: none;
		position: relative;
		transition: background 0.2s;
	}
	
	.prog-accordion summary::-webkit-details-marker {
		display: none;
	}

	.prog-accordion summary:hover {
		background: #242840;
	}

	.acc-title {
		font-size: 1rem;
		font-weight: 900;
		color: #F9BA47;
		text-transform: uppercase;
		flex-shrink: 0;
		min-width: 140px;
	}

	.acc-desc {
		font-size: 0.85rem;
		color: rgba(255, 255, 254, 0.7);
		font-style: italic;
		padding-right: 2rem;
		flex: 1;
	}

	.acc-icon {
		font-size: 1.5rem;
		color: #58BA96;
		font-weight: 700;
		position: absolute;
		right: 1.5rem;
		top: 50%;
		transform: translateY(-50%);
		transition: transform 0.2s;
	}

	.prog-accordion[open] .acc-icon {
		transform: translateY(-50%) rotate(45deg);
	}

	.acc-content {
		padding: 0 1.5rem 1.5rem;
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
	}
	
	@media (min-width: 600px) {
		.acc-content {
			flex-direction: row;
		}
	}

	.acc-option {
		background: rgba(255, 255, 255, 0.05);
		padding: 1.5rem;
		border-radius: 4px;
		flex: 1;
		border-top: 2px solid #58BA96;
		transition: background 0.2s;
	}
	
	.acc-option:hover {
		background: rgba(255, 255, 255, 0.08);
	}

	.acc-option h4 {
		color: #F9BA47;
		font-size: 0.9rem;
		font-weight: 700;
		text-transform: uppercase;
		margin-bottom: 0.25rem;
	}

	.acc-option h4 span {
		font-size: 0.65rem;
		color: rgba(255, 255, 254, 0.5);
		text-transform: none;
		font-weight: 500;
		display: inline-block;
		margin-left: 0.5rem;
	}

	.acc-option p {
		color: rgba(255, 255, 254, 0.7);
		font-size: 0.82rem;
		line-height: 1.5;
		margin-bottom: 1.5rem;
	}

	.card-link {
		color: rgba(249, 186, 71, 0.4);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition: color 0.15s;
		display: block;
		text-decoration: none;
	}

	.acc-option:hover .card-link {
		color: #F9BA47;
	}

	/* ── Quiz ── */
	.quiz-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 3rem;
		max-width: 900px;
		margin: 0 auto;
		text-align: left;
	}

	.quiz-left {
		flex: 1;
	}

	.quiz-left h2 {
		margin-bottom: 0.75rem;
	}

	.quiz-left p {
		color: rgba(34, 57, 92, 0.7);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.quiz-right {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	.btn-quiz {
		display: inline-block;
		padding: 0.75rem 1.8rem;
		background: #F9BA47;
		color: #1E2134;
		font-size: 0.72rem;
		font-weight: 900;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 24px;
		border: 1.5px solid #F9BA47;
		transition: all 0.2s;
		white-space: nowrap;
		text-align: center;
	}

	.btn-quiz:hover {
		background: transparent;
		color: #1E2134;
		border-color: rgba(30, 33, 52, 0.4);
	}

	.btn-contact-ghost {
		display: inline-block;
		padding: 0.75rem 1.8rem;
		background: transparent;
		color: rgba(255, 255, 254, 0.6);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 24px;
		border: 1.5px solid rgba(255, 255, 255, 0.25);
		transition: all 0.2s;
		white-space: nowrap;
		text-align: center;
	}

	.btn-contact-ghost:hover {
		color: rgba(255, 255, 254, 0.9);
		border-color: rgba(255, 255, 255, 0.5);
	}

	/* ── Ratings ── */
	.ratings-row {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		flex-wrap: wrap;
		margin-bottom: 2.5rem;
	}

	.rating-badge {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		padding: 0.75rem 1.2rem;
		background: rgba(34, 57, 92, 0.1);
		border: 1.5px solid rgba(34, 57, 92, 0.15);
	}

	.stars {
		color: #DA7939;
		font-size: 0.9rem;
		letter-spacing: 0.1em;
	}

	.platform {
		color: rgba(34, 57, 92, 0.5);
		font-size: 0.62rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	/* ── Quote cards ── */
	.quotes-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		max-width: 1100px;
		margin: 0 auto;
	}

	.quote-card {
		background: rgba(34, 57, 92, 0.06);
		padding: 1.5rem;
		text-align: left;
	}

	.quote-text {
		color: rgba(34, 57, 92, 0.75);
		font-style: italic;
		font-size: 0.9rem;
		line-height: 1.65;
		margin-bottom: 0.75rem;
	}

	.quote-attr {
		color: #9B372F;
		font-size: 0.6rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.prog-hero {
			padding: 3rem 2rem;
		}

		.prog-section {
			padding: 3.5rem 2rem;
		}

		.testimonial-strip {
			grid-template-columns: 1fr;
		}

		.quotes-grid {
			grid-template-columns: 1fr;
		}

		.quadrant-grid {
			grid-template-columns: 1fr;
		}

		.quadrant-wrapper {
			grid-template-columns: 36px 1fr;
		}

		.prog-card {
			min-height: 180px;
		}

		.quiz-inner {
			flex-direction: column;
			text-align: center;
		}

		.quiz-right {
			width: 100%;
			align-items: center;
		}
	}
</style>
