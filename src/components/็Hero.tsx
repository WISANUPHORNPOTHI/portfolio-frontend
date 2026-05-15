const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-40">
      {/* Soft Background Glow */}
      <div className="absolute left-[-120px] top-28 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 right-[-120px] h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-8xl px-8 grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* Left Content */}
        <div className="animate-[fadeUp_0.8s_ease-out]">
          <p className="inline-flex rounded-full border border-primary/15 bg-white/50 px-4 py-2 text-xs font-bold tracking-[0.35em] text-primary shadow-sm backdrop-blur">
            FRONTEND DEVELOPER
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-text-main md:text-7xl">
            Wisanuphorn
            <span className="block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Pothito
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
            I build clean, maintainable, and user-friendly enterprise web
            applications using React, TypeScript, and modern frontend tools.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#project"
              className="group relative overflow-hidden rounded-full bg-primary px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-lg shadow-primary/20 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/30 active:scale-95"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-y-0 left-[-80%] w-1/2 skew-x-[-20deg] bg-white/25 transition-all duration-700 group-hover:left-[130%]" />
            </a>

            <a
              href="/resume.pdf"
              className="rounded-full border border-primary/20 bg-white/60 px-8 py-3 text-sm font-semibold tracking-wide text-primary shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.03] hover:border-primary/40 hover:bg-white hover:shadow-xl active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="group relative animate-[floatIn_1s_ease-out]">
          {/* Glow behind card */}
          <div className="absolute inset-0 rounded-[2rem] bg-primary/20 blur-2xl transition-all duration-700 group-hover:scale-105 group-hover:bg-primary/30" />

          <div className="relative rounded-[2rem] border border-white/70 bg-white/55 p-5 shadow-xl shadow-primary/10 backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:scale-[1.025] hover:shadow-2xl hover:shadow-primary/20">
            <div className="overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-primary via-[#2436a4] to-primary-dark p-8 text-white">
              <div className="flex h-[350px] flex-col justify-between">
                <div>
                  <p className="text-sm tracking-[0.35em] text-white/65">
                    PORTFOLIO
                  </p>

                  <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
                    Front End
                    <span className="block text-hover-light">
                      Developer
                    </span>
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
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
        </div>

      </div>
    </section>
  );
};

export default Hero;