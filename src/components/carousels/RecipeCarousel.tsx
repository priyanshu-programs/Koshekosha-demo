"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { Recipe } from "@/types";
import { RecipeCard } from "@/components/cards/RecipeCard";
import styles from "./RecipeCarousel.module.css";

/**
 * Mobile-only carousel. The desktop layout renders the same cards as a static
 * grid (see RecipeGrid), matching the origin, which swaps between the two at
 * the 64rem breakpoint rather than reflowing one component.
 */
export function RecipeCarousel({ recipes }: { recipes: Recipe[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  return (
    <div className={styles.carousel}>
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla-container">
          {recipes.map((recipe) => (
            <div className={`embla-slide ${styles.slide}`} key={recipe.slug}>
              <RecipeCard recipe={recipe} sizes="80vw" />
            </div>
          ))}
        </div>
      </div>

      <div className="embla-dots">
        {recipes.map((recipe, index) => (
          <button
            type="button"
            key={recipe.slug}
            onClick={() => scrollTo(index)}
            className={[
              "embla-dot",
              index === selectedIndex && "embla-dot--selected",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-label={`Go to ${recipe.title}`}
            aria-current={index === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
}
