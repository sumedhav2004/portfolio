
import type { ThemeDefinition } from "./types";

export const themes = {
  magic: {
    id: "magic",
    name: "The Wizarding World",
    description: "A world of magic and mystery.",

    fonts: {
      heading: "var(--font-magic-heading)",
      body: "var(--font-magic-body)",
    },

    
colors: {
  background: "#000000",
  foreground: "#FFFFFF",

  surface: "#080308",
  surfaceForeground: "#FFFFFF",

  primary: "#300513",
  primaryForeground: "#FFFFFF",

  secondary: "#0B142B",
  secondaryForeground: "#FFFFFF",

  accent: "#A51F42",
  accentForeground: "#FFFFFF",

  muted: "#08070A",
  mutedForeground: "#C5C0C8",

  border: "#29101D",
},


    typography: {
      display: "clamp(3.5rem, 6.5vw, 6.5rem)",
      h1: "clamp(2.75rem, 5vw, 5rem)",
      h2: "clamp(2.25rem, 4vw, 3.75rem)",
      h3: "clamp(1.75rem, 2.5vw, 2.5rem)",
      subtitle: "clamp(1.125rem, 1.6vw, 1.5rem)",
      body: "clamp(0.9375rem, 1vw, 1.0625rem)",
      small: "0.875rem",
      caption: "0.75rem",
    },

    layout: {
      contentMaxWidth: "1200px",
      sectionPaddingX: "clamp(1.5rem, 5vw, 6rem)",
      sectionPaddingY: "clamp(2rem, 5vh, 5rem)",
      contentGap: "clamp(1rem, 2vw, 2rem)",
    },

    motion: {
      fast: 0.3,
      normal: 0.7,
      slow: 1.2,
      stagger: 0.12,
      parallaxIntensity: 1,
    },
  },

  omnitrix: {
    id: "omnitrix",
    name: "Omnitrix",
    description: "A futuristic world of transformation.",

    fonts: {
      heading: "var(--font-omnitrix-heading)",
      body: "var(--font-omnitrix-body)",
    },

    colors: {
      background: "#010302",
      foreground: "#FFFFFF",
      surface: "#050A07",
      surfaceForeground: "#FFFFFF",
      primary: "#39FF14",
      primaryForeground: "#010302",
      secondary: "#0D2113",
      secondaryForeground: "#E8F0EA",
      accent: "#00FF41",
      accentForeground: "#010302",
      muted: "#09150D",
      mutedForeground: "#A5B2A8",
      border: "#176B2C",
    },

    typography: {
      display: "clamp(3.5rem, 7vw, 7rem)",
      h1: "clamp(2.75rem, 5.5vw, 5rem)",
      h2: "clamp(2.25rem, 4vw, 3.75rem)",
      h3: "clamp(1.75rem, 2.5vw, 2.5rem)",
      subtitle: "clamp(1.125rem, 1.6vw, 1.5rem)",
      body: "clamp(0.9375rem, 1vw, 1.0625rem)",
      small: "0.875rem",
      caption: "0.75rem",
    },

    layout: {
      contentMaxWidth: "1280px",
      sectionPaddingX: "clamp(1.5rem, 5vw, 6rem)",
      sectionPaddingY: "clamp(2rem, 5vh, 5rem)",
      contentGap: "clamp(1rem, 2vw, 2rem)",
    },

    motion: {
      fast: 0.2,
      normal: 0.45,
      slow: 0.8,
      stagger: 0.07,
      parallaxIntensity: 1.2,
    },
  },

  dragonball: {
    id: "dragonball",
    name: "Dragon Ball",
    description: "A universe powered by limitless energy.",

    fonts: {
      heading: "var(--font-dragonball-heading)",
      body: "var(--font-dragonball-body)",
    },

    colors: {
      background: "#080A12",
      foreground: "#FFFFFF",
      surface: "#151D30",
      surfaceForeground: "#FFFFFF",
      primary: "#FF6A00",
      primaryForeground: "#FFFFFF",
      secondary: "#1254B5",
      secondaryForeground: "#FFFFFF",
      accent: "#FFD52A",
      accentForeground: "#080A12",
      muted: "#0D1425",
      mutedForeground: "#AEB8C9",
      border: "#263754",
    },

    typography: {
      display: "clamp(3.75rem, 7vw, 7.5rem)",
      h1: "clamp(3rem, 5.5vw, 5.5rem)",
      h2: "clamp(2.25rem, 4vw, 4rem)",
      h3: "clamp(1.75rem, 2.5vw, 2.75rem)",
      subtitle: "clamp(1.125rem, 1.6vw, 1.5rem)",
      body: "clamp(0.9375rem, 1vw, 1.0625rem)",
      small: "0.875rem",
      caption: "0.75rem",
    },

    layout: {
      contentMaxWidth: "1280px",
      sectionPaddingX: "clamp(1.5rem, 5vw, 6rem)",
      sectionPaddingY: "clamp(2rem, 5vh, 5rem)",
      contentGap: "clamp(1rem, 2vw, 2rem)",
    },

    motion: {
      fast: 0.2,
      normal: 0.5,
      slow: 0.9,
      stagger: 0.08,
      parallaxIntensity: 1.3,
    },
  },
} satisfies Record<string, ThemeDefinition>;
