import { useInView } from '@/hooks/useInView';
import { Mutable } from 'next/dist/client/components/router-reducer/router-reducer-types';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

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
  delay: number;
}

// Custom hook for intersection observer
// const useInView = (options = {}) => {
//   const [isInView, setIsInView] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       setIsInView(entry.isIntersecting);
//     }, options);

//     const currentRef = ref.current;
//     if (currentRef) {
//       observer.observe(currentRef);
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef);
//       }
//     };
//   }, [options]);

//   return [ref, isInView] as const;
// };

const SkillCategory = ({ title, skills, delay }: SkillCategoryProps) => {
  const [ref, isInView] = useInView({
    threshold: 0.2,
    rootMargin: '50px 0px',
  });

  return (
    <div 
      ref={ref as MutableRefObject<null>}
      className={`mb-8 transform transition-all duration-700 ease-out`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`
      }}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-4 relative inline-block">
        {title}
        <span 
          className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform origin-left transition-transform duration-500"
          style={{
            transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
            transitionDelay: `${delay + 200}ms`
          }}
        />
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <a
            key={index}
            href={skill.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-3 py-1 bg-white text-gray-800 rounded-full shadow-sm transition-all duration-200"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: `${delay + 400 + index * 50}ms`
            }}
          >
            <span className="relative z-10 flex items-center gap-1">
              {skill.name}
              <span 
                className="text-xs text-gray-400 transform transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </span>
            
            {/* Hover effect background */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            
            {/* Border gradient */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-200 to-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ padding: '1px' }}>
              <span className="absolute inset-0 rounded-full bg-white" />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export const SkillsSection = ({ skills }: SkillsProps) => {
  const [ref, isInView] = useInView({
    threshold: 0.1,
  });

  return (
    <section ref={ref as MutableRefObject<null>} className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)',
          backgroundSize: '40px 40px',
          opacity: isInView ? 0.05 : 0,
          transition: 'opacity 1s ease-out'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 
          className="text-3xl font-bold text-gray-900 mb-12 relative inline-block"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease-out'
          }}
        >
          Skills
          <span 
            className="absolute left-0 -bottom-2 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left transition-transform duration-700"
            style={{
              transform: isInView ? 'scaleX(1)' : 'scaleX(0)',
              transitionDelay: '200ms'
            }}
          />
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <SkillCategory title="Programming Languages" skills={skills.programming} delay={0} />
          <SkillCategory title="Frontend Development" skills={skills.frontend} delay={100} />
          <SkillCategory title="Backend Development" skills={skills.backend} delay={200} />
          <SkillCategory title="Development Tools" skills={skills.tools} delay={300} />
          <SkillCategory title="Cloud & Deployment" skills={skills.cloud} delay={400} />
          <SkillCategory title="Testing" skills={skills.testing} delay={500} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;