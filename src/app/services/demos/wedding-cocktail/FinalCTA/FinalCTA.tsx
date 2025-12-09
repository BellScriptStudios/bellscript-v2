import Link from "next/link";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Your celebration deserves its own digital experience.
        </h2>

        <p className={styles.subtitle}>
          This is a demo party website designed by BellScript Studios. 
          We craft custom party and event pages that add intention, 
          clarity, and style to every gathering.
        </p>

        <Link href="/services/party-website" className={styles.button}>
          Start your Party Website →
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