import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Star,
  Quote,
  ChevronDown,
  Sparkles,
  Award,
  Clock,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import GlowButton from "../components/GlowButton";

const services = [
  {
    title: "Signature Braiding",
    description:
      "Intricate, long-lasting braids tailored to your unique style and texture.",
    image: "/assets/braids.jpg",
    price: "From UGX 50k",
    category: "Styling",
  },
  {
    title: "Luxury Treatments",
    description: "Deep conditioning and restoration for vibrant, healthy hair.",
    image: "/assets/treatment.jpg",
    price: "From UGX 30k",
    category: "Care",
  },
  {
    title: "Bridal Styling",
    description: "Elegant, bespoke hairstyles for your most unforgettable day.",
    image: "/assets/bridal.jpg",
    price: "Consultation",
    category: "Special",
  },
  {
    title: "Natural Hair Care",
    description: "Expert care and styling dedicated to natural hair textures.",
    image: "/assets/natural.jpg",
    price: "From UGX 25k",
    category: "Care",
  },
];

const testimonials = [
  {
    name: "Sarah Namubiru",
    role: "Regular Client",
    text: "The best hair experience I've had in Kampala. The attention to detail and the atmosphere are simply unmatched!",
    stars: 5,
  },
  {
    name: "Grace Atim",
    role: "Fashion Model",
    text: "I love my braids! They've lasted so long and I get compliments everywhere I go. Truly a gold standard studio.",
    stars: 5,
  },
  {
    name: "Doreen Mutesi",
    role: "Entrepreneur",
    text: "Imara Hair Studio is my sanctuary. My hair has never been healthier since I started their luxury treatments.",
    stars: 5,
  },
];

const stats = [
  { icon: Award, value: "10+", label: "Years of Excellence" },
  { icon: Users, value: "2000+", label: "Happy Clients" },
  { icon: Sparkles, value: "20+", label: "Expert Stylists" },
  { icon: Clock, value: "7 Days", label: "A Week" },
];

const galleryImages = [
  "/assets/braids.jpg",
  "/assets/treatment.jpg",
  "/assets/bridal.jpg",
  "/assets/natural.jpg",
];

