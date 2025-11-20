import Image from "next/image";
import styles from "src/app/Styles/CaseStudy.module.css";

export const metadata = {
    title: "BellScript Studios — Version One",
    description:
        "A look back at the first version of BellScript Studios: a fast, minimal, MVP that laid the foundation for the current brand.",
};

export default function BellScriptV1Page() {
    return (
        <main className={styles.page}>
            <header className={styles.hero}>
                <p className={styles.kicker}>Archived Project</p>
                <h1 className={styles.title}>Case Study: BellScript Studios V1</h1>
                <p className={styles.lead}>
                    The original BellScript Studios site. Build fast, simple and with clarity as the main goal.
                </p>
            </header>

            <section className={styles.section}>
                <h2>What v1 Was</h2>
                <p>
                    Version One of BellScript Studios was a minimal MVP designed to quickly establish the 
                    brand online. It focused on clarity, speed, and simplicity — just enough structure to 
                    communicate the services and open the first sales channel.
                </p>
                <p>It serves as the foundation that helped shap the more refined version of the site we have today.</p>
            </section>

            <section className={styles.section}>
                <h2>Visual Archive</h2>
                <div className={styles.gallery}>
                    <div className={styles.galleryItem}>
                        <p className={styles.imgTitle}>Homepage</p>
                        <Image
                            src="/images/projects/bs-v1-home-3.png"
                            alt="BellScript v1 Home"
                            width={1400}
                            height={1050}
                        />
                    </div>
                    <div className={styles.galleryItem}>
                        <p className={styles.imgTitle}>About Page</p>
                        <Image
                            src="/images/projects/bs-v1-about-2.png"
                            alt="BellScript v1 About"
                            width={1400}
                            height={1050}
                        />
                    </div>
                    <div className={styles.galleryItem}>
                        <p className={styles.imgTitle}>Our Work Page</p>
                        <Image
                            src="/images/projects/bs-v1-projects.png"
                            alt="BellScript v1 Services"
                            width={1400}
                            height={1050}
                        />
                    </div>
                    <div className={styles.galleryItem}>
                        <p className={styles.imgTitle}>Services Page</p>
                        <Image
                            src="/images/projects/bs-v1-services.png"
                            alt="BellScript v1 Services"
                            width={1400}
                            height={1050}
                        />
                    </div>
                    <div className={styles.galleryItem}>
                        <p className={styles.imgTitle}>Contact Page</p>
                        <Image
                            src="/images/projects/bs-v1-contact.png"
                            alt="BellScript v1 Contact"
                            width={1400}
                            height={1050}
                        />
                    </div>
                    <div className={styles.galleryItem}>
                        <p className={styles.imgTitle}>Header</p>
                        <Image
                            src="/images/projects/bs-v1-header.png"
                            alt="BellScript v1 Contact"
                            width={1400}
                            height={1050}
                        />
                        <p className={styles.imgTitle}>Footer</p>
                        <Image
                            src="/images/projects/bs-v1-footer.png"
                            alt="BellScript v1 Contact"
                            width={1400}
                            height={1050}
                        />
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2>What We Learned</h2>
                <ul>
                    <li>The brand need a more intentional visual identity.</li>
                    <li>The service offerings needed a stronger story and positioning.</li>
                    <li>The UI needed more depth, warmth, and personality.</li>
                    <li>The structure was working — just need polish.</li>
                </ul>
            </section>

            <section className={styles.section}>
                <h2>Why It&apos;s Archived</h2>
                <p>
                    Version One played its role — it got BellScript online fast and helped generate the 
                    first interest and conversations. As the brand evolved, the site needed to evolve too.
                </p>
                <p>
                    Version Two builds on those foundations with stronger visuals, 
                    clearer messaging, and a more refined engineering approach.
                </p>
            </section>

            <footer className={styles.footer}>
                <a href="/projects" className={styles.back}>
                    ← Back to Projects
                </a>
            </footer>
        </main>
    )
}