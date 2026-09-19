"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { Product } from "@/types";
import { up } from "@/lib/assets";
import {
  CarouselArrowLeftIcon,
  CarouselArrowRightIcon,
} from "@/components/ui/Icons";
import { Button, IconButton } from "@/components/ui/Button";
import styles from "./ProductCarousel.module.css";

interface ProductCarouselProps {
  products: Product[];
  /** Lets the parent section tint itself with the selected jar's color. */
  onSelect?: (product: Product) => void;
}

/**
 * The homepage product carousel.
 *
 * All slides stay mounted; a single content panel below renders the copy and
 * CTA for whichever slide is centred. `selectedIndex` is the only piece of
 * state — the heading, description, link target and section background all
 * derive from it, which is how the origin keeps them in lockstep.
 */
export function ProductCarousel({ products, onSelect }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelectSlide = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelectSlide();
    emblaApi.on("select", onSelectSlide);
    emblaApi.on("reInit", onSelectSlide);

    return () => {
      emblaApi.off("select", onSelectSlide);
      emblaApi.off("reInit", onSelectSlide);
    };
  }, [emblaApi]);

  // Notify the parent after paint so the background transition follows the slide.
  useEffect(() => {
    const product = products[selectedIndex];
    if (product) onSelect?.(product);
  }, [selectedIndex, products, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const active = products[selectedIndex] ?? products[0];

  return (
    <div className={styles.carousel}>
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla-container">
          {products.map((product, index) => (
            <div
              className={[
                "embla-slide",
                styles.slide,
                index === selectedIndex && styles["slide--selected"],
              ]
                .filter(Boolean)
                .join(" ")}
              key={product.slug}
            >
              <Link
                href={`/products/${product.slug}`}
                className={styles.media}
              >
                <Image
                  src={up(product.image)}
                  alt={product.fullName}
                  width={384}
                  height={480}
                  sizes="(min-width: 64rem) 25vw, 60vw"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <IconButton
          className={styles.prev}
          onClick={scrollPrev}
          aria-label="Previous product"
        >
          <CarouselArrowLeftIcon />
        </IconButton>

        {/* aria-live so screen readers hear the copy swap on navigation. */}
        <div className={styles.text} aria-live="polite">
          <h5>{active.name}</h5>
          <p>{active.description}</p>
        </div>

        <IconButton
          className={styles.next}
          onClick={scrollNext}
          aria-label="Next product"
        >
          <CarouselArrowRightIcon />
        </IconButton>

        <div className={styles.cta}>
          <Button href={`/products/${active.slug}`}>View product</Button>
        </div>
      </div>
    </div>
  );
}
