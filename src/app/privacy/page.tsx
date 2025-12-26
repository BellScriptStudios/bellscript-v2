import type { Metadata } from "next";
import Link from "next/link";
import styles from "src/app/Styles/LegalPage.module.css"
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | BellScript Studios",
    description:
        "Learn how BellScript Studios handles the information you share via our contact form. We keep things simple: no tracking cookies, no ad pixels, no selling your data.",
    openGraph: {
        title: "Privacy Policy | BellScript Studios",
        description:
        "BellScript Studios only collects the information you submit through our contact form. No tracking cookies, no ad pixels, and no selling your data.",
        url: "/privacy",
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
        card: "summary_large_image",
        title: "Privacy Policy | BellScript Studios",
        description:
        "A simple, transparent privacy policy from BellScript Studios. No tracking cookies or ad pixels — just your contact form details, handled with care.",
    },
};

export default function PrivacyPage() {
    return (
        <>
            <Header />

            <main className={styles.page} aria-labelledby="privacy-title">
                <header className={styles.hero}>
                    <p className={`kicker ${styles.kicker}`}>Privacy Policy</p>
                    <h1 id="privacy-title" className={`title ${styles.title}`}>
                    A simple, human-readable privacy policy.
                    </h1>
                    <p className={styles.updated}>Last updated: November 2025</p>
                    <p className={styles.lead}>
                    We only collect what you choose to send us through the contact form —
                    and we use it solely to respond, collaborate, and support your project.
                    </p>
                </header>

                <div className={styles.body}>
                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Information we collect</h2>
                    <p className={styles.sectionBody}>
                        When you submit the contact form, we collect:
                    </p>
                    <ul className={styles.list}>
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Message and project details you share</li>
                    </ul>
                    <p className={styles.sectionBody}>
                        We do{" "}
                        <span className={styles.inlineStrong}>not</span> collect payment
                        details, account logins, or sensitive personal information through
                        this website.
                    </p>
                    <p className={styles.sectionBody}>
                        We also do{" "}
                        <span className={styles.inlineStrong}>not</span> use tracking
                        cookies, analytics pixels, or advertising pixels on this site.
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. How we use your information</h2>
                    <p className={styles.sectionBody}>We use your details to:</p>
                    <ul className={styles.list}>
                        <li>Reply to your inquiry</li>
                        <li>Discuss potential work and project scope</li>
                        <li>Provide follow-up support if we’ve worked together</li>
                    </ul>
                    <p className={styles.sectionBody}>
                        We do <span className={styles.inlineStrong}>not</span> sell, rent,
                        or trade your information with third parties.
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Storage and retention</h2>
                    <p className={styles.sectionBody}>
                        Your message is sent directly to our secure business inbox. We keep
                        your information only as long as it&apos;s needed to:
                    </p>
                    <ul className={styles.list}>
                        <li>Respond to your message</li>
                        <li>Maintain basic project and client records</li>
                    </ul>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Sharing of information</h2>
                    <p className={styles.sectionBody}>
                        We may share information only when reasonably necessary to:
                    </p>
                    <ul className={styles.list}>
                        <li>Comply with applicable laws or legal processes</li>
                        <li>Protect our rights or investigate misuse</li>
                        <li>
                        Fulfill your direct request (for example, emailing files or
                        documentation)
                        </li>
                    </ul>
                    <p className={styles.sectionBody}>
                        We do not sell your data or use it for advertising.
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Links to other sites</h2>
                    <p className={styles.sectionBody}>
                        Our site may link to client work, portfolios, or other external
                        websites. Those sites are operated independently, and their privacy
                        practices are not covered by this policy.
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>6. Your choices & rights</h2>
                    <p className={styles.sectionBody}>
                        You can contact us at any time to:
                    </p>
                    <ul className={styles.list}>
                        <li>Request a copy of the information you&apos;ve sent us</li>
                        <li>Correct or update your details</li>
                        <li>Ask us to delete your information</li>
                    </ul>
                    <p className={styles.sectionBody}>
                        To make a privacy request, email{" "}
                        <span className={styles.inlineStrong}>
                        hello@bellscript.studio
                        </span>
                        .
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>7. Updates to this policy</h2>
                    <p className={styles.sectionBody}>
                        We may update this Privacy Policy occasionally to reflect changes in
                        how we work. When we do, we&apos;ll update the &quot;Last
                        updated&quot; date at the top of this page.
                    </p>
                    </section>
                </div>

                <nav className={styles.backNav} aria-label="Back navigation">
                    <Link href="/" className={styles.backLink}>
                    ← Back to home
                    </Link>
                </nav>
            </main>

            <Footer />
        </>
    );
}