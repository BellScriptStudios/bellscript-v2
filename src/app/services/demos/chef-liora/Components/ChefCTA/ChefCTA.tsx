import Link from "next/link";
import styles from "./ChefCTA.module.css";

export default function ChefCTA() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Let’s cook something cozy together.
        </h2>

        <p className={styles.subtitle}>
          From simple weeknight dinners to warm weekend bakes, I’m sharing recipes
          made to bring comfort to your kitchen.
        </p>

        <div className={styles.actions}>
          <Link href="/demos/website-in-a-week/recipes" className={styles.primary}>
            Browse all recipes →
          </Link>

          <Link href="/demos/chef-liora/contact" className={styles.secondary}>
            Work with me
          </Link>
        </div>
      </div>
    </section>
  );
}