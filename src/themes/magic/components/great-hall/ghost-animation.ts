
import gsap from "gsap";

export function initGhostAnimations(root: HTMLElement) {
  const nick = root.querySelector<HTMLElement>('[data-ghost="nick"]');
  const peeves = root.querySelector<HTMLElement>('[data-ghost="peeves"]');

  if (!nick || !peeves) return () => {};

  const ctx = gsap.context(() => {
    // =========================================
    // NEARLY HEADLESS NICK
    // Slow, gentle drifting along the ground
    // =========================================

    const nickDrift = gsap.timeline({
      repeat: -1,
      yoyo: true,
      defaults: { ease: "sine.inOut" },
    });

    nickDrift.to(nick, {
      x: 24,
      duration: 9,
    });

    nickDrift.to(nick, {
      x: 48,
      duration: 12,
    });

    nickDrift.to(nick, {
      x: 12,
      duration: 10,
    });

    gsap.to(nick, {
      y: -5,
      rotation: 0.6,
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });


    // =========================================
    // PEEVES
    // Full-screen wandering and occasional spins
    // =========================================

    const getBounds = () => {
      const width = peeves.offsetWidth;
      const height = peeves.offsetHeight;

      const margin = 24;

      return {
        minX: margin,
        maxX: Math.max(margin, root.clientWidth - width - margin),
        minY: margin,
        maxY: Math.max(margin, root.clientHeight - height - margin),
      };
    };

    // Starting position
    const startX = peeves.offsetLeft;
    const startY = peeves.offsetTop;

    // Independent movement controller.
    let wanderTween: gsap.core.Tween | null = null;
    let pauseCall: gsap.core.Tween | null = null;

    function wander() {
      const area = getBounds();

      const nextX = gsap.utils.random(area.minX, area.maxX);
      const nextY = gsap.utils.random(area.minY, area.maxY);

      const duration = gsap.utils.random(6, 12);

      wanderTween = gsap.to(peeves, {
        x: nextX - startX,
        y: nextY - startY,
        duration,
        ease: "sine.inOut",
        onComplete: () => {
          // Brief, irregular pause before choosing another destination.
          pauseCall = gsap.delayedCall(
            gsap.utils.random(0.2, 1.8),
            wander
          );
        },
      });
    }

    // Start exploring the hall.
    wander();


    // =========================================
    // RARE ROTATIONS
    // Only occasionally, never continuously.
    // =========================================

    function occasionalSpin() {
      const shouldSpin = Math.random() > 0.5;

      if (shouldSpin) {
        gsap.to(peeves, {
          rotation: `+=${gsap.utils.random(-90, 90)}`,
          duration: gsap.utils.random(1.2, 2.2),
          ease: "sine.inOut",
        });
      }

      // Wait a long, random interval before considering another spin.
      gsap.delayedCall(
        gsap.utils.random(12, 24),
        occasionalSpin
      );
    }

    gsap.delayedCall(
      gsap.utils.random(5, 12),
      occasionalSpin
    );

  }, root);

  return () => ctx.revert();
}
