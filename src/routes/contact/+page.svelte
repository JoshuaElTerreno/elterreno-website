<script lang="ts">
	import { enhance } from '$app/forms';
	import Seo from '$lib/components/Seo.svelte';
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
			<div class="social-links">
				<a href="https://instagram.com/elterreno" target="_blank" rel="noopener noreferrer" class="social-row">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
					</svg>
					<span>Instagram</span>
				</a>
				<a href="https://facebook.com/elterreno" target="_blank" rel="noopener noreferrer" class="social-row">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
					</svg>
					<span>Facebook</span>
				</a>
				<a href="https://youtube.com/@elterreno" target="_blank" rel="noopener noreferrer" class="social-row">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
					</svg>
					<span>YouTube</span>
				</a>
				<a href="https://linkedin.com/company/elterreno" target="_blank" rel="noopener noreferrer" class="social-row">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
					</svg>
					<span>LinkedIn</span>
				</a>
				<a href="https://tiktok.com/@elterreno" target="_blank" rel="noopener noreferrer" class="social-row">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
						<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
					</svg>
					<span>TikTok</span>
				</a>
			</div>
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

	/* ── Social links ── */
	.social-links {
		display: flex;
		flex-direction: column;
	}

	.social-row {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: none;
		font-size: 0.88rem;
		padding: 0.55rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.07);
		transition: color 0.15s;
	}

	.social-row:last-child {
		border-bottom: none;
	}

	.social-row:hover {
		color: #58BA96;
	}

	.social-row svg {
		flex-shrink: 0;
		width: 18px;
		height: 18px;
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
