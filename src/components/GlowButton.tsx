import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface GlowButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'gold' | 'outline' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
}

const GlowButton = ({
  children,
  to,
  onClick,
  className = '',
  variant = 'gold',
  size = 'md',
}: GlowButtonProps) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'lg' ? 'btn-lg' : size === 'sm' ? 'btn-sm' : '';

  const content = (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`btn ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  if (to) return <Link to={to}>{content}</Link>;
  return content;
};

export default GlowButton;
