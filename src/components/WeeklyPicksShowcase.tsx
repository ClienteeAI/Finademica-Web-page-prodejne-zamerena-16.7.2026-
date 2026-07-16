import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Target, Lock, TrendingUp, ArrowUpRight } from 'lucide-react';

/**
 * Weekly Picks — týdenní výběr akcií, sledovaný živě.
 * Nativní rekreace reálné ukázky z akademie (Týden 29, GOOGL open pick + CRWD locked).
 */

const chips = ['52t 77 %', 'MA50 −4.7 %', 'MA200 +11.4 %', 'MA50 > MA200', 'P/E 26.8', 'marže 38 %', 'férová $415'];

export default function WeeklyPicksShowcase() {
  const { t } = useTranslation();
  return (
    <section id="weekly-picks" className="py-24 lg:py-40 bg-surface relative overflow-hidden border-b border-border">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold">{t('sales.weekly.sectionLabel')}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 rounded-full px-2.5 py-0.5">Weekly Picks</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-6">
            {t('sales.weekly.titlePre')}<span className="text-accent italic">{t('sales.weekly.titleEm')}</span>{t('sales.weekly.titlePost')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed">
            {t('sales.weekly.desc')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-2xl border border-white/10 bg-bg/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
        >
          {/* Week header */}
          <div className="p-5 lg:p-6 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2 text-lg font-serif text-white mb-2">
              <Target size={18} className="text-accent" /> Týden 29 · 13.–17. července 2026
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px]">
              <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> {t('sales.weekly.weekLive')}
              </span>
              <span className="text-text-dim font-mono">{t('sales.weekly.bought')} 13. července 2026, 16:44</span>
            </div>
          </div>

          <div className="p-5 lg:p-6">
            <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-4">
              {t('sales.weekly.picksLabel')}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Open pick — GOOGL */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-lg font-bold text-white">GOOGL</span>
                    <span className="text-text-dim text-sm ml-2">Alphabet Inc.</span>
                  </div>
                  <div className="text-right">
                    <div className="text-emerald-400 font-mono font-bold flex items-center gap-1 justify-end">
                      <ArrowUpRight size={15} /> +4.41 %
                    </div>
                    <div className="text-[10px] text-text-dim">{t('sales.weekly.sinceBuy')}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[10px] rounded-full px-2 py-0.5 border border-white/10 text-white/50">{t('sales.weekly.tagInternet')}</span>
                  <span className="text-[10px] rounded-full px-2 py-0.5 border border-accent/30 text-accent bg-accent/10">{t('sales.weekly.tagReversal')}</span>
                  <span className="text-[10px] rounded-full px-2 py-0.5 border border-emerald-400/30 text-emerald-300 bg-emerald-400/10">AI: BUY 68</span>
                </div>
                <p className="text-[13px] text-white/65 font-light leading-relaxed mb-4">
                  {t('sales.weekly.googlAnalysis')}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {chips.map((c) => (
                    <span key={c} className="text-[10px] font-mono rounded px-2 py-0.5 bg-black/30 border border-white/5 text-white/45">{c}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-text-dim mb-1">{t('sales.weekly.labelBuy')}</div>
                    <div className="font-mono text-white">$355.26</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-text-dim mb-1">{t('sales.weekly.labelNow')}</div>
                    <div className="font-mono text-emerald-400">$370.92</div>
                  </div>
                  <div>
                    <div className="text-[9px] uppercase tracking-widest text-text-dim mb-1">{t('sales.weekly.labelToday')}</div>
                    <div className="font-mono text-emerald-400">+3.17 %</div>
                  </div>
                </div>
              </div>

              {/* Locked pick — CRWD */}
              <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 relative overflow-hidden">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-lg font-bold text-white">CRWD</span>
                    <span className="text-text-dim text-sm ml-2">CrowdStrike Holdings, Inc.</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  <span className="text-[10px] rounded-full px-2 py-0.5 border border-white/10 text-white/50">{t('sales.weekly.tagCyber')}</span>
                  <span className="text-[10px] rounded-full px-2 py-0.5 border border-accent/30 text-accent bg-accent/10">{t('sales.weekly.tagReversal')}</span>
                  <span className="text-[10px] rounded-full px-2 py-0.5 border border-emerald-400/30 text-emerald-300 bg-emerald-400/10">{t('sales.weekly.tagAnalysisDone')}</span>
                </div>
                {/* Locked overlay */}
                <div className="relative">
                  <p className="text-[13px] text-white/20 font-light leading-relaxed blur-[3px] select-none">
                    {t('sales.weekly.lockedParagraph')}
                  </p>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-3">
                      <Lock size={16} className="text-accent" />
                    </div>
                    <div className="text-sm font-semibold text-white mb-1">{t('sales.weekly.lockedTitle')}</div>
                    <div className="text-[11px] text-text-dim mb-4 max-w-[220px]">{t('sales.weekly.lockedSub')}</div>
                    <a href="https://app.finademica.com/signup" className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest bg-accent text-white px-5 py-2.5 rounded-md hover:bg-accent-vibrant transition-colors">
                      <Lock size={12} /> {t('sales.weekly.unlockCta')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 border-t border-white/10">
              <div className="flex items-center gap-2 text-[13px] text-text-dim">
                <TrendingUp size={15} className="text-emerald-400" />
                {t('sales.weekly.bottomLine')}
              </div>
              <a href="https://app.finademica.com/signup" className="text-[11px] font-bold uppercase tracking-widest text-accent border-b border-accent/30 hover:text-white hover:border-white transition-colors pb-0.5">
                {t('sales.weekly.bottomCta')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
