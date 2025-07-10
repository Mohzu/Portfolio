import React from 'react';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Server, 
  GitBranch,
  Palette,
  Settings,
  Monitor,
  Cloud,
  Zap,
  Box
} from 'lucide-react';

const Skills = () => {
  const technologies = [
  {
    name: "HTML",
    category: "Design Tool",
    icon: <Code className="w-8 h-8" />,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30"
  },
  {
    name: "CSS",
    category: "User Interface",
    icon: <Palette className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    name: "JavaScript",
    category: "Interaction",
    icon: <Zap className="w-8 h-8" />,
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30"
  },
  {
    name: "Java",
    category: "Backend Language",
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-800 to-indigo-700",
    bgColor: "bg-blue-800/10",
    borderColor: "border-blue-800/30"
  },
  {
    name: "C#",
    category: "Backend Language",
    icon: <Code className="w-8 h-8" />,
    color: "from-purple-600 to-indigo-600",
    bgColor: "bg-purple-600/10",
    borderColor: "border-purple-600/30"
  },
  {
    name: "TailwindCSS",
    category: "User Interface",
    icon: <Palette className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30"
  },
  {
    name: "Laravel",
    category: "PHP Framework",
    icon: <Server className="w-8 h-8" />,
    color: "from-red-500 to-pink-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30"
  },
  {
    name: "ReactJS",
    category: "Frontend Framework",
    icon: <Globe className="w-8 h-8" />,
    color: "from-cyan-400 to-blue-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/30"
  },
  {
    name: "NodeJS",
    category: "Web Server",
    icon: <Server className="w-8 h-8" />,
    color: "from-green-600 to-emerald-600",
    bgColor: "bg-green-600/10",
    borderColor: "border-green-600/30"
  },
  {
    name: "NextJS",
    category: "React Framework",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-600/10",
    borderColor: "border-gray-600/30"
  },
  {
    name: "AlpineJS",
    category: "JavaScript Framework",
    icon: <Zap className="w-8 h-8" />,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30"
  },
  {
    name: "MySQL",
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/30"
  },
  {
    name: "Laragon",
    category: "Local Server",
    icon: <Server className="w-8 h-8" />,
    color: "from-sky-500 to-blue-500",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/30"
  },
  {
    name: "Docker",
    category: "Containerization",
    icon: <Box className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30"
  },
  {
    name: "GitHub",
    category: "Code Hosting",
    icon: <GitBranch className="w-8 h-8" />,
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-700/10",
    borderColor: "border-gray-700/30"
  },
  {
    name: "Git",
    category: "Version Control",
    icon: <GitBranch className="w-8 h-8" />,
    color: "from-orange-600 to-red-600",
    bgColor: "bg-orange-600/10",
    borderColor: "border-orange-600/30"
  },
  {
    name: "Postman",
    category: "API Testing",
    icon: <Settings className="w-8 h-8" />,
    color: "from-orange-500 to-pink-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30"
  },
  {
    name: "VS Code",
    category: "Code Editor",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-blue-600 to-cyan-600",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/30"
  },
  {
    name: "Unity",
    category: "Game Engine",
    icon: <Monitor className="w-8 h-8" />,
    color: "from-gray-700 to-gray-500",
    bgColor: "bg-gray-700/10",
    borderColor: "border-gray-700/30"
  },
  {
    name: "Android Studio",
    category: "Mobile IDE",
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  }
];

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Skills
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Highlighting the essential skills and technologies I use to develop seamless digital experiences.
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`${tech.bgColor} backdrop-blur-sm rounded-xl p-3 sm:p-4 lg:p-6 border ${tech.borderColor} hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105`}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-r ${tech.color} mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {tech.icon}
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-300 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {tech.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;