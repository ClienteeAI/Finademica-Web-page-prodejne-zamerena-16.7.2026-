import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loader2, Lock, X } from 'lucide-react';

const PAYMENT_LINK = 'https://link.fastpaydirect.com/payment-link/6a675a53a655fa0b802a6590';
const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/INxLO0R2O5UzkQsOeiNw/webhook-trigger/eba136f1-c7dc-409d-b538-c30eae05a02c';

export default function Pricing() {
  const { t } = useTranslation();
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const foundationFeatures = t('pricing.foundation.features', { returnObjects: true }) as string[];
  const cosmicFeatures = t('pricing.cosmic.features', { returnObjects: true }) as string[];

  // Zamknout scroll pozadí, dokud je objednávkový formulář otevřený
  useEffect(() => {
    document.body.style.overflow = checkoutOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [checkoutOpen]);

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    // Kontakt pošleme do GoHighLevel, i kdyby platbu nedokončil
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify({ ...data, source: 'pricing-checkout', product: 'Cosmos Elite' }),
        headers: { 'Content-Type': 'application/json' }
      });
    } catch (err) {
      console.error('Checkout lead submission failed:', err);
    }

    // Předvyplnění platební brány
    const params = new URLSearchParams({
      first_name: data.firstName ?? '',
      last_name: data.lastName ?? '',
      email: data.email ?? '',
      phone: data.phone ?? ''
    });
    window.location.href = PAYMENT_LINK + '?' + params.toString();
  };

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

                    <button
                        type="button"
                        onClick={() => setCheckoutOpen(true)}
                        className="block text-center w-full py-5 bg-gradient-to-r from-accent to-blue-600 text-white font-bold text-[11px] uppercase tracking-[0.3em] hover:scale-[1.02] transition-all shadow-2xl shadow-accent/20 rounded-sm"
                    >
                        {t('pricing.cosmic.cta')}
                    </button>
                </motion.div>
            </div>
       </div>

       {/* Objednávkový formulář → platební brána */}
       <AnimatePresence>
         {checkoutOpen && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] flex items-start md:items-center justify-center px-4 py-10 overflow-y-auto bg-black/80 backdrop-blur-sm"
             onClick={() => !isSubmitting && setCheckoutOpen(false)}
           >
             <motion.div
               initial={{ opacity: 0, y: 24, scale: 0.98 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: 24, scale: 0.98 }}
               transition={{ duration: 0.25 }}
               onClick={(e) => e.stopPropagation()}
               className="relative w-full max-w-lg bg-surface border border-white/10 rounded-sm shadow-2xl p-8 md:p-12 my-auto"
             >
               <button
                 type="button"
                 aria-label={t('pricing.checkout.close')}
                 onClick={() => setCheckoutOpen(false)}
                 className="absolute top-5 right-5 text-text-dim hover:text-white transition-colors"
               >
                 <X size={20} />
               </button>

               <span className="text-[10px] uppercase tracking-[4px] text-accent font-bold mb-4 block">{t('pricing.cosmic.label')}</span>
               <h3 className="text-2xl md:text-3xl font-serif font-light italic text-white mb-3">{t('pricing.checkout.title')}</h3>
               <p className="text-text-dim text-sm font-light mb-8">{t('pricing.checkout.desc')}</p>

               <div className="flex items-baseline gap-3 mb-8 pb-8 border-b border-white/10">
                 <span className="text-3xl font-serif text-white">{t('pricing.cosmic.title')}</span>
                 <span className="text-[10px] font-mono text-accent/70 uppercase px-2 py-0.5 border border-accent/20 rounded-full">{t('pricing.cosmic.lifetime')}</span>
               </div>

               <form onSubmit={handleCheckout} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('pricing.checkout.firstName')}</label>
                   <input required name="firstName" type="text" autoComplete="given-name" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('pricing.checkout.placeholders.firstName')} />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('pricing.checkout.lastName')}</label>
                   <input required name="lastName" type="text" autoComplete="family-name" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('pricing.checkout.placeholders.lastName')} />
                 </div>
                 <div className="space-y-2 sm:col-span-2">
                   <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('pricing.checkout.email')}</label>
                   <input required name="email" type="email" autoComplete="email" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('pricing.checkout.placeholders.email')} />
                 </div>
                 <div className="space-y-2 sm:col-span-2">
                   <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('pricing.checkout.phone')}</label>
                   <input required name="phone" type="tel" autoComplete="tel" className="w-full bg-white/[0.03] border border-white/10 px-4 py-3 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('pricing.checkout.placeholders.phone')} />
                 </div>

                 <label className="sm:col-span-2 flex items-start gap-3 text-text-dim text-[12px] font-light cursor-pointer">
                   <input required name="consent" type="checkbox" className="mt-0.5 w-4 h-4 accent-accent shrink-0" />
                   <span>{t('pricing.checkout.consent')}</span>
                 </label>

                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="sm:col-span-2 w-full py-5 bg-gradient-to-r from-accent to-blue-600 text-white font-bold text-[11px] uppercase tracking-[0.3em] hover:scale-[1.02] transition-all shadow-2xl shadow-accent/20 rounded-sm flex items-center justify-center gap-3 disabled:opacity-60 disabled:hover:scale-100"
                 >
                   {isSubmitting ? (
                     <>
                       <Loader2 className="w-4 h-4 animate-spin" />
                       {t('pricing.checkout.loading')}
                     </>
                   ) : (
                     t('pricing.checkout.submit')
                   )}
                 </button>

                 <p className="sm:col-span-2 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] text-text-dim">
                   <Lock size={12} className="text-accent/70" />
                   {t('pricing.checkout.secure')}
                 </p>
               </form>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </section>
  );
}
