import type { Metadata } from "next";
import ServicesClient from "src/app/services/ServicesClient";

export const metadata: Metadata = {
  title: "Services & Packages | BellScript Studios",
  description:
    "Browse BellScript Studios services and packages: Website-in-a-Week builds, local business bundles, celebration sites, and more.",
  openGraph: {
    title: "Services & Packages | BellScript Studios",
    description:
      "Explore modern website builds, celebration sites, automations, and support services.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services & Packages | BellScript Studios",
    description:
      "Clean, modern builds for real-world ideas: websites, events, optimization, and more.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />
    </>
  );
}
