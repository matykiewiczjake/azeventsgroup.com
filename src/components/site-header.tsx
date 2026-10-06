"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/site-config";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy sticky top-0 z-50 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo priority />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hover:text-brand-gold flex items-center gap-1 text-sm font-medium tracking-wide text-white/85 transition-colors"
            >
              {link.label}
              {link.external && <ArrowUpRight className="size-3.5" />}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="font-medium"
          >
            Get In Touch
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </Button>
          <SheetContent side="right" className="bg-navy text-white">
            <SheetHeader>
              <SheetTitle className="text-white">
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="hover:text-brand-gold flex items-center gap-1 rounded-md px-2 py-3 text-base font-medium text-white/85 transition-colors hover:bg-white/10"
                >
                  {link.label}
                  {link.external && <ArrowUpRight className="size-4" />}
                </Link>
              ))}
              <Button
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
                nativeButton={false}
                className="mt-4 w-full font-medium"
              >
                Get In Touch
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
