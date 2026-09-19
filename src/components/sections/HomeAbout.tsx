import Image from "next/image";
import { up } from "@/lib/assets";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./HomeAbout.module.css";

export function HomeAbout() {
  return (
    <section className={`block dark ${styles.section}`}>
      <div className={`block-inner ${styles.inner}`}>
        <Reveal className={styles.heading}>
          <h2>Everyone&rsquo;s welcome at our table</h2>
        </Reveal>

        <Reveal className={`${styles.media} ${styles.mediaPrimary}`}>
          <Image
            src={up("2025/12/Home-About-1-min.jpg")}
            alt="A jar of Orange Brandy Cranberry Sauce on a laid table"
            width={560}
            height={702}
            sizes="(min-width: 64rem) 50vw, 100vw"
          />
        </Reveal>

        <Reveal className={`${styles.media} ${styles.mediaSecondary}`}>
          <Image
            src={up("2025/12/home-about-left_v2-640x800.jpg")}
            alt="Plates of lamb and salad served with Mainstays sauces"
            width={640}
            height={800}
            sizes="(min-width: 64rem) 33vw, 100vw"
          />
        </Reveal>

        <Reveal className={styles.content}>
          <p>
            We&rsquo;re here for the moments that bring people together: big
            feasts, couch snacks, and everything in between. The Mainstays makes
            mealtime easy, delicious, and full of flavour you&rsquo;ll actually
            get excited about.
          </p>
          <div className="text-component_buttons">
            <Button href="/about" variant="outline">
              Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
