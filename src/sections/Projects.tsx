"use client";

import { projects } from "@/content/siteData";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-section-sm md:py-section">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading label="Projects" title="What I've Shipped" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
