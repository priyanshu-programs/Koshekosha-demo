import Link from "next/link";
import type { Product } from "@/types";
import { productCategories } from "@/data/products";
import { ProductCard } from "@/components/cards/ProductCard";
import { TextButton } from "@/components/ui/Button";
import styles from "./ProductArchive.module.css";

interface ProductArchiveProps {
  products: Product[];
  /** Slug of the active category, or undefined on the "All" view. */
  activeCategory?: string;
  /** Href for the next page, when more products remain. */
  nextHref?: string;
}

/** Shared archive body for /products and each /products/product-cat/* view. */
export function ProductArchive({
  products,
  activeCategory,
  nextHref,
}: ProductArchiveProps) {
  return (
    <article className={styles.archive}>
      <nav className={styles.filters} aria-label="Product categories">
        <Link
          href="/products"
          className={[
            styles.filter,
            !activeCategory && styles["filter--active"],
          ]
            .filter(Boolean)
            .join(" ")}
        >
          All
        </Link>
        {productCategories.map((category, index) => (
          <Link
            key={category.slug}
            href={`/products/product-cat/${category.slug}`}
            className={[
              styles.filter,
              activeCategory === category.slug && styles["filter--active"],
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {category.name}
            {index < productCategories.length - 1 ? "," : ""}
          </Link>
        ))}
      </nav>

      {products.length > 0 ? (
        <ul className={styles.grid}>
          {products.map((product) => (
            <li key={product.slug}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.empty}>No products in this category just yet.</p>
      )}

      {nextHref ? <TextButton href={nextHref}>Load more</TextButton> : null}
    </article>
  );
}
