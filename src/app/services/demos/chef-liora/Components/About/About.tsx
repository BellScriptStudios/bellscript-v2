import styles from "./About.module.css";
import Image from "next/image";
import Link from "next/link";

export default function AboutDemo() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.inner}>
                <div className={styles.imageWrap}>
                    <div className={styles.photoFrame}>
                        <Image
                            //Image by Kampus Production from Pixabay
                            src="/images/demos/about-headshot2.jpg"
                            alt="Chef Liora in a cozy kitchen"
                            fill
                            sizes="(min-width: 1024px) 320px, (min-width: 640px) 40vw, 80vw"
                            quality={95}
                            className={styles.photo}
                        />
                    </div>
                </div>

                <div className={styles.copy}>
                    <p className={styles.kicker}>About Chef Liora</p>
                    <h2 className={styles.title}>
                        Cozy, everyday cooking with a calm, modern twist.
                    </h2>

                    <p className={styles.bodyText}>
                        I&apos;m a chef, recipe creator, and food storyteller focused on making
                        home cooking feel joyful and approachable. From weeknight pastas to
                        slow weekend bakes, I share recipes that fit real life—without a
                        thousand complicated steps.
                    </p>

                    <p className={styles.bodyText}>
                        You&apos;ll find simple techniques, flexible ingredients, 
                        and the kind of dishes that make your home feel extra warm.
                    </p>

                    <Link href="/demos/website-in-a-week/about" className={styles.link}>
                        Read my story 
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}