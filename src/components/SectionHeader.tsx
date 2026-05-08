import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) => {
  return (
    <div className={`section-header ${centered ? "centered" : ""}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className={`section-title ${light ? "light" : ""}`}
      >
        {title}
      </motion.h2>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`gold-line mt-2 ${centered ? "gold-line-center" : ""}`}
        style={{
          display: "block",
          transformOrigin: centered ? "center" : "left",
        }}
      />
    </div>
  );
};

export default SectionHeader;
