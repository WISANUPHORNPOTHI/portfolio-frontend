import { useState } from "react";
import NavItem from "./์NavItem"
import MobileMenu from "./MobileMenu";

type MenuItem = {
  label: string;
  href: string;
};

const menus: MenuItem[] = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECT", href: "#project" },
  { label: "SKILL", href: "#skill" },
  { label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 mx-auto mt-5 w-[calc(100%-2rem)] rounded-full bg-primary px-4 py-3 text-white shadow-xl md:fixed md:left-1/2 md:top-5 md:mt-0 md:w-[96%] md:max-w-[1500px] md:-translate-x-1/2 md:px-6 md:py-4">
    <div className="flex items-center justify-between">
      <a
      href="#"
      className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-95"
    >
      W
    </a>

      <ul className="hidden items-center gap-8 text-sm md:flex">
        {menus.map((menu) => (
          <NavItem key={menu.label} href={menu.href} label={menu.label} />
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle menu"
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-95 md:hidden"
      >
        <span
          className={`absolute transition-all duration-300 ease-out ${isOpen
            ? "rotate-90 scale-0 opacity-0"
            : "rotate-0 scale-100 opacity-100"
            }`}
        >
          ☰
        </span>

        <span
          className={`absolute transition-all duration-300 ease-out ${isOpen
            ? "rotate-0 scale-100 opacity-100"
            : "-rotate-90 scale-0 opacity-0"
            }`}
        >
          ×
        </span>
      </button>

      <MobileMenu isOpen={isOpen} menus={menus} />
    </div>
    </nav >
  );
};

export default Navbar;