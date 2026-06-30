import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, Layout, Sparkles, UserCheck } from 'lucide-react';

const posts = [
  {
    key: "alex",
    user: "Alex M.",
    role: "Prop Trader",
    time: "2m ago"
  },
  {
    key: "elena",
    user: "Elena R.",
    role: "Swing Trader",
    time: "15m ago"
  },
  {
    key: "jonas",
    user: "Jonas K.",
    role: "Fundamentals Expert",
    time: "45m ago"
  }
];

export default function SocialWall() {
  const { t } = useTranslation();
  return (
    <section className="py-32 bg-bg border-t border-border">
       <div className="max-w-7xl mx-auto px-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
                <div>
                     <div className="flex items-center gap-2 text-accent mb-4 uppercase tracking-[0.3em] font-sans text-[10px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        {t('social.status')}
                     </div>
                     <h2 className="text-4xl md:text-5xl font-serif font-light uppercase tracking-tighter">
                        Global <span className="text-white/20">Social Wall</span>
                     </h2>
                </div>
                <p className="text-text-dim max-w-sm text-right hidden md:block italic text-[13px] font-light">
                    {t('social.description')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border bg-surface">
                {posts.map((post, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.01)" }}
                        className="p-12 border-r last:border-r-0 border-border flex flex-col transition-all"
                    >
                        <div className="flex items-center justify-between mb-10">
                            <div className="flex flex-col">
                                <h4 className="font-serif font-light text-[15px] tracking-tight text-accent font-bold">{post.user}</h4>
                                <p className="text-[9px] text-text-dim uppercase font-sans tracking-[0.2em]">{post.role}</p>
                            </div>
                            <span className="text-[9px] font-sans text-white/20 uppercase tracking-widest">{post.time}</span>
                        </div>
                        <p className="text-[13px] text-text-dim italic font-light leading-relaxed mb-10 flex-grow group-hover:text-white/80 transition-colors">
                            "{t(`social.posts.${post.key}.content`)}"
                        </p>
                        <div className="flex items-center gap-4 text-white/10 uppercase font-sans text-[9px] tracking-[0.2em]">
                            <span>{t('social.verified')}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <a href="https://app.finademica.com/signup" className="inline-block text-text-dim text-[10px] font-sans uppercase tracking-[0.4em] hover:text-white transition-colors border-b border-transparent hover:border-accent pb-1">
                    {t('social.cta')}
                </a>
            </div>
       </div>
    </section>
  );
}
