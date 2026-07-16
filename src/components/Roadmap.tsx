import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MapPin } from 'lucide-react';

const stepNums = ['01', '02', '03', '04', '05'];

export default function Roadmap() {
  const { t } = useTranslation();
  const stepData = t('sales.roadmap.steps', { returnObjects: true }) as { title: string; desc: string }[];
  const steps = stepNums.map((n, i) => ({ n, title: stepData[i].title, desc: stepData[i].desc }));

  return (
    <section id="roadmap" className="py-24 lg:py-40 bg-bg relative overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold">{t('sales.roadmap.eyebrow')}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 border border-white/10 rounded-full px-2.5 py-0.5">{t('sales.roadmap.pill')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05] mb-6">
            {t('sales.roadmap.titlePre')}<span className="text-accent italic">{t('sales.roadmap.titleEm')}</span>{t('sales.roadmap.titlePost')}
          </h2>
          <p className="text-text-dim text-lg font-light leading-relaxed">
            {t('sales.roadmap.desc')}
          </p>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-white/10 hidden sm:block" />
          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 items-start"
              >
                <div className="relative z-10 w-10 h-10 rounded-full bg-surface border border-accent/30 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-accent" />
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 flex-1 hover:border-accent/30 transition-colors">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-[11px] text-accent">{s.n}</span>
                    <h3 className="text-lg font-serif text-white">{s.title}</h3>
                  </div>
                  <p className="text-[14px] text-text-dim font-light leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
