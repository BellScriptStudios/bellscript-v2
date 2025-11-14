"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import styles from "src/app/Styles/ServicesPage.module.css";
import ServiceCard from "src/Components/ServiceCard";
import { SERVICE_CATEGORIES } from "src/app/Data/services";
import type { IconKey } from "src/app/Data/services";

type FilterKey = "all" | IconKey;

const activeIcons = Array.from(
  new Set(
    SERVICE_CATEGORIES
      .flatMap((cat) => cat.items)
      .filter((svc) => svc.active !== false && svc.icon)
      .map((svc) => svc.icon!)
  )
) as IconKey[];

/* Map icons → human labels */
function labelForIcon(icon: IconKey): string {
  switch (icon) {
    case "web":
      return "Websites";
    case "event":
      return "Events & Celebrations";
    case "cart":
      return "E-commerce";
    case "seo":
      return "SEO & Optimization";
    case "tool":
      return "Support & Care";
    case "backend":
      return "Apps & Backend";
    case "resume":
      return "Personal Sites";
    default:
      const s = String(icon);
      return s.charAt(0).toUpperCase() + s.slice(1);
  }
}

const FILTER_OPTIONS: { id: FilterKey; label: string }[] = [
  { id: "all", label: "All Services" },
  ...activeIcons.map((icon) => ({
    id: icon,
    label: labelForIcon(icon),
  })),
];

export default function ServicesPage() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const filteredCategories = useMemo(() => {
    return SERVICE_CATEGORIES.map((cat) => {
      const visibleItems = cat.items.filter((svc) => {
        if (svc.active === false) return false;
        if (filter === "all") return true;
        return svc.icon === filter;
      });

      return { ...cat, visibleItems };
    }).filter((cat) => cat.visibleItems.length > 0);
  }, [filter]);

  return (
    <>
      <Header />

      <main className={styles.page}>
        <section className={styles.hero}>
          <p className={styles.kicker}>Services & Packages</p>
          <h1 className={styles.title}>Clean & modern builds for real-world ideas.</h1>
          <p className={styles.lead}>
            From fast-launch websites to custom software and automations, BellScript Studios
            helps you ship polished experiences without the corporate bloat.
          </p>

          <div className={styles.filterBar}>
            <span className={styles.filterLabel}>Filter by:</span>
            <div className={styles.filterPills}>
              {FILTER_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFilter(opt.id)}
                  aria-pressed={filter === opt.id}
                  className={`${styles.filterPill} ${
                    filter === opt.id ? styles.filterPillActive : ""
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.categories}>
          {filteredCategories.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              className={styles.category}
              aria-labelledby={`${cat.id}-title`}
            >
              <h2 id={`${cat.id}-title`} className={styles.catTitle}>
                {cat.title}
              </h2>

              <div className={styles.grid}>
                {cat.visibleItems.map((svc) => (
                  <div key={svc.id} id={svc.id} className={styles.anchorWrap}>
                    <ServiceCard service={svc} />
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className={styles.bottomCta}>
            <Link
              href="/contact"
              className="btn-primary"
              aria-label="Contact BellScript Studios"
            >
              Start a Project →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}