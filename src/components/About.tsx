import React, { useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

const useReveal = (ref: React.RefObject<HTMLElement | null>, trigger?: any) => {
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.07 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [ref, trigger]);
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { t, lang } = useLang();
  const { siteContent } = useData();
  useReveal(ref, siteContent);
  const h = t.about;

  // Fallbacks
  const headingText = siteContent ? (lang === 'en' ? siteContent.about_heading_en : siteContent.about_heading_id) : h.heading;
  const p1Text = siteContent ? (lang === 'en' ? siteContent.about_p1_en : siteContent.about_p1_id) : h.p1;
  const p2Text = siteContent ? (lang === 'en' ? siteContent.about_p2_en : siteContent.about_p2_id) : h.p2;

  const stats = siteContent ? [
    { value: siteContent.about_stats_proj_val, label: lang === 'en' ? siteContent.about_stats_proj_label_en : siteContent.about_stats_proj_label_id },
    { value: siteContent.about_stats_years_val, label: lang === 'en' ? siteContent.about_stats_years_label_en : siteContent.about_stats_years_label_id },
    { value: siteContent.about_stats_tech_val, label: lang === 'en' ? siteContent.about_stats_tech_label_en : siteContent.about_stats_tech_label_id },
    { value: siteContent.about_stats_org_val, label: lang === 'en' ? siteContent.about_stats_org_label_en : siteContent.about_stats_org_label_id },
  ] : [
    { value: h.stats.projects.value, label: h.stats.projects.label },
    { value: h.stats.years.value, label: h.stats.years.label },
    { value: h.stats.tech.value, label: h.stats.tech.label },
    { value: h.stats.orgs.value, label: h.stats.orgs.label },
  ];

  return (
    <section id="about" ref={ref} className="section-white">
      <div className="section-container">

        {/* Section masthead */}
        <div className="reveal section-masthead" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="ed-kicker">01 — {h.label}</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8125rem', fontStyle: 'italic', color: '#8B8480' }}>About the author</span>
        </div>

        {/* 2-col layout: headline + copy */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '2.5rem 5rem', marginBottom: '3rem' }}>
          <div>
            <h2 className="reveal ed-subhead">{headingText}</h2>
          </div>
          <div>
            <p className="reveal reveal-delay-1 ed-body" style={{ marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: p1Text }} />
            <p className="reveal reveal-delay-2 ed-body" style={{ marginBottom: '1.25rem' }} dangerouslySetInnerHTML={{ __html: p2Text }} />
            <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {h.tags.map(tag => <span key={tag} className="skill-badge">{tag}</span>)}
            </div>
          </div>
        </div>

        {/* Divider with pull quote style */}
        <div className="reveal" style={{ borderTop: '1px solid #D4CFC8', borderBottom: '1px solid #D4CFC8', padding: '2rem 0', marginBottom: '3rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0', textAlign: 'center' }}>
            {stats.map((s, i, arr) => (
              <div key={s.label} style={{ padding: '0 2rem', borderRight: i < arr.length - 1 ? '1px solid #D4CFC8' : 'none' }}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights — 4-col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '0', border: '1px solid #D4CFC8' }}>
          {h.highlights.map((item, i) => (
            <div key={i} className={`reveal reveal-delay-${i + 1}`}
              style={{ padding: '1.5rem', borderRight: i < h.highlights.length - 1 ? '1px solid #D4CFC8' : 'none', transition: 'background 180ms', cursor: 'default' }}
              onMouseEnter={e => e.currentTarget.style.background = '#F7F4EF'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* No icon — typographic marker */}
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8B1A1A', marginBottom: '0.75rem' }}>
                — {String(i + 1).padStart(2, '0')}
              </p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.0625rem', color: '#1A1916', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p className="ed-body" style={{ fontSize: '0.875rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
