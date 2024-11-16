'use client';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ExperienceSection } from '../components/Experience';
import { Projects } from '../components/Projects';
import { SkillsSection } from '../components/Skills';
import { Education } from '../components/Education';
import { Languages } from '../components/Languages';
import { Footer } from '../components/Footer';
import { projects, experiences, skills } from '../data';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <About />
      <ExperienceSection experiences={experiences} />
      <Projects projects={projects} />
      <SkillsSection skills={skills} />
      <Education />
      <Languages />
      <Footer />
    </div>
  );
};

export default Portfolio;