import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Calendar, Link, Linkedin, ExternalLink, MapPin } from 'lucide-react';
import Modal from './Modal';

const ExperienceCard = ({
  exp,
  isCurrent = false,
}: {
  exp: {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string;
    companyUrl: string;
    linkedinUrl: string;
  };
  isCurrent?: boolean;
}) => {
  const [cardRef, isCardInView] = useInView({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const isModalCompany =
    exp.company === 'Crownstack Technologies' || exp.company === 'Kiwitech LLC';

  const handleCardClick = () => {
    if (isModalCompany) {
      setIsModalOpen(true);
    } else {
      window.open(exp.companyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <div
        ref={cardRef}
        className={`relative transform transition-all duration-700 ease-out ${
          isCardInView
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 -translate-x-8'
        }`}
      >
        {isCurrent && (
          <div
            className={`absolute left-[1px] top-8 w-3.5 h-3.5 bg-[#22c55e] rounded-full transition-all duration-500 delay-300 ${
              isCardInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            } animate-pulse ring-2 ring-[#22c55e]/30`}
            style={{ zIndex: 2 }}
          />
        )}

        {/* Date Bubble - Hidden on mobile, visible on desktop */}
        <div
          className={`hidden sm:flex absolute -left-28 top-7 items-center gap-2 text-sm text-foreground/60 transition-all duration-500 delay-200 ${
            isCardInView
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 -translate-x-4'
          }`}
        >
          <Calendar className="h-4 w-4" />
          <span className="font-medium whitespace-nowrap">
            {exp.period.split('-')[0]}
          </span>
        </div>

        {/* Experience Card */}
        <div
          className="ml-8 sm:ml-8 relative group cursor-pointer"
          onClick={handleCardClick}
        >
          <div className="bg-card border border-border rounded-lg relative shadow-sm transition-all duration-150 hover:scale-[1.02] hover:shadow-md p-6">
            {isCurrent && (
              <div
                className="absolute -top-2.5 right-4 px-3 py-0.5 bg-[#0b1442] border border-border text-foreground text-xs font-medium rounded-full shadow-sm"
                style={{ zIndex: 10 }}
              >
                Current
              </div>
            )}

            {/* Triangle Pointer */}
            <div
              className="absolute -left-2 top-7 w-4 h-4 rotate-45 border-l border-b border-border bg-card"
              style={{ zIndex: 1 }}
            />

            <div
              className="flex items-start justify-between relative"
              style={{ zIndex: 2 }}
            >
              <div className="space-y-1 min-w-0 flex-1 pr-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-foreground relative pr-2">
                  <span className="relative inline-flex items-center">
                    {exp.company}
                    {isModalCompany ? (
                      <Link className="h-4 w-4 ml-2 flex-shrink-0 text-foreground" />
                    ) : (
                      <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0 text-foreground" />
                    )}
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out origin-left" />
                  </span>
                </h3>
                <p className="font-medium text-foreground/60">{exp.role}</p>

                {/* Mobile Date Display */}
                <div className="flex sm:hidden items-center gap-2 text-sm text-foreground/60 mt-2">
                  <Calendar className="h-4 w-4" />
                  <span className="font-medium">{exp.period}</span>
                </div>

                {/* Desktop Location Display */}
                <div className="hidden sm:flex items-center gap-2 text-sm text-foreground/60">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>

                {/* Mobile Location Display */}
                <div className="flex sm:hidden items-center gap-2 text-sm text-foreground/60 mt-1">
                  <MapPin className="h-4 w-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <a
                href={exp.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded-full flex-shrink-0"
                title={`${exp.company} LinkedIn`}
                onClick={(e) => e.stopPropagation()}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>

            <p className="mt-4 text-foreground/80 leading-relaxed">
              {exp.description}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={exp.company}
        url={exp.companyUrl}
      >
        <iframe
          src={exp.companyUrl}
          className="w-full h-full border-none"
          title={`${exp.company} website`}
        />
      </Modal>
    </>
  );
};

export default ExperienceCard;
