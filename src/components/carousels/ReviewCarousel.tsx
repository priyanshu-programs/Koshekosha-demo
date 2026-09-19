"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import type { Review } from "@/types";
import {
  CarouselArrowLeftIcon,
  CarouselArrowRightIcon,
} from "@/components/ui/Icons";
import { IconButton } from "@/components/ui/Button";
import { ReviewCard } from "@/components/cards/ReviewCard";
import styles from "./ReviewCarousel.module.css";

/**
 * Looping testimonial carousel. The centred card scales up while its
 * neighbours sit back — the origin drives this with a tween on scroll
 * progress; a class toggle on the selected snap reads the same at a glance
 * and costs nothing per frame.
 */
export function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className={styles.carousel}>
      <div className="embla-viewport" ref={emblaRef}>
        <div className="embla-container">
          {reviews.map((review, index) => (
            <div
              key={review.name + review.productSlug}
              className={[
                "embla-slide",
                styles.slide,
                index === selectedIndex && styles["slide--selected"],
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className={styles.scaler}>
                <ReviewCard review={review} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <IconButton onClick={scrollPrev} aria-label="Previous review">
          <CarouselArrowLeftIcon />
        </IconButton>
        <IconButton onClick={scrollNext} aria-label="Next review">
          <CarouselArrowRightIcon />
        </IconButton>
      </div>
    </div>
  );
}
