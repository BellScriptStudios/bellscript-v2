import styles from "./ResumeBodySection.module.css"

export default function ResumeBodySection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.leftColumn}>
                    <div className={styles.about}>
                        <h2 className={styles.sectionTitle}>About Me</h2>
                        <p>
                            Hi, I’m Ariana — a boutique hospitality leader from Detroit with nearly 
                            a decade of experience creating warm, highly curated guest experiences. 
                            I started my career at a small 18-room inn as a part-time front desk 
                            associate and grew into management through hands-on work, curiosity, 
                            and a passion for thoughtful service.
                        </p>

                        <p>
                            Today, I specialize in helping boutique properties elevate their guest 
                            experience through meaningful interactions, consistent standards, and 
                            smart operational structure. I love hotels with personality — the kind 
                            where every detail reflects the neighborhood, the story, and the people 
                            behind it.
                        </p>

                        <p>
                            I lead with empathy, creativity, and a calm, level-headed 
                            presence that supports both guests and staff.
                        </p>
                    </div>

                    <div className={styles.experience}>
                        <h2 className={styles.sectionTitle}>Experience</h2>

                        <div className={styles.job}>
                            <h3 className={styles.jobTitle}>Senior Guest Experience Manager</h3>
                            <p className={styles.jobMeta}>The Beechwood House · Detroit, MI · 2022–Present</p>
                            <ul>
                                <li>Lead the guest experience team in a 32-room boutique environment.</li>
                                <li>Introduced a Detroit-local welcome program increasing sentiment scores by 24%.</li>
                                <li>Redesigned SOPs, reducing check-in wait times and improving consistency.</li>
                                <li>Built a supervisor training pipeline resulting in two internal promotions.</li>
                                <li>Implemented real-time feedback systems, reducing negative reviews by 31%.</li>
                            </ul>
                        </div>

                        <div className={styles.job}>
                            <h3 className={styles.jobTitle}>Guest Services Supervisor</h3>
                            <p className={styles.jobMeta}>The Iron Gate Inn · Detroit, MI · 2018–2022</p>
                            <ul>
                                <li>Supervised daily front desk operations in a high-occupancy boutique property.</li>
                                <li>Trained new staff on communication standards and PMS usage.</li>
                                <li>Recognized for exceptional service recovery strategies.</li>
                            </ul>
                        </div>

                        <div className={styles.job}>
                            <h3 className={styles.jobTitle}>Front Desk Associate</h3>
                            <p className={styles.jobMeta}>The Iron Gate Inn · Detroit, MI · 2015–2018</p>
                            <ul>
                                <li>Started part-time while in school and learned operations from the ground up.</li>
                                <li>Known for warm communication and tailored guest recommendations.</li>
                                <li>Supported creation of the inn’s first digital welcome guide.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <aside className={styles.rightColumn}>
                    <div className={styles.sidebarCard}>
                        <h3 className={styles.sidebarTitle}>Snapshot</h3>
                        <ul>
                            <li><strong>Location:</strong> Detroit, MI</li>
                            <li><strong>Open to:</strong> Boutique & lifestyle hotels</li>
                            <li><strong>Seniority:</strong> Senior IC / Department Lead</li>
                        </ul>
                    </div>

                    <div className={styles.sidebarCard}>
                        <h3 className={styles.sidebarTitle}>Core Strengths</h3>
                        <ul>
                            <li>Boutique hotel operations</li>
                            <li>High-touch guest communication</li>
                            <li>Team coaching & development</li>
                            <li>Service recovery</li>
                            <li>SOP creation</li>
                        </ul>
                    </div>

                    <div className={styles.sidebarCard}>
                        <h3 className={styles.sidebarTitle}>Tools</h3>
                        <ul>
                            <li>Cloudbeds, Opera, RoomKeyPMS</li>
                            <li>Microsoft 365 & Google Workspace</li>
                            <li>Basic reporting & analytics</li>
                        </ul>
                    </div>

                    <div className={styles.sidebarCard}>
                        <h3 className={styles.sidebarTitle}>Contact</h3>
                        <ul>
                            <li>arianajames@example.com</li>
                            <li>linkedin.com</li>
                        </ul>
                    </div>
                    <div className={styles.sidebarCard}>
                        <h2 className={styles.sidebarTitle}>My Philosophy</h2>
                        <p className={styles.sidebarSubtitle}>Hospitality is community.</p>
                        <p className={styles.sidebarBody}>
                            Every stay should tell a story — and every guest 
                            should feel genuinely cared for, not just “hosted”.
                        </p>
                    </div>
                </aside>
            </div>
        </section>
    );
}