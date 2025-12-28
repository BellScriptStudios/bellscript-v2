import Link from "next/link";
import styles from "../app/Styles/FeaturedServices.module.css";
import type { Service, ServiceCategory } from "../app/Data/services";

type Props = {
    categories: ServiceCategory[];
};


export default function HomeFeaturedServices({ categories }: Props) {
    const featuredServices: Service[] = categories
        .flatMap((cat) => cat.items)
        .filter((s) => s.active !== false && s.featured)
        .slice(0, 3);

    return (
        <section
            id="services"
            className={styles.services}
            aria-labelledby="featured-services-heading"
        >
            <div className={styles.servicesInner}>
                <header className={styles.servicesHeader}>
                    <p className={styles.kicker}>Featured Services</p>
                    <h2 className={styles.heading} id="featured-services-heading">
                        Our Picks
                    </h2>
                    <p className={styles.intro}>
                        From career milestones to life’s biggest moments, our featured
                        services bring your ideas to life with clean, modern websites.
                    </p>
                </header>

                <div className={styles.grid}>
                    {featuredServices.map((service) => (
                        <article key={service.id} className={styles.featureCard}>
                            <div className={styles.cardTop}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardBlurb}>{service.blurb}</p>
                            </div>

                            {service.bullets?.length ? (
                                <ul className={styles.cardBullets}>
                                    {service.bullets.slice(0, 5).map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            ) : null}

                            <div className={styles.cardCtaRow}>
                                {service.href && (
                                    <Link href={service.href} className={styles.learnBtn}>
                                        <span>Learn More</span>
                                    </Link>
                                )}

                                {service.demoUrl && (
                                    <a
                                        href={service.demoUrl}
                                        className={styles.demoBtn}
                                        aria-label={`View demo for ${service.title}`}
                                        target="_bank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>View Demo</span>
                                    </a>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                <div className={styles.servicesCta}>
                    <p className={styles.ctaIntro}>
                        Discover thoughtful offerings designed to support your brand’s next phase.
                    </p>

                    <Link href="/services" className={styles.viewAll}>
                        <span>Browse All Services</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}
