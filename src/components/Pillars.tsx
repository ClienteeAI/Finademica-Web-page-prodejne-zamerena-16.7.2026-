import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ShieldHalf, Globe2, Brain, Wheat, Building2, LineChart, GraduationCap } from 'lucide-react';

/**
 * 6 pilířů kurzu + celkem 262 lekcí. Počty odpovídají reálným kategoriím z akademie.
 */

const pillarMeta = [
  { icon: <ShieldHalf size={22} />, count: 60 },
  { icon: <Globe2 size={22} />, count: 22 },
  { icon: <Brain size={22} />, count: 21 },
  { icon: <Wheat size={22} />, count: 12 },
  { icon: <Building2 size={22} />, count: 11 },
  { icon: <LineChart size={22} />, count: 10 },
];

export default function Pillars() {
  const { t } = useTranslation();
  const items = t('sales.pillars.items', { returnObjects: true }) as { name: string; desc: string }[];
  const pillars = pillarMeta.map((p, i) => ({ ...p, name: items[i].name, desc: items[i].desc }));

  return (
    <section id="pillars" className="py-24 lg:py-40 bg-bg relative overflow-hidden border-b border-border">
      <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-accent/6 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold">{t('sales.pillars.eyebrow')}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 rounded-full px-2.5 py-0.5">{t('sales.pillars.pill')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-6">
            <span className="text-accent italic">{t('sales.pillars.titleEm')}</span>{t('sales.pillars.titlePost')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed">
            {t('sales.pillars.desc')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-accent/40 hover:bg-white/[0.04] transition-all"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="text-accent group-hover:scale-110 transition-transform">{p.icon}</div>
                <div className="text-right">
                  <span className="font-mono text-2xl text-white leading-none">{p.count}</span>
                  <span className="block text-[9px] uppercase tracking-widest text-text-dim mt-1">{t('sales.pillars.lessonsLabel')}</span>
                </div>
              </div>
              <h3 className="text-lg font-serif text-white mb-2">{p.name}</h3>
              <p className="text-[13px] text-text-dim font-light leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Foundation strip */}
        <div className="mt-4 rounded-xl border border-accent/20 bg-accent/[0.04] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
              <GraduationCap size={22} />
            </div>
            <div>
              <div className="text-white font-serif text-lg">{t('sales.pillars.foundationTitle')}</div>
              <div className="text-[13px] text-text-dim">{t('sales.pillars.foundationDesc')}</div>
            </div>
          </div>
          <a href="https://app.finademica.com/signup" className="text-[11px] font-bold uppercase tracking-widest text-accent border-b border-accent/30 hover:text-white hover:border-white transition-colors pb-0.5 whitespace-nowrap">
            {t('sales.pillars.foundationCta')}
          </a>
        </div>
      </div>
    </section>
  );
}
