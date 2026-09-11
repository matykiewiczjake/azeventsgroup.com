import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroReveal } from "@/components/motion/reveal";

// Photo pulled from the old site (a balloon-glow shot, no photographer
// watermark) via scripts/scrape-legacy-assets.mjs — swap for a different
// AEG event photo any time via public/images/events/hero-balloon-glow.jpg.
export function Hero() {
  return (
    <section className="bg-navy relative flex min-h-[88vh] items-center overflow-hidden text-white">
      <Image
        src="/images/events/hero-balloon-glow.jpg"
        alt="Illuminated hot air balloons glowing at dusk during an AEG-produced balloon festival"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#02122a] via-[#02122a]/70 to-[#02122a]/20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-[#02122a]/90 via-[#02122a]/20 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <HeroReveal>
            <p className="font-display text-brand-gold text-sm tracking-[0.2em] sm:text-base">
              35+ YEARS &middot; 250+ EVENTS &middot; ONE FAMILY
            </p>
          </HeroReveal>

          <HeroReveal delay={0.1}>
            <h1 className="font-display mt-4 text-4xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              THE PREMIER LIVE EVENT PRODUCTION AGENCY OF THE SOUTHWEST
            </h1>
          </HeroReveal>

          <HeroReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              We don&apos;t just staff events — we&apos;ve built and run our own
              for over three decades. From the Arizona Balloon Classic to
              corporate galas, AEG brings an operator&apos;s instinct to every
              event we touch.
            </p>
          </HeroReveal>

          <HeroReveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="h-12 px-6 text-base font-semibold"
                render={<Link href="/contact" />}
                nativeButton={false}
              >
                Request a Consultation
                <ArrowRight className="size-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-white/30 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                render={<Link href="#events" />}
                nativeButton={false}
              >
                View Our Events
              </Button>
            </div>
          </HeroReveal>
        </div>
      </div>
    </section>
  );
}
