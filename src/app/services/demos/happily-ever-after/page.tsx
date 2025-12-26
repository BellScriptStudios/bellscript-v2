import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

import { SITE, NAV } from "./site";

export default function Page() {
    const rsvpHref = `${NAV[0].href}/rsvp`;

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <section className={styles.photoSection} aria-label="Engagement photo">
                        <div className={styles.sectionInner}>
                            <div className={styles.photoFrame}>
                            {/* Pixabay Photo by The Short Guy Films: https://www.pexels.com/photo/romantic-evening-engagement-in-toronto-29187293/*/}
                                <Image
                                    src="/images/demos/alex-lauren-1.jpg"
                                    className={styles.photo}
                                    width={500}
                                    height={500}
                                    alt="Alex and Lauren"
                                />
                            </div>
                            <p className={styles.photoCaption}>Las Vegas · after dark</p>
                        </div>
                    </section>

                    <p className={styles.kicker}>We&apos;re getting married!</p>
                    <h1 className={styles.title}>{SITE.couple}</h1>

                    <p className={styles.meta}>
                        {SITE.date} · {SITE.location}
                    </p>

                    <p className={styles.tagline}>
                        <em>{SITE.tagline}</em>
                    </p>

                    <div className={styles.heroCtas}>
                        <Link href={rsvpHref} className={styles.primaryBtn}>
                            Join Us
                        </Link>

                        <Link href={`${NAV[0].href}/the-weekend`} className={styles.secondaryBtn}>
                            View the Weekend
                        </Link>
                    </div>

                    <p className={styles.heroNote}>
                        <span className={styles.goldLine} aria-hidden="true" />
                        *Black tie optional. Vegas after dark energy encouraged.*
                        <span className={styles.goldLine} aria-hidden="true" />

                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <p className={styles.lead}>
                        In a city built on spectacle, we found something real.
                        This is the beginning of something magical.
                    </p>

                    <p className={styles.body}>
                        What started quietly became undeniable. What felt effortless became permanent.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <p className={styles.sectionKicker}>Chapters</p>
                    <h2 className={styles.h2}>Everything you need, nothing you don’t.</h2>

                    <div className={styles.cards}>
                        <Link className={styles.card}href={`${NAV[0].href}/our-story`}>
                            <p className={styles.cardTitle}>Our Story</p>
                            <p className={styles.cardText}>
                                The quiet beginning, the inevitable proposal, and the forever part.
                            </p>
                            <span className={styles.cardAction}>Read more →</span>
                        </Link>

                        <Link className={styles.card}href={`${NAV[0].href}/the-weekend`}>
                            <p className={styles.cardTitle}>The Weekend</p>
                            <p className={styles.cardText}>
                                Ceremony, cocktails, reception — with timing that actually helps.
                            </p>
                            <span className={styles.cardAction}>See details →</span>
                        </Link>

                        <Link className={styles.card} href={`${NAV[0].href}/travel-stay`}>
                            <p className={styles.cardTitle}>Travel &amp; Stay</p>
                            <p className={styles.cardText}>
                                Hotel blocks, airport info, and a few places we love after midnight.
                            </p>
                            <span className={styles.cardAction}>Plan the trip →</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.featureStrip}>
                <div className={styles.sectionInner}>
                    <div className={styles.featureGrid}>
                        <div className={styles.feature}>
                            <p className={styles.featureLabel}>RSVP</p>
                            <p className={styles.featureValue}>Kindly respond by {SITE.rsvpDeadline}</p>
                        </div>

                        <div className={styles.feature}>
                            <p className={styles.featureLabel}>Location</p>
                            <p className={styles.featureValue}>{SITE.location}</p>
                        </div>

                        <div className={styles.feature}>
                            <p className={styles.featureLabel}>Mood</p>
                            <p className={styles.featureValue}>Luxe. Vegas after dark.</p>
                        </div>

                        <div className={styles.featureCta}>
                            <Link href={`${NAV[0].href}/rsvp`} className={styles.featureCtaLink}>
                                RSVP Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}