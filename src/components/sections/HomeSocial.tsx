import Image from "next/image";
import { site, socialImages } from "@/data/site";
import { up } from "@/lib/assets";
import { InstagramIcon } from "@/components/ui/Icons";
import styles from "./HomeSocial.module.css";

export function HomeSocial() {
  return (
    <section className={`block ${styles.section}`}>
      <div className="block-inner">
        <div className={styles.heading}>
          <h2>Mainstays in the wild</h2>
          <a
            href={site.instagram}
            className={styles.tag}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            <span>{site.instagramHandle}</span>
          </a>
        </div>

        <div className={styles.gallery}>
          {socialImages.map((image) => (
            <a
              key={image}
              href={site.instagram}
              className={styles.item}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={up(image)}
                alt="Mainstays products styled in a home kitchen"
                width={560}
                height={676}
                sizes="(min-width: 48rem) 33vw, 100vw"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
