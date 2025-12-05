import Link from "next/link";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();
    const basePath = "/services/demos/chef-liora";

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <h3 className={styles.logo}>Chef Liora</h3>
                    <p className={styles.subtext}>Cook with me!</p>
                </div>

                <div className={styles.social}>
                    <a  
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="Chef Liora on Tiktok"
                    >
                        <FaTiktok />
                    </a>

                    <a  
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="Chef Liora on Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="Chef Liora on Instagram"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialIcon}
                        aria-label="Chef Liora on YouTube"
                    >
                        <FaYoutube />
                    </a>
                </div>
                <nav className={styles.nav} aria-label="Footer navigation">
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

                <div className={styles.legal}>
                    <p>© {year} Chef Liora, LLC. All rights reserved.</p>
                    <Link href="/privacy" className={styles.legalLink}>Privacy Policy </Link>
                    <span className={styles.separator}>•</span>
                    <Link href="/terms" className={styles.legalLink}> Terms of Service</Link>
                </div>

            </div>
        </footer>
    )
}