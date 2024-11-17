import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Project } from '@/types';
import { ExternalLink, Link } from 'lucide-react';
import Modal from './Modal';

const ProjectCard = ({ project }: { project: Project }) => {
  const [ref, isInView] = useInView({
    threshold: 0.2,
    rootMargin: '50px 0px',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Projects that should open in new tab instead of modal
  const externalProjects = ['QuickTest', 'DinDin', 'ReEntry USA'];
  const shouldOpenExternally = externalProjects.includes(project.title);

  const handleClick = () => {
    if (shouldOpenExternally) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        ref={ref}
        className={`group relative h-full cursor-pointer transform transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        onClick={handleClick}
      >
        <div className="block bg-gray-50 p-6 rounded-lg shadow-sm transition-all duration-150 hover:scale-[1.02] hover:shadow-md h-full flex flex-col">
          <div className="flex justify-between items-start">
            <h3 className="relative text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-150">
              <span className="relative">
                {project.title}
                <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-150 ease-out" />
              </span>
            </h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors duration-150 shrink-0 ml-4"
              onClick={(e) => e.stopPropagation()}
            >
              {shouldOpenExternally ? (
                <ExternalLink className="h-5 w-5" />
              ) : (
                <Link className="h-5 w-5" />
              )}
            </a>
          </div>
          <p className="mt-2 text-gray-600 flex-grow">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full ring-1 ring-blue-100 group-hover:ring-blue-200 transition-all duration-150"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.isOngoing && (
            <div className="mt-4">
              <span className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded-full ring-1 ring-green-100 group-hover:ring-green-200 transition-all duration-150">
                Ongoing
              </span>
            </div>
          )}

          <div className="absolute inset-0 rounded-lg ring-1 ring-black/5 group-hover:ring-blue-100 transition-all duration-150" />
        </div>
      </div>

      {/* Modal */}
      {!shouldOpenExternally && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={project.title}
          url={project.link}
        >
          <iframe
            src={project.link}
            className="w-full h-full border-none"
            title={`${project.title} website`}
          />
        </Modal>
      )}
    </>
  );
};

export default ProjectCard;
