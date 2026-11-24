
"use client";

import { useEffect, useRef } from "react";

import TransitionOverlay from "./transition-overlay";
import { useThemeStore } from "@/src/stores/theme-store";
import { gsap } from "gsap";

export default function ThemeTransitionManager() {
  const overlayRef = useRef<HTMLDivElement>(null);

  const transitionPhase = useThemeStore(
    (state) => state.transitionPhase
  );

  const activatePendingTheme = useThemeStore(
    (state) => state.activatePendingTheme
  );

  const finishThemeTransition = useThemeStore(
    (state) => state.finishThemeTransition
  );

  useEffect(() => {
    const overlay = overlayRef.current;

    if (!overlay) return;

    let tween: gsap.core.Tween | undefined;

    if (transitionPhase === "exiting") {
      tween = gsap.to(overlay, {
        opacity: 1,
        duration: 0.55,
        ease: "power2.inOut",
        onComplete: activatePendingTheme,
      });
    }

    if (transitionPhase === "entering") {
      tween = gsap.to(overlay, {
        opacity: 0,
        duration: 0.75,
        delay: 0.2,
        ease: "power2.out",
        onComplete: finishThemeTransition,
      });
    }

    return () => {
      tween?.kill();
    };
  }, [
    transitionPhase,
    activatePendingTheme,
    finishThemeTransition,
  ]);

  return <TransitionOverlay ref={overlayRef} />;
}
