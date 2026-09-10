import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  return (
    <section className="bg-navy py-20 text-white sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-5xl">
            READY TO PLAN YOUR EVENT?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Tell us what you&apos;re planning and we&apos;ll show you how 35+
            years of experience goes to work for you.
          </p>
          <Button
            size="lg"
            className="mt-8 h-12 px-8 text-base font-semibold"
            render={<Link href="/contact" />}
            nativeButton={false}
          >
            Get In Touch
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
