import type { Metadata } from "next";
{ /* import Splash from "src/Components/Splash"; */ }
import styles from "src/app/Styles/Page.module.css";
import Link from "next/link";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import ProcessSection from "src/Components/ProcessSection";
import ServicesSection from "src/Components/ServicesSection";
import AboutSection from "src/Components/AboutSection";
import { FEATURED_PROJECTS } from "./Data/projects";
import { FEATURED_SERVICES } from "src/app/Data/services";
import ProjectSection from "src/Components/ProjectSection";

export const metadata: Metadata = {
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
};

export default function Home() {
  return (
    <>
      <Header />

      { /* <Splash /> */ }

      <main className={styles.page}>
        <div className={styles.hero}>
          <p className={`kicker ${styles.kicker}`}>Welcome to the Studio</p>
          <h1 className={`title ${styles.title}`}>Building Innovative Experiences</h1>
          <p className={styles.subTitle}>Custom websites and digital experiences — fast, modern, and crafted for your brand.</p>
        </div>

        <section
          id="services"
          className={styles.services}
          aria-labelledby="featured-services-heading"
          >
            <ServicesSection
              id="services"
              heading="Featured Services"
              intro="From career milestones to life’s biggest moments, our featured services bring your ideas to life with clean, modern websites."
              items={FEATURED_SERVICES}
            />
          <div className={styles.servicesCta}>
            <p className={styles.ctaIntro}>Discover thoughtful offerings designed to support your brand’s next phase.</p>
            <Link href="/services" className={styles.viewAll}>Browse Our Services</Link>
          </div>
        </section>

        <section id="projects" className={styles.projects}>
          <ProjectSection
            id="our-work"
            heading="Featured Work"
            intro="Our featured projects showcase the clean design and thoughtful details that define every BellScript Studios build."
            items={FEATURED_PROJECTS}
            showViewAll={true}
            viewAllHref="/projects"
            viewAllLabel="See the Full Showcase"
            showHeading={true}
          />
        </section>


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
