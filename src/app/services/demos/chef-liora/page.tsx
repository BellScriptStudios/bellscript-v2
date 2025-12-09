import Header from "./Components/Header/Header";
import ChefLioraHero from "./Components/Hero/Hero";
import FeaturedRecipes from "./Components/FeaturedRecipes/FeaturedRecipes";
import VideoStrip from "./Components/VideoTutorials/VideoTutorials";
import AboutDemo from "./Components/About/About";
import BrandPartners from "./Components/BrandPartners/BrandPartners";
import NewsletterSignup from "./Components/Newsletter/Newsletter";
import ChefCTA from "./Components/ChefCTA/ChefCTA";
import FinalCTA from "./Components/FinalCTA/FinalCTA";
import Footer from "./Components/Footer/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chef Liora — Cozy Recipes & Tutorials (Demo Site)",
  description:
    "A demo influencer website built for the Website in a Week service by BellScript Studios. Explore cozy recipes, cooking tutorials, and warm kitchen storytelling.",
  metadataBase: new URL("https://bellscript.studio"),

  openGraph: {
    title: "Chef Liora — Cozy Recipes & Tutorials (Demo Site)",
    description:
      "This is a demonstration website created for the Website in a Week service by BellScript Studios. Designed to showcase influencer-brand layouts, recipe features, and content styling.",
    url: "/services/demos/chef-liora",
    siteName: "Chef Liora — Demo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Liora — Demo Influencer Website",
    description:
      "A demo influencer site showcasing the Website in a Week service by BellScript Studios.",
      creator: "@BellScriptStudios"
  },
};

export default function WebsiteInAWeekDemoPage() {
    return (
        <main>
            <Header />
            <ChefLioraHero />
            <FeaturedRecipes />
            <VideoStrip />
            <AboutDemo />
            <BrandPartners />
            <NewsletterSignup />
            <ChefCTA />
            <Footer />
            <FinalCTA />
        </main>
    )
}