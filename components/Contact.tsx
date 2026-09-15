import { Mail, MapPin } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ContactForm from "./ContactForm";
import { LinkedinIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from "./ui/SocialIcons";
import { siteConfig } from "@/lib/data";

const socials = [
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: InstagramIcon, label: "Instagram", href: siteConfig.social.instagram },
  { icon: FacebookIcon, label: "Facebook", href: siteConfig.social.facebook },
  { icon: YoutubeIcon, label: "YouTube", href: siteConfig.social.youtube },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-offwhite py-24 sm:py-32">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow="Contact"
          heading="Let's Build Something That Scales"
        />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75">
            Whether you&apos;re launching a business, looking for hands-on
            coaching, or need strategic consulting to break through a growth
            plateau, I&apos;d love to hear from you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-5 lg:gap-16">
          <Reveal delay={0.12} className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
                  Contact Information
                </p>
                <div className="mt-4 space-y-3">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-charcoal/80 hover:text-gold"
                  >
                    <Mail size={18} className="text-gold" /> {siteConfig.email}
                  </a>
                  <p className="flex items-center gap-3 text-charcoal/80">
                    <MapPin size={18} className="text-gold" /> {siteConfig.location}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-display text-xs font-semibold uppercase tracking-widest text-gold">
                  Follow Along
                </p>
                <div className="mt-4 flex gap-3">
                  {socials.map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-sm border border-navy/15 text-navy-dark transition-colors hover:border-gold hover:text-gold"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
