import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Shuffle, HeartCrack, EyeOff, ArrowRight } from 'lucide-react';

const painIcons = [<Shuffle size={22} />, <HeartCrack size={22} />, <EyeOff size={22} />];

export default function ProblemSection() {
  const { t } = useTranslation();
  const pains = t('sales.problem.pains', { returnObjects: true }) as { title: string; desc: string }[];

  return (
    <section className="py-24 lg:py-40 bg-bg relative overflow-hidden border-b border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-rose-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-rose-400 font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">{t('sales.problem.eyebrow')}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-6">
            {t('sales.problem.titlePre')}<span className="text-rose-400/90 italic">{t('sales.problem.titleEm')}</span>{t('sales.problem.titlePost')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed">
            {t('sales.problem.descPre')}
            <span className="text-white/80">{t('sales.problem.descEm')}</span>{t('sales.problem.descPost')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {pains.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-7"
            >
              <div className="text-rose-400/80 mb-5">{painIcons[i]}</div>
              <h3 className="text-lg font-serif text-white mb-3">{p.title}</h3>
              <p className="text-[14px] text-text-dim font-light leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <p className="text-center text-xl md:text-2xl font-serif font-light text-white/70 max-w-2xl mx-auto leading-snug">
            {t('sales.problem.bottomPre')}<span className="text-accent">{t('sales.problem.bottomEm')}</span>{t('sales.problem.bottomPost')}
          </p>
          <a href="https://app.finademica.com/signup" className="group px-9 py-4 bg-accent text-white font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-accent-vibrant transition-all shadow-2xl shadow-accent/30 rounded-sm inline-flex items-center gap-3">
            {t('sales.problem.cta')}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
