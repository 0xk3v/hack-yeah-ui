import ProjectItem from "@/components/project-item";
import { projects } from "@/data/mock";

const Projects = () => {
  return (
    <div className="w-full flex flex-wrap gap-4 mt-5">
      {projects.map((project) => (
        //<div >{project.title}</div>
        <ProjectItem key={project.title} props={project} />
      ))}
    </div>
  );
};

export default Projects;
