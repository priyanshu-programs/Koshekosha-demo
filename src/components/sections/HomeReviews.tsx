import type { Review } from "@/types";
import { ReviewCarousel } from "@/components/carousels/ReviewCarousel";
import styles from "./HomeReviews.module.css";

export function HomeReviews({ reviews }: { reviews: Review[] }) {
  return (
    <section className={styles.section}>
      <div className={`text-component text-center ${styles.heading}`}>
        <h2>Spread the word</h2>
        <p>(and maybe some chutney)</p>
      </div>
      <ReviewCarousel reviews={reviews} />
    </section>
  );
}
