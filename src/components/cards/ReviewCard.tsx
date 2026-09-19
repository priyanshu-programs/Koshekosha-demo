import Image from "next/image";
import Link from "next/link";
import type { Review } from "@/types";
import { up } from "@/lib/assets";
import { ArrowRightIcon } from "@/components/ui/Icons";
import styles from "./ReviewCard.module.css";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <Link href={`/products/${review.productSlug}`} className={styles.card}>
      <div className={styles.content} style={{ background: review.color }}>
        <div className={styles.meta}>
          <span className={styles.stars} aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} className={styles.star} aria-hidden="true" />
            ))}
          </span>
          <span className={styles.name}>{review.name}</span>
        </div>

        <blockquote className={styles.quote}>
          &ldquo;{review.quote}&rdquo;
        </blockquote>

        <span className={styles.cta}>
          <span className="text-btn">
            <span className="text-btn_text">View the product</span>
            <span className="text-btn_icon">
              <ArrowRightIcon />
            </span>
          </span>
        </span>
      </div>

      <div className={styles.media}>
        <Image
          src={up(review.productImage)}
          alt={review.productName}
          width={160}
          height={199}
          sizes="(min-width: 64rem) 9rem, 6.5rem"
        />
      </div>
    </Link>
  );
}
