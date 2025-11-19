import Link from "next/link";
import styles from "src/app/Styles/ProjectPage.module.css";
import ProjectCard from "src/Components/ProjectCard";
import { PROJECTS } from "src/app/Data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Showcase",
  description:
    "Detroit-based BellScript Studios builds modern websites and digital tools for local businesses, creators, and startups. Explore our portfolio of fast, clean, custom-crafted projects.",
  openGraph: {
    title: "Project Showcase",
    description:
      "Explore modern websites, digital tools, and custom builds crafted by BellScript Studios. Clean interfaces, thoughtful engineering, and fast delivery—designed for today’s brands.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Showcase",
    description:
      "A curated look at our modern builds—clean UI, fast engineering, and custom-crafted digital experiences.",
  },
};

export default function ProjectsPage() {
    const active = PROJECTS.filter(p => p.active !== false);

    return (
        <>
            <main className={styles.page} role="main" aria-labelledby="projects-h1">
                <header className={styles.hero}>
                    <p className={styles.kicker}>Project Showcase</p>
                    <h1 id="projects-h1">Where clean interfaces meet thoughtful engineering.</h1>
                    <p className={styles.lead}>Projects engineered with purpose — refined visuals, scalable architectures, and smooth user journeys for concept to launch.</p>
                </header>


                <div className={styles.stack}>
                    {active.map(p => (
                        <ProjectCard key={p.id} project={p} />
                    ))}
                </div>
                <div className={styles.bottomCta}>
                    <Link
                        href="/contact"
                        className={styles.primaryCta}
                        aria-label="Contact BellScript Studios"
                    >
                        Start a Project
                    </Link>
                </div>
            </main>
        </>
    )
}