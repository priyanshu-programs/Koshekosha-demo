import { useId } from "react";

/**
 * Recipe titles ride a quarter-circle arc around the top-right of their
 * circular thumbnail. The path is the origin's verbatim: it starts at the top
 * centre of a 410x410 box, curves through the right edge and ends at the
 * bottom centre.
 */
const ARC = "M 205 25 C 205 25 385 25 385 205 C 385 205 385 385 205 385";

interface CurvedTitleProps {
  children: string;
  className?: string;
}

export function CurvedTitle({ children, className }: CurvedTitleProps) {
  // useId keeps the href target unique when many cards share a page.
  const pathId = `curved-title-${useId().replace(/:/g, "")}`;

  return (
    <svg
      width="410"
      height="410"
      viewBox="0 0 410 410"
      className={className}
      role="img"
      aria-label={children}
    >
      <path id={pathId} d={ARC} fill="none" />
      <text>
        <textPath href={`#${pathId}`} fill="currentColor">
          {children}
        </textPath>
      </text>
    </svg>
  );
}
