import styles from "./BrandPartners.module.css";

const partners =  [
    { name: "Hearth Kitchen" },
    { name: "Savor Co." },
    { name: "Olive & Grain" },
    { name: "Daily Bite Magazine" },
]

export default function BrandPartners() {
    return (
        <section className={styles.section} id="partners">
            <div className={styles.inner}>
                <p className={styles.kicker}>Featured in & partnered with</p>

                <div className={styles.logos}>
                    {partners.map((partner) => (
                        <div key={partner.name} className={styles.logoBadge}>
                        {/* If you add real logos later, swap this text for an <Image /> */}
                        <span className={styles.logoText}>{partner.name}</span>
                        </div>
                    ))}
                </div>

                <p className={styles.note}>
                    I collaborate with brands on sponsored recipes, product features, and cozy
                    kitchen content.
                </p>
            </div>
        </section>
    )
}