const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pt-32 md:px-6 md:pt-50">
      {/* Soft Background Glow */}
      <div className="absolute left-[-120px] top-28 h-60 w-60 rounded-full bg-primary/10 blur-3xl md:h-72 md:w-72" />
      <div className="absolute bottom-10 right-[-120px] h-64 w-64 rounded-full bg-primary/15 blur-3xl md:h-80 md:w-80" />

      <div className="relative mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-2 md:grid-cols-2 md:gap-14 md:px-8">
        {/* Left Content */}
        <div className="animate-[fadeUp_0.8s_ease-out] text-center md:text-left">
          {/* Mobile text card / Desktop normal */}
          <div className="rounded-[2rem] border border-white/60 bg-white/45 px-5 py-6 shadow-sm backdrop-blur-xl md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
            <p className="inline-flex rounded-full border border-primary/15 bg-white/60 px-3 py-2 text-[10px] font-bold tracking-[0.25em] text-primary shadow-sm backdrop-blur md:px-4 md:text-xs md:tracking-[0.35em]">
              FRONTEND DEVELOPER
            </p>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-text-main sm:text-5xl md:mt-6 md:text-7xl">
              Wisanuphorn
              <span className="block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Pothito
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-text-muted sm:text-base md:mx-0 md:mt-6 md:max-w-xl md:text-lg md:leading-8">
              I build clean, maintainable, and user-friendly enterprise web
              applications using React, TypeScript, and modern frontend tools.
            </p>

            {/* Mobile only highlight chips */}
            <div className="mt-5 flex flex-wrap justify-center gap-2 md:hidden">
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                React
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                TypeScript
              </span>
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                Enterprise UI
              </span>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-9 md:flex md:flex-wrap md:justify-start md:gap-4">
              <a
                href="#project"
                className="group relative overflow-hidden rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/30 active:scale-95 md:px-8 md:text-sm"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-20deg] bg-white/25 transition-all duration-700 group-hover:left-[130%]" />
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-primary/20 bg-white/70 px-6 py-3 text-xs font-semibold tracking-wide text-primary shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-primary/40 hover:bg-white hover:shadow-xl active:scale-95 md:px-8 md:text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="group relative animate-[floatIn_1s_ease-out] mb-10">
          {/* Glow behind card */}
          <div className="absolute inset-0 rounded-[2rem] bg-primary/20 blur-2xl transition-all duration-700 group-hover:scale-105 group-hover:bg-primary/30" />

          <div className="relative rounded-[2rem] border border-white/70 bg-white/55 p-3 shadow-xl shadow-primary/10 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.025] hover:shadow-2xl hover:shadow-primary/20 md:p-5">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary via-[#2436a4] to-primary-dark p-6 text-white md:p-8">
              <div className="flex h-[260px] flex-col justify-between sm:h-[300px] md:h-[350px]">
                <div>
                  <p className="text-xs tracking-[0.28em] text-white/65 md:text-sm md:tracking-[0.35em]">
                    PORTFOLIO
                  </p>

                  <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:mt-5 md:text-5xl">
                    Front End
                    <span className="block text-hover-light">
                      Developer
                    </span>
                  </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/15">
                    <p className="text-xs text-white/60">Focus</p>
                    <p className="mt-1 font-semibold">Enterprise UI</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/15">
                    <p className="text-xs text-white/60">Stack</p>
                    <p className="mt-1 font-semibold">React / TS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile only small floating label */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;