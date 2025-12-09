import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default function Projects() {
  return (
    <div className="py-20">
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols-2 gap-10 mt-10">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  );
}
