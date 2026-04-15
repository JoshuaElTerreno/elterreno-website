import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name')?.toString().trim();
		const email = data.get('email')?.toString().trim();
		const interest = data.get('interest')?.toString();
		const message = data.get('message')?.toString().trim();
		const newsletter = data.get('newsletter') === 'on';

		// Basic validation
		if (!name || !email || !message) {
			return fail(400, { error: 'Please fill in all required fields.', name, email, interest, message, newsletter });
		}

		// TODO: wire up email sending (e.g. Resend, SendGrid, or Nodemailer)
		console.log('Contact form submission:', { name, email, interest, message, newsletter });

		return { success: true };
	}
};
