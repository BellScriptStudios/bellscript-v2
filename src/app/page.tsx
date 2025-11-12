import Splash from "./Components/Splash";
import Header from "./Components/Header";
import styles from "./Styles/Page.module.css";
import Link from "next/link";
import ProcessSection from "./Components/ProcessSection";

export default function Home() {
  return (
    <>
      <Splash />

      <main>
        <Header />

        <div className={styles.hero}>
          <h1 className={styles.title}>Building Innovative Experiences</h1>
          <p className={styles.subTitle}>Custom websites and digital experiences — fast, modern, and crafted for your brand.</p>
          <Link href="/contact" className={`btn-primary ${styles.ctaBtn}`}>Start your Project</Link>
        </div>

        <ProcessSection />
        
      </main>
    </>
  );
}
