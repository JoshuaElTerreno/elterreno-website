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
		<em><span class="tinkuy">Tinkuy</span> — </em>
		<span class="mission-text">To be a bridge between modern and ancestral thought, building the next generation of conscious global leaders.</span>
	</p>
</section>

<!-- ── BAND: video ── -->
<div class="band band-video"></div>

<!-- ── SECTION 1: See It For Yourself ── -->
<section class="prog-section" id="video">
	<p class="s-label">01 — See It For Yourself</p>
	<h2>Life At El Terreno</h2>

	<div class="video-placeholder">
		<span>[ Video — coming soon ]</span>
	</div>
	<p class="video-desc">A short film of daily life, community interaction and the landscape of Bolívar, showing what it truly means to live and work at El Terreno.</p>

	<div class="testimonial-strip">
		<div class="testimonial-cell">
			<p class="t-text">"El Terreno changed how I see development work completely. I came with answers and left with better questions."</p>
			<p class="t-attr">— Maria S., Internship, Germany</p>
		</div>
		<div class="testimonial-cell">
			<p class="t-text">"The combination of real community work, mentoring and living in the Andes was unlike any experience I'd had before."</p>
			<p class="t-attr">— Thomas K., Associate, Netherlands</p>
		</div>
		<div class="testimonial-cell">
			<p class="t-text">"I came for three months and stayed for six. That says everything you need to know."</p>
			<p class="t-attr">— Amara D., Volunteering, UK</p>
		</div>
	</div>
</section>

<!-- ── BAND: quad ── -->
<div class="band band-quad"></div>

<!-- ── SECTION 2: Find Your Programme ── -->
<section class="prog-section" id="programmes">
	<p class="s-label">02 — Choose Your Path</p>
	<h2>Find Your Programme</h2>
	<p class="section-desc">A wide range of ways to participate in El Terreno's work — from short volunteering placements to long-term professional associate roles. Find what fits your stage of life and the kind of impact you want to make.</p>

	<div class="quadrant-wrapper">
		<span class="axis-y-top">Community Impact</span>
		<div class="quadrant-inner">
			<div class="quadrant-grid">
				<!-- top-left: Internships -->
				<a href="/programmes/internships" class="prog-card prog-card-internships">
					<span class="quadrant-tag">More Experience · Community Impact</span>
					<h3>International Changemaker Internships</h3>
					<span class="life-stage">For Emerging Talent</span>
					<p>Personalised, hands-on internships for students and graduates. 18 specialist tracks. Build your career while making a real difference.</p>
					<span class="card-link">Learn more →</span>
				</a>
				<!-- top-right: Sabbatical -->
				<a href="/programmes/sabbatical" class="prog-card prog-card-sabbatical">
					<span class="quadrant-tag">Less Experience · Community Impact</span>
					<h3>Conscious Impact Residency</h3>
					<span class="life-stage">For Skilled Professionals</span>
					<p>Step away from the grind. Use your professional skills to create genuine impact while reconnecting with what matters most, in a stunning Andean setting.</p>
					<span class="card-link">Learn more →</span>
				</a>
				<!-- bottom-left: Volunteering -->
				<a href="/programmes/volunteering" class="prog-card prog-card-volunteering">
					<span class="quadrant-tag">Less Experience · Organisational Support</span>
					<h3>Practical Service Volunteering</h3>
					<span class="life-stage">For Emerging Talent</span>
					<p>Roll up your sleeves and contribute directly to El Terreno's operations, events and community projects. No professional track required — just commitment.</p>
					<span class="card-link">Learn more →</span>
				</a>
				<!-- bottom-right: Associates -->
				<a href="/programmes/associates" class="prog-card prog-card-associates">
					<span class="quadrant-tag">More Experience · Organisational Support</span>
					<h3>Professional Associate Positions</h3>
					<span class="life-stage">For Experienced Leaders</span>
					<p>Embed your professional expertise into El Terreno's structure. Take ownership of a department, lead a strategic workstream, or help scale what we've built.</p>
					<span class="card-link">Learn more →</span>
				</a>
			</div>
			<div class="axis-x-row">
				<span class="axis-x axis-x-left">← Less Experience</span>
				<span class="axis-x axis-x-right">More Experience →</span>
			</div>
		</div>
		<span class="axis-y-bottom">Organisational Support</span>
	</div>
</section>

