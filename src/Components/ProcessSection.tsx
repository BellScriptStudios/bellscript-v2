import styles from 'src/app/Styles/ProcessSection.module.css';

export default function ProcessSection() {
    return (
        <section className={styles.processSection} aria-labelledby="process-heading">
            <div className={styles.inner}>
                <p id="process-title" className={styles.processHeader}>Process</p>
                <p className={styles.processDesc}>
                    From concept to launch, we follow a streamlined process to ensure 
                    your project is delivered on time and exceeds expecations.
                </p>
                    
                <ol className={styles.steps}>
                    <li className={styles.step}>
                        <span className={styles.stepNumber}>1</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Discover</h3>
                            <p className={styles.stepText}>Quick call to define goals</p>
                        </div>
                    </li>

                    <li className={styles.step}>
                        <span className={styles.stepNumber}>2</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Design + Build</h3>
                            <p className={styles.stepText}>Design mockups & development</p>
                        </div>
                    </li>

                    <li className={styles.step}>
                        <span className={styles.stepNumber}>3</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Launch</h3>
                            <p className={styles.stepText}>Publish & handoff</p>
                        </div>
                    </li>
                </ol>
          </div>
        </section>
    );
}
