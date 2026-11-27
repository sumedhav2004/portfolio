
"use client";

export type FlameVariant = "normal" | "blue" | "pink";

interface MagicFlameProps {
  variant?: FlameVariant;
  className?: string;
  showSparks?: boolean;
  intensity?: number;
}

const FILTERS: Record<FlameVariant, string> = {
  pink: "none",
  normal: "hue-rotate(95deg) saturate(1.2)",
  blue: "hue-rotate(280deg) saturate(1.35)",
};

export default function MagicFlame({
  variant = "normal",
  className = "",
}: MagicFlameProps) {
  const isPink = variant === "pink";

  return (
    <div
      className={`relative z-0 w-full ${className}`}
      aria-hidden="true"
    >
      {/* Blue / normal flame */}
      <img
        src="/themes/magic/elements/great-hall/flame-loop.gif"
        alt=""
        draggable={false}
        className="block h-auto w-full select-none object-contain"
        style={{
          filter: FILTERS[variant === "pink" ? "blue" : variant],
          opacity: isPink ? 0 : 1,
          transition: "opacity 750ms ease-in-out",
        }}
      />

      {/* Original pink flame */}
      <img
        src="/themes/magic/elements/great-hall/flame-loop.gif"
        alt=""
        draggable={false}
        className="absolute inset-0 block h-full w-full select-none object-contain"
        style={{
          filter: "none",
          opacity: isPink ? 1 : 0,
          transition: "opacity 750ms ease-in-out",
        }}
      />
    </div>
  );
}
