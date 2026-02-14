import Link from "next/link";
import styles from "src/app/Styles/ServiceDetail.module.css";
import type { Service, IncludeIconKey } from "src/app/Data/services";
import { ADDONS } from "src/app/Data/services";

import {
  Activity,
  BadgeCheck,
  Calendar,
  CreditCard,
  Database,
  Gauge,
  Globe,
  Heart,
  Image as ImageIcon,
  LayoutTemplate,
  MapPin,
  MessagesSquare,
  Shield,
  ShoppingCart,
  Share2,
  SlidersHorizontal,
  Upload,
  UserRoundCheck,
  Wrench,
} from "lucide-react";

const INCLUDE_ICONS: Record<IncludeIconKey, React.ElementType> = {
  strategy: SlidersHorizontal,
  layout: LayoutTemplate,
  form: MessagesSquare,
  seo: Globe,
  speed: Gauge,
  accessibility: BadgeCheck,
  deploy: Activity,
  updates: Wrench,
  map: MapPin,
  calendar: Calendar,
  heart: Heart,
  share: Share2,
  shield: Shield,
  dashboard: Activity,
  gallery: ImageIcon,
  upload: Upload,
  auth: UserRoundCheck,
  database: Database,
  admin: Shield,
  payments: CreditCard,
  cart: ShoppingCart,
};

const ADDON_BY_ID = Object.fromEntries(ADDONS.map((a) => [a.id, a])) as Record<
  string,
  (typeof ADDONS)[number]
>;

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
    note,
    demoUrl,
  } = service;

  const isSiteCare = id === "site-care-plans";
  const isWedding = id === "wedding-website";
  const isFixRefresh = id === "fix-and-refresh-package";

  const normalizedIncludes = (includes ?? []).map(
    (x): { title: string; desc?: string; icon?: IncludeIconKey } =>
      typeof x === "string" ? { title: x } : x
  );
  const hasIncludes = normalizedIncludes.length > 0;

  const outcomeItems =
    Array.isArray(outcome)
      ? outcome
      : typeof outcome === "string" && outcome.trim().length
      ? [outcome]
      : [];

  const outcomeTitle =
    isSiteCare || isFixRefresh
      ? "What you can expect"
      : isWedding
      ? "Designed to make your day smoother and more memorable."
      : "Built to reduce friction and elevate your presence.";

  const resolvedAddons = (service.addons ?? [])
    .map((addonId) => ADDON_BY_ID[addonId])
    .filter(Boolean);

  return (
    <main className={styles.page} role="main" aria-labelledby="service-title">
      <div className={styles.detailBody} aria-labelledby="service-title">
        <p className={`page-kicker ${styles.kicker}`}>
          {isSiteCare ? "Ongoing care, without the overhead" : "Get into the details"}
        </p>

        <header className={styles.header}>
          <h1 id="service-title">{title}</h1>

          {(priceFrom || priceFlat) && (
            <p className={styles.meta}>
              <strong>{priceFlat ? "Flat fee:" : "Starting at:"}</strong>{" "}
              {priceFlat ?? priceFrom}
            </p>
          )}

          {plans?.length ? (
            <section
              className={isSiteCare ? styles.siteCareSection : styles.section}
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
                      : `${styles.planCard} ${plan.featured ? styles.featured : ""}`
                  }
                >
                  {isSiteCare && plan.featured && (
                    <span className={styles.siteCareBadge}>Popular</span>
                  )}

                  <h3 className={styles.siteCarePlanName}>{plan.name}</h3>
                  <p className={styles.siteCarePlanPrice}>{plan.price}</p>
                  {plan.plus ? (
                    <p className={styles.siteCarePlanIncludes}>{plan.plus}</p>
                  ) : null}

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
            {(long || blurb) && <p className={styles.lead}>{long ?? blurb}</p>}
            {extLong && <p className={styles.extLong}>{extLong}</p>}
            {note && <p className={styles.note}>{note}</p>}
          </div>
        </header>

        <section className={styles.framework} aria-labelledby="framework-title">
          <div className={styles.frameworkHead}>
            <p className={styles.frameworkLabel}>
              {isSiteCare ? "SITE CARE" : "WHAT YOU GET"}
            </p>

            <h2 id="framework-title" className={styles.frameworkTitle}>
              Everything you need.
              <span className={styles.frameworkTitleLine2}>
                Nothing that clutters it.
              </span>
            </h2>

            <p className={styles.frameworkSub}>
              A consistent build system designed to look intentional, feel smooth,
              and stay easy to manage.
            </p>
          </div>

          {hasIncludes && (
            <div
              className={styles.featureGrid}
              role="list"
              aria-label="Included features"
            >
              {normalizedIncludes.map((item, i) => {
                const Icon = item.icon ? INCLUDE_ICONS[item.icon] : Activity;

                return (
                  <article key={i} className={styles.featureCard} role="listitem">
                    <div className={styles.featureTop}>
                      <span className={styles.featureIcon} aria-hidden="true">
                        <Icon size={16} />
                      </span>
                      <h3 className={styles.featureTitle}>{item.title}</h3>
                    </div>

                    {item.desc ? (
                      <p className={styles.featureDesc}>{item.desc}</p>
                    ) : null}
                  </article>
                );
              })}
            </div>
          )}

          {outcomeItems.length > 0 && (
            <section className={styles.outcomePanel} aria-label="Outcomes">
              <h3 className={styles.outcomeTitle}>{outcomeTitle}</h3>

              <div className={styles.outcomeGrid}>
                {outcomeItems.slice(0, 3).map((x, i) => (
                  <div key={i} className={styles.outcomePillar}>
                    <p>{x}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </section>

        {resolvedAddons.length ? (
          <section className={styles.addonsSection} aria-labelledby="addons-heading">
            <h3 id="addons-heading" className={styles.addonsHeading}>
              Optional Add-Ons
            </h3>

            <ul className={styles.addonsList}>
              {resolvedAddons.map((addon) => (
                <li key={addon.id} className={styles.addonItem}>
                  <div className={styles.addonInfo}>
                    <span className={styles.addonName}>
                      {addon.name}
                      {addon.popular && (
                        <span className={styles.addonBadge}>Popular</span>
                      )}
                    </span>
                    {addon.desc && (
                      <p className={styles.addonDescription}>{addon.desc}</p>
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
            className={`btn-primary ${styles.primaryCta} ${
              isSiteCare ? styles.siteCareCta : ""
            }`}
            aria-label="Contact BellScript Studios"
          >
            {isSiteCare ? "Talk About Your Care Plan" : "Start your project"}
          </Link>

          {demoUrl && (
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href={demoUrl}
              className={styles.demoCta}
            >
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
            <span className={styles.backArrow} aria-hidden="true">
              ←
            </span>
            <span> Back to Services</span>
          </Link>
        </nav>
      </div>
    </main>
  );
}
