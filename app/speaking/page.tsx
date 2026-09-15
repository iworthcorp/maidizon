import type { Metadata } from "next";
import Speaking from "@/components/Speaking";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Explore Mai Dizon's speaking engagements, panels, and business conversations on entrepreneurship, coaching, and growth strategy.",
  alternates: {
    canonical: "/speaking",
  },
};

export default function SpeakingPage() {
  return (
    <>
      <Speaking />
      <BookingCTA />
    </>
  );
}
