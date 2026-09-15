import { HeroReveal } from "@/components/motion/reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy relative overflow-hidden py-20 text-white sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 [background:radial-gradient(circle_at_85%_15%,rgba(248,165,67,0.25),transparent_45%),radial-gradient(circle_at_15%_85%,rgba(206,113,52,0.2),transparent_50%)]"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <HeroReveal>
          <p className="font-display text-brand-gold text-sm tracking-[0.2em] sm:text-base">
            {eyebrow}
          </p>
          <h1 className="font-display mt-4 text-4xl leading-[1.05] tracking-tight sm:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/85">
              {subtitle}
            </p>
          )}
        </HeroReveal>
      </div>
    </section>
  );
}
