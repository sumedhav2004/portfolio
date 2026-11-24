
"use client";

import {
  House,
  BriefcaseBusiness,
  FolderKanban,
  Wrench,
  MessageSquareQuote,
  Mail,
} from "lucide-react";

const navigationItems = [
  { label: "Home", href: "#home", icon: House },
  { label: "Experience", href: "#experience", icon: BriefcaseBusiness },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Testimonials", href: "#testimonials", icon: MessageSquareQuote },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function SidebarNavigation() {
  return (
    <nav aria-label="Main navigation" className="flex flex-col gap-2">
      {navigationItems.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.href}
            href={item.href}
            className="
              group flex items-center gap-3
              rounded-lg px-4 py-3
              text-sm text-muted-foreground
              transition-all duration-200
              hover:bg-primary/10
              hover:text-primary
            "
          >
            <Icon size={19} strokeWidth={1.8} />

            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
