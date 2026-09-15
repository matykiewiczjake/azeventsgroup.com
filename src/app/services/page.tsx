import type { Metadata } from "next";
import {
  Award,
  Repeat,
  Heart,
  Users,
  Search,
  ShieldCheck,
  Megaphone,
  MapPinned,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Testimonial } from "@/components/home/testimonial";
import { FinalCta } from "@/components/home/final-cta";
import { eventTypes, serviceCategories } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Services | Arizona Events Group",
  description:
    "Full-service event production — administration, activation, coordination, vendor management, and on-site direction — for corporate and private clients across Arizona.",
};

const icons = [
  Award,
  Megaphone,
  Repeat,
  Users,
  Heart,
  Search,
  ShieldCheck,
  MapPinned,
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="WHAT WE DO"
          title="FULL-SERVICE EVENT PRODUCTION"
          subtitle="Our experienced team delivers tailored event management — logistics, coordination, and execution for events of every scale."
        />

        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {eventTypes.map((type) => (
                  <span
                    key={type}
                    className="border-copper/30 bg-copper/5 text-navy rounded-full border px-4 py-1.5 text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-copper text-sm font-semibold tracking-[0.2em]">
                  HOW WE WORK
                </p>
                <h2 className="font-display text-navy mt-3 text-3xl leading-tight sm:text-4xl">
                  EIGHT DISCIPLINES, ONE TEAM
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCategories.map((service, i) => {
                const Icon = icons[i];
                return (
                  <Reveal key={service.name} delay={(i % 4) * 0.08}>
                    <div className="border-navy/10 h-full rounded-lg border p-5">
                      <Icon className="text-copper size-5" />
                      <h3 className="font-display text-navy mt-3 text-base tracking-wide">
                        {service.name.toUpperCase()}
                      </h3>
                      <p className="text-navy/70 mt-2 text-sm">
                        {service.body}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <Testimonial />

        <FinalCta
          heading="READY TO GET STARTED?"
          subtext="Tell us what you're planning and we'll show you how 35+ years of experience goes to work for you."
          buttonLabel="Request a Consultation"
        />
      </main>
      <SiteFooter />
    </>
  );
}
