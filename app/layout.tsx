import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";
import PageLoader from "@/components/ui/PageLoader";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.maidizon.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mai Dizon | Entrepreneurship, Business Coaching & Growth Strategy",
    template: "%s | Mai Dizon",
  },
  description:
    "Mai Dizon helps entrepreneurs and business owners grow through business coaching, business consulting, and growth strategy focused on sustainable, scalable results.",
  keywords: [
    "Mai Dizon",
    "business coaching",
    "entrepreneurship",
    "business consulting",
    "growth strategy",
    "business mentor",
    "founder coaching",
  ],
  authors: [{ name: "Mai Dizon" }],
  creator: "Mai Dizon",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Mai Dizon",
    title: "Mai Dizon | Entrepreneurship, Business Coaching & Growth Strategy",
    description:
      "Helping entrepreneurs and business owners build stronger companies through strategic coaching, sharp business consulting, and growth strategies that move the needle.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mai Dizon | Entrepreneurship, Business Coaching & Growth Strategy",
    description:
      "Helping entrepreneurs and business owners build stronger companies through strategic coaching, consulting, and growth strategy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f9f6fd",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-offwhite text-charcoal">
        <PageLoader />
        <ScrollProgress />
        <div
          className="bg-noise pointer-events-none fixed inset-0 z-[1] opacity-[0.035]"
          style={{ mixBlendMode: "overlay" }}
          aria-hidden="true"
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
