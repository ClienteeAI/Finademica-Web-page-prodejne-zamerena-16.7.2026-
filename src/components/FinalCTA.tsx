import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ShieldCheck, Smartphone, Languages } from 'lucide-react';

export default function FinalCTA() {
  const { t } = useTranslation();
  return (
    <section className="py-28 lg:py-44 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 bg-accent/10 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-8 block">{t('sales.finalCta.eyebrow')}</span>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-8">
            {t('sales.finalCta.titleLine1')}<br />{t('sales.finalCta.titleLine2Pre')}<span className="text-accent italic">{t('sales.finalCta.titleEm')}</span>{t('sales.finalCta.titleLine2Post')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12">
            {t('sales.finalCta.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <a href="https://app.finademica.com/signup" className="group px-10 py-5 bg-accent text-white font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-accent-vibrant transition-all shadow-2xl shadow-accent/40 rounded-sm flex items-center gap-3">
              {t('sales.finalCta.ctaPrimary')}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://app.finademica.com/login" className="text-[12px] uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors border-b border-white/10 pb-1">
              {t('sales.finalCta.ctaSecondary')}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] text-text-dim">
            <span className="flex items-center gap-2"><Languages size={14} className="text-accent" /> {t('sales.finalCta.badge1')}</span>
            <span className="flex items-center gap-2"><Smartphone size={14} className="text-accent" /> {t('sales.finalCta.badge2')}</span>
            <span className="flex items-center gap-2"><ShieldCheck size={14} className="text-accent" /> {t('sales.finalCta.badge3')}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
