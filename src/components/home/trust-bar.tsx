import { Tv } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { trustLogos } from "@/lib/content/home";

// Sponsor wordmarks stand in for real logo files, which weren't supplied to
// this build. Swap each span for the brand's SVG/PNG mark when available.
export function TrustBar() {
  return (
    <section className="border-navy/10 border-b bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground text-xs font-medium tracking-[0.2em]">
              TRUSTED BY BRANDS ACROSS THE VALLEY
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-4 overflow-x-auto">
              {trustLogos.map((name) => (
                <span
                  key={name}
                  className="font-display text-navy/40 shrink-0 text-sm tracking-wide sm:text-base"
                >
                  {name.toUpperCase()}
                </span>
              ))}
            </div>
            <div className="border-copper/30 bg-copper/5 flex items-center gap-2 rounded-full border px-4 py-2">
              <Tv className="text-copper size-4" />
              <span className="text-navy text-sm font-medium">
                As Seen on ABC&apos;s Good Morning America
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
