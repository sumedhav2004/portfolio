
import { gsap } from "@/src/lib/animations/gsap";

export function createGreatHallRevealAnimation(root: HTMLElement) {
  const hall = root.querySelector<HTMLElement>(
    "[data-great-hall-arrival]"
  );

  if (!hall) return () => {};

  gsap.set(hall, {
    autoAlpha: 0,
    yPercent: 12,
    scale: 1.08,
    transformOrigin: "50% 50%",
    force3D: true,
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top bottom",
      end: "top 25%",
      scrub: 0.8,
      invalidateOnRefresh: true,
    },
  });

  timeline.to(hall, {
    autoAlpha: 1,
    yPercent: 0,
    scale: 1,
    ease: "none",
  });

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
  };
}
