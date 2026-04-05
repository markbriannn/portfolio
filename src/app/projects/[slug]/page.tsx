import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyView } from "@/components/projects/project-case-study";
import { SiteFooter } from "@/components/sections/site-footer";
import { getProjectBySlug, portfolioData, projectSlugs } from "@/data/portfolio";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | ${portfolioData.profile.name}`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <ProjectCaseStudyView project={project} />
      <SiteFooter />
    </>
  );
}
