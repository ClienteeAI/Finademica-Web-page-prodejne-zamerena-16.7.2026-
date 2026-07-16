import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Swords, TrendingUp, TrendingDown, Trophy } from 'lucide-react';

/**
 * Sázková Aréna (XP) — tipuješ směr trhu za XP body získané používáním akademie.
 * Nativní rekreace reálného UI z akademie. Gamifikace = návyk vracet se každý den.
 */

const marketMeta = [
  { sym: 'S&P 500', price: '$7,572', chg: '+0.38 %', up: true, active: true },
  { sym: 'GOLD', price: '$4,032.8', chg: '−0.47 %', up: false, active: false },
  { sym: 'BTC / USD', price: '$64,873', chg: '+0.24 %', up: true, active: false },
];

export default function BettingArena() {
  const { t } = useTranslation();
  const marketQuestions = t('sales.betting.markets', { returnObjects: true }) as string[];
  const markets = marketMeta.map((m, i) => ({ ...m, q: marketQuestions[i] }));

  return (
    <section id="betting-arena" className="py-24 lg:py-40 bg-bg relative overflow-hidden border-b border-border">
      <div className="absolute top-0 right-1/4 w-1/2 h-1/2 bg-accent/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold">{t('sales.betting.eyebrow')}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 rounded-full px-2.5 py-0.5">{t('sales.betting.pill')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-6">
            {t('sales.betting.titlePre')}<span className="text-accent italic">XP</span>{t('sales.betting.titlePost')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed">
            {t('sales.betting.desc')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-2xl border border-white/10 bg-surface/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-4 p-5 lg:p-6 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Swords size={18} className="text-accent" />
              </div>
              <div>
                <div className="flex items-center gap-2 font-serif text-lg text-white">
                  {t('sales.betting.headerTitle')}
                  <span className="text-[9px] uppercase tracking-widest text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-full px-2 py-0.5">{t('sales.betting.realFeed')}</span>
                </div>
                <div className="text-[11px] text-text-dim">{t('sales.betting.headerSub')}</div>
              </div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-[9px] uppercase tracking-widest text-text-dim">{t('sales.betting.yourXp')}</div>
              <div className="font-mono text-accent text-lg font-bold">200 XP</div>
            </div>
          </div>

          <div className="p-5 lg:p-6 space-y-6">
            {/* Step 1 — markets */}
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim font-bold mb-3">{t('sales.betting.step1')}</div>
              <div className="grid md:grid-cols-3 gap-3">
                {markets.map((m) => (
                  <div key={m.sym} className={`rounded-xl border p-4 transition-colors ${m.active ? 'border-amber-400/50 bg-amber-400/[0.06]' : 'border-white/10 bg-white/[0.02] hover:border-white/20'}`}>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-text-dim mb-2">{m.sym}</div>
                    <div className="text-[13px] text-white/85 font-light leading-snug mb-3 min-h-[52px]">{m.q}</div>
                    <div className="flex items-center gap-2 text-[12px] font-mono">
                      <span className="text-white/60">{t('sales.betting.nowLabel')}</span>
                      <span className="text-white">{m.price}</span>
                      <span className={m.up ? 'text-emerald-400' : 'text-rose-400'}>{m.chg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2 + 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim font-bold mb-3">{t('sales.betting.step2')}</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.06] px-4 py-3.5 flex items-center justify-center gap-2 text-emerald-300 text-sm font-medium">
                    <TrendingUp size={16} /> {t('sales.betting.dirUp')}
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 flex items-center justify-center gap-2 text-white/60 text-sm font-medium">
                    <TrendingDown size={16} /> {t('sales.betting.dirDown')}
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-text-dim font-bold mb-3">{t('sales.betting.step3')}</div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-amber-400/50 bg-amber-400/[0.06] px-4 py-3.5 text-center text-accent font-mono">50 XP</div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-center text-white/60 font-mono">100 XP</div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-center text-white/60 font-mono">250 XP</div>
                </div>
              </div>
            </div>

            {/* CTA — gold, matches academy */}
            <button className="w-full rounded-xl py-4 font-bold text-[13px] uppercase tracking-[0.2em] text-black bg-gradient-to-r from-amber-300 to-amber-500 hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-default">
              <Swords size={16} /> {t('sales.betting.submitBet')}
            </button>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 text-[12px] text-text-dim justify-center text-center">
                <Trophy size={14} className="text-amber-400" />
                {t('sales.betting.bottomLine')}
              </div>
              <a href="https://app.finademica.com/signup" className="group text-[11px] font-bold uppercase tracking-widest text-accent border-b border-accent/30 hover:text-white hover:border-white transition-colors pb-0.5 inline-flex items-center gap-2">
                {t('sales.betting.bottomCta')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
