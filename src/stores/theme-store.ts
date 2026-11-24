
import { create } from "zustand";
import { ThemeId } from "../lib/themes";


type TransitionPhase = "idle" | "exiting" | "entering";

interface ThemeStore {
  activeTheme: ThemeId;
  pendingTheme: ThemeId | null;
  transitionPhase: TransitionPhase;

  setTheme: (theme: ThemeId) => void;
  activatePendingTheme: () => void;
  finishThemeTransition: () => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  activeTheme: "magic",
  pendingTheme: null,
  transitionPhase: "idle",

  setTheme: (theme) =>
    set((state) => {
      if (
        state.activeTheme === theme ||
        state.transitionPhase !== "idle"
      ) {
        return state;
      }

      return {
        pendingTheme: theme,
        transitionPhase: "exiting",
      };
    }),

  activatePendingTheme: () =>
    set((state) => {
      if (!state.pendingTheme) return state;

      return {
        activeTheme: state.pendingTheme,
        pendingTheme: null,
        transitionPhase: "entering",
      };
    }),

  finishThemeTransition: () =>
    set({
      transitionPhase: "idle",
    }),
}));
