// components/Hero.tsx
import { Mail, Phone, Github } from 'lucide-react';
import Image from 'next/image';

export const Hero = () => (
  <header className="bg-white">
    <div className="max-w-3xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* Profile Image Container */}
        <div className="inline-block mb-8">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <div className="relative w-full h-full">
              <Image
                src="/profile.jpg"
                alt="Snehdeep Singh"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-[#0A2647] sm:text-5xl tracking-tight">
          Snehdeep Singh
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Senior Full Stack Engineer
        </p>
        <div className="mt-6 flex justify-center gap-x-8">
          <a 
            href="mailto:singhsnehdeep99@gmail.com" 
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <Mail className="h-4 w-4" />
            <span>singhsnehdeep99@gmail.com</span>
          </a>
          <a 
            href="tel:+917009928716" 
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            <span>+91 700992876</span>
          </a>
          <a 
            href="https://github.com/Snehdeep-ts" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  </header>
);