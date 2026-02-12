import Link from "next/link";
import styles from "src/app/Styles/ProjectPage.module.css";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import ProjectCard from "src/Components/ProjectCard";
import { PROJECTS } from "src/app/Data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Showcase | BellScript Studios",
  description:
    "Detroit-based BellScript Studios builds modern websites and digital tools for local businesses, creators, and startups. Explore our portfolio of fast, clean, custom-crafted projects.",
  openGraph: {
    title: "Project Showcase | BellScript Studios",
    description:
      "Explore modern websites, digital tools, and custom builds crafted by BellScript Studios. Clean interfaces, thoughtful engineering, and fast delivery—designed for today’s brands.",
    url: "/projects",
    images: [
        {
            url: "https://bellscript.studio/og-image.jpg",
            width: 1200,
            height: 630,
            alt: "BellScript Studios — Version One",
        },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Showcase | BellScript Studios",
    description:
      "A curated look at our modern builds—clean UI, fast engineering, and custom-crafted digital experiences.",
  },
};

export default function ProjectsPage() {
    const active = PROJECTS.filter(p => p.active !== false);

    return (
        <>
            <Header />

            <main className={styles.page} role="main" aria-labelledby="projects-h1">
                <header className={`page-hero ${styles.pageHero}`}>
                    <p className={`page-kicker ${styles.pageKicker}`}>The work we do</p>
                    <h1 id="projects-h1" className={`page-title ${styles.pageTitle}`}>Where clean interfaces meets thoughtful engineering.</h1>
                    <p className={`page-intro ${styles.pageIntro}`}>
                        Projects engineered with purpose — refined visuals, scalable 
                        architectures, and smooth user journeys for concept to launch.
                    </p>
                </header>

                <div className={styles.content}>
                    <div className={styles.stack}>
                        {active.map(p => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </div>
                    <div className={styles.bottomCta}>
                        <p className={styles.contactHeader}>Collaborate With Us.</p>
                        <p className={styles.contactIntro}>Whether you’re starting fresh or leveling up, we’d love to build with you.</p>

                        <Link
                            href="/contact"
                            className={`btn-primary ${styles.ctaButton}`}
                            aria-label="Contact BellScript Studios"
                        >
                            Start your Project
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
