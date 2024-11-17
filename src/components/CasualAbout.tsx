import { useInView } from '@/hooks/useInView';
import { Instagram } from 'lucide-react';
import { MeteorShower } from './UI/MeteorShower';
import InterestCard from './UI/InterestCard';
import { interests } from '@/data';

export const CasualAbout = () => {
  const [sectionRef, isSectionInView] = useInView({
    threshold: 0.2,
  });

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, rgb(15 23 42), rgb(23 37 84))',
      }}
      ref={sectionRef}
    >
      <style jsx global>{`
        @keyframes meteorFall {
          0% {
            transform: translateX(0) translateY(0) rotate(-45deg);
            opacity: 1;
          }
          20% {
            opacity: 1;
          }
          60% {
            opacity: 0;
          }
          100% {
            transform: translateX(-250vh) translateY(250vh) rotate(-45deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
      `}</style>

      <MeteorShower />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2
          className="text-3xl font-bold text-slate-200 mb-4"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out',
          }}
        >
          Beyond the Code
        </h2>
        <p
          className="text-lg text-slate-400 mb-12"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 100ms',
          }}
        >
          When I&apos;m not crafting code, you&apos;ll find me exploring tech,
          roads, and rhythms...
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interests.map((interest, index) => (
            <InterestCard
              key={interest.title}
              icon={interest.icon}
              title={interest.title}
              description={interest.description}
              delay={(index + 2) * 100}
            />
          ))}
        </div>
        <div
          className="mt-16 text-center"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 800ms',
          }}
        >
          <link
            href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;500&display=swap"
            rel="stylesheet"
          />

          <p className="text-slate-300 font-urbanist">
            <span className="block text-base tracking-wide text-slate-400 mb-2">
              Found something that clicks?
            </span>
            <span className="text-lg tracking-wide">
              Lets geek out about it on{' '}
              <a
                href="https://instagram.com/essdees"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-200 hover:text-slate-50 transition-all duration-300 hover:-translate-y-0.5 font-medium"
              >
                <Instagram className="w-4 h-4" />
                <span>@essdees</span>
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasualAbout;
