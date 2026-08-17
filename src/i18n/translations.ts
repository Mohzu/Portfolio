export type Lang = 'en' | 'id';

export const translations = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      experience: 'Experience',
      skills: 'Skills',
      projects: 'Projects',
      certificates: 'Certificates',
      contact: 'Contact',
    },

    // Hero
    hero: {
      greeting: "Hi, I'm",
      role: 'Frontend & Mobile Developer',
      available: 'Available for Internship',
      description:
        'Passionate about building intuitive digital experiences — from responsive web interfaces to mobile applications.',
      cta_projects: 'View My Projects',
      cta_cv: 'Download CV',
      social_label: 'Find me on',
    },

    // About
    about: {
      label: 'About Me',
      heading: 'Building digital experiences that matter',
      p1: "I'm an <strong>Informatics Engineering</strong> student at Universitas Pasundan with a passion for frontend web and mobile application development.",
      p2: "My focus is on creating digital solutions that are not only visually appealing but also deliver intuitive user experiences. I'm committed to <em>continuous learning</em> and always keep up with the latest technologies.",
      tags: ['Problem Solver', 'Team Player', 'Fast Learner', 'Detail-Oriented'],
      stats: {
        projects: { value: '5+', label: 'Projects Built' },
        years: { value: '3+', label: 'Years Learning' },
        tech: { value: '10+', label: 'Technologies' },
        orgs: { value: '2+', label: 'Organizations' },
      },
      highlights: [
        {
          title: 'Web Development',
          desc: 'Building responsive and interactive web interfaces using modern technologies.',
        },
        {
          title: 'Mobile Development',
          desc: 'Developing native Android applications that are functional and user-friendly.',
        },
        {
          title: 'Clean Code',
          desc: 'Writing clean, structured, and maintainable code for project sustainability.',
        },
        {
          title: 'Problem Solving',
          desc: 'Systematically analyzing problems and designing effective solutions.',
        },
      ],
    },

    // Education
    education: {
      label: 'Education',
      heading: 'Academic Background',
      description:
        'Studying Informatics Engineering provides a strong foundation in problem solving, algorithms, and software development applied in every project.',
      institution: 'Universitas Pasundan',
      degree: 'Bachelor of Informatics Engineering',
      period: '2022 – Present',
      location: 'Bandung, West Java',
      focus: 'Focused on software engineering, algorithms, software design, and web & mobile technology.',
      status: 'Active',
    },

    // Experience
    experience: {
      label: 'Experience',
      heading: 'Professional & Organizational Experience',
      description:
        'Hands-on experience through internships and organizational involvement that shaped my collaboration and technical skills.',
      internship_badge: 'Internship',
      organization_badge: 'Student Organization',
      community_badge: 'Community',
      items: [
        {
          organization: 'PT. Jasa Digital Nusantara (JDN)',
          position: 'Frontend Developer Intern',
          period: 'Feb 2024 – Jun 2024',
          type: 'Internship',
          contributions: [
            'Developed and maintained responsive web application features using React.js and Tailwind CSS.',
            'Collaborated with the design team to implement pixel-perfect UI components.',
            'Participated in daily stand-ups and sprint planning in an Agile workflow.',
          ],
        },
        {
          organization: 'Himpunan Mahasiswa Teknik Informatika (HMTI)',
          position: 'Technology Division Member',
          period: '2023 – 2024',
          type: 'Organization',
          contributions: [
            'Participated in developing and managing the organization\'s website.',
            'Helped coordinate technology events and coding workshops for new members.',
            'Contributed to technical documentation and workshop material preparation.',
          ],
        },
        {
          organization: 'Programming Study Group',
          position: 'Active Member',
          period: '2022 – 2023',
          type: 'Community',
          contributions: [
            'Collaborated on programming projects with fellow students.',
            'Actively discussed and shared knowledge on web and mobile technology.',
            'Participated in campus-level hackathons and programming competitions.',
          ],
        },
      ],
    },

    // Skills
    skills: {
      label: 'Skills',
      heading: 'Technologies I Work With',
      description:
        'My tech stack for building digital solutions from frontend to mobile development.',
    },

    // Projects
    projects: {
      label: 'Selected Works',
      heading: 'Featured Projects',
      filter_all: 'All Projects',
      filter_web: 'Web',
      filter_mobile: 'Mobile',
      filter_game: 'Game',
      web_badge: 'Web App',
      mobile_badge: 'Mobile App',
      game_badge: 'Game',
      view_code: 'View Code',
      preview: 'Preview',
      items: [
        {
          description:
            'An online education platform providing interactive online courses with a responsive interface and complete course management system.',
        },
        {
          description:
            'An educational mobile app for children aged 8–10 that helps with division number operations in an interactive and fun way.',
        },
        {
          description:
            'A retro-themed e-commerce platform for purchasing classic games and consoles, featuring secure payment integration and backend API connectivity.',
        },
        {
          description:
            'An online workshop service app allowing users to register, view services, and make reservations with real-time reservation status tracking.',
        },
        {
          description:
            'A classic-style 2D space shooter game where players control a spaceship and survive increasingly difficult waves of enemies.',
        },
      ],
    },

    // Certificates
    certificates: {
      label: 'Certificates',
      heading: 'Certificates & Achievements',
      description:
        'Certifications obtained to strengthen competencies and prove capability in the technology field.',
      view: 'View',
      issued: 'Issued',
      not_available: 'Certificate preview not available',
      view_certificate: 'View Certificate',
      items: [
        { name: 'Belajar Dasar Pemrograman Web', issuer: 'Dicoding Indonesia', year: '2023', category: 'Web Development' },
        { name: 'Belajar Membuat Aplikasi Back-End untuk Pemula', issuer: 'Dicoding Indonesia', year: '2023', category: 'Backend' },
        { name: 'Belajar Dasar Pemrograman JavaScript', issuer: 'Dicoding Indonesia', year: '2023', category: 'Programming' },
        { name: 'React Basics', issuer: 'Meta (Coursera)', year: '2024', category: 'Frontend' },
        { name: 'Introduction to Mobile Development', issuer: 'Meta (Coursera)', year: '2024', category: 'Mobile' },
        { name: 'Version Control with Git', issuer: 'Atlassian (Coursera)', year: '2023', category: 'Tools' },
      ],
    },

    // Contact
    contact: {
      label: 'Contact',
      heading: "Let's Work Together",
      description:
        "Open to internship opportunities, project collaborations, and technology discussions. Don't hesitate to reach out!",
      email_label: 'Email',
      location_label: 'Location',
      find_on: 'Find me on',
      send_heading: 'Send a Message',
      name_placeholder: 'John Doe',
      email_placeholder: 'john@email.com',
      subject_placeholder: 'Internship Opportunity',
      message_placeholder: "Hi Zuhdi, I'd like to discuss...",
      name_label: 'Your Name',
      email_field_label: 'Email Address',
      subject_label: 'Subject',
      message_label: 'Message',
      send_btn: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent! I\'ll get back to you soon.',
      error: 'Failed to send. Please try again.',
    },

    // Footer
    footer: {
      tagline: 'Frontend & Mobile Developer',
      description: 'Informatics Engineering student passionate about building high-quality digital solutions.',
      quick_links: 'Quick Links',
      get_in_touch: 'Get In Touch',
      location: 'Bandung, West Java',
      status: 'Available for Internship',
      back_to_top: 'Back to top',
      copyright: 'All rights reserved.',
    },
  },

  // ===================== INDONESIAN =====================
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      education: 'Pendidikan',
      experience: 'Pengalaman',
      skills: 'Keahlian',
      projects: 'Proyek',
      certificates: 'Sertifikat',
      contact: 'Kontak',
    },

    hero: {
      greeting: 'Hai, Saya',
      role: 'Frontend & Mobile Developer',
      available: 'Tersedia untuk Magang',
      description:
        'Bersemangat membangun pengalaman digital yang intuitif — dari antarmuka web responsif hingga aplikasi mobile.',
      cta_projects: 'Lihat Proyek Saya',
      cta_cv: 'Unduh CV',
      social_label: 'Temukan saya di',
    },

    about: {
      label: 'Tentang Saya',
      heading: 'Membangun pengalaman digital yang bermakna',
      p1: 'Saya adalah mahasiswa <strong>Teknik Informatika</strong> di Universitas Pasundan yang memiliki passion di bidang pengembangan frontend web dan aplikasi mobile.',
      p2: 'Fokus saya adalah menciptakan solusi digital yang tidak hanya terlihat bagus, tetapi juga memberikan pengalaman pengguna yang intuitif. Saya berkomitmen pada <em>continuous learning</em> dan selalu mengikuti perkembangan teknologi terkini.',
      tags: ['Problem Solver', 'Team Player', 'Cepat Belajar', 'Detail-Oriented'],
      stats: {
        projects: { value: '5+', label: 'Proyek Dibuat' },
        years: { value: '3+', label: 'Tahun Belajar' },
        tech: { value: '10+', label: 'Teknologi' },
        orgs: { value: '2+', label: 'Organisasi' },
      },
      highlights: [
        {
          title: 'Web Development',
          desc: 'Membangun antarmuka web yang responsif dan interaktif dengan teknologi modern.',
        },
        {
          title: 'Mobile Development',
          desc: 'Mengembangkan aplikasi Android native yang fungsional dan user-friendly.',
        },
        {
          title: 'Clean Code',
          desc: 'Menulis kode yang bersih, terstruktur, dan mudah di-maintain untuk keberlanjutan proyek.',
        },
        {
          title: 'Problem Solving',
          desc: 'Menganalisis masalah secara sistematis dan merancang solusi yang efektif.',
        },
      ],
    },

    education: {
      label: 'Pendidikan',
      heading: 'Latar Belakang Akademik',
      description:
        'Menempuh pendidikan Teknik Informatika memberikan fondasi kuat dalam pemecahan masalah, algoritma, dan pengembangan perangkat lunak yang saya terapkan di setiap proyek.',
      institution: 'Universitas Pasundan',
      degree: 'S1 Teknik Informatika',
      period: '2022 – Sekarang',
      location: 'Bandung, Jawa Barat',
      focus: 'Berfokus pada rekayasa perangkat lunak, algoritma, desain sistem, dan teknologi web & mobile.',
      status: 'Aktif',
    },

    experience: {
      label: 'Pengalaman',
      heading: 'Pengalaman Profesional & Organisasi',
      description:
        'Pengalaman langsung melalui magang dan keterlibatan organisasi yang membentuk kemampuan kolaborasi dan teknis saya.',
      internship_badge: 'Magang',
      organization_badge: 'Organisasi Mahasiswa',
      community_badge: 'Komunitas',
      items: [
        {
          organization: 'PT. Jasa Digital Nusantara (JDN)',
          position: 'Frontend Developer Intern',
          period: 'Feb 2024 – Jun 2024',
          type: 'Internship',
          contributions: [
            'Mengembangkan dan memelihara fitur aplikasi web responsif menggunakan React.js dan Tailwind CSS.',
            'Berkolaborasi dengan tim desain untuk mengimplementasikan komponen UI yang pixel-perfect.',
            'Berpartisipasi dalam daily stand-up dan perencanaan sprint dalam alur kerja Agile.',
          ],
        },
        {
          organization: 'Himpunan Mahasiswa Teknik Informatika (HMTI)',
          position: 'Anggota Divisi Teknologi',
          period: '2023 – 2024',
          type: 'Organization',
          contributions: [
            'Berpartisipasi dalam pengembangan dan pengelolaan website organisasi.',
            'Membantu koordinasi kegiatan teknologi dan pelatihan coding untuk anggota baru.',
            'Berkontribusi dalam dokumentasi teknis dan penyusunan materi workshop.',
          ],
        },
        {
          organization: 'Kelompok Studi Pemrograman',
          position: 'Anggota Aktif',
          period: '2022 – 2023',
          type: 'Community',
          contributions: [
            'Berkolaborasi dalam proyek-proyek pemrograman bersama rekan mahasiswa.',
            'Aktif berdiskusi dan berbagi pengetahuan terkait teknologi web dan mobile.',
            'Ikut serta dalam hackathon dan kompetisi pemrograman tingkat kampus.',
          ],
        },
      ],
    },

    skills: {
      label: 'Keahlian',
      heading: 'Teknologi yang Saya Gunakan',
      description:
        'Stack teknologi yang saya gunakan untuk membangun solusi digital dari frontend hingga mobile development.',
    },

    projects: {
      label: 'Karya Pilihan',
      heading: 'Proyek Unggulan',
      filter_all: 'Semua Proyek',
      filter_web: 'Web',
      filter_mobile: 'Mobile',
      filter_game: 'Game',
      web_badge: 'Aplikasi Web',
      mobile_badge: 'Aplikasi Mobile',
      game_badge: 'Game',
      view_code: 'Lihat Kode',
      preview: 'Pratinjau',
      items: [
        {
          description:
            'Platform edukasi online yang menyediakan kursus daring interaktif dengan antarmuka responsif dan sistem manajemen kursus yang lengkap.',
        },
        {
          description:
            'Aplikasi mobile edukasi matematika untuk anak usia 8–10 tahun yang membantu operasi pembagian secara interaktif dan menyenangkan.',
        },
        {
          description:
            'Platform e-commerce bertema retro untuk pembelian game klasik dan konsol, dilengkapi integrasi pembayaran aman dan koneksi backend API.',
        },
        {
          description:
            'Aplikasi bengkel online yang memungkinkan pengguna mendaftar, melihat layanan, dan membuat reservasi dengan tracking status real-time.',
        },
        {
          description:
            'Game 2D space shooter bergaya klasik di mana pemain mengendalikan pesawat dan bertahan dari gelombang musuh yang semakin sulit.',
        },
      ],
    },

    certificates: {
      label: 'Sertifikat',
      heading: 'Sertifikat & Pencapaian',
      description:
        'Sertifikasi yang diperoleh untuk memperkuat kompetensi dan membuktikan kemampuan di bidang teknologi.',
      view: 'Lihat',
      issued: 'Diterbitkan',
      not_available: 'Pratinjau sertifikat tidak tersedia',
      view_certificate: 'Lihat Sertifikat',
      items: [
        { name: 'Belajar Dasar Pemrograman Web', issuer: 'Dicoding Indonesia', year: '2023', category: 'Web Development' },
        { name: 'Belajar Membuat Aplikasi Back-End untuk Pemula', issuer: 'Dicoding Indonesia', year: '2023', category: 'Backend' },
        { name: 'Belajar Dasar Pemrograman JavaScript', issuer: 'Dicoding Indonesia', year: '2023', category: 'Programming' },
        { name: 'React Basics', issuer: 'Meta (Coursera)', year: '2024', category: 'Frontend' },
        { name: 'Introduction to Mobile Development', issuer: 'Meta (Coursera)', year: '2024', category: 'Mobile' },
        { name: 'Version Control with Git', issuer: 'Atlassian (Coursera)', year: '2023', category: 'Tools' },
      ],
    },

    contact: {
      label: 'Kontak',
      heading: 'Mari Bekerja Sama',
      description:
        'Terbuka untuk peluang magang, kolaborasi proyek, dan diskusi teknologi. Jangan ragu untuk menghubungi saya!',
      email_label: 'Email',
      location_label: 'Lokasi',
      find_on: 'Temukan saya di',
      send_heading: 'Kirim Pesan',
      name_placeholder: 'Nama Anda',
      email_placeholder: 'email@anda.com',
      subject_placeholder: 'Peluang Magang',
      message_placeholder: 'Hai Zuhdi, saya ingin berdiskusi...',
      name_label: 'Nama Anda',
      email_field_label: 'Alamat Email',
      subject_label: 'Subjek',
      message_label: 'Pesan',
      send_btn: 'Kirim Pesan',
      sending: 'Mengirim...',
      success: 'Pesan berhasil dikirim! Saya akan segera membalas.',
      error: 'Gagal mengirim pesan. Silakan coba lagi.',
    },

    footer: {
      tagline: 'Frontend & Mobile Developer',
      description: 'Mahasiswa Teknik Informatika yang bersemangat membangun solusi digital berkualitas tinggi.',
      quick_links: 'Tautan Cepat',
      get_in_touch: 'Hubungi Saya',
      location: 'Bandung, Jawa Barat',
      status: 'Tersedia untuk Magang',
      back_to_top: 'Kembali ke atas',
      copyright: 'Hak cipta dilindungi.',
    },
  },
} as const;
