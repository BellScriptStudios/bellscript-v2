import styles from "./HeaderSection.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HeaderSection() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div className={styles.photowrap}>

                    {/* Photo by Larissa  Martins: https://www.pexels.com/photo/woman-with-curly-hair-smiling-13079557/ */}
                    <Image
                        src="/images/demos/ariana-james.jpg"
                        alt="Ariana James"
                        width={180}
                        height={180}
                        className={styles.photo}
                    />
                </div>
                <div className={styles.textBlock}>

                    <p className={styles.kicker}>Boutique Hospitality Leadership</p>
                    <h1 className={styles.name}>Ariana James</h1>
                    <p className={styles.jobTitle}>Senior Guest Experience Manager · Detroit, MI</p>
                    <p className={styles.subtitle}>Crafting warm intentional guest experiences rooted in the soul of Detroit.</p>
                    <div className={styles.CTARow}>
                        <a
                            href="/Ariana-James-Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.downloadBtn}
                        >
                            Download Resume
                        </a>

                        <Link 
                            href="/services/demo/ariana-james-resume#contact"
                            className={styles.contactLink}
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}