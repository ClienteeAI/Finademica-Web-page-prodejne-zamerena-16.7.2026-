import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { UserPlus, Map, Dumbbell, Rocket } from 'lucide-react';

const stepIcons = [<UserPlus size={24} />, <Map size={24} />, <Dumbbell size={24} />, <Rocket size={24} />];

export default function HowItWorks() {
  const { t } = useTranslation();
  const stepData = t('sales.how.steps', { returnObjects: true }) as { title: string; desc: string }[];
  const steps = stepIcons.map((icon, i) => ({ icon, title: stepData[i].title, desc: stepData[i].desc }));

  return (
    <section id="how" className="py-24 lg:py-40 bg-surface relative overflow-hidden border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">{t('sales.how.eyebrow')}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight leading-[1.05]">
            {t('sales.how.titlePre')}<span className="text-accent italic">{t('sales.how.titleEm')}</span>{t('sales.how.titlePost')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-7 relative"
            >
              <span className="absolute top-5 right-6 font-mono text-4xl text-white/[0.06] font-bold">{i + 1}</span>
              <div className="text-accent mb-6">{s.icon}</div>
              <h3 className="text-lg font-serif text-white mb-3">{s.title}</h3>
              <p className="text-[13px] text-text-dim font-light leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
