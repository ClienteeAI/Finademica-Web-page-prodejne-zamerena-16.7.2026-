import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import Features from '../components/Features';
import PsychologyArena from '../components/PsychologyArena';
import Pricing from '../components/Pricing';
// Dočasně skryto: Social Wall obsahuje ukázkové (nereálné) recenze.
// Až budou k dispozici skutečné ohlasy, stačí odkomentovat tento import a <SocialWall /> níže.
// import SocialWall from '../components/SocialWall';
import StockAnalyzerShowcase from '../components/StockAnalyzerShowcase';
import WeeklyPicksShowcase from '../components/WeeklyPicksShowcase';
import BettingArena from '../components/BettingArena';
import TradingDiaryShowcase from '../components/TradingDiaryShowcase';
import ProblemSection from '../components/ProblemSection';
import Pillars from '../components/Pillars';
import LiveSection from '../components/LiveSection';
import Roadmap from '../components/Roadmap';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import CTABand from '../components/CTABand';

export default function Home() {
  const { t } = useTranslation();
  return (
    <main>
      <Hero />

      <StockAnalyzerShowcase />

      <ProblemSection />

      <WeeklyPicksShowcase />

      <CTABand
        eyebrow={t('sales.ctaBands.band1Eyebrow')}
        title={t('sales.ctaBands.band1Title')}
        subtitle={t('sales.ctaBands.band1Subtitle')}
        cta={t('sales.ctaBands.band1Cta')}
      />

      {/* Brand Interstitial */}
      <section id="education" className="py-32 bg-bg flex items-center justify-center border-y border-border">
          <div className="max-w-4xl mx-auto px-10 text-center">
               <h3 className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] mb-8">{t('sales.brandQuote.eyebrow')}</h3>
               <p className="text-3xl md:text-5xl font-serif font-light leading-snug">
                  {t('sales.brandQuote.quotePre')}<span className="text-white/30 italic">{t('sales.brandQuote.quoteEm')}</span>
               </p>
          </div>
      </section>

      <Pillars />

      <Features />

      <BettingArena />

      <PsychologyArena />

      <TradingDiaryShowcase />

      <LiveSection />

      <Roadmap />

      <HowItWorks />

      <Comparison />

      <CTABand
        title={t('sales.ctaBands.band2Title')}
        subtitle={t('sales.ctaBands.band2Subtitle')}
        cta={t('sales.ctaBands.band2Cta')}
      />

      <Pricing />

      <FAQ />

      {/* Dočasně skryto do doby, než budou reálné recenze: <SocialWall /> */}

      <FinalCTA />
    </main>
  );
}
