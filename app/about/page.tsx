import type { Metadata } from "next";
import About from "@/components/About";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Mai Dizon — an entrepreneurship and business coaching professional helping founders sharpen their strategy, structure their operations, and build companies that scale.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <About />
      <BookingCTA />
    </>
  );
}
