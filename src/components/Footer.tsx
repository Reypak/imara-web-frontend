import { Link } from 'react-router-dom';
import { Camera, Globe, MessageCircle, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--cream)', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
      {/* Top strip */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '3rem 0' }}>
        <div className="container flex-between flex-wrap gap-3">
          <div>
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.5rem' }}>
              Open Monday – Saturday
            </p>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, color: 'var(--white)' }}>
              9 AM – 7 PM
            </p>
          </div>
          <Link to="/booking">
            <button className="btn btn-gold btn-lg">
              Book Appointment <ArrowUpRight size={16} />
            </button>
          </Link>
        </div>
      </div>

      {/* Main grid */}
      <div className="container" style={{ padding: '5rem 2rem 3rem' }}>
        <div className="r-grid-footer">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--white)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Imara
              </p>
              <p style={{ fontSize: '0.55rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Hair Studio
              </p>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, color: 'rgba(250,247,242,0.45)', maxWidth: '22ch', marginBottom: '2rem' }}>
              Kampala's premier sanctuary for luxury hair artistry — where tradition meets modern elegance.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {[
                { Icon: Camera, href: '#', label: 'Instagram' },
                { Icon: Globe, href: '#', label: 'Website' },
                { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: '2.25rem',
                    height: '2.25rem',
                    borderRadius: '50%',
                    border: '1px solid rgba(201,168,76,0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(250,247,242,0.45)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = 'var(--gold)';
                    el.style.borderColor = 'var(--gold)';
                    el.style.background = 'rgba(201,168,76,0.08)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = 'rgba(250,247,242,0.45)';
                    el.style.borderColor = 'rgba(201,168,76,0.25)';
                    el.style.background = 'transparent';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Studio links */}
          <div>
            <h4 style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '1.5rem' }}>
              Studio
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'Our Story', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Book Appointment', to: '/booking' },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    style={{ fontSize: '0.875rem', color: 'rgba(250,247,242,0.45)', transition: 'color 0.25s' }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--gold-light)')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(250,247,242,0.45)')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '1.5rem' }}>
              Artistry
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {['Signature Braiding', 'Luxury Treatments', 'Bridal Styling', 'Natural Hair Care', 'Dreadlocks'].map(s => (
                <li key={s} style={{ fontSize: '0.875rem', color: 'rgba(250,247,242,0.45)' }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '1.5rem' }}>
              Connect
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { Icon: MapPin, text: 'Kampala Road, City Center\nKampala, Uganda' },
                { Icon: Phone, text: '+256 700 000 000' },
                { Icon: Mail, text: 'info@imarahair.com' },
              ].map(({ Icon, text }) => (
                <li key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Icon size={15} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(250,247,242,0.5)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem 0' }}>
        <div className="container flex-between flex-wrap gap-2">
          <p style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.2)' }}>
            © {year} Imara Hair Studio. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a
                key={t}
                href="#"
                style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(250,247,242,0.2)', transition: 'color 0.25s' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--gold)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(250,247,242,0.2)')}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
