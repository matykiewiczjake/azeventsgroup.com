import type { Metadata } from "next";
import { StubPage } from "@/components/stub-page";

export const metadata: Metadata = {
  title: "Services | Arizona Events Group",
};

export default function ServicesPage() {
  return (
    <StubPage
      title="Our Services"
      description="A full breakdown of our production, coordination, and rental services is coming in the next build phase."
    />
  );
}
