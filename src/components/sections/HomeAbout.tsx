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
          <h2>Come Experience Bengal with us</h2>
        </Reveal>

        <Reveal className={`${styles.media} ${styles.mediaPrimary}`}>
          <Image
            src={up("2025/12/Home-About-1-min.jpg")}
            alt="Authentic Bengali cuisine by Koshe Kosha"
            width={560}
            height={702}
            sizes="(min-width: 64rem) 50vw, 100vw"
          />
        </Reveal>

        <Reveal className={`${styles.media} ${styles.mediaSecondary}`}>
          <Image
            src={up("2025/12/home-about-left_v2-640x800.jpg")}
            alt="Traditional Bengali feast spread"
            width={640}
            height={800}
            sizes="(min-width: 64rem) 33vw, 100vw"
          />
        </Reveal>

        <Reveal className={styles.content}>
          <p>
            Koshe Kosha is more than just a culinary venture&mdash;it&rsquo;s a
            celebration of Bangaliana, intricately woven into every dish we
            serve. From our humble beginnings, our mission has been clear: to
            elevate and share the authentic flavors of Bengali cuisine with the
            world.
          </p>
          <div className="text-component_buttons">
            <Button href="/our-story" variant="outline">
              Read Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
