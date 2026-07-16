import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { ChevronDown, PlayCircle } from 'lucide-react';

interface HeroDeck {
  id: string;
  videoSrc: string;
}

const decks: HeroDeck[] = [
  {
    id: "deck1",
    videoSrc: "/hero-trading.mp4",
  },
  {
    id: "deck2",
    videoSrc: "/hero-market-speed.mp4",
  }
];

const TIMER_DURATION = 15000;

export default function Hero() {
  const [currentDeckIndex, setCurrentDeckIndex] = useState(0);
  const { t } = useTranslation();
  const activeDeck = decks[currentDeckIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeckIndex((prev) => (prev + 1) % decks.length);
    }, TIMER_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen lg:h-screen flex items-center pt-32 lg:pt-20 pb-20 lg:pb-0 overflow-hidden bg-bg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentDeckIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Background Video (Now Full Screen) */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              src={activeDeck.videoSrc}
            />
            {/* Dark Overlays: Left side semi-transparent, right side fully transparent */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-transparent z-10 w-full" />
            
            {/* Ambient Brand Glows */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-accent/20 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-indigo-500/10 blur-[120px] pointer-events-none" />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Side: Text */}
          <motion.div
            key={`text-${currentDeckIndex}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-3/5"
          >
            <span className="hero-label uppercase tracking-[6px] text-[10px] text-accent font-bold mb-6 block">
              {t(`hero.${activeDeck.id}.label`)}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-[84px] font-serif font-light mb-8 leading-[1.2] lg:leading-[1.1] tracking-tighter">
              <Trans i18nKey={`hero.${activeDeck.id}.headline`}>
                Mastering the<br/>Internal Game
              </Trans>
            </h1>
            <p className="text-xl text-text-dim max-w-lg mb-12 font-sans font-light leading-relaxed">
              {t(`hero.${activeDeck.id}.description`)}
            </p>
            
            <div className="flex items-center gap-8">
              <a href="https://app.finademica.com/signup" className="px-10 py-4 bg-accent text-white font-bold text-[11px] uppercase tracking-widest hover:bg-accent-vibrant transition-all shadow-2xl shadow-accent/40 rounded-sm">
                Vytvořit účet zdarma
              </a>
              <a href="#stock-analyzer" className="text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors border-b border-white/10 pb-1">
                {t(`hero.${activeDeck.id}.explore`)}
              </a>
            </div>

            {/* Trust / stat bar */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.15em] text-white/40">
              <span><strong className="text-white/80 font-mono not-italic">262</strong> lekcí</span>
              <span><strong className="text-white/80 font-mono not-italic">6</strong> pilířů</span>
              <span>Živě každý den</span>
              <span>Kompletně česky</span>
            </div>
          </motion.div>

          {/* Right Side: Features Stacked (As requested by client) */}
          <motion.div 
              key={`features-${currentDeckIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="lg:w-2/5 flex flex-col gap-4 lg:gap-6 relative w-full"
          >
              {[0, 1, 2, 3].map((idx) => (
                  <div key={idx} className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-sm hover:border-accent/50 hover:bg-white/[0.06] transition-all group cursor-default relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-accent/20 group-hover:bg-accent transition-colors" />
                      <h3 className="font-serif text-accent text-[15px] uppercase tracking-[0.1em] mb-3 group-hover:text-white transition-colors">
                        {t(`features.steps.0${idx + (currentDeckIndex === 0 ? 1 : 3)}.title`)}
                      </h3>
                      <p className="text-[13px] text-text-dim leading-relaxed group-hover:text-white/70 transition-colors">
                        {t(`features.steps.0${idx + (currentDeckIndex === 0 ? 1 : 3)}.desc`)}
                      </p>
                  </div>
              ))}
          </motion.div>
        </div>
      </div>

      {/* Progress Indicator Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {decks.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentDeckIndex(i)}
            className={`h-1 transition-all duration-1000 ${i === currentDeckIndex ? 'w-12 bg-accent' : 'w-4 bg-white/20'}`}
          />
        ))}
      </div>

      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-10 z-20 text-white/20"
      >
        <span className="text-[10px] uppercase tracking-[4px] block mb-2">{t('hero.scroll')}</span>
        <div className="w-[1px] h-12 bg-white/10" />
      </motion.div>
    </section>
  );
}
