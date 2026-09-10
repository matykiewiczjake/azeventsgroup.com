import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Contact | Arizona Events Group",
};

export default function ContactPage() {
  return (
    <StubPage
      title="Contact Us"
      description="Our full contact form (Netlify Forms) is coming in the next build phase. In the meantime, reach us at info@azeventsgroup.com."
    />
  );
}
