import styles from "./VideoTutorials.module.css";
import Link from "next/link";
import Image from "next/image";

const videos = [
    {
        slug: "10-minute-pasta",
        title: "10-Minute Pantry Pasta",
        description: "A fast stovetop pasta using what you already have at home.",
        //Image by RF._.studio _ from Pexels
        thumbSrc: "/images/demos/10-minute-pasta.jpg",
        duration: "10:23"
    },
    {
        slug: "knife-skills-101",
        title: "Knife Skills 101",
        description: "Learn how to chop, slice, and dice with more confidence.",
        //Image by Korie Jenkins from Pexels
        thumbSrc: "/images/demos/knife-skills-101-.jpg",
        duration: "08:47"
    },
    {
        slug: "cozy-fall-soup",
        title: "Cozy Fall Soup",
        description: "A creamy, veggie-loaded soup that feels like a hug in a bowl.",
        //Image by Pixabay from Pexels
        thumbSrc: "/images/demos/cozy-fall-soup.jpg",
        duration: "12:05"
    },
]

export default function VideoStrip() {
    return (
        <section className={styles.section} id="tutorials">
            <div className={styles.inner}>
                <header className={styles.header}>
                    <div>
                        <p className={styles.kicker}>Cook with me</p>
                        <h2 className={styles.title}>Video tutorials</h2>
                        <p className={styles.subtitle}>
                            Quick, beginner-friendly videos to help you feel at home in the kitchen.
                        </p>
                        <p className={styles.viewBadge}>
                            100K+ views across platforms ✦
                        </p>
                    </div>


                    <Link href="/demos/chef-liora/videos" className={styles.viewAll}>
                        View all videos
                        <span aria-hidden="true">↗</span>
                    </Link>
                </header>

                <div className={styles.scroller}>
                    <div className={styles.track}>
                        {videos.map((video) => (
                            <article key={video.slug} className={styles.card}>
                                <Link
                                    href={`/demos/chef-liora/videos/${video.slug}`}
                                    className={styles.cardLink}
                                >
                                    <div className={styles.thumbWrap}>
                                        <Image
                                            src={video.thumbSrc}
                                            alt={video.title}
                                            fill
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                            quality={90}
                                            className={styles.thumb}
                                        />
                                        <div className={styles.duration}>{video.duration}</div>
                                        <button
                                            type="button"
                                            className={styles.playButton}
                                            aria-hidden="true"
                                        >
                                            ▶
                                        </button>
                                    </div>

                                    <div className={styles.body}>
                                        <h3 className={styles.cardTitle}>{video.title}</h3>
                                        <p className={styles.desc}>{video.description}</p>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}