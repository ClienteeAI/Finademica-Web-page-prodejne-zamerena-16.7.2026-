import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Plus, Minus } from 'lucide-react';

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-[15px] font-medium text-white/90">{q}</span>
        <span className="text-accent shrink-0">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-[14px] text-text-dim font-light leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const faqs = t('sales.faq.items', { returnObjects: true }) as { q: string; a: string }[];

  return (
    <section id="faq" className="py-24 lg:py-40 bg-bg relative overflow-hidden border-b border-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-14">
          <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] font-bold mb-6 block">{t('sales.faq.eyebrow')}</span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight">{t('sales.faq.title')}</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
