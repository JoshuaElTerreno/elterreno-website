<script lang="ts">
	import { enhance } from '$app/forms';
	import Seo from '$lib/components/Seo.svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<Seo
	title="Contact"
	description="Get in touch with El Terreno. Whether you're interested in a programme, planning a visit, supporting our work, or exploring a partnership — we'd love to hear from you."
	section="El Terreno"
	path="/contact"
/>

<section class="hero">
	<p class="eyebrow">El Terreno</p>
	<h1>Contact</h1>
	<p class="hero-sub">Get in touch — whether you're interested in a programme, want to visit, support our work, or explore a partnership.</p>
</section>

<div class="body-grid">
	<div class="form-side">
		{#if form?.success}
			<p class="form-success">Thanks! We'll be in touch soon.</p>
		{:else}
		{#if form?.error}
			<p class="form-error">{form.error}</p>
		{/if}
		<form method="POST" use:enhance>
			<div class="field">
				<label for="name">Your name</label>
				<input id="name" name="name" type="text" placeholder="Full name" />
			</div>

			<div class="field">
				<label for="email">Email address</label>
				<input id="email" name="email" type="email" placeholder="your@email.com" />
			</div>

			<div class="field">
				<label for="interest">I'm interested in…</label>
				<select id="interest" name="interest">
					<option value="">Select an option</option>
					<option value="volunteering">Practical Service Volunteering</option>
					<option value="internships">International Changemaker Internships</option>
					<option value="residency">Conscious Impact Residency</option>
					<option value="associates">Professional Associate Positions</option>
					<option value="tourism">Visiting / Tourism</option>
					<option value="digital-nomad">Digital Nomad Stay</option>
					<option value="donating">Donating / Supporting</option>
					<option value="partnership">Partnership / Collaboration</option>
					<option value="general">General enquiry</option>
				</select>
			</div>

			<div class="field">
				<label for="message">Message</label>
				<textarea id="message" name="message" rows="5" placeholder="Tell us about yourself…"></textarea>
			</div>

			<div class="field checkbox-field">
				<label class="checkbox-label">
					<input type="checkbox" name="newsletter" />
					<span>Subscribe to our newsletter</span>
				</label>
			</div>

			<button type="submit" class="submit-btn">Send Message</button>
		</form>
		{/if}
	</div>

	<aside class="sidebar">
		<div class="sidebar-block">
			<h4>Direct Contact</h4>
			<div class="contact-links">
				<a href="mailto:hello@elterreno.org">hello@elterreno.org</a>
				<a href="tel:+593999999999">+593 99 999 9999</a>
				<a href="https://wa.me/593999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a>
			</div>
		</div>

		<div class="sidebar-block">
			<h4>Find Us</h4>
			<p class="address">Atandahua, Guaranda / Bolívar, Ecuador</p>
			<div class="map-placeholder">[ Map coming soon ]</div>
		</div>

		<div class="sidebar-block">
			<h4>Follow Us</h4>
			<SocialLinks variant="list" />
		</div>
	</aside>
</div>

<style>
	/* ── Page background ── */
	:global(body) {
		background: #1E2134;
	}

	/* ── Hero ── */
	.hero {
		background: #1E2134;
		text-align: center;
		min-height: 40vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3.5rem 5rem 4rem;
	}

	.eyebrow {
		color: #58BA96;
		font-size: 0.65rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		margin: 0 0 0.75rem;
	}

	.hero h1 {
		color: #F9BA47;
		font-size: clamp(2.8rem, 6vw, 5rem);
		line-height: 0.95;
		margin: 0 0 1.25rem;
	}

	.hero-sub {
		color: rgba(255, 255, 255, 0.6);
		font-size: 1rem;
		max-width: 560px;
		line-height: 1.65;
		margin: 0;
	}

	/* ── Body grid ── */
	.body-grid {
		display: grid;
		grid-template-columns: 1fr 340px;
		background: #1E2134;
		min-height: 60vh;
	}

	/* ── Form side ── */
	.form-side {
		padding: 4rem 5rem;
		border-right: 1px solid rgba(255, 255, 255, 0.08);
	}

	form {
		max-width: 540px;
	}

	.field {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-bottom: 1.5rem;
	}

	label {
		color: #58BA96;
		font-size: 0.62rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	input[type='text'],
	input[type='email'],
	select,
	textarea {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.12);
		color: #FFFFFE;
		padding: 0.7rem 0.9rem;
		font-size: 0.9rem;
		border-radius: 4px;
		outline: none;
		font-family: inherit;
		transition: border-color 0.15s;
		width: 100%;
		box-sizing: border-box;
	}

	input[type='text']:focus,
	input[type='email']:focus,
	select:focus,
	textarea:focus {
		border-color: #58BA96;
	}

	select {
		appearance: none;
		cursor: pointer;
	}

	select option {
		background: #1E2134;
		color: #FFFFFE;
	}

	textarea {
		resize: vertical;
		min-height: 120px;
	}

	input::placeholder,
	textarea::placeholder {
		color: rgba(255, 255, 255, 0.3);
	}

	/* ── Checkbox ── */
	.checkbox-field {
		flex-direction: row;
	}

	.checkbox-label {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		cursor: pointer;
		color: rgba(255, 255, 255, 0.7);
		font-size: 0.85rem;
		letter-spacing: normal;
		text-transform: none;
	}

	.checkbox-label input[type='checkbox'] {
		width: 16px;
		height: 16px;
		accent-color: #58BA96;
		cursor: pointer;
		flex-shrink: 0;
	}

	/* ── Form feedback ── */
	.form-success {
		color: #58BA96;
		background: rgba(88, 186, 150, 0.1);
		border: 1px solid rgba(88, 186, 150, 0.3);
		border-radius: 4px;
		padding: 1rem 1.25rem;
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
	}

	.form-error {
		color: #F9BA47;
		background: rgba(249, 186, 71, 0.1);
		border: 1px solid rgba(249, 186, 71, 0.3);
		border-radius: 4px;
		padding: 1rem 1.25rem;
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
	}

	/* ── Submit button ── */
	.submit-btn {
		background: #9B372F;
		color: #F9BA47;
		border: none;
		padding: 0.85rem 2.2rem;
		border-radius: 24px;
		font-size: 0.9rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		cursor: pointer;
		transition: opacity 0.15s;
		font-family: inherit;
		margin-top: 0.5rem;
	}

	.submit-btn:hover {
		opacity: 0.88;
	}

	/* ── Sidebar ── */
	.sidebar {
		padding: 4rem 3rem;
	}

	.sidebar-block {
		margin-bottom: 2.5rem;
	}

	.sidebar-block h4 {
		color: #58BA96;
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		margin: 0 0 0.75rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #F9BA47;
	}

	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.contact-links a {
		color: rgba(255, 255, 255, 0.75);
		text-decoration: none;
		font-size: 0.88rem;
		transition: color 0.15s;
	}

	.contact-links a:hover {
		color: #58BA96;
	}

	.address {
		color: rgba(255, 255, 255, 0.75);
		font-size: 0.88rem;
		line-height: 1.5;
		margin: 0 0 0.75rem;
	}

	.map-placeholder {
		height: 120px;
		border: 1px dashed rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(255, 255, 255, 0.2);
		font-size: 0.78rem;
		border-radius: 4px;
	}

	/* ── Responsive ── */
	@media (max-width: 900px) {
		.hero {
			padding: 3rem 2rem;
			min-height: 35vh;
		}

		.body-grid {
			grid-template-columns: 1fr;
		}

		.form-side {
			padding: 3rem 2rem;
			border-right: none;
			border-bottom: 1px solid rgba(255, 255, 255, 0.08);
		}

		.sidebar {
			padding: 3rem 2rem;
		}
	}
</style>
