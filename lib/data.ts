export const siteConfig = {
  name: "Mai Dizon",
  tagline: "Entrepreneurship • Business Coaching • Consulting • Growth Strategy",
  email: "hello@example.com",
  location: "Philippines",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "#book",
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  social: {
    linkedin: "https://linkedin.com/in/example",
    instagram: "https://instagram.com/example",
    facebook: "https://facebook.com/example",
    youtube: "https://youtube.com/@example",
  },
};

export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Speaking", href: "/speaking" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "10+", label: "Years in Business Coaching & Consulting" },
  { value: "150+", label: "Entrepreneurs & Founders Coached" },
  { value: "60+", label: "Businesses Advised on Growth Strategy" },
];

export type Service = {
  number: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Entrepreneurship",
    description:
      "Guiding aspiring and early-stage founders through the mindset, structure, and decisions needed to build a business from the ground up.",
  },
  {
    number: "02",
    title: "Business Coaching",
    description:
      "One-on-one coaching that sharpens leadership, clarifies priorities, and drives accountability toward measurable business goals.",
  },
  {
    number: "03",
    title: "Business Consulting",
    description:
      "Hands-on consulting to diagnose operational gaps, refine business models, and build systems that scale.",
  },
  {
    number: "04",
    title: "Growth Strategy",
    description:
      "Developing data-informed strategies for market positioning, revenue growth, and sustainable expansion.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Mai helped us cut through eighteen months of directionless “growth hacking” and replace it with a strategy we could actually execute. Revenue was up 40% within two quarters.",
    name: "Renz Villanueva",
    position: "Founder, Northline Logistics",
    initials: "RV",
  },
  {
    quote:
      "What stood out was the accountability. Every session ended with clear next steps, and Mai followed up on every single one. That structure is what got our leadership team aligned.",
    name: "Andrea Bautista",
    position: "COO, Marisol Foods Group",
    initials: "AB",
  },
  {
    quote:
      "I came in with a business that was busy but not profitable. Mai's consulting work rebuilt our pricing model and operations from the inside out. We're finally scaling with margin.",
    name: "Miguel Torres",
    position: "CEO, Torres Build Co.",
    initials: "MT",
  },
  {
    quote:
      "Mai has a rare ability to hold big-picture vision and operational detail at the same time. Our board meetings changed completely after two months of working together.",
    name: "Katrina Uy",
    position: "Managing Director, Solara Ventures",
    initials: "KU",
  },
  {
    quote:
      "Direct, no fluff, and genuinely invested in the outcome. The growth strategy Mai built for us is still the backbone of our five-year plan.",
    name: "Josef Ramirez",
    position: "Founder, Ramirez & Co.",
    initials: "JR",
  },
];

export type SpeakingEvent = {
  featured?: boolean;
  event: string;
  date: string;
  location: string;
  topic: string;
  description: string;
};

export const speakingEvents: SpeakingEvent[] = [
  {
    featured: true,
    event: "Founders & Growth Leadership Summit",
    date: "March 2026",
    location: "Manila, Philippines",
    topic: "Building Scalable Systems Under Uncertainty",
    description:
      "A practical look at how entrepreneurs can build scalable systems and lead through uncertainty without losing momentum.",
  },
  {
    event: "Business Builders Conference",
    date: "November 2025",
    location: "Cebu, Philippines",
    topic: "From Founder to CEO",
    description:
      "On the operational and mindset shifts required to move from working in the business to leading it.",
  },
  {
    event: "Growth Strategy Roundtable",
    date: "August 2025",
    location: "Davao, Philippines",
    topic: "Positioning for Market Expansion",
    description:
      "A closed-door session with regional business owners on data-informed expansion strategy.",
  },
  {
    event: "SME Founders Forum",
    date: "May 2025",
    location: "Virtual",
    topic: "Coaching Culture in Small Teams",
    description:
      "How founders can build accountability and coaching habits into lean, fast-moving teams.",
  },
];

export type GalleryCategory =
  | "Conferences"
  | "Speaking"
  | "Coaching Sessions"
  | "Workshops"
  | "Behind the Scenes"
  | "Events";

export type GalleryImage = {
  id: string;
  category: GalleryCategory;
  caption: string;
  tall?: boolean;
};

export const galleryImages: GalleryImage[] = [
  { id: "g1", category: "Conferences", caption: "Opening keynote, Founders & Growth Leadership Summit", tall: true },
  { id: "g2", category: "Speaking", caption: "Panel discussion on scaling operations" },
  { id: "g3", category: "Coaching Sessions", caption: "One-on-one strategy session" },
  { id: "g4", category: "Workshops", caption: "Growth strategy workshop with founders", tall: true },
  { id: "g5", category: "Behind the Scenes", caption: "Prepping for the main stage" },
  { id: "g6", category: "Events", caption: "Business Builders Conference networking night" },
  { id: "g7", category: "Speaking", caption: "Fireside chat on leadership" },
  { id: "g8", category: "Coaching Sessions", caption: "Working session with a founder team", tall: true },
  { id: "g9", category: "Conferences", caption: "SME Founders Forum" },
  { id: "g10", category: "Workshops", caption: "Hands-on operations workshop" },
  { id: "g11", category: "Behind the Scenes", caption: "Between sessions" },
  { id: "g12", category: "Events", caption: "Growth Strategy Roundtable" },
];

export const galleryCategories: GalleryCategory[] = [
  "Conferences",
  "Speaking",
  "Coaching Sessions",
  "Workshops",
  "Behind the Scenes",
  "Events",
];
