'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, FileText, BookOpen } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Get the correct path for GitHub Pages deployment
  const getAssetPath = (assetPath: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
    return `${basePath}${assetPath}`;
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
          <span className="text-xl font-bold text-gray-900">Puneet Yadav</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="/blogs"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors inline-flex items-center gap-1"
            >
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
            <a
              href={getAssetPath("/resume.pdf")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/blogs"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium inline-flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                Blog
              </Link>
              <a
                href={getAssetPath("/resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white block px-3 py-2 text-base font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2 mx-3 rounded-md"
              >
                <FileText className="w-4 h-4" />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation; 