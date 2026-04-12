# El Terreno — Cultural Exchange Centre Website

A static HTML/CSS/JavaScript website for El Terreno Foundation & Cultural Exchange Centre in Guaranda, Ecuador.

## 📁 Project Structure

```
elterreno/
├── index.html                 # Homepage
├── about.html                 # About Us
├── contact.html               # Contact page
├── style.css                  # Global styles
├── nav.js                     # Shared header/footer (injected on all pages)
├── logo.png                   # Logo asset
│
├── foundation/                # Foundation section
│   ├── index.html            # Foundation landing
│   ├── projects.html         # Projects showcase
│   ├── impact.html           # Impact metrics
│   └── donate.html           # Donation page
│
├── programmes/                # Cultural Exchange Centre programmes
│   ├── index.html            # Programmes landing
│   ├── volunteering.html     # Emerging Talent programme
│   ├── internships.html      # Skilled Professionals programme
│   ├── sabbatical.html       # Experienced Leaders programme
│   └── associates.html       # Associates programme
│
└── tourism/                   # Tourism/Visits section
    ├── index.html            # Activities & attractions
    ├── accommodation.html     # Lodging options
    └── events.html           # Events calendar
```

## 🎨 Design System

- **Colour Palette:**
  - Dark: `#1E2134` (charcoal)
  - Navy: `#22395C`
  - Teal: `#1F6366`
  - Amber: `#F9BA47`
  - Terracotta: `#9B372F`
  - Mint: `#58BA96`
  - Orange: `#DA7939`
  - White: `#FFFFFE`

- **Typography:**
  - Titles: Montserrat Black (900 weight), uppercase
  - Headings: Raleway Bold (700 weight)
  - Body: Raleway Medium (500 weight)

## 🛠️ Technology Stack

- **Plain HTML5** (no framework)
- **CSS3** (with CSS variables for theming)
- **Vanilla JavaScript** (nav.js for dynamic header/footer injection)
- **Deployed:** Netlify

## 🚀 Development & Deployment

### Local Development
1. Clone the repo
2. Open `index.html` in a browser (no build step required)
3. Edit HTML/CSS/JS files directly

### Deployment to Netlify
This repo is connected to Netlify for automatic deployment.

1. Push changes to `main` branch
2. Netlify automatically detects and rebuilds
3. Site updates at `elterreno.netlify.app`

**To connect a new branch to Netlify:**
- Push to GitHub
- Go to Netlify dashboard → Site settings → Build & deploy
- Add new branch as a deploy preview

## 📝 Navigation System

The `nav.js` file injects a consistent header and footer across all pages. Pages call:

```javascript
<script>buildNav('section-name', depth);</script>
```

Parameters:
- `section-name`: `''` (home) | `'about'` | `'projects'` | `'programmes'` | `'visits'` | `'contact'`
- `depth`: `0` (root level) | `1` (inside subfolder like `/programmes/`)

## 🖼️ Images

Currently using placeholder backgrounds. To add real images:
1. Upload assets to a CDN or image hosting service
2. Update image URLs in HTML pages
3. Ensure images are optimized for web (consider WebP format)

## 📊 Pages & Status

| Page | Status | Notes |
|------|--------|-------|
| Homepage | ✅ Complete | Hero, Projects, Programmes, Visits, Blog/Instagram |
| About Us | ✅ Complete | Story, Mission/Vision, Philosophy, Approach, Team |
| Foundation (Projects) | ✅ Complete | Projects showcase with filtering |
| Foundation (Impact) | ✅ Partial | Structure in place |
| Foundation (Donate) | ✅ Partial | Form structure pending |
| Programmes (Landing) | ✅ Complete | Video intro, quadrants, testimonials |
| Programmes (Individual) | ✅ Partial | Volunteering, Internships, Sabbatical, Associates |
| Tourism (Activities) | ✅ Partial | Structure in place |
| Tourism (Accommodation) | ✅ Partial | Listing structure pending |
| Contact | ✅ Partial | Form structure pending |

## 🔗 Live Site

**Production:** https://elterreno.netlify.app

## 📧 Contact

For questions about the website, reach out to Joshua at `joshua@elterrenoecuador.com`

---

*Last updated: April 2026*
