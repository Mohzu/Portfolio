import React, { useState, useEffect } from 'react';
import { useData, ProjectData, ExperienceData, CertificateData, EditableSiteContent } from '../context/DataContext';

type Tab = 'general' | 'projects' | 'experience' | 'certificates' | 'inbox';

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('general');
  const [notification, setNotification] = useState<string | null>(null);

  const {
    projects, experiences, certificates, inbox, siteContent,
    addProject, updateProject, deleteProject,
    addExperience, updateExperience, deleteExperience,
    addCertificate, updateCertificate, deleteCertificate,
    deleteInboxMessage, updateSiteContent, resetAllData
  } = useData();

  // General content form state
  const [genForm, setGenForm] = useState<EditableSiteContent | null>(null);

  // Initialize general form once siteContent is loaded
  useEffect(() => {
    if (siteContent) {
      setGenForm({ ...siteContent });
    }
  }, [siteContent]);

  // Project form states
  const [editingProj, setEditingProj] = useState<ProjectData | null>(null);
  const [projForm, setProjForm] = useState({
    title: '', image: '/img/educationzone.svg', category: 'web' as 'web'|'mobile'|'game',
    tech: '', github: '', description_en: '', description_id: ''
  });

  // Experience form states
  const [editingExp, setEditingExp] = useState<ExperienceData | null>(null);
  const [expForm, setExpForm] = useState({
    organization: '', position: '', period: '', type: 'Internship' as 'Internship'|'Organization'|'Community',
    contributions_en: '', contributions_id: ''
  });

  // Certificate form states
  const [editingCert, setEditingCert] = useState<CertificateData | null>(null);
  const [certForm, setCertForm] = useState({
    name: '', issuer: '', year: '', category: 'Frontend'
  });

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().toLowerCase() === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      setError('');
      showNotification('Access Granted. Welcome back, Editor!');
    } else {
      setError('Incorrect Username or Password. Try admin / admin');
    }
  };

  const handleGeneralSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (genForm) {
      updateSiteContent(genForm);
      showNotification('General Section Content saved successfully!');
    }
  };

  const handleProjSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const techArray = projForm.tech.split(',').map(s => s.trim()).filter(Boolean);
    const pData = {
      title: projForm.title,
      image: projForm.image || '/img/educationzone.svg',
      category: projForm.category,
      tech: techArray,
      github: projForm.github || '#',
      description_en: projForm.description_en,
      description_id: projForm.description_id
    };

    if (editingProj) {
      updateProject({ ...pData, id: editingProj.id });
      setEditingProj(null);
      showNotification('Project updated successfully!');
    } else {
      addProject(pData);
      showNotification('Project created successfully!');
    }

    setProjForm({ title: '', image: '/img/educationzone.svg', category: 'web', tech: '', github: '', description_en: '', description_id: '' });
  };

  const handleExpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contrEn = expForm.contributions_en.split('\n').map(s => s.trim()).filter(Boolean);
    const contrId = expForm.contributions_id.split('\n').map(s => s.trim()).filter(Boolean);
    const eData = {
      organization: expForm.organization,
      position: expForm.position,
      period: expForm.period,
      type: expForm.type,
      contributions_en: contrEn,
      contributions_id: contrId
    };

    if (editingExp) {
      updateExperience({ ...eData, id: editingExp.id });
      setEditingExp(null);
      showNotification('Experience updated successfully!');
    } else {
      addExperience(eData);
      showNotification('Experience created successfully!');
    }

    setExpForm({ organization: '', position: '', period: '', type: 'Internship', contributions_en: '', contributions_id: '' });
  };

  const handleCertSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cData = {
      name: certForm.name,
      issuer: certForm.issuer,
      year: certForm.year,
      category: certForm.category
    };

    if (editingCert) {
      updateCertificate({ ...cData, id: editingCert.id });
      setEditingCert(null);
      showNotification('Certificate updated successfully!');
    } else {
      addCertificate(cData);
      showNotification('Certificate created successfully!');
    }

    setCertForm({ name: '', issuer: '', year: '', category: 'Frontend' });
  };

  const startEditProj = (p: ProjectData) => {
    setEditingProj(p);
    setProjForm({
      title: p.title,
      image: p.image,
      category: p.category,
      tech: p.tech.join(', '),
      github: p.github,
      description_en: p.description_en,
      description_id: p.description_id
    });
  };

  const startEditExp = (exp: ExperienceData) => {
    setEditingExp(exp);
    setExpForm({
      organization: exp.organization,
      position: exp.position,
      period: exp.period,
      type: exp.type,
      contributions_en: exp.contributions_en.join('\n'),
      contributions_id: exp.contributions_id.join('\n')
    });
  };

  const startEditCert = (c: CertificateData) => {
    setEditingCert(c);
    setCertForm({
      name: c.name,
      issuer: c.issuer,
      year: c.year,
      category: c.category
    });
  };

  const handleDeleteProj = (id: number) => {
    if (confirm('Are you sure you want to delete this project?')) {
      deleteProject(id);
      showNotification('Project deleted successfully!');
    }
  };

  const handleDeleteExp = (id: number) => {
    if (confirm('Are you sure you want to delete this experience record?')) {
      deleteExperience(id);
      showNotification('Experience record deleted successfully!');
    }
  };

  const handleDeleteCert = (id: number) => {
    if (confirm('Are you sure you want to delete this certificate?')) {
      deleteCertificate(id);
      showNotification('Certificate deleted successfully!');
    }
  };

  const handleDeleteInbox = (id: number) => {
    if (confirm('Are you sure you want to delete this message?')) {
      deleteInboxMessage(id);
      showNotification('Inbox message deleted successfully!');
    }
  };

  const handleResetAll = () => {
    if (confirm('Are you sure you want to reset all site database records? This cannot be undone.')) {
      resetAllData();
      showNotification('Database reset to editorial defaults!');
      if (siteContent) {
        setGenForm({ ...siteContent });
      }
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.625rem 0.875rem', background: '#FDFCFA', border: '1px solid #D4CFC8',
    fontFamily: "'Inter', sans-serif", color: '#1A1916', outline: 'none', marginBottom: '0.875rem',
    boxSizing: 'border-box', fontSize: '0.875rem'
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em',
    textTransform: 'uppercase', color: '#8B8480', marginBottom: '0.375rem'
  };

  if (!isLoggedIn) {
    return (
      <div style={{
        background: '#F7F4EF', minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', fontFamily: "'Inter', sans-serif", padding: '1rem', boxSizing: 'border-box'
      }}>
        {notification && (
          <div style={{
            position: 'fixed', top: '1.5rem', right: '1.5rem',
            background: '#8B1A1A', color: '#F7F4EF', border: '1px solid #1A1916',
            padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 700,
            boxShadow: '4px 4px 0 #1A1916', zIndex: 10000,
            fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: '0.75rem'
          }}>
            <span>📢</span> {notification}
          </div>
        )}

        <div style={{
          background: '#FDFCFA', border: '2px solid #1A1916', maxWidth: '420px', width: '100%',
          padding: '2.5rem', boxShadow: '8px 8px 0 #1A1916', boxSizing: 'border-box'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>📰</span>
            <p style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B1A1A', margin: '0 0 0.25rem' }}>Editorial Desk Control</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.875rem', color: '#1A1916', margin: 0, fontWeight: 800 }}>Admin Login</h1>
          </div>

          <form onSubmit={handleLogin}>
            <label style={labelStyle}>Username</label>
            <input type="text" placeholder="Enter username (admin)" value={username} onChange={e => setUsername(e.target.value)} style={inputStyle} required />

            <label style={labelStyle}>Password</label>
            <input type="password" placeholder="Enter password (admin)" value={password} onChange={e => setPassword(e.target.value)} style={inputStyle} required />

            {error && <p style={{ color: '#8B1A1A', fontSize: '0.75rem', fontWeight: 600, marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem' }}>Unlock Console →</button>
          </form>

          <div style={{ marginTop: '1.5rem', textAlign: 'center', borderTop: '1px solid #D4CFC8', paddingTop: '1rem' }}>
            <a href="/" style={{ fontSize: '0.75rem', color: '#8B8480', textDecoration: 'none', fontWeight: 600 }}>← Back to Portfolio</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: '#F7F4EF', minHeight: '100vh', display: 'grid',
      gridTemplateColumns: '260px 1fr', fontFamily: "'Inter', sans-serif"
    }}>
      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: 'fixed', top: '1.5rem', right: '1.5rem',
          background: '#8B1A1A', color: '#F7F4EF', border: '1px solid #1A1916',
          padding: '1rem 1.5rem', fontSize: '0.875rem', fontWeight: 700,
          boxShadow: '4px 4px 0 #1A1916', zIndex: 10000,
          fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: '0.75rem'
        }}>
          <span>📢</span> {notification}
        </div>
      )}

      {/* Sidebar navigation */}
      <div style={{
        background: '#1A1916', color: '#F7F4EF', padding: '2rem 1.5rem',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid #1A1916'
      }}>
        <div>
          <div style={{ marginBottom: '2.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(247,244,239,0.15)' }}>
            <p style={{ fontSize: '0.5625rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B8480', margin: '0 0 0.125rem' }}>Editorial Console</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', margin: 0 }}>Editor Room</h2>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
            {[
              { id: 'general', label: '📖 General Sections' },
              { id: 'projects', label: '🎨 Projects' },
              { id: 'experience', label: '💼 Experience' },
              { id: 'certificates', label: '📜 Certificates' },
              { id: 'inbox', label: '✉ Inbox (' + inbox.length + ')' },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as Tab)}
                style={{
                  width: '100%', textAlign: 'left', padding: '0.75rem 1rem', border: 'none',
                  background: activeTab === item.id ? '#F7F4EF' : 'transparent',
                  color: activeTab === item.id ? '#1A1916' : '#C9C5BC',
                  fontWeight: activeTab === item.id ? 700 : 500, fontSize: '0.8125rem',
                  letterSpacing: '0.04em', cursor: 'pointer', transition: 'all 150ms'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button onClick={handleResetAll} style={{
            background: 'transparent', border: '1px solid #8B1A1A', color: '#8B1A1A',
            padding: '0.625rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
          }}>
            Reset All Data
          </button>
          <a href="/" style={{
            background: 'rgba(247,244,239,0.1)', color: '#F7F4EF', border: 'none',
            padding: '0.625rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer',
            textAlign: 'center', textDecoration: 'none'
          }}>
            ← View Site
          </a>
          <button onClick={() => setIsLoggedIn(false)} style={{
            background: 'transparent', border: '1px solid rgba(247,244,239,0.3)', color: '#C9C5BC',
            padding: '0.625rem', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer'
          }}>
            Logout
          </button>
        </div>
      </div>

      {/* Main content viewport */}
      <div style={{ padding: '3rem', overflowY: 'auto', maxHeight: '100vh', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderBottom: '3px solid #1A1916', paddingBottom: '1rem', marginBottom: '2rem' }}>
            <div>
              <span className="ed-kicker">Managing {activeTab}</span>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', margin: '0.25rem 0 0' }}>
                {activeTab === 'general' && 'General Section Contents'}
                {activeTab === 'projects' && 'Selected Project Records'}
                {activeTab === 'experience' && 'Timeline & History Logs'}
                {activeTab === 'certificates' && 'Credentials Ledger'}
                {activeTab === 'inbox' && 'Contact Desk Inbox'}
              </h1>
            </div>
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#8B8480' }}>
              Vol. 2026 Editor Desk
            </span>
          </div>

          {/* GENERAL SECTIONS EDITOR */}
          {activeTab === 'general' && genForm && (
            <form onSubmit={handleGeneralSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {/* HERO SECTION BLOCK */}
              <div style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', padding: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', borderBottom: '1px solid #D4CFC8', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  Hero (Front Page Header)
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Greeting (EN)</label>
                    <input type="text" value={genForm.hero_greeting_en} onChange={e => setGenForm({ ...genForm, hero_greeting_en: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Greeting (ID)</label>
                    <input type="text" value={genForm.hero_greeting_id} onChange={e => setGenForm({ ...genForm, hero_greeting_id: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Professional Role Title (EN)</label>
                    <input type="text" value={genForm.hero_role_en} onChange={e => setGenForm({ ...genForm, hero_role_en: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Professional Role Title (ID)</label>
                    <input type="text" value={genForm.hero_role_id} onChange={e => setGenForm({ ...genForm, hero_role_id: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Available Badge Text (EN)</label>
                    <input type="text" value={genForm.hero_available_en} onChange={e => setGenForm({ ...genForm, hero_available_en: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Available Badge Text (ID)</label>
                    <input type="text" value={genForm.hero_available_id} onChange={e => setGenForm({ ...genForm, hero_available_id: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <label style={labelStyle}>Intro Description (EN)</label>
                <textarea value={genForm.hero_description_en} onChange={e => setGenForm({ ...genForm, hero_description_en: e.target.value })} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <label style={labelStyle}>Intro Description (ID)</label>
                <textarea value={genForm.hero_description_id} onChange={e => setGenForm({ ...genForm, hero_description_id: e.target.value })} style={{ ...inputStyle, height: '70px', resize: 'none' }} />
              </div>

              {/* ABOUT SECTION BLOCK */}
              <div style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', padding: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', borderBottom: '1px solid #D4CFC8', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  About (Profile Columns)
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>About Heading (EN)</label>
                    <input type="text" value={genForm.about_heading_en} onChange={e => setGenForm({ ...genForm, about_heading_en: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>About Heading (ID)</label>
                    <input type="text" value={genForm.about_heading_id} onChange={e => setGenForm({ ...genForm, about_heading_id: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <label style={labelStyle}>Paragraph 1 Bio (EN)</label>
                <textarea value={genForm.about_p1_en} onChange={e => setGenForm({ ...genForm, about_p1_en: e.target.value })} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <label style={labelStyle}>Paragraph 1 Bio (ID)</label>
                <textarea value={genForm.about_p1_id} onChange={e => setGenForm({ ...genForm, about_p1_id: e.target.value })} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <label style={labelStyle}>Paragraph 2 Bio (EN)</label>
                <textarea value={genForm.about_p2_en} onChange={e => setGenForm({ ...genForm, about_p2_en: e.target.value })} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <label style={labelStyle}>Paragraph 2 Bio (ID)</label>
                <textarea value={genForm.about_p2_id} onChange={e => setGenForm({ ...genForm, about_p2_id: e.target.value })} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <h4 style={{ fontSize: '0.875rem', fontWeight: 700, margin: '1rem 0 0.5rem' }}>Stats Counters</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                  <div>
                    <label style={labelStyle}>Projects Val</label>
                    <input type="text" value={genForm.about_stats_proj_val} onChange={e => setGenForm({ ...genForm, about_stats_proj_val: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Years Val</label>
                    <input type="text" value={genForm.about_stats_years_val} onChange={e => setGenForm({ ...genForm, about_stats_years_val: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Tech Val</label>
                    <input type="text" value={genForm.about_stats_tech_val} onChange={e => setGenForm({ ...genForm, about_stats_tech_val: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Org Val</label>
                    <input type="text" value={genForm.about_stats_org_val} onChange={e => setGenForm({ ...genForm, about_stats_org_val: e.target.value })} style={inputStyle} />
                  </div>
                </div>
              </div>

              {/* EDUCATION SECTION BLOCK */}
              <div style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', padding: '1.5rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', borderBottom: '1px solid #D4CFC8', paddingBottom: '0.5rem', marginBottom: '1rem' }}>
                  Education (Academic Record)
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Edu Heading (EN)</label>
                    <input type="text" value={genForm.edu_heading_en} onChange={e => setGenForm({ ...genForm, edu_heading_en: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Edu Heading (ID)</label>
                    <input type="text" value={genForm.edu_heading_id} onChange={e => setGenForm({ ...genForm, edu_heading_id: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Institution Name</label>
                    <input type="text" value={genForm.edu_institution} onChange={e => setGenForm({ ...genForm, edu_institution: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Attendance Period</label>
                    <input type="text" value={genForm.edu_period} onChange={e => setGenForm({ ...genForm, edu_period: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Degree Title (EN)</label>
                    <input type="text" value={genForm.edu_degree_en} onChange={e => setGenForm({ ...genForm, edu_degree_en: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Degree Title (ID)</label>
                    <input type="text" value={genForm.edu_degree_id} onChange={e => setGenForm({ ...genForm, edu_degree_id: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Focus (EN)</label>
                    <input type="text" value={genForm.edu_focus_en} onChange={e => setGenForm({ ...genForm, edu_focus_en: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Focus (ID)</label>
                    <input type="text" value={genForm.edu_focus_id} onChange={e => setGenForm({ ...genForm, edu_focus_id: e.target.value })} style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Status (EN)</label>
                    <input type="text" value={genForm.edu_status_en} onChange={e => setGenForm({ ...genForm, edu_status_en: e.target.value })} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Status (ID)</label>
                    <input type="text" value={genForm.edu_status_id} onChange={e => setGenForm({ ...genForm, edu_status_id: e.target.value })} style={inputStyle} />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary" style={{ padding: '0.875rem', fontSize: '0.875rem', justifyContent: 'center' }}>
                Publish Section Changes →
              </button>
            </form>
          )}

          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <div>
              {/* Add/Edit Form */}
              <form onSubmit={handleProjSubmit} style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', padding: '1.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", margin: '0 0 1.25rem', fontSize: '1.25rem' }}>
                  {editingProj ? `Edit Project: ${editingProj.title}` : 'Draft New Project'}
                </h3>

                <label style={labelStyle}>Project Title</label>
                <input type="text" required placeholder="e.g. My Portfolio" value={projForm.title} onChange={e => setProjForm({...projForm, title: e.target.value})} style={inputStyle} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Category</label>
                    <select value={projForm.category} onChange={e => setProjForm({...projForm, category: e.target.value as any})} style={inputStyle}>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="game">Game Design</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>GitHub URL</label>
                    <input type="text" placeholder="https://..." value={projForm.github} onChange={e => setProjForm({...projForm, github: e.target.value})} style={inputStyle} />
                  </div>
                </div>

                <label style={labelStyle}>Tech Stack (comma separated)</label>
                <input type="text" placeholder="React, TypeScript, CSS" value={projForm.tech} onChange={e => setProjForm({...projForm, tech: e.target.value})} style={inputStyle} />

                <label style={labelStyle}>Description (EN)</label>
                <textarea required placeholder="Write English overview..." value={projForm.description_en} onChange={e => setProjForm({...projForm, description_en: e.target.value})} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <label style={labelStyle}>Deskripsi (ID)</label>
                <textarea required placeholder="Tulis deskripsi Indonesia..." value={projForm.description_id} onChange={e => setProjForm({...projForm, description_id: e.target.value})} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button type="submit" className="btn-primary" style={{ flex: 1, padding: '0.625rem', fontSize: '0.8125rem' }}>
                    {editingProj ? 'Save Changes' : 'Publish Entry'}
                  </button>
                  {editingProj && (
                    <button type="button" onClick={() => { setEditingProj(null); setProjForm({ title: '', image: '/img/educationzone.svg', category: 'web', tech: '', github: '', description_en: '', description_id: '' }); }} style={{ background: 'transparent', border: '1px solid #D4CFC8', padding: '0.625rem 1.25rem', fontSize: '0.8125rem', cursor: 'pointer' }}>Cancel</button>
                  )}
                </div>
              </form>

              {/* Project List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={labelStyle}>Published Projects</p>
                {projects.map(p => (
                  <div key={p.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid #D4CFC8', background: '#FDFCFA' }}>
                    <div>
                      <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: '#8B1A1A', fontWeight: 700 }}>{p.category}</span>
                      <h4 style={{ margin: '0.25rem 0', fontSize: '1rem', color: '#1A1916', fontWeight: 700 }}>{p.title}</h4>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => startEditProj(p)} style={{ background: 'none', border: '1px solid #D4CFC8', padding: '0.375rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600 }}>Edit</button>
                      <button onClick={() => handleDeleteProj(p.id)} style={{ background: 'none', border: '1px solid #8B1A1A', color: '#8B1A1A', padding: '0.375rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600 }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* EXPERIENCE TAB */}
          {activeTab === 'experience' && (
            <div>
              {/* Add/Edit Form */}
              <form onSubmit={handleExpSubmit} style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', padding: '1.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", margin: '0 0 1.25rem', fontSize: '1.25rem' }}>
                  {editingExp ? `Edit Experience: ${editingExp.organization}` : 'Publish New Experience'}
                </h3>

                <label style={labelStyle}>Organization / Company</label>
                <input type="text" required placeholder="e.g. PT. Jasa Digital" value={expForm.organization} onChange={e => setExpForm({...expForm, organization: e.target.value})} style={inputStyle} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Position</label>
                    <input type="text" required placeholder="e.g. Developer" value={expForm.position} onChange={e => setExpForm({...expForm, position: e.target.value})} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Period</label>
                    <input type="text" required placeholder="e.g. 2023 - Present" value={expForm.period} onChange={e => setExpForm({...expForm, period: e.target.value})} style={inputStyle} />
                  </div>
                </div>

                <label style={labelStyle}>Type</label>
                <select value={expForm.type} onChange={e => setExpForm({...expForm, type: e.target.value as any})} style={inputStyle}>
                  <option value="Internship">Internship (Magang)</option>
                  <option value="Organization">Organization (Organisasi)</option>
                  <option value="Community">Community (Komunitas)</option>
                </select>

                <label style={labelStyle}>Contributions (EN) (One per line)</label>
                <textarea required placeholder="Developed features..." value={expForm.contributions_en} onChange={e => setExpForm({...expForm, contributions_en: e.target.value})} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <label style={labelStyle}>Kontribusi (ID) (Satu per baris)</label>
                <textarea required placeholder="Mengembangkan fitur..." value={expForm.contributions_id} onChange={e => setExpForm({...expForm, contributions_id: e.target.value})} style={{ ...inputStyle, height: '70px', resize: 'none' }} />

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button type="submit" className="btn-primary" style={{ flex: 1, padding: '0.625rem', fontSize: '0.8125rem' }}>
                    {editingExp ? 'Save Changes' : 'Publish Entry'}
                  </button>
                  {editingExp && (
                    <button type="button" onClick={() => { setEditingExp(null); setExpForm({ organization: '', position: '', period: '', type: 'Internship', contributions_en: '', contributions_id: '' }); }} style={{ background: 'transparent', border: '1px solid #D4CFC8', padding: '0.625rem 1.25rem', fontSize: '0.8125rem', cursor: 'pointer' }}>Cancel</button>
                  )}
                </div>
              </form>

              {/* Experience List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={labelStyle}>Timeline History</p>
                {experiences.map(ex => (
                  <div key={ex.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid #D4CFC8', background: '#FDFCFA' }}>
                    <div>
                      <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: '#8B1A1A', fontWeight: 700 }}>{ex.type}</span>
                      <h4 style={{ margin: '0.25rem 0', fontSize: '1rem', color: '#1A1916', fontWeight: 700 }}>{ex.organization}</h4>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => startEditExp(ex)} style={{ background: 'none', border: '1px solid #D4CFC8', padding: '0.375rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600 }}>Edit</button>
                      <button onClick={() => handleDeleteExp(ex.id)} style={{ background: 'none', border: '1px solid #8B1A1A', color: '#8B1A1A', padding: '0.375rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600 }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CERTIFICATES TAB */}
          {activeTab === 'certificates' && (
            <div>
              {/* Add/Edit Form */}
              <form onSubmit={handleCertSubmit} style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', padding: '1.5rem', marginBottom: '2rem' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", margin: '0 0 1.25rem', fontSize: '1.25rem' }}>
                  {editingCert ? `Edit Certificate: ${editingCert.name}` : 'Issue New Certificate'}
                </h3>

                <label style={labelStyle}>Certificate Title</label>
                <input type="text" required placeholder="e.g. Responsive Design" value={certForm.name} onChange={e => setCertForm({...certForm, name: e.target.value})} style={inputStyle} />

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Issuer</label>
                    <input type="text" required placeholder="e.g. freeCodeCamp" value={certForm.issuer} onChange={e => setCertForm({...certForm, issuer: e.target.value})} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Year</label>
                    <input type="text" required placeholder="e.g. 2023" value={certForm.year} onChange={e => setCertForm({...certForm, year: e.target.value})} style={inputStyle} />
                  </div>
                </div>

                <label style={labelStyle}>Category</label>
                <input type="text" required placeholder="e.g. Frontend, Backend, Tools" value={certForm.category} onChange={e => setCertForm({...certForm, category: e.target.value})} style={inputStyle} />

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button type="submit" className="btn-primary" style={{ flex: 1, padding: '0.625rem', fontSize: '0.8125rem' }}>
                    {editingCert ? 'Save Changes' : 'Publish Entry'}
                  </button>
                  {editingCert && (
                    <button type="button" onClick={() => { setEditingCert(null); setCertForm({ name: '', issuer: '', year: '', category: 'Frontend' }); }} style={{ background: 'transparent', border: '1px solid #D4CFC8', padding: '0.625rem 1.25rem', fontSize: '0.8125rem', cursor: 'pointer' }}>Cancel</button>
                  )}
                </div>
              </form>

              {/* Certificate List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={labelStyle}>Earned Credentials</p>
                {certificates.map(c => (
                  <div key={c.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', border: '1px solid #D4CFC8', background: '#FDFCFA' }}>
                    <div>
                      <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: '#8B1A1A', fontWeight: 700 }}>{c.category}</span>
                      <h4 style={{ margin: '0.25rem 0', fontSize: '1rem', color: '#1A1916', fontWeight: 700 }}>{c.name}</h4>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button onClick={() => startEditCert(c)} style={{ background: 'none', border: '1px solid #D4CFC8', padding: '0.375rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600 }}>Edit</button>
                      <button onClick={() => handleDeleteCert(c.id)} style={{ background: 'none', border: '1px solid #8B1A1A', color: '#8B1A1A', padding: '0.375rem 0.75rem', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600 }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* INBOX TAB */}
          {activeTab === 'inbox' && (
            <div>
              <p style={labelStyle}>Editor Inbox (Received Contacts)</p>
              {inbox.length === 0 ? (
                <div style={{ border: '1px dashed #D4CFC8', padding: '3rem', textAlign: 'center', background: '#FDFCFA' }}>
                  <p style={{ fontStyle: 'italic', margin: 0, fontSize: '0.875rem', color: '#8B8480' }}>Inbox is clean. No letters received.</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {inbox.map(msg => (
                    <div key={msg.id} style={{ border: '1px solid #D4CFC8', padding: '1.25rem', background: '#FDFCFA', position: 'relative' }}>
                      <button onClick={() => handleDeleteInbox(msg.id)} style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'none', border: 'none', color: '#8B1A1A', cursor: 'pointer', fontSize: '0.8125rem', fontWeight: 700 }}>Delete</button>
                      <div style={{ marginBottom: '0.75rem' }}>
                        <span style={{ fontSize: '0.75rem', color: '#8B8480', fontWeight: 600 }}>{msg.date}</span>
                        <h4 style={{ margin: '0.375rem 0 0.125rem', fontSize: '1.125rem', color: '#1A1916', fontWeight: 700 }}>{msg.subject}</h4>
                        <p style={{ fontSize: '0.8125rem', margin: 0, color: '#8B8480' }}>From: <strong>{msg.name}</strong> ({msg.email})</p>
                      </div>
                      <hr style={{ border: 'none', height: '1px', background: '#EAE8E3', margin: '0.75rem 0' }} />
                      <p className="ed-body" style={{ fontSize: '0.875rem', margin: 0, whiteSpace: 'pre-wrap', color: '#4A4740', lineHeight: 1.5 }}>{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
