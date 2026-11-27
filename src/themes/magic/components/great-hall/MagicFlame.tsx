
"use client";

export type FlameVariant = "normal" | "blue" | "pink";

interface MagicFlameProps {
  variant?: FlameVariant;
  className?: string;
  showSparks?: boolean;
  intensity?: number;
}

const FILTERS: Record<FlameVariant, string> = {
  // The source asset is pink. Recolour it for the other variants.
  pink: "none",
  normal: "hue-rotate(95deg) saturate(1.2)",
  blue: "hue-rotate(280deg) saturate(1.35)",
};

interface Props extends MagicFlameProps {}

export default function MagicFlame({
  variant = "normal",
  className = "",
}: Props) {
  return (
    <div
      className={`relative z-0 w-full ${className}`}
      aria-hidden="true"
    >
      <img
        src="/themes/magic/elements/great-hall/flame-loop.gif"
        alt=""
        draggable={false}
        className="block h-auto w-full select-none object-contain"
        style={{
          filter: FILTERS[variant],
          transformOrigin: "50% 100%",
        }}
      />
    </div>
  );
}
