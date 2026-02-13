import Link from "next/link";
import styles from "src/app/Styles/ServiceDetail.module.css";
import type { Service } from "src/app/Data/services";

export default function ServiceDetail({ service }: { service: Service }) {
  const {
    id,
    title,
    priceFrom,
    priceFlat,
    timeline,
    long,
    extLong,
    blurb,
    includes,
    outcome,
    plans,
    addons,
    note,
    demoUrl,
  } = service;

  const isSiteCare = id === "site-care-plans";

  const hasIncludes = Array.isArray(includes) && includes.length > 0;
  const hasOutcomeList = Array.isArray(outcome) && outcome.length > 0;
  const hasOutcomeText =
    typeof outcome === "string" && outcome.trim().length > 0;
  {/* const hasWhoFor = Array.isArray(sub) && sub.length > 0; */}

  return (
    <main className={styles.page} role="main" aria-labelledby="service-title">
      <div className={styles.detailBody} aria-labelledby="service-title">
        <p className={`page-kicker ${styles.pageKicker}`}>
          {isSiteCare ? "Ongoing care, without the overhead" : "Get into the details"}
        </p>
        <header className={styles.header}>
          <h1 id="service-title">{title}</h1>

          {priceFrom || priceFlat && (
            <p className={styles.meta}>
              <strong>
                {priceFlat ? "Flat fee:" : "Starting at:"}
              </strong>{" "}
              {priceFlat ?? priceFrom}
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
                      <span className={styles.siteCareBadge}>Popular</span>
                    )}

                    <h3 className={styles.siteCarePlanName}>{plan.name}</h3>
                    <p className={styles.siteCarePlanPrice}>{plan.price}</p>
                    <p className={styles.siteCarePlanIncludes}>{plan.plus}</p>

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
          <div className={styles.leadContainer}>
            {(long || blurb) && (
              <p className={styles.lead}>{long ?? blurb}</p>
            )}

            {extLong && (
              <p className={styles.extLong}>
                {extLong}
              </p>
            )}

            {note && (
              <p className={styles.note}>
                {note}
              </p>
            )}
          </div>
        </header>
        
        { /* 

        <section className={styles.whoFor}>
          {hasWhoFor && (
            <div className={styles.whoForInner}>
              <h2 className={styles.h2}>Who this is for</h2>

              <ul className={styles.whoForList}>
                {sub!.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </div>
          )}
        </section>

        */ }

        <section className={styles.columns}>
          <div className={styles.columnsGrid}>
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
          </div>
        </section>

        {addons?.length ? (
          <section
            className={styles.addonsSection}
            aria-labelledby="addons-heading"
          >
            <h3 id="addons-heading" className={styles.addonsHeading}>
              Optional Add-Ons
            </h3>

            <ul className={styles.addonsList}>
              {addons.map((addon) => (
                <li key={addon.id} className={styles.addonItem}>
                  <div className={styles.addonInfo}>
                    <span className={styles.addonName}>
                      {addon.name}
                      {addon.popular && (
                        <span className={styles.addonBadge}>Popular</span>
                      )}
                    </span>
                    {addon.desc && (
                      <p className={styles.addonDescription}>
                        {addon.desc}
                      </p>
                    )}
                  </div>

                  <span className={styles.addonPrice}>{addon.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className={styles.bottomCta}>
          <Link
            href="/contact"
            className={`btn-primary ${styles.primaryCta} ${isSiteCare ? styles.siteCareCta : ""}`}
            aria-label="Contact BellScript Studios"
          >
            {isSiteCare ? "Talk About Your Care Plan" : "Start your project"}
          </Link>
          
          {demoUrl && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={demoUrl} 
              className={styles.demoCta}>
              View Demo
            </Link>
          )}
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