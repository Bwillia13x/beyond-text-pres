import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, BarChart3, Mic, XCircle } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { TiltCard } from './TiltCard';
import { AnimatedBorder } from './AnimatedBorder';

export const Slide16BeforeAfter = () => {
  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-12"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Redesign in Practice
        </span>
        <AnimatedText
          text="From text-only to artifact stack"
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]"
          delay={0.1}
          staggerDelay={0.05}
        />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-5xl mx-auto mb-12">
        {/* Before */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
        <TiltCard className="card-glass p-8 rounded-2xl flex flex-col relative shadow-premium h-full" tiltStrength={5}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)] font-medium mb-6">Before</span>
          <div className="flex-1 flex flex-col justify-center items-center text-center py-8">
            <FileText className="w-12 h-12 text-[var(--color-text-tertiary)] mb-6 opacity-50" />
            <p className="text-xl text-[var(--color-text-secondary)] font-light leading-relaxed">
              Write a 2,000-word policy analysis report on a public problem.
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
            <p className="text-xs text-[var(--color-text-tertiary)] font-light text-center">
              Single artifact · Single modality · Single inference
            </p>
          </div>
        </TiltCard>
        </motion.div>

        {/* After */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
        <AnimatedBorder borderRadius="1rem" duration={6}>
        <TiltCard className="card-glass-accent p-8 rounded-2xl flex flex-col relative glow-accent h-full" tiltStrength={5}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold mb-6">After</span>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-start gap-4 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]">
              <FileText className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium text-[var(--color-text-primary)]">800-word policy memo</span>
                <p className="text-xs text-[var(--color-text-tertiary)] font-light mt-1">Analytical reasoning</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]">
              <BarChart3 className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium text-[var(--color-text-primary)]">One infographic or data visualization</span>
                <p className="text-xs text-[var(--color-text-tertiary)] font-light mt-1">Visual communication</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]">
              <Mic className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium text-[var(--color-text-primary)]">2-minute oral briefing or demo video</span>
                <p className="text-xs text-[var(--color-text-tertiary)] font-light mt-1">Oral defensibility</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]">
              <XCircle className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium text-[var(--color-text-primary)]">One rejected alternative with justification</span>
                <p className="text-xs text-[var(--color-text-tertiary)] font-light mt-1">Judgment under trade-offs</p>
              </div>
            </div>
          </div>
        </TiltCard>
        </AnimatedBorder>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center text-xs tracking-[0.15em] uppercase text-[var(--color-text-tertiary)] font-medium mb-10 -mt-4"
      >
        One assignment, multiple evidence points
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
          The redesign makes <span className="text-[var(--color-text-primary)] font-medium">analysis, communication, judgment, and defense</span> more visible than a text-only submission can.
        </p>
      </motion.div>
    </div>
  );
};
