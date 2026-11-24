
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register shared GSAP plugins once
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Central animation configuration
gsap.config({
  nullTargetWarn: false,
});

export { gsap, ScrollTrigger, useGSAP };
