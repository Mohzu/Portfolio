import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import { useData, CertificateData } from '../context/DataContext';

const catStyle: Record<string, { bg: string; text: string }> = {
  'Web Development': { bg:'#EEF2F8', text:'#2D4E7A' },
  'Backend':         { bg:'#EEF5EE', text:'#3D5A3D' },
  'Programming':     { bg:'#F7F0EA', text:'#6B4E37' },
  'Frontend':        { bg:'#EEF2F8', text:'#2D4E7A' },
  'Mobile':          { bg:'#F4F0FA', text:'#5B3E8A' },
  'Tools':           { bg:'#F8F7F4', text:'#57534E' },
};

const useReveal = (ref: React.RefObject<HTMLElement | null>, trigger?: any) => {
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [ref, trigger]);
};

export default function Certificates() {
  const [sel, setSel] = useState<number|null>(null);
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const { certificates } = useData();
  useReveal(ref, certificates);
  const c = t.certificates;
  const selected = sel !== null ? certificates.find(ce => ce.id === sel) : null;

  return (
    <>
      <section id="certificates" ref={ref} className="section-paper">
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 3rem)' }}>

          <div className="reveal section-masthead" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
            <span className="ed-kicker">06 — {c.label}</span>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8125rem', fontStyle: 'italic', color: '#8B8480' }}>Credentials &amp; licensing</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2.5rem 5rem', alignItems: 'start', marginBottom: '2.5rem' }}>
            <div>
              <h2 className="reveal ed-subhead" style={{ marginBottom: '1.25rem' }}>{c.heading}</h2>
              <p className="reveal reveal-delay-1 ed-body" style={{ margin: 0 }}>{c.description}</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.25rem' }}>
            {certificates.map((cert, i) => {
              return (
                <div key={cert.id} className={`reveal reveal-delay-${Math.min(i+1,5)}`} onClick={() => setSel(cert.id)}
                  style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', cursor: 'pointer', transition: 'all 200ms', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '4px 4px 0 #1A1916'; el.style.transform = 'translate(-2px,-2px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translate(0,0)'; }}
                >
                  <div style={{ padding: '1.25rem 1.25rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#8B1A1A' }}>
                        {cert.category}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: '#1A1916', marginBottom: '0.5rem', lineHeight: 1.3, fontSize: '1rem', margin: '0 0 0.5rem' }}>{cert.name}</h3>
                    <p className="ed-body" style={{ fontSize: '0.8125rem', margin: 0 }}>{cert.issuer}</p>
                  </div>
                  <div style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #F3F0EC', marginTop: '1.25rem' }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: '#8B8480', fontWeight: 500 }}>{cert.year}</span>
                    <button onClick={e => { e.stopPropagation(); setSel(cert.id); }} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: '#1A1916', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                      {c.view} →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selected && (
        <div className="modal-overlay" onClick={() => setSel(null)}>
          <div style={{ background: '#FDFCFA', border: '1px solid #D4CFC8', maxWidth: 480, width: '100%', padding: '2rem' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B1A1A' }}>
                {selected.category}
              </span>
              <button onClick={() => setSel(null)} style={{ background: 'none', border: '1px solid #D4CFC8', cursor: 'pointer', width: 28, height: 28, fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.375rem', fontWeight: 700, color: '#1A1916', margin: '0 0 0.5rem' }}>{selected.name}</h2>
            <p className="ed-body" style={{ color: '#57534E', marginBottom: '0.25rem' }}>{selected.issuer}</p>
            <p className="ed-byline" style={{ fontSize: '0.6875rem', marginBottom: '1.5rem' }}>{c.issued} {selected.year}</p>
            <div style={{ border: '1px dashed #D4CFC8', padding: '1.25rem', textAlign: 'center', fontSize: '0.8125rem', color: '#8B8480', background: '#F7F4EF' }}>
              {c.not_available}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
