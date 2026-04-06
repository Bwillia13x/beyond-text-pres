import React from 'react';
import { motion } from 'motion/react';
import { FileText, Layers } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { TextShimmer } from './TextShimmer';
import { TiltCard } from './TiltCard';
import { AnimatedBorder } from './AnimatedBorder';
import { DrawArrow } from './DrawLine';

export const Slide11BeyondTextPivot = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <span className="text-[var(--color-secondary)] uppercase tracking-[0.3em] text-[11px] font-medium mb-12 block opacity-80">
          The Pivot
        </span>
        
        <AnimatedText
          text="Beyond text:"
          as="h2"
          className="text-5xl md:text-6xl lg:text-7xl font-extralight text-[var(--color-text-primary)] leading-[1.1] tracking-[-0.03em]"
          delay={0.2}
          staggerDelay={0.06}
        />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-16"
        >
          <TextShimmer delay={1} duration={2}>
            <span className="text-gradient-accent font-light text-5xl md:text-6xl lg:text-7xl mt-4 inline-block leading-[1.1] tracking-[-0.03em]">why one artifact is no longer enough</span>
          </TextShimmer>
        </motion.div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16 w-full max-w-4xl mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1"
        >
          <TiltCard className="card-glass p-8 rounded-2xl text-center shadow-premium h-full" tiltStrength={6}>
            <FileText className="w-8 h-8 text-[var(--color-text-tertiary)] mx-auto mb-4" />
            <h3 className="text-lg font-medium text-[var(--color-text-secondary)] mb-2">Text-Only Artifact</h3>
            <p className="text-sm text-[var(--color-text-tertiary)] font-light">Single polished submission</p>
          </TiltCard>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="shrink-0 w-16 md:w-20"
        >
          <DrawArrow className="w-full h-8 text-[var(--color-accent)] rotate-90 md:rotate-0" delay={1.2} duration={0.5} />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1"
        >
          <AnimatedBorder borderRadius="1rem" duration={6}>
            <TiltCard className="card-glass-accent p-8 rounded-2xl text-center glow-accent h-full" tiltStrength={6}>
              <Layers className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="text-lg font-medium text-[var(--color-text-primary)] mb-2">Richer Evidence Architecture</h3>
              <p className="text-sm text-[var(--color-text-secondary)] font-light">Multiple forms of demonstrated understanding</p>
            </TiltCard>
          </AnimatedBorder>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-3xl"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-extralight leading-snug tracking-[-0.01em]">
          When one polished artifact is no longer enough,<br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">we need better evidence design.</span>
        </p>
      </motion.div>
    </div>
  );
};
