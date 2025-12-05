"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const basePath = "/services/demos/chef-liora";

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
          <Link href={basePath}>
            Chef Liora
          </Link>
        </div>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href={`${basePath}#about`} className={styles.navLink}>
            About
          </Link>
          <Link href={`${basePath}#recipes`} className={styles.navLink}>
            Recipes
          </Link>
          <Link href={`${basePath}#tutorials`} className={styles.navLink}>
            Video Tutorials
          </Link>
          <Link
            href={`${basePath}/contact`}
            className={`${styles.navLink} ${styles.navBtn}`}
          >
            Let&apos;s eat!
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
          <Link
            href={basePath}
            className={styles.link}
            onClick={handleNavClick}
          >
            Home
          </Link>
          <Link
            href={`${basePath}#about`}
            className={styles.link}
            onClick={handleNavClick}
          >
            About
          </Link>
          <Link
            href={`${basePath}#recipes`}
            className={styles.link}
            onClick={handleNavClick}
          >
            Recipes
          </Link>
          <Link
            href={`${basePath}#tutorials`}
            className={styles.link}
            onClick={handleNavClick}
          >
            Video Tutorials
          </Link>
          <Link
            href={`${basePath}/contact`}
            className={styles.link}
            onClick={handleNavClick}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
