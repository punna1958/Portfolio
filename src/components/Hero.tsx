import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => (
  <header className="bg-background">
    <div className="max-w-3xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* Profile Image Container */}
        <div className="inline-block mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-background shadow-xl">
            <div className="relative w-full h-full">
              <Image
                src="/profile.jpeg"
                alt="Snehdeep Singh"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex items-center justify-center gap-2">
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
        <p className="mt-4 text-xl text-foreground/80 font-medium">
          Senior Full Stack Engineer
        </p>

        {/* Contact Links */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4">
          <a 
            href="mailto:singhsnehdeep99@gmail.com" 
            className="text-foreground/80 hover:text-foreground 
                     flex items-center gap-2 w-full sm:w-auto justify-center 
                     transition-colors duration-200 group"
          >
            <Mail className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm sm:text-base relative">
              singhsnehdeep99@gmail.com
              <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-150 ease-out" />
            </span>
          </a>
          <a 
            href="tel:+917009928716" 
            className="text-foreground/80 hover:text-foreground 
                     flex items-center gap-2 w-full sm:w-auto justify-center 
                     transition-colors duration-200 group"
          >
            <Phone className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm sm:text-base relative">
              +91 7009928716
              <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-150 ease-out" />
            </span>
          </a>
          <a 
            href="https://github.com/Snehdeep-ts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/80 hover:text-foreground 
                     flex items-center gap-2 w-full sm:w-auto justify-center 
                     transition-colors duration-200 group"
          >
            <Github className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm sm:text-base relative">
              Snehdeep-ts
              <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-150 ease-out" />
            </span>
          </a>
        </div>
      </div>
    </div>
  </header>
);