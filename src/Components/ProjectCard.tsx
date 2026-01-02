import Image from "next/image";
import styles from "src/app/Styles/ProjectCard.module.css";
import type { Project } from "src/app/Data/projects";

function Icon({ kind }: { kind?: Project["icon"] }) {
    if (kind === "cli") {
        return (
            <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="18" height="14" rx="2" ry="2" className={styles.iconFrame}/>
                <path d="M7 10l3 2-3 2" className={styles.iconAccent}/>
                <path d="M12 14h5" className={styles.iconLine}/>
            </svg>
        );
    }

    if (kind === "shop") {
        return (
            <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true" >
                <rect x="3" y="4" width="18" height="14" rx="2" ry="2" className={styles.iconFrame}/>
                <path d="M4 5 h16 v2.5 H4 z" className={styles.iconAccentThree} />
                <path d="M4 7 q2 2 4 0 q2 2 4 0 q2 2 4 0 q2 2 4 0" className={styles.iconAccentThree} />
                <rect x="10.5" y="12" width="3" height="6" rx="0.5" className={styles.iconLineThree} /> 
                <rect x="6" y="12" width="3" height="3" rx="0.5" className={styles.iconLineThree} /> 
            </svg>
        );
    }

    if (kind === "mirror") {
        return (
            <svg
            className={styles.projectIcon}
            viewBox="0 0 24 24"
            aria-hidden="true"
            >
            <rect
                x="6"
                y="3"
                width="12"
                height="18"
                rx="3"
                ry="3"
                className={styles.iconFrame}
            />
            <path
                d="M9 6 L11 8 M13 16 L15 18"
                className={styles.iconAccent}
            />
            <path
                d="M10 7 L14 17"
                className={styles.iconLine}
            />
            </svg>
        );
    }

    if (kind === "rnd") {
        return (
            <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" className={styles.iconFrame}/>
            <path
                d="M12 2v2 M12 20v2 M4 12H2 M22 12h-2 M5 5l1.5 1.5 M17.5 17.5l1.5 1.5 M5 19l1.5-1.5 M17.5 6.5L19 5"
                className={styles.iconAccent}
            />
            <ellipse cx="12" cy="12" rx="6" ry="3.5" className={styles.iconLine}/>
            </svg>
        );
    }

    return (
        <svg className={styles.projectIcon} viewBox="0 0 24 24" aria-hidden="true">
            <g transform="translate(0,-0.5)">
            <path d="M6 10
                    Q8 6, 12 6
                    Q16 6, 18 10" 
                className={styles.iconAccent}/>

            <path d="M6 11 q1 2 2 0
                    q1 2 2 0
                    q1 2 2 0
                    q1 2 2 0
                    q1 2 2 0
                    q1 2 2 0" 
                className={styles.iconAccent}/>
            <path d="M12 11 v4 
                    a3 3 0 0 1 -3 3 
                    a2 2 0 0 0 2 -2" 
                className={styles.iconLine} />
            </g>
        </svg>
    );
}

export default function ProjectCard({ project }: { project: Project }) {
  const { title, subtitle, blurb, features, link, thumbnail, status, icon } = project;
  const hasImage = Boolean(thumbnail);
  const typeLabel = project.inhouse ? "In-house" : "Client";
  const typeClass = project.inhouse ? styles.inhouse : styles.client;

  return (
    <article
      className={`${styles.card}
        ${hasImage ? styles.withImage : styles.noImage}
        ${project.featured ? styles.featuredCard : ""}
        ${project.inhouse ? styles.inhouseCard : ""}`}
    >
      {hasImage && (
        <div className={styles.thumbwrap}>
          <a
            href={thumbnail!.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} image`}
          >
            <Image
              src={thumbnail!.src}
              alt={thumbnail!.alt}
              width={thumbnail!.width ?? 300}
              height={thumbnail!.height ?? 200}
              className={styles.image}
              priority={false}
            />
          </a>
        </div>
      )}
      <div className={styles.badges}>
        <span className={`${styles.typeBadge} ${typeClass}`}>{typeLabel}</span>

          {status === "research-develop" && (
            <span
              className={`${styles.typeBadge} ${styles.rndBadge}`}
              aria-label="Research and Development"
            >
                Research &amp; Development
            </span>
          )}

          {status === "coming-soon" && (
            <span 
                className={`${styles.typeBadge} ${styles.soonBadge}`}
                aria-label="Coming Soon"
            >
                Coming Soon
            </span>
          )}
        </div>

      <div className={styles.details}>
        <div className={styles.header}>
          <Icon kind={icon} />
          <h3 className={styles.title}>{title}</h3>
        </div>

        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

        <p className={styles.blurb}>{blurb}</p>

        {features?.length ? (
          <>
            <h5>Key Features</h5>
            <ul className={styles.features}>
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </>
        ) : null}

        <div className={styles.ctaSlot}>
          {(
            link && (
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${styles.link} ${styles.ctaPill}`}
                aria-label={link.ariaLabel || `Open ${title}`}
              >
                {link.label || "View Project"}
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
}