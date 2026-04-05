import React from 'react';
import { motion } from 'motion/react';
import { Maximize2, Search } from 'lucide-react';

export const Slide10VerificationParadox = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto h-full px-8 relative z-10 text-center w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full mb-16"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-widest text-xs font-semibold mb-4 block">
          The Core Tension
        </span>
        <h2 className="text-5xl md:text-6xl font-light text-[var(--color-text-primary)] tracking-tight">
          The verification paradox
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24 w-full mb-20 relative">
        {/* Leverage / Capability */}
        <motion.div 
          initial={{ opacity: 0, x: -30, y: 30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-6 z-10 w-full max-w-[250px]"
        >
          <div className="w-24 h-24 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center shadow-lg relative overflow-hidden group">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-[var(--color-accent-subtle)] opacity-50"
            />
            <Maximize2 className="w-10 h-10 text-[var(--color-text-primary)] relative z-10" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium text-[var(--color-text-primary)] mb-2">Capability</h3>
            <p className="text-[var(--color-text-secondary)] font-light">Rapidly expanding</p>
          </div>
        </motion.div>

        {/* The X Factor / Cross */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] z-0 text-6xl font-extralight text-[var(--color-border)] opacity-30 select-none"
        >
          X
        </motion.div>

        {/* Auditability */}
        <motion.div 
          initial={{ opacity: 0, x: 30, y: -30 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-6 z-10 w-full max-w-[250px]"
        >
          <div className="w-24 h-24 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] flex items-center justify-center shadow-lg">
            <Search className="w-8 h-8 text-[var(--color-text-tertiary)]" />
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-medium text-[var(--color-text-secondary)] mb-2">Auditability</h3>
            <p className="text-[var(--color-text-tertiary)] font-light">Weakening context</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="max-w-4xl mx-auto"
      >
        <p className="text-3xl md:text-4xl text-[var(--color-text-primary)] font-light leading-snug">
          Capability expands fastest <br/>
          <span className="text-[var(--color-accent)] font-normal mt-3 inline-block">where auditability is weakest.</span>
        </p>
      </motion.div>
    </div>
  );
};
