import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Chef Liora — Cozy Recipes & Tutorials (Demo Site)",
  description:
    "A demo influencer website built for the Website in a Week service by BellScript Studios. Explore cozy recipes, cooking tutorials, and warm kitchen storytelling.",
  metadataBase: new URL("https://bellscript.studio"),

  openGraph: {
    title: "Contact Chef Liora — Cozy Recipes & Tutorials (Demo Site)",
    description:
      "This is a demonstration website created for the Website in a Week service by BellScript Studios. Designed to showcase influencer-brand layouts, recipe features, and content styling.",
    url: "/services/demos/chef-liora",
    siteName: "Chef Liora — Demo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Chef Liora — Demo Influencer Website",
    description:
      "A demo influencer site showcasing the Website in a Week service by BellScript Studios.",
      creator: "@BellScriptStudios"
  },
};

export default function ContactPage() {
  return (
    <ContactClient />
  )
}
