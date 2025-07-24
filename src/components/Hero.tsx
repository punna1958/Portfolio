import { Mail, Phone, Github, Linkedin, Check, X } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

export const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'info',
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'info' });
    }, 3000);
  };

  const handleEmailClick = () => {
    const email = 'punitips@yahoo.com';
    
    // For better compatibility, always try to copy to clipboard as fallback
    setTimeout(() => {
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email address copied to clipboard!', 'success');
      }).catch(() => {
        showToast('Email: ' + email, 'info');
      });
    }, 100);
  };

  const handlePhoneClick = () => {
    const phone = '+917017478993';
    
    // For better compatibility, always try to copy to clipboard as fallback
    setTimeout(() => {
      navigator.clipboard.writeText(phone).then(() => {
        showToast('Phone number copied to clipboard!', 'success');
      }).catch(() => {
        showToast('Phone: ' + phone, 'info');
      });
    }, 100);
  };

  // Get the correct image path for GitHub Pages deployment
  const getImagePath = (imagePath: string) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
    return `${basePath}${imagePath}`;
  };

  return (
    <header className="relative bg-background overflow-hidden">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-4 right-4 z-50 transition-all duration-300 ease-in-out">
          <div className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${
            toast.type === 'success' ? 'bg-green-500 text-white' :
            toast.type === 'error' ? 'bg-red-500 text-white' :
            'bg-blue-500 text-white'
          }`}>
            {toast.type === 'success' && <Check className="w-5 h-5" />}
            {toast.type === 'error' && <X className="w-5 h-5" />}
            {toast.type === 'info' && <Mail className="w-5 h-5" />}
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(45deg, #0b1442, #06001f, #1a237e, #0b1442)',
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      />
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes breathe {
          0% {
            box-shadow: 0 0 25px 3px rgba(237, 237, 237, 0.15);
          }
          50% {
            box-shadow: 0 0 35px 8px rgba(237, 237, 237, 0.25);
          }
          100% {
            box-shadow: 0 0 25px 3px rgba(237, 237, 237, 0.15);
          }
        }
      `}</style>

      <div className="relative z-10 max-w-3xl mx-auto px-4 pt-32 pb-8 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Profile Image Container */}
          <div
            className={`
             inline-block mb-8 
             transform transition-all duration-700 ease-out
             ${
               isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
             }
           `}
          >
            <div
              className={`
               w-48 h-48 rounded-full overflow-hidden border-2 border-foreground
               transform transition-all duration-1000 delay-500
               ${isLoaded ? 'scale-100 rotate-0' : 'scale-95 rotate-6'}
             `}
              style={{
                animation: 'breathe 3s ease-in-out infinite',
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={getImagePath("/profile.jpeg")}
                  alt="Puneet Yadav"
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

          {/* Rest of the component remains the same */}
          <div
            className={`
            flex items-center justify-center gap-2
            transform transition-all duration-700 delay-200
            ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }
          `}
          >
            <a
              href="https://www.linkedin.com/in/puneet-yadav-247303265/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2"
            >
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl tracking-tight transition-transform duration-150 group-hover:scale-[1.02] border-b-2 border-foreground">
                Puneet Yadav
              </h1>
              <Linkedin className="h-5 w-5 text-foreground/60 group-hover:text-foreground transition-colors" />
            </a>
          </div>

          <p
            className={`
                      mt-4 text-xl text-foreground/80 font-medium
                      transform transition-all duration-700 delay-300
                      ${
                        isLoaded
                          ? 'translate-y-0 opacity-100'
                          : 'translate-y-4 opacity-0'
                      }
                    `}
          >
            SDET • Automation Engineer • Bug Hunter
          </p>

          {/* Contact Links */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 px-4">
            {/* Email Link */}
            <a
              href="mailto:punitips@yahoo.com"
              onClick={handleEmailClick}
              className={`
                text-foreground/80 hover:text-foreground 
                flex items-center gap-2 w-full sm:w-auto justify-center 
                transition-all duration-700
                transform
                ${
                  isLoaded
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }
              `}
              style={{ transitionDelay: '400ms' }}
            >
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm sm:text-base relative group">
                punitips@yahoo.com
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-150 ease-out" />
              </span>
            </a>

            {/* Phone Link */}
            <a
              href="tel:+917017478993"
              onClick={handlePhoneClick}
              className={`
                text-foreground/80 hover:text-foreground 
                flex items-center gap-2 w-full sm:w-auto justify-center 
                transition-all duration-700
                transform
                ${
                  isLoaded
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }
              `}
              style={{ transitionDelay: '500ms' }}
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm sm:text-base relative group">
                +91 7017478993
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-150 ease-out" />
              </span>
            </a>

            {/* GitHub Link */}
            <a
              href="https://github.com/punna1958"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                text-foreground/80 hover:text-foreground 
                flex items-center gap-2 w-full sm:w-auto justify-center 
                transition-all duration-700
                transform
                ${
                  isLoaded
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }
              `}
              style={{ transitionDelay: '600ms' }}
            >
              <Github className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm sm:text-base relative group">
                punna1958
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-150 ease-out" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
