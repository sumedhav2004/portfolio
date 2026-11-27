
"use client";

import LanternFlame from "../../../components/arrival/lantern-flame";
import GhostLayer from "../../../components/great-hall/ghost-layer";
import MagicFlame from "../../../components/great-hall/MagicFlame";

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
      <div
        data-hall-goblet-assembly
        className="pointer-events-none absolute bottom-0 left-1/2 z-30 flex w-[clamp(360px,38vw,640px)] -translate-x-1/2 flex-col items-center justify-end"
      >
        {/* Goblet with flame */}
        <div
          data-hall-goblet
          className="relative z-10 isolate w-[30%] translate-y-8"
        >
          {/* Blue flame — behind the Goblet */}
          <div
            className="absolute left-1/2 top-0 z-0 aspect-[3/4] w-[65%]
              -translate-x-1/2 -translate-y-[84%]"
          >
            <MagicFlame variant="blue" />
          </div>

          {/* Goblet — foreground */}
          <img
            src="/themes/magic/elements/great-hall/goblet-of-fire.png"
            alt="The Goblet of Fire"
            draggable={false}
            className="relative z-10 block h-auto w-full object-contain"
          />
        </div>

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

      {/* Layer 4 — Parchment summoned from the Goblet */}
      <div
        data-hall-parchment
        className="pointer-events-none absolute left-1/2 top-[30%] z-40 w-[clamp(180px,25vw,340px)] -translate-x-1/2 opacity-0"
      >
        <img
          src="/themes/magic/elements/great-hall/parchment.png"
          alt="Magical parchment containing experience records"
          draggable={false}
          className="block h-auto w-full object-contain"
        />

        {/* Experience text */}
        <div
          data-experience-content
          className="absolute inset-[20%] flex flex-col items-center justify-center text-center"
        />
      </div>

      {/* Layer 5 — Magical effects */}
      <div
        data-hall-effects
        className="pointer-events-none relative inset-0 z-50"
      >
        <div className="absolute left-2/5 w-fit">
          <h2>Experience</h2>
        </div>
      </div>
    </section>
  );
}
