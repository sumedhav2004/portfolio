
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

const randomBetween = (min: number, max: number) =>
  min + Math.random() * (max - min);

export function playExperienceParchmentAnimation(
  root: HTMLElement,
  onFlameRestore: () => void
) {
  const scene = root.closest<HTMLElement>('[data-scene="great-hall"]');
  const flame = scene?.querySelector<HTMLElement>("[data-hall-flame]");

  const parchmentImage = root.querySelector<HTMLElement>(
    "[data-parchment-image]"
  );

  const contentLines = root.querySelectorAll<HTMLElement>(
    "[data-parchment-line]"
  );

  if (!scene || !flame) return () => {};

const flameRect = flame.getBoundingClientRect();
const parchmentRect = root.getBoundingClientRect();

// Launch from the visible centre of the flame.
const flameCenterX = flameRect.left + flameRect.width * 0.5;
const flameCenterY = flameRect.top + flameRect.height * 0.5;

const startX =
  flameCenterX - (parchmentRect.left + parchmentRect.width / 2);

const startY =
  flameCenterY - (parchmentRect.top + parchmentRect.height / 2);
  // The parchment's airborne path.
  // Each point is randomized, but the path always finishes to the right.
  const launchX = startX + randomBetween(-18, 18);
  const launchY = startY - randomBetween(105, 145);

  const flightPath = [
    { x: launchX, y: launchY },
    {
      x: randomBetween(-55, 10),
      y: randomBetween(-230, -180),
    },
    {
      x: randomBetween(35, 100),
      y: randomBetween(-280, -210),
    },
    {
      x: randomBetween(125, 190),
      y: randomBetween(-220, -145),
    },
    {
      x: randomBetween(100, 155),
      y: randomBetween(-115, -65),
    },
  ];

  const ctx = gsap.context(() => {
    gsap.set(root, {
      autoAlpha: 0,
      x: startX,
      y: startY,
      scale: 0.045,
      rotation: randomBetween(-12, 12),
      rotationX: 0,
      rotationY: 0,
      transformPerspective: 1100,
      transformOrigin: "50% 50%",
      force3D: true,
    });

    gsap.set(contentLines, {
      autoAlpha: 0,
      y: 14,
      filter: "blur(5px)",
    });

    if (parchmentImage) {
      gsap.set(parchmentImage, {
        filter: "drop-shadow(0 0 0 rgba(255, 150, 60, 0))",
      });
    }

    const timeline = gsap.timeline();

    const flame = scene.querySelector<HTMLElement>("[data-hall-flame]");

// The parchment waits while the Goblet charges up.
const launchAt = 1.85;

// Flame grows upwards, gathering magical energy.
if (flame) {
  gsap.set(flame, {
    transformOrigin: "50% 100%",
    scaleX: 1,
    scaleY: 1,
  });

  // Initial powerful swelling.
  timeline.to(
    flame,
    {
      scaleX: 1.2,
      scaleY: 1.2,
      duration: 0.55,
      ease: "back.out(2.2)",
    },
    0
  );

  // Hold the charged flame with subtle magical pulsation.
  timeline.to(
    flame,
    {
      scaleX: 1.24,
      scaleY: 1.24,
      duration: 0.55,
      ease: "sine.inOut",
    },
    0.55
  );

  timeline.to(
    flame,
    {
      scaleX: 1.19,
      scaleY: 1.19,
      duration: 0.55,
      ease: "sine.inOut",
    },
    1.1
  );
}

    // 1. EXPLOSIVE LAUNCH
    // Parchment remains invisible during the entire charge-up.
timeline.to(
  root,
  {
    autoAlpha: 1,
    duration: 0.07,
  },
  launchAt
);

// Explosive launch directly from the flame.
timeline.to(
  root,
  {
    x: launchX,
    y: launchY,
    scale: 0.075,
    rotation: randomBetween(-35, 35),
    rotationX: randomBetween(-35, 35),
    rotationY: randomBetween(-40, 40),
    duration: 0.2,
    ease: "power4.out",
  },
  launchAt
);

    // The parchment escapes; the Goblet gradually returns to blue.
if (flame) {
  timeline.to(
    flame,
    {
      scaleX: 1,
      scaleY: 1,
      duration: 0.5,
      ease: "power2.out",
    },
    launchAt + 0.25
  );
}

timeline.call(onFlameRestore, [], launchAt + 0.25);

    // 2. FLOAT, TUMBLE AND DRIFT THROUGH THE AIR
    timeline.to(
  root,
  {
    motionPath: {
      path: flightPath,
      curviness: 1.6,
      autoRotate: false,
    },
    scale: 0.2,
    duration: 1.45,
    ease: "sine.inOut",
  },
  launchAt + 0.18
);

    // Independent 3D movement — irregular, not circular.
    timeline.to(root, {
      keyframes: [
        {
          rotation: randomBetween(-45, 45),
          rotationX: randomBetween(-65, 65),
          rotationY: randomBetween(-85, 85),
          duration: 0.32,
          ease: "sine.inOut",
        },
        {
          rotation: randomBetween(-75, 75),
          rotationX: randomBetween(35, 95),
          rotationY: randomBetween(-100, 100),
          duration: 0.38,
          ease: "sine.inOut",
        },
        {
          rotation: randomBetween(-35, 35),
          rotationX: randomBetween(-45, 45),
          rotationY: randomBetween(-55, 55),
          duration: 0.4,
          ease: "sine.inOut",
        },
        {
          rotation: randomBetween(-12, 12),
          rotationX: randomBetween(-15, 15),
          rotationY: randomBetween(-18, 18),
          duration: 0.35,
          ease: "power2.out",
        },
      ],
    }, 0.18);

    // 3. EXPLOSIVE FLIGHT TOWARDS THE VIEWER
    timeline.to(root, {
      x: 0,
      y: 0,
      scale: 1.08,
      rotation: randomBetween(-4, 4),
      rotationX: 0,
      rotationY: 0,
      duration: 0.48,
      ease: "expo.in",
    }, 1.58);

    // 4. IMPACT AND SETTLE
    timeline.to(root, {
      scale: 1.025,
      rotation: randomBetween(-1.5, 1.5),
      duration: 0.17,
      ease: "power2.out",
    });

    timeline.to(root, {
      scale: 1,
      rotation: 0,
      duration: 0.28,
      ease: "elastic.out(1, 0.65)",
    });

    // 5. MAGICAL GLOW
    if (parchmentImage) {
      timeline.to(parchmentImage, {
        filter: "drop-shadow(0 0 18px rgba(255, 164, 75, 0.38))",
        duration: 0.45,
        ease: "sine.out",
      }, 1.8);
    }

    // 6. REVEAL THE EXPERIENCE
    timeline.to(contentLines, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.45,
      stagger: 0.12,
      ease: "power2.out",
    }, ">-0.02");
  }, root);

  return () => ctx.revert();
}
