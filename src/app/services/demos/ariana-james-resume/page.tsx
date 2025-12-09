import HeaderSection from "./Components/Header/HeaderSection";
import ResumeBodySection from "./Components/ResumeBody/ResumeBodySection";
import FinalCTA from "./Components/FinalCTA/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ariana James – Resume Demo",
  description:
    "This resume website is a demo project created by BellScript Studios to showcase custom personal branding, editorial layouts, and boutique hospitality–style resume site design.",
  metadataBase: new URL("https://bellscript.studio"),

  openGraph: {
    title: "Ariana James – Resume Demo",
    description:
      "A fictional resume website built by BellScript Studios to demonstrate professional resume web design, layout, and branding.",
    url: "/services/demos/ariana-james-resume",
    siteName: "Ariana James – Resume Demo",
    images: [
      {
        url: "https://bellscript.studio/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BellScript Studios — Version One",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ariana James – Resume Demo",
    description:
      "A fictional resume website built by BellScript Studios to demonstrate professional resume web design, layout, and branding.",
      creator: "@BellScriptStudios"
  },
};

export default function ArianaJamesResume() {
    return (
        <main>
            <HeaderSection />
            <ResumeBodySection />
            <FinalCTA />
        </main>
    )
}