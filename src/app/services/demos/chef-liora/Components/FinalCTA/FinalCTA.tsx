import Link from "next/link";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Imagine this as your website in just seven days.
        </h2>

        <p className={styles.subtitle}>
          Clean design, confident storytelling, and a layout built for your brand.
          Website in a Week brings it all together — fast, modern, and fully custom.
        </p>

        <Link href="/services/website-in-a-week" className={styles.button}>
          Start your Website in a Week →
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