import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Sparkles, TriangleAlert, BookOpen, LineChart, Layers, Newspaper, Gauge, ArrowRight } from 'lucide-react';

/**
 * Stock Analyzer — vlajková loď akademie.
 * Nativní (nikoli screenshot) rekreace reálného výstupu analyzátoru: verdikt, skóre,
 * férová hodnota, mini graf, klíčová rizika + postranní "Vysvětlivky" pro začátečníky.
 * Data odpovídají reálné ukázce (Cameco / CCJ) z akademie.
 */

const glossaryTerms = ['P/E', 'PEG', 'EV/EBITDA', 'Fair value', 'RSI', 'MACD'];

const tabIcons = [<Sparkles size={15} />, <LineChart size={15} />, <Layers size={15} />, <Newspaper size={15} />];

function StatTile({ label, value, sub, subClass = 'text-text-dim' }: { label: string; value: string; sub?: string; subClass?: string }) {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3">
      <div className="text-[9px] uppercase tracking-[0.2em] text-text-dim mb-1.5 flex items-center gap-1.5">
        <Gauge size={10} className="text-accent/70" />
        {label}
      </div>
      <div className="text-xl font-mono font-medium text-white leading-none">{value}</div>
      {sub && <div className={`text-[11px] mt-1 font-mono ${subClass}`}>{sub}</div>}
    </div>
  );
}

