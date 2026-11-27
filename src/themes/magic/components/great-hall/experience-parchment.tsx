
"use client";

import { useLayoutEffect, useRef } from "react";

import {
  getExperienceDuration,
  type Experience,
} from "../../../../data/experience";
import { playExperienceParchmentAnimation } from "../../animations/scenes/great-hall/experience-parchment";



interface ExperienceParchmentProps {
  experience: Experience | null;
  animationKey: number;
  onFlameRestore: () => void;
}

function formatDate(value?: string) {
  if (!value) return null;

  const match = value.match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/);

  if (!match) return value;

  const [, year, month] = match;

  return new Date(Number(year), Number(month) - 1, 1).toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    }
  );
}

export default function ExperienceParchment({
  experience,
  animationKey,
  onFlameRestore,
}: ExperienceParchmentProps) {
  const parchmentRef = useRef<HTMLDivElement>(null);
  const onFlameRestoreRef = useRef(onFlameRestore);

  useLayoutEffect(() => {
    onFlameRestoreRef.current = onFlameRestore;
  }, [onFlameRestore]);

  useLayoutEffect(() => {
  const parchment = parchmentRef.current;

  if (!experience || !parchment || animationKey === 0) return;

  let cancelled = false;
  let cleanup: (() => void) | undefined;

  const startAnimation = async () => {
    const parchmentImage =
      parchment.querySelector<HTMLImageElement>("[data-parchment-image]");

    // Wait until the parchment image has decoded and has its real dimensions.
    if (parchmentImage) {
      try {
        await parchmentImage.decode();
      } catch {
        // Continue if image decoding fails.
      }
    }

    // Prevent an outdated animation from starting after unmount/re-render.
    if (cancelled) return;

    cleanup = playExperienceParchmentAnimation(
      parchment,
      () => onFlameRestoreRef.current()
    );
  };

  void startAnimation();

  return () => {
    cancelled = true;
    cleanup?.();
  };
}, [experience, animationKey]);

  if (!experience) return null;

  const duration = getExperienceDuration(experience);

  const start = formatDate(experience.startDate);
  const end = experience.endDate
    ? formatDate(experience.endDate)
    : experience.startDate
      ? "Present"
      : null;

  const dateRange =
    start && end ? `${start} — ${end}` : null;

  return (
    <div
      ref={parchmentRef}
      data-hall-parchment
      className="
            pointer-events-none absolute left-1/3 top-[24%] z-40
            w-[clamp(360px,54vw,540px)]
            [perspective:1200px]
            "
      aria-live="polite"
    >
      {/* Parchment artwork */}
      <img
        data-parchment-image
        src="/themes/magic/elements/great-hall/parchment.png"
        alt=""
        draggable={false}
        className="block h-auto w-full select-none object-contain"
      />

      {/* Experience details */}
      <div
        data-experience-content
        className="
          absolute inset-[18%]
          flex flex-col items-start justify-start
          overflow-hidden text-center p-4 mt-2 ml-15
          text-[#382416] rotate-[-25deg]
        "
      >

        <p
          data-parchment-line
          className="font-serif text-sm
            font-bold leading-tight"
        >
          {experience.role}
        </p>

        <p
          data-parchment-line
          className="mt-2 font-serif text-[clamp(13px,1.2vw,18px)]
            italic text-[#79502f]"
        >
          {experience.organization}
        </p>

        {(dateRange || duration) && (
          <p
            data-parchment-line
            className="mt-4 font-serif text-[clamp(10px,0.95vw,14px)]
              tracking-wide"
          >
            {[dateRange, duration].filter(Boolean).join("  •  ")}
          </p>
        )}

        {experience.location && (
          <p
            data-parchment-line
            className="mt-2 font-serif text-[clamp(10px,0.9vw,13px)]
              italic text-[#79502f]"
          >
            {experience.location}
          </p>
        )}

        {experience.description && (
          <p
            data-parchment-line
            className="mt-4 max-w-full font-serif
              text-[clamp(11px,1vw,14px)] leading-relaxed"
          >
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}
