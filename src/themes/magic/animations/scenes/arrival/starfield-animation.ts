
import { gsap } from "@/src/lib/animations/gsap";

export function createStarfieldAnimation(root: HTMLElement) {
  const stars = root.querySelectorAll<HTMLElement>("[data-star]");

  if (!stars.length) {
    return () => {};
  }

  const tweens = Array.from(stars).map((star) => {
    const delay = Number(star.dataset.delay ?? 0);

    return gsap.to(star, {
      opacity: 0.2,
      scale: 0.65,
      duration: 2.2 + delay * 0.25,
      delay,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      transformOrigin: "center center",
    });
  });

  return () => {
    tweens.forEach((tween) => tween.kill());
  };
}
