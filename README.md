# El Terreno Website

The public website for [elterrenoecuador.com](https://www.elterrenoecuador.com) — built with SvelteKit and deployed on Vercel.

---

## Running Locally

```sh
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
elterreno-website/
├── src/
│   ├── app.html              # HTML shell — favicon, fonts, global head tags
│   ├── routes/               # Every folder here = a page on the website
│   │   ├── +layout.svelte    # Shared wrapper around every page (Nav + Footer)
│   │   ├── +page.svelte      # Homepage (/)
│   │   ├── about/
│   │   │   └── +page.svelte  # /about
│   │   ├── contact/
│   │   │   ├── +page.svelte      # /contact — the contact form UI
│   │   │   └── +page.server.ts   # Form submission handler (server-side)
│   │   ├── foundation/
│   │   │   ├── +page.svelte      # /foundation
│   │   │   ├── projects/
│   │   │   ├── impact/
│   │   │   └── donate/
│   │   ├── programmes/
│   │   │   ├── +page.svelte      # /programmes
│   │   │   ├── volunteering/
│   │   │   ├── internships/
│   │   │   ├── sabbatical/
│   │   │   └── associates/
│   │   ├── tourism/
│   │   │   ├── +page.svelte      # /tourism
│   │   │   ├── accommodation/
│   │   │   └── events/
│   │   ├── og/
│   │   │   └── +server.ts    # Auto-generates Open Graph (social share) images
│   │   └── sitemap.xml/
│   │       └── +server.ts    # Auto-generates sitemap for search engines
│   └── lib/
│       ├── components/
│       │   ├── Nav.svelte    # Site navigation
│       │   ├── Footer.svelte # Site footer
│       │   └── Seo.svelte    # SEO tags (title, description, og:image)
│       └── config.ts         # Site-wide config (URL, name, etc.)
└── static/
    ├── logo.png              # Site logo (also used as favicon)
    └── robots.txt            # Search engine crawl instructions
```

### How SvelteKit Routing Works

The `src/routes/` folder **is** the website. The folder structure maps directly to URLs:

| File | URL |
|------|-----|
| `src/routes/+page.svelte` | `/` |
| `src/routes/about/+page.svelte` | `/about` |
| `src/routes/programmes/internships/+page.svelte` | `/programmes/internships` |

**To add a new page:** create a new folder inside `src/routes/` and add a `+page.svelte` file inside it.

**Special file names:**
- `+page.svelte` — the page UI
- `+page.server.ts` — server-side logic for that page (e.g. form handling, data fetching)
- `+layout.svelte` — wraps all pages at that level and below (used for Nav/Footer)
- `+server.ts` — an API endpoint (used for sitemap, OG images)

---

## Adding a New Page

1. Create the folder: `src/routes/my-new-page/`
2. Create the file: `src/routes/my-new-page/+page.svelte`
3. Add the `<Seo>` component at the top (copy from any existing page)
4. Add a link to it in `src/lib/components/Nav.svelte` if it needs to appear in the menu

---

## SEO

Every page uses the `<Seo>` component which sets the page title, description, and social share image automatically. Add it at the top of each `+page.svelte`:

```svelte
<Seo
  title="Page Title"
  description="A short description of this page."
  section="El Terreno"
  path="/my-page"
/>
```

---

## Contact Form

The contact form at `/contact` uses SvelteKit's native form actions:

- **UI:** `src/routes/contact/+page.svelte`
- **Handler:** `src/routes/contact/+page.server.ts`

The handler currently logs submissions. To wire up email delivery, add your email provider (e.g. Resend) in `+page.server.ts` where the `TODO` comment is.

---

## Deployment

The site deploys automatically to Vercel when you push to the `main` branch on GitHub. No manual steps needed.

To preview a production build locally:

```sh
npm run build
npm run preview
```

---

## Brand Voice

All copy on this site should follow the El Terreno brand voice — warm, grounded, honest, and respectful. No saviour-complex language. Full guidelines are in the business repo at `strategy/brand-voice-guide.md`.

**Quick checklist before publishing:**
- Is the exchange framed as bidirectional (both sides benefit)?
- Have we avoided saviour/charity language?
- Is it specific about what people will actually do?
- Does it sound like a community invitation, not a sales pitch?
