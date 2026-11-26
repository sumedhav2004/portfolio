
"use client";

import { useRef } from "react";
import { useGSAP } from "@/src/lib/animations/gsap";
import { createParticlesAnimation } from "../../animations/scenes/arrival/lantern-particles-animation"; 

const particles = [
  { x: 8, y: 72, size: 3, delay: 0.2, distance: 22 },
  { x: 16, y: 56, size: 2, delay: 1.4, distance: 16 },
  { x: 24, y: 84, size: 3, delay: 0.8, distance: 26 },
  { x: 34, y: 65, size: 2, delay: 2.1, distance: 18 },
  { x: 43, y: 88, size: 2, delay: 1.1, distance: 20 },
  { x: 53, y: 70, size: 3, delay: 2.6, distance: 24 },
  { x: 62, y: 83, size: 2, delay: 0.5, distance: 17 },
  { x: 72, y: 62, size: 3, delay: 1.8, distance: 23 },
  { x: 82, y: 79, size: 2, delay: 2.3, distance: 19 },
  { x: 91, y: 68, size: 3, delay: 0.9, distance: 25 },
  { x: 12, y: 38, size: 2, delay: 2.4, distance: 15 },
  { x: 29, y: 46, size: 3, delay: 1.6, distance: 21 },
  { x: 47, y: 34, size: 2, delay: 0.4, distance: 17 },
  { x: 68, y: 42, size: 3, delay: 2.8, distance: 24 },
  { x: 87, y: 49, size: 2, delay: 1.2, distance: 16 },
];

export default function ArrivalParticles() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!particlesRef.current) return;

      return createParticlesAnimation(particlesRef.current);
    },
    { scope: particlesRef }
  );

  return (
    <div
        ref={particlesRef}
        data-scene-object="arrival-particles"
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
    >
      {particles.map((particle, index) => (
        <span
          key={index}
          data-particle
          data-delay={particle.delay}
          data-distance={particle.distance}
          className="absolute block rounded-full bg-[#FFD88A]"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: 0,
            boxShadow: "0 0 10px 2px rgba(239, 203, 85, 0.85)",
          }}
        />
      ))}
    </div>
  );
}
