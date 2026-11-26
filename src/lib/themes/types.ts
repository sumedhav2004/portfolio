
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

export interface ThemeTypography {
  display: string;
  h1: string;
  h2: string;
  h3: string;
  subtitle: string;
  body: string;
  small: string;
  caption: string;
}

export interface ThemeLayout {
  contentMaxWidth: string;
  sectionPaddingX: string;
  sectionPaddingY: string;
  contentGap: string;
}

export interface ThemeMotion {
  fast: number;
  normal: number;
  slow: number;
  stagger: number;
  parallaxIntensity: number;
}

export interface ThemeDefinition {
  id: ThemeId;
  name: string;
  description: string;

  fonts: ThemeFonts;
  colors: ThemeColors;
  typography: ThemeTypography;
  layout: ThemeLayout;
  motion: ThemeMotion;
}
