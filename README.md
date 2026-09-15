# Mai Dizon — Personal Brand Website

A premium personal-brand website for Mai Dizon (entrepreneurship, business coaching, business consulting, growth strategy), built with Next.js App Router, TypeScript, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in real values before deploying:

| Variable | Purpose | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata, OG tags, sitemap, robots.txt | `https://www.maidizon.com` |
| `NEXT_PUBLIC_BOOKING_URL` | Where "Book a Session" buttons link (Calendly, Google Calendar, etc.) | `#book` (scrolls to the on-page booking section) |
| `NEXT_PUBLIC_FORM_ENDPOINT` | POST endpoint for the contact form (Formspree, Resend function, etc.) | none — form simulates submission locally |

## Content

Editable content (testimonials, speaking events, gallery items, services, stats, social links) lives in `lib/data.ts` — update it without touching component markup.

## Placeholder Imagery

Portraits, testimonial avatars, speaking-event photos, and gallery images use tasteful geometric/brand-toned placeholders (no stock photography or fabricated portraits). Replace `components/ui/PortraitPanel.tsx`, `components/ui/EventGraphic.tsx`, and `components/ui/GalleryTile.tsx` with real `next/image` usage once photography is available.

## Deployment

Ready to deploy directly to Vercel — no server-side infrastructure, no hardcoded localhost URLs. Set the environment variables above in the Vercel project settings.
