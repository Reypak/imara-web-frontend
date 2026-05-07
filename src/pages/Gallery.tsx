import { motion } from 'framer-motion';
import { useState } from 'react';
import GlowButton from '../components/GlowButton';

const CATEGORIES = ['All', 'Braids', 'Treatments', 'Bridal', 'Natural'];

const galleryItems = [
  { src: '/assets/gallery-1.jpg', cat: 'Braids', label: 'Knotless Braids' },
  { src: '/assets/gallery-2.jpg', cat: 'Treatments', label: 'Luxury Treatment' },
  { src: '/assets/gallery-3.jpg', cat: 'Bridal', label: 'Bridal Styling' },
  { src: '/assets/gallery-4.jpg', cat: 'Natural', label: 'Natural Twist Out' },
  { src: '/assets/gallery-1.jpg', cat: 'Braids', label: 'Box Braids' },
  { src: '/assets/gallery-2.jpg', cat: 'Natural', label: 'Wash & Go' },
  { src: '/assets/gallery-3.jpg', cat: 'Braids', label: 'Cornrows' },
  { src: '/assets/gallery-4.jpg', cat: 'Treatments', label: 'Steam Treatment' },
  { src: '/assets/gallery-1.jpg', cat: 'Bridal', label: 'Wedding Updo' },
  { src: '/assets/gallery-2.jpg', cat: 'Braids', label: 'Ghana Weaving' },
  { src: '/assets/gallery-3.jpg', cat: 'Natural', label: 'Dreadlocks' },
  { src: '/assets/gallery-4.jpg', cat: 'Treatments', label: 'Deep Condition' },
];

const Gallery = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? galleryItems : galleryItems.filter(g => g.cat === active);

  return (
    <div style={{ background: 'var(--ink)', minHeight: '100vh', overflowX: 'hidden' }}>
      {/* HERO */}
      <section style={{ paddingTop: '10rem', paddingBottom: '3rem' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}>Portfolio</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 6.5rem)', fontWeight: 300, color: 'var(--white)', lineHeight: 1, marginBottom: '2.5rem' }}>
              Artistry <span className="gold-text">Gallery</span>
            </h1>
          </motion.div>
          {/* Filter pills */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setActive(cat)} style={{
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
                padding: '0.55rem 1.4rem', borderRadius: '999px',
                border: `1px solid ${active === cat ? 'var(--gold)' : 'rgba(255,255,255,0.12)'}`,
                background: active === cat ? 'var(--gold)' : 'transparent',
                color: active === cat ? 'var(--ink)' : 'rgba(255,255,255,0.55)',
                cursor: 'pointer', transition: 'all 0.3s',
              }}>{cat}</button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GRID */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="container">
          <div className="r-grid-gallery" style={{ gap: '1rem' }}>
            {filtered.map((item, i) => (
              <motion.div key={`${item.label}-${i}`}
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, ease: [0.22,1,0.36,1] }}
                style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '4px', position: 'relative', cursor: 'pointer' }}>
                <motion.img src={item.src} alt={item.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  whileHover={{ scale: 1.07 }} transition={{ duration: 0.7 }} />
                <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}
                  style={{ position: 'absolute', inset: 0, background: 'rgba(13,12,10,0.55)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--white)', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, border: '1px solid rgba(255,255,255,0.4)', padding: '0.45rem 1.1rem' }}>View Work</span>
                  <span style={{ color: 'var(--gold)', fontSize: '0.75rem', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>{item.label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ fontSize: '0.9rem', color: 'rgba(250,247,242,0.4)', marginBottom: '2rem' }}>Ready to get your own stunning look?</p>
            <GlowButton to="/booking" size="lg">Book Your Session</GlowButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
