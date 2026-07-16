import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Sunrise, Archive, Clock, PlayCircle } from 'lucide-react';

export default function LiveSection() {
  const { t } = useTranslation();
  return (
    <section id="live" className="py-24 lg:py-40 bg-surface relative overflow-hidden border-b border-border">
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-accent/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold">{t('sales.live.eyebrow')}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 rounded-full px-2.5 py-0.5">{t('sales.live.pill')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-6">
            {t('sales.live.titlePre')}<span className="text-accent italic">{t('sales.live.titleEm')}</span>{t('sales.live.titlePost')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed">
            {t('sales.live.desc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Sunrise size={20} />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('sales.live.card1Label')}</div>
            </div>
            <h3 className="text-2xl font-serif text-white mb-3">{t('sales.live.card1Title')}</h3>
            <p className="text-[14px] text-text-dim font-light leading-relaxed mb-6">
              {t('sales.live.card1Desc')}
            </p>
            <div className="flex items-center gap-2 text-[12px] text-text-dim">
              <Clock size={14} className="text-accent" /> {t('sales.live.card1Foot')}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Archive size={20} />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('sales.live.card2Label')}</div>
            </div>
            <h3 className="text-2xl font-serif text-white mb-3">{t('sales.live.card2Title')}</h3>
            <p className="text-[14px] text-text-dim font-light leading-relaxed mb-6">
              {t('sales.live.card2Desc')}
            </p>
            <div className="flex items-center gap-2 text-[12px] text-text-dim">
              <PlayCircle size={14} className="text-accent" /> {t('sales.live.card2Foot')}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
