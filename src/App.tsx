import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { ArrowLeft, Sparkles, Star, Shield, Users, MessageSquare } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-4">
            {/* Hero Banner Section */}
            <Hero onNavigate={setActiveTab} />

            {/* 4 Quick/Compact Services Boxes Grid */}
            <ServicesSection compact={true} onNavigate={setActiveTab} />

            {/* Quick/Compact Portfolio showcase (Top 6 Items) */}
            <PortfolioSection compact={true} />

            {/* Saudi Tech Call To Action Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-darker relative overflow-hidden text-center border-t border-b border-white/5">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green/10 via-transparent to-brand-green/20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />
              
              <div className="relative max-w-4xl mx-auto space-y-6">
                <div className="inline-flex items-center space-x-1.5 space-x-reverse bg-brand-gold/10 px-4 py-1.5 rounded-full border border-brand-gold/20 text-brand-gold text-xs font-semibold uppercase">
                  <Sparkles className="h-4 w-4 text-brand-gold" />
                  <span>خطوة نحو المستقبل الرقمي</span>
                </div>
                
                <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                  تبحث عن شريك ومبرمج محترف يثق بمتطلباتك؟
                </h2>
                
                <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                  نحن في <span className="text-brand-gold font-bold">شركة الحسن</span> نحول الأفكار المعقدة والمسودات إلى تجارب تكنولوجية ذات كفاءة وموثوقية عالية، مصممة خصيصاً لتناسب رؤيتك وعلامتك التجارية.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-brand-green hover:bg-brand-green-dark border-2 border-brand-gold/30 hover:border-brand-gold text-white hover:text-brand-gold text-lg font-bold shadow-[0_10px_30px_rgba(26,92,58,0.5)] cursor-pointer transition-all hover:scale-105 active:scale-95"
                  >
                    <span>تواصل معنا الآن للبدء</span>
                    <ArrowLeft className="h-5 w-5 mr-2" />
                  </button>
                  
                  <a
                    href="https://wa.me/201091383571"
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-lg border border-white/10 transition-all"
                  >
                    🚀 محادثة واتساب ثنائية
                  </a>
                </div>
              </div>
            </section>

            {/* Active Testimonials & Feedback Submission Grid Component */}
            <TestimonialsSection />
          </div>
        );
      case 'services':
        return <ServicesSection compact={false} onNavigate={setActiveTab} />;
      case 'portfolio':
        return <PortfolioSection compact={false} />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <Hero onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col justify-between">
      {/* Sticky Header Nav */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Container with slide-up screen transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer view */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Back to Top floating click action button */}
      <BackToTop />
    </div>
  );
}
