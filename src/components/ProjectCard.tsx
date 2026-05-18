type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  features: string[];
  techStack: string[];
  detailHref?: string;
};

const ProjectCard = ({
  title,
  category,
  description,
  features,
  techStack,
  detailHref = "#",
}: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 hover:shadow-xl active:scale-[0.99] md:rounded-[2rem] md:p-6">
      {/* Soft hover glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              {category}
            </p>

            <h3 className="mt-4 text-xl font-extrabold leading-tight text-text-main md:text-2xl">
              {title}
            </h3>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg md:h-12 md:w-12 md:text-lg">
            {title.charAt(0)}
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-text-muted">
          {description}
        </p>

        <div className="mt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted">
            Key Features
          </p>

          <ul className="mt-3 space-y-2">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm leading-6 text-text-main"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* View Detail Button */}
        <div className="mt-6">
          <a
            href={detailHref}
            className="group/button flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-5 py-3 text-sm font-semibold tracking-wide text-white shadow-md shadow-primary/20 transition-all duration-500 hover:-translate-y-1 hover:bg-primary-dark hover:shadow-xl active:scale-95 md:w-fit md:px-6"
          >
            View Detail
            <span className="transition-transform duration-300 group-hover/button:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;