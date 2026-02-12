import type { Metadata } from "next";
{ /* import Splash from "src/Components/Splash"; */ }
import styles from "src/app/Styles/Page.module.css";
import Link from "next/link";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import ProcessSection from "src/Components/ProcessSection";
import HomeFeaturedServices from "src/Components/FeaturedServices";
import AboutSection from "src/Components/AboutSection";
import FeaturedProjects from "src/Components/FeaturedProjects";
import { FEATURED_PROJECTS } from "./Data/projects";
import { SERVICE_CATEGORIES } from "./Data/services";

export const metadata: Metadata = {
  metadataBase: new URL("https://bellscript.studio"),
  title: "BellScript Studios | Custom Websites & Digital Solutions",
  description:
    "BellScript Studios builds modern, custom websites and digital solutions.",
  openGraph: {
    title: "BellScript Studios",
    description:
      "Custom websites and digital solutions built with clean, modern code.",
    url: "https://bellscript.studio",
    siteName: "BellScript Studios",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BellScript Studios – Custom Websites & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BellScript Studios",
    description:
      "Custom websites and digital solutions built with clean, modern code.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Header />

      { /* <Splash /> */ }

      <main className={styles.page}>
        <div className={`page-hero ${styles.pageHero}`}>
          <p className={`page-kicker ${styles.pageKicker}`}>Welcome to the Studio</p>
          <h1 className={`page-title ${styles.pageTitle}`}>Building Innovative Experiences</h1>
          <p className={`page-intro ${styles.pageIntro}`}>Custom websites and digital experiences — fast, modern, and crafted for your brand.</p>
        </div>

        <HomeFeaturedServices categories={SERVICE_CATEGORIES} />
        <FeaturedProjects items={FEATURED_PROJECTS} />

        <AboutSection />
        <ProcessSection />

        <section
          id="services"
          className={styles.contactSection}
          aria-labelledby="contact-section"
        >
          <div className={styles.contact}>
            <p className={styles.contactHeader}>Ready to build? Let&apos;s talk.</p>
            <Link href="/contact" className={`btn-primary ${styles.bottomCta}`}>Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
