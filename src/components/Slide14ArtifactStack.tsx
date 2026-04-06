import React from 'react';
import { motion } from 'motion/react';
import { Frame, FileText, Wrench, MessageSquare } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import slideImage from '@/presentation_image_assets/pres2.webp';

export const Slide14ArtifactStack = () => {
  const stackLayers = [
    { icon: Frame, label: "Problem framing", description: "Problem definition, scope, and rationale", color: "var(--color-tertiary)" },
    { icon: FileText, label: "Primary artifact", description: "Core analytical or creative output", color: "var(--color-text-primary)" },
    { icon: Wrench, label: "Implementation or communication", description: "Code, prototype, infographic, briefing, visualization", color: "var(--color-secondary)" },
    { icon: MessageSquare, label: "Defense / reflection", description: "Oral defense, annotation, what transferred, what would change", color: "var(--color-accent)" },
  ];

  return (
    <div className="presentation-safe flex flex-col justify-center max-w-7xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-8"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Evidence Architecture
        </span>
        <AnimatedText
          text="The multimodal artifact stack"
          as="h2"
          className="text-4xl md:text-5xl lg:text-[3.75rem] font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]"
          delay={0.1}
          staggerDelay={0.05}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-base md:text-lg text-[var(--color-text-secondary)] font-light tracking-wide opacity-85"
        >
          Select the layers that best reveal the target competence.
        </motion.p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-10 w-full mb-8">
        {/* Left column: layer list */}
        <div className="flex flex-col gap-3 flex-1 md:max-w-[55%]">
          {stackLayers.map((layer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 14,
                mass: 0.8,
                delay: 0.2 + idx * 0.12,
              }}
              className="flex items-center gap-4 card-glass rounded-xl p-4 relative overflow-hidden shadow-premium"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ backgroundColor: layer.color, opacity: 0.6 }} />
              <div className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0 ml-2">
                <layer.icon className="w-5 h-5" style={{ color: layer.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg text-[var(--color-text-primary)] font-medium leading-snug">{layer.label}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] font-light opacity-85 leading-relaxed">{layer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right column: image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 flex items-center justify-center"
        >
          <img
            src={slideImage}
            alt="Multimodal artifact stack diagram"
            width={1536}
            height={1024}
            decoding="async"
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-xl md:text-2xl text-[var(--color-text-primary)] font-light leading-snug tracking-[-0.01em] opacity-95">
          <span className="text-gradient-accent font-light">Not every task needs every layer.</span>
          <br/>
          <span className="text-[var(--color-text-secondary)] text-lg font-light mt-2 inline-block">Design a selective stack that reveals different aspects of competence.</span>
        </p>
      </motion.div>
    </div>
  );
};
