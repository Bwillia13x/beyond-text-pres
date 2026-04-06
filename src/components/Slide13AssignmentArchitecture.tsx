import React from 'react';
import { motion } from 'motion/react';
import { PenTool, Code, BarChart3, Image, Video, Mic, Calculator, Boxes } from 'lucide-react';

export const Slide13AssignmentArchitecture = () => {
  const groups = [
    {
      label: "Analytical",
      items: [
        { icon: PenTool, label: "Writing" },
        { icon: BarChart3, label: "Data visualization" },
        { icon: Calculator, label: "Formal modeling" },
      ],
    },
    {
      label: "Executable",
      items: [
        { icon: Code, label: "Code" },
        { icon: Boxes, label: "Prototype building" },
      ],
    },
    {
      label: "Communicative",
      items: [
        { icon: Image, label: "Visual communication" },
        { icon: Mic, label: "Oral explanation" },
      ],
    },
    {
      label: "Demonstrative",
      items: [
        { icon: Video, label: "Video / demo" },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-4"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Assignment Architecture
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Design the task, not just the check
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-center text-lg md:text-xl text-[var(--color-text-secondary)] font-light tracking-[-0.01em] mb-12"
      >
        Different modes reveal different dimensions of learning.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.25 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5 w-full max-w-5xl mx-auto mb-6"
      >
        {groups.map((group, gIdx) => (
          <motion.div
            key={gIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 + gIdx * 0.1 }}
            className="card-glass rounded-2xl p-5 flex flex-col shadow-premium"
          >
            <span className="text-[var(--color-accent)] uppercase tracking-[0.15em] text-[10px] font-semibold mb-4 opacity-70">
              {group.label}
            </span>
            <div className="flex flex-col gap-3">
              {group.items.map((item, iIdx) => (
                <div key={iIdx} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-[var(--color-text-tertiary)]" />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text-secondary)]">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center text-xs md:text-sm text-[var(--color-text-tertiary)] font-light tracking-wide mb-10"
      >
        Use only the modes that best surface the target competence.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-extralight leading-snug tracking-[-0.01em]">
          The goal is not more media.<br/>
          <span className="text-gradient-accent font-light mt-3 inline-block">The goal is purposeful evidence diversity.</span>
        </p>
      </motion.div>
    </div>
  );
};
