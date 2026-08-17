import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import { useData, ProjectData } from '../context/DataContext';

const useReveal = (ref: React.RefObject<HTMLElement | null>, trigger?: any) => {
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.04 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [ref, trigger]);
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [modal, setModal] = useState<number|null>(null);
  const ref = useRef<HTMLElement>(null);
  const { t, lang } = useLang();
  const { projects } = useData();
  const p = t.projects;

  const catLabel = (cat: string) => cat === 'web' ? p.web_badge : cat === 'mobile' ? p.mobile_badge : p.game_badge;
  const shown = filter === 'all' ? projects : projects.filter(pr => pr.category === filter);
  const modalData = modal ? projects.find(pr => pr.id === modal) : null;

  useReveal(ref, shown);

  const filters = [
    { key:'all', label: p.filter_all },
    { key:'web', label: p.filter_web },
    { key:'mobile', label: p.filter_mobile },
    { key:'game', label: p.filter_game },
  ];

  // Editorial project card
  const ProjCard = ({ proj, size = 'md', delay = 0 }: { proj: ProjectData; size?: 'lg'|'md'|'sm'; delay?: number }) => {
    const description = lang === 'en' ? proj.description_en : proj.description_id;
    return (
      <div className={`reveal reveal-delay-${delay}`} onClick={() => setModal(proj.id)}
        style={{ cursor: 'pointer', border: '1px solid #D4CFC8', background: '#FDFCFA', transition: 'box-shadow 200ms, transform 200ms' }}
        onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '4px 4px 0 #1A1916'; el.style.transform = 'translate(-2px,-2px)'; }}
        onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translate(0,0)'; }}
      >
        {/* Image */}
        <div style={{ background: '#EAE8E3', height: size === 'lg' ? 260 : size === 'md' ? 200 : 160, overflow: 'hidden' }}>
          <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        {/* Info bar */}
        <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid #D4CFC8' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.375rem' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B1A1A', margin: 0 }}>
              {catLabel(proj.category)}
            </p>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#8B8480', whiteSpace: 'nowrap' }}>
              {proj.tech[0] || ''} {proj.tech.length > 1 ? `+ ${proj.tech.length - 1} more` : ''}
            </span>
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: size === 'lg' ? '1.25rem' : '1rem', color: '#1A1916', marginBottom: '0.5rem' }}>{proj.title}</h3>
          {size !== 'sm' && (
            <p className="ed-body" style={{ fontSize: '0.8125rem', marginBottom: '0.75rem' }}>{description}</p>
          )}
          <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
            {proj.tech.map(t => <span key={t} className="skill-badge">{t}</span>)}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="projects" ref={ref} className="section-white">
        <div className="section-container">

          <div className="reveal section-masthead" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="ed-kicker">05 — {p.label}</span>
            <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
              {filters.map(f => (
                <button key={f.key} onClick={() => setFilter(f.key)} style={{ fontFamily: "'Inter', sans-serif", padding: '0.25rem 0.875rem', border: `1px solid ${filter === f.key ? '#1A1916' : '#D4CFC8'}`, background: filter === f.key ? '#1A1916' : 'transparent', color: filter === f.key ? '#F7F4EF' : '#4A4740', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 180ms' }}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
            <h2 className="reveal ed-subhead">{p.heading}</h2>
            <span className="reveal ed-byline">{projects.length} works</span>
          </div>

          {filter === 'all' && projects.length >= 3 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Row 1: newspaper-style 3+2 split */}
              <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '1.25rem' }}>
                <ProjCard proj={projects[0]} size="lg" delay={1} />
                <ProjCard proj={projects[1]} size="md" delay={2} />
              </div>
              {/* Row 2: horizontal article style */}
              <div className="reveal reveal-delay-3" onClick={() => setModal(projects[2].id)}
                style={{ cursor: 'pointer', display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid #D4CFC8', background: '#FDFCFA', transition: 'box-shadow 200ms, transform 200ms' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '4px 4px 0 #1A1916'; el.style.transform = 'translate(-2px,-2px)'; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translate(0,0)'; }}
              >
                <div style={{ background: '#EAE8E3', minHeight: 220, overflow: 'hidden' }}>
                  <img src={projects[2].image} alt={projects[2].title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '1.75rem', borderLeft: '1px solid #D4CFC8', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B1A1A', marginBottom: '0.5rem' }}>
                    {catLabel(projects[2].category)}
                  </p>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.5rem', color: '#1A1916', marginBottom: '0.75rem' }}>{projects[2].title}</h3>
                  <p className="ed-body" style={{ fontSize: '0.875rem', marginBottom: '1.25rem' }}>{lang === 'en' ? projects[2].description_en : projects[2].description_id}</p>
                  <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                    {projects[2].tech.map(t => <span key={t} className="skill-badge">{t}</span>)}
                  </div>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <a href={projects[2].github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                      {p.view_code} →
                    </a>
                  </div>
                </div>
              </div>
              {/* Row 3: remaining projects */}
              {projects.length > 3 && (
                <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(projects.length - 3, 2)}, 1fr)`, gap: '1.25rem' }}>
                  {projects.slice(3).map((proj, i) => (
                    <ProjCard key={proj.id} proj={proj} size="sm" delay={i + 4} />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {shown.map((proj, i) => <ProjCard key={proj.id} proj={proj} delay={i + 1} />)}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalData && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', maxWidth: 640, width: '100%', maxHeight: '90vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <div style={{ background: '#1A1916', padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.0625rem', color: '#F7F4EF', margin: 0 }}>{modalData.title}</p>
              <button onClick={() => setModal(null)} style={{ background: 'none', border: '1px solid rgba(247,244,239,0.3)', color: '#F7F4EF', cursor: 'pointer', width: 30, height: 30, fontSize: '1rem', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            </div>
            <div style={{ background: '#EAE8E3' }}>
              <img src={modalData.image} alt={modalData.title} style={{ width: '100%', maxHeight: '55vh', objectFit: 'contain', display: 'block' }} />
            </div>
            <div style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', borderTop: '1px solid #D4CFC8' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {modalData.tech.map(t => <span key={t} className="skill-badge">{t}</span>)}
              </div>
              <a href={modalData.github} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                {p.view_code} →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}