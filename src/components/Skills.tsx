interface Skill {
  name: string;
  url: string;
}

interface SkillsData {
  programming: Skill[];
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
  cloud: Skill[];
  testing: Skill[];
}

interface SkillsProps {
  skills: SkillsData;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <a
          key={index}
          href={skill.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-white text-gray-800 rounded-full shadow-sm hover:bg-gray-50 hover:shadow-md transition-all duration-200 flex items-center gap-1"
        >
          {skill.name}
          <span className="text-xs text-gray-400">↗</span>
        </a>
      ))}
    </div>
  </div>
);

export const SkillsSection = ({ skills }: SkillsProps) => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <SkillCategory title="Programming Languages" skills={skills.programming} />
        <SkillCategory title="Frontend Development" skills={skills.frontend} />
        <SkillCategory title="Backend Development" skills={skills.backend} />
        <SkillCategory title="Development Tools" skills={skills.tools} />
        <SkillCategory title="Cloud & Deployment" skills={skills.cloud} />
        <SkillCategory title="Testing" skills={skills.testing} />
      </div>
    </div>
  </section>
);