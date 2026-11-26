
"use client";

export default function GreatHallScene() {
  return (
    <section
      id="great-hall"
      data-scene="great-hall"
      className="relative isolate min-h-[100svh] w-full overflow-hidden bg-[#08090e]"
    >
      {/* Atmosphere */}
      <div
        data-scene-layer="atmosphere"
        className="pointer-events-none absolute inset-0"
      />

      {/* Distant architecture */}
      <div
        data-scene-layer="distant"
        className="pointer-events-none absolute inset-0"
      />

      {/* Main architecture */}
      <div
        data-scene-layer="environment"
        className="pointer-events-none absolute inset-0"
      />

      {/* Foreground */}
      <div
        data-scene-layer="foreground"
        className="pointer-events-none absolute inset-0"
      />

      {/* Magical effects */}
      <div
        data-scene-layer="effects"
        className="pointer-events-none absolute inset-0"
      />

      {/* Content */}
      <div
        data-scene-layer="content"
        className="relative z-10 min-h-[100svh]"
      />
    </section>
  );
}
