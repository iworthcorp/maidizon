import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Mai Dizon website.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-offwhite py-24 sm:py-32">
      <Container className="max-w-3xl">
          <p className="font-display text-sm font-semibold tracking-[0.25em] text-gold uppercase">
            Legal
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-navy-dark sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate">Last updated: January 2026</p>

          <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/80">
            <p>
              This Privacy Policy explains how {siteConfig.name} (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and
              protects information submitted through this website.
            </p>
            <h2 className="font-display text-xl font-semibold text-navy-dark">
              Information We Collect
            </h2>
            <p>
              When you submit the contact form, we collect the information
              you provide, such as your name, email address, company, and
              message content. We do not collect this information through
              any other means unless you provide it directly.
            </p>
            <h2 className="font-display text-xl font-semibold text-navy-dark">
              How We Use Information
            </h2>
            <p>
              Information submitted is used solely to respond to your
              inquiry and to communicate about coaching, consulting, or
              speaking engagements. We do not sell or share your
              information with third parties for marketing purposes.
            </p>
            <h2 className="font-display text-xl font-semibold text-navy-dark">
              Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
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
