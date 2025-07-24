import { useInView } from '@/hooks/useInView';
import { FileText } from 'lucide-react';

const achievements = [
  'Reduced regression test execution time by 70% through framework optimization',
  'Led testing for 15+ web applications across diverse industries',
  'Achieved 95% test automation coverage for critical user journeys',
  'Mentored 5 junior QA engineers in automation best practices',
];

export const About = () => {
  const [sectionRef, isSectionInView] = useInView({
    threshold: 0.2,
    rootMargin: '50px 0px',
  });

  // Get the correct path for GitHub Pages deployment
  const getAssetPath = (assetPath: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
    return `${basePath}${assetPath}`;
  };

  return (
    <section
      id="about"
      className="py-16 bg-white relative overflow-hidden"
      ref={sectionRef}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)',
          backgroundSize: '48px 48px',
          opacity: isSectionInView ? 0.05 : 0,
          transition: 'opacity 1000ms ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-bold text-gray-900 mb-8 relative"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out',
          }}
        >
          The Story So Far
        </h2>

        <p
          className="text-lg text-gray-600"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 100ms',
          }}
        >
          I&apos;m a Software Development Engineer in Test (SDET) who believes in building quality into every line of code. My journey spans from manual testing to crafting sophisticated automation frameworks, always with an eye for both technical excellence and business impact. When I&apos;m not designing test strategies, you&apos;ll find me mentoring fellow QA engineers or exploring the latest in testing innovation.
        </p>

        {/* Achievements Section */}
        <div
          className="mt-10"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 200ms',
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
          <ul className="space-y-3">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-600"
                style={{
                  opacity: isSectionInView ? 1 : 0,
                  transform: isSectionInView ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `all 700ms ease-out ${300 + index * 100}ms`,
                }}
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        {/* Professional Background */}
        <div
          className="mt-10 bg-gray-50 p-6 rounded-lg"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 400ms',
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Philosophy</h3>
          <p className="text-gray-600 leading-relaxed">
            Quality isn&apos;t just about finding bugs—it&apos;s about understanding user needs, collaborating across teams, and building confidence in every release. I approach testing as both an art and a science, combining analytical thinking with creative problem-solving to ensure software not only works but delights users.
          </p>
        </div>

        {/* Call to Action */}
        <div
          className="mt-10 text-center"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 500ms',
          }}
        >
          <p className="text-gray-600 flex items-center gap-2">
            For a more formal introduction, check out my resume:
            <a
              href={getAssetPath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              <FileText className="w-4 h-4" />
              <span className="relative">
                Resume
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-blue-600 transition-all duration-200 hover:w-full" />
              </span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
