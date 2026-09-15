import Link from "next/link";
import Container from "./ui/Container";
import { LinkedinIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from "./ui/SocialIcons";
import { siteConfig, navLinks } from "@/lib/data";

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.social.instagram },
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.social.facebook },
  { icon: YoutubeIcon, label: "YouTube", href: siteConfig.social.youtube },
];

const footerLinks = [...navLinks, { label: "Book a Session", href: siteConfig.bookingUrl }];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-display text-xl font-bold tracking-[0.15em] text-offwhite"
            >
              MAI <span className="text-gold">DIZON</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-offwhite/60">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-sm border border-offwhite/15 text-offwhite/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-offwhite/70 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-offwhite/70">
              <li>{siteConfig.email}</li>
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-offwhite/10 pt-8 text-sm text-offwhite/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Mai Dizon. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
