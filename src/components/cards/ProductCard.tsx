import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { up } from "@/lib/assets";
import styles from "./ProductCard.module.css";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.media}>
        {product.badge ? (
          <span className={styles.badge}>{product.badge}</span>
        ) : null}
        <Image
          src={up(product.image)}
          alt={product.fullName}
          width={384}
          height={480}
          sizes="(min-width: 64rem) 25vw, 50vw"
        />
      </div>
      <h4 className={styles.title}>{product.name}</h4>
    </Link>
  );
}
