import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { Briefcase, Target, TrendingUp, Users, ArrowRight, CheckCircle2, Send, Loader2 } from 'lucide-react';

const careerVideos = [
  "/video_web_1.mp4",
  "/Video_web_2.mp4",
  "/Video_web_3.mp4"
];

const roadmapImages = [
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
];

const WEBHOOK_URL = "https://services.leadconnectorhq.com/hooks/INxLO0R2O5UzkQsOeiNw/webhook-trigger/eba136f1-c7dc-409d-b538-c30eae05a02c";

export default function Career() {
  const { t } = useTranslation();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % careerVideos.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const whyItems = t('career.why.items', { returnObjects: true }) as any[];
  const roadmapSteps = t('career.roadmap.steps', { returnObjects: true }) as any[];

  const icons = [<Target className="w-6 h-6" />, <Users className="w-6 h-6" />, <TrendingUp className="w-6 h-6" />];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-bg min-h-screen">
      {/* Section 1: Hero with Video Loop & Diagonal Split */}
      <section id="career-hero" className="relative min-h-screen lg:h-screen flex items-center pt-32 lg:pt-20 pb-20 lg:pb-0 overflow-hidden bg-bg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVideo}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            {/* Background Video (Full Screen) */}
            <div className="absolute inset-0 z-0 overflow-hidden">
               <video
                 autoPlay
                 muted
                 loop
                 playsInline
                 className="w-full h-full object-cover"
                 src={careerVideos[currentVideo]}
               />
               {/* Dark Overlays: Left side semi-transparent, right side fully transparent */}
               <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-transparent z-10 w-full" />
               
               {/* Ambient Brand Glows */}
               <div className="absolute top-0 left-0 w-1/2 h-full bg-accent/20 blur-[120px] pointer-events-none" />
               <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Left Side: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:w-3/5"
            >
              <span className="text-accent font-sans text-[10px] uppercase tracking-[0.4em] mb-6 block font-bold">
                {t('career.hero.label')}
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-[84px] font-serif font-light mb-8 leading-[1.2] lg:leading-[1.1] tracking-tighter text-white">
                {t('career.hero.headline')}
              </h2>
              <p className="text-xl text-text-dim max-w-lg mb-10 font-sans font-light leading-relaxed">
                {t('career.hero.subheadline')}
              </p>
              <div className="flex flex-wrap gap-6">
                <a href="#apply" className="px-10 py-5 bg-gradient-to-r from-accent to-blue-600 text-white font-bold text-[11px] uppercase tracking-widest hover:scale-[1.05] transition-all rounded-sm flex items-center gap-3 group shadow-2xl shadow-accent/40">
                  {t('career.form.submit')} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-4 text-text-dim text-[10px] uppercase tracking-widest border border-white/10 px-8 py-5 rounded-sm backdrop-blur-md">
                  <CheckCircle2 size={14} className="text-accent" />
                  {t('career.form.degreeMsg')}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-10 relative z-10 py-16 lg:py-32">
        {/* Section 2: Why Finademica? */}
        <div className="mb-24 lg:mb-48">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-12 lg:mb-20 text-center"
          >
            {t('career.why.title')}
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            {whyItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-gradient-to-b from-white/[0.05] to-transparent backdrop-blur-md border border-white/10 p-12 rounded-sm hover:border-accent/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[50px] group-hover:bg-accent/20 transition-colors duration-500" />
                <div className="text-accent mb-10 group-hover:scale-110 transition-transform duration-500">
                  {icons[idx]}
                </div>
                <h4 className="text-2xl font-serif mb-6 text-white group-hover:text-accent transition-colors">
                  {item.title}
                </h4>
                <p className="text-text-dim text-base font-sans font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 3: Hybrid Role */}
        <div className="mb-24 lg:mb-48 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif font-light mb-12 lg:mb-16 leading-tight">
              {t('career.role.title')}
            </h3>
            
            <div className="space-y-16">
              <div className="relative pl-12 border-l border-accent/20">
                <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] bg-accent rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
                <h4 className="text-xl font-serif text-accent mb-4 font-bold uppercase tracking-tight">{t('career.role.analysis.title')}</h4>
                <p className="text-text-dim text-base font-sans font-light leading-relaxed">
                  {t('career.role.analysis.desc')}
                </p>
              </div>
              
              <div className="relative pl-12 border-l border-accent/20">
                <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] bg-accent rounded-full shadow-[0_0_20px_rgba(99,102,241,0.6)]" />
                <h4 className="text-xl font-serif text-accent mb-4 font-bold uppercase tracking-tight">{t('career.role.communication.title')}</h4>
                <p className="text-text-dim text-base font-sans font-light leading-relaxed">
                  {t('career.role.communication.desc')}
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group"
          >
            <div className="absolute inset-0 bg-accent/20 z-10 mix-blend-overlay group-hover:bg-accent/30 transition-colors" />
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200" 
              alt="Office" 
              className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent z-20" />
            <div className="absolute bottom-12 left-12 right-12 z-30 backdrop-blur-xl bg-black/60 p-10 border border-white/10">
              <div className="flex items-center gap-5 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-bg">
                  <Briefcase size={22} />
                </div>
                <span className="text-xs uppercase tracking-widest font-bold">{t('career.form.floorAccess')}</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{t('career.form.floorDesc')}</p>
            </div>
          </motion.div>
        </div>

        {/* Section 4: Roadmap */}
        <div className="mb-24 lg:mb-48">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-12 lg:mb-20 text-center"
          >
            {t('career.roadmap.title')}
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative h-[450px] overflow-hidden rounded-sm border border-white/10 hover:border-accent/50 transition-all duration-700"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={roadmapImages[idx]} 
                    alt={step.title}
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-[50%] group-hover:scale-110 group-hover:brightness-75 transition-all duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <span className="text-accent text-5xl font-serif mb-6 block opacity-60 group-hover:opacity-100 transition-opacity">
                      {step.time}
                    </span>
                    <h4 className="text-2xl font-serif text-white mb-4 leading-tight">{step.title}</h4>
                    <p className="text-white/70 text-sm font-sans font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
                
                {/* Ambient Glow */}
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 5: Apply Form */}
        <section id="apply" className="relative py-12 lg:py-24 scroll-mt-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 lg:mb-16">
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-serif font-light mb-6">{t('career.form.title')}</h3>
              <p className="text-text-dim font-sans font-light">{t('career.form.desc')}</p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/[0.03] border border-accent/30 p-20 text-center rounded-sm backdrop-blur-md"
              >
                <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-8 text-bg">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-3xl font-serif mb-4">{t('career.form.success')}</h4>
                <p className="text-text-dim">{t('career.form.successDesc')}</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white/[0.02] backdrop-blur-md p-10 md:p-16 border border-white/5 rounded-sm">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('career.form.firstName')}</label>
                  <input required name="firstName" type="text" className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('career.form.placeholders.firstName')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('career.form.lastName')}</label>
                  <input required name="lastName" type="text" className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('career.form.placeholders.lastName')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('career.form.email')}</label>
                  <input required name="email" type="email" className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('career.form.placeholders.email')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('career.form.phone')}</label>
                  <input required name="phone" type="tel" className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('career.form.placeholders.phone')} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('career.form.education')}</label>
                  <select required name="education" className="w-full bg-bg border border-white/10 px-5 py-4 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light appearance-none">
                    <option value="" disabled selected>{t('career.form.educationOptions.select')}</option>
                    <option value="High School">{t('career.form.educationOptions.highSchool')}</option>
                    <option value="Bachelor">{t('career.form.educationOptions.bachelor')}</option>
                    <option value="Master">{t('career.form.educationOptions.master')}</option>
                    <option value="Other">{t('career.form.educationOptions.other')}</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-accent font-bold">{t('career.form.field')}</label>
                  <input required name="field" type="text" className="w-full bg-white/[0.03] border border-white/10 px-5 py-4 rounded-sm focus:border-accent outline-none transition-colors text-white font-sans font-light" placeholder={t('career.form.placeholders.field')} />
                </div>
                
                <div className="md:col-span-2 pt-8">
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full py-5 bg-accent text-bg font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-white transition-all rounded-sm flex items-center justify-center gap-4 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                         {t('career.form.submit')}
                        <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
      
      {/* Decorative Footer Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
