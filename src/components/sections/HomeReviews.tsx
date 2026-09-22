import type { Review } from "@/types";
import { ReviewCarousel } from "@/components/carousels/ReviewCarousel";
import styles from "./HomeReviews.module.css";

export function HomeReviews({ reviews }: { reviews: Review[] }) {
  return (
    <section className={styles.section}>
      <div className={`text-component text-center ${styles.heading}`}>
        <h2>Our Success Stories</h2>
        <p>Honoured by leading publications and distinguished awards, reflecting a journey defined by excellence.</p>
      </div>
      <ReviewCarousel reviews={reviews} />
    </section>
  );
}
