import Link from "next/link";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Your story deserves this level of care.
        </h2>

        <p className={styles.subtitle}>
          This wedding site is a demo — but the attention to detail is real.
          BellScript Studios designs and builds modern, custom websites 
          that feel intentional, not templated.
        </p>

        <Link href="/services/website-in-a-week" className={styles.button}>
          Work with BellScript →
        </Link>

        <p className={styles.note}>
          Have questions before starting? I’m happy to help.
        </p>
        <nav className={styles.backNav}>
          <Link
            href="/services"
            aria-label="Return to all services"
            className={styles.backLink}
          >
            ← Back to Services
          </Link>
        </nav>
      </div>
    </section>
  );
}