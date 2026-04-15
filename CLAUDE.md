# El Terreno Website — Claude Context

This is the public website for ElTerreno Ecuador at [elterrenoecuador.com](https://www.elterrenoecuador.com).

**Stack:** SvelteKit + TypeScript, deployed on Vercel (Node 22).  
**Runes mode:** enabled globally — use `$state`, `$derived`, `$props` (not the old `export let` syntax).

---

## Brand Voice

Full guidelines: `strategy/brand-voice-guide.md` in the business repo (`el-terreno-business`).

**Principles:**
- Exchange is **bidirectional** — both visitors and host families benefit
- **Not charity** — dignified partnership, not saviour complex
- **Warm and grounded** — community invitation, not a sales pitch
- **Honest** — specific about what people will actually do
- Avoid: "help the poor", "change lives", "struggling villages"
- Use: "cultural exchange", "contribute to", "learn from", "host families", "community partners"

---

## Project Structure

```
src/
├── app.html              # Global head (favicon, fonts)
├── routes/
│   ├── +layout.svelte    # Nav + Footer wrapping every page
│   ├── +page.svelte      # Homepage
│   ├── about/
│   ├── contact/
│   │   ├── +page.svelte      # Form UI — uses use:enhance + method="POST"
│   │   └── +page.server.ts   # Form action — TODO: wire up email provider
│   ├── foundation/       # /foundation, /foundation/projects, /donate, /impact
│   ├── programmes/       # /programmes, /volunteering, /internships, /sabbatical, /associates
│   ├── tourism/          # /tourism, /accommodation, /events
│   ├── og/+server.ts     # Generates OG images dynamically
│   └── sitemap.xml/+server.ts
└── lib/
    ├── components/
    │   ├── Nav.svelte
    │   ├── Footer.svelte
    │   └── Seo.svelte    # Always add to every page
    └── config.ts         # SITE_URL and site name — update here not inline
```

---

## Conventions

### Every page must have an `<Seo>` component

```svelte
<Seo
  title="Page Title"
  description="One sentence describing this page."
  section="El Terreno"
  path="/the-route"
/>
```

### Internal links use `<a href="...">` — not `goto()`

`goto()` is only for programmatic navigation (e.g. after form submission). For all regular links, use plain anchor tags — SvelteKit's router handles them automatically.

The ESLint rule `svelte/no-navigation-without-resolve` is disabled — there is no base path configured.

### Forms use SvelteKit form actions

```svelte
<!-- +page.svelte -->
<script lang="ts">
  import { enhance } from '$app/forms';
  import type { ActionData } from './$types';
  let { form }: { form: ActionData } = $props();
</script>

<form method="POST" use:enhance>...</form>
```

```ts
// +page.server.ts
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    // validate, process, return fail() or { success: true }
  }
};
```

### Styles are scoped per component

Each `.svelte` file has its own `<style>` block. Global styles live in `src/routes/layout.css` (imported in `+layout.svelte`).

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background dark | `#1E2134` | Page backgrounds |
| Accent green | `#58BA96` | Labels, borders, links |
| Accent yellow | `#F9BA47` | Headings, highlights |
| Accent red | `#9B372F` | CTA buttons |
| Body text | `#FFFFFE` | Primary text |
| Muted text | `rgba(255,255,255,0.6)` | Secondary text |

Font: **Montserrat** (loaded via Google Fonts in `app.html`).

---

## Deployment

Pushes to `main` deploy automatically to Vercel. No manual steps.

The Vercel adapter is configured for `nodejs22.x` in `svelte.config.js`.

---

## Key Things to Avoid

- Don't add `window.location` for navigation — use `<a>` tags or `goto()`
- Don't fetch data in `onMount` — use `+page.ts` or `+page.server.ts` load functions
- Don't hardcode `https://elterrenoecuador.com` inline — use `src/lib/config.ts`
- Don't use `export let` for props — this project uses runes (`$props()`)
- Don't introduce saviour-complex language in copy — see brand voice above
