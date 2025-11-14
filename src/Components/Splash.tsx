"use client";
import { useEffect, useState } from "react";
import styles from "src/app/Styles/Splash.module.css";

export default function Splash() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const alreadySeen = window.sessionStorage.getItem("bs_seenSplash");
    if (alreadySeen === "true") {
      return;
    }

    let fadeTimer: number | undefined;
    let removeTimer: number | undefined;

    const showTimer = window.setTimeout(() => {
      setVisible(true);
      window.sessionStorage.setItem("bs_seenSplash", "true");

      fadeTimer = window.setTimeout(() => setFadeOut(true), 4500);
      removeTimer = window.setTimeout(() => setVisible(false), 5100);
    }, 0);

    return () => {
      window.clearTimeout(showTimer);
      if (fadeTimer) window.clearTimeout(fadeTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`${styles.heroWrap} ${fadeOut ? styles.fadeOut : ""}`}>
      <div className={styles.splashLogo}>BellScript Studios</div>
      <div className={styles.splashContent}>
        <h1 className={styles.title}>We build in a week</h1>
        <p className={styles.subTitle}>
          Custom websites and digital experiences — fast, modern, and crafted for your brand.
        </p>
        <a className="btn-primary" href="/contact">
          Get Started
        </a>
      </div>
    </div>
  );
}
