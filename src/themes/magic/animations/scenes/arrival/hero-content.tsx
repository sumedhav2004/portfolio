
"use client";

export default function ArrivalHeroContent() {
  return (
    <div
      data-hero-content
      className="pointer-events-auto relative flex min-h-[100svh] w-full items-start"
    >
      <div className="w-full max-w-xl py-20 md:py-0">

        {/* Main heading */}
        <h1
          data-hero-item="heading"
          className="text-foreground text-display"
        >
          Hi, I&apos;m <br /> Sumedhav Krishna.
        </h1>

        {/* Professional identity */}
        <div
          data-hero-item="role"
          className="mt-7 space-y-1"
        >
          <p className="text-body">
            AI-native software engineer | Systems Explorer
          </p>
        </div>
      </div>
    </div>
  );
}
