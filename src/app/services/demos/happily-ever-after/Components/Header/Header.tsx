"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import styles from "./Header.module.css";
import { NAV, SITE } from "../../site";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = useMemo(() => NAV[0]?.href === pathname, [pathname]);

  const headerClass = useMemo(() => {
    if (isHome && !scrolled) return `${styles.header} ${styles.transparent}`;
    return `${styles.header} ${styles.solid}`;
  }, [isHome, scrolled]);

  const rsvpHref = NAV.find((n) => "cta" in n && n.cta)?.href ?? "/rsvp";
  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  return (
    <>
      <header className={headerClass}>
        <div className={styles.inner}>
          <Link
            href={NAV[0].href}
            className={styles.brand}
            aria-label="Home"
            onClick={closeMenu}
          >
            {SITE.couple}
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Primary">
            {NAV.filter((n) => !("cta" in n && n.cta)).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`${styles.navLink} ${
                  pathname === n.href ? styles.active : ""
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href={rsvpHref} className={styles.rsvpBtn} onClick={closeMenu}>
              RSVP
            </Link>

            <button
              type="button"
              className={styles.menuBtn}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={toggleMenu}
            >
              <span className={styles.menuIcon} aria-hidden="true">
                <span className={styles.lineTop} />
                <span className={styles.lineMid} />
                <span className={styles.lineBot} />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div
        id="mobile-menu"
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        onClick={closeMenu}
      >
        <div className={styles.overlayInner} onClick={(e) => e.stopPropagation()}>
            <button
                type="button"
                className={styles.closeBtn}
                aria-label="Close menu"
                onClick={closeMenu}
            >
                <span className={styles.closeText}>Close</span>
            </button>
            <p className={`${styles.brand} ${styles.overlayBrand}`}>{SITE.couple}</p>
            <p className={styles.overlayKicker}>Happily Ever After</p>

            <p className={styles.overlayMeta}>
                {SITE.date} · {SITE.location}
            </p>

            <div className={styles.overlayLinks}>
                {NAV.filter((n) => !("cta" in n && n.cta)).map((n) => (
                    <Link
                        key={n.href}
                        href={n.href}
                        className={styles.overlayLink}
                        onClick={closeMenu}
                    >
                        {n.label}
                    </Link>
                ))}
          </div>

          <div className={styles.overlayFooter}>
            <Link href={rsvpHref} className={styles.overlayRsvp} onClick={closeMenu}>
              RSVP Now
            </Link>

            <p className={styles.overlaySub}>
                Kindly respond by {SITE.rsvpDeadline}
              </p>

            <p className={styles.overlayNote}>
              Black tie optional. Vegas after dark energy encouraged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
