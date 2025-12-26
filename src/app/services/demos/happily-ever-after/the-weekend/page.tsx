import styles from "./TheWeekend.module.css";
import Link from "next/link";
import Image from "next/image";
import { SITE, NAV } from "../site";

export default function TheWeekend() {
    const MAPS = {
        chandelier:
            "https://www.google.com/maps/search/?api=1&query=The+Chandelier+at+The+Cosmopolitan+Las+Vegas",
        venetian:
            "https://www.google.com/maps/search/?api=1&query=The+Venetian+Resort+Las+Vegas",
        bouchon:
            "https://www.google.com/maps/search/?api=1&query=Bouchon+The+Venetian+Las+Vegas",
    };

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.kicker}>The Weekend</p>
                    <h1 className={styles.title}>A few moments worth planning for.</h1>
                    <p className={styles.subtitle}>
                        {SITE.location} · after dark · and intentionally paced.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <h2 className={styles.h2}>At a glance</h2>

                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <p className={styles.cardLabel}>Friday Evening</p>
                            <p className={styles.cardTitle}>Welcome drinks</p>
                            <p className={styles.cardText}>
                                A relaxed start — no agenda, just familiar faces.
                            </p>
                        </div>

                        <div className={styles.card}>
                            <p className={styles.cardLabel}>Saturday Afternoon</p>
                            <p className={styles.cardTitle}>Ceremony</p>
                            <p className={styles.cardText}>
                                A short, intentional moment focused on what matters.
                            </p>
                        </div>

                        <div className={styles.card}>
                            <p className={styles.cardLabel}>Saturday Evening</p>
                            <p className={styles.cardTitle}>Cocktails & reception</p>
                            <p className={styles.cardText}>
                                Dinner, dancing, and a night worth remembering.
                            </p>
                        </div>

                        <div className={styles.card}>
                            <p className={styles.cardLabel}>Sunday Morning</p>
                            <p className={styles.cardTitle}>Casual farewell</p>
                            <p className={styles.cardText}>
                                Coffee, stories, and one last goodbye.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details */}
            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <h2 className={styles.h2}>The details</h2>

                    <div className={styles.detail}>
                        <div className={styles.detailTop}>
                            <h3 className={styles.h3}>Friday · Welcome drinks</h3>

                            <div className={styles.miniPhotoFrame}>
                                {/* Image by MJCouch from Pixabay */}
                                <Image
                                    src="/images/demos/welcome.jpg"
                                    alt="The Chandelier lounge at The Cosmopolitan"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 220px"
                                    className={styles.miniPhoto}
                                    priority={false}
                                />
                            </div>
                        </div>
                        
                        <div className={styles.metaRow}>
                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Time</p>
                                <p className={styles.metaValue}>7:30 PM — 9:30 PM</p>
                            </div>

                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Venue</p>
                                <p className={styles.metaValue}>
                                    <a
                                        href={MAPS.chandelier}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.venueLink}
                                    >
                                        The Chandelier · The Cosmopolitan <span className={styles.ext}>↗</span>
                                    </a>
                                </p>
                            </div>

                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Address</p>
                                <p className={styles.metaValue}>3708 S Las Vegas Blvd</p>
                            </div>
                        </div>

                        <p className={styles.body}>
                            A casual start to the weekend.
                            Come as you are — or as Vegas inspires you.

                        </p>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.detailTop}>
                            <h3 className={styles.h3}>Saturday · Ceremony & Reception</h3>
                            <div className={styles.miniPhotoFrame}>
                                {/* Photo by  Sides Imagery from Pexels */}
                                <Image
                                    src="/images/demos/venetian.jpg"
                                    alt="The Ballroom at The Venetian"
                                    fill
                                    sizes="(max-width: 900px) 100vw, 220px"
                                    className={styles.miniPhoto}
                                    priority={false}
                                />
                            </div>
                        </div>

                        <div className={styles.timeline}>
                            <div className={styles.timeRow}>
                                <p className={styles.time}>4:30 PM</p>
                                <p className={styles.timeText}>Guest arrival & seating</p>
                            </div>

                            <div className={styles.timeRow}>
                                <p className={styles.time}>5:00 PM</p>
                                <p className={styles.timeText}>Ceremony begins</p>
                            </div>

                            <div className={styles.timeRow}>
                                <p className={styles.time}>5:30 PM</p>
                                <p className={styles.timeText}>Cocktail hour</p>
                            </div>

                            <div className={styles.timeRow}>
                                <p className={styles.time}>6:45 PM</p>
                                <p className={styles.timeText}>Dinner service</p>
                            </div>

                            <div className={styles.timeRow}>
                                <p className={styles.time}>8:30 PM</p>
                                <p className={styles.timeText}>Dancing</p>
                            </div>
                        </div>

                        <div className={styles.metaRow}>
                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Venue</p>
                                <p className={styles.metaValue}>
                                    <a
                                        href={MAPS.venetian}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.venueLink}
                                    >
                                        Palazzo Ballroom · The Venetian <span className={styles.ext}>↗</span>
                                    </a>
                                </p>
                            </div>

                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Address</p>
                                <p className={styles.metaValue}>3355 S Las Vegas Blvd</p>
                            </div>

                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Dress code</p>
                                <p className={styles.metaValue}>Black tie optional</p>
                            </div>
                        </div>

                        <p className={styles.body}>
                            A short ceremony designed to feel calm, personal, and present.
                        </p>
                    </div>

                    <div className={styles.detail}>
                        <div className={styles.detailTop}>
                            <h3 className={styles.h3}>Sunday · Farewell</h3>
                        </div>
                        <div className={styles.metaRow}>
                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Time</p>
                                <p className={styles.metaValue}>10:30 AM – 12:00 PM</p>
                            </div>
                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Venue</p>
                                <p className={styles.metaValue}>
                                    <a
                                        href={MAPS.bouchon}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.venueLink}
                                    >
                                        Bouchon · The Venetian <span className={styles.ext}>↗</span>
                                    </a>
                                </p>
                            </div>
                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Address</p>
                                <p className={styles.metaValue}>3355 S Las Vegas Blvd</p>
                            </div>
                        </div>
                        <p className={styles.body}>
                            For anyone still in town, we’ll gather casually before heading home.
                        </p>
                    </div>
                </div>
            </section>

            {/* Dress Code */}
            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <h2 className={styles.h2}>Dress code</h2>
                    <p className={styles.body}>
                        Black tie optional. Moody. Luxe. Vegas after dark.
                    </p>
                    <p className={styles.muted}>
                        Think elevated — not overdone.
                    </p>
                </div>
            </section>

            {/* Reassurance */ }
            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <p className={styles.reassurance}>
                        Las Vegas can feel like a lot — but this weekend won’t be.  
                        Everything has been planned with intention.  
                        Just show up, relax, and celebrate with us.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    <p className={styles.ctaNote}>
                        Planning ahead helps us take care of the details.
                    </p>
                    <Link href={`${NAV[0].href}/rsvp`} className={styles.ctaLink}>
                        RSVP here →
                    </Link>
                </div>
            </section>
        </>
    )
}