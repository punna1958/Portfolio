import { useInView } from '@/hooks/useInView';
import { LucideIcon } from 'lucide-react';

interface InterestCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const InterestCard = ({
  icon: Icon,
  title,
  description,
  delay,
}: InterestCardProps) => {
  const [ref, isInView] = useInView({
    threshold: 0.2,
    rootMargin: '50px 0px',
  });

  return (
    <div
      ref={ref}
      className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group"
      style={{
        opacity: isInView ? 1 : 0,
        transform: `${isInView ? 'translateY(0)' : 'translateY(20px)'}`,
        transition: `all 700ms ease-out ${delay}ms`,
      }}
    >
      <div className="flex items-start gap-4">
        <div className="p-2 bg-indigo-500/10 rounded-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-indigo-500/20">
          <Icon className="h-5 w-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-200 mb-1 group-hover:text-indigo-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InterestCard;
