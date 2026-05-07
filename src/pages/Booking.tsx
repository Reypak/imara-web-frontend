import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', date: '', time: '', notes: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const steps = [
    { n: '01', title: 'Choose Service', desc: 'Select the service and your preferred date and time.' },
    { n: '02', title: 'Your Details', desc: 'Fill in your contact info so we can confirm your slot.' },
    { n: '03', title: 'Confirmation', desc: 'We\'ll call you within 2 hours to confirm the booking.' },
  ];

  const contactInfo = [
    { Icon: MapPin, label: 'Kampala Road, City Center\nKampala, Uganda' },
    { Icon: Phone, label: '+256 700 000 000' },
    { Icon: Mail, label: 'info@imarahair.com' },
    { Icon: Clock, label: 'Mon–Sat: 9 AM – 7 PM' },
  ];

  return (
    <div style={{ background: 'var(--ink)', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* HERO */}
      <section style={{ paddingTop: '9rem', paddingBottom: '4rem', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
            <span style={{ display: 'block', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>
              Appointments
            </span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300, color: 'var(--white)', lineHeight: 1 }}>
              Book Your<br /><span className="gold-text">Session</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={{ paddingBottom: '7rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }}>

            {/* LEFT: info */}
            <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.22,1,0.36,1] }}>
              {/* Steps */}
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--white)', marginBottom: '2rem' }}>
                  How It Works
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                  {steps.map((step, i) => (
                    <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1, flexShrink: 0, width: '2.5rem' }}>
                        {step.n}
                      </span>
                      <div>
                        <p style={{ fontWeight: 600, color: 'var(--white)', fontSize: '0.95rem', marginBottom: '0.25rem' }}>{step.title}</p>
                        <p style={{ fontSize: '0.875rem', color: 'rgba(250,247,242,0.45)', lineHeight: 1.7 }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '3rem' }} />

              {/* Contact */}
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--white)', marginBottom: '1.5rem' }}>
                Contact Us Directly
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contactInfo.map(({ Icon, label }, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.9rem' }}>
                    <Icon size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '0.875rem', color: 'rgba(250,247,242,0.5)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT: form */}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22,1,0.36,1] }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ padding: '4rem', border: '1px solid rgba(201,168,76,0.25)', borderRadius: '4px', background: 'rgba(201,168,76,0.05)', textAlign: 'center' }}
                >
                  <div style={{ width: '4rem', height: '4rem', borderRadius: '50%', background: 'rgba(201,168,76,0.15)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>
                    ✓
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 400, color: 'var(--white)', marginBottom: '1rem' }}>
                    Request Received!
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'rgba(250,247,242,0.5)', lineHeight: 1.8 }}>
                    Thank you, {formData.name}. We'll call you within 2 hours to confirm your appointment.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{ padding: '3rem', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '4px', background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--white)', marginBottom: '0.5rem' }}>
                    Your Details
                  </h2>

                  {/* Name */}
                  <div>
                    <label className="form-label">Full Name</label>
                    <input id="booking-name" type="text" required placeholder="e.g. Sarah Nakato" className="form-input"
                      value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {/* Phone */}
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input id="booking-phone" type="tel" required placeholder="+256 7xx xxx xxx" className="form-input"
                        value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="form-label">Email (optional)</label>
                      <input id="booking-email" type="email" placeholder="you@example.com" className="form-input"
                        value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="form-label">Service</label>
                    <select id="booking-service" required className="form-select"
                      value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}>
                      <option value="">Select a service</option>
                      <option value="braiding">Signature Braiding</option>
                      <option value="treatment">Luxury Treatment</option>
                      <option value="natural">Natural Hair Care</option>
                      <option value="bridal">Bridal Styling</option>
                      <option value="dreadlocks">Dreadlocks</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {/* Date */}
                    <div>
                      <label className="form-label">Preferred Date</label>
                      <input id="booking-date" type="date" required className="form-input"
                        value={formData.date} onChange={e => setFormData({ ...formData, date: e.target.value })} />
                    </div>
                    {/* Time */}
                    <div>
                      <label className="form-label">Preferred Time</label>
                      <input id="booking-time" type="time" required className="form-input"
                        value={formData.time} onChange={e => setFormData({ ...formData, time: e.target.value })} />
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="form-label">Additional Notes</label>
                    <textarea id="booking-notes" rows={3} placeholder="Any special requests or hair concerns..." className="form-input"
                      style={{ resize: 'vertical', fontFamily: 'var(--font-sans)' }}
                      value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn btn-gold btn-lg"
                    style={{ width: '100%', marginTop: '0.5rem' }}
                  >
                    Confirm Request
                  </motion.button>

                  <p style={{ fontSize: '0.72rem', color: 'rgba(250,247,242,0.3)', textAlign: 'center', lineHeight: 1.6 }}>
                    We recommend booking at least 24 hours in advance. For same-day, call us directly.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
