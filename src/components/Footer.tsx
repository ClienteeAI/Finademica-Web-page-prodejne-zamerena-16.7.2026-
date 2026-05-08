import { useTranslation } from 'react-i18next';
import { Rocket, Github, Twitter, Linkedin, ExternalLink, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LegalContent, RiskWarning } from './legal/LegalTexts';

const partners = [
  { name: "Global Prime", url: "#", logo: "GP" },
  { name: "IC Markets", url: "#", logo: "IC" },
  { name: "Pepperstone", url: "#", logo: "PS" },
  { name: "Vantage", url: "#", logo: "VT" }
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const modals: Record<string, { title: string, content: React.ReactNode }> = {
    terms: {
      title: i18n.language === 'cs' ? "VŠEOBECNÉ OBCHODNÍ PODMÍNKY" : (i18n.language === 'pl' ? "REGULAMIN" : "TERMS AND CONDITIONS"),
      content: <LegalContent type="terms" />
    },
    privacy: {
      title: "PRIVACY POLICY (GDPR)",
      content: <LegalContent type="privacy" />
    },
    cookies: {
      title: "COOKIES POLICY",
      content: <LegalContent type="cookies" />
    },
    disclaimer: {
      title: i18n.language === 'cs' ? "ÚPLNÉ PROHLÁŠENÍ O VYLOUČENÍ ODPOVĚDNOSTI" : (i18n.language === 'pl' ? "PEŁNE WYŁĄCZENIE ODPOWIEDZIALNOŚCI" : "FULL DISCLAIMER"),
      content: <LegalContent type="disclaimer" />
    }
  };

  return (
    <>
      <footer className="bg-bg py-16 lg:py-24 border-t border-border relative z-10">
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
                          <li onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors cursor-pointer">{t('footer.legal.terms')}</li>
                          <li onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors cursor-pointer">{t('footer.legal.privacy')}</li>
                          <li onClick={() => setActiveModal('cookies')} className="hover:text-white transition-colors cursor-pointer">Cookies Policy</li>
                          <li onClick={() => setActiveModal('disclaimer')} className="hover:text-white transition-colors cursor-pointer">Full Disclaimer</li>
                      </ul>
                  </div>
              </div>

              <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] font-sans uppercase tracking-[0.4em] text-white/10 mb-8">
                  <span>{t('footer.rights')}</span>
                  <span className="italic">{t('footer.motto')}</span>
              </div>

              <RiskWarning />
          </div>
      </footer>

      {/* Modal Overlay */}
      <AnimatePresence>
        {activeModal && modals[activeModal] && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              onClick={() => setActiveModal(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl max-h-[85vh] bg-bg border border-white/10 rounded-sm shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 bg-white/[0.02]">
                <h2 className="text-xl sm:text-2xl font-serif font-light text-white tracking-wide">
                  {modals[activeModal].title}
                </h2>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="p-2 text-white/50 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Body */}
              <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                {modals[activeModal].content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
