import React from 'react';
import { motion } from 'motion/react';
import { PenTool, Code, BarChart3, Image, Video, Mic, Calculator, Boxes } from 'lucide-react';

export const Slide13AssignmentArchitecture = () => {
  const outputTypes = [
    { icon: PenTool, label: "Writing", color: "var(--color-text-primary)" },
    { icon: Code, label: "Code", color: "var(--color-text-primary)" },
    { icon: BarChart3, label: "Data visualization", color: "var(--color-text-primary)" },
    { icon: Image, label: "Visual communication", color: "var(--color-text-primary)" },
    { icon: Video, label: "Video / demo", color: "var(--color-text-primary)" },
    { icon: Mic, label: "Oral explanation", color: "var(--color-text-primary)" },
    { icon: Calculator, label: "Formal modeling", color: "var(--color-text-primary)" },
    { icon: Boxes, label: "Prototype building", color: "var(--color-text-primary)" },
  ];

  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-12"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          Assignment Architecture
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          Design the task, not just the check
        </h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 w-full max-w-5xl mx-auto mb-16"
      >
        {outputTypes.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
            className="bg-[var(--color-surface-elevated)] p-6 rounded-2xl border border-[var(--color-border)] flex flex-col items-center text-center gap-3 hover:border-[var(--color-accent-muted)] transition-colors duration-300"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
              <item.icon className="w-5 h-5 text-[var(--color-text-tertiary)]" />
            </div>
            <span className="text-sm font-medium text-[var(--color-text-secondary)]">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-2xl md:text-3xl text-[var(--color-text-primary)] font-light leading-snug">
          The goal is not more media.<br/>
          <span className="text-[var(--color-accent)] font-normal mt-3 inline-block">The goal is purposeful output diversity.</span>
        </p>
      </motion.div>
    </div>
  );
};
