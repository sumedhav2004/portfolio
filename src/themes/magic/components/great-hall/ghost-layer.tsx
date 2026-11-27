
"use client";

import { useEffect, useRef } from "react";
import { initGhostAnimations } from "./ghost-animation";

export default function GhostLayer() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const cleanup = initGhostAnimations(layer);

    return cleanup;
  }, []);

  return (
    <div
      ref={layerRef}
      className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
      aria-hidden="true"
    >
      {/* Nearly Headless Nick */}
      <div
        data-ghost="nick"
        className="absolute bottom-5 left-5 w-[30%] opacity-30 will-change-transform"
      >
        <img
          src="/themes/magic/elements/great-hall/nearly-headless-nick.png"
          alt=""
          draggable={false}
          className="block h-auto w-full select-none"
        />
      </div>

      {/* Peeves */}
      <div
        data-ghost="peeves"
        className="absolute right-[10%] top-[20%] w-[30%] origin-center opacity-30 will-change-transform"
      >
        <img
          src="/themes/magic/elements/great-hall/peeves.png"
          alt=""
          draggable={false}
          className="block h-auto w-full select-none"
        />
      </div>
    </div>
  );
}