const Home = () => {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div style={{ background: "var(--cream)", overflowX: "hidden" }}>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Parallax BG */}
        <motion.div
          style={{ y: heroY, position: "absolute", inset: 0, zIndex: 0 }}
        >
          <img
            src="/assets/hero-bg.jpg"
            alt="Imara Hair Studio"
            style={{ width: "100%", height: "115%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(13,12,10,0.55) 0%, rgba(13,12,10,0.8) 40%, rgba(13,12,10,0.3) 100%)",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="container relative z-10 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.35em" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                display: "inline-block",
                fontSize: "0.65rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.35em",
                color: "var(--gold)",
                marginBottom: "1.5rem",
              }}
            >
              Elegance in Every Strand
            </motion.span>

            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 300,
                lineHeight: 0.88,
                marginBottom: "2rem",
                color: "var(--white)",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(5rem, 16vw, 14rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                IMARA
              </span>
              <span
                className="text-shimmer"
                style={{
                  display: "block",
                  fontSize: "clamp(2rem, 6vw, 5rem)",
                  letterSpacing: "0.3em",
                  fontWeight: 200,
                  fontFamily: "var(--font-sans)",
                }}
              >
                HAIR STUDIO
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
                color: "rgba(255, 255, 255, 1)",
                maxWidth: "36rem",
                margin: "0 auto 3rem",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Experience world-class hair care and styling in the heart of
              Kampala. Modern techniques, traditional expertise, and a touch of
              gold.
            </p>

            <div className="flex-center flex-wrap gap-2">
              <GlowButton to="/booking" size="lg">
                Book Appointment <ArrowRight size={16} />
              </GlowButton>
              <GlowButton to="/services" variant="outline-white" size="lg">
                Explore Services
              </GlowButton>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            Scroll
          </span>
          <div className="bounce-y" style={{ color: "var(--gold)" }}>
            <ChevronDown size={18} />
          </div>
        </motion.div>
      </section>

      {/* ── STATS STRIP ── */}
      <section
        style={{
          background: "var(--ink)",
          padding: "3.5rem 0",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="container">
          <div className="r-grid-stats">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={i < 3 ? "r-stat-border" : ""}
                style={{ textAlign: "center", padding: "1.5rem" }}
              >
                <Icon
                  size={30}
                  style={{ color: "var(--gold)", margin: "0 auto 0.75rem" }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "3.25rem",
                    fontWeight: 400,
                    color: "var(--white)",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </p>
                <p
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(250,247,242,0.35)",
                    marginTop: "0.4rem",
                  }}
                >
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section-pad bg-cream">
        <div className="container">
          <SectionHeader
            subtitle="Our Expertise"
            title="Curated Hair Services"
          />

          <div className="r-grid-services-home">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "var(--white)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  transition: "all 0.5s",
                  cursor: "default",
                  position: "relative",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 48px rgba(0,0,0,0.14)",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    aspectRatio: "4/5",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <motion.img
                    src={service.image}
                    alt={service.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 50%, rgba(13,12,10,0.4) 100%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(8px)",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "0.3rem 0.7rem",
                      color: "var(--ink)",
                    }}
                  >
                    {service.category}
                  </span>
                </div>
                {/* Body */}
                <div style={{ padding: "1.75rem" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.4rem",
                      fontWeight: 500,
                      marginBottom: "0.6rem",
                      color: "var(--ink)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {service.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: "0.85rem",
                        color: "var(--gold-dark)",
                      }}
                    >
                      {service.price}
                    </span>
                    <Link
                      to="/services"
                      style={{
                        color: "var(--gold)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        transition: "gap 0.3s",
                      }}
                    >
                      View <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link
              to="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--ink)",
                borderBottom: "1px solid var(--gold)",
                paddingBottom: "0.25rem",
                transition: "all 0.3s",
              }}
            >
              Discover All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE / ABOUT STRIP ── */}
      <section className="section-pad bg-ink-1">
        <div className="container">
          <div className="r-grid-two-col">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative" }}
            >
              <div className="decoration-corner tl" />
              <div
                style={{
                  aspectRatio: "1/1",
                  overflow: "hidden",
                  borderRadius: "2px",
                }}
              >
                <img
                  src="/assets/treatment.jpg"
                  alt="Studio Experience"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              {/* Floating badge */}
              <div
                className="r-float-badge"
                style={{
                  position: "absolute",
                  bottom: "-2rem",
                  right: "-2rem",
                  width: "13rem",
                  padding: "1.75rem",
                  background: "rgba(13,12,10,0.9)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(201,168,76,0.2)",
                  borderRadius: "2px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.75rem",
                    fontWeight: 300,
                    lineHeight: 1,
                  }}
                  className="gold-text"
                >
                  10+
                </p>
                <p
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(250,247,242,0.45)",
                    marginTop: "0.5rem",
                  }}
                >
                  Years of Excellence in Hair Styling
                </p>
              </div>
              <div className="decoration-corner br" />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label">The Imara Standard</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  fontWeight: 400,
                  color: "var(--white)",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Beyond a Salon,
                <br />
                <span className="gold-text">A Sanctuary.</span>
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: 1.85,
                  color: "rgba(250,247,242,0.6)",
                  marginBottom: "2.5rem",
                  fontWeight: 300,
                }}
              >
                We believe your hair is your crown. Our studio offers more than
                just a service; we provide a transformative experience that
                combines modern artistry with traditional care.
              </p>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  marginBottom: "3rem",
                }}
              >
                {[
                  "Premium organic hair products",
                  "Expert stylists with global training",
                  "Private consultation rooms",
                  "Signature gold-infused treatments",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "var(--gold)",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "rgba(250,247,242,0.7)",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <GlowButton to="/about" variant="outline">
                Learn Our Story
              </GlowButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section
        className="section-pad bg-cream-2"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {/* Ghost text */}
        <div
          style={{
            position: "absolute",
            top: "43%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(8rem, 22vw, 20rem)",
            fontWeight: 700,
            color: "rgba(13,12,10,0.025)",
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          IMARA
        </div>
        <div className="container relative z-10">
          <SectionHeader
            subtitle="Voices of Elegance"
            title="What Our Clients Say"
          />
          <div className="r-grid-testimonials">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "var(--white)",
                  padding: "2.5rem",
                  borderRadius: "8px",
                  boxShadow: "0 10px 40px -10px rgba(13,12,10,0.06)",
                  position: "relative",
                  transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
                  border: "1px solid rgba(201,168,76,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  zIndex: 1,
                  borderTop: "3px solid transparent",
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 24px 48px -12px rgba(201,168,76,0.2)",
                  borderColor: "rgba(201,168,76,0.3)",
                  borderTopColor: "var(--gold)",
                }}
              >
                {/* Background Decor */}
                <Quote
                  size={140}
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    color: "var(--gold)",
                    opacity: 0.04,
                    transform: "rotate(10deg)",
                    zIndex: -1,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "3.25rem",
                      height: "3.25rem",
                      borderRadius: "50%",
                      background: "rgba(201,168,76,0.08)",
                      color: "var(--gold-dark)",
                    }}
                  >
                    <Quote size={20} style={{ fill: "currentColor" }} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "4px",
                      paddingTop: "0.5rem",
                    }}
                  >
                    {Array(t.stars)
                      .fill(0)
                      .map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          style={{ fill: "var(--gold)", color: "var(--gold)" }}
                        />
                      ))}
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.85,
                    color: "var(--ink)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    flex: 1,
                    marginBottom: "1rem",
                  }}
                >
                  "{t.text}"
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(13,12,10,0.06)",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "50%",
                      background: "var(--gold-grad)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-serif)",
                      fontWeight: 600,
                      color: "var(--ink)",
                      fontSize: "1.25rem",
                      boxShadow: "0 4px 12px rgba(201,168,76,0.3)",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 600,
                        color: "var(--ink)",
                        fontSize: "1.1rem",
                        letterSpacing: "0.02em",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {t.name}
                    </p>
                    <p
                      style={{
                        fontSize: "0.6rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        fontWeight: 400,
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY TEASER ── */}
      <section className="section-pad bg-white">
        <div className="container">
          <div className="r-row-between" style={{ marginBottom: "3rem" }}>
            <div>
              <span className="section-label">Visual Inspiration</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 400,
                  color: "var(--ink)",
                }}
              >
                Our Artistry
              </h2>
            </div>
            <GlowButton to="/gallery" variant="outline">
              Full Gallery
            </GlowButton>
          </div>

          <div className="r-gallery-accordion">
            {galleryImages.map((src, i) => (
              <motion.div
                key={i}
                style={{
                  flex: 1,
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                whileHover={{ flex: 1.6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.img
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(13,12,10,0.45)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--white)",
                      fontSize: "0.65rem",
                      fontWeight: 600,
                      letterSpacing: "0.3em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(255,255,255,0.4)",
                      padding: "0.5rem 1.25rem",
                    }}
                  >
                    View Work
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          position: "relative",
          padding: "8rem 0",
          background: "var(--ink)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="/assets/bridal.jpg"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 0.18,
              filter: "grayscale(1)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
            }}
          />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="section-label"
              style={{ display: "block", marginBottom: "1.5rem" }}
            >
              Ready for a Transformation?
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 8vw, 7rem)",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1,
                marginBottom: "2rem",
              }}
            >
              Experience the
              <br />
              <span className="text-shimmer">Imara Touch</span>
            </h2>
            <p
              style={{
                color: "rgba(250,247,242,0.5)",
                fontSize: "1.05rem",
                maxWidth: "32rem",
                margin: "0 auto 3.5rem",
                fontWeight: 300,
                lineHeight: 1.8,
              }}
            >
              Elevate your style with Kampala's premier hair studio. Book your
              personalized consultation today.
            </p>
            <GlowButton to="/booking" size="lg">
              Secure Your Appointment <ArrowRight size={16} />
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
