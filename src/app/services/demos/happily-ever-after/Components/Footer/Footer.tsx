import Link from "next/link";
import styles from "./Footer.module.css";
import { NAV, SITE } from "../../site";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <p className={styles.kicker}>Happily Ever After</p>
                        <h3 className={styles.title}>{SITE.couple}</h3>
                        <p className={styles.meta}>
                            {SITE.date} · {SITE.location}
                        </p>
                    </div>

                    <nav className={styles.nav} aria-label="Footer">
                        {NAV.map((n) => (
                            <Link key={n.href} href={n.href} className={styles.link}>
                                {n.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <p className={styles.signoff}>Forever looks good on us.</p>
                    <p className={styles.credit}>
                        Demo experience by{" "}
                        <span className={styles.studio}>BellScript Studios</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}