import styles from 'src/app/Styles/ProcessSection.module.css';

export default function ProcessSection() {
    return (
        <section className={styles.processSection} aria-labelledby="process-heading">
            <div className={`section-inner ${styles.sectionInner}`}>
                <header className={`section-header ${styles.sectionHeader}`}>
                    <p id="process-kicker" className={`section-kicker ${styles.kicker}`}>Process</p>
                    <p id="process-title" className={`section-title ${styles.sectionTitle}`}>How We Work</p> 
                    <p className={`section-intro ${styles.sectionIntro}`}>
                        From concept to launch, we follow a streamlined process to ensure 
                        your project is delivered on time and exceeds expecations.
                    </p>
                </header>
                    
                <ol className={styles.steps}>
                    <li className={styles.step}>
                        <span className={styles.stepNumber}>1</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Discovery</h3>
                            <p className={styles.stepText}>
                                We start by understanding your goals, audience, and constraints. 
                                This ensures the site we build solves the right problem from day one.</p>
                        </div>
                    </li>

                    <li className={styles.step}>
                        <span className={styles.stepNumber}>2</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Define</h3>
                            <p className={styles.stepText}>
                                We align on scope, structure, and priorities. You’ll know exactly 
                                what’s being built, what’s included, and how the timeline works.
                                </p>
                        </div>
                    </li>

                    <li className={styles.step}>
                        <span className={styles.stepNumber}>3</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Design</h3>
                            <p className={styles.stepText}>
                                We design a clean, modern interface tailored to your brand. Layout, 
                                hierarchy, and usability are refined before anything goes live.
                            </p>
                        </div>
                    </li>

                    <li className={styles.step}>
                        <span className={styles.stepNumber}>4</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Build</h3>
                            <p className={styles.stepText}>
                                We turn the design into a fast, responsive website. Performance, 
                                accessibility, and polish are baked in, not added later.
                            </p>
                        </div>
                    </li>

                    <li className={styles.step}>
                        <span className={styles.stepNumber}>5</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Launch</h3>
                            <p className={styles.stepText}>
                                We launch your site and make sure everything runs smoothly.
                            </p>
                        </div>
                    </li>

                    <li className={styles.step}>
                        <span className={styles.stepNumber}>6</span>
                        <div className={styles.stepBody}>
                            <h3 className={styles.stepTitle}>Support (Optional)</h3>
                            <p className={styles.stepText}>
                                Ongoing care and updates are available if you need them.
                            </p>
                        </div>
                    </li>
                </ol>
                <p className={styles.note}>
                    Clear timelines, focused scope, and no surprises along the way.
                </p>
          </div>
        </section>
    );
}
