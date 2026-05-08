import { motion } from "framer-motion";
import GlowButton from "../components/GlowButton";
import { logoLight } from "../assets/svg/Svgs";

const categories = [
  {
    name: "Braiding & Styling",
    description: "Expertly crafted braids and styles for every occasion.",
    icon: "✦",
    items: [
      { name: "Knotless Braids", price: "UGX 80k – 150k", note: "4–6 hrs" },
      { name: "Box Braids", price: "UGX 60k – 120k", note: "3–5 hrs" },
      { name: "Cornrows", price: "UGX 30k – 70k", note: "1–2 hrs" },
      { name: "Ghana Weaving", price: "UGX 50k – 90k", note: "2–3 hrs" },
    ],
  },
  {
    name: "Treatments & Care",
    description: "Restorative care for hair health and vitality.",
    icon: "◈",
    items: [
      { name: "Deep Conditioning", price: "UGX 40k", note: "45 mins" },
      { name: "Protein Treatment", price: "UGX 60k", note: "60 mins" },
      { name: "Steam Treatment", price: "UGX 30k", note: "30 mins" },
      { name: "Detox Wash", price: "UGX 25k", note: "30 mins" },
    ],
  },
  {
    name: "Natural Hair",
    description: "Specialised techniques for natural textures.",
    icon: "❋",
    items: [
      { name: "Flat Twist Out", price: "UGX 40k", note: "1 hr" },
      { name: "Wash & Go", price: "UGX 30k", note: "45 mins" },
      { name: "Dreadlocks Retouch", price: "UGX 70k", note: "2 hrs" },
      { name: "Interlocking", price: "UGX 100k", note: "3 hrs" },
    ],
  },
];

const Services = () => {
  return (
    <div style={{ background: "var(--cream)", overflowX: "hidden" }}>
      {/* ── PAGE HERO ── */}
      <section
        className="r-page-hero"
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          background: "var(--ink)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="container relative z-10 flex-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              style={{
                display: "block",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              Our Menu
            </span>
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(3rem, 8vw, 6.5rem)",
                fontWeight: 300,
                color: "var(--white)",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
              Premium Hair
              <br />
              <span className="gold-text">Services</span>
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(250,247,242,0.5)",
                maxWidth: "38ch",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              Every service is a bespoke experience, tailored to your hair's
              unique needs and your personal vision.
            </p>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="hide-mobile"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={logoLight}
              alt="Imara Hair Studio"
              style={{
                height: "17rem",
                width: "auto",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ── SERVICE CATEGORIES ── */}
      <section className="section-pad bg-cream">
        <div className="container">
          <div className="r-grid-services-page">
            {categories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  background: "var(--white)",
                  borderRadius: "4px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Card header */}
                <div
                  style={{
                    padding: "2.5rem 2.5rem 2rem",
                    borderBottom: "1px solid rgba(13,12,10,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2rem",
                      color: "var(--gold)",
                      display: "block",
                      marginBottom: "1rem",
                    }}
                  >
                    {cat.icon}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.6rem",
                      fontWeight: 500,
                      color: "var(--ink)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {cat.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--muted)",
                      fontStyle: "italic",
                    }}
                  >
                    {cat.description}
                  </p>
                </div>
                {/* Items */}
                <ul
                  style={{
                    padding: "1.5rem 2.5rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    flex: 1,
                  }}
                >
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem 0",
                        borderBottom:
                          i < cat.items.length - 1
                            ? "1px solid rgba(13,12,10,0.05)"
                            : "none",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 500,
                            color: "var(--ink)",
                            display: "block",
                          }}
                        >
                          {item.name}
                        </span>
                        <span
                          style={{
                            fontSize: "0.7rem",
                            color: "var(--muted)",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {item.note}
                        </span>
                      </div>
                      <span
                        className="gold-text"
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          textAlign: "right",
                          whiteSpace: "nowrap",
                          marginLeft: "1rem",
                        }}
                      >
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM CTA ── */}
      <section style={{ padding: "5rem 0", background: "var(--ink-2)" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="r-cta-box"
            style={{
              maxWidth: "48rem",
              margin: "0 auto",
              textAlign: "center",
              border: "1px solid rgba(201,168,76,0.18)",
              borderRadius: "4px",
              background: "rgba(201,168,76,0.04)",
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold)",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Special Events
            </span>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 400,
                color: "var(--white)",
                marginBottom: "1rem",
              }}
            >
              Need a Custom Service?
            </h4>
            <p
              style={{
                color: "rgba(250,247,242,0.5)",
                marginBottom: "2.5rem",
                maxWidth: "40ch",
                margin: "0 auto 2.5rem",
                lineHeight: 1.8,
                fontSize: "0.95rem",
              }}
            >
              We offer bespoke styling for weddings, photo shoots, and special
              events. Contact us for a personalised quote.
            </p>
            <GlowButton to="/booking" size="lg">
              Request Consultation
            </GlowButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
