import React from 'react';
import { motion } from 'motion/react';

interface DrawLineProps {
  className?: string;
  delay?: number;
  duration?: number;
  direction?: 'horizontal' | 'vertical';
  color?: string;
  thickness?: number;
  style?: React.CSSProperties;
}

export const DrawLine = ({
  className = '',
  delay = 0.5,
  duration = 0.8,
  direction = 'horizontal',
  color = 'var(--color-border)',
  thickness = 1,
  style,
}: DrawLineProps) => {
  const isHorizontal = direction === 'horizontal';

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      style={{
        ...(isHorizontal
          ? { height: thickness, width: '100%' }
          : { width: thickness, height: '100%' }),
        ...style,
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ background: color }}
        initial={isHorizontal ? { scaleX: 0 } : { scaleY: 0 }}
        animate={isHorizontal ? { scaleX: 1 } : { scaleY: 1 }}
        transition={{
          delay,
          duration,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        {...(isHorizontal
          ? { style: { background: color, transformOrigin: 'left center' } }
          : { style: { background: color, transformOrigin: 'top center' } })}
      />
    </motion.div>
  );
};

interface DrawArrowProps {
  className?: string;
  delay?: number;
  duration?: number;
  color?: string;
}

export const DrawArrow = ({
  className = '',
  delay = 0.8,
  duration = 0.6,
  color = 'var(--color-accent)',
}: DrawArrowProps) => {
  return (
    <motion.svg
      viewBox="0 0 60 24"
      fill="none"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay - 0.1, duration: 0.3 }}
    >
      <motion.line
        x1="0" y1="12" x2="45" y2="12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay, duration, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <motion.polyline
        points="38,4 50,12 38,20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: delay + duration * 0.6, duration: duration * 0.5, ease: "easeOut" }}
      />
    </motion.svg>
  );
};
