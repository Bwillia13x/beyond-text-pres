import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideWrapper } from './components/SlideWrapper';
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
import { Slide11RedTeamingPivot } from './components/Slide11RedTeamingPivot';
import { Slide12FourQuestions } from './components/Slide12FourQuestions';
import { Slide13ExampleEssay } from './components/Slide13ExampleEssay';
import { Slide14ExampleRedesign } from './components/Slide14ExampleRedesign';
import { Slide15StudentSelfRedTeaming } from './components/Slide15StudentSelfRedTeaming';
import { Slide16ParticipantActivity } from './components/Slide16ParticipantActivity';
import { Slide17Debrief } from './components/Slide17Debrief';
import { Slide18FinalTakeaway } from './components/Slide18FinalTakeaway';
import { MagneticButton } from './components/MagneticButton';

export default function App() {
  const [[page, direction], setPage] = useState([0, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const slides = [
    { id: 'slide1', component: <Slide1Title /> },
    { id: 'slide2', component: <Slide2Capability /> },
    { id: 'slide3', component: <Slide3FrontierAI /> },
    { id: 'slide4', component: <Slide4WhyItMatters /> },
    { id: 'slide5', component: <Slide5Threshold /> },
    { id: 'slide6', component: <Slide6ExploitScenario /> },
    { id: 'slide7', component: <Slide7WorkflowCompression /> },
    { id: 'slide8', component: <Slide8ExploitDemonstrates /> },
    { id: 'slide9', component: <Slide9OldInferenceBreaking /> },
    { id: 'slide10', component: <Slide10VerificationParadox /> },
    { id: 'slide11', component: <Slide11RedTeamingPivot /> },
    { id: 'slide12', component: <Slide12FourQuestions /> },
    { id: 'slide13', component: <Slide13ExampleEssay /> },
    { id: 'slide14', component: <Slide14ExampleRedesign /> },
    { id: 'slide15', component: <Slide15StudentSelfRedTeaming /> },
    { id: 'slide16', component: <Slide16ParticipantActivity /> },
    { id: 'slide17', component: <Slide17Debrief /> },
    { id: 'slide18', component: <Slide18FinalTakeaway /> },
  ];

  const totalSlides = slides.length;

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
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        paginate(1);
      } else if (e.key === 'ArrowLeft') {
        paginate(-1);
      }
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40; 
      const y = (e.clientY / innerHeight - 0.5) * 40;
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
    <div className="relative w-full h-screen bg-[var(--color-surface)] overflow-hidden flex flex-col font-sans selection:bg-[var(--color-accent-muted)] selection:text-[var(--color-text-primary)]">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: springX, y: springY }}
          animate={{ 
            rotate: [0, 3, -3, 0],
            scale: [1, 1.05, 0.95, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-accent-subtle)] blur-[150px]" 
        />
        <motion.div 
          style={{ x: useSpring(mouseX, { damping: 30, stiffness: 80, mass: 0.8 }), y: useSpring(mouseY, { damping: 30, stiffness: 80, mass: 0.8 }) }}
          animate={{ 
            rotate: [0, -3, 3, 0],
            scale: [1, 0.95, 1.05, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--color-secondary-subtle)] blur-[150px]" 
        />
        <motion.div
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"
        />
      </div>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <SlideWrapper key={page} direction={direction}>
            {renderSlide()}
          </SlideWrapper>
        </AnimatePresence>
      </main>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 pointer-events-none">
        <div className="flex items-center gap-5 pointer-events-auto">
          <MagneticButton 
            onClick={() => paginate(-1)}
            disabled={page === 0}
            className="p-3 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-muted)] hover:shadow-[0_0_20px_var(--color-accent-subtle)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            ariaLabel="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </MagneticButton>
          
          <div className="flex gap-1.5 md:gap-3 max-w-[40vw] md:max-w-[50vw] overflow-x-auto px-2 py-2 hide-scrollbar mask-edges">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPage([idx, idx > page ? 1 : -1])}
                className={`flex-shrink-0 h-2 rounded-full transition-all duration-700 ease-out relative group ${
                  idx === page 
                    ? 'bg-[var(--color-accent)] w-8 shadow-[0_0_10px_var(--color-accent-muted)]' 
                    : 'bg-[var(--color-border)] hover:bg-[var(--color-text-tertiary)] w-2 hover:scale-125'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                {idx === page && (
                  <motion.div layoutId="activePagination" className="absolute inset-x-0 -bottom-1 h-0.5 bg-[var(--color-accent)] opacity-50 blur-sm rounded-full" />
                )}
              </button>
            ))}
          </div>

          <MagneticButton 
            onClick={() => paginate(1)}
            disabled={page === totalSlides - 1}
            className="p-3 rounded-full bg-[var(--color-surface-elevated)] border border-[var(--color-border)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-accent-muted)] hover:shadow-[0_0_20px_var(--color-accent-subtle)] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
            ariaLabel="Next slide"
          >
            <ChevronRight className="w-5 h-5 relative z-10" />
          </MagneticButton>
        </div>

        <div className="hidden md:block text-[var(--color-text-tertiary)] font-mono text-xs tracking-widest uppercase">
          {page + 1} / {totalSlides}
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
