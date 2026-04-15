<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Visits"
	description="Discover Guaranda, Ecuador — breathtaking Andean sunsets, ancestral indigenous culture, the Chimborazo volcano, jungle waterfalls and inspiring community projects at El Terreno."
	section="Cultural Exchange Centre"
	path="/tourism"
/>

<!-- ── HERO ── -->
<section class="tourism-hero">
	<p class="eyebrow">Cultural Exchange Centre</p>
	<h1>Visits</h1>
	<p class="sub">Breathtaking sunsets above the clouds, ancestral indigenous culture, steamy jungle waterfalls, inspiring community projects and the majestic Chimborazo volcano — all on your doorstep.</p>
</section>

<!-- ── BAND ── -->
<div class="band band-location"></div>

<!-- ── SECTION 1: Location & Geography ── -->
<section class="tourism-section" id="location">
	<p class="s-label">01 — Where We Are</p>
	<h2>Location & Geography</h2>

	<p class="section-desc">El Terreno is based in the community of Atandahua, on the outskirts of Guaranda — capital of the Bolívar province in the central Andes of Ecuador. At 3,800 metres above sea level, the landscape shifts daily between glacial páramo, cloud forest and subtropical valleys.</p>

	<div class="stats-strip">
		<div class="stat-item">
			<span class="stat-number">3,800m</span>
			<span class="stat-label">Altitude</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">6,268m</span>
			<span class="stat-label">Chimborazo Height</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">3.5 hrs</span>
			<span class="stat-label">From Guayaquil or Quito</span>
		</div>
		<div class="stat-item">
			<span class="stat-number">17</span>
			<span class="stat-label">Communities Nearby</span>
		</div>
	</div>

	<div class="getting-here">
		<h3>Getting Here</h3>
		<ul class="getting-list">
			<li>From Guayaquil — approximately 3.5 hours by road</li>
			<li>From Quito — approximately 3.5 hours by road</li>
			<li>Nearest airports: GYE (Guayaquil) or UIO (Quito)</li>
			<li>In Guaranda, taxis to El Terreno take around 10 minutes</li>
		</ul>
	</div>

	<div class="region-block">
		<h3>The Region</h3>
		<p>The Bolívar province is one of Ecuador's least-visited and most spectacular. The landscape ranges from glacial páramo at the foot of Chimborazo to dense cloud forest and the beginnings of the Amazon basin. The region is home to a rich mix of Kichwa and mestizo communities with living traditions that predate colonial rule.</p>
	</div>
</section>

<!-- ── BAND ── -->
<div class="band band-activities"></div>

<!-- ── SECTION 2: Activities ── -->
<section class="tourism-section" id="activities">
	<p class="s-label">02 — What To Do</p>
	<h2>Tourism Activities</h2>

	<p class="section-desc">We blend innovative ideas with local tradition to offer experiences that are genuinely off the beaten track. Every activity is led or co-led by local community members.</p>

	<div class="activities-grid">
		<div class="activity-card">
			<h4>Chimborazo Volcano</h4>
			<p>Trekking and wildlife watching on the slopes of the world's closest mountain to the sun. Home to vicuñas, wild horses and extraordinary high-altitude flora.</p>
		</div>
		<div class="activity-card">
			<h4>Cloud Forest & Waterfalls</h4>
			<p>Guided hikes through tropical cloud forest to hidden waterfalls and natural swimming holes. The biodiversity here is extraordinary — expect orchids, hummingbirds and howler monkeys.</p>
		</div>
		<div class="activity-card">
			<h4>Indigenous Culture</h4>
			<p>Visits to Kichwa communities, weaving workshops with local artisans, traditional cooking experiences and ceremonies guided by community elders.</p>
		</div>
		<div class="activity-card">
			<h4>Carnaval de Guaranda</h4>
			<p>Ecuador's most notorious carnival, held each February. Five days of music, dancing, local food and the famous water fights that take over the entire region.</p>
		</div>
		<div class="activity-card">
			<h4>Community Projects</h4>
			<p>Visit El Terreno's active community projects — from agroforestry plots and community gardens to education programmes and local enterprise initiatives.</p>
		</div>
		<div class="activity-card">
			<h4>Sunset Above the Clouds</h4>
			<p>A short hike above the cloud line to watch the sun set over the Andes. One of the most consistently spectacular natural experiences in Ecuador.</p>
		</div>
	</div>

	<div class="visit-cta">
		<a href="/contact" class="btn-book">Book Activities</a>
	</div>
</section>

<!-- ── BAND ── -->
<div class="band band-accommodation"></div>

<!-- ── SECTION 3: Accommodation ── -->
<section class="tourism-section" id="accommodation">
	<p class="s-label">03 — Where To Stay</p>
	<h2>Accommodation</h2>

	<p class="section-desc">El Terreno offers a range of accommodation options for visitors, programme participants and groups. All spaces are on-site, embedded within the working community — not a hotel, but a living place.</p>

	<div class="accommodation-grid">
		<div class="acc-card">
			<h4>Programme Accommodation</h4>
			<p>Shared rooms with full board for volunteers, interns and programme participants. Included in all programme placements. Community meals, common spaces and a genuine sense of belonging.</p>
		</div>
		<div class="acc-card">
			<h4>Guest Rooms</h4>
			<p>Private guest rooms for independent visitors and short-stay travellers. Simple, clean and comfortable — with spectacular views and full access to El Terreno's facilities.</p>
		</div>
		<div class="acc-card">
			<h4>Digital Nomad Stays</h4>
			<p>Week or month-long stays for remote workers and freelancers. Reliable internet, dedicated working spaces and a community of interesting people to think alongside.</p>
		</div>
		<div class="acc-card">
			<h4>Group & Retreat Space</h4>
			<p>El Terreno's facilities can accommodate groups of up to 30 for retreats, workshops and immersive programmes. Full catering and facilitation support available.</p>
		</div>
	</div>

	<div class="visit-cta">
		<a href="/contact" class="btn-book">Book Accommodation</a>
		<a href="/contact" class="btn-ghost-visit">Enquire</a>
	</div>
