"use client";

import ServiceCard from "src/Components/ServiceCard";
import styles from "src/app/Styles/Page.module.css";
import type { Service } from "src/app/Data/services";

type ServicesSectionProps = {
  id?: string;
  heading: string;
  intro?: string;
  items: Service[];
};

export default function ServicesSection({ id, intro, items }: ServicesSectionProps) {
  return (
    <div id={id} className={styles.servicesInner}>
      <header className={styles.servicesHeader}>
        <p className={styles.servicesKicker}>Featured Services</p>
        {intro && <p className={styles.servicesIntro}>{intro}</p>}
      </header>

      <div className={styles.servicesGrid}>
        {items.map((svc) => (
          <ServiceCard key={svc.id} service={svc} />
        ))}
      </div>
    </div>
  );
}