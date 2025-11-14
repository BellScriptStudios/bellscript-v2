import Link from "next/link";
import styles from "src/app/Styles/ServiceDetail.module.css";
import type { Service } from "src/app/Data/services";

export default function ServiceDetail({ service }: { service: Service }) {
  const {
    id,
    title,
    priceFrom,
    timeline,
    long,
    blurb,
    includes,
    bullets,
    outcome,
    plans,
  } = service;

  const isSiteCare = id === "site-care-plans";

  const hasIncludes = Array.isArray(includes) && includes.length > 0;
  const hasBullets = Array.isArray(bullets) && bullets.length > 0;
  const hasOutcomeList = Array.isArray(outcome) && outcome.length > 0;
  const hasOutcomeText =
    typeof outcome === "string" && outcome.trim().length > 0;

  return (
    <main className={styles.main} role="main" aria-labelledby="service-title">
      <div className={styles.detailBody} aria-labelledby="service-title">
        <header className={styles.header}>
          <h1 id="service-title">{title}</h1>

          {priceFrom && (
            <p className={styles.meta}>
              <strong>Starting at:</strong> {priceFrom}
            </p>
          )}

          {plans?.length ? (
            <section
              className={
                isSiteCare ? styles.siteCareSection : styles.section
              }
              aria-labelledby="plans-heading"
            >
              {plans.map((plan) => (
                <div
                key={plan.id}
                  className={
                    isSiteCare
                      ? `${styles.siteCarePlanCard} ${
                        plan.featured ? styles.siteCarePlanCardFeatured : ""
                        }`
                      : `${styles.planCard} ${
                        plan.featured ? styles.featured : ""
                      }`
                    }
                  >
                    {isSiteCare && plan.featured && (
                      <span className={styles.siteCareBadge}>Most Popular</span>
                    )}

                    <h3 className={styles.siteCarePlanName}>{plan.name}</h3>
                    <p className={styles.siteCarePlanPrice}>{plan.price}</p>

                    <ul className={styles.siteCarePlanPerks}>
                      {plan.perks.map((perk, i) => (
                        <li key={i}>{perk}</li>
                      ))}
                    </ul>
                  </div>
                ))}
            </section>
          ) : null}

          {timeline && (
            <p className={styles.meta}>
              <strong>Timeline:</strong> {timeline}
            </p>
          )}

          {(long || blurb) && (
            <p className={styles.lead}>{long ?? blurb}</p>
          )}

          
        </header>

        <section className={styles.columns}>
          {hasIncludes && (
            <article
              className={styles.card}
              role="region"
              aria-labelledby="includes-heading"
            >
              <h2 className={styles.h2}>What&apos;s included</h2>
              <ul className={styles.list}>
                {includes!.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          )}

          {hasOutcomeList && (
            <article
              className={`${styles.card} ${isSiteCare ? styles.siteCareOutcome : ""}`}
              role="region"
              aria-labelledby="outcomes-heading"
            >
              <h2 className={styles.h2}>Outcomes</h2>
              <ul className={styles.list}>
                {(outcome as string[])!.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          )}

          {hasOutcomeText && (
            <article
              className={`${styles.card} ${isSiteCare ? styles.siteCareOutcome : ""}`}
              role="region"
              aria-labelledby="outcome-heading"
            >
              <h2 className={styles.h2}>Outcome</h2>
              <p className={styles.outcomeText}>{outcome as string}</p>
            </article>
          )}

          {hasBullets && (
            <article
              className={styles.card}
              role="region"
              aria-labelledby="highlights-heading"
            >
              <h2 className={styles.h2}>Highlights</h2>
              <ul className={styles.list}>
                {bullets!.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </article>
          )}
        </section>

        <div className={styles.bottomCta}>
          <Link
            href="/contact"
            className={`btn-primary ${styles.primaryCta} ${isSiteCare ? styles.siteCareCta : ""}`}
            aria-label="Contact BellScript Studios"
          >
            {isSiteCare ? "Talk About Your Care Plan →" : "Start a project →"}
          </Link>
        </div>

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
    </main>
  );
}