
import type { Metadata } from "next";

import "./globals.css";
import { dragonballFonts, magicFonts, omnitrixFonts } from "@/src/lib/fonts";
import AppShell from "@/src/components/shell/app-shell";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "A portfolio across three unique universes.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`
        ${magicFonts.heading.variable}
        ${magicFonts.body.variable}
        ${omnitrixFonts.heading.variable}
        ${omnitrixFonts.body.variable}
        ${dragonballFonts.heading.variable}
        ${dragonballFonts.body.variable}
        h-full antialiased
      `}
    >
      <body className="min-h-full flex flex-col">
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
