"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Intro() {
  useGSAP(function () {
    gsap.to(".intro", {
      yPercent: -100,
      duration: 1.2,
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div className="intro h-dvh w-full bg-secondary z-50 overflow-hidden absolute left-0 top-0"></div>
  );
}
