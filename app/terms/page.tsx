import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for the Mai Dizon website.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="bg-offwhite py-24 sm:py-32">
      <Container className="max-w-3xl">
          <p className="font-display text-sm font-semibold tracking-[0.25em] text-gold uppercase">
            Legal
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-navy-dark sm:text-4xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-slate">Last updated: January 2026</p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/80">
            <p>
              By accessing and using this website, you agree to the
              following terms and conditions. If you do not agree with any
              part of these terms, please do not use this website.
            </p>
            <h2 className="font-display text-xl font-semibold text-navy-dark">
              Use of Content
            </h2>
            <p>
              All content on this website, including text, graphics, and
              branding, is the property of {siteConfig.name} unless
              otherwise noted, and may not be reproduced without
              permission.
            </p>
            <h2 className="font-display text-xl font-semibold text-navy-dark">
              No Professional Guarantee
            </h2>
            <p>
              Coaching and consulting services described on this website are
              provided based on professional experience and judgment.
              Results vary and are not guaranteed.
            </p>
            <h2 className="font-display text-xl font-semibold text-navy-dark">
              Contact
            </h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-gold hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
      </Container>
    </div>
  );
}
