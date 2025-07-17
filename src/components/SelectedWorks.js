"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
const projects = [
  {
    id: 1,
    name: "ArtGrid",
    link: "https://art-grid.vercel.app/",
    description: "E-commerce exploration",
    stack: ["React", "Tailwind CSS", "Supabase", "framer-motion"],
  },
  {
    id: 2,
    name: "Samuel Olawaseun",
    link: "https://samuelolawaseun.vercel.app/",
    github: "",
    description: "creative development / portfolio exploration",
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "lenis"],
  },
  {
    id: 3,
    name: "CinePluse",
    link: "https://cinepluse.vercel.app/",
    github: "",
    description: "exploration",
    stack: ["Next Js", "Tailwind CSS", "TMDB & IMDB API"],
  },
];

export default function SelectedWork() {
  const selectedRef = useRef(null);
  useGSAP(
    function () {
      gsap.from(selectedRef.current, {
        filter: "blur(5px)",
        duration: 1,
        delay: 0.05,
        ease: "power1.out",
      });
    },
    { scope: selectedRef },
  );
  return (
    <div ref={selectedRef}>
      <h1 className="text-2xl font-bold uppercase">Selected works</h1>
      <div className="">
        {projects.map((project) => (
          <div key={project.id} className="w-full lg:flex lg:justify-between">
            <div className="border-secondary w-full border-b-1 lg:max-w-[45%]">
              <a href={project.link} className="inline-block py-4">
                <h2 className="text-secondary text-xl uppercase md:text-3xl">
                  {project.name}
                </h2>
                <p className="text-secondary py-0.5 text-sm uppercase">
                  {project.description}
                </p>

                <span className="text-secondary py-0.5 text-sm uppercase">
                  {project.stack.map((stack) => stack).join(",  ")}
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
