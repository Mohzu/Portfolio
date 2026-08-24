import React, { useState, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import { useData, ExperienceData } from '../context/DataContext';
import { useReveal } from '../hooks/useReveal';

type ItemType = 'Internship' | 'Organization' | 'Community';

const typeConfig: Record<ItemType, { label_key: string; marker: string }> = {
  Internship:   { label_key: 'internship_badge',   marker: 'A' },
  Organization: { label_key: 'organization_badge', marker: 'B' },
  Community:    { label_key: 'community_badge',     marker: 'C' },
};

export default function Experience() {
  const [filter, setFilter] = useState<'ALL' | ItemType>('ALL');
  const ref = useRef<HTMLElement>(null);
  const { t, lang } = useLang();
  const { experiences } = useData();
  const ex = t.experience;

  const filteredItems = filter === 'ALL' 
    ? experiences 
    : experiences.filter(item => item.type === filter);

  useReveal(ref, filteredItems);

  return (
    <section id="experience" ref={ref} className="section-white">
      <div className="section-container">

        <div className="reveal section-masthead" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="ed-kicker">03 — {ex.label}</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8125rem', fontStyle: 'italic', color: '#8B8480' }}>Professional history</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2.5rem 5rem', alignItems: 'start' }}>

          {/* Left: intro */}
          <div>
            <h2 className="reveal ed-subhead" style={{ marginBottom: '1.25rem' }}>{ex.heading}</h2>
            <p className="reveal reveal-delay-1 ed-body" style={{ marginBottom: '2rem' }}>{ex.description}</p>

            {/* Legend / Interactive Filter Panel */}
            <div className="reveal reveal-delay-2" style={{ border: '1px solid #D4CFC8', padding: '1.25rem', background: '#FDFCFA' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B8480', marginBottom: '0.875rem' }}>
                Filter / Legend
              </p>
              
              <button 
                onClick={() => setFilter('ALL')}
                style={{ 
                  display: 'flex', width: '100%', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', marginBottom: '0.5rem',
                  background: filter === 'ALL' ? '#1A1916' : 'transparent', 
                  border: '1px solid ' + (filter === 'ALL' ? '#1A1916' : 'transparent'),
                  color: filter === 'ALL' ? '#F7F4EF' : '#1A1916',
                  fontFamily: 'inherit', textAlign: 'left', cursor: 'pointer', transition: 'all 150ms'
                }}
              >
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '0.875rem', width: 16 }}>*</span>
                <span className="ed-body" style={{ fontSize: '0.875rem', color: 'inherit', fontWeight: filter === 'ALL' ? 700 : 400 }}>
                  {t.nav.home === 'Beranda' ? 'Tampilkan Semua' : 'Show All'}
                </span>
              </button>

              {(['Internship', 'Organization'] as ItemType[]).map(type => {
                const cfg = typeConfig[type];
                const label = ex[cfg.label_key as keyof typeof ex] as string;
                const isSelected = filter === type;
                return (
                  <button 
                    key={type}
                    onClick={() => setFilter(type)}
                    style={{ 
                      display: 'flex', width: '100%', alignItems: 'center', gap: '0.75rem', padding: '0.5rem', marginBottom: '0.5rem',
                      background: isSelected ? '#1A1916' : 'transparent', 
                      border: '1px solid ' + (isSelected ? '#1A1916' : 'transparent'),
                      color: isSelected ? '#F7F4EF' : '#1A1916',
                      fontFamily: 'inherit', textAlign: 'left', cursor: 'pointer', transition: 'all 150ms'
                    }}
                  >
                    <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '0.875rem', color: isSelected ? '#F7F4EF' : '#1A1916', width: 16, flexShrink: 0 }}>{cfg.marker}</span>
                    <span className="ed-body" style={{ fontSize: '0.875rem', color: 'inherit', fontWeight: isSelected ? 700 : 400 }}>{label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: timeline as newspaper column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {filteredItems.length === 0 ? (
              <div style={{ padding: '2rem', textAlign: 'center', borderTop: '3px solid #1A1916', borderBottom: '3px solid #1A1916' }}>
                <p className="ed-body" style={{ fontStyle: 'italic' }}>
                  {lang === 'en' ? 'No history found for this category.' : 'Tidak ada riwayat untuk kategori ini.'}
                </p>
              </div>
            ) : (
              filteredItems.map((item, i) => {
                const type = item.type as ItemType;
                const cfg = typeConfig[type];
                const label = ex[cfg.label_key as keyof typeof ex] as string;
                const contributions = lang === 'en' ? item.contributions_en : item.contributions_id;
                return (
                  <div key={i} className={`reveal reveal-delay-${i + 1}`}
                    style={{ borderTop: i === 0 ? '3px solid #1A1916' : '1px solid #D4CFC8', padding: '1.5rem 0', display: 'grid', gridTemplateColumns: '2rem 1fr', gap: '1rem', transition: 'background 180ms' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#F7F4EF'; e.currentTarget.style.paddingLeft = '0.75rem'; e.currentTarget.style.paddingRight = '0.75rem'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '0'; e.currentTarget.style.paddingRight = '0'; }}
                  >
                    {/* Column marker or logo */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '0.125rem' }}>
                      {item.logo ? (
                        <img src={item.logo} alt={item.organization} style={{ width: 28, height: 28, objectFit: 'contain', border: '1px solid #D4CFC8', background: '#FDFCFA' }} />
                      ) : (
                        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '1.375rem', color: '#1A1916', lineHeight: 1 }}>{cfg.marker}</span>
                      )}
                    </div>
                    {/* Content */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B1A1A', margin: 0 }}>
                          {label}
                        </p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, color: '#8B8480', margin: 0, whiteSpace: 'nowrap' }}>
                          {item.period}
                        </p>
                      </div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.0625rem', color: '#1A1916', marginBottom: '0.2' }}>{item.organization}</h3>
                      <p className="ed-body" style={{ fontSize: '0.875rem', fontStyle: 'italic', marginBottom: '0.875rem', color: '#3A3530' }}>{item.position}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                        {contributions.map((c, j) => (
                          <li key={j} className="ed-body" style={{ fontSize: '0.875rem', display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                            <span style={{ color: '#8B1A1A', flexShrink: 0, fontWeight: 700 }}>▸</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })
            )}
            {/* End rule */}
            {filteredItems.length > 0 && <div style={{ borderTop: '3px solid #1A1916' }} />}
          </div>
        </div>
      </div>
    </section>
  );
}
