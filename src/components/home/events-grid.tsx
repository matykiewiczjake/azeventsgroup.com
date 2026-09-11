import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { events } from "@/lib/content/home";

// ASBA Gala, Cars & Cigars, and CCU Glow still use brand-color gradients —
// no confidently-matched, rights-clear photo for those three was found on
// the old site. See README "Pulling assets from the old site" for how to
// pull more and swap them in.
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
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={`${event.name} in ${event.location}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: event.imagePosition }}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                ) : (
                  <div
                    aria-hidden
                    className={`absolute inset-0 bg-gradient-to-br ${event.gradient} transition-transform duration-500 group-hover:scale-105`}
                  />
                )}
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

                {event.imageIsStock && (
                  <span className="absolute top-3 right-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-sm">
                    Stock photo — replace
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
