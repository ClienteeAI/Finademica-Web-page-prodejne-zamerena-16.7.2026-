import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Check, Rocket, Landmark } from 'lucide-react';

export default function Pricing() {
  const { t } = useTranslation();
  
  const foundationFeatures = t('pricing.foundation.features', { returnObjects: true }) as string[];
  const cosmicFeatures = t('pricing.cosmic.features', { returnObjects: true }) as string[];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-surface relative overflow-hidden flex items-center justify-center">
       <div className="max-w-7xl mx-auto px-10 relative z-10 w-full">
            <div className="text-center mb-24">
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-light italic tracking-tight mb-8">
                    {t('pricing.title').split(' ').map((word, i) => (
                      word.toLowerCase() === 'trajectory' ? <span key={i} className="text-accent underline decoration-accent/10 underline-offset-12"> {word}</span> : word + ' '
                    ))}
                </h2>
                <p className="text-text-dim max-w-2xl mx-auto text-lg leading-relaxed font-light italic">
                    {t('pricing.description')}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch border border-white/5 bg-surface relative overflow-hidden rounded-sm shadow-2xl">
                {/* Background Ambient Color */}
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] pointer-events-none" />

                {/* Foundation Tier */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 p-8 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-white/5 group relative z-10"
                    >
                    <div className="mb-12">
                        <span className="text-[10px] uppercase tracking-[4px] text-accent font-sans mb-4 block">{t('pricing.foundation.label')}</span>
                        <h3 className="text-3xl lg:text-4xl font-serif font-light uppercase tracking-tighter mb-4 italic text-white">{t('pricing.foundation.title')}</h3>
                        <p className="text-text-dim text-sm font-light">{t('pricing.foundation.desc')}</p>
                    </div>

                    <div className="space-y-6 mb-16 flex-grow">
                        {foundationFeatures.map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 text-text-dim text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent/30 shrink-0" />
                                <span className="font-light">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <a href="https://app.finademica.com/signup" className="block text-center w-full py-4 border border-white/10 text-[10px] uppercase font-bold tracking-[0.3em] hover:bg-white hover:text-bg transition-all rounded-sm">
                        {t('pricing.foundation.cta')}
                    </a>
                </motion.div>

                {/* Cosmic Tier - More Colorful/Premium */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex-1 p-8 lg:p-16 flex flex-col relative overflow-hidden group bg-gradient-to-br from-accent/[0.05] to-blue-600/[0.05] z-10"
                >
                    {/* Inner Glow */}
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="mb-12 relative">
                        <span className="text-[10px] uppercase tracking-[4px] text-accent font-bold mb-4 block">{t('pricing.cosmic.label')}</span>
                        <div className="flex items-baseline gap-4 mb-4">
                            <h3 className="text-3xl lg:text-4xl font-serif font-light uppercase tracking-tighter italic text-white">{t('pricing.cosmic.title')}</h3>
                            <span className="text-[10px] font-mono text-accent/70 uppercase px-2 py-0.5 border border-accent/20 rounded-full">{t('pricing.cosmic.lifetime')}</span>
                        </div>
                        <p className="text-text-dim text-sm font-light">{t('pricing.cosmic.desc')}</p>
                    </div>

                    <div className="space-y-6 mb-16 flex-grow relative">
                        {cosmicFeatures.map((feat, i) => (
                            <div key={i} className="flex items-center gap-4 text-white text-[13px]">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.8)] shrink-0" />
                                <span className="font-light">{feat}</span>
                            </div>
                        ))}
                    </div>

                    <a href="https://app.finademica.com/signup" className="block text-center w-full py-5 bg-gradient-to-r from-accent to-blue-600 text-white font-bold text-[11px] uppercase tracking-[0.3em] hover:scale-[1.02] transition-all shadow-2xl shadow-accent/20 rounded-sm">
                        {t('pricing.cosmic.cta')}
                    </a>
                </motion.div>
            </div>
       </div>
    </section>
  );
}
