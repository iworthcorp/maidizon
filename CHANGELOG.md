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
