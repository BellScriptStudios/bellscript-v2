"use client"
import styles from "./OurStory.module.css";
import Image from "next/image";

export default function OurStory() {
    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.kicker}>Our Story</p>
                    <h1 className={styles.title}>How it all began</h1>
                    <p className={styles.subtitle}>
                        It wasn’t instant — but it was inevitable.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <h2 className={styles.h2}>The beginning</h2>
                    <p className={styles.body}>
                        We didn’t meet with fireworks or grand 
                        declarations. It was quieter than that.
                        A conversation that lingered. A feeling 
                        that stayed.
                    </p>

                    <p className={styles.body}>
                        What started as something simple quickly became something 
                        steady — the kind of connection that doesn’t need convincing.
                    </p>
                </div>
            </section>

            <section className={styles.storyImageSection}>
                <div className={styles.sectionInner}>
                    <figure className={styles.storyFigure}>
                        <div className={styles.storyImageFrame}>
                            {/* Photo by The Short Guy Films from Pexels */}
                            <Image
                                src="/images/demos/our-story-bw-2.jpg"
                                alt="Alex and Lauren together in a quiet moment"
                                fill
                                sizes="(max-width: 900px) 100vw, 1100px"
                                className={styles.storyImage}
                                priority={false}
                            />
                        </div>

                        <figcaption className={styles.storyCaption}>
                            Las Vegas · after dark · and somehow, it felt like home.
                        </figcaption>
                    </figure>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <h2 className={styles.h2}>The Shift</h2>
                    <p className={styles.body}>
                        Somewhere along the way, life became easier with each other in it.
                        The days felt fuller. The ordinary felt meaningful.
                    </p>

                    <p className={styles.body}>What once felt effortless began to feel essential.</p>
                </div>
            </section>

            <section className={styles.storyImageSection}>
                <div className={styles.sectionInner}>
                    <figure className={styles.storyFigure}>
                        <div className={`${styles.storyImageFrame} ${styles.storyImageTall}`}>
                            {/* Photo by The Short Guy Films from Pexels */}
                            <Image
                                src="/images/demos/our-story-bw-1.jpg"
                                alt="Alex and Lauren together in a quiet moment in Toronto"
                                fill
                                sizes="(max-width: 900px) 100vw, 1100px"
                                className={styles.storyImage}
                                priority={false}
                            />
                        </div>
                            <figcaption className={styles.storyCaption}>
                                Toronto · the world kept going. we stayed.
                            </figcaption>
                    </figure>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <h2 className={styles.h2}>The yes</h2>
                    <p className={styles.body}>
                        The question didn’t come as a surprise — but the moment still took our breath away.
                    </p>
                    <p className={styles.body}>
                        Not because of where we were, but because of how 
                        sure it felt. The answer had always been there.
                    </p>
                    <p className={styles.body}>
                        Yes, to choosing each other. Every day.
                    </p>
                </div>
            </section>

            <section className={styles.quoteSection}>
                <div className={styles.sectionInner}>
                    <blockquote className={styles.quote}>
                        <p className={styles.quoteText}>
                            Not a spark. A steady flame.
                        </p>
                    </blockquote>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <p className={styles.closing}>
                        And now, we get to celebrate with the people who made us who we are.
                    </p>
                </div>
            </section>
        </>
    )
}