const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      label: "01",
      description: "Core technologies for building modern user interfaces.",
      skills: ["React", "TypeScript", "JavaScript ES6+", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "UI Libraries",
      label: "02",
      description: "Component libraries used in enterprise web applications.",
      skills: ["Ant Design", "PrimeReact"],
    },
    {
      title: "Tools & Workflow",
      label: "03",
      description: "Tools for development, deployment, and code quality.",
      skills: ["Git", "Docker", "Jenkins", "Portainer", "SonarQube"],
    },
    {
      title: "Development",
      label: "04",
      description: "Practical skills from real-world business systems.",
      skills: ["REST API", "Form Validation", "RBAC", "PDF Generation", "DBeaver"],
    },
  ];

  return (
    <section id="skill" className="scroll-mt-28 px-4 py-12 md:px-10 md:py-16">
      <div className="mx-auto mb-16 max-w-8xl md:mb-20">
        {/* Header */}
        <div className="relative mb-8 rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur-xl md:mb-10 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          {/* mobile glow */}
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl md:hidden" />

          <div className="relative">
            <p className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.35em] text-primary md:bg-transparent md:px-0 md:py-0 md:text-xs">
              SKILLS
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-text-main md:text-4xl">
              Technical
              <span className="block text-primary md:inline md:text-text-main">
                {" "}Skills
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted md:text-base">
              Technologies and tools I use to build maintainable, scalable, and
              user-friendly frontend applications.
            </p>

            {/* Mobile summary chips */}
            <div className="mt-5 flex flex-wrap gap-2 md:hidden">
              {["React", "TypeScript", "REST API", "Docker"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-white shadow-sm active:scale-95"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl active:scale-[0.99] md:rounded-[2rem] md:p-6"
            >
              {/* soft hover glow */}
              <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold tracking-widest text-primary">
                        {group.label}
                      </span>

                      <h3 className="text-xl font-extrabold text-primary">
                        {group.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-text-muted">
                      {group.description}
                    </p>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white sm:flex">
                    {group.title.charAt(0)}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2.5 md:mt-6 md:gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/10 bg-primary/5 px-3.5 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-md active:scale-95 md:px-4 md:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile bottom note */}
        <div className="mt-6 rounded-[1.5rem] bg-primary px-5 py-4 text-center text-sm font-semibold leading-6 text-white shadow-lg shadow-primary/20 md:hidden">
          Focused on building clean, reusable, and practical frontend solutions.
        </div>
      </div>
    </section>
  );
};

export default Skills;