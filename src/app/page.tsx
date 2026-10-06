import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { Stats } from "@/components/home/stats";
import { WhatWeDo } from "@/components/home/what-we-do";
import { EventsGrid } from "@/components/home/events-grid";
import { Testimonial } from "@/components/home/testimonial";
import { FinalCta } from "@/components/home/final-cta";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <WhatWeDo />
        <EventsGrid />
        <Testimonial />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
