import React, { useEffect, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  url: string;
}> = ({ isOpen, onClose, title, children, url }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      document.body.style.overflow = 'hidden';
      // Start entrance animation after a brief delay to ensure DOM is ready
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      document.body.style.overflow = 'unset';
      // Wait for exit animation to complete before unmounting
      const timeout = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 transition-opacity duration-300 ease-in-out ${
          isAnimating
            ? 'bg-black/50 backdrop-blur-sm'
            : 'bg-black/0 backdrop-blur-none'
        }`}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-background w-full max-w-[90vw] h-[85vh] rounded-lg shadow-xl transition-all duration-300 ease-in-out ${
          isAnimating
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-8 scale-95'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">{title}</h2>
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-foreground/5 rounded-full transition-colors text-foreground/60 hover:text-foreground"
              title="Open in new tab"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 hover:bg-foreground/5 rounded-full transition-colors text-foreground/60 hover:text-foreground"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="h-[calc(85vh-5rem)] overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
