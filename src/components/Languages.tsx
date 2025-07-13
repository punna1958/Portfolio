import { useInView } from "@/hooks/useInView";


const LanguageCard = ({ 
  language, 
  proficiency, 
  delay 
}: { 
  language: string; 
  proficiency: string;
  delay: number;
}) => {
  const [ref, isInView] = useInView({
    threshold: 0.2,
    rootMargin: '50px 0px',
  });

  return (
    <div 
      ref={ref}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transform transition-all duration-300 group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: `${isInView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'}`,
        transition: `all 700ms ease-out ${delay}ms`,
      }}
    >
      {/* Card content container with subtle hover animation */}
      <div className="relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: 'linear-gradient(120deg, rgba(99, 102, 241, 0.03), rgba(99, 102, 241, 0))',
          }}
        />
        
        <h3 
          className="font-semibold text-gray-900 transform transition-transform duration-300 group-hover:translate-x-1"
        >
          {language}
        </h3>
        <p 
          className="text-gray-600 transform transition-transform duration-300 group-hover:translate-x-1"
          style={{ transitionDelay: '50ms' }}
        >
          {proficiency}
        </p>
      </div>
    </div>
  );
};

export const Languages = () => {
  const [sectionRef, isSectionInView] = useInView({
    threshold: 0.2,
  });

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden" ref={sectionRef}>
      {/* Subtle background pattern */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-1000"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)',
          backgroundSize: '48px 48px',
          opacity: isSectionInView ? 0.03 : 0,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 
          className="text-3xl font-bold text-gray-900 mb-8"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out',
          }}
        >
          Languages
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <LanguageCard 
            language="English" 
            proficiency="Professional Proficiency" 
            delay={200}
          />
          <LanguageCard 
            language="Hindi" 
            proficiency="Native" 
            delay={300}
          />
         
        </div>
      </div>
    </section>
  );
};

export default Languages;