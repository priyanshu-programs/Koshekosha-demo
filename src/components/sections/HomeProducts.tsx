"use client";

import { useCallback, useState } from "react";
import type { Product } from "@/types";
import { ProductCarousel } from "@/components/carousels/ProductCarousel";
import styles from "./HomeProducts.module.css";

interface HomeProductsProps {
  products: Product[];
}

export function HomeProducts({ products }: HomeProductsProps) {
  // Drives the section tint; the carousel reports which jar is centred.
  const [accent, setAccent] = useState(products[0]?.color ?? "#cb2821");

  const handleSelect = useCallback((product: Product) => {
    setAccent(product.color);
  }, []);

  return (
    <section
      className={`block light ${styles.section}`}
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <div className="block-inner">
        <div className={styles.heading}>
          <h2>Not so average pantry staples and entertaining essentials</h2>
        </div>
        <ProductCarousel products={products} onSelect={handleSelect} />
      </div>
    </section>
  );
}
