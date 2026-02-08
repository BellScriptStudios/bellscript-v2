import styles from "src/app/Styles/AboutPage.module.css"
import { Metadata } from "next";
import Link from "next/link";
import Header from "src/Components/Header";
import FAQ from "src/Components/FAQ";
import { aboutFAQ } from "../Data/faqs/about";
import { pricingFAQ } from "../Data/faqs/pricing";
import Footer from "src/Components/Footer";

export const metadata: Metadata = {
  title: "About | BellScript Studios",
  description:
    "BellScript Studios is the digital arm of The Morning Bell Co., crafting modern websites, polished interfaces, and thoughtful engineering for brands that value clarity and refinement.",
  openGraph: {
    title: "About | BellScript Studios",
    description:
      "BellScript Studios is a digital studio under The Morning Bell Co., dedicated to clean design, fast builds, and intentional engineering.",
    url: "/about",
    images: [
      {
        url: "https://bellscript.studio/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BellScript Studios – Custom Websites & Digital Solutions",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "About | BellScript Studios",
    description:
      "A modern digital studio crafting thoughtful, intentional websites under The Morning Bell Co.",
  },
};

export default function AboutPage() {
  return (
    <>
        <Header />

        <main className={styles.page}>
            <div className={styles.hero}>
                <p className={`kicker ${styles.kicker}`}>A look inside the studio</p>
                <h1 className={`title ${styles.title}`} >
                Where thoughtful design and reliable engineering meet.
                </h1>
                <p className={styles.lead}>
                BellScript Studios builds digital experiences that feel intuitive, polished, and genuinely enjoyable to use.
                </p>
                <p className={styles.subLead}>
                We blend clean aesthetics with dependable tech so your online presence feels effortless — for you and your users.
                </p>
            </div>
            <div className={styles.content}>
                <section className={styles.section}>
                    <h2 className={styles.subTitle}>Crafted with care. Built with intention.</h2>
                    <p className={styles.bodyText}>
                    We believe every project should feel clear, stable, and beautifully structured.
                    </p>
                    <p className={styles.bodyText}>
                    That means taking the time to understand your goals and giving you work that feels both modern and meaningful.
                    </p>
                    <p className={styles.bodyLabel}>What we focus on:</p>
                    <ul className={styles.list}>
                    <li className={styles.listItem}>smooth, responsive user experiences</li>
                    <li className={styles.listItem}>design that feels calm and elevated</li>
                    <li className={styles.listItem}>fast, accessible, reliable builds</li>
                    <li className={styles.listItem}>organized systems that grow with you</li>
                    <li className={styles.listItem}>personal, thoughtful collaboration</li>
                    </ul>
                    <p className={styles.bodyText}>
                    Good technology shouldn’t be stressful — it should feel natural.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subTitle}>Made for real humans, real businesses, and real communities.</h2>
                    <p className={styles.bodyText}>
                    We design with empathy and clarity, keeping your audience at the center.
                    </p>
                    <p className={styles.bodyText}>
                    Whether you’re a local business, a startup, or a creative building something new, we want your digital presence to feel supportive and empowering.
                    </p>
                    <p className={styles.bodyEmphasis}>
                    Simple tools. Clear communication. Real impact.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subTitle}>A part of something bigger — intentionally.</h2>
                    <p className={styles.bodyText}>
                    BellScript Studios operates under <strong className={styles.inlineStrong}>The Morning Bell Co.</strong>,
                    a creative house focused on digital craft, brand expression, and future-minded ideas.
                    </p>
                    <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <strong className={styles.inlineStrong}>The Morning Bell Co.</strong> sets the broader vision.
                    </li>
                    <li className={styles.listItem}>
                        <strong className={styles.inlineStrong}>BellScript Studios</strong> turns that vision into beautifully executed digital experiences.
                    </li>
                    </ul>
                    <p className={styles.bodyText}>
                    Together, we aim to make technology feel warmer, calmer, and more human.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.subTitle}>The <strong>CODE</strong> we live by.</h2>
                    <h3 className={styles.sectionHeading}>
                    Refined design. Practical engineering. Meaningful partnership.
                    </h3>
                    <ul className={styles.list}>
                    <li className={styles.listItem}>Build clean, intuitive experiences.</li>
                    <li className={styles.listItem}>Center real users, not trends.</li>
                    <li className={styles.listItem}>Communicate openly and simply.</li>
                    <li className={styles.listItem}>Keep performance and accessibility standard.</li>
                    <li className={styles.listItem}>
                        Deliver work that looks good, works smoothly, and actually helps people.
                    </li>
                    </ul>
                    <p className={styles.bodyText}>
                    We like to keep things straightforward — and elevated.
                    </p>
                </section>

                    <FAQ 
                        title="FAQ — About the Studio"
                        subtitle="A few things people usually ask"
                        items={aboutFAQ}
                        defaultOpenIndex={0}
                    />


                    <FAQ
                        title="FAQ — Pricing & Process"
                        subtitle="Common questions about our pricing and process"
                        items={pricingFAQ}
                    />

                    <section className={styles.faqFooter}>
                        <p className={styles.footerNote}>
                            BellScript Studios works exclusively with fixed, project-based pricing. We do not offer hourly rates or retainer agreements at this time. This allows us to provide clear, upfront pricing and focus on delivering a high-quality product that meets your needs without any surprises.
                        </p>
                    </section>

                <section className={styles.ctaSection}>
                    <h2 className={styles.ctaHeading}>
                    Let’s build something you’re proud to launch.
                    </h2>
                    <p className={styles.ctaText}>
                    We’d love to hear your idea and help bring it to life.
                    </p>
                    <Link
                    href="/contact"
                    className={styles.ctaButton}
                    aria-label="Contact BellScript Studios"
                    >
                    Start your Project
                    </Link>
                </section>
            </div>
        </main>

        <Footer />
    </>
    );
}
