import { useState } from "react";
import NavItem from "./์NavItem";
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
    <nav className="fixed left-1/2 top-5 z-50 w-[96%] max-w-[1500px] -translate-x-1/2 rounded-full bg-primary px-6 py-4 text-white shadow-xl">
      <div className="relative flex items-center justify-between">
        <h1 className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-all duration-300 hover:scale-125 hover:bg-white hover:text-primary hover:shadow-[0_8px_24px_rgba(221,230,255,0.65)] active:scale-110">
          W
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {menus.map((menu) => (
            <NavItem href={menu?.href} label={menu.label} />
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-all duration-300 hover:scale-110 hover:bg-white hover:text-primary active:scale-95 md:hidden"
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
    </nav>
  );
};

export default Navbar;