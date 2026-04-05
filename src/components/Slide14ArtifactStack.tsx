import React from 'react';
import { motion } from 'motion/react';
import { Frame, FileText, Wrench, Presentation, MessageSquare, RotateCcw } from 'lucide-react';

export const Slide14ArtifactStack = () => {
  const stackLayers = [
    { icon: Frame, label: "Framing artifact", description: "Problem definition, scope, rationale", color: "var(--color-tertiary)" },
    { icon: FileText, label: "Primary artifact", description: "Core analytical or creative output", color: "var(--color-text-primary)" },
    { icon: Wrench, label: "Implementation artifact", description: "Build, code, prototype, model", color: "var(--color-secondary)" },
    { icon: Presentation, label: "Communication artifact", description: "Infographic, slide, video, briefing", color: "var(--color-accent)" },
    { icon: MessageSquare, label: "Explanation / defense artifact", description: "Oral defense, Q&A, annotation", color: "var(--color-text-primary)" },
    { icon: RotateCcw, label: "Reflection / transfer artifact", description: "What transferred, what would change", color: "var(--color-tertiary)" },
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
          Evidence Architecture
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-[var(--color-text-primary)] tracking-tight">
          The multimodal artifact stack
        </h2>
      </motion.div>

      <div className="flex flex-col gap-3 w-full max-w-4xl mx-auto mb-12">
        {stackLayers.map((layer, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
            className="flex items-center gap-6 bg-[var(--color-surface-elevated)] border border-[var(--color-border)] rounded-xl p-5 hover:border-[var(--color-accent-muted)] transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl" style={{ backgroundColor: layer.color, opacity: 0.6 }} />
            <div className="w-10 h-10 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center shrink-0 ml-2">
              <layer.icon className="w-5 h-5" style={{ color: layer.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-medium text-[var(--color-text-primary)]">{layer.label}</h3>
              <p className="text-sm text-[var(--color-text-tertiary)] font-light">{layer.description}</p>
            </div>
            <span className="text-xs font-mono text-[var(--color-text-tertiary)] uppercase tracking-wider shrink-0 hidden md:block">
              Layer {idx + 1}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="text-lg text-[var(--color-text-secondary)] font-light leading-relaxed">
          Instead of one final essay or report, design a <span className="text-[var(--color-text-primary)] font-medium">purposeful stack of artifacts</span> — each revealing a different aspect of competence.
        </p>
      </motion.div>
    </div>
  );
};
