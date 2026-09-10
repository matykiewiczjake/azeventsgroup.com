import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "About | Arizona Events Group",
};

export default function AboutPage() {
  return (
    <StubPage
      title="About Us"
      description="Our full story — 40 years, family-run, built on relationships across the Valley — is coming in the next build phase."
    />
  );
}
