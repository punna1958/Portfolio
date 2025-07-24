'use client';
import { useState } from 'react';
import { useInView } from '@/hooks/useInView';
import { Mail, Phone, MapPin, Send, Check, X, CheckCircle, XCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

interface ToastState {
  show: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

export const Contact = () => {
  const [sectionRef, isSectionInView] = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const [toast, setToast] = useState<ToastState>({
    show: false,
    message: '',
    type: 'info',
  });

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'info' });
    }, 3000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    // Validate phone number field to only allow digits and common phone characters
    if (name === 'phone') {
      // Allow only digits, +, -, (, ), and spaces
      const phoneRegex = /^[0-9+\-\(\)\s]*$/;
      if (!phoneRegex.test(value)) {
        return; // Don't update if invalid characters are entered
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Formspree form ID for direct email sending
      const FORMSPREE_ID = 'mblkolpe';
      
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you shortly.',
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to send message. Please try again or contact me directly at punitips@yahoo.com',
      });
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'punitips@yahoo.com',
      href: 'mailto:punitips@yahoo.com',
      onClick: handleEmailClick,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7017478993',
      href: 'tel:+917017478993',
      onClick: handlePhoneClick,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: null,
      onClick: null,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
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
          Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your software quality? Let&apos;s discuss how my expertise in test automation and QA can help your team deliver exceptional products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            style={{
              opacity: isSectionInView ? 1 : 0,
              transform: isSectionInView ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 700ms ease-out 400ms',
            }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              I&apos;m always open to discussing new opportunities, collaborations or just chatting about the latest in test automation and quality assurance.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center space-x-4"
                  style={{
                    opacity: isSectionInView ? 1 : 0,
                    transform: isSectionInView ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 700ms ease-out ${600 + index * 100}ms`,
                  }}
                >
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={item.onClick}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              opacity: isSectionInView ? 1 : 0,
              transform: isSectionInView ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 700ms ease-out 600ms',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9+\-\(\)\s]*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                  placeholder="+91 70174 78993"
                  title="Please enter only digits and phone number characters (+, -, parentheses, spaces)"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-black"
                  placeholder="Project discussion, collaboration, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-y text-black"
                  placeholder="Tell me about your project, testing needs, or just say hello..."
                />
              </div>

              {/* Status Messages */}
              {status.type !== 'idle' && (
                <div className={`p-4 rounded-lg flex items-center space-x-3 ${
                  status.type === 'success' ? 'bg-green-50 text-green-800' : 
                  status.type === 'error' ? 'bg-red-50 text-red-800' : 
                  'bg-blue-50 text-blue-800'
                }`}>
                  {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
                  {status.type === 'error' && <XCircle className="w-5 h-5" />}
                  {status.type === 'loading' && (
                    <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status.type === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}; 