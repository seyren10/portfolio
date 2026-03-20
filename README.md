# My Portfolio — Roy Victor Gagarin

My personal portfolio website. I'm a Full-Stack Web Developer with 2.5+ years of experience building web-based systems, internal tools, and RESTful APIs.

🌐 **Live site:** [seyren10.github.io](https://seyren10.github.io)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [@hugeicons/react](https://hugeicons.com/) |
| Font | [Figtree Variable](https://fontsource.org/fonts/figtree) |
| Animations | [@polgubau/astro-reveal](https://github.com/polgubau/astro-reveal) |
| Language | TypeScript |

---

## Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── Roy_Victor_Gagarin_CV.pdf
└── src/
    ├── assets/                        # Tech logos and project screenshots
    │   ├── asset_management_system/
    │   └── servifi/
    ├── components/
    │   ├── app/                       # Page section components
    │   │   ├── AppHeader.astro        # Fixed navigation with mobile menu
    │   │   ├── AppHero.astro          # Landing hero section
    │   │   ├── AppProjects.astro      # Featured projects
    │   │   ├── AppWorkExperience.astro
    │   │   ├── AppSkills.astro        # Tech stack badges
    │   │   ├── AppAbout.astro         # About + stats
    │   │   ├── AppContact.astro       # Contact form / links
    │   │   ├── AppFooter.astro
    │   │   └── AppBadge.astro
    │   ├── ui/                        # shadcn/ui primitives
    │   │   ├── badge.tsx
    │   │   ├── beams-background.tsx
    │   │   ├── blob-background.tsx
    │   │   ├── button.tsx
    │   │   ├── carousel.tsx
    │   │   ├── dialog.tsx
    │   │   └── dropdown-menu.tsx
    │   ├── AMSGallery.tsx
    │   ├── ModeToggle.tsx             # Light / dark theme toggle
    │   ├── ServifiGallery.tsx
    │   └── ServifiLinks.tsx
    ├── layouts/
    │   └── main.astro                 # Root layout (SEO, fonts, theme script)
    ├── lib/
    │   └── utils.ts
    ├── pages/
    │   └── index.astro                # Single-page entry point
    └── styles/
        └── global.css                 # CSS variables, Tailwind config
```

---

## Sections

My portfolio is a single-page application with the following sections, each accessible via the navigation:

- **Hero** — introduction, availability badge, social links, and CV download
- **Projects** (`#projects`) — featured work with screenshots and tech badges
- **Work Experience** (`#work-experience`) — professional timeline
- **Skills** (`#skills`) — tech stack icons and proficiency
- **About** (`#about`) — bio, years of experience, and project stats
- **Contact** (`#contact`) — ways to get in touch

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/seyren10/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:4321`.

### Build

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

---

## Features

- **Responsive design** — mobile-first layout with a hamburger navigation menu on smaller screens
- **Dark / light mode** — persisted in `localStorage`, respects system preference on first visit
- **Scroll-based animations** — section reveals powered by `@polgubau/astro-reveal`
- **Active nav highlighting** — `IntersectionObserver` tracks the current section as you scroll
- **Animated background** — ambient blob background that reacts to the theme
- **CV download** — direct link to the PDF resume from the header

---

## Theming

Colors are defined as CSS variables in `src/styles/global.css` using the `oklch` color space. The design supports both light and dark modes via a `.dark` class on the root `<html>` element.

Key accent color: **blue-500** (`#3b82f6`) used for headings, highlights, and interactive states.

---

## License

This is my personal project and is not licensed for reuse. Feel free to use it as inspiration for your own portfolio.

---

> Built with ☕ by me — [GitHub](https://github.com/seyren10) · [LinkedIn](https://www.linkedin.com/in/roy-gagarin-38b790261)