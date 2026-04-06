import React from 'react';
import { motion } from 'motion/react';
import { Scale, Code, BookOpen, FlaskConical, Megaphone } from 'lucide-react';

export const Slide17Disciplines = () => {
  const disciplines = [
    {
      icon: Scale,
      field: "Policy / Social Science",
      stack: ["Policy memo", "Data visualization", "Oral briefing", "Rejected alternative"],
    },
    {
      icon: Code,
      field: "CS / Business / IS",
      stack: ["Working prototype", "Technical documentation", "Demo video", "Architecture diagram"],
    },
    {
      icon: BookOpen,
      field: "Humanities / Media",
      stack: ["Critical essay", "Annotated portfolio", "Audio commentary", "Peer critique"],
    },
    {
      icon: FlaskConical,
      field: "STEM / Lab",
      stack: ["Lab report", "Data notebook", "Method diagram", "Oral defense"],
    },
    {
      icon: Megaphone,
      field: "Entrepreneurship / Comms",
      stack: ["Pitch deck", "Financial model", "Prototype", "Live Q&A"],
    },
  ];

  return (
    <div className="flex flex-col justify-center max-w-7xl mx-auto h-full px-4 lg:px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-10"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          Portability
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]">
          Different disciplines, different stacks
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5 w-full">
        {disciplines.map((d, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            className="card-glass rounded-2xl p-5 flex flex-col hover:border-[var(--color-accent-muted)] transition-all duration-500 shadow-premium hover:shadow-deep"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
                <d.icon className="w-4 h-4 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] leading-tight">{d.field}</h3>
            </div>
            <div className="flex flex-col gap-2">
              {d.stack.map((item, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-50 shrink-0" />
                  <span className="text-xs text-[var(--color-text-secondary)] font-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
