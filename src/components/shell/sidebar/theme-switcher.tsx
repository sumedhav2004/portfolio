
"use client";

import { getAllThemes } from "@/src/lib/themes";
import { useThemeStore } from "@/src/stores/theme-store";



export default function ThemeSwitcher() {
  const activeTheme = useThemeStore((state) => state.activeTheme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const themes = getAllThemes();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        Choose your universe
      </p>

      <div className="flex flex-col gap-2">
        {themes.map((theme) => {
          const isActive = activeTheme === theme.id;

          return (
            <button
              key={theme.id}
              type="button"
              onClick={() => setTheme(theme.id)}
              aria-pressed={isActive}
              className={`
                flex items-center justify-between
                rounded-lg border px-3 py-3
                text-left transition-colors duration-200
                ${
                  isActive
                    ? "border-primary bg-primary/10 text-foreground"
                    : "border-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }
              `}
            >
              <span className="flex flex-col gap-1">
                <span className="text-sm font-semibold">
                  {theme.name}
                </span>

                <span className="text-xs text-muted-foreground">
                  {theme.description}
                </span>
              </span>

              <span
                className={`
                  h-3 w-3 shrink-0 rounded-full
                  ${isActive ? "bg-primary" : "bg-muted"}
                `}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
