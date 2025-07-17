"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);
function Intrest() {
  const intrestRef = useRef(null);
  useGSAP(function () {
    SplitText.create(intrestRef.current, {
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
          scrollTrigger: {
            trigger: "p",
            start: "+=350",
          },
        });
      },
    });
  }, {});
  return (
    <div className="app-container mt-[50px]">
      <h3 className="font-playfair text-secondary text-base font-bold uppercase">
        Intrest:
      </h3>
      <p className="text-secondary p-main w-full text-base" ref={intrestRef}>
        When I&apos;m writing code or solving frontend challenges, you&apos;ll
        likely find me exploring articles and deep dives in the world of tech,
        finance, or banking. I enjoy understanding how technology shapes our
        world.Outside of tech, I unwind by playing video games (mostly PES),
        which I find both fun and mentally refreshing. Music also plays a big
        role in my creative process, it&apos;s often the spark I need to stay
        focused and inspired while building something new.
      </p>
    </div>
  );
}

export default Intrest;
