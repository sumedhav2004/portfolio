
import { gsap } from "@/src/lib/animations/gsap";

export function createArrivalSceneAnimation(root: HTMLElement) {
  const camera = root.querySelector<HTMLElement>("[data-scene-camera]");
  const distant = root.querySelector<HTMLElement>(
    '[data-scene-layer="distant"]'
  );
  const environment = root.querySelector<HTMLElement>(
    '[data-scene-layer="environment"]'
  );
  const foreground = root.querySelector<HTMLElement>(
    '[data-scene-layer="foreground"]'
  );
  const effects = root.querySelector<HTMLElement>(
    '[data-scene-layer="effects"]'
  );
  const content = root.querySelector<HTMLElement>(
    '[data-scene-layer="content"]'
  );

  if (
    !camera ||
    !distant ||
    !environment ||
    !foreground ||
    !effects ||
    !content
  ) {
    return () => {};
  }

  gsap.set(camera, {
    scale: 1,
    transformOrigin: "78% 96%",
    force3D: true,
  });

  
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: root,
      start: "top top",
      end: "+=220%",
      scrub: 1.2,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // The landscape begins moving first
  
timeline
  // Keep the distant environment stationary
  .to(distant, {
    yPercent: 0,
    ease: "none",
  }, 0)

  // Keep mountains and castle stationary
  .to(environment, {
    yPercent: 5,
    ease: "none",
  }, 0)

  // Very subtle foreground movement
  .to(foreground, {
    yPercent: -5,
    ease: "none",
  }, 0)

  // Keep magical effects stationary for now
  .to(effects, {
    yPercent: 0,
    ease: "none",
  }, 0)

  // Fade hero content
  .to(content, {
    autoAlpha: 0,
    y: -45,
    ease: "power1.in",
  }, 0)

    // Camera begins its approach
    .to(camera, {
      scale: 5.4,
      autoAlpha: 0,
      ease: "power1.inOut",
    }, 0.10)

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
  };
}
