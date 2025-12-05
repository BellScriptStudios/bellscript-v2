import type { Metadata } from "next";
import styles from "src/app/Styles/ContactPage.module.css";
import Link from "next/link";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";

export const metadata: Metadata = {
    title: "Contact",
    description: "Share your project with BellScript Studios. Clean, modern websites and digital experiences built with care under The Morning Bell Co.",
    openGraph: {
    title: "Contact BellScript Studios",
    description:
      "Tell us what you’re building. We’ll help design, develop, and launch a modern, reliable experience.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact BellScript Studios",
    description:
      "Reach out to start a new website, product, or digital refresh with BellScript Studios.",
  },
}

export default function AboutPage() {
    return (
        <>
            <Header />

            <main className={styles.page} role="main" aria-labelledby="contact-h1">
                <section className={styles.hero}>
                    <p className={`kicker ${styles.kicker}`}>Let&apos;s start the conversation</p>
                    <h1 id="contact-h1" className={`title ${styles.title}`}>Start a project. Keep it simple.</h1>
                    <p className={styles.lead}>
                        Tell us what you’re building, where you are in the process,
                        and we’ll follow up with a clear next step — no pressure, no chaos.
                    </p>
                    <p className={styles.subLead}>
                        A few details now help us come back with the right questions,
                        rough scope, and timeline for your build.
                    </p>
                </section>

                <section className={styles.grid} aria-label="Project inquiry form">
                    <div className={styles.copyPanel}>
                        <div className={styles.copyInner}>
                            <h2 className={styles.subTitle}>What to share</h2>
                            <p className={styles.body}>
                                You don&apos;t need a full brief — just a snapshot of what you&apos;re
                                trying to do. Screenshots, links, or rough notes are welcome.
                            </p>
                            <ul className={styles.list}>
                                <li>What you&apos;re looking to build or refresh.</li>
                                <li>Any links to existing sites, decks, or inspo.</li>
                                <li>Rough timeline and budget comfort zone.</li>
                            </ul>
                            <p className={styles.body}>
                                From there, we&apos;ll suggest a path: a Website-in-a-Week build,
                                a custom project, or a phased approach that fits where you are now.
                            </p>

                            <div className={styles.metaBlock}>
                                <p className={styles.metaLabel}>Prefer email?</p>
                                <p className={styles.metaValue}>
                                    Reach us directly at{" "}
                                    <a href="mailto:hello@bellscript.studio">
                                    hello@bellscript.studio
                                    </a>
                                </p>
                                <p className={styles.metaNote}>
                                    BellScript Studios is part of{" "}
                                    <Link href="https://themorningbell.co" target="_blank">
                                        The Morning Bell Co.
                                    </Link>
                                    , a creative house for digital products and brands.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.formCard}>
                        <form
                            className={styles.form}
                            action="https://formspree.io/f/xyzpnbed"
                            method="POST"
                        >
                            <div className={styles.fieldRow}>
                                <div className={styles.field}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="email">Email</label>
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="company">
                                    Business / organization <span className={styles.optional}>(optional)</span>
                                </label>
                                <input
                                    id="company"
                                    name="company"
                                    type="text"
                                    autoComplete="organization"
                                />
                            </div>

                            <div className={styles.fieldRow}>
                                <div className={styles.field}>
                                    <label htmlFor="projectType">Project type</label>
                                    <select id="projectType" name="projectType" defaultValue="">
                                    <option value="" disabled>
                                        Select an option
                                    </option>
                                    <option value="website-in-a-week">Website-in-a-Week</option>
                                    <option value="marketing-site">Marketing / brand website</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="web-app">Web app / product</option>
                                    <option value="fix-refresh">Fix &amp; refresh an existing site</option>
                                    <option value="other">Something else</option>
                                    </select>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="budget">
                                    Approx. budget <span className={styles.optional}>(rough is fine)</span>
                                    </label>
                                    <select id="budget" name="budget" defaultValue="">
                                    <option value="" disabled>
                                        Select a range
                                    </option>
                                    <option value="under-2k">Under $2,000</option>
                                    <option value="2k-5k">$2,000 – $5,000</option>
                                    <option value="5k-10k">$5,000 – $10,000</option>
                                    <option value="10k-plus">$10,000+</option>
                                    <option value="not-sure">Not sure yet</option>
                                    </select>
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="timeline">Ideal timeline</label>
                                <select id="timeline" name="timeline" defaultValue="">
                                    <option value="" disabled>
                                    When are you hoping to start?
                                    </option>
                                    <option value="asap">ASAP / next 2–3 weeks</option>
                                    <option value="1-2-months">Within 1–2 months</option>
                                    <option value="3-plus">3+ months out</option>
                                    <option value="flexible">Flexible</option>
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="message">Project details</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Share a bit about your project, goals, and any links or context that would be helpful."
                                    required
                                />
                            </div>

                            <div className={styles.inlineRow}>
                                <label className={styles.checkboxLabel}>
                                    <input
                                    type="checkbox"
                                    name="okToEmail"
                                    className={styles.checkbox}
                                    defaultChecked
                                    />
                                    <span>I&apos;m okay with follow-up emails about this project.</span>
                                </label>
                            </div>

                            <div className={styles.actions}>
                                <button
                                    type="submit"
                                    className={`btn-primary ${styles.submit}`}
                                >
                                    Send message
                                </button>
                                <p className={styles.helperText}>
                                    You&apos;ll hear back within 1–2 business days with next steps.
                                </p>
                                <p className={styles.agree}>
                                    By submitting, you acknowledge our Privacy Policy.
                                </p>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
            
            <Footer />
        </>
    )
}