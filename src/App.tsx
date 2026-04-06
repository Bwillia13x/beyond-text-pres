import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideWrapper, TransitionMode } from './components/SlideWrapper';
import { SlideCounter } from './components/SlideCounter';
import { Slide1Title } from './components/Slide1Title';
import { Slide2Capability } from './components/Slide2Capability';
import { Slide3FrontierAI } from './components/Slide3FrontierAI';
import { Slide4WhyItMatters } from './components/Slide4WhyItMatters';
import { Slide5Threshold } from './components/Slide5Threshold';
import { Slide6ExploitScenario } from './components/Slide6ExploitScenario';
import { Slide7WorkflowCompression } from './components/Slide7WorkflowCompression';
import { Slide8ExploitDemonstrates } from './components/Slide8ExploitDemonstrates';
import { Slide9OldInferenceBreaking } from './components/Slide9OldInferenceBreaking';
import { Slide10VerificationParadox } from './components/Slide10VerificationParadox';
import { Slide11BeyondTextPivot } from './components/Slide11BeyondTextPivot';
import { Slide12TwoUsesMultimodality } from './components/Slide12TwoUsesMultimodality';
import { Slide13AssignmentArchitecture } from './components/Slide13AssignmentArchitecture';
import { Slide14ArtifactStack } from './components/Slide14ArtifactStack';
import { Slide15CompetenceMatrix } from './components/Slide15CompetenceMatrix';
import { Slide16BeforeAfter } from './components/Slide16BeforeAfter';
import { Slide17Disciplines } from './components/Slide17Disciplines';
import { Slide18GradeConstruct } from './components/Slide18GradeConstruct';
import { Slide19ParticipantActivity } from './components/Slide19ParticipantActivity';
import { Slide20Debrief } from './components/Slide20Debrief';
import { Slide21FinalTakeaway } from './components/Slide21FinalTakeaway';
import { MagneticButton } from './components/MagneticButton';

