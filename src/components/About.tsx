import { useInView } from '@/hooks/useInView';
import { FileText } from 'lucide-react';

const AnimatedListItem = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.2,
    rootMargin: '50px 0px',
  });

  return (
    <li
      ref={ref}
      className="list-disc list-inside text-gray-600"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateX(0)' : 'translateX(-20px)',
        transition: `all 700ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </li>
  );
};

export const About = () => {
  const [sectionRef, isSectionInView] = useInView({
    threshold: 0.2,
    rootMargin: '50px 0px',
  });

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

        <div
          className="mt-8"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 150ms',
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            What Drives Me:
          </h3>
          <ul className="space-y-3">
            <AnimatedListItem delay={200}>
              Building robust test frameworks that ensure software quality from day one.
            </AnimatedListItem>
            <AnimatedListItem delay={250}>
              Transforming complex business requirements into comprehensive test strategies.
            </AnimatedListItem>
            <AnimatedListItem delay={300}>
              Leading QA teams that don&apos;t just find bugs, but prevent them.
            </AnimatedListItem>
            <AnimatedListItem delay={350}>
              Sharing testing knowledge and elevating the entire team&apos;s quality mindset.
            </AnimatedListItem>
            <AnimatedListItem delay={400}>
              Creating test automation that makes quality assurance seamless and efficient.
            </AnimatedListItem>
          </ul>
        </div>

        <div
          className="mt-8 text-lg text-gray-600"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 450ms',
          }}
        >
          <p>
            Whether it&apos;s optimizing existing test suites or designing new automation frameworks, I believe in the perfect balance of innovation and
            reliability. Every test case is an opportunity to make the
            digital world a bit more stable, a bit more user-friendly and a lot
            more trustworthy.
          </p>
        </div>

        <div
          className="mt-12 pt-8 border-t border-gray-100"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 500ms',
          }}
        >
          <p className="text-gray-600 flex items-center gap-2">
            For a more formal introduction, check out my resume:
            <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-gray-900 hover:text-blue-600 font-medium transition-colors duration-200"
>
  <FileText className="w-4 h-4" />
  <span className="relative">
    View Resume
    <span className="absolute left-0 right-0 bottom-0 h-px bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
  </span>
</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
