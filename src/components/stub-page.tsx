import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Placeholder route so nav links resolve while the full page design is
// built in the next phase (after the homepage direction is approved).
export function StubPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 py-24 text-center">
        <p className="text-copper text-sm font-semibold tracking-[0.2em]">
          COMING SOON
        </p>
        <h1 className="font-display text-navy mt-3 text-4xl sm:text-5xl">
          {title.toUpperCase()}
        </h1>
        <p className="text-navy/70 mt-4 max-w-md">{description}</p>
        <Button
          className="mt-8 font-semibold"
          render={<Link href="/" />}
          nativeButton={false}
        >
          Back Home
          <ArrowRight className="size-4" />
        </Button>
      </main>
      <SiteFooter />
    </>
  );
}
