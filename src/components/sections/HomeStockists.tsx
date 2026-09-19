import { stockists } from "@/data/site";
import { up } from "@/lib/assets";
import { Marquee } from "@/components/ui/Marquee";
import styles from "./HomeStockists.module.css";

export function HomeStockists() {
  return (
    <section className={styles.section} aria-label="Where to find us">
      <Marquee listClassName={styles.list} duration={40}>
        {stockists.map((stockist) => (
          <li key={stockist.name} className={styles.logo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={up(stockist.logo)}
              alt={stockist.name}
              width={stockist.width}
              height={stockist.height}
              loading="lazy"
            />
          </li>
        ))}
      </Marquee>
    </section>
  );
}
