# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial Next.js App Router scaffold for the Mai Dizon personal-brand website, built with TypeScript, Tailwind CSS v4, and Framer Motion.
- Landing page sections and UI components (portrait panel, event graphic, gallery tile) with placeholder brand imagery.
- Editable site content (testimonials, speaking events, gallery items, services, stats, social links) centralized in `lib/data.ts`.
- Contact form with configurable POST endpoint via `NEXT_PUBLIC_FORM_ENDPOINT`.
- Environment variable configuration for site URL, booking link, and form endpoint (`.env.example`).
- Project documentation in `README.md` covering setup, environment variables, content editing, and deployment.

### Changed

- 2026-09-15: `siteUrl` in `app/layout.tsx` now falls back to the default site URL when `NEXT_PUBLIC_SITE_URL` is an empty string, not just when it's unset.
- 2026-09-15: Site palette reworked from a dark navy/charcoal theme to a light/pastel theme — deep navy section backgrounds (hero, navbar, footer, booking CTA, brand statement, testimonials, gallery) now use a new soft `mist` background with dark text, and the gold accent, navy, and charcoal tokens were softened to pastel-friendly tones in `app/globals.css`.
- 2026-09-15: Accent color switched from warm gold to a pastel periwinkle blue (`--color-gold: #5b7fd4`) so the whole palette reads as one blue family; neutrals (`charcoal`, `offwhite`, `slate`, `mist`) were cooled toward blue, and matching hex updates were applied to the OG image, favicon, and theme-color meta.
- 2026-09-15: Palette shifted again from blue to a soft lavender/orchid family (`--color-gold: #8b6fc9`, `--color-navy-dark: #5c4d7a`, `--color-mist: #ece4f7`) for a warmer, softer pastel background, with matching updates to the OG image, favicon, and theme-color meta.
- 2026-09-15: `PortraitPanel` (Hero + About portrait) now has a saturated radial-gradient glow bleeding out behind the panel plus a layered colored box-shadow, so the portrait pops against the pastel background instead of blending in; gallery tiles got a matching purple-tinted drop shadow that intensifies on hover.
- 2026-09-15: Fixed a stacking bug from the glow change above — the portrait panel's inner `z-10` layer was painting over the floating "10+ Years Driving Business Growth" card (Hero) and the gold accent square (About), since those overlays had no explicit `z-index` and lost to it regardless of DOM order. Both overlays now use `z-20` so they render clearly above the panel.
