
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
  x: 0,
  y: 0,
  transformOrigin: "0% 0%",
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
  markers: true,
},
});

timeline
  // No independent movement of the background or castle
  .to(distant, {
    y: 0,
    ease: "none",
  }, 0)

  .to(environment, {
    y: 0,
    ease: "none",
  }, 0)

  // Only a tiny foreground movement
  .to(foreground, {
    y: -10,
    ease: "none",
  }, 0)

  .to(effects, {
    y: 0,
    ease: "none",
  }, 0)

  .to(content, {
    autoAlpha: 0,
    y: -45,
    ease: "power1.in",
  }, 0)

    // Camera begins its approach
    .to(camera, {
      scale: 1,
      ease: "none",
    }, 0)

    // Final approach — stronger perspective
    .to(camera, {
      scale: 2.4,
      ease: "none",
    }, 0);

  return () => {
    timeline.scrollTrigger?.kill();
    timeline.kill();
  };
}
