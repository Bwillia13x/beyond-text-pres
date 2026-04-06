import React from 'react';
import { motion } from 'motion/react';
import { Pencil } from 'lucide-react';
import slideImage from '@/presentation_image_assets/pres8.webp';

export const Slide19ParticipantActivity = () => {
  return (
    <div className="presentation-safe flex flex-col justify-center max-w-7xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-8"
      >
        <div className="inline-flex items-center gap-3 card-glass-accent rounded-full px-4 py-1.5 mb-6 shadow-premium">
          <Pencil className="w-4 h-4 text-[var(--color-accent)]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-accent)] font-semibold">Workshop Activity</span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[3.75rem] font-extralight text-[var(--color-text-primary)] tracking-[-0.03em] leading-[1.04]">
          Try it: redesign one assignment<br/>as an artifact stack
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full">
        {/* Left column: workshop prompts */}
        <div className="flex flex-col gap-3 flex-1 md:max-w-[65%]">
          {[
            { number: "01", content: <>What is this task really trying to <span className="text-[var(--color-accent)] font-medium">reveal</span>?</> },
            { number: "02", content: <>Where would <span className="text-[var(--color-accent)] font-medium">oral defense or cross-representation</span> reveal more?</> },
            { number: "03", content: <>Where could AI serve as a <span className="text-[var(--color-accent)] font-medium">rehearsal layer</span> before human judgment?</> },
            { number: "04", content: <>What is the <span className="text-[var(--color-accent)] font-medium">smallest viable evidence stack</span> that makes competence visible?</> },
            { number: "05", content: <>What would the rubric actually <span className="text-[var(--color-accent)] font-medium">reward</span> in that redesigned stack?</> },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20, delay: 0.3 + idx * 0.12 }}
              className="flex items-start gap-5 card-glass rounded-xl p-5 shadow-premium cursor-default"
            >
              <span className="text-base font-mono text-[var(--color-accent)] opacity-50 mt-0.5 shrink-0">{p.number}</span>
              <p className="text-lg text-[var(--color-text-primary)] font-light leading-relaxed">{p.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Right column: support image */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.97, filter: 'blur(6px)' }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="hidden md:flex items-center justify-center flex-shrink-0 md:w-[30%]"
        >
          <img
            src={slideImage}
            alt="Workshop activity support diagram"
            width={1536}
            height={1024}
            decoding="async"
            className="w-full h-auto object-contain opacity-[0.88]"
          />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="text-center text-lg text-[var(--color-text-secondary)] font-light tracking-wide mt-6 opacity-82"
      >
        Pick one real assignment and design a smallest viable evidence stack.
      </motion.p>
    </div>
  );
};
