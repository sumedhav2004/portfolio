
"use client";

import "./styles/magic-scene.css";

const scenes = [
  {
    id: "arrival",
    name: "The Arrival",
    section: "Home",
  },
  {
    id: "great-hall",
    name: "The Great Hall",
    section: "About",
  },
  {
    id: "library",
    name: "The Library",
    section: "Skills",
  },
  {
    id: "workshop",
    name: "The Enchanted Workshop",
    section: "Projects",
  },
  {
    id: "hall-of-records",
    name: "The Hall of Records",
    section: "Experience",
  },
  {
    id: "common-room",
    name: "The Common Room",
    section: "Testimonials",
  },
  {
    id: "astronomy-tower",
    name: "The Astronomy Tower",
    section: "Contact",
  },
];

export default function MagicPortfolio() {
  return (
    <main
      data-theme-experience="magic"
      className="relative w-full overflow-hidden bg-[#080914] text-[#F5F0E8]"
    >
      {scenes.map((scene, index) => (
        <section
          key={scene.id}
          id={scene.id}
          data-scene={scene.id}
          data-scene-index={index}
          className="relative isolate min-h-[100svh] w-full overflow-hidden"
        >
          {/* Scene atmosphere */}
          <div
            data-scene-layer="atmosphere"
            className="absolute inset-0 -z-10 pointer-events-none"
          />

          {/* Distant environment */}
          <div
            data-scene-layer="distant"
            className="absolute inset-0 pointer-events-none"
          />

          {/* Main environment */}
          <div
            data-scene-layer="environment"
            className="absolute inset-0 pointer-events-none"
          />

          {/* Foreground elements */}
          <div
            data-scene-layer="foreground"
            className="absolute inset-0 pointer-events-none"
          />

          {/* Magical effects */}
          <div
            data-scene-layer="effects"
            className="absolute inset-0 pointer-events-none"
          />

          {/* Scene content */}
          <div
            data-scene-layer="content"
            className="relative z-10 min-h-[100svh]"
          >
            {/* Scene-specific content will go here */}
          </div>
        </section>
      ))}
    </main>
  );
}
