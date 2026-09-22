import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Stats } from "@/components/home/stats";
import { Testimonial } from "@/components/home/testimonial";
import { FinalCta } from "@/components/home/final-cta";
import { founding, differentiators } from "@/lib/content/about";

export const metadata: Metadata = {
  title: "About Us | Arizona Events Group",
  description:
    "Family-run since 2008, Arizona Events Group has produced 250+ live events across the Valley — from the Arizona Balloon Classic to corporate galas.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="ABOUT AEG"
          title="GET TO KNOW ARIZONA EVENTS GROUP"
        />

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="text-navy text-lg leading-relaxed">
                {founding.intro}
              </p>
              <p className="text-navy/75 mt-6 text-lg leading-relaxed">
                {founding.history}
              </p>
              <p className="text-navy/75 mt-6 text-lg leading-relaxed">
                {founding.locations}
              </p>
            </Reveal>
          </div>
        </section>

        <Stats />

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-copper text-sm font-semibold tracking-[0.2em]">
                  WHY CHOOSE AEG
                </p>
                <h2 className="font-display text-navy mt-3 text-3xl leading-tight sm:text-4xl">
                  A FAMILY-RUN OPERATOR, NOT A VENDOR CHECKLIST
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {differentiators.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <div className="border-navy/10 h-full rounded-lg border p-6">
                    <h3 className="font-display text-navy text-xl tracking-wide">
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="text-navy/70 mt-3 text-sm leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Testimonial />

        <FinalCta heading="READY TO PLAN YOUR DREAM EVENT?" />
      </main>
      <SiteFooter />
    </>
  );
}
