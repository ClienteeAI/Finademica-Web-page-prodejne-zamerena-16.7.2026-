import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'cs', name: 'Čeština', flag: '🇨🇿' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const langRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(l => l.code === i18n.language.split('-')[0]) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLangs(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isHome = location.pathname === '/';

  const NavLink = ({ href, children, isAccent = false }: { href: string, children: React.ReactNode, isAccent?: boolean }) => {
    if (href.startsWith('#')) {
      return (
        <a 
          href={isHome ? href : `/${href}`} 
          className={`transition-colors hover:text-accent ${isAccent ? 'text-accent' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link 
        to={href} 
        className={`transition-colors hover:text-accent ${isAccent ? 'text-accent' : ''}`}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-4 group">
            <img src="/logo.png" alt="Finademica" className="h-14 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-12 text-[11px] font-sans uppercase tracking-[0.15em] text-text-dim">
            <NavLink href="#education">{t('nav.lessons')}</NavLink>
            <NavLink href="#tools">{t('nav.tools')}</NavLink>
            <NavLink href="#arena">{t('nav.arena')}</NavLink>
            <NavLink href="/blog">{t('nav.blog')}</NavLink>
            <NavLink href="/dictionary">{t('nav.dictionary')}</NavLink>
            <NavLink href="/career">{t('career.nav')}</NavLink>
            <NavLink href="#pricing" isAccent>{t('nav.partners')}</NavLink>
            
            {/* Language Switcher */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setShowLangs(!showLangs)}
                className="flex items-center gap-2 px-3 py-1.5 border border-border bg-white/[0.02] hover:bg-white/[0.05] transition-colors rounded-sm"
              >
                <Globe size={14} className="text-accent" />
                <span className="text-[9px] font-bold">{currentLang.code.toUpperCase()}</span>
                <ChevronDown size={10} className={`transform transition-transform ${showLangs ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showLangs && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 p-1 bg-surface border border-border shadow-2xl min-w-[120px]"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          i18n.changeLanguage(l.code);
                          setShowLangs(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-accent/10 transition-colors flex items-center justify-between group ${i18n.language === l.code ? 'text-accent' : 'text-text-dim'}`}
                      >
                        <span className="text-[10px] uppercase font-bold tracking-widest">{l.name}</span>
                        <span className="text-xs group-hover:scale-125 transition-transform">{l.flag}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => {
                const codes = languages.map(l => l.code);
                const nextIdx = (codes.indexOf(i18n.language.split('-')[0]) + 1) % codes.length;
                i18n.changeLanguage(codes[nextIdx]);
              }}
              className="text-accent text-[10px] font-bold border border-accent/20 px-2 py-1"
            >
              {currentLang.code.toUpperCase()}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg border-b border-border overflow-hidden"
          >
            <div className="px-10 pt-8 pb-12 flex flex-col space-y-8 text-center uppercase text-[12px] tracking-[0.2em] text-white">
              <NavLink href="#education">{t('nav.lessons')}</NavLink>
              <NavLink href="#tools">{t('nav.tools')}</NavLink>
              <NavLink href="#arena">{t('nav.arena')}</NavLink>
              <NavLink href="/blog">{t('nav.blog')}</NavLink>
              <NavLink href="/dictionary">{t('nav.dictionary')}</NavLink>
              <NavLink href="/career">{t('career.nav')}</NavLink>
              <NavLink href="#pricing" isAccent>{t('nav.partners')}</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
