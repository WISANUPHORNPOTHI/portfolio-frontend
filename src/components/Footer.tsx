const Footer = () => {
  return (
    <>
      {/* Mobile Footer */}
      <footer className="px-4 pb-6 pt-6 md:hidden">
        <div className="mx-auto w-full max-w-[390px] rounded-[1.5rem] bg-primary px-4 py-5 text-center text-white shadow-xl">
          <p className="text-xs font-semibold tracking-wide">
            © {new Date().getFullYear()} Wisanuphorn Pothito
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold">
            <a
              href="mailto:wisanuphrom.pothito@gmail.com"
              className="rounded-full bg-white/10 px-3 py-2 transition active:scale-95"
            >
              Email
            </a>

            <a
              href="tel:0640594589"
              className="rounded-full bg-white/10 px-3 py-2 transition active:scale-95"
            >
              Phone
            </a>

            <a
              href="https://github.com/WISANUPHORNPOTHI"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 px-3 py-2 transition active:scale-95"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/วิษณุพร-โพธิโต-439a84350"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/10 px-3 py-2 transition active:scale-95"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Desktop Footer */}
      <footer className="fixed bottom-5 left-1/2 z-50 hidden w-[96%] max-w-[1500px] -translate-x-1/2 rounded-full bg-primary px-6 py-4 text-white shadow-xl md:block">
        <div className="flex items-center justify-between gap-3 text-xs">
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

            <span className="opacity-40">|</span>

            <a
              href="tel:0640594589"
              className="transition duration-300 hover:scale-105 hover:text-[#DDE6FF]"
            >
              064-059-4589
            </a>

            <span className="opacity-40">|</span>

            <a
              href="https://github.com/WISANUPHORNPOTHI"
              target="_blank"
              rel="noreferrer"
              className="transition duration-300 hover:scale-105 hover:text-[#DDE6FF]"
            >
              GitHub
            </a>

            <span className="opacity-40">|</span>

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
    </>
  );
};

export default Footer;