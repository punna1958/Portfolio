'use client';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import Experience from '../components/Experience';
import { Projects } from '../components/Projects';
import { SkillsSection } from '../components/Skills';
import { Education } from '../components/Education';
import { Languages } from '../components/Languages';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { projects, skills } from '../data';
import CasualAbout from '../components/CasualAbout';
import Navigation from '../components/Navigation';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />
      <About />
      <Experience  />
      <Projects projects={projects} />
      <SkillsSection skills={skills} />
      <Achievements />
      <CasualAbout/>
      <Education />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;