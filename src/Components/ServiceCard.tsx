
import Link from "next/link";
import styles from "src/app/Styles/ServiceCard.module.css";
import type { Service } from "src/app/Data/services";


export default function ServiceCard({
  service,
  compact = false,
}: {
  service: Service;
  compact?: boolean;
}) {
  const { id, title, blurb, bullets, demoUrl } = service;

  const href = compact
  ? service.href ?? `/services#${id}`
  : `/services/${id}`;

  return (
    <article className={`${styles.card} ${service.featured ? styles.cardFeatured : ""}`}>
      {service.featured && (
        <span 
          className={styles.featuredPill}
          aria-label="Featured service"
        >
          Featured
        </span>
      )}
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <p className={styles.blurb}>{blurb}</p>

      {!compact && bullets?.length ? (
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}

      <div className={styles.ctaRow}>
        <Link href={href} className={styles.learnBtn}>
          Learn More
        </Link>

        {demoUrl && (
          <a
            href={demoUrl}
            className={styles.demoBtn}
            aria-label="View Demo"
            target="_blank"
            rel="noopener noreferrer"
            >
              View Demo
            </a>
        )}
      </div>
    </article>
  );
}