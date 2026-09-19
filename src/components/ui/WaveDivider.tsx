/**
 * Scalloped divider between sections. Four copies of the same SVG scroll
 * horizontally so the wave reads as continuous motion along the seam.
 *
 * The two path variants differ in which side the fill sits on: `top` fills
 * downward into the section below, `bottom` fills upward into the one above.
 */

interface WaveDividerProps {
  /** Which edge of the adjoining section this divider caps. */
  variant: "top" | "bottom";
  /** Fill color — should match the section the wave flows into. */
  color: string;
  /** Optional stroke, used by the header's nav overlay. */
  stroke?: string;
  className?: string;
}

const PATHS = {
  top: "M1878.57 3.802C2072.22 10.21 2306.61 15.658 2400 22v31H0V22c22.5.5 371.429 30.887 665.079 8.136C1071.88-1.381 1636.51-4.21 1878.57 3.802",
  bottom:
    "M521.429 49.198C327.778 42.79 93.386 37.342 0 31V0h2400v31c-22.5-.5-371.43-30.887-665.08-8.136-406.8 31.517-971.428 34.345-1213.491 26.334",
};

export function WaveDivider({
  variant,
  color,
  stroke,
  className,
}: WaveDividerProps) {
  const classes = ["wave-component", `wave-component--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes} aria-hidden="true">
      {Array.from({ length: 4 }, (_, index) => (
        <div className="wave-component_wave" key={index}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 2400 53"
            preserveAspectRatio="none"
          >
            <path fill={color} d={PATHS[variant]} />
            {stroke ? (
              <path
                stroke={stroke}
                fill="none"
                d={PATHS[variant]}
                strokeWidth="2"
              />
            ) : null}
          </svg>
        </div>
      ))}
    </div>
  );
}
