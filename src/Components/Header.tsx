"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "src/app/Styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  function openMenu() {
    setMenuVisible(true);
    requestAnimationFrame(() => setMenuOpen(true));
  }

  function closeMenu() {
    setMenuOpen(false);
    window.setTimeout(() => setMenuVisible(false), 220);
  }

  function toggleMenu() {
    if (menuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function handleNavClick() {
    closeMenu();
  }

  useEffect(() => {
    if (!menuVisible) return;

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (!menuRef.current || !buttonRef.current) return;

      if (
        menuRef.current.contains(target) ||
        buttonRef.current.contains(target)
      ) {
        return;
      }

      closeMenu();
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuVisible]);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link href="/">
            BellScript Studios
          </Link>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/projects" className={styles.navLink}>
            Our Work
          </Link>
            <Link href="/services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/contact" className={`${styles.navLink} ${styles.navBtn}`}>
            Start your Project
          </Link>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            ref={buttonRef}
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuVisible && (
        <div
          ref={menuRef}
          className={`${styles.mobileMenu} ${
            menuOpen ? styles.mobileMenuOpen : styles.mobileMenuClosing
          }`}
        >
          <Link href="/" className={styles.link} onClick={handleNavClick}>
            Home
          </Link>
          <Link href="/about" className={styles.link} onClick={handleNavClick}>
            About
          </Link>
          <Link href="/projects" className={styles.link} onClick={handleNavClick}>
            Our Work
          </Link>
          <Link href="/services" className={styles.link} onClick={handleNavClick}>
            Services
          </Link>
          <Link href="/contact" className={styles.link} onClick={handleNavClick}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
