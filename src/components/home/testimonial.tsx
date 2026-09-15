import { Reveal } from "@/components/motion/reveal";
import { testimonial } from "@/lib/content/home";

export function Testimonial() {
  return (
    <section className="bg-navy/[0.03] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <span className="font-script text-copper text-6xl">&ldquo;</span>
          <p className="text-navy mt-2 text-xl leading-snug italic sm:text-2xl">
            {testimonial.quote}
          </p>
          <p className="text-navy/70 mt-6 text-sm font-semibold tracking-wide">
            {testimonial.name.toUpperCase()}
            <span className="text-navy/50 font-normal">
              {" "}
              &mdash; {testimonial.title}
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
