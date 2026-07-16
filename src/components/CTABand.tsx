import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: string;
}

export default function CTABand({ eyebrow, title, subtitle, cta }: Props) {
  const { t } = useTranslation();
  const ctaLabel = cta ?? t('sales.ctaBands.defaultCta');
  return (
    <section className="py-16 lg:py-20 bg-bg relative overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.07] via-transparent to-accent/[0.07] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
      >
        <div>
          {eyebrow && <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-3 block">{eyebrow}</span>}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light leading-snug text-white">{title}</h3>
          {subtitle && <p className="text-text-dim font-light mt-3 max-w-xl">{subtitle}</p>}
        </div>
        <a
          href="https://app.finademica.com/signup"
          className="group shrink-0 px-9 py-4 bg-accent text-white font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-accent-vibrant transition-all shadow-2xl shadow-accent/40 rounded-sm flex items-center gap-3"
        >
          {ctaLabel}
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
