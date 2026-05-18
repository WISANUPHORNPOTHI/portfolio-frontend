import profileImage from "../assets/profile.jpg";

const About = () => {
  const aboutParagraphs = [
    "I am a Front-End Developer based in Bangkok, Thailand, with experience building enterprise web applications using React and TypeScript.",
    "I enjoy turning complex business requirements into clean, maintainable, and user-friendly interfaces for real-world business systems.",
    "I enjoy learning, improving myself, and exploring new technologies. New challenges always give me opportunities to grow as a developer.",
  ];

  const aboutInfo = [
    { label: "Name", value: "Wisanuphorn Pothito" },
    { label: "Role", value: "Front-End Developer" },
    { label: "Based In", value: "Bangkok, Thailand" },
    { label: "Education", value: "KMUTNB" },
    { label: "Degree", value: "Bachelor of Applied Science" },
    { label: "Field", value: "Applied Mathematics in Computer Science" },
  ];

  return (
    <section id="about" className="scroll-mt-28 px-4 py-10 md:px-6 md:py-12">
      <div className="mx-auto mb-16 max-w-8xl md:mb-20">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-primary px-4 py-6 text-white shadow-xl shadow-primary/20 md:rounded-[2rem] md:px-8 md:py-8">
          {/* Soft glow */}
          <div className="absolute -left-24 top-6 h-44 w-44 rounded-full bg-white/10 blur-3xl md:h-48 md:w-48" />
          <div className="absolute -right-24 bottom-0 h-44 w-44 rounded-full bg-[#DDE6FF]/20 blur-3xl md:h-48 md:w-48" />

          {/* Mobile decorative line */}
          <div className="absolute left-1/2 top-4 h-1 w-16 -translate-x-1/2 rounded-full bg-white/20 md:hidden" />

          <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-[0.65fr_1.35fr]">
            {/* Image Box */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-[1.35rem] border border-white/20 bg-white/10 p-2 shadow-lg backdrop-blur-xl transition-all duration-500 active:scale-[0.98] group-hover:-translate-y-1 group-hover:bg-white/15 md:rounded-[1.5rem]">
                <div className="h-[260px] overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/10 sm:h-[320px] md:h-[420px] lg:h-[500px]">
                  <img
                    src={profileImage}
                    alt="Wisanuphorn Pothito"
                    className="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Mobile floating badge */}
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-bold text-primary shadow-lg backdrop-blur md:hidden">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Front-End Developer
              </div>
            </div>

            {/* About Content */}
            <div className="text-center lg:text-left">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-bold tracking-[0.3em] text-[#DDE6FF] backdrop-blur">
                ABOUT ME
              </p>

              <h2 className="mt-4 text-2xl font-extrabold leading-tight md:text-3xl">
                A developer who enjoys
                <span className="block text-[#DDE6FF]">
                  learning and growing.
                </span>
              </h2>

              <div className="mx-auto mt-4 max-w-3xl space-y-3 lg:mx-0">
                {aboutParagraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-6 text-white/75"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Mobile only chips */}
              <div className="mt-5 flex flex-wrap justify-center gap-2 lg:hidden">
                {["React", "TypeScript", "Clean UI", "Learning Mindset"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-[#DDE6FF] backdrop-blur transition duration-300 active:scale-95"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-2 min-[430px]:grid-cols-2">
                {aboutInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/10 px-4 py-2.5 text-left backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 active:scale-[0.98]"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-widest text-white/45">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold leading-5 text-white">
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