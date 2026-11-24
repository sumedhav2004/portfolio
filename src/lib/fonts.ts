
import {
  Sedgwick_Ave_Display,
  Inter,
  Oxanium,
  Orbitron,
  Teko,
  Chakra_Petch,
} from "next/font/google";

// MAGIC FONTS
const magicHeading = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-magic-heading",
  display: "swap",
});

const magicBody = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-magic-body",
  display: "swap",
});

// OMNITRIX FONTS
const omnitrixHeading = Oxanium({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-omnitrix-heading",
  display: "swap",
});

const omnitrixBody = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-omnitrix-body",
  display: "swap",
});

// DRAGON BALL FONTS
const dragonballHeading = Teko({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dragonball-heading",
  display: "swap",
});

const dragonballBody = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dragonball-body",
  display: "swap",
});

// EXPORT FONT CONFIGURATIONS
export const magicFonts = {
  heading: magicHeading,
  body: magicBody,
};

export const omnitrixFonts = {
  heading: omnitrixHeading,
  body: omnitrixBody,
};

export const dragonballFonts = {
  heading: dragonballHeading,
  body: dragonballBody,
};
