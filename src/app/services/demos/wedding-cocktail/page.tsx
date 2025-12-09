import styles from "./WeddingCocktail.module.css";
import Link from "next/link";
import type { Metadata } from "next";
import FinalCTA from "./FinalCTA/FinalCTA";

export const metadata:Metadata = {
  title: "Wedding Cocktail Party Demo | BellScript Studios",
  description:
    "A fictional wedding cocktail party invitation website designed by BellScript Studios. Demonstrates elegant event microsite design, RSVP functionality, and premium layout.",
  openGraph: {
    title: "Wedding Cocktail Party Demo | BellScript Studios",
    description:
      "A demo wedding cocktail party site showcasing premium event website design with RSVP features.",
    url: "https://bellscript.studio/services/demos/wedding-cocktail",
    siteName: "Wedding Cocktail Demo (Portfolio)",
  },
};

export default function WeddingCocktailPage() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        An Evening of Cocktails & Celebration
                    </h1>
                    <p className={styles.subtitle}>
                        Join us for an intimate welcome gathering
                         as we begin a weekend filled with joy, 
                         romance, and unforgettable moments.
                    </p>

                    <p className={styles.detailsTitle}>Event Details</p>
                    <p className={styles.detailBadge}>Friday, June 13th, 2026 · 7:00 PM</p>
                    <p className={styles.detailBadge}>The Loft at Riverwood</p>

                    <Link
                        href="/services/demos/wedding-cocktail#rsvp"
                        className={styles.RSVPCTA}
                    >
                        RSVP to the Cocktail Party
                    </Link>
                </div>

                <div className={styles.about}>
                    <h2 className={styles.sectionTitle}>A Warm Welcome to Our Wedding Weekend</h2>
                    <p className={styles.aboutBody}>
                        We’re so grateful to have our closest friends and family 
                        join us as we begin this beautiful celebration.
                        This cocktail gathering is a chance to relax, connect, 
                        and savor the anticipation of the day ahead.
                    </p>

                    <p className={styles.aboutBody}>
                        Enjoy crafted cocktails, light bites, and 
                        the company of the people who mean the world to us.
                    </p>

                    <p className={styles.aboutNote}>
                        This event is adults-only.
                    </p>
                </div>

                <div className={styles.details}>
                    <h2 className={styles.sectionTitle}>Event Details</h2>
                    <div className={styles.detailList}>
                        <p className={styles.detailTitle}>Venue:</p>
                        <p className={styles.detailText}>The Loft at Riverwood</p>
                        <p className={styles.detailTitle}>Address:</p>
                        <p className={styles.detailText}>1280 Lakeshore Drive, Detroit, MI</p>
                        <p className={styles.detailTitle}>Time:</p>
                        <p className={styles.detailText}>7:00–10:30 PM</p>
                        <p className={styles.detailTitle}>Dress Code:</p>
                        <p className={styles.detailText}>Cocktail Attire</p>
                        <p className={styles.detailTitle}>Parking:</p>
                        <p className={styles.detailText}>Complimentary valet will be available</p>
                        <p className={styles.detailTitle}>Hosted By:</p>
                        <p className={styles.detailText}>The Wedding Party</p>
                    </div>

                    <p className={styles.microCopy}>
                        A beautiful, modern space overlooking the 
                        river — perfect for an evening of celebration.
                    </p>
                </div>
            </div>

            <div className={styles.RSVP} id="rsvp">
                <h2 className={styles.sectionTitle}>We’d Love to Know if You Can Join Us</h2>
                <p className={styles.RSVPBody}>
                    Your RSVP helps us prepare a thoughtful 
                    and seamless experience for all our guests.
                </p>

                <form
                    className={styles.form}
                    action="https://formspree.io/f/YOUR_FORMSPREE_ID"
                    method="POST"
                    >
                    <input
                        type="text"
                        name="_gotcha"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                    />

                    <input
                        type="hidden"
                        name="_subject"
                        value="New Wedding Cocktail Party RSVP"
                    />

                    {/* <input type="hidden" name="_redirect" value="https://yourdomain.com/thanks" /> */}

                    <div className={styles.field}>
                        <label htmlFor="fullName" className={styles.label}>
                            Full Name <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="email" className={styles.label}>
                            Email Address <span className={styles.required}>*</span>
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={styles.input}
                            required
                        />
                    </div>

                    <div className={styles.field}>
                        <span className={styles.label}>
                            Will you be attending? <span className={styles.required}>*</span>
                        </span>
                        <div className={styles.radioGroup}>
                            <label className={styles.radioOption}>
                                <input
                                type="radio"
                                name="attending"
                                value="Yes"
                                className={styles.radioInput}
                                required
                                />
                                <span>Yes, I’ll be there</span>
                            </label>
                            <label className={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="attending"
                                    value="No"
                                    className={styles.radioInput}
                                />
                            <span>Sadly can’t make it</span>
                            </label>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="guestCount" className={styles.label}>
                            Number of Guests (including you)
                        </label>
                        <input
                            id="guestCount"
                            name="guestCount"
                            type="number"
                            min={1}
                            max={10}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.field}>
                        <label htmlFor="dietary" className={styles.label}>
                            Dietary Notes (optional)
                        </label>
                        <textarea
                            id="dietary"
                            name="dietary"
                            rows={3}
                            className={styles.textarea}
                            placeholder="Let us know about any allergies or dietary preferences."
                        />
                    </div>

                    <div className={styles.submitRow}>
                        <button type="submit" className={styles.submitButton}>
                            Submit RSVP
                        </button>
                        <p className={styles.helper}>
                            After you submit, you’ll see a confirmation page from us.
                        </p>
                    </div>
                </form>
            </div>
            <FinalCTA />
        </section>
    )
}