import styles from "src/app/Styles/AboutSection.module.css";

export default function AboutSection() {
    return (
        <section id="about" className={styles.about}>
            <div className={`section-inner ${styles.sectionInner}`}>
                <header className={`section-header ${styles.sectionHeader}`}>
                    <p className={`section-kicker ${styles.kicker}`}>About</p>
                    <h2 className={`section-title ${styles.sectionTitle}`}>
                        Built by creatives for the modern web.
                    </h2>
                </header>

                <div className={styles.aboutContent}>

                    <p className={styles.aboutBody}>
                        BellScript Studios focuses on clean, modern builds that feel as good
                        to use as they look. From scrappy ideas to polished launches, we
                        ship fast without cutting corners on craft, accessibility, or
                        performance.
                    </p>

                    <p className={styles.aboutBody}>
                        Whether it&apos;s a launch-week website, a specialty event page, or
                        a custom tool for your team, the goal is always the same: give you
                        something you&apos;re proud to share, and that actually moves the
                        needle.
                    </p>

                </div>

                <p className={styles.aboutNote}>
                    BellScript Studios is a division of{" "}
                    <a
                        href="https://themorningbell.co"
                        target="_blank"
                        rel="noreferrer"
                    >
                        The Morning Bell Co.
                    </a>
                </p>
            </div>
        </section>
    )
}