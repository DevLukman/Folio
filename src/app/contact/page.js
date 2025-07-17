"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { GoArrowRight, GoDotFill } from "react-icons/go";
const socialLinks = [
  {
    id: 1,
    name: "Linkedin",
    icon: <GoDotFill />,
    link: "https://x.com/The_Lukas_",
  },
  {
    id: 2,
    name: "Instagram",
    icon: <GoDotFill />,
    link: "https://x.com/The_Lukas_",
  },
  {
    id: 3,
    name: "X(twitter)",
    icon: <GoDotFill />,
    link: "https://x.com/The_Lukas_",
  },
];
export default function Contact() {
  const linkContainer = useRef(null);
  useGSAP(
    function () {
      gsap.from(".social-links", {
        filter: "blur(8px)",
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.01,
      });
    },
    { scope: linkContainer },
  );
  return (
    <section ref={linkContainer} className="app-container mt-[100px]">
      <h1 className="font-merri text-xl uppercase">Get in touch:</h1>
      <div className="mt-[50px]">
        <div className="flex w-full flex-col gap-6">
          <a
            href="mailto:muhammedLuqman003@gmail.com"
            className="text-secondary social-links flex w-fit items-center gap-1 text-base md:text-3xl"
          >
            <span> MuhammedLuqman003@gmail.com</span>
            <span>
              <GoDotFill />
            </span>
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="text-secondary social-links flex w-fit items-center gap-0.5 text-xl md:text-3xl"
            >
              <span>{link.name}</span>
              <span>{link.icon}</span>
            </a>
          ))}
          <a
            href="#"
            className="text-secondary social-links flex w-fit items-center gap-2 text-xl md:text-3xl"
          >
            <span>Resume</span>
            <span>
              <GoArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
