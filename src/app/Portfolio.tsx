import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  // Projects data structure based on resume
  const projects = [
    {
      title: "QuickLearn",
      description: "Enterprise LMS with dynamic roadmap visualization and progress tracking",
      link: "https://learn.quicklabs.in/",
      tech: ["TypeScript", "Redux Toolkit", "Node.js", "NextJS", "NestJS", "Postgres"],
      isOngoing: true
    },
    {
      title: "Atomic Forms",
      description: "Mission-critical application connecting US Veterans with VA office for claim submissions",
      link: "https://app.stg.atomicforms.io/",
      tech: ["React", "FastAPI", "TypeScript", "Form Validation", "PDF Generation"],
      isOngoing: true
    },
    {
      title: "QuickTest",
      description: "Bug tracking and project management system with real-time collaboration",
      link: "https://teams.quicklabs.in/",
      tech: ["React", "TypeScript", "WebSocket", "Redux Toolkit", "Material UI"],
      year: 2024
    }
  ];

  const experiences = [
    {
      company: "Crownstack Technologies",
      role: "Sr. Software Engineer",
      period: "Feb 2024 - Present",
      location: "Noida"
    },
    {
      company: "Kiwitech LLC",
      role: "Software Engineer: Web",
      period: "April 2022 - Jan 2024",
      location: "Noida"
    },
    {
      company: "Cognizant",
      role: "Program Analyst",
      period: "Jan 2021 - Mar 2022",
      location: "Bangalore"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Snehdeep Singh
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Senior Full Stack Engineer
            </p>
            <div className="mt-6 flex justify-center space-x-6">
              <a href="https://github.com" className="text-gray-500 hover:text-gray-700">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-gray-700">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:singhsnehdeep99@gmail.com" className="text-gray-500 hover:text-gray-700">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-600">
            Senior Full Stack Engineer with proven expertise in end-to-end web application development
            and technical leadership. Specialized in modern JavaScript ecosystem and relational database
            architectures for complex enterprise solutions. Track record of successfully leading client
            projects from conceptualization to deployment.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
                <p className="text-gray-600 mt-1">{exp.role}</p>
                <p className="text-gray-500 mt-1">{exp.period} | {exp.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <a href={project.link} className="text-gray-500 hover:text-gray-700">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Next.js", "Redux Toolkit", "TypeScript", "Tailwind CSS", "Material UI"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-white text-gray-800 rounded-full shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "NestJS", "PostgreSQL", "MongoDB", "Redis", "GraphQL"].map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-white text-gray-800 rounded-full shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-gray-500">
            <p>© 2024 Snehdeep Singh. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;