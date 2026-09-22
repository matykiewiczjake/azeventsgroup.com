import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/icons/social-icons";
import { Logo } from "@/components/logo";
import { contactInfo, navLinks, socialLinks } from "@/lib/site-config";

const socialIcons = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Twitter: TwitterIcon,
  LinkedIn: LinkedinIcon,
} as const;

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              Family-run event production in Phoenix, Arizona — 40+ years, 250+
              live events.
            </p>
          </div>

          <div>
            <h3 className="font-display text-brand-gold text-sm tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="hover:text-brand-gold text-sm text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-brand-gold text-sm tracking-wide">
              CONTACT
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-brand-gold text-sm tracking-wide">
              FOLLOW
            </h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon =
                  socialIcons[social.label as keyof typeof socialIcons];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="hover:border-brand-gold hover:text-brand-gold flex size-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Arizona Events Group. All rights
            reserved.
          </p>
          <p className="font-script text-brand-gold text-lg">Enjoy Life</p>
        </div>
      </div>
    </footer>
  );
}
