import type { Metadata } from "next";
import Splash from "src/Components/Splash";
import styles from "src/app/Styles/Page.module.css";
import Link from "next/link";
import ProcessSection from "src/Components/ProcessSection";
import ServicesSection from "src/Components/ServicesSection";
import AboutSection from "src/Components/AboutSection";
import { FEATURED_PROJECTS } from "./Data/projects";
import { FEATURED_SERVICES } from "src/app/Data/services";
import ProjectSection from "src/Components/ProjectSection";

export const metadata: Metadata = {
  title: "We build in a week — BellScript Studios",
  description:
    "BellScript Studios builds clean, modern websites and digital experiences — fast. From Website-in-a-Week builds to local business bundles, we help you launch without the corporate bloat.",
  openGraph: {
    type: "website",
    url: "/",
    title: "We build in a week — BellScript Studios",
    description:
      "Custom websites and digital experiences — fast, modern, and crafted for real-world ideas.",
  },
    twitter: {
    card: "summary_large_image",
    title: "We build in a week — BellScript Studios",
    description:
      "Custom websites and digital experiences — fast, modern, and crafted for your brand.",
  },
};

export default function Home() {
  return (
    <>
      <Splash />

      <main className={styles.page}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Building Innovative Experiences</h1>
          <p className={styles.subTitle}>Custom websites and digital experiences — fast, modern, and crafted for your brand.</p>
          <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>Start your Project</Link>
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
        </section>

        <section id="projects" className={styles.projects}>
          <ProjectSection
            id="our-work"
            heading="Featured Work"
            intro="Our featured projects showcase the clean design and thoughtful details that define every BellScript Studios build."
            items={FEATURED_PROJECTS}
            showViewAll={true}
            viewAllHref="/projects"
            viewAllLabel="View all projects"
            showHeading={true}
          />
        </section>

        <ProcessSection />

        <AboutSection />
        
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
    </>
  );
}
