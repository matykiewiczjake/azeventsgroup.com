import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { events } from "@/lib/content/home";

// Cards use brand-color gradients in place of real event photography, which
// wasn't supplied to this build. Swap each gradient <div> for a full-bleed
// <Image> of the real event once photos are available — the card structure
// (aspect ratio, overlay, hover treatment) is already built for it.
export function EventsGrid() {
  return (
    <section id="events" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-copper text-sm font-semibold tracking-[0.2em]">
              OUR EVENTS
            </p>
            <h2 className="font-display text-navy mt-3 text-3xl leading-tight sm:text-4xl">
              FESTIVALS WE OWN. EVENTS WE RUN.
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event, i) => (
            <Reveal key={event.name} delay={(i % 3) * 0.08}>
              <div className="group relative aspect-[4/5] overflow-hidden rounded-lg">
                <div
                  aria-hidden
                  className={`absolute inset-0 bg-gradient-to-br ${event.gradient} transition-transform duration-500 group-hover:scale-105`}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                />

                <div className="relative flex h-full flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-white/80">
                    <MapPin className="size-3.5" />
                    {event.location}
                  </div>
                  <h3 className="font-display mt-2 text-2xl leading-tight">
                    {event.name.toUpperCase()}
                  </h3>
                  <p className="mt-2 text-sm text-white/85">
                    {event.description}
                  </p>
                  {event.href && (
                    <Link
                      href={event.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-gold mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                    >
                      Visit site
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
