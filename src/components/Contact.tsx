import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

const useReveal = (ref: React.RefObject<HTMLElement | null>) => {
  useEffect(() => {
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.06 });
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [ref]);
};

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', subject:'', message:'' });
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle');
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const { t } = useLang();
  const { addInboxMessage } = useData();
  const c = t.contact;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setStatus('sending');
    try {
      // Add to local data context inbox first
      addInboxMessage(form);

      const res = await fetch('https://formspree.io/f/xpwrvzpo', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(form) });
      if (res.ok) { setStatus('success'); setForm({ name:'', email:'', subject:'', message:'' }); setTimeout(() => setStatus('idle'), 5000); }
      else { setStatus('error'); setTimeout(() => setStatus('idle'), 5000); }
    } catch { setStatus('error'); setTimeout(() => setStatus('idle'), 5000); }
  };

  const inp: React.CSSProperties = {
    width:'100%', padding:'0.75rem 1rem', background:'#FDFCFA', border:'1px solid #D4CFC8', borderRadius:0, fontSize:'0.875rem', fontFamily:'inherit', color:'#1A1916', outline:'none', transition:'border-color 200ms, box-shadow 200ms', boxSizing:'border-box'
  };
  const focus = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => { e.target.style.borderColor='#1A1916'; e.target.style.boxShadow='3px 3px 0 rgba(26,25,22,0.1)'; };
  const blur  = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => { e.target.style.borderColor='#D4CFC8'; e.target.style.boxShadow='none'; };

  return (
    <section id="contact" ref={ref} className="section-white">
      <div style={{ maxWidth:1160, margin:'0 auto', padding:'0 clamp(1.25rem,5vw,3rem)' }}>

        <div className="reveal section-masthead" style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap:'1rem', flexWrap:'wrap' }}>
          <span className="ed-kicker">07 — {c.label}</span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8125rem', fontStyle: 'italic', color: '#8B8480' }}>Correspondence desk</span>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap:'3rem 5rem', alignItems:'start' }}>

          {/* Left Side */}
          <div>
            <h2 className="reveal ed-subhead" style={{ marginBottom:'1.25rem' }}>{c.heading}</h2>
            <p className="reveal reveal-delay-1 ed-body" style={{ marginBottom:'2.5rem' }}>{c.description}</p>

            <div className="reveal reveal-delay-2" style={{ display:'flex', flexDirection:'column', gap:'0.75rem', marginBottom:'2rem' }}>
              {[
                { label:c.email_label, value:'mochzuhdi04@gmail.com', href:'mailto:mochzuhdi04@gmail.com' },
                { label:c.location_label, value:'Bandung, Jawa Barat', href:'#' },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ display:'flex', flexDirection:'column', padding:'1.25rem', background:'#F7F4EF', border:'1px solid #D4CFC8', textDecoration:'none', transition:'all 200ms' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.boxShadow = '4px 4px 0 #1A1916'; el.style.transform = 'translate(-2px,-2px)'; }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.boxShadow = 'none'; el.style.transform = 'translate(0,0)'; }}
                >
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize:'0.625rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8B1A1A', marginBottom:'0.25rem' }}>{item.label}</span>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize:'1.125rem', fontWeight:700, color:'#1A1916' }}>{item.value}</span>
                </a>
              ))}
            </div>

            <div className="reveal reveal-delay-3">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize:'0.625rem', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'#8B8480', marginBottom:'0.875rem' }}>{c.find_on}</p>
              <div style={{ display:'flex', gap:'0.5rem' }}>
                {[
                  { label:'GitHub', href:'https://github.com/Mohzu', code:'GH' },
                  { label:'LinkedIn', href:'https://www.linkedin.com/in/moch-zuhdi-maulana-nabilah-b3219229b', code:'LN' },
                  { label:'Instagram', href:'https://instagram.com/m.zuhdimaulana', code:'IG' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ width:40, height:40, border:'1px solid #D4CFC8', display:'flex', alignItems:'center', justifyContent:'center', color:'#1A1916', textDecoration:'none', fontSize:'0.75rem', fontWeight:700, transition:'all 200ms', background:'#FDFCFA' }}
                    onMouseEnter={e => { const el = e.currentTarget; el.style.borderColor='#1A1916'; el.style.background='#1A1916'; el.style.color='#F7F4EF'; }}
                    onMouseLeave={e => { const el = e.currentTarget; el.style.borderColor='#D4CFC8'; el.style.background='#FDFCFA'; el.style.color='#1A1916'; }}
                  >{s.code}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="reveal reveal-delay-2">
            <div style={{ background:'#F7F4EF', border:'1px solid #D4CFC8', padding:'2rem' }}>
              <h3 style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:'1.25rem', color:'#1A1916', marginBottom:'1.5rem', marginTop:0 }}>{c.send_heading}</h3>

              {status === 'success' && <div style={{ padding:'0.75rem 1rem', background:'#EEF5EE', border:'1px solid #B8D8B8', color:'#3D5A3D', marginBottom:'1.25rem', fontSize:'0.8125rem', fontWeight:600 }}>✓ {c.success}</div>}
              {status === 'error' && <div style={{ padding:'0.75rem 1rem', background:'#FEF2F2', border:'1px solid #FECACA', color:'#B91C1C', marginBottom:'1.25rem', fontSize:'0.8125rem', fontWeight:600 }}>✗ {c.error}</div>}

              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                  <div>
                    <label htmlFor="name" style={{ display:'block', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'#8B8480', marginBottom:'0.375rem' }}>{c.name_label}</label>
                    <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder={c.name_placeholder} style={inp} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ display:'block', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'#8B8480', marginBottom:'0.375rem' }}>{c.email_field_label}</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder={c.email_placeholder} style={inp} onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" style={{ display:'block', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'#8B8480', marginBottom:'0.375rem' }}>{c.subject_label}</label>
                  <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required placeholder={c.subject_placeholder} style={inp} onFocus={focus} onBlur={blur} />
                </div>
                <div>
                  <label htmlFor="message" style={{ display:'block', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.06em', textTransform:'uppercase', color:'#8B8480', marginBottom:'0.375rem' }}>{c.message_label}</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required placeholder={c.message_placeholder} style={{ ...inp, resize:'none' }} onFocus={focus} onBlur={blur} />
                </div>
                <button type="submit" disabled={status==='sending'} className="btn-primary" style={{ width:'100%', justifyContent:'center', opacity:status==='sending'?0.65:1 }}>
                  {status === 'sending' ? c.sending : `${c.send_btn} →`}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}