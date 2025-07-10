import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-md px-4 ${
      isScrolled ? 'top-2' : 'top-4 sm:top-6'
    }`}>
      {/* Centered Compact Navbar */}
      <div className={`bg-black/80 backdrop-blur-xl border border-gray-700/50 rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl shadow-blue-500/20' : 'shadow-lg shadow-black/20'
      }`}>
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center justify-center space-x-4 lg:space-x-8">
          {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="capitalize text-gray-300 hover:text-white transition-all duration-300 relative group text-xs sm:text-sm font-medium"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-300 mx-auto block"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-blue-500/20 overflow-hidden w-48">
          <nav className="flex flex-col p-4">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize text-gray-300 hover:text-white transition-all duration-300 py-3 px-4 rounded-lg hover:bg-gray-800/50 text-left"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;