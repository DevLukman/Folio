import Link from "next/link";
const links = [
  { id: 1, name: "Index", href: "/" },
  { id: 2, name: "Chronicle", href: "/about" },
  { id: 3, name: "Folio'", href: "/folio" },
  { id: 4, name: "Let's talk", href: "/contact" },
];
function Footer() {
  return (
    <footer className="app-container mt-[20px] flex flex-col justify-end pb-4">
      <h1 className="text-secondary text-[12vw] uppercase md:text-[9vw]">
        Lukas Flick
      </h1>
      <p className="text-secondary">&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
