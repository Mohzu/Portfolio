import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface ProjectData {
  id: number;
  title: string;
  image: string;
  category: 'web' | 'mobile' | 'game';
  tech: string[];
  github: string;
  description_en: string;
  description_id: string;
}

export interface ExperienceData {
  id: number;
  organization: string;
  position: string;
  period: string;
  type: 'Internship' | 'Organization' | 'Community';
  contributions_en: string[];
  contributions_id: string[];
  logo?: string;
}

export interface CertificateData {
  id: number;
  name: string;
  issuer: string;
  year: string;
  category: string;
  image?: string;
}

export interface InboxMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface EditableSiteContent {
  // Hero
  hero_greeting_en: string;
  hero_greeting_id: string;
  hero_role_en: string;
  hero_role_id: string;
  hero_available_en: string;
  hero_available_id: string;
  hero_description_en: string;
  hero_description_id: string;

  // About
  about_heading_en: string;
  about_heading_id: string;
  about_p1_en: string;
  about_p1_id: string;
  about_p2_en: string;
  about_p2_id: string;
  about_stats_proj_val: string;
  about_stats_proj_label_en: string;
  about_stats_proj_label_id: string;
  about_stats_years_val: string;
  about_stats_years_label_en: string;
  about_stats_years_label_id: string;
  about_stats_tech_val: string;
  about_stats_tech_label_en: string;
  about_stats_tech_label_id: string;
  about_stats_org_val: string;
  about_stats_org_label_en: string;
  about_stats_org_label_id: string;

  // Education
  edu_heading_en: string;
  edu_heading_id: string;
  edu_description_en: string;
  edu_description_id: string;
  edu_degree_en: string;
  edu_degree_id: string;
  edu_institution: string;
  edu_period: string;
  edu_focus_en: string;
  edu_focus_id: string;
  edu_status_en: string;
  edu_status_id: string;
}

interface DataContextType {
  projects: ProjectData[];
  experiences: ExperienceData[];
  certificates: CertificateData[];
  inbox: InboxMessage[];
  siteContent: EditableSiteContent;
  addProject: (p: Omit<ProjectData, 'id'>) => void;
  updateProject: (p: ProjectData) => void;
  deleteProject: (id: number) => void;
  addExperience: (e: Omit<ExperienceData, 'id'>) => void;
  updateExperience: (e: ExperienceData) => void;
  deleteExperience: (id: number) => void;
  addCertificate: (c: Omit<CertificateData, 'id'>) => void;
  updateCertificate: (c: CertificateData) => void;
  deleteCertificate: (id: number) => void;
  addInboxMessage: (msg: Omit<InboxMessage, 'id' | 'date'>) => void;
  deleteInboxMessage: (id: number) => void;
  updateSiteContent: (sc: EditableSiteContent) => void;
  resetAllData: () => void;
}

const defaultProjects: ProjectData[] = [
  {
    id: 1,
    title: 'EducationZone',
    image: '/img/educationzone.svg',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/Mohzu/pw2023_223040101/tree/main/tubes',
    description_en: 'An interactive online education portal for students to find courses and learn programming online.',
    description_id: 'Portal pembelajaran daring interaktif untuk membantu siswa belajar pemrograman secara mandiri.'
  },
  {
    id: 2,
    title: 'OPET Mobile App',
    image: '/img/opet.svg',
    category: 'mobile',
    tech: ['Java', 'Android Studio', 'XML'],
    github: '#',
    description_en: 'A mobile application for community operations and division management built native in Java.',
    description_id: 'Aplikasi seluler terintegrasi untuk operasi dan manajemen divisi komunitas secara teratur.'
  },
  {
    id: 3,
    title: 'RetroGameHub',
    image: '/img/retrogamehub.svg',
    category: 'web',
    tech: ['Laravel', 'React.js', 'MySQL', 'Tailwind CSS'],
    github: 'https://github.com/Lisvindanu/kelompok3_romusha',
    description_en: 'A full-stack Laravel & React web application listing retro game emulators and rom shares.',
    description_id: 'Aplikasi web full-stack Laravel & React untuk berbagi emulasi dan berkas permainan klasik.'
  },
  {
    id: 4,
    title: 'DriveCare',
    image: '/img/drivecare.svg',
    category: 'mobile',
    tech: ['Java', 'Android Studio', 'REST API'],
    github: 'https://github.com/KakaPradithaa/Tubes_Prakmob',
    description_en: 'A mobile assistant application for vehicle maintenance and service tracking.',
    description_id: 'Aplikasi asisten seluler untuk pelacakan jadwal pemeliharaan dan servis kendaraan.'
  },
  {
    id: 5,
    title: 'Game BruShoot',
    image: '/img/brushoot.svg',
    category: 'game',
    tech: ['Unity', 'C#'],
    github: '#',
    description_en: 'A 2D side-scrolling shooting game developed using Unity engine.',
    description_id: 'Permainan tembak-menembak 2D gulir samping yang dikembangkan menggunakan Unity Engine.'
  }
];

