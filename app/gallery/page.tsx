import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from Mai Dizon's conferences, speaking engagements, coaching sessions, and workshops.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Gallery />
      <BookingCTA />
    </>
  );
}
