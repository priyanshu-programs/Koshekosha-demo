"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  /** Track repetitions. The origin duplicates four times so the seam lands on a copy. */
  repeat?: number;
  /** Seconds for one full -100% translation. */
  duration?: number;
  className?: string;
  listClassName?: string;
}

/**
 * CSS-driven marquee. The animation is declared paused in motion.css and is
 * only set running while the track is on screen, matching the origin and
 * avoiding offscreen compositing work.
 */
export function Marquee({
  children,
  repeat = 4,
  duration = 30,
  className,
  listClassName,
}: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { rootMargin: "100px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-css-marquee=""
      data-playing={playing}
      className={className}
      aria-hidden={undefined}
    >
      {Array.from({ length: repeat }, (_, index) => (
        <ul
          key={index}
          data-css-marquee-list=""
          className={listClassName}
          style={{ animationDuration: `${duration}s` }}
          /* Only the first copy is announced; the rest are visual padding. */
          aria-hidden={index > 0 ? "true" : undefined}
        >
          {children}
        </ul>
      ))}
    </div>
  );
}
