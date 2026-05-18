const Contact = () => {
  const contacts = [
    {
      label: "Email",
      value: "wisanuphrom.pothito@gmail.com",
      href: "mailto:wisanuphrom.pothito@gmail.com",
    },
    {
      label: "Phone",
      value: "064-059-4589",
      href: "tel:0640594589",
    },
    {
      label: "GitHub",
      value: "github.com/WISANUPHORNPOTHI",
      href: "https://github.com/WISANUPHORNPOTHI",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/วิษณุพร-โพธิโต",
      href: "https://www.linkedin.com/in/วิษณุพร-โพธิโต-439a84350",
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-4 py-12 md:px-10 md:py-16"
    >
      <div className="mx-auto mb-24 max-w-8xl md:mb-40">
        {/* Header */}
        <div className="relative mb-8 rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur-xl md:mb-10 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl md:hidden" />

          <div className="relative">
            <p className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.35em] text-primary md:bg-transparent md:px-0 md:py-0 md:text-xs">
              CONTACT
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-text-main md:text-4xl">
              Let&apos;s
              <span className="block text-primary md:inline md:text-text-main">
                {" "}connect
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted md:text-base">
              Feel free to contact me for Front-End Developer opportunities,
              collaboration, or project inquiries.
            </p>

            {/* Mobile only chips */}
            <div className="mt-5 flex flex-wrap gap-2 md:hidden">
              {["Email", "Phone", "GitHub", "LinkedIn"].map((item) => (
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

        {/* Contact Cards */}
        <div className="rounded-[2rem] border border-black/5 bg-white/60 p-4 shadow-sm backdrop-blur-xl md:p-6">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={
                  contact.label === "GitHub" || contact.label === "LinkedIn"
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.label === "GitHub" || contact.label === "LinkedIn"
                    ? "noreferrer"
                    : undefined
                }
                className="group rounded-[1.5rem] border border-black/5 bg-white/75 px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg active:scale-[0.98] md:px-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted md:text-xs">
                      {contact.label}
                    </p>

                    <p className="mt-2 break-all text-sm font-semibold leading-6 text-primary md:text-base">
                      {contact.value}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white md:h-11 md:w-11">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile bottom note */}
        <div className="mt-6 rounded-[1.5rem] bg-primary px-5 py-4 text-center text-sm font-semibold leading-6 text-white shadow-lg shadow-primary/20 md:hidden">
          Open to Front-End Developer opportunities and collaborations.
        </div>
      </div>
    </section>
  );
};

export default Contact;