'use client';
import { Trophy, Award, Star, Users, Heart, Zap, Crown } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

interface Achievement {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  frequency?: string;
}

export const Achievements = () => {
  const [sectionRef, isSectionInView] = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const achievements: Achievement[] = [
    {
      title: 'Employee of the Quarter Award',
      description: 'Recognized for sustained excellence, leadership in quality assurance, and significant impact on quarterly business objectives.',
      icon: Crown,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Shoulder Responsibility and Share Credit Award',
      description: 'Honored for exemplary leadership, taking ownership of challenging projects while recognizing and elevating team contributions.',
      icon: Award,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
    {
      title: 'Employee of the Month Awards',
      description: 'Consistently recognized for outstanding performance, dedication, and exceptional contributions to team success and project delivery.',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      frequency: 'Multiple Times',
    },
    
    {
      title: 'Employee Spotlight Award',
      description: 'Highlighted for exceptional work quality, innovative solutions, and going above and beyond in critical testing initiatives.',
      icon: Star,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      frequency: 'Multiple Times',
    },
    
    {
      title: 'Rockstar Rookie Award',
      description: 'Awarded for exceptional performance as a new team member, quickly mastering complex testing frameworks and contributing valuable insights.',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      frequency: 'Multiple Times',
    },
    {
      title: 'Customer Appreciation Award',
      description: 'Recognized for delivering outstanding quality that directly improved customer satisfaction and product reliability.',
      icon: Heart,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    
    {
      title: 'Team Award',
      description: 'Celebrated for collaborative excellence, mentoring colleagues, and fostering a culture of quality and continuous improvement.',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      frequency: 'Twice',
    },
    
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 200ms',
          }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition for excellence in quality assurance, leadership, and continuous contribution to team success and product quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-gray-200"
              style={{
                opacity: isSectionInView ? 1 : 0,
                transform: isSectionInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 700ms ease-out ${400 + index * 100}ms`,
              }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-10 transform rotate-12 group-hover:rotate-45 transition-transform duration-300">
                <achievement.icon className="w-full h-full" />
              </div>

              {/* Main content */}
              <div className="relative z-10">
                <div className={`${achievement.bgColor} p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {achievement.title}
                  </h3>
                  {achievement.frequency && (
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.frequency}
                    </span>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className="text-center mt-16"
          style={{
            opacity: isSectionInView ? 1 : 0,
            transform: isSectionInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 700ms ease-out 1000ms',
          }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mx-auto max-w-3xl">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Add Value to Your Team?
            </h3>
            <p className="text-gray-600 mb-6">
              These achievements reflect my commitment to excellence and continuous improvement. Let's discuss how I can bring this same dedication to your projects.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Trophy className="w-5 h-5" />
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}; 