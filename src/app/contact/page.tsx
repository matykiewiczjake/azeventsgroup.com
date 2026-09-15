import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";
import { contactInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Arizona Events Group",
  description:
    "Have an event or festival you need help producing? Get in touch with Arizona Events Group.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHeader
          eyebrow="CONTACT"
          title="READY TO BRING YOUR EVENT VISION TO LIFE?"
          subtitle="Have an event or festival you need help producing? Let's chat."
        />

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div className="lg:col-span-2">
              <Reveal>
                <ContactForm />
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-navy text-lg tracking-wide">
                    GENERAL
                  </h3>
                  <p className="text-navy/70 mt-2 text-sm">
                    Have an event or festival you need help producing?
                    Let&apos;s chat.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-navy text-lg tracking-wide">
                    SPONSORS &amp; VENDORS
                  </h3>
                  <p className="text-navy/70 mt-2 text-sm">
                    Get your company involved in one or all of our spectacular
                    events.
                  </p>
                </div>
                <div className="border-navy/10 space-y-3 border-t pt-6">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-navy hover:text-copper flex items-center gap-2 text-sm font-medium transition-colors"
                  >
                    <Mail className="size-4 shrink-0" />
                    {contactInfo.email}
                  </a>
                  <div className="text-navy/70 flex items-start gap-2 text-sm">
                    <MapPin className="mt-0.5 size-4 shrink-0" />
                    {contactInfo.address}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
