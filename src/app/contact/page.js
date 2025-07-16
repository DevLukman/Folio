import { GoDotFill } from "react-icons/go";
const socialLinks = [
  { id: 1, name: "Linkedin", icon: <GoDotFill />, link: "" },
  { id: 2, name: "Instagram", icon: <GoDotFill />, link: "" },
  { id: 3, name: "X(twitter)", icon: <GoDotFill />, link: "" },
];
export default function Contact() {
  return (
    <section className="app-container mt-[100px]">
      <h1 className="font-merri text-xl uppercase">Get in touch:</h1>
      <div className="mt-[50px]">
        <div className="flex w-full flex-col gap-6">
          <a
            href="mailto:muhammedLuqman003@gmail.com"
            className="text-secondary flex w-fit items-center gap-1 text-base md:text-2xl"
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
              className="text-secondary flex w-fit items-center gap-0.5 text-xl md:text-2xl"
            >
              <span>{link.name}</span>
              <span>{link.icon}</span>
            </a>
          ))}
          <p className="text-secondary w-fit text-xl md:text-2xl">Resume</p>
        </div>
      </div>
    </section>
  );
}
