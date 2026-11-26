export default function LanternFlame() {
  return (
    <svg
      viewBox="0 0 100 140"
      className="h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="flame-glow">
          <stop offset="0%" stopColor="#FFF6B0" />
          <stop offset="45%" stopColor="#FFC45C" />
          <stop offset="100%" stopColor="#FF8A24" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="flame-core" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFCE0" />
          <stop offset="55%" stopColor="#FFD66B" />
          <stop offset="100%" stopColor="#FF9B32" />
        </linearGradient>
      </defs>

      <ellipse
        cx="50"
        cy="75"
        rx="38"
        ry="55"
        fill="url(#flame-glow)"
        className="flame-glow"
      />

      <path
        d="M50 8 C68 37 78 48 67 76 C62 91 57 104 50 112 C37 99 23 84 31 62 C35 47 45 29 50 8Z"
        fill="url(#flame-core)"
        className="flame-core"
      />

      <path
        d="M50 49 C60 68 60 82 50 96 C42 84 40 70 50 49Z"
        fill="#FFF9D8"
        className="flame-inner"
      />
    </svg>
  );
}