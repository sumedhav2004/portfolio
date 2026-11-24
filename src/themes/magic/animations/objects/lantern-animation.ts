import { gsap } from "@/src/lib/animations/gsap";

export function createLanternAnimation(root: HTMLElement) {
  const swing = root.querySelector<HTMLElement>(
    '[data-animation="lantern-swing"]'
  );

  const flame = root.querySelector<HTMLElement>(
    '[data-animation="lantern-flame"]'
  );

  const glow = root.querySelector<HTMLElement>(
    '[data-animation="lantern-glow"]'
  );

  const flameCore = root.querySelector<SVGPathElement>(
    ".flame-core"
  );

  const flameInner = root.querySelector<SVGPathElement>(
    ".flame-inner"
  );

  if (!swing || !flame || !glow) {
    return () => {};
  }

  // Gentle pendulum movement
  const swingTimeline = gsap.to(swing, {
    rotation: 2.2,
    duration: 2.4,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    transformOrigin: "70% 0%",
  });

  // Subtle flame movement
  const flameTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
  });

  flameTimeline
    .to(flame, {
      scaleX: 1.06,
      scaleY: 0.96,
      duration: 0.65,
      ease: "sine.inOut",
    })
    .to(
      flameCore,
      {
        scaleY: 1.05,
        duration: 0.45,
        ease: "sine.inOut",
      },
      0
    )
    .to(
      flameInner,
      {
        opacity: 0.7,
        duration: 0.5,
        ease: "sine.inOut",
      },
      0
    );

  // Independent light breathing
  const glowTimeline = gsap.to(glow, {
    opacity: 0.8,
    scale: 1.08,
    duration: 1.8,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  });

  // Cleanup all animations
  return () => {
    swingTimeline.kill();
    flameTimeline.kill();
    glowTimeline.kill();
  };
}
