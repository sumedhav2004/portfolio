"use client";

import { useThemeStore } from "@/src/stores/theme-store";
import dynamic from "next/dynamic";


const MagicPortfolio = dynamic(
  () => import("@/src/themes/magic/magic-portfolio")
);

const OmnitrixPortfolio = dynamic(
  () => import("@/src/themes/omnitrix/omnitrix-portfolio")
);

const DragonballPortfolio = dynamic(
  () => import("@/src/themes/dragonball/dragonball-portfolio")
);

const portfolioComponents = {
  magic: MagicPortfolio,
  omnitrix: OmnitrixPortfolio,
  dragonball: DragonballPortfolio,
};

export default function ThemeRenderer() {
  const activeTheme = useThemeStore((state) => state.activeTheme);

  const ActivePortfolio = portfolioComponents[activeTheme];

  return <ActivePortfolio />;
}