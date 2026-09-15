import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "See what founders and business owners say about working with Mai Dizon on business coaching, consulting, and growth strategy.",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Testimonials />
      <BookingCTA />
    </>
  );
}
