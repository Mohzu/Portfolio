import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Portfolio
              </div>
              <p className="text-gray-400 mb-4 leading-relaxed text-sm sm:text-base">
                Frontend & Mobile Developer passionate about creating exceptional digital experiences. 
                Always learning, always building.
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>and</span>
                <Code className="w-4 h-4 text-blue-500" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm sm:text-base"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'UI/UX Design',
                  'Consulting',
                  'Code Review'
                ].map((service) => (
                  <li key={service}>
                    <span className="text-gray-400 text-sm sm:text-base">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} Moch Zuhdi Maulana Nabilah. All rights reserved.
            </div>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;