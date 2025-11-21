import Link from "next/link";
import styles from "src/app/Styles/Footer.module.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <h3 className={styles.logo}>BellScript Studios</h3>
          <p className={styles.subtext}>A division of The Morning Bell Co.</p>

          <div className={styles.social}>
            <a  
                href="https://facebook.com/bellscriptstudios"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="BellScript Studios on Facebook"
            >
              <FaFacebookF />
            </a>

             <a
              href="https://instagram.com/bellscriptstudios"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
              aria-label="BellScript Studios on Instagram"
            >
              <FaInstagram />
            </a>

            <Link
                href="https://themorningbell.co"
                className={styles.socialIcon}
                aria-label="The Morning Bell Co."
                target="_blank"
                rel="noopener noreferrer" 
            >
                <span className={styles.tmb}>TMB</span>
            </Link>
          </div>
        </div>

        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/services" className={styles.link}>Services</Link>
          <Link href="/projects" className={styles.link}>Our Work</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>

        <div className={styles.legal}>
          <p>© {year} BellScript Studios. All rights reserved.</p>
          <Link href="/privacy" className={styles.legalLink}>Privacy Policy </Link>
          <span className={styles.spearator}>•</span>
          <Link href="/terms" className={styles.legalLink}> Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}