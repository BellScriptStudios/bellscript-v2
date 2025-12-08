import Link from "next/link";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Let’s create a digital presence that works as hard as you do.
        </h2>

        <p className={styles.subtitle}>
          Showcase your experience with a clean, modern website 
          designed to make hiring managers stop and pay attention.
        </p>

        <Link href="/services/resume-website" className={styles.button}>
          Start your Resume Website →
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