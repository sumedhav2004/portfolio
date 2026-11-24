
"use client";

import { useRef } from "react";
import { useGSAP } from "@/src/lib/animations/gsap"
import { createLanternAnimation } from "../animations/objects/lantern-animation";
import LanternFlame from "./lantern-flame";

export default function ArrivalLantern() {
  const lanternRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!lanternRef.current) return;

      return createLanternAnimation(lanternRef.current);
    },
    { scope: lanternRef }
  );

  return (
    <div
      ref={lanternRef}
      data-animation="arrival-lantern"
      className="relative w-16 md:w-20"
    >
      {/* Suspension chain */}
      <svg
        viewBox="0 0 40 150"
        className="mx-auto h-14 w-6"
        aria-hidden="true"
      >
        <path
          d="M20 0 V150"
          stroke="#A87939"
          strokeWidth="5"
          strokeDasharray="8 5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      {/* Lantern housing */}
      <div
        data-animation="lantern-swing"
        className="relative -mt-1"
      >
        <img
          src="/themes/magic/elements/arrival-lantern.png"
          alt=""
          className="block h-auto w-full"
        />

        {/* Animated flame */}
        <div
          data-animation="lantern-flame"
          className="absolute left-1/2 top-[47%] h-[20%] w-[18%] -translate-x-1/2"
        >
          <LanternFlame />
        </div>
      </div>

      {/* Independent light spill */}
      <div
        data-animation="lantern-glow"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 aspect-square w-[180%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/15 blur-3xl"
      />
    </div>
  );
}
