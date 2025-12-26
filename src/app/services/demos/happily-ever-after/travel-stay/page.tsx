import styles from "./TravelStay.module.css";
import Link from "next/link";
import { NAV } from "../site";

const MAPS = {
    cosmo:
        "https://www.google.com/maps/search/?api=1&query=The+Cosmopolitan+of+Las+Vegas",
    venetian:
        "https://www.google.com/maps/search/?api=1&query=The+Venetian+Resort+Las+Vegas",
    las:
        "https://www.google.com/maps/search/?api=1&query=Harry+Reid+International+Airport+LAS",
    bouchon:
        "https://www.google.com/maps/search/?api=1&query=Bouchon+The+Venetian+Las+Vegas",
    herbs:
        "https://www.google.com/maps/search/?api=1&query=Herbs+%26+Rye+Las+Vegas",
    velveteen:
        "https://www.google.com/maps/search/?api=1&query=The+Velveteen+Rabbit+Las+Vegas",
    urth:
        "https://www.google.com/maps/search/?api=1&query=Urth+Caff%C3%A9+Wynn+Las+Vegas",
};

export default function TravelStay() {
    const homeHref = NAV[0]?.href ?? "/services/demos/happily-ever-after";
    const rsvpHref = `${homeHref}/rsvp`;

  return (
    <>
        <section className={styles.hero}>
            <div className={styles.heroInner}>
                <p className={styles.kicker}>Travel &amp; Stay</p>
                <h1 className={styles.title}>Arrive smoothly. Stay close.</h1>
                <p className={styles.subtitle}>
                    A few recommendations to make Vegas feel easy — and the weekend feel
                    effortless.
                </p>
            </div>
        </section>

      {/* Hotels */}
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.h2}>Where to stay</h2>
                <p className={styles.body}>
                    We recommend staying on the Strip for convenience. Both options below
                    keep you close to everything.
                </p>

                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <p className={styles.cardLabel}>Primary</p>
                            <p className={styles.cardTitle}>The Venetian Resort</p>
                        </div>

                        <p className={styles.cardText}>
                            Classic, luxe, and easy for getting around. Great rooms, great
                            energy, and central to the weekend.
                        </p>

                        <div className={styles.metaRow}>
                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Address</p>
                                <p className={styles.metaValue}>3355 S Las Vegas Blvd</p>
                            </div>

                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Map</p>
                                <p className={styles.metaValue}>
                                    <a
                                        href={MAPS.venetian}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.venueLink}
                                    >
                                        Open in Google Maps <span className={styles.ext}>↗</span>
                                    </a>
                                </p>
                            </div>

                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Tip</p>
                                <p className={styles.metaValue}>Book early for best rates.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <p className={styles.cardLabel}>Alternate</p>
                            <p className={styles.cardTitle}>The Cosmopolitan</p>
                        </div>

                        <p className={styles.cardText}>
                            Moody, modern, and iconic — especially at night. Perfect if you
                            want “Vegas after dark” energy.
                        </p>

                        <div className={styles.metaRow}>
                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Address</p>
                                <p className={styles.metaValue}>3708 S Las Vegas Blvd</p>
                            </div>

                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Map</p>
                                <p className={styles.metaValue}>
                                    <a
                                        href={MAPS.cosmo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.venueLink}
                                    >
                                        Open in Google Maps <span className={styles.ext}>↗</span>
                                    </a>
                                </p>
                            </div>

                            <div className={styles.metaItem}>
                                <p className={styles.metaLabel}>Vibe</p>
                                <p className={styles.metaValue}>Elevated. Stylish. Late-night.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Travel */}
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.h2}>Getting here</h2>

                <div className={styles.detail}>
                    <h3 className={styles.h3}>Fly into LAS</h3>

                    <div className={styles.metaRow}>
                        <div className={styles.metaItem}>
                            <p className={styles.metaLabel}>Airport</p>
                            <p className={styles.metaValue}>Harry Reid International (LAS)</p>
                        </div>

                        <div className={styles.metaItem}>
                            <p className={styles.metaLabel}>Typical ride</p>
                            <p className={styles.metaValue}>15–25 minutes to the Strip</p>
                        </div>

                        <div className={styles.metaItem}>
                            <p className={styles.metaLabel}>Map</p>
                            <p className={styles.metaValue}>
                                <a
                                    href={MAPS.las}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.venueLink}
                                >
                                    Open in Google Maps <span className={styles.ext}>↗</span>
                                </a>
                            </p>
                        </div>
                    </div>

                    <p className={styles.body}>
                        Rideshare is easy. Taxis are also convenient and often right
                        outside baggage claim.
                    </p>
                </div>

                <div className={styles.detail}>
                    <h3 className={styles.h3}>Getting around</h3>
                    <p className={styles.body}>
                        Most spots are walkable from the hotel. For everything else,
                        rideshare is the move — especially at night.
                    </p>
                </div>
            </div>
        </section>
        
        {/* Favorites */}
        <section className={styles.section}>
            <div className={styles.sectionInner}>
                <h2 className={styles.h2}>A few places we love</h2>
                <p className={styles.body}>
                    Optional, but highly recommended if you want to make a weekend out of it.
                </p>
                
                <div className={styles.smallGrid}>
                    <a
                        className={styles.smallCard}
                        href={MAPS.herbs}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className={styles.smallTitle}>Herbs &amp; Rye</p>
                        <p className={styles.smallText}>Steakhouse energy · cocktails · late-night.</p>
                        <span className={styles.smallAction}>
                            Maps <span className={styles.ext}>↗</span>
                        </span>
                    </a>

                    <a
                        className={styles.smallCard}
                        href={MAPS.velveteen}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className={styles.smallTitle}>The Velveteen Rabbit</p>
                        <p className={styles.smallText}>Mood lighting · creative drinks · relaxed.</p>
                        <span className={styles.smallAction}>
                            Maps <span className={styles.ext}>↗</span>
                        </span>
                    </a>

                    <a
                        className={styles.smallCard}
                        href={MAPS.urth}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <p className={styles.smallTitle}>Urth Caffé</p>
                        <p className={styles.smallText}>Coffee + pastry reset the next morning.</p>
                        <span className={styles.smallAction}>
                            Maps <span className={styles.ext}>↗</span>
                        </span>
                    </a>
                </div>
            </div>
      </section>
      
      {/* Soft CTA */}
      <section className={styles.section}>
            <div className={styles.sectionInner}>
                <p className={styles.ctaNote}>
                    Quick reminder — responding helps us plan the details.
                </p>
                <Link href={rsvpHref} className={styles.ctaLink}>
                    RSVP here →
                </Link>
            </div>
        </section>
    </>
  );
}