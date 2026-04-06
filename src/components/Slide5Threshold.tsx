import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { TiltCard } from './TiltCard';

export const Slide5Threshold = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.25em] text-[11px] font-medium mb-10 block opacity-80">
          A Threshold Has Been Crossed
        </span>
        
        <AnimatedText
          text="Frontier AI can now produce or substantially mediate much of the artifact work that higher education has traditionally used as evidence of learning."
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] leading-[1.2] tracking-[-0.03em]"
          delay={0.15}
          staggerDelay={0.025}
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="grid md:grid-cols-2 gap-8 w-full max-w-3xl mt-16 pt-12 relative"
      >
        <div className="absolute top-0 left-[10%] right-[10%] h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-border), transparent)' }} />
        <TiltCard className="flex flex-col items-center gap-4 card-glass rounded-2xl p-6 shadow-premium" tiltStrength={5}>
          <ShieldCheck className="w-5 h-5 text-[var(--color-text-tertiary)] opacity-60" />
          <p className="text-sm text-[var(--color-text-secondary)] font-light max-w-[250px] leading-relaxed">
            This is <span className="text-[var(--color-text-primary)] font-medium">not a prevalence claim</span> about every student or every course taking this shortcut today.
          </p>
        </TiltCard>
        
        <TiltCard className="flex flex-col items-center gap-4 card-glass-accent rounded-2xl p-6 glow-accent" tiltStrength={5}>
          <Target className="w-5 h-5 text-[var(--color-accent)]" />
          <p className="text-sm text-[var(--color-text-secondary)] font-light max-w-[250px] leading-relaxed">
            It is a <span className="text-[var(--color-accent)] font-medium">threshold claim</span> about what is now practically possible right now.
          </p>
        </TiltCard>
      </motion.div>
    </div>
  );
};
