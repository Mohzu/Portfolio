import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';

const navIds = ['home','about','education','experience','skills','projects','certificates','contact'];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const { lang, t, toggleLang } = useLang();
  const labels = [t.nav.home, t.nav.about, t.nav.education, t.nav.experience, t.nav.skills, t.nav.projects, t.nav.certificates, t.nav.contact];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 48);
      const y = window.scrollY + 110;
      for (let i = navIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(navIds[i]);
        if (el && el.offsetTop <= y) { setActive(navIds[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  const pillStyle: React.CSSProperties = {
    background: 'rgba(248,247,244,0.94)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(231,229,224,0.9)',
    boxShadow: scrolled ? '0 4px 24px rgba(28,25,23,0.09)' : '0 2px 10px rgba(28,25,23,0.06)',
  };

  return (
    <header style={{ position: 'fixed', top: scrolled ? '0.75rem' : '1.25rem', left: '50%', transform: 'translateX(-50%)', zIndex: 50, transition: 'top 0.4s', width: '100%', maxWidth: '100vw', padding: '0 1rem' }}>

      {/* Desktop — only visible on md+ screens */}
      <nav style={{ display: 'none' }} className="header-desktop">
        <div style={{ ...pillStyle, display: 'flex', alignItems: 'center', gap: 2, padding: '0.4375rem 0.75rem', margin: '0 auto', width: 'fit-content', borderRadius: '9999px' }}>
          {navIds.map((id, i) => (
            <button key={id} onClick={() => go(id)} style={{
              padding: '0.375rem 0.75rem', borderRadius: '9999px', border: 'none', cursor: 'pointer',
              background: active === id ? '#EEF2F8' : 'transparent',
              color: active === id ? '#2D4E7A' : '#78716C',
              fontWeight: active === id ? 600 : 500, fontSize: '0.8125rem', fontFamily: 'inherit',
              transition: 'all 200ms', whiteSpace: 'nowrap',
            }}>
              {labels[i]}
            </button>
          ))}
          <div style={{ width: 1, height: 16, background: '#E7E5E0', margin: '0 0.375rem' }} />
          <button onClick={toggleLang} style={{
            display: 'flex', alignItems: 'center', gap: '0.25rem', padding: '0.375rem 0.625rem', borderRadius: '9999px',
            border: '1px solid #E7E5E0', background: 'transparent', color: '#78716C', fontSize: '0.8125rem', fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit', transition: 'all 200ms',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#4F6A8F'; e.currentTarget.style.color = '#2D4E7A'; e.currentTarget.style.background = '#EEF2F8'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#E7E5E0'; e.currentTarget.style.color = '#78716C'; e.currentTarget.style.background = 'transparent'; }}
          >
            {lang === 'id' ? '🇮🇩' : '🇬🇧'} {lang === 'id' ? 'EN' : 'ID'}
          </button>
        </div>
      </nav>

      {/* Mobile — only visible on small screens */}
      <div className="header-mobile" style={{ display: 'none' }}>
        <div style={{ ...pillStyle, display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.625rem 1rem', borderRadius: '9999px', maxWidth: '24rem', margin: '0 auto' }}>
          <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1C1917', flex: 1 }}>Moch Zuhdi</span>
          <button onClick={toggleLang} style={{ fontSize: '0.75rem', fontWeight: 600, color: '#4F6A8F', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
            {lang === 'id' ? '🇮🇩 EN' : '🇬🇧 ID'}
          </button>
          <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#57534E', display: 'flex', alignItems: 'center', padding: '0.25rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
        {open && (
          <div style={{ position: 'absolute', top: 'calc(100% + 0.5rem)', left: '1rem', right: '1rem', maxWidth: '24rem', margin: '0 auto', background: 'rgba(248,247,244,0.97)', backdropFilter: 'blur(16px)', border: '1px solid #E7E5E0', borderRadius: '1rem', boxShadow: '0 16px 40px rgba(28,25,23,0.12)', overflow: 'hidden' }}>
            <div style={{ padding: '0.5rem' }}>
              {navIds.map((id, i) => (
                <button key={id} onClick={() => go(id)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '0.625rem 1rem', borderRadius: '0.625rem', border: 'none', cursor: 'pointer', fontSize: '0.9rem', fontFamily: 'inherit', fontWeight: active === id ? 600 : 400, background: active === id ? '#EEF2F8' : 'transparent', color: active === id ? '#2D4E7A' : '#57534E' }}>
                  {labels[i]}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Responsive: show desktop or mobile version */}
      <style>{`
        @media (min-width: 768px) { .header-desktop { display: block !important; } .header-mobile { display: none !important; } }
        @media (max-width: 767px) { .header-desktop { display: none !important; } .header-mobile { display: block !important; } }
      `}</style>
    </header>
  );
}