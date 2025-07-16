"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  { id: 1, name: "Index", href: "/" },
  { id: 2, name: "Chronicle", href: "/about" },
  { id: 3, name: "Folio'", href: "/folio" },
  { id: 4, name: "Let's talk", href: "/contact" },
];
export default function Naviagation() {
  const pathName = usePathname();
  return (
    <header className="bg-primary border-secondary fixed top-0 left-0 z-40 w-full border-b-2 py-4">
      <nav className="relative mx-auto w-full max-w-[96%] px-[0.8rem]">
        <ul className="flex items-center justify-center gap-8 md:justify-start">
          {links.map((link) => (
            <li key={link.id} className="">
              <Link
                href={link.href}
                className={`links font-merri text-secondary relative text-base font-bold md:text-xl ${pathName === link.href ? "active-links" : ""} `}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
