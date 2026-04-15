<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Events"
	description="El Terreno's calendar is shaped by the land, the seasons and the ancestral Andean calendar. Festivals, ceremonies, workshops and community gatherings in Guaranda, Ecuador."
	section="Visits"
	path="/tourism/events"
/>

<section class="section-banner events-banner">
	<span class="eyebrow">Visit</span>
	<h1>Events</h1>
	<p>El Terreno's calendar is shaped by the land, the seasons and the ancestral Andean calendar. Come for an event and discover a living tradition.</p>
</section>

<div class="page-content">
	<div class="two-col">
		<main>
			<div class="content-block">
				<h3>Upcoming Events</h3>
				<div class="placeholder">[ Upcoming events — coming soon ]</div>
			</div>

			<div class="content-block">
				<h3>The Andean Calendar</h3>
				<p>The indigenous communities of the Andes have always organised their year around the cycles of the sun, the moon and the earth. The four Raymis — great celebrations — mark the solstices and equinoxes and remain at the heart of Kichwa cultural life.</p>
				<ul>
					<li><strong>Pawkar Raymi</strong> (February / March) — The flowering festival, celebrating the beginning of harvest season with music, dance and offerings to Pachamama.</li>
					<li><strong>Inti Raymi</strong> (June) — The Festival of the Sun, the most important Raymi in the Andean calendar. A time of gratitude, ceremony and communal celebration.</li>
					<li><strong>Killa Raymi</strong> (September) — The Festival of the Moon, honouring feminine energy, water and the cycles of nature.</li>
					<li><strong>Kapak Raymi</strong> (December) — The Festival of Leadership, marking the winter solstice and the initiation of new community leaders.</li>
				</ul>
			</div>

			<div class="content-block">
				<h3>Carnaval de Guaranda</h3>
				<p>Guaranda's carnival is legendary across Ecuador — a five-day explosion of music, costumes, street food and the infamous agua de carnaval water fights. Held each February, it draws visitors from across the country and is one of the most joyful and chaotic events in the Andean calendar. El Terreno is ideally placed to experience it properly, embedded within the community rather than watching from the outside.</p>
			</div>
		</main>

		<aside class="sidebar">
			<div class="sidebar-box">
				<h4>Visit</h4>
				<a href="/tourism/events" class="current">Events</a>
				<a href="/tourism/accommodation">Accommodation & Space</a>
				<a href="/tourism">Visit Overview</a>
			</div>

			<div class="sidebar-box">
				<h4>Plan Your Visit</h4>
				<p>Ready to visit El Terreno? Get in touch with our team to discuss dates, accommodation and activities.</p>
				<br />
				<a href="/contact" class="btn-std">Contact Us</a>
			</div>
		</aside>
	</div>
</div>

<style>
	.events-banner {
		background: #9B372F;
		color: #FFFFFE;
	}

	.events-banner .eyebrow {
		color: #DA7939;
		opacity: 1;
	}

	.events-banner h1 {
		color: #FFFFFE;
	}

	.events-banner p {
		color: rgba(255, 255, 254, 0.75);
		opacity: 1;
	}

	.sidebar-box .btn-std {
		display: inline-block;
	}
</style>
