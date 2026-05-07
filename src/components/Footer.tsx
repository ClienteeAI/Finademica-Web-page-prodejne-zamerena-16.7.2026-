import { useTranslation } from 'react-i18next';
import { Rocket, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const partners = [
  { name: "Global Prime", url: "#", logo: "GP" },
  { name: "IC Markets", url: "#", logo: "IC" },
  { name: "Pepperstone", url: "#", logo: "PS" },
  { name: "Vantage", url: "#", logo: "VT" }
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-bg py-16 lg:py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-2 mb-10">
                        <img src="/logo.png" alt="Finademica" className="h-12 w-auto object-contain opacity-90" />
                    </div>
                    <p className="text-text-dim max-w-sm mb-10 font-light italic leading-relaxed text-[13px]">
                        {t('footer.description')}
                    </p>
                    <div className="flex items-center gap-8 text-white/20">
                        <Twitter size={18} className="hover:text-accent cursor-pointer transition-colors" />
                        <Linkedin size={18} className="hover:text-accent cursor-pointer transition-colors" />
                    </div>
                </div>

{/* Hiding partners section for now */}
                {/* <div>
                    <h4 className="font-sans font-bold uppercase tracking-[0.3em] text-[9px] mb-10 text-white/40">{t('footer.partnerships')}</h4>
                    <ul className="space-y-4">
                        {partners.map(p => (
                            <li key={p.name}>
                                <a href={p.url} className="text-text-dim hover:text-accent transition-colors flex items-center gap-2 group text-[11px] uppercase tracking-widest">
                                    <span className="font-light">{p.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div> */}

                <div>
                    <h4 className="font-sans font-bold uppercase tracking-[0.3em] text-[9px] mb-10 text-white/40">{t('nav.blog')}</h4>
                    <ul className="space-y-4 text-text-dim text-[11px] uppercase tracking-widest font-light">
                        <li><a href="/blog" className="hover:text-accent transition-colors">{t('nav.blog')}</a></li>
                        <li><a href="/dictionary" className="hover:text-accent transition-colors">{t('nav.dictionary')}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-sans font-bold uppercase tracking-[0.3em] text-[9px] mb-10 text-white/40">{t('footer.work')}</h4>
                    <ul className="space-y-4 text-text-dim text-[11px] uppercase tracking-widest font-light">
                        <li><a href="/career" className="hover:text-accent transition-colors">{t('career.nav')}</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-sans font-bold uppercase tracking-[0.3em] text-[9px] mb-10 text-white/40">{t('footer.legal.title')}</h4>
                    <ul className="space-y-4 text-text-dim text-[11px] uppercase tracking-widest font-light">
                        <li className="hover:text-white transition-colors cursor-pointer">{t('footer.legal.terms')}</li>
                        <li className="hover:text-white transition-colors cursor-pointer">{t('footer.legal.privacy')}</li>
                        <li className="hover:text-white transition-colors cursor-pointer">{t('footer.legal.risk')}</li>
                    </ul>
                </div>
            </div>

            <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] font-sans uppercase tracking-[0.4em] text-white/10">
                <span>{t('footer.rights')}</span>
                <span className="italic">{t('footer.motto')}</span>
            </div>
        </div>
    </footer>
  );
}
