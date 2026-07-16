import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Trophy, Target, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';

/**
 * Obchodní deník + pokročilá analytika — poznej svoje nejlepší obchodní dny.
 * Nativní rekreace reálného UI z akademie (kalendář ziskovosti, nejlepší den, win rate dle dnů).
 */

// 0 = neutral, 1 = profit (green), -1 = loss (red)
const calendar = [
  0, 0, 1, 0, -1, 0, 1,
  0, 0, 1, 0, -1, 0, 1,
  0, 0, 1, 0, -1, 0, 1,
  0, 0, 1, 0, -1, 0, 0,
];

const byDayMeta = [
  { wr: 60, pnl: '+$120', w: 60 },
  { wr: 50, pnl: '−$40', w: 50 },
  { wr: 85, pnl: '+$450', w: 85, best: true },
  { wr: 70, pnl: '+$210', w: 70 },
  { wr: 40, pnl: '−$80', w: 40 },
];

function Stat({ icon, label, value, sub, valueClass = 'text-white' }: { icon: ReactNode; label: string; value: string; sub?: string; valueClass?: string }) {
  return (
    <div className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3">
      <div className="text-[9px] uppercase tracking-[0.2em] text-text-dim mb-1.5 flex items-center gap-1.5">{icon}{label}</div>
      <div className={`text-xl font-mono font-bold leading-none ${valueClass}`}>{value}</div>
      {sub && <div className="text-[10px] text-text-dim mt-1">{sub}</div>}
    </div>
  );
}

export default function TradingDiaryShowcase() {
  const { t } = useTranslation();
  const dayHeaders = t('sales.diary.dayHeaders', { returnObjects: true }) as string[];
  const byDayNames = t('sales.diary.byDayNames', { returnObjects: true }) as string[];
  const byDay = byDayMeta.map((d, i) => ({ ...d, day: byDayNames[i] }));

  return (
    <section id="trading-diary" className="py-24 lg:py-40 bg-surface relative overflow-hidden border-b border-border">
      <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-accent/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold">{t('sales.diary.eyebrow')}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 rounded-full px-2.5 py-0.5">{t('sales.diary.pill')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-6">
            {t('sales.diary.titlePre')}<span className="text-accent italic">{t('sales.diary.titleEm')}</span>{t('sales.diary.titlePost')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed">
            {t('sales.diary.desc')}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="rounded-2xl border border-white/10 bg-bg/60 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex gap-1 px-5 lg:px-6 pt-4 border-b border-white/10 bg-white/[0.02]">
            <span className="text-[12px] font-medium px-3 py-2.5 text-white/40">{t('sales.diary.tabHistory')}</span>
            <span className="text-[12px] font-medium px-3 py-2.5 text-accent border-b-2 border-accent -mb-px">{t('sales.diary.tabAnalytics')}</span>
          </div>

          <div className="p-5 lg:p-6 space-y-6">
            {/* Stat row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              <Stat icon={<Target size={10} className="text-accent/70" />} label={t('sales.diary.statWinRate')} value="0 %" sub={t('sales.diary.statWinRateSub')} />
              <Stat icon={<TrendingUp size={10} className="text-emerald-400/70" />} label={t('sales.diary.statProfit')} value="+$0.00" valueClass="text-emerald-400" sub={t('sales.diary.statProfitSub')} />
              <Stat icon={<Target size={10} className="text-accent/70" />} label={t('sales.diary.statRrr')} value="0.00" sub={t('sales.diary.statRrrSub')} />
              <Stat icon={<ShieldCheck size={10} className="text-accent/70" />} label={t('sales.diary.statCapital')} value="$0.00" sub={t('sales.diary.statCapitalSub')} />
            </div>

            <div className="grid lg:grid-cols-[1fr_320px] gap-6">
              {/* Calendar */}
              <div className="rounded-xl border border-white/10 bg-white/[0.015] p-4">
                <div className="flex items-center gap-2 text-white font-serif mb-1">
                  <BookOpen size={16} className="text-accent" /> {t('sales.diary.calTitle')}
                </div>
                <p className="text-[11px] text-text-dim mb-4">{t('sales.diary.calCaption')}</p>
                <div className="grid grid-cols-7 gap-1.5 text-center mb-2">
                  {dayHeaders.map((d) => (
                    <div key={d} className="text-[9px] uppercase tracking-widest text-text-dim">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1.5">
                  {calendar.map((v, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-md flex items-center justify-center text-[11px] font-mono border ${
                        v === 1 ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                        : v === -1 ? 'bg-rose-500/15 border-rose-500/30 text-rose-300'
                        : 'bg-white/[0.02] border-white/5 text-white/30'
                      }`}
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>

              {/* Best day + by-day */}
              <div className="space-y-4">
                <div className="rounded-xl border border-amber-400/30 bg-amber-400/[0.05] p-4 text-center">
                  <div className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-widest text-amber-300 bg-amber-400/10 border border-amber-400/20 rounded-full px-2.5 py-1 mb-3">
                    <Trophy size={11} /> {t('sales.diary.champBadge')}
                  </div>
                  <div className="text-2xl font-serif text-white mb-1">{t('sales.diary.champDay')}</div>
                  <div className="text-[12px] text-text-dim">{t('sales.diary.champSub')}</div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.015] p-4">
                  <div className="text-[9px] uppercase tracking-widest text-text-dim mb-3">{t('sales.diary.byDayTitle')}</div>
                  <div className="space-y-2.5">
                    {byDay.map((d) => (
                      <div key={d.day} className="flex items-center gap-3">
                        <span className={`text-[12px] w-16 shrink-0 ${d.best ? 'text-amber-300 font-semibold' : 'text-white/70'}`}>{d.day}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className={`h-full rounded-full ${d.best ? 'bg-amber-400' : 'bg-accent/60'}`} style={{ width: `${d.w}%` }} />
                        </div>
                        <span className="text-[11px] font-mono text-white/50 w-8 text-right">{d.wr}%</span>
                        <span className={`text-[11px] font-mono w-12 text-right ${d.pnl.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>{d.pnl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 flex justify-center">
          <a href="https://app.finademica.com/signup" className="group px-9 py-4 bg-accent text-white font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-accent-vibrant transition-all shadow-2xl shadow-accent/30 rounded-sm inline-flex items-center gap-3">
            {t('sales.diary.cta')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
