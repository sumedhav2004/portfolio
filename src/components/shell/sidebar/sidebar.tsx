
import { Sparkles } from "lucide-react";

import SidebarNavigation from "./sidebar-navigation";
import ThemeSwitcher from "./theme-switcher";
import Image from "next/image";

export default function Sidebar() {
  return (
    <aside
      className="
        fixed inset-y-0 left-0 z-40
        flex w-64 flex-col
        border-r border-border
        bg-surface text-surface-foreground
        px-3 py-6
      "
    >
      {/* Brand */}
      <div className="mb-10 flex flex-col items-center gap-3 px-1">
        <div className="flex h-42 w-42 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <Image
           
          />
        </div>

        <div className="flex flex-col">
          <span className="font-heading text-lg font-bold">
            Sumedhav Krishna
          </span>

          <span className="text-xs text-muted-foreground">
            Software Engineer
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex flex-1 flex-col gap-3">
        <p className="px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Navigation
        </p>

        {/* <SidebarNavigation /> */}
      </div>

      {/* Theme Switcher */}
      <div className="mt-6 border-t border-border pt-6">
        <ThemeSwitcher />
      </div>
    </aside>
  );
}