export default function StockAnalyzerShowcase() {
  const { t } = useTranslation();
  const glossaryDesc = t('sales.analyzer.glossary', { returnObjects: true }) as string[];
  const risks = t('sales.analyzer.risks', { returnObjects: true }) as string[];
  const tabLabels = t('sales.analyzer.tabs', { returnObjects: true }) as string[];

  return (
    <section id="stock-analyzer" className="py-24 lg:py-40 bg-bg relative overflow-hidden border-y border-border">
      {/* Ambient glow */}
      <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-accent/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Heading */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold">{t('sales.analyzer.eyebrow')}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 rounded-full px-2.5 py-0.5">Stock Analyzer</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-6">
            {t('sales.analyzer.titlePre')}<span className="text-accent italic">{t('sales.analyzer.titleEm')}</span>{t('sales.analyzer.titlePost')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed">
            {t('sales.analyzer.descPre')}
            <span className="text-white/80">{t('sales.analyzer.descEm')}</span>{t('sales.analyzer.descPost')}
          </p>
        </div>

        {/* App window mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
        >
          {/* Window top bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.02]">
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="w-3 h-3 rounded-full bg-white/10" />
            <span className="ml-4 text-[11px] font-mono text-white/30">finademica · stock-analyzer</span>
            <span className="ml-auto text-[10px] font-mono text-accent/70 hidden sm:block">{t('sales.analyzer.aiLabel')}</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_280px]">
            {/* Main panel */}
            <div className="p-5 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
              {/* Ticker header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-serif text-accent flex items-center gap-2">
                    Cameco Corporation <Sparkles size={16} className="text-accent/60" />
                  </h3>
                  <div className="text-[12px] font-mono text-text-dim mt-1">CCJ · equity · $90.2</div>
                </div>
                <span className="shrink-0 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300 border border-amber-300/30 bg-amber-300/10 rounded-full px-5 py-2">
                  HOLD
                </span>
              </div>

              {/* Stat tiles */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                <StatTile label={t('sales.analyzer.statScore')} value="45/100" />
                <StatTile label={t('sales.analyzer.statConviction')} value="65%" />
                <StatTile label={t('sales.analyzer.statFairValue')} value="$82.5" sub="−8.5%" subClass="text-rose-400" />
                <StatTile label={t('sales.analyzer.statHorizon')} value={t('sales.analyzer.horizonValue')} />
              </div>

              {/* Verdict */}
              <p className="text-[15px] text-white/85 font-light leading-relaxed mb-6">
                {t('sales.analyzer.verdict')}
              </p>

              {/* Mini chart */}
              <div className="rounded-lg border border-white/10 bg-black/20 p-4 mb-6">
                <div className="flex items-center gap-4 text-[11px] font-mono mb-3">
                  <span className="text-text-dim">13. 7. 26</span>
                  <span className="text-emerald-400">O 94.40</span>
                  <span className="text-rose-400">H 95.24</span>
                  <span className="text-rose-400">L 89.22</span>
                  <span className="text-white/70">C 90.20</span>
                </div>
                <svg viewBox="0 0 600 160" className="w-full h-32" preserveAspectRatio="none">
                  {/* price line */}
                  <polyline
                    fill="none" stroke="#818cf8" strokeWidth="1.5"
                    points="0,120 40,110 80,118 120,95 160,70 200,45 240,55 280,40 320,58 360,50 400,68 440,60 480,78 520,72 560,90 600,96"
                  />
                  {/* SMA50 */}
                  <polyline fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.8"
                    points="0,128 80,120 160,100 240,80 320,70 400,72 480,80 560,88 600,90" />
                  {/* SMA200 */}
                  <polyline fill="none" stroke="#ef4444" strokeWidth="1.5" opacity="0.7"
                    points="0,140 120,135 240,125 360,112 480,102 600,96" />
                </svg>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {['SMA 20', 'SMA 50', 'SMA 200', 'EMA 20', 'Bollinger', 'Support/Resist.', 'RSI 14', 'MACD'].map((ind, i) => (
                    <span key={ind} className={`text-[10px] font-mono rounded-full px-2.5 py-1 border ${i === 1 ? 'border-amber-400/40 text-amber-300 bg-amber-400/10' : i === 2 ? 'border-rose-400/40 text-rose-300 bg-rose-400/10' : 'border-white/10 text-white/40'}`}>
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key risks */}
              <div className="rounded-lg border border-rose-500/15 bg-rose-500/[0.04] p-4">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-rose-300 font-bold mb-3">
                  <TriangleAlert size={13} /> {t('sales.analyzer.risksTitle')}
                </div>
                <ul className="space-y-2">
                  {risks.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[13px] text-white/70 font-light leading-snug">
                      <span className="text-rose-400 mt-1.5 w-1 h-1 rounded-full bg-rose-400 shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Glossary sidebar */}
            <div className="p-5 lg:p-6 bg-white/[0.015]">
              <div className="flex items-center gap-2 mb-1 text-white">
                <BookOpen size={16} className="text-accent" />
                <span className="font-serif text-lg">{t('sales.analyzer.glossaryTitle')}</span>
              </div>
              <p className="text-[11px] text-text-dim mb-5">{t('sales.analyzer.glossarySub')}</p>
              <div className="space-y-4">
                {glossaryTerms.map((term, i) => (
                  <div key={term} className="border-l-2 border-accent/40 pl-3">
                    <div className="text-[12px] font-mono font-bold text-accent mb-0.5">{term}</div>
                    <div className="text-[12px] text-white/55 font-light leading-snug">{glossaryDesc[i]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tabs footer */}
          <div className="flex flex-wrap gap-1 px-5 lg:px-8 py-3 border-t border-white/10 bg-white/[0.02]">
            {tabLabels.map((label, i) => (
              <span key={label} className={`flex items-center gap-1.5 text-[11px] font-medium rounded-md px-3 py-1.5 ${i === 0 ? 'text-accent bg-accent/10 border border-accent/20' : 'text-white/40'}`}>
                {tabIcons[i]}{label}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <a href="https://app.finademica.com/signup" className="group px-9 py-4 bg-accent text-white font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-accent-vibrant transition-all shadow-2xl shadow-accent/30 rounded-sm inline-flex items-center gap-3">
            {t('sales.analyzer.cta')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-[12px] text-text-dim font-mono text-center">
            {t('sales.analyzer.caption')}
          </p>
        </div>
      </div>
    </section>
  );
}
