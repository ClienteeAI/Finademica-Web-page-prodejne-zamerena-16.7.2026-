import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { X, Check } from 'lucide-react';

export default function Comparison() {
  const { t } = useTranslation();
  const rows = t('sales.compare.rows', { returnObjects: true }) as { old: string; neu: string }[];

  return (
    <section className="py-24 lg:py-40 bg-bg relative overflow-hidden border-b border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">{t('sales.compare.eyebrow')}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05]">
            {t('sales.compare.titlePre')}<span className="text-white/30 italic">vs.</span> <span className="text-accent italic">Finademica</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Old way */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.015] overflow-hidden">
            <div className="px-6 py-4 border-b border-white/10 bg-rose-500/[0.04]">
              <span className="text-[11px] uppercase tracking-[0.2em] text-rose-300/80 font-bold">{t('sales.compare.oldHeader')}</span>
            </div>
            <div className="divide-y divide-white/5">
              {rows.map((r) => (
                <div key={r.old} className="flex items-start gap-3 px-6 py-4">
                  <X size={16} className="text-rose-400/70 mt-0.5 shrink-0" />
                  <span className="text-[14px] text-text-dim font-light">{r.old}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Finademica */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-accent/30 bg-accent/[0.04] overflow-hidden shadow-2xl shadow-accent/5"
          >
            <div className="px-6 py-4 border-b border-accent/20 bg-accent/[0.08]">
              <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold">{t('sales.compare.newHeader')}</span>
            </div>
            <div className="divide-y divide-white/5">
              {rows.map((r) => (
                <div key={r.neu} className="flex items-start gap-3 px-6 py-4">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-[14px] text-white/85 font-light">{r.neu}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
