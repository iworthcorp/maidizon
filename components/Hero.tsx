import { TrendingUp } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";
import Reveal from "./ui/Reveal";
import PortraitPanel from "./ui/PortraitPanel";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-mist pt-16 pb-24 sm:pt-20 sm:pb-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#8b6fc9 1px, transparent 1px), linear-gradient(90deg, #8b6fc9 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="animate-float pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float-reverse pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-navy/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <Reveal>
            <p className="font-display text-xs sm:text-sm font-semibold tracking-[0.3em] text-gold uppercase">
              Entrepreneurship • Business Coaching • Growth Strategy
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-navy-dark sm:text-5xl lg:text-6xl">
              Turning Bold Ideas Into Businesses{" "}
              <span className="text-gold">That Scale.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">
              Helping entrepreneurs and business owners build stronger
              companies through strategic coaching, sharp business
              consulting, and growth strategies that actually move the
              needle.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={siteConfig.bookingUrl} variant="primary">
                Book a Session
              </Button>
              <Button href="/about" variant="outline">
                Explore My Work
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-md">
          <PortraitPanel variant="hero" />

          <div className="absolute -bottom-8 -left-6 z-20 w-64 rounded-sm border border-gold/30 bg-white/95 p-5 shadow-2xl shadow-navy/10 backdrop-blur sm:-left-10">
            <div className="flex items-center gap-2 text-gold">
              <TrendingUp size={18} strokeWidth={2} />
              <p className="font-display text-sm font-bold uppercase tracking-wide text-navy-dark">
                10+ Years Driving Business Growth
              </p>
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-charcoal/70">
              <li>Entrepreneurship</li>
              <li>Business Coaching</li>
              <li>Business Consulting</li>
              <li>Growth Strategy</li>
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
