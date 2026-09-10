import Link from "next/link";
import { cn } from "@/lib/utils";

// NOTE: No logo image file was provided to this build session — this is a
// type-based stand-in using the approved brand fonts/colors. Swap in the
// real "Enjoy Life" badge mark (as <Image>) once the file is available.
export function Logo({
  className,
  dark = true,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-col leading-none",
        dark ? "text-white" : "text-navy",
        className,
      )}
    >
      <span className="font-display text-lg tracking-wide sm:text-xl">
        ARIZONA <span className="text-copper">EVENTS</span> GROUP
      </span>
      <span
        className={cn(
          "font-script text-sm",
          dark ? "text-brand-gold" : "text-copper",
        )}
      >
        Enjoy Life
      </span>
    </Link>
  );
}
