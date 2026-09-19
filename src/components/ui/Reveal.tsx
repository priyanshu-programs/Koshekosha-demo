"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

interface RevealProps {
  children: ReactNode;
  /** Element to render. Defaults to a div. */
  as?: ElementType;
  /** Stagger in milliseconds, applied as a transition delay. */
  delay?: number;
  className?: string;
}

/**
 * Fade-and-rise on first scroll into view — the origin uses GSAP for this;
 * an IntersectionObserver plus a CSS transition is equivalent and drops the
 * dependency. Reveals once, then stops observing.
 */
export function Reveal({
  children,
  as: Component = "div",
  delay = 0,
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal", visible && "reveal--visible", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component
      ref={ref}
      className={classes}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
