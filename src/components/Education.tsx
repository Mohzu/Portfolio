import React, { useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import { useData } from '../context/DataContext';
import { useReveal } from '../hooks/useReveal';

export default function Education() {
  const ref = useRef<HTMLElement>(null);
  const { t, lang } = useLang();
  const { siteContent } = useData();
  useReveal(ref, siteContent);
  const e = t.education;

  // Fallbacks
  const headingText     = siteContent ? (lang === 'en' ? siteContent.edu_heading_en     : siteContent.edu_heading_id)     : e.heading;
  const descriptionText = siteContent ? (lang === 'en' ? siteContent.edu_description_en : siteContent.edu_description_id) : e.description;
  const statusText      = siteContent ? (lang === 'en' ? siteContent.edu_status_en      : siteContent.edu_status_id)      : e.status;
  const institutionText = siteContent ? siteContent.edu_institution : e.institution;
  const degreeText      = siteContent ? (lang === 'en' ? siteContent.edu_degree_en      : siteContent.edu_degree_id)      : e.degree;
  const periodText      = siteContent ? siteContent.edu_period : e.period;
  const focusText       = siteContent ? (lang === 'en' ? siteContent.edu_focus_en       : siteContent.edu_focus_id)       : e.focus;
  
  const logoUrl         = siteContent?.edu_logo || '/img/unpas.png';
  const gpaText         = siteContent?.edu_gpa || '3.72';

  const rows = [
    { label: lang === 'en' ? 'Period'     : 'Periode',    value: periodText },
    { label: lang === 'en' ? 'Location'   : 'Lokasi',     value: e.location },
    { label: lang === 'en' ? 'Focus Area' : 'Fokus Studi',value: focusText  },
    { label: 'GPA / IPK',                                  value: `${gpaText} / 4.00` },
  ];

  return (
    <section id="education" ref={ref} className="section-paper">
      <div className="section-container">

        <div className="reveal section-masthead" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
          <span className="ed-kicker">02 — {e.label}</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8125rem', fontStyle: 'italic', color: '#8B8480' }}>Academic record</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '2.5rem 5rem', alignItems: 'start' }}>
          <div>
            <h2 className="reveal ed-subhead" style={{ marginBottom: '1.25rem' }}>{headingText}</h2>
            <p className="reveal reveal-delay-1 ed-body">{descriptionText}</p>
          </div>

          <div className="reveal reveal-delay-2">
            {/* Editorial record card */}
            <div style={{ border: '1px solid #D4CFC8', background: '#FDFCFA' }}>

              {/* Header bar — dark, dengan status */}
              <div style={{ background: '#1A1916', padding: '0.75rem 1.25rem' }}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#F7F4EF', margin: 0 }}>
                  Academic Record — {statusText}
                </p>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem' }}>

                {/* Logo + nama institusi + gelar */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  {/* Logo */}
                  <div style={{
                    width: 56, height: 56, flexShrink: 0,
                    border: '1px solid #D4CFC8', background: '#F7F4EF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    overflow: 'hidden',
                  }}>
                    <img
                      src={logoUrl}
                      alt={institutionText}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>

                  {/* Teks institusi */}
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700, color: '#1A1916', margin: '0 0 0.2rem' }}>
                      {institutionText}
                    </h3>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9375rem', fontStyle: 'italic', color: '#3A3530', margin: 0 }}>
                      {degreeText}
                    </p>
                  </div>
                </div>

                {/* Detail rows */}
                <div style={{ borderTop: '1px solid #D4CFC8', paddingTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                  {rows.map((row, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '7rem 1fr', gap: '0.75rem' }}>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8B8480', paddingTop: '0.125rem' }}>
                        {row.label}
                      </span>
                      <span className="ed-body" style={{
                        fontSize: '0.875rem',
                        borderLeft: '1px solid #D4CFC8',
                        paddingLeft: '0.75rem',
                        // highlight IPK
                        ...(row.label === 'GPA / IPK' ? { fontWeight: 700, color: '#8B1A1A', fontFamily: "'Playfair Display', serif" } : {}),
                      }}>
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
