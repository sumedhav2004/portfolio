
"use client";

import type { CSSProperties, ReactNode } from "react";

import Sidebar from "./sidebar/sidebar";
import ThemeTransitionManager from "./transitions/theme-transition-manager";
import { useThemeStore } from "@/src/stores/theme-store";
import { getTheme } from "@/src/lib/themes";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const activeTheme = useThemeStore((state) => state.activeTheme);

  const theme = getTheme(activeTheme);

  const themeStyles = {
    "--theme-background": theme.colors.background,
    "--theme-foreground": theme.colors.foreground,

    "--theme-surface": theme.colors.surface,
    "--theme-surface-foreground": theme.colors.surfaceForeground,

    "--theme-primary": theme.colors.primary,
    "--theme-primary-foreground": theme.colors.primaryForeground,

    "--theme-secondary": theme.colors.secondary,
    "--theme-secondary-foreground": theme.colors.secondaryForeground,

    "--theme-accent": theme.colors.accent,
    "--theme-accent-foreground": theme.colors.accentForeground,

    "--theme-muted": theme.colors.muted,
    "--theme-muted-foreground": theme.colors.mutedForeground,

    "--theme-border": theme.colors.border,

    "--theme-font-heading": theme.fonts.heading,
    "--theme-font-body": theme.fonts.body,

    // Centralized typography
    "--type-display": theme.typography.display,
    "--type-h1": theme.typography.h1,
    "--type-h2": theme.typography.h2,
    "--type-h3": theme.typography.h3,
    "--type-subtitle": theme.typography.subtitle,
    "--type-body": theme.typography.body,
    "--type-small": theme.typography.small,
    "--type-caption": theme.typography.caption,

    // Centralized layout
    "--layout-content-width": theme.layout.contentMaxWidth,
    "--layout-section-padding-x": theme.layout.sectionPaddingX,
    "--layout-section-padding-y": theme.layout.sectionPaddingY,
    "--layout-content-gap": theme.layout.contentGap,

    // Centralized motion
    "--motion-fast": theme.motion.fast,
    "--motion-normal": theme.motion.normal,
    "--motion-slow": theme.motion.slow,
    "--motion-stagger": theme.motion.stagger,
    "--motion-parallax": theme.motion.parallaxIntensity,
  } as CSSProperties;

  return (
    <div
      data-theme={activeTheme}
      style={{
        ...themeStyles,
        fontFamily: "var(--theme-font-body)",
      }}
      className="min-h-screen w-full"
    >
      <Sidebar />

      <ThemeTransitionManager />

      <main className="ml-64 min-h-screen bg-background text-foreground">
        {children}
      </main>
    </div>
  );
}
