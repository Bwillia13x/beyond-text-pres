import React from 'react';
import { motion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  staggerDelay?: number;
  once?: boolean;
}

export const AnimatedText = ({ 
  text, 
  className = '', 
  delay = 0, 
  as: Tag = 'h2',
  staggerDelay = 0.04,
}: AnimatedTextProps) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: staggerDelay, 
        delayChildren: delay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 120,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`flex flex-wrap ${Tag === 'h1' || Tag === 'h2' || Tag === 'h3' ? 'justify-center' : ''}`}
      aria-label={text}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className={`inline-block mr-[0.3em] ${className}`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface AnimatedLinesProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export const AnimatedLines = ({
  children,
  className = '',
  delay = 0,
  staggerDelay = 0.12,
}: AnimatedLinesProps) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const lineVariant = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 22,
        stiffness: 100,
        mass: 0.9,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {React.Children.map(children, (child, i) => (
        <motion.div key={i} variants={lineVariant}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};
