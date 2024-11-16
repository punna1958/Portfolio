import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  return (
    <header className="bg-background">
      <div className="max-w-3xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image Container */}
          <div className={`
            inline-block mb-8 
            transform transition-all duration-700 ease-out
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <div className={`
              w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-xl
              transform transition-all duration-1000 delay-300
              ${isLoaded ? 'scale-100 rotate-0' : 'scale-95 rotate-6'}
            `}>
              <div className="relative w-full h-full">
                <Image
                  src="/profile.jpeg"
                  alt="Snehdeep Singh"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`
                    object-cover object-center
                    transition-all duration-700 delay-300
                    ${isLoaded ? 'scale-100' : 'scale-110'}
                  `}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`
            flex items-center justify-center gap-2
            transform transition-all duration-700 delay-200
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            <a 
              href="https://www.linkedin.com/in/snehdeep-singh/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2"
            >
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight transition-transform duration-150 group-hover:scale-[1.02] border-b-2 border-foreground">
                Snehdeep Singh
              </h1>
              <Linkedin className="h-5 w-5 text-foreground/60 group-hover:text-foreground transition-colors" />
            </a>
          </div>

          <p className={`
            mt-4 text-xl text-foreground/80 font-medium
            transform transition-all duration-700 delay-300
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
          `}>
            Senior Full Stack Engineer
          </p>

          {/* Contact Links */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4">
            {[
              {
                href: "mailto:singhsnehdeep99@gmail.com",
                icon: Mail,
                text: "singhsnehdeep99@gmail.com",
                delay: 400,
              },
              {
                href: "tel:+917009928716",
                icon: Phone,
                text: "+91 7009928716",
                delay: 500,
              },
              {
                href: "https://github.com/Snehdeep-ts",
                icon: Github,
                text: "Snehdeep-ts",
                delay: 600,
                isExternal: true,
              },
            ].map(({ href, icon: Icon, text, delay, isExternal }) => (
              <a 
                key={href}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={`
                  text-foreground/80 hover:text-foreground 
                  flex items-center gap-2 w-full sm:w-auto justify-center 
                  transition-all duration-700
                  transform
                  ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                `}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm sm:text-base relative group">
                  {text}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-150 ease-out" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};