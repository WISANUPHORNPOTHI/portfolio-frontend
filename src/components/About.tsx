const About = () => {
  const personalInfo = [
    {
      label: "Name",
      value: "Wisanuphorn Pothito",
    },
    {
      label: "Role",
      value: "Front-End Developer",
    },
    {
      label: "Location",
      value: "Bangkok, Thailand",
    },
    {
      label: "Email",
      value: "wisanuphrom.pothito@gmail.com",
    },
    {
      label: "Phone",
      value: "064-059-4589",
    },
    {
      label: "Education",
      value:
        "King Mongkut's University of Technology North Bangkok",
    },
    {
      label: "Degree",
      value: "Bachelor of Applied Science",
    },
    {
      label: "Field",
      value: "Applied Mathematics in Computer Science",
    },
  ];

  return (
    <section id="about" className="scroll-mt-28 px-6">
      <div className="mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-12 text-white shadow-2xl shadow-primary/20 md:px-12 md:py-16">
          {/* Soft glow */}
          <div className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#DDE6FF]/20 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Image Box */}
            <div className="group relative">
              <div className="absolute inset-0 rounded-[2rem] bg-white/20 blur-2xl transition-all duration-700 group-hover:scale-105 group-hover:bg-[#DDE6FF]/25" />

              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl transition-all duration-700 group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:bg-white/15">
                <div className="flex h-[390px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-white/10">
                  <div className="text-center">
                    <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white text-6xl font-extrabold text-primary shadow-xl transition-all duration-500 group-hover:scale-110">
                      W
                    </div>

                    <p className="mt-6 text-sm font-semibold tracking-[0.3em] text-white/60">
                      PROFILE IMAGE
                    </p>

                    <p className="mt-2 text-white/75">
                      Replace with your photo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.35em] text-[#DDE6FF] backdrop-blur">
                ABOUT ME
              </p>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
                Personal
                <span className="block text-[#DDE6FF]">
                  Information
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Basic personal and educational information.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {personalInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15"
                  >
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/45">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-white md:text-base">
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