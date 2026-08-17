import React, { useEffect, useRef } from 'react';
import ProfileCard from './ProfileCard';
import { useLang } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

const Hero = () => {
  const { t, lang } = useLang();
  const { siteContent } = useData();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      heroRef.current?.querySelectorAll('.hero-anim').forEach((el, i) => {
        setTimeout(() => el.classList.add('hero-visible'), i * 100);
      });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  // Fallback to defaults if context is not loaded yet
  const availableText = siteContent ? (lang === 'en' ? siteContent.hero_available_en : siteContent.hero_available_id) : t.hero.available;
  const greetingText = siteContent ? (lang === 'en' ? siteContent.hero_greeting_en : siteContent.hero_greeting_id) : t.hero.greeting;
  const roleText = siteContent ? (lang === 'en' ? siteContent.hero_role_en : siteContent.hero_role_id) : t.hero.role;
  const descriptionText = siteContent ? (lang === 'en' ? siteContent.hero_description_en : siteContent.hero_description_id) : t.hero.description;

  return (
    <section id="home" ref={heroRef} style={{
      background: '#F7F4EF',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      position: 'relative',
      paddingTop: '5.5rem',
      paddingBottom: '3rem',
    }}>
      <div style={{ maxWidth: 1160, margin: '0 auto', width: '100%', padding: '0 clamp(1.5rem, 5vw, 3rem)' }}>

        {/* MASTHEAD — newspaper top bar */}
        <div className="hero-anim" style={{ borderTop: '3px solid #1A1916', borderBottom: '1px solid #1A1916', padding: '0.5rem 0', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', align: 'center', gap: '1.5rem' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B8480' }}>Vol. 2025</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', color: '#C9C5BC' }}>·</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B8480' }}>Bandung, Jawa Barat</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B1A1A' }}>
              <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: '#8B1A1A', animation: 'pulse 2.5s infinite' }} />
              {availableText}
            </span>
          </div>
        </div>

        {/* Main grid: headline left + card right */}
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: '3rem', alignItems: 'start' }}>

          {/* LEFT: editorial content */}
          <div>
            {/* Kicker */}
            <div className="hero-anim" style={{ transitionDelay: '0.08s', marginBottom: '0.875rem' }}>
              <span className="ed-kicker">{greetingText}</span>
            </div>

            {/* Big headline — 2 lines */}
            <div className="hero-anim" style={{ transitionDelay: '0.16s', marginBottom: '1.25rem' }}>
              <h1 className="ed-headline" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)' }}>
                Moch Zuhdi<br />
                <em style={{ fontStyle: 'italic', color: '#3A3530' }}>Maulana Nabilah</em>
              </h1>
            </div>

            {/* Deck — subheading */}
            <div className="hero-anim" style={{ transitionDelay: '0.22s', marginBottom: '1.5rem', borderLeft: '3px solid #8B1A1A', paddingLeft: '1rem' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.0625rem, 2vw, 1.375rem)', fontStyle: 'italic', color: '#3A3530', lineHeight: 1.4, margin: 0 }}>
                {roleText}
              </p>
            </div>

            {/* Divider */}
            <hr className="hero-anim col-rule" style={{ transitionDelay: '0.28s', margin: '1.5rem 0' }} />

            {/* Body copy — description */}
            <div className="hero-anim" style={{ transitionDelay: '0.32s', marginBottom: '2rem', maxWidth: '36rem' }}>
              <p className="ed-body">{descriptionText}</p>
            </div>

            {/* CTA row */}
            <div className="hero-anim" style={{ transitionDelay: '0.38s', display: 'flex', gap: '0.875rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                {t.hero.cta_projects} →
              </button>
              <a
                href="https://drive.google.com/file/d/1MbItkNmiDXwZKqLcK8rfcFbKdiCeLxlp/view?usp=sharing"
                target="_blank" rel="noopener noreferrer" className="btn-outline"
              >
                {t.hero.cta_cv} ↓
              </a>
            </div>

            {/* Byline row */}
            <div className="hero-anim" style={{ transitionDelay: '0.44s' }}>
              <p className="ed-byline">
                mochzuhdi04@gmail.com
                <span style={{ margin: '0 0.75rem', opacity: 0.35 }}>·</span>
                <a href="https://github.com/Mohzu" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>github.com/Mohzu</a>
                <span style={{ margin: '0 0.75rem', opacity: 0.35 }}>·</span>
                <a href="https://linkedin.com/in/moch-zuhdi-maulana-nabilah-b3219229b" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
              </p>
            </div>
          </div>

          {/* RIGHT: ProfileCard */}
          <div className="hero-anim" style={{ transitionDelay: '0.20s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ border: '1px solid #D4CFC8', padding: '4px', background: '#FDFCFA' }}>
              <ProfileCard
                name="Moch Zuhdi Maulana Nabilah"
                title={roleText}
                handle="mochzuhdi"
                status={availableText}
                contactText={t.hero.cta_projects}
                avatarUrl="/img/zuhdi.png"
                showUserInfo={true}
                enableTilt={true}
                showBehindGradient={false}
                onContactClick={() => scrollTo('contact')}
              />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B8480', textAlign: 'center' }}>
              Frontend &amp; Mobile Developer
            </p>
          </div>
        </div>
      </div>

      {/* Responsive: stack card below on mobile */}
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @media (max-width: 700px) {
          #home > div { display: flex !important; flex-direction: column !important; }
          #home > div > div:first-child { grid-template-columns: 1fr !important; }
          #home > div > div:first-child > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;