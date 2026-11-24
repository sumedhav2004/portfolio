
import { themes } from "./themes";
import type { ThemeId } from "./types";

export function getTheme(themeId: ThemeId) {
  return themes[themeId];
}

export function getAllThemes() {
  return Object.values(themes);
}