</section>

<style>
	/* ── Hero ── */
	.tourism-hero {
		background: #9B372F;
		min-height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 3.5rem 5rem 4rem;
	}

	.tourism-hero .eyebrow {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: #DA7939;
		margin-bottom: 0.6rem;
		display: block;
	}

	.tourism-hero h1 {
		color: #F9BA47;
		font-size: clamp(3rem, 7vw, 5.5rem);
		line-height: 0.92;
		margin-bottom: 1.25rem;
		letter-spacing: -0.02em;
	}

	.tourism-hero .sub {
		color: rgba(255, 255, 254, 0.65);
		font-size: 1.05rem;
		max-width: 620px;
		line-height: 1.65;
	}

	/* ── Bands ── */
	.band {
		height: 6px;
	}

	.band-location,
	.band-activities,
	.band-accommodation {
		background: linear-gradient(90deg, #9B372F, #DA7939, #9B372F);
	}

	/* ── Shared section ── */
	.tourism-section {
		background: #9B372F;
		color: #FFFFFE;
		padding: 5rem;
		text-align: center;
	}

	.s-label {
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: rgba(218, 121, 57, 0.8);
		margin-bottom: 0.75rem;
		display: block;
	}

	.tourism-section h2 {
		color: #F9BA47;
		font-size: clamp(2rem, 3.5vw, 3rem);
		line-height: 0.95;
		margin-bottom: 1.5rem;
	}

	.section-desc {
		color: rgba(255, 255, 254, 0.75);
		font-size: 0.95rem;
		max-width: 640px;
		margin: 0 auto 2.5rem;
		line-height: 1.65;
	}

	/* ── Stats strip ── */
	.stats-strip {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1px;
		max-width: 860px;
		margin: 0 auto 3rem;
		background: rgba(218, 121, 57, 0.2);
	}

	.stat-item {
		background: #9B372F;
		padding: 1.5rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.3rem;
	}

	.stat-number {
		font-size: 1.8rem;
		font-weight: 900;
		color: #FFFFFE;
		letter-spacing: -0.02em;
		line-height: 1;
	}

	.stat-label {
		font-size: 0.62rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: rgba(218, 121, 57, 0.8);
		text-align: center;
	}

	/* ── Getting here ── */
	.getting-here,
	.region-block {
		max-width: 640px;
		margin: 0 auto 2.5rem;
		text-align: left;
	}

	.getting-here h3,
	.region-block h3 {
		color: #DA7939;
		font-size: 0.65rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		margin-bottom: 0.75rem;
	}

	.getting-list {
		list-style: none;
		padding: 0;
		border-left: 2px solid rgba(218, 121, 57, 0.4);
		padding-left: 1.2rem;
	}

	.getting-list li {
		color: rgba(255, 255, 254, 0.8);
		font-size: 0.9rem;
		line-height: 1.6;
		padding: 0.25rem 0;
	}

	.region-block p {
		color: rgba(255, 255, 254, 0.8);
		font-size: 0.9rem;
		line-height: 1.65;
	}

	/* ── Activities grid ── */
	.activities-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5px;
		max-width: 1100px;
		margin: 0 auto 2rem;
		background: rgba(255, 255, 254, 0.08);
	}

	.activity-card {
		background: #9B372F;
		padding: 2rem 1.8rem;
		text-align: left;
	}

	.activity-card h4 {
		color: #F9BA47;
		font-size: 0.88rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin-bottom: 0.6rem;
	}

	.activity-card p {
		color: rgba(255, 255, 254, 0.65);
		font-size: 0.87rem;
		line-height: 1.6;
	}

	/* ── Accommodation grid ── */
	.accommodation-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
		max-width: 760px;
		margin: 0 auto 2rem;
		text-align: left;
	}

	.acc-card {
		background: rgba(255, 255, 254, 0.06);
		border: 1px solid rgba(255, 255, 254, 0.1);
		padding: 1.8rem;
	}

	.acc-card h4 {
		color: #F9BA47;
		font-size: 0.88rem;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		margin-bottom: 0.6rem;
	}

	.acc-card p {
		color: rgba(255, 255, 254, 0.72);
		font-size: 0.87rem;
		line-height: 1.6;
	}

	/* ── CTAs ── */
	.visit-cta {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.btn-book {
		display: inline-block;
		padding: 0.7rem 1.6rem;
		background: #22395C;
		color: #F9BA47;
		border: 1.5px solid #F9BA47;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 24px;
		transition: all 0.2s;
		white-space: nowrap;
	}

	.btn-book:hover {
		background: transparent;
		color: rgba(255, 255, 254, 0.9);
		border-color: rgba(255, 255, 254, 0.5);
	}

	.btn-ghost-visit {
		display: inline-block;
		padding: 0.7rem 1.6rem;
		background: transparent;
		color: rgba(255, 255, 254, 0.65);
		border: 1.5px solid rgba(255, 255, 255, 0.3);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		border-radius: 24px;
		transition: all 0.2s;
		white-space: nowrap;
	}

	.btn-ghost-visit:hover {
		color: rgba(255, 255, 254, 0.9);
		border-color: rgba(255, 255, 255, 0.55);
	}

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.tourism-hero {
			padding: 3rem 2rem;
		}

		.tourism-section {
			padding: 3.5rem 2rem;
		}

		.stats-strip {
			grid-template-columns: repeat(2, 1fr);
		}

		.activities-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.accommodation-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		.activities-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
