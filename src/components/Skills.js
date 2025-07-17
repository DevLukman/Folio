"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typscript",
  "React",
  "Next Js",
  "Tailwind CSS",
  "Styled Compents",
  "GSAP",
  "Framer motion",
];

function Skills() {
  const textRef = useRef(null);
  useGSAP(
    function () {
      gsap.from(textRef.current, {
        filter: "blur(5px)",
        duration: 1,
        delay: 0.05,
        ease: "power1.out",
      });
    },
    { scope: textRef },
  );
  return (
    <div className="app-container mt-[40px]" ref={textRef}>
      <div>
        <h3 className="font-playfair text-secondary text-base font-bold uppercase">
          Expertise / Skills:
        </h3>
        <div className="flex flex-col gap-1">
          {skills.map((skill, index) => (
            <p
              key={index}
              className="font-playfair text-secondary text-xl uppercase"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
