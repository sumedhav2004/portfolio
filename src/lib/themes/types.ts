
export const THEME_IDS = [
  "magic",
  "omnitrix",
  "dragonball",
] as const;

export type ThemeId = (typeof THEME_IDS)[number];

export interface ThemeFonts {
  heading: string;
  body: string;
}

export interface ThemeColors {
  background: string;
  foreground: string;
  surface: string;
  surfaceForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
}

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  description: string;

  fonts: ThemeFonts;
  colors: ThemeColors;
}
