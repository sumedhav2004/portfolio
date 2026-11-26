
"use client";

import { useRef } from "react";
import { useGSAP } from "@/src/lib/animations/gsap";
import { gsap } from "@/src/lib/animations/gsap";

export default function ArrivalMoon() {
  const moonRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!moonRef.current || !glowRef.current) return;

      const moonFloat = gsap.to(moonRef.current, {
        y: -5,
        duration: 4.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      const moonGlow = gsap.to(glowRef.current, {
        opacity: 0.65,
        scale: 1.08,
        duration: 3.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      return () => {
        moonFloat.kill();
        moonGlow.kill();
      };
    },
    { scope: moonRef }
  );

  return (
    <div
      ref={moonRef}
      data-scene-object="arrival-moon"
      className="pointer-events-none relative h-24 w-24 md:h-36 md:w-36"
      aria-hidden="true"
    >
      {/* Atmospheric halo */}
      <div
        ref={glowRef}
        className="absolute -inset-10 rounded-full bg-[#D8D4FF]/15 blur-3xl"
      />

      {/* Crescent moon */}
      <svg
        viewBox="0 0 120 120"
        className="relative h-full w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="arrival-moon-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF9E8" />
            <stop offset="55%" stopColor="#E6DDF8" />
            <stop offset="100%" stopColor="#A9A5D2" />
          </linearGradient>
          <filter id="arrival-moon-shadow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        <circle
          cx="58"
          cy="58"
          r="42"
          fill="#DCD6FF"
          opacity="0.12"
          filter="url(#arrival-moon-shadow)"
        />

        <path
          d="M75 17
             C43 18 22 43 25 70
             C28 96 52 111 77 101
             C53 94 42 73 46 52
             C49 35 61 22 75 17Z"
          fill="url(#arrival-moon-gradient)"
        />

        <path
          d="M75 17
             C43 18 22 43 25 70"
          fill="none"
          stroke="#FFF9E8"
          strokeOpacity="0.55"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
