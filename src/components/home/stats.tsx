import { Reveal } from "@/components/motion/reveal";
import { stats } from "@/lib/content/home";

export function Stats() {
  return (
    <section className="bg-navy py-14 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <p className="font-display text-brand-gold text-5xl sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium tracking-[0.15em] text-white/80 uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
