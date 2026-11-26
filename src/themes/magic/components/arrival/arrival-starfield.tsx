
"use client";

import { useRef } from "react";
import { useGSAP } from "@/src/lib/animations/gsap";
import { createStarfieldAnimation } from "../../animations/scenes/arrival/starfield-animation"; 

const stars = [
  { x: 4, y: 8, size: 1.5, delay: 0.3 },
  { x: 11, y: 19, size: 2, delay: 1.4 },
  { x: 19, y: 7, size: 1.5, delay: 0.8 },
  { x: 26, y: 16, size: 2.5, delay: 2.1 },
  { x: 33, y: 5, size: 1.5, delay: 1.1 },
  { x: 41, y: 25, size: 2, delay: 2.6 },
  { x: 49, y: 9, size: 1.5, delay: 0.5 },
  { x: 57, y: 18, size: 2, delay: 1.8 },
  { x: 65, y: 6, size: 3, delay: 2.3 },
  { x: 72, y: 23, size: 1.5, delay: 0.9 },
  { x: 81, y: 10, size: 2, delay: 2.4 },
  { x: 89, y: 20, size: 1.5, delay: 1.6 },
  { x: 96, y: 7, size: 2, delay: 0.4 },

  { x: 6, y: 34, size: 2, delay: 2.8 },
  { x: 15, y: 43, size: 1.5, delay: 1.2 },
  { x: 23, y: 31, size: 2, delay: 0.7 },
  { x: 30, y: 48, size: 1.5, delay: 2.5 },
  { x: 38, y: 37, size: 3, delay: 1.3 },
  { x: 46, y: 45, size: 1.5, delay: 0.3 },
  { x: 54, y: 33, size: 2, delay: 2.2 },
  { x: 62, y: 49, size: 1.5, delay: 1.7 },
  { x: 70, y: 39, size: 2.5, delay: 0.6 },
  { x: 78, y: 47, size: 1.5, delay: 2.7 },
  { x: 86, y: 34, size: 2, delay: 1.0 },
  { x: 94, y: 44, size: 1.5, delay: 2.0 },

  { x: 3, y: 59, size: 2.5, delay: 1.5 },
  { x: 12, y: 72, size: 1.5, delay: 0.2 },
  { x: 20, y: 61, size: 2, delay: 2.4 },
  { x: 28, y: 79, size: 1.5, delay: 1.9 },
  { x: 36, y: 65, size: 2, delay: 0.8 },
  { x: 44, y: 86, size: 1.5, delay: 2.6 },
  { x: 52, y: 59, size: 2.5, delay: 1.1 },
  { x: 60, y: 76, size: 1.5, delay: 0.4 },
  { x: 68, y: 64, size: 2, delay: 2.1 },
  { x: 76, y: 84, size: 1.5, delay: 1.6 },
  { x: 84, y: 62, size: 3, delay: 0.9 },
  { x: 92, y: 77, size: 1.5, delay: 2.5 },
  { x: 98, y: 57, size: 2, delay: 1.3 },

  { x: 8, y: 91, size: 1.5, delay: 2.2 },
  { x: 17, y: 86, size: 2, delay: 0.6 },
  { x: 25, y: 94, size: 1.5, delay: 1.7 },
  { x: 39, y: 96, size: 2, delay: 0.5 },
  { x: 57, y: 94, size: 1.5, delay: 2.8 },
  { x: 73, y: 96, size: 2, delay: 1.4 },
  { x: 88, y: 92, size: 1.5, delay: 0.7 },
  { x: 96, y: 89, size: 2, delay: 2.3 },
  
  // Additional stars — upper sky
  { x: 7, y: 14, size: 1, delay: 1.7 },
  { x: 22, y: 12, size: 1.5, delay: 0.4 },
  { x: 29, y: 27, size: 1, delay: 2.3 },
  { x: 45, y: 14, size: 1, delay: 1.2 },
  { x: 53, y: 5, size: 1.5, delay: 2.7 },
  { x: 68, y: 16, size: 1, delay: 0.6 },
  { x: 76, y: 8, size: 1.5, delay: 1.9 },
  { x: 91, y: 12, size: 1, delay: 0.3 },

  // Additional stars — middle sky
  { x: 9, y: 27, size: 1, delay: 2.5 },
  { x: 18, y: 37, size: 1.5, delay: 0.8 },
  { x: 35, y: 42, size: 1, delay: 1.6 },
  { x: 43, y: 32, size: 1.5, delay: 2.2 },
  { x: 51, y: 40, size: 1, delay: 0.5 },
  { x: 59, y: 27, size: 1.5, delay: 1.4 },
  { x: 74, y: 31, size: 1, delay: 2.6 },
  { x: 82, y: 40, size: 1.5, delay: 0.9 },
  { x: 97, y: 36, size: 1, delay: 1.8 },

  // Additional stars — lower sky
  { x: 5, y: 50, size: 1, delay: 0.7 },
  { x: 16, y: 55, size: 1.5, delay: 2.4 },
  { x: 33, y: 57, size: 1, delay: 1.1 },
  { x: 41, y: 72, size: 1.5, delay: 2.8 },
  { x: 48, y: 67, size: 1, delay: 0.2 },
  { x: 64, y: 57, size: 1.5, delay: 1.5 },
  { x: 72, y: 72, size: 1, delay: 2.1 },
  { x: 80, y: 55, size: 1.5, delay: 0.4 },
  { x: 90, y: 68, size: 1, delay: 1.3 },

  // Additional stars — near the horizon
  { x: 14, y: 95, size: 1, delay: 2.6 },
  { x: 31, y: 89, size: 1.5, delay: 0.9 },
  { x: 47, y: 91, size: 1, delay: 1.8 },
  { x: 66, y: 89, size: 1.5, delay: 0.5 },
  { x: 82, y: 96, size: 1, delay: 2.2 },
];

export default function ArrivalStarfield() {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!starfieldRef.current) return;

      return createStarfieldAnimation(starfieldRef.current);
    },
    { scope: starfieldRef }
  );

  return (
    <div
        ref={starfieldRef}
        data-scene-object="arrival-starfield"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
    >
      {stars.map((star, index) => (
        <span
          key={index}
          data-star
          data-delay={star.delay}
          className="absolute block rounded-full bg-blue-200"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.65,
            boxShadow: "0 0 7px 1px rgba(95, 218, 243, 0.45)",
          }}
        />
      ))}
    </div>
  );
}
