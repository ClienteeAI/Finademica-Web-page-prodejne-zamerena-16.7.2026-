import { useTranslation } from 'react-i18next';
import { Rocket, Github, Twitter, Linkedin, ExternalLink, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const partners = [
  { name: "Global Prime", url: "#", logo: "GP" },
  { name: "IC Markets", url: "#", logo: "IC" },
  { name: "Pepperstone", url: "#", logo: "PS" },
  { name: "Vantage", url: "#", logo: "VT" }
];

export default function Footer() {
  const { t } = useTranslation();
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
      title: "TERMS AND CONDITIONS",
      content: (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. General Information</h3>
          <p>These Terms and Conditions (“Terms”) govern the use of the website and services provided by Ben Consult s.r.o., with its registered office at Příčná 1892/4, Nové Město, 110 00 Praha 1, Czech Republic, Company ID: 14292475 (hereinafter “Company”, “we”, “us”).</p>
          <p>By accessing this website or using our services, you agree to these Terms.</p>
          
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Nature of Services</h3>
          <p>The Company provides:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Educational content related to trading and investing</li>
            <li>Online courses, videos, and tools</li>
            <li>General financial information</li>
          </ul>
          
          <div className="bg-accent/10 border border-accent/20 p-4 rounded-sm my-6">
            <p className="text-accent font-bold mb-2">⚠️ Important:</p>
            <p className="text-white/80">All content is for educational purposes only and does not constitute financial advice.</p>
          </div>
          
          <p>We do NOT:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide investment recommendations</li>
            <li>Manage funds</li>
            <li>Execute trades on behalf of users</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Risk Disclaimer</h3>
          <p>Trading financial instruments (Forex, stocks, crypto, etc.) involves high risk.</p>
          <p>You acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You may lose all invested capital</li>
            <li>Past performance does not guarantee future results</li>
            <li>You are fully responsible for your decisions</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. User Responsibilities</h3>
          <p>You agree:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>To use the website lawfully</li>
            <li>Not to misuse or attempt to hack the system</li>
            <li>Not to redistribute paid content without permission</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Intellectual Property</h3>
          <p>All content (videos, text, branding, tools) is owned by Ben Consult s.r.o.</p>
          <p>You may not: Copy, Distribute, or Sell without written consent.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Payments & Access</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Some services may be paid</li>
            <li>Access may be limited based on subscription or usage</li>
            <li>The Company reserves the right to modify pricing</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">7. Limitation of Liability</h3>
          <p>We are NOT liable for:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Financial losses</li>
            <li>Trading results</li>
            <li>Decisions made based on our content</li>
          </ul>
          <p>Use of the platform is at your own risk.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">8. Termination</h3>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Suspend or terminate access</li>
            <li>Remove users violating these Terms</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">9. Governing Law</h3>
          <p>These Terms are governed by the laws of the Czech Republic.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">10. Contact</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      )
    },
    privacy: {
      title: "PRIVACY POLICY (GDPR)",
      content: (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p className="font-bold text-white text-base">Ben Consult s.r.o.</p>
          <p>Příčná 1892/4, Praha 1<br/>IČO: 14292475</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. What Data We Collect</h3>
          <p>We may collect:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name and surname</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>IP address</li>
            <li>Website usage data</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Purpose of Processing</h3>
          <p>We process data to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide services</li>
            <li>Send emails / communication</li>
            <li>Improve website performance</li>
            <li>Marketing (with consent)</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. Legal Basis</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Consent (marketing)</li>
            <li>Contract performance (services)</li>
            <li>Legitimate interest (analytics)</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Data Retention</h3>
          <p>We store personal data only as long as necessary.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Third Parties</h3>
          <p>We may share data with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>CRM systems (Clientee CRM)</li>
            <li>Email providers</li>
            <li>Analytics tools</li>
          </ul>
          <p>All comply with GDPR.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">7. Your Rights</h3>
          <p>Under GDPR you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Access your data</li>
            <li>Request correction</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
            <li>File complaint with authority</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">8. Data Security</h3>
          <p>We use technical and organizational measures to protect your data.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">9. Contact</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      )
    },
    cookies: {
      title: "COOKIES POLICY",
      content: (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <motion.div 
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center mb-8 mx-auto shadow-[0_0_30px_rgba(99,102,241,0.2)]"
          >
            <span className="text-3xl filter drop-shadow-lg">🍪</span>
          </motion.div>
          
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">1. What Are Cookies</h3>
          <p>Cookies are small text files stored in your browser.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">2. Types of Cookies We Use</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-bold text-white">Necessary cookies</span> – required for website functionality</li>
            <li><span className="font-bold text-white">Analytics cookies</span> – to understand user behavior</li>
            <li><span className="font-bold text-white">Marketing cookies</span> – for ads and remarketing</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">3. Consent</h3>
          <p>When visiting the website, you can:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Accept all cookies</li>
            <li>Reject non-essential cookies</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">4. Third-Party Cookies</h3>
          <p>We may use:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Google Analytics</li>
            <li>Facebook Pixel</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">5. Managing Cookies</h3>
          <p>You can disable cookies in your browser settings.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">6. Contact</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      )
    },
    disclaimer: {
      title: "FULL DISCLAIMER",
      content: (
        <div className="space-y-4 text-sm text-text-dim font-sans font-light leading-relaxed">
          <p>The information provided by Ben Consult s.r.o., with its registered office at Příčná 1892/4, Nové Město, 110 00 Praha 1, Company ID: 14292475 (hereinafter “Company”), is for educational and informational purposes only.</p>
          
          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">No Advisory Services</h3>
          <p>The Company does not provide:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>investment advice</li>
            <li>financial advisory services</li>
            <li>portfolio management</li>
            <li>brokerage services</li>
          </ul>

          <div className="bg-accent/10 border border-accent/20 p-4 rounded-sm my-6">
            <p className="text-white/80">Nothing on this website, in emails, AI tools, videos, or communication should be considered as a recommendation to buy or sell any financial instrument, a personalized investment strategy, or financial, legal, or tax advice.</p>
          </div>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">No Guarantee of Results</h3>
          <p>The Company makes no guarantees regarding profitability, trading performance, or financial outcomes. Any examples, case studies, or results presented are illustrative only, not typical, and not guaranteed.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">User Responsibility</h3>
          <p>You acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>You are fully responsible for your trading decisions</li>
            <li>You understand the risks associated with financial markets</li>
            <li>You act at your own discretion</li>
          </ul>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs text-red-400">High-Risk Warning</h3>
          <p>Trading involves a high level of risk, especially when using leverage. You may lose your entire investment or experience rapid financial losses. Only trade with money you can afford to lose.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Third-Party Services</h3>
          <p>The Company may reference or integrate third-party platforms (e.g. brokers, tools, software). We do not control these services and are not responsible for their performance or outcomes.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Educational Nature of AI Tools</h3>
          <p>Any AI tools, chatbots, or analysis provided are based on algorithms and available data, may be inaccurate or incomplete, and should not be relied upon for financial decisions.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Regulatory Status</h3>
          <p>The Company is not a licensed financial institution and is not regulated as an investment advisor, a broker, or a financial services provider.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Jurisdiction</h3>
          <p>Users are responsible for ensuring that accessing this website and using the services is compliant with their local laws and regulations.</p>

          <h3 className="text-white font-bold mt-6 uppercase tracking-wider text-xs">Contact</h3>
          <p>Email: <a href="mailto:hey@finademica.com" className="text-accent hover:underline">hey@finademica.com</a></p>
        </div>
      )
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

              <div className="text-[10px] text-white/20 font-sans font-light leading-relaxed text-center md:text-left max-w-7xl mx-auto">
                <span className="font-bold text-white/30">RISK WARNING:</span> Trading financial instruments such as Forex, cryptocurrencies, stocks, and commodities involves a high level of risk and may not be suitable for all investors. You can lose some or all of your invested capital. Past performance is not indicative of future results. This content is for educational purposes only and does not constitute investment advice.
              </div>
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
