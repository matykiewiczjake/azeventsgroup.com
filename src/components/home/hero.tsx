import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroReveal } from "@/components/motion/reveal";

// No hero photography was supplied to this build — the radial rays below are
// a brand-derived stand-in (echoes the logo's sunburst without reproducing
// the AZ flag) so the layout works today. Swap the <div> background for a
// full-bleed <Image> of a real AEG event once photos are provided.
export function Hero() {
  return (
    <section className="bg-navy relative flex min-h-[88vh] items-center overflow-hidden text-white">
      <div
        aria-hidden
        className="absolute inset-0 [background:radial-gradient(circle_at_85%_15%,rgba(248,165,67,0.35),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(206,113,52,0.3),transparent_50%),linear-gradient(160deg,#02224A_0%,#031a38_55%,#02122a_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:repeating-conic-gradient(from_0deg,#F8A543_0deg_1deg,transparent_1deg_9deg)] [background-size:900px_900px] [background-position:88%_18%] opacity-[0.07]"
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