const defaultExperiences: ExperienceData[] = [
  {
    id: 1,
    organization: 'PT. Jasa Digital Nusantara (JDN)',
    position: 'Frontend Developer Intern',
    period: 'Feb 2024 – Jun 2024',
    type: 'Internship',
    contributions_en: [
      'Developed and maintained responsive web application features using React.js and Tailwind CSS.',
      'Collaborated with design teams to implement pixel-perfect user interface components.',
      'Participated in daily stand-ups and sprint planning under Agile methodology.'
    ],
    contributions_id: [
      'Mengembangkan dan memelihara fitur aplikasi web responsif menggunakan React.js dan Tailwind CSS.',
      'Berkolaborasi dengan tim desain untuk mengimplementasikan komponen UI yang pixel-perfect.',
      'Berpartisipasi dalam daily stand-up dan perencanaan sprint dalam alur kerja Agile.'
    ]
  },
  {
    id: 2,
    organization: 'Himpunan Mahasiswa Informatika UNPAS',
    position: 'Staff of Creative Division',
    period: '2023 – 2024',
    type: 'Organization',
    contributions_en: [
      'Designed and executed academic events and coding bootcamps for student development.',
      'Managed branding materials and publication assets for community engagement.'
    ],
    contributions_id: [
      'Merancang dan melaksanakan kegiatan akademik serta bootcamp pemrograman untuk mahasiswa.',
      'Mengelola materi branding dan aset publikasi untuk meningkatkan keterlibatan komunitas.'
    ]
  }
];

