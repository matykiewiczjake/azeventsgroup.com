import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { trustLogos } from "@/lib/content/home";

export function TrustBar() {
  return (
    <section className="border-navy/10 border-b bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-6">
            <p className="text-muted-foreground text-xs font-medium tracking-[0.2em]">
              TRUSTED BY BRANDS ACROSS THE VALLEY
            </p>
            <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6">
              {trustLogos.map((logo) => (
                <div
                  key={logo.name}
                  className="relative h-8 shrink-0 grayscale transition-all duration-200 hover:grayscale-0"
                  style={{ width: logo.width }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
            <div className="border-copper/30 bg-copper/5 flex items-center gap-2 rounded-full border py-1.5 pr-4 pl-1.5">
              <Image
                src="/images/gma-badge.png"
                alt="As seen on ABC's Good Morning America"
                width={28}
                height={28}
                className="rounded-full"
              />
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
