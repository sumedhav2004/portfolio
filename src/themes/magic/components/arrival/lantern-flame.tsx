
export default function LanternFlame() {
  return (
    <svg
      viewBox="0 0 100 140"
      className="h-full w-full overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="flame-glow">
          <stop offset="0%" stopColor="#FFFDE0" stopOpacity="1" />
          <stop offset="35%" stopColor="#FFD36B" stopOpacity=".9" />
          <stop offset="70%" stopColor="#FF9B32" stopOpacity=".45" />
          <stop offset="100%" stopColor="#FF8A24" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="flame-core" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="35%" stopColor="#FFF6C4" />
          <stop offset="65%" stopColor="#FFD66B" />
          <stop offset="100%" stopColor="#FF9B32" />
        </linearGradient>

        <filter id="outer-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="12" />
        </filter>

        <filter id="soft-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {/* Wide ambient glow */}
      <ellipse
        cx="50"
        cy="75"
        rx="43"
        ry="62"
        fill="#FF9B32"
        opacity=".55"
        filter="url(#outer-glow)"
      />

      {/* Bright inner glow */}
      <ellipse
        cx="50"
        cy="75"
        rx="32"
        ry="49"
        fill="url(#flame-glow)"
        filter="url(#soft-glow)"
      />

      {/* Flame body */}
      <path
        d="M50 8 C68 37 78 48 67 76 C62 91 57 104 50 112 C37 99 23 84 31 62 C35 47 45 29 50 8Z"
        fill="url(#flame-core)"
        className="flame-core"
      />

      {/* Bright center */}
      <path
        d="M50 49 C60 68 60 82 50 96 C42 84 40 70 50 49Z"
        fill="#FFFDEB"
        className="flame-inner"
      />
    </svg>
  );
}
