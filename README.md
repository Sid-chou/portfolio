# sidxcode.me -- Personal Developer Portfolio

A minimal, modern developer portfolio built with React, TypeScript, and Vite. Features dark/light theming, smooth scroll animations, a live Spotify widget, real-time GitHub contribution graph, and a working contact form.

**Live:** [sidxcode.me](https://sidxcode.me)

---

## Preview

| Dark Mode | Light Mode |
|-----------|------------|
| Coming soon | Coming soon |

---

## Features

- **Dark / Light Theme** -- Toggle between themes with persistent preference via localStorage.
- **Command Palette** -- Press `Ctrl+K` to open a searchable command palette for quick navigation (powered by cmdk).
- **Spotify Integration** -- Displays the last played track from Spotify with an embedded player toggle.
- **GitHub Contribution Graph** -- A custom-built SVG heatmap that fetches real contribution data via the GitHub GraphQL API.
- **Contact Form** -- Functional email form powered by EmailJS. No backend required.
- **Scroll Animations** -- Sections animate into view using GSAP-based scroll-triggered transitions.
- **Responsive Layout** -- Clean, centered 760px max-width layout that adapts to mobile, tablet, and desktop.
- **Resume Page** -- Dedicated route for viewing and sharing a resume.

---

## Tech Stack

| Layer        | Technology                              |
|--------------|-----------------------------------------|
| Framework    | React 19, TypeScript                    |
| Build Tool   | Vite                                    |
| Styling      | Tailwind CSS v4                         |
| Animations   | GSAP, Framer Motion                     |
| Routing      | React Router v7 (HashRouter)            |
| Icons        | Lucide, React Icons, Devicon, Tech Stack Icons |
| APIs         | Spotify Web API, GitHub GraphQL API     |
| Email        | EmailJS                                 |
| Hosting      | GitHub Pages (via GitHub Actions CI/CD) |

---

## Project Structure

```
src/
  main.tsx              -- Entry point, router setup
  App.tsx               -- Root component, theme state management
  index.css             -- Global styles and design tokens
  components/
    Navbar.tsx           -- Fixed navbar with avatar, nav links, search, theme toggle
    Hero.tsx             -- Introduction, social links, Spotify widget
    Projects.tsx         -- Project cards with thumbnails and tech badges
    Experience.tsx       -- Work experience timeline
    About.tsx            -- About section with skills
    GithubActivity.tsx   -- GitHub contribution heatmap (SVG)
    Contact.tsx          -- Contact form (EmailJS)
    Footer.tsx           -- Page footer
    ui/                  -- Reusable UI primitives (border-beam, etc.)
  pages/
    Resume.tsx           -- Resume page
  utils/
    spotify.ts           -- Spotify API helper (token refresh, track fetch)
public/
  assets/                -- Static images (avatar, project thumbnails)
  CNAME                  -- Custom domain config for GitHub Pages
.github/
  workflows/
    deploy.yml           -- CI/CD pipeline for GitHub Pages deployment
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```bash
git clone https://github.com/Sid-chou/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root. See `.env.example` for the required variables:

```env
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
VITE_SPOTIFY_REFRESH_TOKEN=your_spotify_refresh_token
VITE_GITHUB_TOKEN=your_github_personal_access_token
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

**How to obtain these:**

- **Spotify**: Register an app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard). Generate a refresh token using the Authorization Code flow with the `user-read-recently-played` scope.
- **GitHub**: Create a Personal Access Token at [GitHub Settings > Tokens](https://github.com/settings/tokens) with `read:user` scope.
- **EmailJS**: Sign up at [emailjs.com](https://www.emailjs.com/), create a service and template, then copy the IDs and public key.

### Run Locally

```bash
npm run dev
```

The app will start at `http://localhost:3000`.

---

## Deployment

This project is configured for automatic deployment to GitHub Pages via GitHub Actions.

### How it works

1. Every push to `main` triggers the `.github/workflows/deploy.yml` workflow.
2. The workflow installs dependencies, builds the project, and deploys the `dist/` folder to GitHub Pages.
3. Environment variables are injected from GitHub Secrets during the build step.

### Setup

1. Go to your repository **Settings > Pages** and set the source to **GitHub Actions**.
2. Add all `VITE_*` environment variables as **repository secrets** under **Settings > Secrets and variables > Actions**.
3. Push to `main`. The site will be live within a couple of minutes.

### Custom Domain

To use a custom domain:

1. Add a `CNAME` file in the `public/` directory containing your domain name.
2. Configure DNS records (A records pointing to GitHub Pages IPs, CNAME for www).
3. Set the custom domain in **Settings > Pages > Custom domain**.
4. Ensure `base` in `vite.config.ts` is set to `'/'`.

---

## License

This project is open source and available for personal use and reference.

---

Built by [Sidhant Choudhury](https://github.com/Sid-chou)
