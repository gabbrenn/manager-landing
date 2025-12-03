import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'problem', 'business', 'personal', 'testimonials', 'faq'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img
              src="/images/logo/logo_manager.png"
              alt="Manager Logo"
              className="h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-gray-900">Manaja</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('problem')}
              className={`font-medium transition-colors relative ${
                activeSection === 'problem'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              How It Works
              {activeSection === 'problem' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection('business')}
              className={`font-medium transition-colors relative ${
                activeSection === 'business'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Business
              {activeSection === 'business' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection('personal')}
              className={`font-medium transition-colors relative ${
                activeSection === 'personal'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Personal
              {activeSection === 'personal' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`font-medium transition-colors relative ${
                activeSection === 'testimonials'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Reviews
              {activeSection === 'testimonials' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`font-medium transition-colors relative ${
                activeSection === 'faq'
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              FAQ
              {activeSection === 'faq' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full"></span>
              )}
            </button>
            <div className="flex items-center gap-4 ml-4">
              <button className="px-6 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-fade-in">
            <button
              onClick={() => scrollToSection('problem')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                activeSection === 'problem'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('business')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                activeSection === 'business'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Manager
            </button>
            <button
              onClick={() => scrollToSection('personal')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                activeSection === 'personal'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Sequencify
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                activeSection === 'testimonials'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`block w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${
                activeSection === 'faq'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              FAQ
            </button>
            <button className="w-full px-6 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 shadow-lg">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

