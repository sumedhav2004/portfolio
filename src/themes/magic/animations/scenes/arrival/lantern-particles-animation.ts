
import { gsap } from "@/src/lib/animations/gsap";

export function createParticlesAnimation(root: HTMLElement) {
  const particles = root.querySelectorAll<HTMLElement>("[data-particle]");

  if (!particles.length) {
    return () => {};
  }

  const tweens = Array.from(particles).map((particle) => {
    const delay = Number(particle.dataset.delay ?? 0);
    const distance = Number(particle.dataset.distance ?? 20);

    return gsap.to(particle, {
      y: -distance,
      x: 8,
      opacity: 0.85,
      scale: 1.15,
      duration: 4 + delay * 0.3,
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
