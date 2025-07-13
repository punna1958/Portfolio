import type { Project } from '../types';
import ProjectCard from './UI/ProjectCard';

interface ProjectsProps {
  projects: Project[];
}

export const Projects = ({ projects }: ProjectsProps) => (
  <section id="projects" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
