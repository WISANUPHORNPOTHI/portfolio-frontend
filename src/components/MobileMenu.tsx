type MenuItem = {
  label: string;
  href: string;
};

type MobileMenuProps = {
  isOpen: boolean;
  menus: MenuItem[];
  setIsOpen: (isOpen: boolean) => void;
};

const MobileMenu = ({ isOpen, menus,setIsOpen }: MobileMenuProps) => {
  return (
    <aside
      className={`fixed right-4 top-24 z-50 w-[260px] origin-top-right rounded-3xl border border-white/20 bg-primary/90 p-4 text-white shadow-2xl backdrop-blur-xl transition-all duration-500 ease-out md:hidden ${
        isOpen
          ? "scale-100 opacity-100"
          : "pointer-events-none scale-90 opacity-0"
      }`}
    >
      <ul className="flex flex-col gap-2">
        {menus.map((menu, index) => (
          <li
            key={menu.label}
            className={`transform-gpu transition-all duration-500 ease-out ${
              isOpen
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-4 scale-95 opacity-0"
            }`}
            style={{
              transitionDelay: isOpen ? `${index * 90}ms` : "0ms",
            }}
          >
            <a
              href={menu.href}
              className="block rounded-2xl px-5 py-3 text-center text-sm font-semibold tracking-widest text-white transition-all duration-300 ease-out hover:scale-110 hover:bg-white/15 hover:text-[#DDE6FF] hover:shadow-[0_8px_24px_rgba(221,230,255,0.35)] active:scale-95"
              onClick={setIsOpen ? () => setIsOpen(false) : undefined}
            >
              {menu.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default MobileMenu;