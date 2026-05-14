const Navbar = () => {
  const menuClass =
    "group relative cursor-pointer px-2 py-2 font-semibold tracking-wide text-white transition duration-300 hover:scale-110 hover:text-[#DDE6FF] active:scale-125";

  return (
    <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] -translate-x-1/2 rounded-full bg-primary px-4 py-3 text-white shadow-lg sm:px-5 md:px-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/10 text-2xl font-bold text-white transition-all duration-300 hover:scale-125 hover:bg-white hover:text-primary hover:shadow-[0_8px_24px_rgba(221,230,255,0.65)] active:scale-110">
          W
        </h1>

        {/* Desktop / Tablet Menu */}
        <ul className="hidden items-center gap-3 text-xs md:flex lg:gap-6 lg:text-sm xl:gap-8">
          <li className={menuClass}>
            ABOUT
            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#DDE6FF] shadow-[0_0_8px_#DDE6FF] transition-all duration-300 group-hover:w-full" />
          </li>

          <li className={menuClass}>
            SKILL
            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#DDE6FF] shadow-[0_0_8px_#DDE6FF] transition-all duration-300 group-hover:w-full" />
          </li>

          <li className={menuClass}>
            PROJECT
            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#DDE6FF] shadow-[0_0_8px_#DDE6FF] transition-all duration-300 group-hover:w-full" />
          </li>

          <li className={menuClass}>
            CONTACT
            <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#DDE6FF] shadow-[0_0_8px_#DDE6FF] transition-all duration-300 group-hover:w-full" />
          </li>
        </ul>

        {/* Mobile Icon */}
        <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-2xl transition duration-300 hover:scale-110 hover:bg-white hover:text-primary md:hidden">
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;