const defaultCertificates: CertificateData[] = [
  { id: 1, name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2023', category: 'Frontend' },
  { id: 2, name: 'Frontend Developer Path', issuer: 'Dicoding Academy', year: '2023', category: 'Frontend' },
  { id: 3, name: 'Database Foundations', issuer: 'Oracle Academy', year: '2023', category: 'Backend' },
  { id: 4, name: 'Mobile Application Specialist', issuer: 'Android Developer Associate', year: '2024', category: 'Mobile' },
];

const defaultSiteContent: EditableSiteContent = {
  // Hero
  hero_greeting_en: "Hi, I'm",
  hero_greeting_id: 'Hai, Saya',
  hero_role_en: 'Frontend & Mobile Developer',
  hero_role_id: 'Frontend & Mobile Developer',
  hero_available_en: 'AVAILABLE FOR INTERNSHIP',
  hero_available_id: 'TERSEDIA UNTUK MAGANG',
  hero_description_en: 'Passionate about building intuitive digital experiences — from responsive web interfaces to mobile applications.',
  hero_description_id: 'Bersemangat membangun pengalaman digital yang intuitif — dari antarmuka web responsif hingga aplikasi mobile.',

  // About
  about_heading_en: 'Building digital experiences that matter',
  about_heading_id: 'Membangun pengalaman digital yang bermakna',
  about_p1_en: "I'm an Informatics Engineering student at Universitas Pasundan with a passion for frontend web and mobile application development.",
  about_p1_id: 'Saya adalah mahasiswa Teknik Informatika di Universitas Pasundan yang memiliki passion di bidang pengembangan frontend web dan aplikasi mobile.',
  about_p2_en: "My focus is on creating digital solutions that are not only visually appealing but also deliver intuitive user experiences. I'm committed to continuous learning and always keep up with the latest technologies.",
  about_p2_id: 'Fokus saya adalah menciptakan solusi digital yang tidak hanya terlihat bagus, tetapi juga memberikan pengalaman pengguna yang intuitif. Saya berkomitmen pada continuous learning dan selalu mengikuti perkembangan teknologi terkini.',
  
  about_stats_proj_val: '5+',
  about_stats_proj_label_en: 'PROJECTS BUILT',
  about_stats_proj_label_id: 'PROYEK DIBUAT',
  about_stats_years_val: '3+',
  about_stats_years_label_en: 'YEARS LEARNING',
  about_stats_years_label_id: 'TAHUN BELAJAR',
  about_stats_tech_val: '10+',
  about_stats_tech_label_en: 'TECHNOLOGIES',
  about_stats_tech_label_id: 'TEKNOLOGI',
  about_stats_org_val: '2+',
  about_stats_org_label_en: 'ORGANIZATIONS',
  about_stats_org_label_id: 'ORGANISASI',

  // Education
  edu_heading_en: 'Academic Background',
  edu_heading_id: 'Latar Belakang Akademik',
  edu_description_en: 'Studying Informatics Engineering provides a strong foundation in problem solving, algorithms, and software development applied in every project.',
  edu_description_id: 'Mempelajari Teknik Informatika memberikan landasan kuat dalam pemecahan masalah, algoritma, dan pengembangan perangkat lunak yang diterapkan dalam setiap proyek.',
  edu_degree_en: 'Bachelor of Informatics Engineering',
  edu_degree_id: 'Sarjana Teknik Informatika',
  edu_institution: 'Universitas Pasundan',
  edu_period: '2022 – Present',
  edu_focus_en: 'Focused on software engineering, algorithms, software design, and web & mobile technology.',
  edu_focus_id: 'Fokus pada rekayasa perangkat lunak, algoritma, desain perangkat lunak, serta teknologi web & mobile.',
  edu_status_en: 'Active Student',
  edu_status_id: 'Mahasiswa Aktif'
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [experiences, setExperiences] = useState<ExperienceData[]>([]);
  const [certificates, setCertificates] = useState<CertificateData[]>([]);
  const [inbox, setInbox] = useState<InboxMessage[]>([]);
  const [siteContent, setSiteContent] = useState<EditableSiteContent>(defaultSiteContent);

  useEffect(() => {
    // Load from localStorage or set defaults
    const localProj = localStorage.getItem('portfolio_projects');
    const localExp = localStorage.getItem('portfolio_experience');
    const localCert = localStorage.getItem('portfolio_certificates');
    const localInbox = localStorage.getItem('portfolio_inbox');
    const localContent = localStorage.getItem('portfolio_site_content');

    if (localProj) setProjects(JSON.parse(localProj));
    else { setProjects(defaultProjects); localStorage.setItem('portfolio_projects', JSON.stringify(defaultProjects)); }

    if (localExp) setExperiences(JSON.parse(localExp));
    else { setExperiences(defaultExperiences); localStorage.setItem('portfolio_experience', JSON.stringify(defaultExperiences)); }

    if (localCert) setCertificates(JSON.parse(localCert));
    else { setCertificates(defaultCertificates); localStorage.setItem('portfolio_certificates', JSON.stringify(defaultCertificates)); }

    if (localInbox) setInbox(JSON.parse(localInbox));
    else { setInbox([]); localStorage.setItem('portfolio_inbox', JSON.stringify([])); }

    if (localContent) setSiteContent(JSON.parse(localContent));
    else { setSiteContent(defaultSiteContent); localStorage.setItem('portfolio_site_content', JSON.stringify(defaultSiteContent)); }
  }, []);

  const saveAndSetProjects = (newProj: ProjectData[]) => {
    setProjects(newProj);
    localStorage.setItem('portfolio_projects', JSON.stringify(newProj));
  };

  const saveAndSetExperiences = (newExp: ExperienceData[]) => {
    setExperiences(newExp);
    localStorage.setItem('portfolio_experience', JSON.stringify(newExp));
  };

  const saveAndSetCertificates = (newCert: CertificateData[]) => {
    setCertificates(newCert);
    localStorage.setItem('portfolio_certificates', JSON.stringify(newCert));
  };

  const saveAndSetInbox = (newInbox: InboxMessage[]) => {
    setInbox(newInbox);
    localStorage.setItem('portfolio_inbox', JSON.stringify(newInbox));
  };

  const saveAndSetSiteContent = (newContent: EditableSiteContent) => {
    setSiteContent(newContent);
    localStorage.setItem('portfolio_site_content', JSON.stringify(newContent));
  };

  const addProject = (p: Omit<ProjectData, 'id'>) => {
    const newId = projects.length > 0 ? Math.max(...projects.map(pr => pr.id)) + 1 : 1;
    saveAndSetProjects([...projects, { ...p, id: newId }]);
  };

  const updateProject = (p: ProjectData) => {
    saveAndSetProjects(projects.map(pr => pr.id === p.id ? p : pr));
  };

  const deleteProject = (id: number) => {
    saveAndSetProjects(projects.filter(pr => pr.id !== id));
  };

  const addExperience = (e: Omit<ExperienceData, 'id'>) => {
    const newId = experiences.length > 0 ? Math.max(...experiences.map(ex => ex.id)) + 1 : 1;
    saveAndSetExperiences([...experiences, { ...e, id: newId }]);
  };

  const updateExperience = (e: ExperienceData) => {
    saveAndSetExperiences(experiences.map(ex => ex.id === e.id ? e : ex));
  };

  const deleteExperience = (id: number) => {
    saveAndSetExperiences(experiences.filter(ex => ex.id !== id));
  };

  const addCertificate = (c: Omit<CertificateData, 'id'>) => {
    const newId = certificates.length > 0 ? Math.max(...certificates.map(ce => ce.id)) + 1 : 1;
    saveAndSetCertificates([...certificates, { ...c, id: newId }]);
  };

  const updateCertificate = (c: CertificateData) => {
    saveAndSetCertificates(certificates.map(ce => ce.id === c.id ? c : ce));
  };

  const deleteCertificate = (id: number) => {
    saveAndSetCertificates(certificates.filter(ce => ce.id !== id));
  };

  const addInboxMessage = (msg: Omit<InboxMessage, 'id' | 'date'>) => {
    const newId = inbox.length > 0 ? Math.max(...inbox.map(m => m.id)) + 1 : 1;
    const dateStr = new Date().toLocaleString();
    saveAndSetInbox([{ ...msg, id: newId, date: dateStr }, ...inbox]);
  };

  const deleteInboxMessage = (id: number) => {
    saveAndSetInbox(inbox.filter(m => m.id !== id));
  };

  const updateSiteContent = (sc: EditableSiteContent) => {
    saveAndSetSiteContent(sc);
  };

  const resetAllData = () => {
    localStorage.removeItem('portfolio_projects');
    localStorage.removeItem('portfolio_experience');
    localStorage.removeItem('portfolio_certificates');
    localStorage.removeItem('portfolio_inbox');
    localStorage.removeItem('portfolio_site_content');
    setProjects(defaultProjects);
    setExperiences(defaultExperiences);
    setCertificates(defaultCertificates);
    setInbox([]);
    setSiteContent(defaultSiteContent);
  };

  return (
    <DataContext.Provider value={{
      projects, experiences, certificates, inbox, siteContent,
      addProject, updateProject, deleteProject,
      addExperience, updateExperience, deleteExperience,
      addCertificate, updateCertificate, deleteCertificate,
      addInboxMessage, deleteInboxMessage, updateSiteContent, resetAllData
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within a DataProvider');
  return context;
};
