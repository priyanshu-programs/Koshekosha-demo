/** Koshe Kosha circular emblem wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      role="img"
      className={className}
    >
      <title>Koshe Kosha</title>
      <circle
        cx="32"
        cy="32"
        r="30"
        fill="currentColor"
        fillOpacity="0.08"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle
        cx="32"
        cy="32"
        r="26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="3 2"
      />
      <text
        x="32"
        y="29"
        textAnchor="middle"
        fontFamily="var(--font-secondary), serif"
        fontSize="13"
        fontWeight="bold"
        fill="currentColor"
        letterSpacing="0.5"
      >
        KOSHE
      </text>
      <text
        x="32"
        y="43"
        textAnchor="middle"
        fontFamily="var(--font-secondary), serif"
        fontSize="11"
        fontWeight="bold"
        fill="currentColor"
        letterSpacing="1"
      >
        KOSHA
      </text>
    </svg>
  );
}