<!-- ── BAND: quiz ── -->
<div class="band band-quiz"></div>

<!-- ── SECTION 3: Find Your Fit ── -->
<section class="prog-section" id="apply">
	<p class="s-label">03 — Not Sure Where To Start?</p>
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
	<p class="s-label">04 — What People Say</p>
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
		align-items: flex-start;
		justify-content: flex-end;
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
	}

	.mission-line em {
		font-style: italic;
	}

	.tinkuy {
		color: #9B372F;
		font-style: italic;
	}

	.mission-text {
		color: rgba(34, 57, 92, 0.6);
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
	.video-placeholder {
		max-width: 800px;
		margin: 0 auto 1.5rem;
		aspect-ratio: 16 / 9;
		border: 2px dashed rgba(34, 57, 92, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(34, 57, 92, 0.4);
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 0.05em;
	}

	.video-desc {
		color: rgba(34, 57, 92, 0.7);
		font-size: 0.95rem;
		max-width: 600px;
		margin: 0 auto 2.5rem;
		line-height: 1.6;
	}

	/* ── Testimonials ── */
	.testimonial-strip {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5px;
		max-width: 1100px;
		margin: 0 auto;
	}

	.testimonial-cell {
		background: #F9BA47;
		padding: 1.8rem;
		text-align: left;
	}

	.t-text {
		color: rgba(34, 57, 92, 0.8);
		font-style: italic;
		font-size: 0.9rem;
		line-height: 1.65;
		margin-bottom: 0.75rem;
	}

	.t-attr {
		color: #9B372F;
		font-size: 0.62rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: 700;
		font-style: normal;
	}

	/* ── Quadrant ── */
	.section-desc {
		color: rgba(34, 57, 92, 0.7);
		font-size: 0.95rem;
		max-width: 620px;
		margin: 0 auto 2.5rem;
		line-height: 1.6;
	}

	.quadrant-wrapper {
		display: grid;
		grid-template-columns: 56px 1fr;
		grid-template-rows: 1fr 56px;
		max-width: 900px;
		margin: 0 auto;
		gap: 0;
	}

	.axis-y-top,
	.axis-y-bottom {
		writing-mode: vertical-rl;
		transform: rotate(180deg);
		text-align: center;
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: rgba(88, 186, 150, 0.7);
		grid-row: 1;
		grid-column: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.axis-y-bottom {
		grid-row: 2;
		grid-column: 1;
		transform: rotate(180deg);
	}

	.quadrant-inner {
		grid-row: 1 / 3;
		grid-column: 2;
		display: flex;
		flex-direction: column;
	}

	.quadrant-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2px;
		background: rgba(88, 186, 150, 0.12);
		flex: 1;
	}

	.axis-x-row {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 0.25rem 0;
	}

	.axis-x {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.15em;
		text-transform: uppercase;
		color: rgba(88, 186, 150, 0.7);
	}

	/* Programme cards */
	.prog-card {
		background: #1E2134;
		padding: 2.2rem 2rem;
		display: flex;
		flex-direction: column;
		min-height: 230px;
		text-decoration: none;
		transition: background 0.2s;
		text-align: left;
	}

	.prog-card:hover {
		background: #242840;
	}

	.prog-card-internships {
		border-top: 3px solid #58BA96;
	}

	.prog-card-sabbatical {
		border-top: 3px solid #F9BA47;
	}

	.prog-card-volunteering {
		border-top: 3px solid #9B372F;
	}

	.prog-card-associates {
		border-top: 3px solid #22395C;
	}

	.quadrant-tag {
		font-size: 0.56rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(88, 186, 150, 0.45);
		margin-bottom: 0.6rem;
		display: block;
	}

	.prog-card h3 {
		color: #F9BA47;
		font-size: 0.95rem;
		font-weight: 900;
		text-transform: uppercase;
		margin-bottom: 0.4rem;
		line-height: 1.2;
	}

	.life-stage {
		color: rgba(88, 186, 150, 0.65);
		font-size: 0.62rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 0.75rem;
		display: block;
	}

	.prog-card p {
		color: rgba(255, 255, 254, 0.5);
		font-size: 0.82rem;
		line-height: 1.55;
		flex: 1;
		margin-bottom: 0.75rem;
	}

	.card-link {
		color: rgba(249, 186, 71, 0.4);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		transition: color 0.15s;
		display: block;
	}

	.prog-card:hover .card-link {
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
