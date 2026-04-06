import React, { useEffect, useState, useMemo } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { FileBadge, Brain, CheckCircle2, UserCog, Layers } from 'lucide-react';
import { AnimatedText } from './AnimatedText';
import { TiltCard } from './TiltCard';

// Stable scattered ember particles
const useFragments = (count: number) => {
  return useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      id: i,
      angle: ((i / count) * Math.PI * 2) + (Math.random() - 0.5) * 0.8,
      distance: 25 + Math.random() * 90,
      size: 1.5 + Math.random() * 3.5,
      delay: Math.random() * 0.25,
      isEmber: Math.random() > 0.5,
    })),
  [count]);
};

export const Slide9OldInferenceBreaking = () => {
  const breakProgress = useMotionValue(0);
  const [phase, setPhase] = useState<'intact' | 'cracking' | 'broken'>('intact');
  const fragments = useFragments(24);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setPhase('cracking');
      animate(breakProgress, 1, {
        duration: 0.9,
        ease: [0.32, 0, 0.67, 0],
        onComplete: () => setPhase('broken'),
      });
    }, 2000);
    return () => clearTimeout(t1);
  }, [breakProgress]);

  const beamOpacity = useTransform(breakProgress, [0, 0.3, 1], [1, 0.5, 0]);
  const leftShift = useTransform(breakProgress, [0.2, 1], [0, -18]);
  const rightShift = useTransform(breakProgress, [0.2, 1], [0, 18]);

  // SVG beam dimensions
  const beamW = 360;
  const beamH = 60;
  const midX = beamW / 2;
  const midY = beamH / 2;

  const crackLines = [
    { x2: midX - 12, y2: midY - 18 },
    { x2: midX + 10, y2: midY - 16 },
    { x2: midX - 8, y2: midY + 16 },
    { x2: midX + 14, y2: midY + 14 },
    { x2: midX - 15, y2: midY - 6 },
    { x2: midX + 12, y2: midY + 4 },
    { x2: midX + 2, y2: midY - 22 },
    { x2: midX - 3, y2: midY + 20 },
  ];

  return (
    <div className="flex flex-col justify-center max-w-6xl mx-auto h-full px-8 relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center w-full mb-14"
      >
        <span className="text-[var(--color-accent)] uppercase tracking-[0.2em] text-[11px] font-medium mb-5 block opacity-80">
          The Assessment Crisis
        </span>
        <AnimatedText
          text="The old inference is breaking"
          as="h2"
          className="text-4xl md:text-5xl lg:text-6xl font-extralight text-[var(--color-text-primary)] tracking-[-0.03em]"
          delay={0.1}
          staggerDelay={0.05}
        />
      </motion.div>

      {/* Inference Bond Fracture Diagram */}
      <motion.div
        className="flex items-center justify-center gap-0 w-full max-w-4xl mx-auto mb-14 relative"
        animate={phase === 'broken' ? { x: [0, -3, 3, -2, 1, 0] } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {/* Artifact node */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-4 z-10 shrink-0"
        >
          <div className="w-20 h-20 rounded-2xl card-glass flex items-center justify-center shadow-deep">
            <FileBadge className="w-8 h-8 text-[var(--color-text-primary)]" />
          </div>
          <span className="text-lg font-medium text-[var(--color-text-primary)]">Polished Artifact</span>
        </motion.div>

        {/* Animated Fracturing Beam */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex-1 flex justify-center items-center relative mx-2 md:mx-6"
        >
          <svg viewBox={`0 0 ${beamW} ${beamH}`} className="w-full max-w-[360px] h-[60px]" style={{ overflow: 'visible' }}>
            <defs>
              <linearGradient id="s9beamGrad" x1="0" y1="0.5" x2="1" y2="0.5">
                <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.9" />
                <stop offset="45%" stopColor="var(--color-text-primary)" stopOpacity="0.7" />
                <stop offset="55%" stopColor="var(--color-text-primary)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="var(--color-tertiary)" stopOpacity="0.9" />
              </linearGradient>
              <filter id="s9beamGlow" x="-20%" y="-80%" width="140%" height="260%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="s9emberGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Left half of beam — thicker, more visible */}
            <motion.rect
              x={0} y={midY - 2.5} width={midX - 3} height={5}
              rx={2.5}
              fill="url(#s9beamGrad)"
              filter="url(#s9beamGlow)"
              style={{ opacity: beamOpacity, x: leftShift }}
            />

            {/* Right half of beam */}
            <motion.rect
              x={midX + 3} y={midY - 2.5} width={midX - 3} height={5}
              rx={2.5}
              fill="url(#s9beamGrad)"
              filter="url(#s9beamGlow)"
              style={{ opacity: beamOpacity, x: rightShift }}
            />

            {/* Energy pulse traveling along beam while intact */}
            {phase === 'intact' && (
              <motion.rect
                x={0} y={midY - 1} width={24} height={2}
                rx={1}
                fill="var(--color-text-primary)"
                opacity={0.6}
                animate={{ x: [0, beamW - 24] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                filter="url(#s9beamGlow)"
              />
            )}

            {/* Crack lines radiating from center */}
            {phase !== 'intact' && crackLines.map((line, i) => (
              <motion.line
                key={i}
                x1={midX} y1={midY} x2={line.x2} y2={line.y2}
                stroke="var(--color-accent)"
                strokeWidth="1.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 1, 0.4] }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
              />
            ))}

            {/* Scattered ember fragments */}
            {phase === 'broken' && fragments.map((f) => (
              <motion.circle
                key={f.id}
                cx={midX}
                cy={midY}
                r={f.size}
                fill={f.isEmber ? 'var(--color-accent)' : 'var(--color-text-primary)'}
                filter={f.size > 3 ? 'url(#s9emberGlow)' : undefined}
                initial={{ opacity: 0.95, cx: midX, cy: midY }}
                animate={{
                  cx: midX + Math.cos(f.angle) * f.distance,
                  cy: midY + Math.sin(f.angle) * f.distance,
                  opacity: 0,
                  r: f.size * 0.2,
                }}
                transition={{
                  duration: 1.2 + f.delay * 2,
                  delay: f.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            ))}

            {/* Central flash on break */}
            {phase === 'broken' && (
              <>
                <motion.circle
                  cx={midX} cy={midY} r="3"
                  fill="var(--color-accent)"
                  initial={{ opacity: 1, r: 3 }}
                  animate={{ opacity: 0, r: 30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  filter="url(#s9beamGlow)"
                />
                <motion.circle
                  cx={midX} cy={midY} r="2"
                  fill="var(--color-text-primary)"
                  initial={{ opacity: 0.9, r: 2 }}
                  animate={{ opacity: 0, r: 16 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  filter="url(#s9beamGlow)"
                />
              </>
            )}
          </svg>

          {/* Label under the break */}
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: phase === 'broken' ? 0.7 : 0, y: phase === 'broken' ? 0 : 4 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute -bottom-7 text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)] font-semibold"
          >
            inference gap
          </motion.span>
        </motion.div>

        {/* Understanding node */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-4 z-10 shrink-0"
        >
          <motion.div 
            className="w-20 h-20 rounded-2xl card-glass flex items-center justify-center shadow-deep"
            animate={{ opacity: phase === 'broken' ? 0.3 : 1 }}
            transition={{ duration: 1.2 }}
          >
            <Brain className="w-8 h-8 text-[var(--color-text-secondary)]" />
          </motion.div>
          <motion.span 
            className="text-lg font-medium text-[var(--color-text-secondary)]"
            animate={{ opacity: phase === 'broken' ? 0.35 : 1 }}
            transition={{ duration: 1 }}
          >
            <span className={phase === 'broken' ? 'line-through decoration-[var(--color-accent)] decoration-2' : ''}>
              Understanding
            </span>
          </motion.span>
        </motion.div>
      </motion.div>

      {/* What it means now */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
        className="max-w-3xl mx-auto w-full card-glass rounded-2xl p-8 shadow-premium"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-tertiary)] font-medium mb-6 text-center">
          A polished artifact may now reflect:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <TiltCard className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]" tiltStrength={4}>
            <CheckCircle2 className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
            <span className="text-[var(--color-text-primary)] font-light">Deep understanding</span>
          </TiltCard>
          <TiltCard className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]" tiltStrength={4}>
            <Layers className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
            <span className="text-[var(--color-text-primary)] font-light">Shallow acceptance of AI work</span>
          </TiltCard>
          <TiltCard className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)]" tiltStrength={4}>
            <UserCog className="w-5 h-5 text-[var(--color-text-secondary)] shrink-0 mt-0.5" />
            <span className="text-[var(--color-text-primary)] font-light">Careful orchestration</span>
          </TiltCard>
          <TiltCard className="flex items-start gap-3 bg-[var(--color-surface)] p-4 rounded-xl border border-[var(--color-border)] opacity-60" tiltStrength={4}>
            <span className="w-5 h-5 flex items-center justify-center font-bold shrink-0 mt-0.5 text-[var(--color-text-tertiary)]">+</span>
            <span className="text-[var(--color-text-secondary)] font-light italic">Some combination of the above</span>
          </TiltCard>
        </div>
      </motion.div>
    </div>
  );
};
