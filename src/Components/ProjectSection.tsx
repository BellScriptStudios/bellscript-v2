import styles from "src/app/Styles/ProjectSection.module.css";
import ProjectCard from "src/Components/ProjectCard";
import type { Project } from "src/app/Data/projects";
import Link from "next/link";

type Props = {
    id?: string;
    heading?: string;
    intro?: string;
    items: Project[];
    showViewAll?: boolean;
    viewAllHref?: string;
    viewAllLabel?: string;
    showHeading?: boolean;
    variant?: "default" | "homeFeatured";
};

export default function ProjectSection({
    id = "our-work",
    heading = "Our Work",
    intro,
    items,
    showViewAll = false,
    viewAllHref = "/projects",
    viewAllLabel = "View all projects",
    showHeading = true,
    variant = "default",
}: Props) {
    const isHomeFeatured = variant === "homeFeatured";
    return (
        <section 
            id={id}
            className={`${styles.section} ${isHomeFeatured ? styles.homeFeatured : ""}`}
            aria-labelledby={`${id}-heading`}
        >
            <div className={styles.inner}>
                {showHeading && (
                        <div className={styles.hero}>
                            <h2 className={styles.kicker} id={`${id}-heading`}>
                                {heading}
                            </h2>
                            {intro && <p className={styles.intro}>{intro}</p>}
                        </div>
                )}

                <div className={styles.stack}>
                    {items.map((p) => (
                        <div key={p.id}
                            className={
                                isHomeFeatured ? styles.homeFeatureCard : styles.featureWrap
                            }
                        >
                            <ProjectCard project={p} />
                        </div>
                    ))}
                </div>

                {showViewAll && (
                    <div className={styles.footerCta}>
                        <p className={styles.ctaIntro}>
                            Real projects, real clients, and real solutions built for long-term impact.
                        </p>
                        <Link href={viewAllHref} className={styles.viewAll}>
                            {viewAllLabel}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}