export default function App() {
  const [[page, direction], setPage] = useState([0, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const springX2 = useSpring(mouseX, { damping: 30, stiffness: 80, mass: 0.8 });
  const springY2 = useSpring(mouseY, { damping: 30, stiffness: 80, mass: 0.8 });
  const springX3 = useSpring(mouseX, { damping: 40, stiffness: 60, mass: 1.2 });
  const springY3 = useSpring(mouseY, { damping: 40, stiffness: 60, mass: 1.2 });

  const slides = useMemo<{ id: string; component: React.ReactNode; transition: TransitionMode }[]>(() => [
    { id: 'slide1', component: <Slide1Title />, transition: 'fade' },
    { id: 'slide2', component: <Slide2Capability />, transition: 'flip' },
    { id: 'slide3', component: <Slide3FrontierAI />, transition: 'slide' },
    { id: 'slide4', component: <Slide4WhyItMatters />, transition: 'slide' },
    { id: 'slide5', component: <Slide5Threshold />, transition: 'zoom' },
    { id: 'slide6', component: <Slide6ExploitScenario />, transition: 'drop' },
    { id: 'slide7', component: <Slide7WorkflowCompression />, transition: 'slide' },
    { id: 'slide8', component: <Slide8ExploitDemonstrates />, transition: 'flip' },
    { id: 'slide9', component: <Slide9OldInferenceBreaking />, transition: 'rise' },
    { id: 'slide10', component: <Slide10VerificationParadox />, transition: 'rise' },
    { id: 'slide11', component: <Slide11BeyondTextPivot />, transition: 'zoom' },
    { id: 'slide12', component: <Slide12TwoUsesMultimodality />, transition: 'flip' },
    { id: 'slide13', component: <Slide13AssignmentArchitecture />, transition: 'slide' },
    { id: 'slide14', component: <Slide14ArtifactStack />, transition: 'drop' },
    { id: 'slide15', component: <Slide15CompetenceMatrix />, transition: 'slide' },
    { id: 'slide16', component: <Slide16BeforeAfter />, transition: 'flip' },
    { id: 'slide17', component: <Slide17Disciplines />, transition: 'slide' },
    { id: 'slide18', component: <Slide18GradeConstruct />, transition: 'drop' },
    { id: 'slide19', component: <Slide19ParticipantActivity />, transition: 'zoom' },
    { id: 'slide20', component: <Slide20Debrief />, transition: 'slide' },
    { id: 'slide21', component: <Slide21FinalTakeaway />, transition: 'zoom' },
  ], []);

  const totalSlides = slides.length;
  const progress = ((page) / (totalSlides - 1)) * 100;

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => {
      const nextPage = prevPage + newDirection;
      if (nextPage < 0 || nextPage >= totalSlides) return [prevPage, 0];
      return [nextPage, newDirection];
    });
  }, [totalSlides]);

  const paginationRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paginationRef.current) {
      const activeElement = paginationRef.current.children[page] as HTMLElement;
      if (activeElement) {
        const offsetLeft = activeElement.offsetLeft;
        const containerWidth = paginationRef.current.offsetWidth;
        const elementWidth = activeElement.offsetWidth;
        
        paginationRef.current.scrollTo({
          left: offsetLeft - containerWidth / 2 + elementWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [page]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        paginate(-1);
      } else if (e.key === 'f' || e.key === 'F') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen?.();
        } else {
          document.exitFullscreen?.();
        }
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; 
      const y = (e.clientY / innerHeight - 0.5) * 30;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [paginate, mouseX, mouseY]);

  const renderSlide = () => {
    return slides[page]?.component || null;
  };

  return (
    <div className="relative w-full h-screen bg-[var(--color-surface)] overflow-hidden flex flex-col font-sans">
      {/* Top progress bar */}
      <div className="absolute top-0 left-0 right-0 z-[60] h-px">
        <motion.div 
          className="h-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent)] to-transparent"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          style={{ boxShadow: '0 0 12px var(--color-accent-muted), 0 0 4px var(--color-accent)' }}
        />
      </div>

      {/* Background Ambience — 4-layer parallax orbs + noise + vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Primary warm orb — top left */}
        <motion.div 
          animate={{ 
            rotate: [0, 4, -2, 0],
            scale: [1, 1.08, 0.96, 1],
            opacity: [0.12, 0.22, 0.12]
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-25%] left-[-15%] w-[55%] h-[55%] rounded-full blur-[180px]"
          style={{ x: springX, y: springY, background: 'radial-gradient(circle, rgba(245,160,138,0.18) 0%, rgba(245,160,138,0.04) 60%, transparent 100%)' }}
        />
        {/* Secondary cool orb — bottom right */}
        <motion.div 
          animate={{ 
            rotate: [0, -3, 4, 0],
            scale: [1, 0.94, 1.06, 1],
            opacity: [0.08, 0.16, 0.08]
          }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-25%] right-[-15%] w-[55%] h-[55%] rounded-full blur-[180px]"
          style={{ x: springX2, y: springY2, background: 'radial-gradient(circle, rgba(110,231,183,0.14) 0%, rgba(110,231,183,0.03) 60%, transparent 100%)' }}
        />
        {/* Tertiary blue accent orb — center right, subtle */}
        <motion.div 
          animate={{ 
            rotate: [0, 2, -3, 0],
            scale: [1, 1.04, 0.98, 1],
            opacity: [0.05, 0.10, 0.05]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] rounded-full blur-[200px]"
          style={{ x: springX3, y: springY3, background: 'radial-gradient(circle, rgba(147,197,253,0.10) 0%, transparent 70%)' }}
        />
        {/* Deep warm undertone — bottom center */}
        <motion.div
          animate={{ 
            opacity: [0.04, 0.08, 0.04],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[20%] w-[60%] h-[30%] rounded-full blur-[160px]"
          style={{ background: 'radial-gradient(circle, rgba(245,160,138,0.08) 0%, transparent 70%)' }}
        />
        {/* Film grain noise */}
        <div className="absolute inset-0 noise-overlay opacity-[0.035] mix-blend-overlay" />
        {/* Vignette */}
        <div className="absolute inset-0 vignette opacity-60" />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 w-full h-full" style={{ perspective: 1200 }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <SlideWrapper key={page} direction={direction} transitionMode={slides[page]?.transition ?? 'slide'}>
            {renderSlide()}
          </SlideWrapper>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <MagneticButton 
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="p-2.5 rounded-full card-glass text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-muted)] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-500"
            ariaLabel="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </MagneticButton>
          
          <div ref={paginationRef} className="flex gap-1.5 md:gap-2 max-w-[40vw] md:max-w-[50vw] overflow-x-auto px-2 py-2 hide-scrollbar mask-edges">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage([idx, idx > page ? 1 : -1])}
                className={`flex-shrink-0 rounded-full transition-all duration-700 ease-out relative ${
                  idx === page 
                    ? 'bg-[var(--color-accent)] w-7 h-1.5 shadow-[0_0_12px_var(--color-accent-muted)]' 
                    : idx < page
                      ? 'bg-[var(--color-accent)] opacity-30 w-1.5 h-1.5 hover:opacity-60'
                      : 'bg-[var(--color-border)] w-1.5 h-1.5 hover:bg-[var(--color-text-tertiary)]'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {idx === page && (
                  <motion.div layoutId="activePagination" className="absolute inset-x-0 -bottom-1 h-0.5 bg-[var(--color-accent)] opacity-40 blur-sm rounded-full" />
                )}
              </button>
            ))}
          </div>

          <MagneticButton 
            onClick={() => paginate(1)}
            disabled={page === totalSlides - 1}
            className="p-2.5 rounded-full card-glass text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-muted)] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-500"
            ariaLabel="Next slide"
          >
            <ChevronRight className="w-4 h-4" />
          </MagneticButton>
        </div>

        <div className="hidden md:flex items-center gap-3 pointer-events-auto">
          <SlideCounter current={page} total={totalSlides} />
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />
    </div>
  );
}
