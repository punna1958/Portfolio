import React from 'react';
import { experiences } from '@/data';
import { useInView } from '@/hooks/useInView';
import ExperienceCard from './UI/ExperienceCard';

const Experience = () => {
  const [timelineRef, timelineInView] = useInView({
    threshold: 0.2,
    rootMargin: '-50px 0px',
  });

  return (
    <section id="experience" className="py-16 bg-background relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-12">Experience</h2>
        <div className="relative" ref={timelineRef}>
          {/* Animated Vertical Timeline Line */}
          <div
            className="absolute left-[7px] sm:left-[7px] top-0 h-full w-0.5 bg-slate-400 origin-top transition-transform duration-1000"
            style={{
              zIndex: 1,
              transform: `scaleY(${timelineInView ? 1 : 0})`,
            }}
          />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} exp={exp} isCurrent={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
