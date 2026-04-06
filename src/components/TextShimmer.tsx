import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface TextShimmerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export const TextShimmer = ({ 
  children, 
  className = '',
  delay = 0.5,
  duration = 1.8,
}: TextShimmerProps) => {
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasPlayed(true), (delay + duration) * 1000);
    return () => clearTimeout(timer);
  }, [delay, duration]);

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {!hasPlayed && (
        <motion.span
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            mixBlendMode: 'overlay',
          }}
          initial={{ backgroundPositionX: '-100%' }}
          animate={{ backgroundPositionX: '200%' }}
          transition={{ 
            delay,
            duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      )}
      <motion.span
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{
          delay,
          duration: duration * 0.8,
          ease: 'easeInOut',
        }}
      >
        <motion.span
          className="absolute inset-y-0 w-[40%]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)',
            filter: 'blur(4px)',
          }}
          initial={{ left: '-40%' }}
          animate={{ left: '140%' }}
          transition={{
            delay,
            duration,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        />
      </motion.span>
    </span>
  );
};
