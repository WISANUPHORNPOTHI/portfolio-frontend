const Footer = () => {
  return (
    <footer className="fixed bottom-5 left-1/2 z-50 w-[96%] max-w-[1500px] -translate-x-1/2 rounded-full bg-primary px-6 py-4 text-white shadow-xl">
      <div className="flex flex-col items-center justify-between gap-3 text-xs sm:flex-row">
        <p className="font-medium tracking-wide">
          © {new Date().getFullYear()} Wisanuphorn Pothito
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 font-semibold tracking-wide">
          <a
            href="mailto:wisanuphrom.pothito@gmail.com"
            className="transition duration-300 hover:scale-105 hover:text-[#DDE6FF]"
          >
            wisanuphrom.pothito@gmail.com
          </a>

          <span className="hidden opacity-40 sm:inline">|</span>

          <a
            href="tel:0640594589"
            className="transition duration-300 hover:scale-105 hover:text-[#DDE6FF]"
          >
            064-059-4589
          </a>

          <span className="hidden opacity-40 sm:inline">|</span>

          <a
            href="https://github.com/WISANUPHORNPOTHI"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:scale-105 hover:text-[#DDE6FF]"
          >
            GitHub
          </a>

          <span className="hidden opacity-40 sm:inline">|</span>

          <a
            href="https://www.linkedin.com/in/วิษณุพร-โพธิโต-439a84350"
            target="_blank"
            rel="noreferrer"
            className="transition duration-300 hover:scale-105 hover:text-[#DDE6FF]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;