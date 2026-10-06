import Link from "next/link";
import { ArrowRight, Award, Heart, Repeat, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { pillars } from "@/lib/content/home";

const icons = [Award, Repeat, Heart, Users];

export function WhatWeDo() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div>
              <p className="text-copper text-sm font-semibold tracking-[0.2em]">
                WHAT WE DO
              </p>
              <h2 className="font-display text-navy mt-3 text-3xl leading-tight sm:text-4xl">
                WE PRODUCE LIVE EVENTS — AND WE&apos;VE RUN OUR OWN
              </h2>
              <p className="text-navy/75 mt-6 text-lg">
                Arizona Events Group specializes in producing live sports and
                entertainment festivals and events, including the annual Arizona
                Balloon Classic. We also offer special event products, rentals,
                and expert consultations for corporate and private clients
                across the Valley.
              </p>
              <Link
                href="/services"
                className="text-copper hover:text-navy mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
              >
                See Our Services
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {pillars.map((pillar, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={pillar.title} delay={i * 0.08}>
                  <div className="border-navy/10 h-full rounded-lg border p-5">
                    <Icon className="text-copper size-5" />
                    <h3 className="font-display text-navy mt-3 text-base tracking-wide">
                      {pillar.title.toUpperCase()}
                    </h3>
                    <p className="text-navy/70 mt-2 text-sm">{pillar.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
