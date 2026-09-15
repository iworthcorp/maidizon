import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { siteConfig } from "@/lib/data";

export default function BookingCTA() {
  return (
    <section id="book" className="relative overflow-hidden bg-navy-dark py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#c6a15b 1px, transparent 1px), linear-gradient(90deg, #c6a15b 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-1 w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent"
        aria-hidden="true"
      />
      <div
        className="animate-float-reverse pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-navy/50 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-offwhite sm:text-4xl lg:text-5xl">
            Ready to Scale Your Business?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-offwhite/75">
            Let&apos;s talk about where your business stands, where you want
            it to go, and the strategy that will get you there — with
            clarity, structure, and accountability.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={siteConfig.bookingUrl} variant="primary">
              Book a Session
            </Button>
            <Button href="/contact" variant="outline">
              Send Me a Message
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
