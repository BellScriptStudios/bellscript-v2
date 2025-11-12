"use client";
import { useEffect, useState } from "react";
import styles from "../Styles/Splash.module.css";

export default function Splash() {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setFadeOut(true), 4500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`${styles.heroWrap} ${fadeOut ? styles.fadeOut : ''}`}>
            <div className={styles.splashLogo}>BellScript Studios</div>
            <div className={styles.splashContent}>
                <h1 className={styles.title}>We build in a week</h1>
                <p className={styles.subTitle}>Custom websites and digital experiences — fast, modern, and crafted for your brand.</p>
                <a className="btn-primary" href="/contact">Get Started</a>
            </div>
        </div>
    )
}