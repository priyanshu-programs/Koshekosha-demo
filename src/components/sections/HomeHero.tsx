import Image from "next/image";
import { heroHighlights, site } from "@/data/site";
import { Marquee } from "@/components/ui/Marquee";
import styles from "./HomeHero.module.css";

export function HomeHero() {
  return (
    <header className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/hero.webp"
          alt="Koshe Kosha authentic Bengali cuisine and ready-to-cook gravies"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.content}>
        <h1>{site.tagline}</h1>
      </div>

      <div className={styles.highlights}>
        <Marquee listClassName={styles.highlightsList} duration={30}>
          {heroHighlights.map((highlight) => (
            <li key={highlight} className={styles.highlight}>
              {highlight}
            </li>
          ))}
        </Marquee>
      </div>
    </header>
  );
}
