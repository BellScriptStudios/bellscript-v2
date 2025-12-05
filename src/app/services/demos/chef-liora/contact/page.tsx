"use client";

import Header from "../Components/Header/Header";
import { FormEvent } from "react";
import Link from "next/link";
import styles from "./Contact.module.css";
import Footer from "../Components/Footer/Footer";
import FinalCTA from "../Components/FinalCTA/FinalCTA";

export default function ContactPage() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <main className={styles.page}>
      <Header />
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.copy}>
            <p className={styles.kicker}>Get in touch</p>
            <h1 className={styles.title}>Let’s cook up something together.</h1>

            <p className={styles.subtitle}>
              Whether you’re looking for a recipe collaboration, sponsored video,
              or cozy kitchen content for your brand, I’d love to hear from you.
            </p>

            <div className={styles.metaList}>
              <div className={styles.metaItem}>
                <h2 className={styles.metaTitle}>Collab ideas</h2>
                <p className={styles.metaText}>
                  Sponsored recipes, product features, social content, and
                  newsletter placements.
                </p>
              </div>

              <div className={styles.metaItem}>
                <h2 className={styles.metaTitle}>Timeline</h2>
                <p className={styles.metaText}>
                  Most projects can begin within 2–4 weeks, depending on scope.
                </p>
              </div>
            </div>

            <p className={styles.note}>
              Prefer email? Reach out anytime at{" "}
              <a href="mailto:hello@chefliora.com" className={styles.noteLink}>
                hello@chefliora.com
              </a>
            </p>

            <p className={styles.backLinkWrap}>
              <Link href="/services/demos/chef-liora" className={styles.backLink}>
                ← Back to the demo site
              </Link>
            </p>
          </div>

          <div className={styles.formWrap}>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className={styles.input}
                    placeholder="Your name"
                  />
                </label>

                <label className={styles.label}>
                  <span className={styles.labelText}>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className={styles.input}
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className={styles.label}>
                <span className={styles.labelText}>Project type</span>
                <select name="projectType" className={styles.select} defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="sponsored-recipe">Sponsored recipe</option>
                  <option value="video-content">Video content</option>
                  <option value="social-campaign">Social media campaign</option>
                  <option value="other">Something else</option>
                </select>
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>Brand / Company</span>
                <input
                  type="text"
                  name="brand"
                  className={styles.input}
                  placeholder="Brand or company name"
                />
              </label>

              <label className={styles.label}>
                <span className={styles.labelText}>Project details</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className={`${styles.input} ${styles.textarea}`}
                  placeholder="Share as much detail as you'd like about what you have in mind."
                />
              </label>

              <button type="submit" className={styles.button}>
                Send message
              </button>

              <p className={styles.helpText}>
                I typically respond within 2–3 business days.
              </p>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <FinalCTA />
    </main>
  );
}
