import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Legal Management System",
      category: "Enterprise System",
      description:
        "A legal workflow management system for handling case-related operations, approval processes, user permissions, and document-related features.",
      features: [
        "Implemented role-based workflows for Maker, Checker, Approver, Admin, and Head Team",
        "Built data-heavy screens with tables, forms, modals, and status tracking",
        "Integrated frontend screens with REST APIs for real business operations",
      ],
      techStack: ["React", "TypeScript", "REST API", "Ant Design", "Git"],
      detailHref: "#legal-management-system",
    },
    {
      title: "Document Borrowing System",
      category: "Workflow System",
      description:
        "A document borrowing and return tracking feature designed for managing legal documents, borrowing status, return status, and related approval flows.",
      features: [
        "Created nested expandable tables for parent-child document data",
        "Handled row selection logic based on document borrowing groups",
        "Built modal workflows for viewing, returning, and tracking documents",
      ],
      techStack: ["React", "TypeScript", "PrimeReact", "REST API"],
      detailHref: "#document-borrowing-system",
    },
    {
      title: "Approval Workflow System",
      category: "Business Logic",
      description:
        "A frontend workflow system for managing multi-step approval processes with different user roles, permissions, and status conditions.",
      features: [
        "Handled conditional UI based on user roles and approval states",
        "Built reusable components for approval forms, comments, and actions",
        "Managed complex validation and user interaction flows",
      ],
      techStack: ["React", "TypeScript", "Formik", "Yup", "REST API"],
      detailHref: "#approval-workflow-system",
    },
    {
      title: "Thai PDF Report Generator",
      category: "Document Feature",
      description:
        "A PDF generation feature for creating Thai-language reports and legal documents with structured layouts, tables, and formatted content.",
      features: [
        "Generated Thai PDF documents using frontend data",
        "Handled complex table layouts with row spans, column spans, and custom widths",
        "Formatted dates, legal information, and approval history",
      ],
      techStack: ["React", "TypeScript", "pdfMake", "dayjs"],
      detailHref: "#thai-pdf-report-generator",
    },
  ];

  return (
    <section id="project" className="scroll-mt-28 px-4 py-12 md:px-10 md:py-16">
      <div className="mx-auto mb-16 max-w-8xl md:mb-20">
        {/* Header */}
       <div className="relative mb-8 rounded-[1.5rem] border border-black/5 bg-white/60 p-6 shadow-sm backdrop-blur-xl md:mb-10 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl md:hidden" />

          <div className="relative">
            <p className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold tracking-[0.35em] text-primary md:bg-transparent md:px-0 md:py-0 md:text-xs">
              PROJECTS
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-text-main md:text-4xl">
              Selected
              <span className="block text-primary md:inline md:text-text-main">
                {" "}Works
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted md:text-base">
              Projects and features from real-world enterprise web applications,
              focusing on complex UI, workflow logic, role permissions, and
              document-related systems.
            </p>

            {/* Mobile only chips */}
            <div className="mt-5 flex flex-wrap gap-2 md:hidden">
              {["Enterprise", "Workflow", "PDF", "Role-Based"].map((item) => (
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

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              category={project.category}
              description={project.description}
              features={project.features}
              techStack={project.techStack}
              detailHref={project.detailHref}
            />
          ))}
        </div>

        {/* Mobile bottom note */}
        <div className="mt-6 rounded-[1.5rem] bg-primary px-5 py-4 text-center text-sm font-semibold leading-6 text-white shadow-lg shadow-primary/20 md:hidden">
          Each project focuses on practical frontend work from real enterprise systems.
        </div>
      </div>
    </section>
  );
};

export default Projects;