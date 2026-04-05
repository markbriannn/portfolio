import { portfolioData } from "@/data/portfolio";

import { SectionHeading } from "../layout/section-heading";
import { SectionShell } from "../layout/section-shell";
import { ProjectCard } from "../projects/project-card";

export function FeaturedProjectsSection() {
  return (
    <SectionShell id="projects" navKey="projects" innerClassName="space-y-8">
      <div className="glass-panel p-6 sm:p-8 lg:p-10">
        <SectionHeading
          eyebrow={portfolioData.projectsSection.eyebrow}
          title={portfolioData.projectsSection.title}
          description={portfolioData.projectsSection.intro}
        />
      </div>
      <div className="space-y-6">
        {portfolioData.projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
