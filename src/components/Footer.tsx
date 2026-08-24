import React from 'react';
import { useLang } from '../context/LanguageContext';

const navIds = ['home','about','education','experience','skills','projects','certificates','contact'];
const socials = [
  { label:'GitHub', href:'https://github.com/Mohzu', code:'GH' },
  { label:'LinkedIn', href:'https://www.linkedin.com/in/moch-zuhdi-maulana-nabilah-b3219229b', code:'LN' },
  { label:'Instagram', href:'https://instagram.com/m.zuhdimaulana', code:'IG' },
  { label:'Email', href:'mailto:mochzuhdi04@gmail.com', code:'@' },
];

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  const labels = [t.nav.home, t.nav.about, t.nav.education, t.nav.experience, t.nav.skills, t.nav.projects, t.nav.certificates, t.nav.contact];

  return (
    <footer style={{ background:'#1A1916', borderTop:'3px solid #1A1916', padding: '4rem 0 2rem' }}>
      <div className="section-container">
        
        {/* Top thicker line */}
        <div style={{ borderBottom:'1px solid rgba(247,244,239,0.1)', paddingBottom:'3rem', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'3rem' }}>

          {/* Left Column: Brand Impressum */}
          <div>
            <p style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.625rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'#8B8480', marginBottom:'0.75rem', margin:'0 0 0.75rem' }}>Impressum</p>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontSize:'1.5rem', fontWeight:900, color:'#F7F4EF', letterSpacing:'-0.02em', marginBottom:'0.5rem', marginTop:0 }}>Moch Zuhdi</h2>
            <p style={{ fontFamily:"'Playfair Display', serif", fontSize:'0.875rem', fontStyle:'italic', color:'rgba(247,244,239,0.6)', marginBottom:'1.25rem', marginTop:0 }}>{f.tagline}</p>
            <p style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.8rem', lineHeight:1.65, color:'rgba(247,244,239,0.4)', marginBottom:'1.5rem', marginTop:0 }}>{f.description}</p>
            
            <div style={{ display:'flex', gap:'0.5rem' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width:34, height:34, border:'1px solid rgba(247,244,239,0.15)', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(247,244,239,0.4)', textDecoration:'none', fontSize:'0.7rem', fontWeight:700, transition:'all 200ms' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.color='#F7F4EF'; el.style.borderColor='#F7F4EF'; el.style.background='rgba(247,244,239,0.05)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.color='rgba(247,244,239,0.4)'; el.style.borderColor='rgba(247,244,239,0.15)'; el.style.background='transparent'; }}
                >{s.code}</a>
              ))}
            </div>
          </div>

          {/* Center Column: Index */}
          <div>
            <h3 style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.625rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(247,244,239,0.4)', marginBottom:'1.25rem', marginTop:0 }}>Index</h3>
            <ul style={{ listStyle:'none', margin:0, padding:0, display:'flex', flexDirection:'column', gap:'0.625rem' }}>
              {navIds.map((id, i) => (
                <li key={id}>
                  <button onClick={() => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })}
                    style={{ background:'none', border:'none', cursor:'pointer', fontSize:'0.8125rem', color:'rgba(247,244,239,0.5)', padding:0, fontFamily:'inherit', transition:'color 200ms', textAlign:'left' }}
                    onMouseEnter={e => e.currentTarget.style.color='#F7F4EF'}
                    onMouseLeave={e => e.currentTarget.style.color='rgba(247,244,239,0.5)'}
                  >
                    {String(i + 1).padStart(2, '0')} — {labels[i]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Correspondence Address */}
          <div>
            <h3 style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.625rem', fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(247,244,239,0.4)', marginBottom:'1.25rem', marginTop:0 }}>Correspondence</h3>
            <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
              <div>
                <p style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.5625rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(247,244,239,0.3)', margin:'0 0 0.25rem' }}>Editorial Desk</p>
                <a href="mailto:mochzuhdi04@gmail.com" style={{ fontFamily:"'Playfair Display', serif", fontSize:'0.9375rem', fontWeight:700, color:'rgba(247,244,239,0.6)', textDecoration:'none', transition:'color 200ms' }}
                  onMouseEnter={e => e.currentTarget.style.color='#F7F4EF'}
                  onMouseLeave={e => e.currentTarget.style.color='rgba(247,244,239,0.6)'}
                >mochzuhdi04@gmail.com</a>
              </div>
              <div>
                <p style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.5625rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(247,244,239,0.3)', margin:'0 0 0.25rem' }}>HQ Location</p>
                <p style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.8125rem', color:'rgba(247,244,239,0.5)', margin:0 }}>{f.location}</p>
              </div>
              <div>
                <p style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.5625rem', fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(247,244,239,0.3)', margin:'0 0 0.25rem' }}>Status</p>
                <p style={{ display:'flex', alignItems:'center', gap:'0.5rem', fontFamily:"'Inter', sans-serif", fontSize:'0.8125rem', color:'#8B1A1A', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', margin:0 }}>
                  <span style={{ width:6, height:6, borderRadius:'50%', background:'#8B1A1A', display:'inline-block' }} />
                  {f.status}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Colophon */}
        <div style={{ paddingTop:'2rem', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'1rem' }}>
          <p style={{ fontFamily:"'Inter', sans-serif", fontSize:'0.75rem', color:'rgba(247,244,239,0.25)', margin:0 }}>
            © {new Date().getFullYear()} Moch Zuhdi Maulana Nabilah. {f.copyright}
          </p>
          <button onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
            style={{ display:'flex', alignItems:'center', gap:'0.25rem', background:'none', border:'none', cursor:'pointer', fontSize:'0.75rem', color:'rgba(247,244,239,0.4)', fontFamily:"'Inter', sans-serif", fontWeight:600, padding:0, transition:'color 200ms' }}
            onMouseEnter={e => e.currentTarget.style.color='#F7F4EF'}
            onMouseLeave={e => e.currentTarget.style.color='rgba(247,244,239,0.4)'}
          >
            TOP ↑
          </button>
        </div>

      </div>
    </footer>
  );
}