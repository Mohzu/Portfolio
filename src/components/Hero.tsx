import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import ProfileCard from './ProfileCard'; 

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 pt-20 sm:pt-0">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-48 sm:w-96 h-48 sm:h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-1/2 w-48 sm:w-96 h-48 sm:h-96 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Content */}
          <div className="text-left">
            <div className="mb-6 sm:mb-8 animate-fade-in">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-slide-up leading-tight">
                Moch Zuhdi<br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Maulana Nabilah
                </span>
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 animate-slide-up delay-300 leading-relaxed">
                Frontend & Mobile Developer – Creating digital solutions that are both aesthetic and functional, from the web screen to the palm of your hand.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up delay-500">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                See My Project
                <ChevronDown size={20} />
              </button>
              <a
                href="https://drive.google.com/file/d/1MbItkNmiDXwZKqLcK8rfcFbKdiCeLxlp/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-500 text-blue-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Profile Card */}
          <div className="relative animate-fade-in delay-300 order-first lg:order-last flex justify-center items-center">
            <ProfileCard
              name="Moch Zuhdi Maulana Nabilah" 
              title="Frontend & Mobile Developer" 
              handle="mochzuhdi" 
              status="Online" 
              contactText="Connect with Me" 
              avatarUrl="/img/zuhdi.png" 
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => {
                scrollToSection('contact');
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
        >
          <ChevronDown size={24} className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;