import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";

export default function ChefLioraHero() {
    return (
        <main className={styles.page}>
                        <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.heroCopy}>
                        <p className={styles.kicker}>Chef Liora</p>
                        <h1 className={styles.heroTitle}>
                            Hi, I&rsquo;m Chef Liora — here to make cooking feel effortless.
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Simple recipes, cozy flavors, and real-food inspiration for everyday life.
                        </p>

                        <div className={styles.heroAction}>
                            <Link href="#recipes" className={styles.heroPrimaryCta}>
                                Browse recipes
                            </Link>
                            <Link href="#videos" className={styles.heroSecondaryCta}>
                                Watch tutorials
                            </Link>
                        </div>

                        <p className={styles.heroMeta}>New recipes every week ✦</p>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.heroPhotoFrame}>
                        {/* Image by Kampus Production from Pixabay */}
                        <Image
                            src="/images/demos/chef-liora3.jpg"
                            alt="Chef Liora cooking in a warm, cozy kitchen"
                            fill
                            sizes="(min-width: 900px) 480px, 90vw"
                            className={styles.heroPhoto}
                            priority
                        />
                        </div>

                        <div className={styles.heroStatCard}>
                            <p className={styles.heroStatLabel}>Recipes</p>
                            <p className={styles.heroStatValue}>120+</p>
                            <p className={styles.heroStatSub}>simple, everyday dishes</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}