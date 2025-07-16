import HeroSection from "@/components/HeroSection";

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
  "Motion.Dev",
];

export default function App() {
  return (
    <section className="mt-[120px] pb-[30px]">
      <HeroSection />
      <div className="app-container mt-[40px]">
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
      <div className="app-container mt-[50px]">
        <h3 className="font-playfair text-secondary text-base font-bold uppercase">
          Intrest:
        </h3>
        <p className="text-secondary text-base uppercase">
          When I&apos;m not writing codes to do great things, you can find me
          reading articles on tech, finance, banking or learnig new
          technologies. Sometimes tapping video games Like PES and also listen
          to music as it helps fuel my creativity most times.
        </p>
      </div>
    </section>
  );
}
