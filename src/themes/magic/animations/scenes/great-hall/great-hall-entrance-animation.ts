
import { gsap } from "@/src/lib/animations/gsap";

export function createGreatHallEntranceAnimation(root: HTMLElement) {
  const blackout = root.querySelector<HTMLElement>(
    "[data-great-hall-blackout]"
  );

  const camera = root.querySelector<HTMLElement>(
    "[data-hall-camera]"
  );

  if (!blackout || !camera) return () => {};

  // Starting state: black screen, normal camera size.
  gsap.set(blackout, {
    autoAlpha: 1,
  });

  gsap.set(camera, {
    scale: 1,
    transformOrigin: "50% 50%",
    force3D: true,
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top top",

      // Keep the Great Hall pinned for this scroll distance.
      end: "+=160%",

      scrub: 1.3,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      markers: false,
    },
  });

  // PHASE 1 — Reveal the Great Hall.
  timeline.to(blackout, {
    autoAlpha: 0,
    duration: 0.65,
    ease: "none",
  });

  // PHASE 2 — Once revealed, gently push the camera forward.
  timeline.to(camera, {
    scale: 1,
    duration: 2.35,
    ease: "none",
  });

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
  };
}
