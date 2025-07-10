import React from 'react';
import { Code, Smartphone, Globe, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks like React, Vue, and Angular."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-cyan-400" />,
      title: "Mobile Development",
      description: "Building native and cross-platform mobile applications for iOS and Android using React Native and Flutter."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: "Full-Stack Solutions",
      description: "Developing complete web applications with backend integration and modern cloud deployment."
    },
    {
      icon: <Zap className="w-8 h-8 text-green-400" />,
      title: "Performance Optimization",
      description: "Ensuring fast load times and smooth user experiences through code optimization and best practices."
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              I'am a developer focused on frontend web development and mobile application development. With a passion for creating digital solutions that are both visually appealing and functional, I always strive to combine intuitive design with optimal performance to deliver the best possible user experience.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            <span className="px-3 sm:px-4 py-2 bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
              Problem Solver
            </span>
            <span className="px-3 sm:px-4 py-2 bg-cyan-600/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
              Team Player
            </span>
            <span className="px-3 sm:px-4 py-2 bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
              Continuous Learner
            </span>
            <span className="px-3 sm:px-4 py-2 bg-green-600/20 text-green-300 border border-green-500/30 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
              Innovation Focused
            </span>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
