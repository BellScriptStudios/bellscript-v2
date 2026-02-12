import Image from "next/image";
import Link from "next/link";
import styles from "../app/Styles/FeaturedProjects.module.css";
import type { Project } from "src/app/Data/projects";

type Props = {
  items: Project[];
  heading?: string;
  intro?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  showViewAll?: boolean;
  id?: string;
};

export default function FeaturedProjects({
  items,
  heading = "Featured Projects",
  intro = "A selection of work that highlights our approach, craft, and attention to detail.",
  viewAllHref = "/projects",
  viewAllLabel = "See the Full Showcase",
  showViewAll = true,
  id = "featured-projects",
}: Props) {
  const pool = items.filter((p) => p.featured && p.active !== false);

  const hero =
    pool.find((p) => p.homeHero) ??
    pool[0];

  const usedIds = new Set(hero ? [hero.id] : []);

  const side = pool.filter((p) => !usedIds.has(p.id)).slice(0, 2);
  side.forEach((p) => usedIds.add(p.id));

  const rest = pool.filter((p) => !usedIds.has(p.id)).slice(0, 2);

  const renderCard = (p: Project, variant: "hero" | "side" | "support") => {
    const isExternal = p.link?.href?.startsWith("http");
    const showThumb = Boolean(p.thumbnail?.src) && variant === "hero";
    const typeLabel = p.inhouse ? "In-house" : "Client";
    const typeClass = p.inhouse ? styles.inhouse : styles.client;

    return (
      <article
        key={p.id}
        className={[
          styles.card,
          variant === "hero" ? styles.heroCard : "",
          variant === "side" ? styles.sideCard : "",
          variant === "support" ? styles.supportCard : "",
          !showThumb ? styles.noThumb : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className={styles.badges}>
          <span className={`${styles.typeBadge} ${typeClass}`}>{typeLabel}</span>

          {p.status === "research-develop" && (
            <span
              className={`${styles.typeBadge} ${styles.rndBadge}`}
              aria-label="Research and Development"
            >
                Research &amp; Development
            </span>
          )}

          {p.status === "coming-soon" && (
            <span 
                className={`${styles.typeBadge} ${styles.soonBadge}`}
                aria-label="Coming Soon"
            >
                Coming Soon
            </span>
          )}
        </div>

        {showThumb && (
          <div className={styles.thumbWrap}>
            <Image
              src={p.thumbnail!.src}
              alt={p.thumbnail!.alt}
              width={p.thumbnail!.width ?? 1200}
              height={p.thumbnail!.height ?? 800}
              className={styles.thumbnail}
              priority={variant === "hero"}
            />
          </div>
        )}

        <div className={styles.content}>
          <h3 className={styles.title}>{p.title}</h3>
          {p.subtitle && <p className={styles.subtitle}>{p.subtitle}</p>}
          <p className={styles.blurb}>{p.blurb}</p>

          {p.featuresShort?.length ? (
            <ul className={styles.features}>
              {p.featuresShort
                .slice(0, variant === "hero" ? 5 : variant === "side" ? 3 : 3)
                .map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
            </ul>
          ) : null}

          <div className={styles.ctaSlot}>
            {(p.link && (
                <a
                  href={p.link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`${styles.link} ${styles.ctaPill}`}
                  aria-label={p.link.ariaLabel ?? `Open ${p.title}`}
                >
                  {p.link.label ?? "View Project"}
                </a>
              )
            )}
          </div>
        </div>
      </article>
    );
  };

  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-heading`}>
      <div className={`section-inner ${styles.sectionInner}`}>
        <header className={`section-header ${styles.sectionHeader}`}>
          <p className={`section-kicker ${styles.kicker}`}>Our Work</p>
          <p className={`section-title ${styles.sectionTitle}`} id={`${id}-heading`}>
            {heading}
          </p>
          {intro && <p className={`section-intro ${styles.sectionIntro}`}>{intro}</p>}
        </header>

        <div className={styles.layout}>
          <div className={styles.topGrid}>
            {hero ? <div className={styles.heroSlot}>{renderCard(hero, "hero")}</div> : null}
            <div className={styles.sideStack}>
              {side.map((p) => renderCard(p, "side"))}
            </div>
          </div>

          {rest.length ? (
            <div className={styles.bottomGrid}>
              {rest.map((p) => renderCard(p, "support"))}
            </div>
          ) : null}
        </div>

        {showViewAll && (
          <div className={styles.footerCta}>
            <p className={`cta-intro ${styles.ctaIntro}`}>
              Real projects, real clients, and real solutions built with care.
            </p>
            <Link href={viewAllHref} className={`view-all ${styles.viewAll}`}>
              <span>{viewAllLabel}</span>
              <span className={`cta-arrow ${styles.ctaArrow}`} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}