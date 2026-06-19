import { useState } from 'react';
import { Menu, X, Globe, Smartphone, Palette, Video } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'portfolio', label: 'أعمالنا' },
    { id: 'about', label: 'من نحن' },
    { id: 'contact', label: 'تواصل معنا' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a5c3a] border-b-2 border-[#ffd700] transition-all duration-300 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center space-x-3 space-x-reverse cursor-pointer group"
          >
            <div className="w-11 h-11 bg-white rounded-lg flex items-center justify-center border-2 border-[#ffd700] transition-all duration-300 group-hover:bg-[#ffd700]">
              {/* Futuristic Abstract Logo Mark */}
              <span className="font-extrabold text-xl text-[#1a5c3a] group-hover:text-white transition-colors duration-300">أ</span>
            </div>
            
            <div className="flex flex-col">
              <span className="font-bold text-2xl tracking-wide text-white group-hover:text-brand-gold transition-colors duration-300">
                الحسن
              </span>
              <span className="text-[10px] text-brand-blue font-mono tracking-widest text-right">
                للحلول التقنية
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-[16px] font-medium transition-all duration-200 cursor-pointer ${
                    isActive 
                      ? 'text-brand-gold' 
                      : 'text-gray-100 hover:text-[#00d4ff]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gold rounded-full shadow-[0_0_8px_#ffd700]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* WhatsApp Call To Action Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/201091383571"
              target="_blank"
              referrerPolicy="no-referrer"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-white text-[#1a5c3a] font-black text-sm border-2 border-transparent hover:bg-brand-gold hover:text-white transition-colors duration-300 shadow-lg"
            >
              🚀 ابدأ مشروعك
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg bg-white/5 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-darker border-b border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3 text-right">
            {navigationItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full py-3 px-4 rounded-lg text-base font-semibold text-right transition-all ${
                    isActive
                      ? 'bg-brand-green text-brand-gold border-r-4 border-brand-gold'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-4 px-4">
              <a
                href="https://wa.me/201091383571"
                target="_blank"
                referrerPolicy="no-referrer"
                className="flex items-center justify-center w-full py-3 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-bold text-center border border-brand-gold/20"
              >
                💬 تواصل واتساب مباشر
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
