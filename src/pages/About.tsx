import { motion } from 'framer-motion';
import GlowButton from '../components/GlowButton';
import { CheckCircle2 } from 'lucide-react';

const values = [
  { title: 'Artistry', desc: 'Every style is a work of art, crafted with precision and passion.' },
  { title: 'Integrity', desc: 'We use only the finest, ethically sourced products for your hair.' },
  { title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we do.' },
  { title: 'Community', desc: 'Rooted in Kampala, celebrating African beauty in all its forms.' },
];

const team = [
  { name: 'Amara Nakato', role: 'Founder & Lead Stylist', image: '/assets/team-1.jpg' },
  { name: 'Olivia Namusoke', role: 'Braiding Specialist', image: '/assets/team-2.jpg' },
  { name: 'Patricia Atim', role: 'Treatment Expert', image: '/assets/team-3.jpg' },
];

const About = () => {
  return (
    <div style={{ background: 'var(--cream)', overflowX: 'hidden' }}>

      {/* ── PAGE HERO ── */}
      <section style={{ position: 'relative', height: '70vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', paddingBottom: '5rem' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img src="/assets/about-salon.jpg" alt="Imara Hair Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(13,12,10,0.3) 0%, rgba(13,12,10,0.85) 100%)' }} />
        </div>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}>
            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Our Story
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.05 }}>
              Elegance<br />
              <span className="gold-text">in Kampala</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section-pad bg-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
            >
              <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}>
                Founded 2014
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--ink)', marginBottom: '2rem', lineHeight: 1.1 }}>
                Born from a Love<br />of Beautiful Hair
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '1.5rem' }}>
                Imara Hair Studio was founded with a simple vision: to provide premium, professional hair care that celebrates the unique beauty of every client. Located in the heart of Kampala, we have grown to become the city's premier destination for luxury styling and hair health.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.9, color: 'var(--muted)', marginBottom: '2.5rem' }}>
                Our team of expert stylists brings together years of international experience and deep knowledge of traditional African hair techniques. We use only the finest products to ensure your hair not only looks stunning but stays healthy and vibrant.
              </p>
              <GlowButton to="/booking">Book a Consultation</GlowButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}
              style={{ position: 'relative' }}
            >
              <div style={{ aspectRatio: '4/5', overflow: 'hidden', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }}>
                <img src="/assets/about-salon.jpg" alt="Imara Hair Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* floating accent */}
              <div style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', width: '10rem', padding: '1.5rem', background: 'var(--ink)', borderRadius: '4px', boxShadow: 'var(--shadow-lg)' }}>
                <p className="gold-text" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 400, lineHeight: 1 }}>5k+</p>
                <p style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.4)', marginTop: '0.4rem' }}>Happy Clients</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-pad bg-ink-1">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}>
              What We Stand For
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 400, color: 'var(--white)' }}>
              Our Core Values
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22,1,0.36,1] }}
                style={{ padding: '2.5rem 2rem', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px', transition: 'border-color 0.3s' }}
                whileHover={{ borderColor: 'rgba(201,168,76,0.4)' } as object}
              >
                <CheckCircle2 size={22} style={{ color: 'var(--gold)', marginBottom: '1.25rem' }} />
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 500, color: 'var(--white)', marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'rgba(250,247,242,0.5)', lineHeight: 1.8 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-pad bg-cream">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '1rem' }}>
              Meet the Artists
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 400, color: 'var(--ink)' }}>
              Our Expert Team
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, ease: [0.22,1,0.36,1] }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '4px', marginBottom: '1.5rem', position: 'relative' }}>
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,12,10,0.4) 0%, transparent 50%)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--ink)', marginBottom: '0.35rem' }}>{member.name}</h3>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
