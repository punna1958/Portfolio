import type { Experience } from '../types';

interface ExperienceProps {
  experiences: Experience[];
}

export const ExperienceSection = ({ experiences }: ExperienceProps) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">{exp.company}</h3>
            <p className="text-gray-600 mt-1">{exp.role}</p>
            <p className="text-gray-500 mt-1">{exp.period} | {exp.location}</p>
            <p className="mt-3 text-gray-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);