
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
      background: "#020203",
      foreground: "#F5F3F7",

      surface: "#0A080D",
      surfaceForeground: "#F5F3F7",

      primary: "#650D25",
      primaryForeground: "#FFFFFF",

      secondary: "#171020",
      secondaryForeground: "#EAE5EF",

      accent: "#A51F42",
      accentForeground: "#FFFFFF",

      muted: "#100D16",
      mutedForeground: "#AAA4B0",

      border: "#29202F",
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
  },


  // Keep your existing omnitrix and dragonball definitions unchanged.
} satisfies Record<string, ThemeDefinition>;
