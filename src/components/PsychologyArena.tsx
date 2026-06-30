import { motion } from 'motion/react';
import { useTranslation, Trans } from 'react-i18next';
import { ShieldAlert, BrainCircuit, HeartPulse, Waves, Mic2 } from 'lucide-react';

const speakersIcons = [
  <ShieldAlert size={20} />,
  <BrainCircuit size={20} />,
  <HeartPulse size={20} />,
  <Waves size={20} />,
  <Mic2 size={20} />
];

const speakerKeys = ["punisher", "oracle", "steady", "echo", "nexus"];
const speakerImages = [
  "/victor_hale.png",
  "/marcus_stone.png",
  "/nina_graves.png",
  "/ryan_wolfe.png",
  "/elias_moore.png"
];

export default function PsychologyArena() {
  const { t } = useTranslation();

  return (
    <section id="arena" className="py-24 lg:py-48 bg-bg relative overflow-hidden">
       {/* Ambient Background Glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[120px] pointer-events-none" />

       <div className="max-w-7xl mx-auto px-10 relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_15px_#6366f1]" />
                        <span className="text-accent font-sans text-[11px] uppercase tracking-[0.4em] font-bold">{t('arena.status')}</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tighter mb-8 uppercase leading-[0.9]">
                        <Trans i18nKey="arena.title">
                          The Psychology <span className="text-white/10 italic">Arena</span>
                        </Trans>
                    </h2>
                    <p className="text-text-dim text-xl leading-relaxed font-light max-w-2xl">
                        {t('arena.description')}
                    </p>
                </div>
                <a href="https://app.finademica.com/signup" className="px-12 py-5 bg-white text-bg font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all shadow-2xl shadow-white/5 group">
                    <span className="group-hover:translate-x-1 transition-transform inline-block">{t('arena.cta')}</span>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {speakerKeys.map((key, i) => (
                    <motion.div 
                        key={key}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="group relative h-[600px] overflow-hidden rounded-sm border border-white/10 hover:border-accent/50 transition-all duration-700"
                    >
                        {/* Character Image */}
                        <div className="absolute inset-0 z-0">
                            <img 
                                src={speakerImages[i]} 
                                alt={t(`arena.speakers.${key}.name`)}
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100 transition-all duration-1000 ease-out"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                            <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                <div className="text-accent mb-6 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                                    {speakersIcons[i]}
                                </div>
                                
                                <h3 className="text-2xl font-serif font-light text-white mb-2 leading-tight">
                                    {t(`arena.speakers.${key}.name`)}
                                </h3>
                                <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6">
                                    {t(`arena.speakers.${key}.role`)}
                                </p>

                                <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                                    <p className="text-[13px] text-white/60 font-sans leading-relaxed mb-6 font-light">
                                        {t(`arena.speakers.${key}.desc`)}
                                    </p>
                                </div>

                                <div className="border-t border-white/10 pt-6">
                                    <p className="text-[14px] font-serif italic text-white/90 leading-relaxed">
                                        {t(`arena.speakers.${key}.quote`)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Ambient Card Glow */}
                        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    </motion.div>
                ))}
            </div>
       </div>
    </section>
  );
}
