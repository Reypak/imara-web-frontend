import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import logoLight from "../assets/svg/logo/logo-light.svg";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (p: string) => location.pathname === p;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.5s cubic-bezier(0.22,1,0.36,1)",
        padding: scrolled ? "0.75rem 0" : "1.5rem 0",
        background: scrolled ? "rgba(13,12,10,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
      }}
    >
      {/* Scroll progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <div className="container flex-between">
        {/* Logo */}
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img
            src={logoLight}
            alt="Imara Hair Studio"
            style={{
              height: scrolled ? "3rem" : "3.75rem",
              width: "auto",
              transition: "height 0.5s cubic-bezier(0.22,1,0.36,1)",
              filter: "drop-shadow(0 2px 8px rgba(201,168,76,0.25))",
            }}
          />

          <div style={{ lineHeight: 1.2 }}>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.5rem",
                fontWeight: 600,
                color: "var(--white)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Imara
            </div>
            <div
              style={{
                fontSize: "0.55rem",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "var(--gold)",
                fontWeight: 600,
              }}
            >
              Hair Studio
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="flex items-center gap-3 hide-mobile">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: isActive(link.path)
                  ? "var(--gold)"
                  : "rgba(255,255,255,0.75)",
                padding: "0.25rem 0",
                position: "relative",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => {
                if (!isActive(link.path))
                  (e.target as HTMLElement).style.color = "var(--white)";
              }}
              onMouseLeave={(e) => {
                if (!isActive(link.path))
                  (e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.75)";
              }}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.span
                  layoutId="nav-indicator"
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    left: 0,
                    right: 0,
                    height: "1px",
                    background: "var(--gold)",
                  }}
                />
              )}
            </Link>
          ))}
          <Link to="/booking">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-gold"
              style={{ marginLeft: "1.5rem" }}
            >
              Book Now
            </motion.button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="show-mobile flex-center"
          onClick={() => setOpen(!open)}
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            color: "var(--white)",
            border: "1px solid rgba(255,255,255,0.12)",
          }}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(13,12,10,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(201,168,76,0.15)",
              padding: "2rem 0 2.5rem",
            }}
          >
            <div className="container flex-col gap-2">
              {/* Mobile menu logo */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  paddingBottom: "1.5rem",
                  borderBottom: "1px solid rgba(201,168,76,0.12)",
                }}
              >
                <img
                  src={logoLight}
                  alt="Imara Hair Studio"
                  style={{
                    height: "4rem",
                    width: "auto",
                    filter: "drop-shadow(0 2px 10px rgba(201,168,76,0.3))",
                  }}
                />
              </div>
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.75rem",
                      fontWeight: 400,
                      color: isActive(link.path)
                        ? "var(--gold)"
                        : "var(--cream)",
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ marginTop: "1.5rem" }}
              >
                <Link to="/booking" onClick={() => setOpen(false)}>
                  <button className="btn btn-gold" style={{ width: "100%" }}>
                    Book Appointment
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
