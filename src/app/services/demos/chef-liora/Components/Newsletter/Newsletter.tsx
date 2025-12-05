"use client"
import styles from "./Newsletter.module.css";

export default function NewsletterSignup() {
    return (
        <section className={styles.section} id="newsletter">
            <div className={styles.inner}>
                <div className={styles.copy}>
                    <p className={styles.kicker}>Stay in the kitchen loop</p>
                    <h2 className={styles.title}>Get my weekly eecipe email</h2>
                    <p className={styles.subtitle}>
                        One cozy email each week with new recipes, simple 
                        cooking tips, anda little kitchen inspiration.
                    </p>
                </div>

                <form
                    className={styles.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                    >
                        <label className={styles.label}>
                            <span className={styles.lebelText}>Email address</span>
                            <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                required
                                className={styles.input}
                                placeholder="you@example.com"
                            />
                        </label>

                        <button type="submit" className={styles.button}>
                            Join the list
                        </button>

                        <p className={styles.trust}>No spam, just recipes. Unsubscribe anytime.</p>
                    </form>
            </div>
        </section>
    );
}