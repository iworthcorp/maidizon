import Container from "./ui/Container";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import PortraitPanel from "./ui/PortraitPanel";
import { stats } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-offwhite py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-md lg:mx-0">
            <PortraitPanel variant="about" />
            <div
              className="absolute -bottom-6 -right-6 z-20 h-16 w-16 bg-gold"
              aria-hidden="true"
            />
          </Reveal>

          <div>
            <p className="font-display text-sm font-semibold tracking-[0.25em] text-gold uppercase">
              About Mai
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-navy-dark sm:text-4xl lg:text-5xl">
              Strategy built on real experience.
            </h1>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/80">
              <p className="font-display text-xl font-semibold text-navy-dark">
                Hi, I&apos;m Mai Dizon.
              </p>
              <p>
                I&apos;m an entrepreneurship and business coaching
                professional who works with founders and business owners
                ready to move past guesswork. My focus is simple: sharpen
                your strategy, structure your operations, and build a
                company that can scale without breaking.
              </p>
              <p>
                Over the past decade, I&apos;ve coached founders through
                every stage of growth — from first hire to national
                expansion — combining hands-on consulting with direct,
                accountable coaching. No recycled frameworks. No vague
                advice. Just strategy that&apos;s built for your business
                and executed with discipline.
              </p>
            </div>

            <blockquote className="mt-8 border-l-2 border-gold pl-6 font-display text-lg italic text-navy-dark/90">
              &ldquo;Growth isn&apos;t luck. It&apos;s the right strategy,
              executed with discipline.&rdquo;
            </blockquote>

            <div className="mt-10">
              <Button href="/contact" variant="ghost" className="!px-0">
                Let&apos;s Work Together →
              </Button>
            </div>

            <dl className="mt-14 grid grid-cols-1 gap-8 border-t border-navy/10 pt-10 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-4xl font-bold text-navy-dark">
                    {stat.value}
                  </dd>
                  <p className="mt-2 text-sm leading-snug text-slate">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
