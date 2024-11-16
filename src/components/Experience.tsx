import React from 'react';
import { Calendar, Link, Linkedin } from 'lucide-react';
import { experiences } from '@/data';

const Experience = () => (
  <section className="py-16 bg-background relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-foreground mb-12">Experience</h2>
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div 
          className="absolute left-0 top-0 h-full w-1 bg-slate-200 dark:bg-slate-800"
          style={{ zIndex: 1 }}
        />
        
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Dot */}
              <div 
                className="absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-600 border-4 border-background" 
                style={{ zIndex: 2 }}
              />
              
              {/* Date Bubble */}
              <div className="absolute -left-28 top-7 flex items-center gap-2 text-sm text-foreground/60">
                <Calendar className="h-4 w-4" />
                <span className="font-medium whitespace-nowrap">{exp.period.split('-')[0]}</span>
              </div>
              
              {/* Experience Card */}
              <div className="ml-8 bg-card border border-border p-6 rounded-lg relative shadow-sm">
                {/* Triangle Pointer */}
                <div 
                  className="absolute -left-2 top-7 w-4 h-4 rotate-45 border-l border-b border-border bg-card"
                  style={{ zIndex: 1 }}
                />
                
                <div className="flex items-start justify-between relative" style={{ zIndex: 2 }}>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-foreground">
                      <a 
                        href={exp.companyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 group border-b border-transparent hover:border-current transition-colors"
                      >
                        {exp.company}
                        <Link className="h-4 w-4 transition-opacity group-hover:text-primary" />
                      </a>
                    </h3>
                    <p className="text-foreground/60 font-medium">{exp.role}</p>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <a 
                    href={exp.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded-full"
                    title={`${exp.company} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                
                <p className="mt-4 text-foreground/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;