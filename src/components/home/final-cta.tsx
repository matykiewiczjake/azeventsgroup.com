import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

type FinalCtaProps = {
  heading?: string;
  subtext?: string;
  buttonLabel?: string;
  href?: string;
};

export function FinalCta({
  heading = "READY TO PLAN YOUR EVENT?",
  subtext = "Tell us what you're planning and we'll show you how 40+ years of experience goes to work for you.",
  buttonLabel = "Get In Touch",
  href = "/contact",
}: FinalCtaProps) {
  return (
    <section className="bg-navy relative flex min-h-[26rem] items-center overflow-hidden py-20 text-white sm:py-24">
      <Image
        src="/images/events/eloy-festival.jpg"
        alt=""
        fill
        className="object-cover"
        style={{ objectPosition: "center 55%" }}
        sizes="100vw"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#02122a]/80 via-[#02122a]/55 to-[#02122a]"
      />

      <div className="relative mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight sm:text-5xl">
            {heading}
          </h2>
          <p className="mt-4 text-lg text-white/80">{subtext}</p>
          <Button
            size="lg"
            className="mt-8 h-12 px-8 text-base font-semibold"
            render={<Link href={href} />}
            nativeButton={false}
          >
            {buttonLabel}
            <ArrowRight className="size-4" />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
