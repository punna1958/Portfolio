import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Calendar, Link, Linkedin, ExternalLink } from 'lucide-react';
import Modal from './Modal';

const ExperienceCard = ({
  exp,
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
        {/* Timeline Dot */}
        <div
          className={`absolute -left-[5px] top-8 w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-600 border-4 border-background transition-all duration-500 delay-300 ${
            isCardInView ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ zIndex: 2 }}
        />

        {/* Date Bubble */}
        <div
          className={`absolute -left-28 top-7 flex items-center gap-2 text-sm text-foreground/60 transition-all duration-500 delay-200 ${
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
          className="ml-8 relative group cursor-pointer"
          onClick={handleCardClick}
        >
          <div className="bg-card border border-border p-6 rounded-lg relative shadow-sm transition-all duration-150 hover:scale-[1.02] hover:shadow-md">
            {/* Triangle Pointer */}
            <div
              className="absolute -left-2 top-7 w-4 h-4 rotate-45 border-l border-b border-border bg-card"
              style={{ zIndex: 1 }}
            />

            <div
              className="flex justify-between relative"
              style={{ zIndex: 2 }}
            >
              <div className="space-y-1 flex-1 min-w-0">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-foreground relative inline-flex items-center">
                    <span className="inline-flex items-center">
                      <span className="truncate">{exp.company}</span>
                      {isModalCompany ? (
                        <Link className="h-4 w-4 ml-2 shrink-0 text-foreground" />
                      ) : (
                        <ExternalLink className="h-4 w-4 ml-2 shrink-0 text-foreground" />
                      )}
                    </span>
                    <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-150 ease-out origin-left" />
                  </h3>
                  <a
                    href={exp.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-foreground transition-colors p-2 hover:bg-foreground/5 rounded-full shrink-0"
                    title={`${exp.company} LinkedIn`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
                <p className="text-foreground/60 font-medium">{exp.role}</p>
                <div className="flex items-center gap-2 text-sm text-foreground/60">
                  <span>{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                </div>
              </div>
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
