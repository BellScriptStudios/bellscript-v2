import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedRecipes.module.css";

const featuredRecipes = [
  {
    slug: "creamy-herb-pasta",
    title: "Creamy Herb Pasta",
    description: "A cozy, 20-minute pasta with fresh basil, parmesan, and lemon zest.",
    imageSrc: "/images/demos/herb-pasta.jpg",
    time: "20 min",
    tag: "Dinner",
  },
  {
    slug: "one-pan-lemon-chicken",
    title: "One-Pan Lemon Chicken",
    description: "Crispy, bright, and weeknight-friendly — a family favorite.",
    imageSrc: "/images/demos/one-pan-lemon-chicken.jpg",
    time: "35 min",
    tag: "One-pan",
  },
  {
    slug: "chocolate-olive-oil-cake",
    title: "Chocolate Olive Oil Cake",
    description: "Rich, moist, and made in one bowl. Naturally dairy-free.",
    imageSrc: "/images/demos/chocolate-olive-oil-cake.jpg",
    time: "50 min",
    tag: "Dessert",
  },
];

export default function FeaturedRecipes() {
  return (
    <section className={styles.section} id="recipes">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.kicker}>Trending this week</p>
            <h2 className={styles.title}>Featured recipes</h2>
          </div>

          <Link href="/services/demos/chef-liora#recipes" className={styles.viewAll}>
            See all recipes
            <span aria-hidden="true">↗</span>
          </Link>
        </header>

        <div className={styles.grid}>
          {featuredRecipes.map((recipe, index) => (
            <article
              key={recipe.slug}
              className={`${styles.card} ${
                index === 2 ? styles.cardFeaturedDesktop : ""
              }`}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={recipe.imageSrc}
                  alt={recipe.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  quality={90}
                  className={styles.image}
                />
                <span className={styles.tag}>{recipe.tag}</span>
                <span className={styles.timeBadge}>{recipe.time}</span>
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{recipe.title}</h3>
                <p className={styles.desc}>{recipe.description}</p>
                <Link
                  href={`/demos/website-in-a-week/recipes/${recipe.slug}`}
                  className={styles.link}
                >
                  View recipe <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}