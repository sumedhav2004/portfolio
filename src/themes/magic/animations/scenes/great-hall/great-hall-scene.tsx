
"use client";

import LanternFlame from "../../../components/arrival/lantern-flame";
import GhostLayer from "../../../components/great-hall/ghost-layer";
import MagicFlame from "../../../components/great-hall/MagicFlame";
import { experience } from "../../../../../data/experience";
import ExperienceParchment from "../../../components/great-hall/experience-parchment";
import { useState } from "react";

const ROWS = 20;
const CANDLES_PER_ROW = 10;

const candles = Array.from(
  { length: ROWS * CANDLES_PER_ROW },
  (_, index) => {
    const row = Math.floor(index / CANDLES_PER_ROW);
    const col = index % CANDLES_PER_ROW;

    // 0 = top / biggest, 19 = bottom / smallest
    const depth = row / (ROWS - 1);

    // Horizontal spread gradually narrows towards the bottom.
    const spread = 100 - depth * 42;
    const leftEdge = (100 - spread) / 2;

    const spacing = spread / (CANDLES_PER_ROW - 1);

    // Alternate rows are slightly staggered.
    const stagger = row % 2 === 0 ? 0 : spacing * 0.3;

    const x = leftEdge + col * spacing + stagger;

    // Twenty evenly distributed horizontal levels.
    const y = 3 + row * 1.9;

    // Biggest at the top, progressively smaller below.
    const scale = 1.35 - depth * 1.0;

    return {
      id: index,
      row,
      col,
      x: Math.min(99, Math.max(1, x)),
      y,
      z: ROWS - row,
      depth,
      scale,
      width: 2.4 * scale,
      delay: (index * 0.173) % 2,
    };
  }
).filter((candle) => candle.col < 2 || candle.col > 7);


export default function GreatHallScene() {
  const [activeIndex, setActiveIndex] = useState(-1);
const [isSummoning, setIsSummoning] = useState(false);
const [animationKey, setAnimationKey] = useState(0);

const summonNextExperience = () => {
  if (isSummoning || experience.length === 0) return;

  setIsSummoning(true);

  setActiveIndex((current) => (current + 1) % experience.length);

  // Every selection gets a fresh animation.
  setAnimationKey((current) => current + 1);
};

const selectedExperience =
  activeIndex >= 0 ? experience[activeIndex] : null;
  return (
    <section
      id="great-hall"
      data-scene="great-hall"
      className="relative isolate h-[100svh] min-h-[100svh] w-full overflow-hidden bg-[#080604]"
    >
      {/* Layer 0 — Darkness and atmosphere */}
      <div
        data-hall-layer="atmosphere"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/55" />

        <div
          data-hall-glow
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at 50% 48%, rgba(255,174,75,0.18), transparent 65%)",
          }}
        />
      </div>

      {/* Layer 1 — Great Hall architecture */}
      <div data-hall-background className="absolute inset-0 z-0">
        <img
          src="/themes/magic/background/great-hall/great-hall.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Layer 2 — Floating ceiling candles */}
      <div
        data-hall-candles
        className="pointer-events-none absolute inset-0 z-10"
      >
        {candles.map((candle) => (
          <div
            key={candle.id}
            data-hall-candle
            data-delay={candle.delay}
            className="absolute"
            style={{
              left: `${candle.x}%`,
              top: `${candle.y}%`,
              width: `${30 * candle.scale}px`,
              zIndex: candle.z,
            }}
          >
            <LanternFlame />
            <img
              src="/themes/magic/elements/great-hall/candle.png"
              alt=""
              aria-hidden="true"
              draggable={false}
              className="block h-auto w-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Layer 3 — Ghosts */}
      <GhostLayer />

      {/* Layer 3 — Goblet and pedestal assembly */}
      {/* Layer 3 — Goblet and pedestal assembly */}
<div
  data-hall-goblet-assembly
  className="
    pointer-events-none absolute bottom-0 left-1/2 z-30
    flex w-[clamp(360px,38vw,640px)]
    -translate-x-1/2 flex-col items-center justify-end
  "
>
  {/* Interactive Goblet */}
  <button
    type="button"
    data-hall-goblet
    onClick={summonNextExperience}
    disabled={isSummoning}
    aria-label="Summon the next experience"
    className="
      pointer-events-auto relative z-10 isolate
      w-[30%] translate-y-8 cursor-pointer
      border-0 bg-transparent p-0
      disabled:cursor-wait
      focus-visible:outline focus-visible:outline-2
      focus-visible:outline-offset-4 focus-visible:outline-pink-400
    "
  >
    {/* Flame — turns pink during summoning */}
    <div
  data-hall-flame
  className="
    absolute left-1/2 top-0 z-0
    aspect-[3/4] w-[65%]
    -translate-x-1/2 -translate-y-[84%]
  "
>
  <MagicFlame variant={isSummoning ? "pink" : "blue"} />
</div>

    {/* Goblet */}
    <img
      src="/themes/magic/elements/great-hall/goblet-of-fire.png"
      alt=""
      draggable={false}
      className="relative z-10 block h-auto w-full object-contain"
    />
  </button>

  {/* Pedestal */}
  <div
    data-hall-pedestal
    className="relative z-0 w-full"
  >
    <img
      src="/themes/magic/elements/great-hall/pedestal.png"
      alt="Goblet pedestal"
      draggable={false}
      className="block h-auto w-full object-contain"
    />
  </div>
</div>

      {/* Layer 4 — Experience parchment */}
<ExperienceParchment
  experience={selectedExperience}
  animationKey={animationKey}
  onFlameRestore={() => setIsSummoning(false)}
/>

      {/* Layer 5 — Magical effects */}
      <div
        data-hall-effects
        className="pointer-events-none relative inset-0 z-50 h-full"
      >
        <div className="absolute left-2/5 w-fit">
          <h2>Experience</h2>
        </div>

        <div className="absolute left-1/3 bottom-10 w-fit font-light text-3xl">
          <span>
            <p>" The goblet of fire is an extremely powerful magical object</p>
          </span>
          <span>
            <p>Click Around and Find out "</p>
          </span>
        </div>
      </div>
    </section>
  );
}
