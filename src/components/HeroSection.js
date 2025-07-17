"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { GoArrowRight } from "react-icons/go";
gsap.registerPlugin(useGSAP, SplitText);

export default function HeroSection() {
  const heroContainer = useRef(null);
  const splitHero = useRef(null);
  useGSAP(
    function () {
      gsap.from(".intro-text", {
        filter: "blur(5px)",
        duration: 1,
        delay: 0.05,
        ease: "power1.out",
      });
      SplitText.create(splitHero.current, {
        type: "lines",
        autoSplit: "true",
        mask: "lines",
        onSplit: (self) => {
          return gsap.from(self.lines, {
            yPercent: 100,
            ease: "power4.inOut",
            stagger: 0.05,
            duration: 1,
            delay: 0.05,
            onComplete: () => self.revert(),
          });
        },
      });
    },
    { scope: heroContainer },
  );
  return (
    <section ref={heroContainer} className="app-container mt-[100px]">
      <div>
        <h1 className="font-playfair intro-text text-secondary text-3xl">
          Luqman Muhammed
        </h1>
        <p className="text-secondary intro-text mt-1 italic">
          Frontend Engineer
        </p>
      </div>
      <div className="mt-[35px] w-full">
        <p
          ref={splitHero}
          className="text-secondary w-full text-base md:max-w-[700px]"
        >
          A frontend web developer with a passion for crafting engaging,
          user-focused web experiences. I love turning ideas into interactive,
          responsive interfaces and constantly explore new tools and
          technologies that enhance the development process and elevate the user
          journey. I&apos;m looking for a collaborative team where I can
          contribute my creativity, grow my skills, and help build meaningful
          digital products that make a real impact.
        </p>
      </div>
      <div className="mt-5">
        <a
          href="#"
          className="text-secondary social-links flex w-fit items-center gap-2 text-base"
        >
          <span> Resume</span>
          <span>
            <GoArrowRight />
          </span>
        </a>
      </div>
    </section>
  );
}
