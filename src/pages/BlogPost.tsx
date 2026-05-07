import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, ChevronRight, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { blogPostsData } from '../data/blogPostsData';
import { dictionaryData } from '../data/dictionaryData';
import { linkifyContent } from '../utils/termLinker';

export default function BlogPost() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const currentLang = (i18n.language.split('-')[0] || 'en') as 'en' | 'cs' | 'pl';
  
  const post = blogPostsData[slug || ''];

  // Pro-linking: Process content to add automatic links
  const processedContent = useMemo(() => {
    if (!post) return '';
    return linkifyContent(post.content[currentLang], dictionaryData, currentLang);
  }, [post, currentLang]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title[currentLang]} | Finademica`;
      // Update meta description
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', post.excerpt[currentLang]);
    }
  }, [post, currentLang]);

  // Handle SPA navigation for pro-links
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.classList.contains('pro-link')) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          navigate(href);
          window.scrollTo(0, 0);
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [navigate]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Post not found</h1>
          <button onClick={() => navigate('/blog')} className="text-accent underline">Back to Blog</button>
        </div>
      </div>
    );
  }

  // Find related dictionary terms
  const relatedTermsData = dictionaryData.filter(d => post.relatedTerms.includes(d.slug));

  // Dynamic TOC Generation
  const [toc, setToc] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    if (post) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = post.content[currentLang];
      const h2s = tempDiv.querySelectorAll('h2');
      const tocItems = Array.from(h2s).map(h2 => ({
        id: h2.id || h2.innerText.toLowerCase().replace(/\s+/g, '-'),
        text: h2.innerText
      }));
      setToc(tocItems);
    }
  }, [post, currentLang]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-bg min-h-screen">
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/30 mb-12">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <ChevronRight size={10} />
            <span className="text-accent">{post.category}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-8 leading-[1.1] tracking-tighter">
              {post.title[currentLang]}
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-white/40 mb-16 border-y border-white/5 py-6">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-accent" />
                {new Date(post.date).toLocaleDateString(currentLang)}
              </div>
              <div className="flex items-center gap-2">
                <User size={14} className="text-accent" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Tag size={14} className="text-accent" />
                {post.category}
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-16">
              {/* Sidebar / TOC */}
              <aside className="lg:w-1/4 hidden lg:block">
                <div className="sticky top-32">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-6">Table of Contents</h4>
                  <nav className="flex flex-col gap-4">
                    {toc.map(item => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="text-[11px] text-left text-text-dim hover:text-accent transition-colors border-l border-white/5 pl-4 py-1 hover:border-accent"
                      >
                        {item.text}
                      </button>
                    ))}
                  </nav>

                  <div className="mt-16 p-6 border border-accent/20 bg-accent/5 rounded-sm">
                    <h5 className="text-sm font-serif mb-4 text-white">Join the Academy</h5>
                    <p className="text-[10px] text-text-dim leading-relaxed mb-6">Master the markets with institutional tools and AI analysis.</p>
                    <Link to="/#pricing" className="text-[9px] uppercase tracking-widest text-accent font-bold border-b border-accent pb-1 hover:text-white hover:border-white transition-colors">Get Access Now</Link>
                  </div>
                </div>
              </aside>

              {/* Article Content */}
              <div className="lg:w-3/4">
                <div 
                  className="prose prose-invert prose-accent max-w-none 
                    prose-h2:text-3xl prose-h2:font-serif prose-h2:font-light prose-h2:mt-12 prose-h2:mb-6 scroll-mt-32
                    prose-h3:text-xl prose-h3:font-serif prose-h3:mt-10 prose-h3:mb-4
                    prose-p:text-lg prose-p:font-light prose-p:leading-relaxed prose-p:text-text-dim
                    prose-strong:text-white prose-strong:font-bold
                    prose-ul:list-disc prose-ul:pl-6 prose-li:text-text-dim prose-li:mb-2"
                  dangerouslySetInnerHTML={{ __html: post.content[currentLang] }} 
                />

                {/* Related Dictionary Terms */}
                <div className="mt-24 pt-16 border-t border-white/5">
                  <h3 className="text-2xl font-serif mb-8 flex items-center gap-3">
                    <BookOpen size={24} className="text-accent" />
                    {currentLang === 'cs' ? 'Související pojmy' : currentLang === 'pl' ? 'Powiązane pojęcia' : 'Related Terms'}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {relatedTermsData.map(term => (
                      <Link 
                        key={term.slug}
                        to="/dictionary" 
                        className="p-6 bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all group flex items-center justify-between"
                      >
                        <div>
                          <span className="text-xs text-accent font-bold uppercase tracking-widest mb-1 block">Glossary</span>
                          <span className="text-lg font-serif">{term.title[currentLang]}</span>
                        </div>
                        <ArrowLeft className="rotate-180 text-white/20 group-hover:text-accent transition-colors" size={20} />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-20">
                  <button 
                    onClick={() => navigate('/blog')}
                    className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-white/50 hover:text-accent transition-colors"
                  >
                    <ArrowLeft size={16} />
                    Back to Articles
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
