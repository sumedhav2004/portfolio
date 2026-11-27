
"use client";

import { useRef } from "react";
import { useGSAP } from "@/src/lib/animations/gsap";
import { createArrivalSceneAnimation } from "../../../animations/scenes/arrival/arrival-scene-animation";

import ArrivalLantern from "../../../components/arrival/arrival-lantern";
import ArrivalStarfield from "../../../components/arrival/arrival-starfield";
import ArrivalMoon from "../../../components/arrival/arrival-moon";
import ArrivalParticles from "../../../components/arrival/arrival-lantern-particles";
import ArrivalHeroContent from "./hero-content";

export default function ArrivalScene() {
  const sceneRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!sceneRef.current) return;

      return createArrivalSceneAnimation(sceneRef.current);
    },
    { scope: sceneRef }
  );

  return (
    <section
      ref={sceneRef}
      id="arrival"
      data-scene="arrival"
      className="relative isolate h-[100svh] min-h-[100svh] w-full overflow-hidden"
    >
      {/* Camera wrapper — environmental visuals only */}
      <div
        data-scene-camera
        className="absolute inset-0"
      >
        {/* Layer 0 — Atmosphere */}
        <div
          data-scene-layer="atmosphere"
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: `
              radial-gradient(
                ellipse at 76% 43%,
                rgba(255, 255, 255, 0.055) 0%,
                rgba(11, 20, 43, 0.10) 22%,
                transparent 58%
              ),
              #000000
            `,
          }}
        />

        {/* Layer 1 — Distant environment */}
        <div
          data-scene-layer="distant"
          className="pointer-events-none absolute inset-0"
        >
          <ArrivalStarfield />

          <div className="absolute top-[10%] right-[17%] z-0">
            <ArrivalMoon />
          </div>
        </div>

        {/* Layer 2 — Main environment */}
        <div
          data-scene-layer="environment"
          className="pointer-events-none absolute bottom-0 inset-0"
        >
          {/* Mountain range */}
          <div
            data-scene-object="arrival-mountains"
            className="absolute inset-x-0 bottom-[-5%] z-0"
          >
            <img
              src="/themes/magic/background/mountain-bg.png"
              alt=""
              aria-hidden="true"
              className="block h-auto w-full max-w-none object-contain object-bottom"
            />
          </div>

          {/* Main castle */}
          <div
            data-scene-object="arrival-castle"
            className="absolute right-0 bottom-[-5%] z-10 flex h-full w-full items-end justify-end"
          >
            <img
              src="/themes/magic/background/hogwarts-castle.png"
              alt="An enchanted castle in the distance"
              className="h-auto w-full max-w-none object-contain object-bottom-right md:w-[85%] lg:w-[72%]"
            />
          </div>
        </div>

        {/* Layer 3 — Foreground environment */}
        <div
          data-scene-layer="foreground"
          className="pointer-events-none absolute inset-0"
        >
          {/* Lily and rocks */}
          <div
            data-scene-object="arrival-lily-rocks"
            className="absolute bottom-[-5%] left-[0%] z-20 w-[23%]"
          >
            <img
              src="/themes/magic/elements/lily_and_rocks.png"
              alt=""
              aria-hidden="true"
              className="block h-auto w-full object-contain"
            />
          </div>

          {/* Rocks with pine trees */}
          <div
            data-scene-object="arrival-rocks-pine"
            className="absolute bottom-[-18%] left-[5%] z-30 w-[47%]"
          >
            <img
              src="/themes/magic/elements/rocks-with-pine-trees.png"
              alt=""
              aria-hidden="true"
              className="block h-auto w-full object-contain"
            />
          </div>

          {/* Rocky herbs */}
          <div
            data-scene-object="arrival-rocky-herbs"
            className="absolute bottom-[-5%] right-[-3%] z-40 w-[24%]"
          >
            <img
              src="/themes/magic/elements/rocky-herbs.png"
              alt=""
              aria-hidden="true"
              className="block h-auto w-full object-contain"
            />
          </div>

          {/* Existing lantern */}
          <div className="pointer-events-auto absolute bottom-16 left-8 z-50 md:left-16">
            <ArrivalLantern />
          </div>
        </div>

        {/* Layer 4 — Magical effects */}
        <div
          data-scene-layer="effects"
          className="pointer-events-none absolute inset-0"
        >
          <ArrivalParticles />
        </div>

      </div>

      {/* Layer 5 — Content OUTSIDE camera */}
      <div
        data-scene-layer="content"
        className="relative z-10 min-h-[100svh]"
      >
        <ArrivalHeroContent />
      </div>
      
    </section>
  );
}
