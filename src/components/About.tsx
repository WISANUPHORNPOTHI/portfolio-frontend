const About = () => {
  const personalInfo = [
    { label: "Name", value: "Wisanuphorn Pothito" },
    { label: "Role", value: "Front-End Developer" },
    { label: "Location", value: "Bangkok, Thailand" },
    { label: "Email", value: "wisanuphrom.pothito@gmail.com" },
    { label: "Phone", value: "064-059-4589" },
    {
      label: "Education",
      value: "King Mongkut's University of Technology North Bangkok",
    },
    { label: "Degree", value: "Bachelor of Applied Science" },
    { label: "Field", value: "Applied Mathematics in Computer Science" },
  ];

  return (
    <section id="about" className="scroll-mt-28 px-6 ">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-8 text-white shadow-xl shadow-primary/20 md:px-8 md:py-10">
          {/* Soft glow */}
          <div className="absolute -left-24 top-6 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-[#DDE6FF]/20 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            {/* Image Box */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white/15">
                <div className="flex h-[260px] items-center justify-center rounded-[1.25rem] border border-white/10 bg-white/10">
                  <div className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl font-extrabold text-primary shadow-xl transition-all duration-500 group-hover:scale-110">
                      W
                    </div>

                    <p className="mt-5 text-xs font-semibold tracking-[0.25em] text-white/60">
                      PROFILE IMAGE
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#DDE6FF] backdrop-blur">
                ABOUT ME
              </p>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl">
                Personal
                <span className="block text-[#DDE6FF]">
                  Information
                </span>
              </h2>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {personalInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-white/45">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-6 text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;