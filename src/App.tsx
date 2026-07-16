import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CareerPage from './pages/CareerPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Dictionary from './pages/Dictionary';
import { motion, useScroll, useSpring } from 'motion/react';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppContent() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-accent selection:text-space-black">
      <ScrollToTop />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-20 left-0 right-0 h-[2px] bg-accent z-50 origin-[0%]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/dictionary" element={<Dictionary />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
