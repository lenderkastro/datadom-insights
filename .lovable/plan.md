# Datadom Website Plan

## Overview
Build a multi-page marketing website for Datadom, a data-focused company in Uyo, Nigeria. The site will use a Navy Trust color palette, JetBrains Mono headings, and Work Sans body text, organized around a bento-grid homepage composition.

## Pages & Routes

| Route | Purpose |
|-------|---------|
| `/` | Home — bento-grid hero, services highlights, training areas, mission/vision, location callout. |
| `/about` | Company story, mission, vision, and Uyo location. |
| `/services` | Four core service cards with details and outcomes. |
| `/training` | Five training areas (Excel, Python, SQL, Power BI, Machine Learning) as a course grid. |
| `/contact` | Contact form, email, phone, and address. |

All routes live under `src/routes/` as TanStack file-based routes. Each route gets unique `head()` metadata for SEO and social sharing.

## Design Direction

- **Palette**: Navy Trust — deep navy backgrounds, crisp white/light text, muted steel-blue accents.
- **Typography**: JetBrains Mono for headings and labels; Work Sans for body copy and UI text.
- **Layout**: Bento-grid homepage with mixed-size cards (hero statement, services stat, training highlight, CTA). Interior pages use card grids and clean two-column sections.
- **Motion**: Subtle scroll reveal and card hover lift; one distinctive hero entrance animation. No scattered micro-interactions.
- **Components**: Shared navigation, footer, section headings, service cards, training cards, CTA block, and contact form.

## Technical Implementation

- Install `@fontsource-variable/jetbrains-mono` and `@fontsource-variable/work-sans` for self-hosted fonts.
- Update `src/styles.css` to add font tokens and Navy Trust color variables in `oklch` format.
- Add a shared `Header` and `Footer` in `src/components/`, wrapping `<Outlet />` in `src/routes/__root.tsx`.
- Build route files:
  - `src/routes/index.tsx`
  - `src/routes/about.tsx`
  - `src/routes/services.tsx`
  - `src/routes/training.tsx`
  - `src/routes/contact.tsx`
- Each route defines `head()` with unique title, description, og tags, and canonical link.
- Contact form uses a client-side stateful form (no backend required). Add a mailto fallback.
- No database or authentication needed for this marketing site.

## SEO & Metadata

- Root `__root.tsx` keeps viewport, charset, and default og type only.
- Leaf routes set `title`, `description`, `og:title`, `og:description`, `og:url`, and canonical `href`.
- JSON-LD Organization schema on the home route for Datadom.

## Acceptance Criteria

- All five routes resolve and render unique content.
- Navigation links work across all pages with active-state styling.
- Homepage follows a bento-grid composition matching the chosen direction.
- Typography and colors match Navy Trust + JetBrains Mono/Work Sans.
- Contact form validates required fields and provides user feedback.
- Build passes and preview renders without console errors.