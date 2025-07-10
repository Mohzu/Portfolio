import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Monitor, Filter, X } from 'lucide-react';

// Definisi interface untuk struktur data proyek
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  modalImage: string; 
  category: string;
  technologies: string[];
  github: string;
  live: string;
}

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // State untuk mengontrol visibilitas modal, dengan tipe eksplisit
  const [showModal, setShowModal] = useState<boolean>(false);

  // State untuk menyimpan data proyek yang akan ditampilkan di modal, dengan tipe eksplisit
  // Bisa berupa Project atau null
  const [modalContent, setModalContent] = useState<Project | null>(null);

  // Data proyek Anda, dengan tipe eksplisit sebagai array Project
  const projects: Project[] = [
    {
      id: 1,
      title: "EducationZone Website",
      description: "EducationZone Website is an online education platform designed to provide online courses.",
      image: "/img/educationzone.svg", 
      modalImage: "/img/educationzone.svg", 
      category: "web",
      technologies: [""],
      github: "https://github.com/Mohzu/pw2023_223040101/tree/main/tubes",
      live: "#" 
    },
    {
      id: 2,
      title: "Opet Mobile App",
      description: "OPET, or Operasi Pembagian Terpadu is a mobile application designed for children aged 8-10 to assist with division number operations..",
      image: "/img/opet.svg",
      modalImage: "/img/opet.svg",
      category: "mobile",
      technologies: [""],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "RetroGameHub Website",
      description: "A retro-themed e-commerce platform for purchasing classic games and consoles, featuring a responsive interface, secure payment integration, and seamless backend API connectivity",
      image: "/img/retrogamehub.svg",
      modalImage: "/img/retrogamehub.svg",
      category: "web",
      technologies: [""],
      github: "https://github.com/Lisvindanu/kelompok3_romusha",
      live: "#"
    },
    {
      id: 4,
      title: "DriveCare Mobile App",
      description: "DriveCare is an online workshop service app that allows users to register, log in, manage profiles, view services and schedules, and make reservations with an initial status of pending.",
      image: "/img/drivecare.svg",
      modalImage: "/img/drivecare.svg",
      category: "mobile",
      technologies: [""],
      github: "https://github.com/KakaPradithaa/Tubes_Prakmob",
      live: "#"
    },
    {
      id: 5,
      title: "Game BruShoot",
      description: "Brushoot 2D is a classic-style 2D space shooter where players control a spaceship and survive waves of enemies. With simple controls and increasing difficulty, it delivers fast-paced, reflex-testing action.",
      image: "/img/brushoot.svg",
      modalImage: "/img/brushoot.svg",
      category: "mobile",
      technologies: [""],
      github: "#",
      live: "#"
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: <Filter size={16} /> },
    { key: 'web', label: 'Web Apps', icon: <Monitor size={16} /> },
    { key: 'mobile', label: 'Mobile Apps', icon: <Smartphone size={16} /> }
  ];

  // Logika filter proyek berdasarkan filter aktif
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Fungsi untuk membuka modal, dengan parameter bertipe Project
  const openModal = (project: Project) => {
    setModalContent(project); 
    setShowModal(true); 
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setShowModal(false); 
    setModalContent(null); 
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header Bagian Proyek */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              A showcase of my recent work in web and mobile development, demonstrating technical expertise and creative problem-solving.
            </p>
          </div>

          {/* Tombol Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border text-xs sm:text-sm ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-2xl shadow-blue-500/25 border-blue-500'
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border-gray-700/50 hover:border-blue-500/50'
                }`}
              >
                {filter.icon}
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid Proyek */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project: Project) => ( 
              <div
                key={project.id}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Gambar Proyek */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 flex gap-2">
                      <a
                        href={project.github}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 bg-white/10 backdrop-blur-sm text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-center hover:bg-white/20 transition-colors flex items-center justify-center gap-1 sm:gap-2 border border-white/20 text-xs sm:text-sm"
                      >
                        <Github size={14} />
                        Code
                      </a>
                      {/* Tombol Live sekarang memicu modal */}
                      <button
                        onClick={() => openModal(project)} 
                        className="flex-1 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 backdrop-blur-sm text-white px-2 sm:px-4 py-1 sm:py-2 rounded-lg font-medium text-center hover:from-blue-600 hover:to-cyan-600 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm"
                      >
                        <ExternalLink size={14} />
                        Live
                      </button>
                    </div>
                  </div>
                </div>

                {/* Info Proyek */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-3 sm:mb-4 line-clamp-3 text-sm sm:text-base">
                    {project.description}
                  </p>
                  
                  {/* Teknologi */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 sm:px-3 py-1 bg-blue-600/20 text-blue-300 border border-blue-500/30 rounded-full text-xs font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ajakan Bertindak */}
          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Want to see more of my work or discuss a project?
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Komponen Modal */}
      {showModal && modalContent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeModal} 
        >
          <div
            className="relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl max-w-5xl w-full h-auto max-h-[95vh] flex flex-col"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Header Modal */}
            <div className="bg-gray-800 p-4 sm:p-6 flex items-center justify-between border-b border-gray-700">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {modalContent.title}
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-gray-700/50 hover:bg-gray-600/50"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Konten Gambar Modal */}
            <div className="flex-grow overflow-y-auto custom-scrollbar">
              <img
                src={modalContent.modalImage} 
                alt={modalContent.title}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;