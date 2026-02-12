import type { Metadata } from "next";
import styles from "src/app/Styles/LegalPage.module.css";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";

export const metadata: Metadata = {
    title: "Terms of Service | BellScript Studios",
    description:
        "Read the terms of service for using the BellScript Studios website. Learn how we handle content, links, and contact form submissions.",
    openGraph: {
        title: "Terms of Service | BellScript Studios",
        description:
        "These Terms of Service explain how you may use the BellScript Studios website, how contact form submissions are handled, and how our studio content is protected.",
        url: "/terms",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Terms of Service | BellScript Studios",
        description:
        "BellScript Studios' Terms of Service for using the site and contacting the studio about digital projects.",
    },
};

export default function TermsPage() {
    return (
        <>
            <Header />
            <main className={styles.page} aria-labelledby="terms-title">
                <header className={`page-hero ${styles.pageHero}`}>
                    <p className={`page-kicker ${styles.pageKicker}`}>Terms of Service</p>
                    <h1 id="terms-title" className={`page-title ${styles.pageTitle}`}>
                    Simple terms for using this site.
                    </h1>
                    <p className={styles.updated}>Last updated: November 2025</p>
                    <p className={`page-intro ${styles.pageIntro}`}>
                    These terms explain how you may use the BellScript Studios website and
                    what to expect when you get in touch about a project.
                    </p>
                </header>

                <div className={styles.body}>
                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Using the website</h2>
                    <p className={styles.sectionBody}>
                        You&apos;re welcome to browse the site, view our work, and contact
                        us about potential collaborations. By using this site, you agree not
                        to:
                    </p>
                    <ul className={styles.list}>
                        <li>Disrupt or attempt to disrupt the site&apos;s operation</li>
                        <li>
                        Copy or reuse designs, branding, or code without written
                        permission
                        </li>
                        <li>Use the site for unlawful or harmful purposes</li>
                    </ul>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Contact form & inquiries</h2>
                    <p className={styles.sectionBody}>
                        Submitting our contact form does{" "}
                        <span className={styles.inlineStrong}>not</span> create a client
                        relationship or guarantee availability.
                    </p>
                    <p className={styles.sectionBody}>
                        A project officially begins only after both sides approve and sign a
                        written proposal, contract, or statement of work.
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Intellectual property</h2>
                    <p className={styles.sectionBody}>
                        Unless otherwise stated, all content on this site is owned by{" "}
                        <span className={styles.inlineStrong}>BellScript Studios</span> and,
                        where applicable,{" "}
                        <span className={styles.inlineStrong}>The Morning Bell Co.</span>
                    </p>
                    <p className={styles.sectionBody}>This includes:</p>
                    <ul className={styles.list}>
                        <li>Logos and brand elements</li>
                        <li>Visual identity and layout</li>
                        <li>Project images and case studies</li>
                        <li>Copywriting and marketing language</li>
                        <li>Code snippets and interface concepts</li>
                    </ul>
                    <p className={styles.sectionBody}>
                        You may not reuse, reproduce, distribute, or adapt this content
                        without written permission.
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. External links</h2>
                    <p className={styles.sectionBody}>
                        We sometimes link to client sites, tools, or third-party platforms.
                        These sites are operated independently, and we&apos;re not
                        responsible for their content, policies, or security practices.
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Disclaimer</h2>
                    <p className={styles.sectionBody}>
                        This website is provided “as is” and “as available.” While we do our
                        best to keep things accurate and running smoothly, we don&apos;t
                        provide guarantees about:
                    </p>
                    <ul className={styles.list}>
                        <li>Continuous availability of the website</li>
                        <li>Freedom from errors, bugs, or interruptions</li>
                        <li>Completeness or accuracy of external links</li>
                    </ul>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>6. Limitation of liability</h2>
                    <p className={styles.sectionBody}>
                        To the fullest extent permitted by law, BellScript Studios is not
                        liable for any indirect, incidental, or consequential damages
                        arising from:
                    </p>
                    <ul className={styles.list}>
                        <li>Your use or inability to use the site</li>
                        <li>Actions taken based on site content</li>
                        <li>Issues caused by third-party services or links</li>
                    </ul>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>7. Changes to these terms</h2>
                    <p className={styles.sectionBody}>
                        We may occasionally update these Terms of Service. When we do,
                        we&apos;ll revise the &quot;Last updated&quot; date at the top of
                        the page. Your continued use of the site after changes means you
                        accept the updated terms.
                    </p>
                    </section>

                    <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>8. Contact</h2>
                    <p className={styles.sectionBody}>
                        If you have questions about these terms or how we work, you can
                        reach us at{" "}
                        <span className={styles.inlineStrong}>
                        hello@bellscript.stuido
                        </span>
                        .
                    </p>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}