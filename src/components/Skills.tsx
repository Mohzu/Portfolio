import React, { useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';

const groups = [
  { category: 'Frontend', skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'React.js'] },
  { category: 'Backend', skills: ['PHP', 'Laravel', 'Node.js'] },
  { category: 'Database', skills: ['MySQL'] },
  { category: 'Tools', skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Laragon', 'Docker'] },
  { category: 'Mobile / Other', skills: ['Java', 'Android Studio', 'Unity', 'C#'] },
];

const useReveal = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.08 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [ref]);
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="skills" ref={ref} className="section-paper">
      <div className="section-container">

        <div className="reveal section-masthead" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="ed-kicker">04 — {s.label}</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8125rem', fontStyle: 'italic', color: '#8B8480' }}>Technical repertoire</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '2.5rem 5rem', alignItems: 'start' }}>
          <div>
            <h2 className="reveal ed-subhead" style={{ marginBottom: '1.25rem' }}>{s.heading}</h2>
            <p className="reveal reveal-delay-1 ed-body">{s.description}</p>
          </div>

          <div style={{ border: '1px solid #D4CFC8', background: '#FDFCFA' }}>
            {groups.map((group, i) => (
              <div key={group.category} className={`reveal reveal-delay-${Math.min(i + 1, 5)}`}
                style={{ padding: '1.25rem 1.5rem', borderBottom: i < groups.length - 1 ? '1px solid #D4CFC8' : 'none' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '1rem', alignItems: 'start' }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B8480', paddingTop: '0.3rem' }}>
                    {group.category}
                  </span>
                  <div style={{ borderLeft: '1px solid #D4CFC8', paddingLeft: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                    {group.skills.map(skill => (
                      <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}