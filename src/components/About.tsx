import { useInView } from "@/hooks/useInView";


const AnimatedListItem = ({ children, delay }: { children: React.ReactNode; delay: number }) => {
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
    <section className="py-16 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background pattern that fades in */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)',
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
          About Me
         
        </h2>

        <p 
          className="text-lg text-gray-600"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 200ms',
          }}
        >
          Senior Full Stack Engineer with proven expertise in end-to-end web application development
          and technical leadership. Specialized in modern JavaScript ecosystem and relational database
          architectures for complex enterprise solutions.
        </p>

        <div 
          className="mt-6"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 300ms',
          }}
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Strengths:</h3>
          <ul className="space-y-2">
            <AnimatedListItem delay={400}>
              Architecting and implementing scalable technical solutions
            </AnimatedListItem>
            <AnimatedListItem delay={500}>
              Managing cross-functional teams and stakeholder expectations
            </AnimatedListItem>
            <AnimatedListItem delay={600}>
              Optimizing development workflows and establishing best practices
            </AnimatedListItem>
            <AnimatedListItem delay={700}>
              Mentoring junior developers and fostering team growth
            </AnimatedListItem>
            <AnimatedListItem delay={800}>
              Bridging technical and business requirements effectively
            </AnimatedListItem>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;