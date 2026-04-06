import React from 'react';
import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { TextShimmer } from './TextShimmer';
import { AnimatedBorder } from './AnimatedBorder';
import slideImage from '@/presentation_image_assets/pres9.webp';

export const Slide21FinalTakeaway = () => {
  return (
    <div className="presentation-safe flex flex-col items-center justify-center max-w-5xl mx-auto h-full px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: [0.12, 0.28, 0.12],
          scale: [0.85, 1.15, 0.85],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(245,160,138,0.22) 0%, rgba(245,160,138,0.04) 50%, transparent 100%)' }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.04, 0.10, 0.04],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Infinity,
          delay: 4
        }}
        className="absolute top-[35%] left-[65%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[160px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(110,231,183,0.12) 0%, transparent 70%)' }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full relative z-10"
      >
        <span className="text-[var(--color-text-secondary)] uppercase tracking-[0.35em] text-[11px] font-medium mb-8 block opacity-64">
          Final Takeaway
        </span>

        <AnimatedText
          text="The goal is not more media."
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] leading-[1.15] tracking-[-0.03em]"
          delay={0.2}
          staggerDelay={0.06}
        />
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 mt-4"
        >
          <AnimatedBorder borderRadius="0.75rem" duration={8} borderWidth={1}>
            <div className="px-6 py-3 bg-[var(--color-surface)]" style={{ borderRadius: 'calc(0.75rem - 1px)' }}>
              <TextShimmer delay={1.5} duration={2.2}>
                <span className="text-gradient-accent font-light text-4xl md:text-5xl lg:text-6xl inline-block leading-[1.15] tracking-[-0.03em]">The goal is designed systems of evidence.</span>
              </TextShimmer>
            </div>
          </AnimatedBorder>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        className="w-20 h-px relative z-10 mb-5"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-4xl relative z-10 mb-4"
      >
        <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] font-light leading-relaxed tracking-wide opacity-94">
          The next frontier is not multimodal submission. <span className="text-[var(--color-text-primary)] font-normal">It is multimodal evidence design.</span>
        </p>
      </motion.div>

      {/* Closing visual — quiet metaphor in lower zone */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10"
      >
        <img
          src={slideImage}
          alt="Evidence design closing visual"
          width={1536}
          height={1024}
          decoding="async"
          className="max-w-[680px] w-full h-auto object-contain opacity-[0.84]"
        />
      </motion.div>
    </div>
  );
};
