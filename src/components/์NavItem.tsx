type NavItemProps = {
  label: string;
  href?: string;
};

const NavItem = ({ label, href = "#" }: NavItemProps) => {
  return (
    <li>
      <a
        href={href}
        className="group relative block cursor-pointer px-2 py-2 font-semibold tracking-wide text-white transition duration-300 hover:scale-110 hover:text-[#DDE6FF] active:scale-125"
      >
        {label}

        <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-[#DDE6FF] shadow-[0_0_8px_#DDE6FF] transition-all duration-300 group-hover:w-full" />
      </a>
    </li>
  );
};

export default NavItem;