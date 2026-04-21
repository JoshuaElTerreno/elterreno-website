<script lang="ts">
	import { page } from '$app/state';

	const path = $derived(page.url.pathname);

	const isActive = $derived({
		about: path.startsWith('/about'),
		projects: path.startsWith('/projects'),
		programmes: path.startsWith('/programmes'),
		visits: path.startsWith('/tourism'),
		contact: path.startsWith('/contact')
	});
</script>

<header class="site-header">
	<div class="nav-main-row">
		<a href="/" class="site-logo">
			<img src="/logo.png" alt="El Terreno" class="nav-logo-badge" />
			<span class="site-logo-text">
				<span class="site-logo-name">El Terreno</span>
				<span class="site-logo-sub">Foundation &amp; Cultural Exchange Centre<br />in the Heart of the Ecuadorian Andes</span>
			</span>
		</a>
		<ul class="main-nav">
			<li>
				<a href="/about" class="section-about" class:active={isActive.about}>About Us</a>
				<ul class="dropdown">
					<li><a href="/about#philosophy">Our Philosophy</a></li>
					<li><a href="/about#mission">Vision &amp; Mission</a></li>
					<li><a href="/about#story">Our Story</a></li>
					<li><a href="/about#team">Our Team</a></li>
				</ul>
			</li>
			<li>
				<a href="/projects/projects" class="section-projects" class:active={isActive.projects}>Projects</a>
				<ul class="dropdown">
					<li><a href="/projects/projects#local-challenges">Local Challenges</a></li>
					<li><a href="/projects/projects#projects">Specific Projects</a></li>
					<li><a href="/projects/projects#partners">Partners</a></li>
					<li><a href="/projects/projects#impact">Impact</a></li>
					<li><a href="/projects/projects#donate">Donate</a></li>
				</ul>
			</li>
			<li>
				<a href="/programmes" class="section-programmes" class:active={isActive.programmes}>Programmes</a>
				<ul class="dropdown">
					<li><a href="/programmes/volunteering">Practical Service Volunteering</a></li>
					<li><a href="/programmes/changemakers">Changemakers</a></li>
					<li><a href="/programmes/associates">Professional Associate Positions</a></li>
				</ul>
			</li>
			<li>
				<a href="/tourism" class="section-visits" class:active={isActive.visits}>Visits</a>
				<ul class="dropdown">
					<li><a href="/tourism">The Region</a></li>
					<li><a href="/tourism#activities">Activities</a></li>
					<li><a href="/tourism/accommodation">Accommodation</a></li>
					<li><a href="/tourism/events">Events</a></li>
				</ul>
			</li>
			<li>
				<a href="/contact" class="section-contact" class:active={isActive.contact}>Contact</a>
			</li>
		</ul>
	</div>
</header>
