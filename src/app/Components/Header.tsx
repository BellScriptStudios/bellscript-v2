"use client";

import styles from "../Styles/Header.module.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        if (!menuOpen) return;
        const onDown = (e: MouseEvent) => {
            const t = e.target as Node;
            if (!menuRef.current || !btnRef.current) return;
            if (menuRef.current.contains(t) || btnRef.current.contains(t)) return;
            setMenuOpen(false);
        };
        document.addEventListener("mousedown", onDown);
        return () => document.removeEventListener("mousedown", onDown);
    }, [menuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}> 
                <Link 
                    href="/"
                    className={styles.logo}>BellScript Studios    
                </Link>
                
                <nav className={styles.nav} aria-label="Main Navigation">
                    <Link href="/" className={`${styles.navLink} ${styles.homeLink}`}>Home</Link>
                    <Link href="/services" className={styles.navLink}>Services</Link>
                    <Link href="/portfolio" className={styles.navLink}>Work</Link>
                    <Link href="/about" className={styles.navLink}>About</Link>
                    <Link href="/contact" className={`btn-primary ${styles.navBtn}`}>Start your Project</Link>
                </nav>
            </div>
            
            {menuOpen && (
                <div
                    className={styles.mobileMenu}
                    id="mobile-menu"
                    ref={menuRef}
                    role="menu"
                    aria-label="Mobile navigation"
                >
                    <Link className={styles.link} href="/">Home</Link>
                    <Link className={styles.link} href="/about">About</Link>
                    <Link className={styles.link} href="/portfolio">Our Work</Link>
                    <Link className={styles.link} href="/services">Services</Link>
                    <Link className={styles.link} href="/contact">Contact Us</Link>
            </div>
            )}
            <div className={styles.actions}>
                <button
                    ref={btnRef}
                    className={styles.hamburger}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label="Toggle Menu"
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}