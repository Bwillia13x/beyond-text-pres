import React from 'react';
import { motion } from 'motion/react';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
  gradientColors?: string[];
  duration?: number;
  borderWidth?: number;
}

export const AnimatedBorder = ({
  children,
  className = '',
  borderRadius = '1rem',
  gradientColors = [
    'var(--color-accent-muted)',
    'transparent',
    'var(--color-accent)',
    'transparent',
    'var(--color-accent-muted)',
  ],
  duration = 4,
  borderWidth = 1,
}: AnimatedBorderProps) => {
  const gradient = `conic-gradient(from 0deg, ${gradientColors.join(', ')})`;

  return (
    <div className={`relative ${className}`} style={{ borderRadius }}>
      {/* Rotating gradient border */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ borderRadius, padding: borderWidth }}
      >
        <motion.div
          className="absolute"
          style={{
            inset: `-${borderWidth * 40}px`,
            background: gradient,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Inner content with solid bg to mask the border */}
      <div
        className="relative z-10 h-full"
        style={{
          borderRadius: `calc(${borderRadius} - ${borderWidth}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
