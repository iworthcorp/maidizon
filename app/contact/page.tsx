import type { Metadata } from "next";
import Contact from "@/components/Contact";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mai Dizon for business coaching, consulting, or speaking engagements.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <BookingCTA />
    </>
  );
}
