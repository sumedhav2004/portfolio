
"use client";

import ArrivalScene from "./animations/scenes/arrival/arrival-scene";
import GreatHallScene from "./animations/scenes/great-hall/great-hall-scene";
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
    section: "Experience",
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
      className="relative w-full overflow-x-clip"
    >
      {scenes.map((scene, index) => {
        if (scene.id === "arrival") {
          return <ArrivalScene key={scene.id} />;
        }

        if(scene.id === "great-hall"){
          return <GreatHallScene key={scene.id} />
        }

        return (
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
            />
          </section>
        );
      })}
    </main>
  );
}
