import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Globe, ArrowLeft, ArrowUp } from 'lucide-react';

interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  
  const handleFooterNavClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker border-t border-white/5 pt-16 pb-8 text-right relative overflow-hidden">
      
      {/* Decorative linear overlay */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Sleek Theme Statistics Block */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-[#1a5c3a]/20 p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            <div className="flex flex-col">
              <span className="text-[#ffd700] font-black text-3xl">+٥٠</span>
              <span className="text-xs text-gray-300 font-medium mt-1">مشروع تقني متكامل</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block self-center" />
            <div className="flex flex-col">
              <span className="text-[#00d4ff] font-black text-3xl">+٣٠</span>
              <span className="text-xs text-gray-300 font-medium mt-1">عميل فخور ومستمر</span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block self-center" />
            <div className="flex flex-col">
              <span className="text-[#ffd700] font-black text-3xl">+٥</span>
              <span className="text-xs text-gray-300 font-medium mt-1">سنوات تميز وعطاء تقني</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 border-t md:border-t-0 border-white/10 pt-6 md:pt-0 w-full md:w-auto justify-between">
            <div className="flex gap-3 justify-center">
              <span className="w-10 h-10 bg-[#242424] rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff] transition-all cursor-pointer">𝕏</span>
              <span className="w-10 h-10 bg-[#242424] rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-brand-gold hover:border-brand-gold transition-all cursor-pointer">in</span>
              <span className="w-10 h-10 bg-[#242424] rounded-full flex items-center justify-center border border-white/10 text-gray-400 hover:text-[#ffd700] hover:border-[#ffd700] transition-all cursor-pointer">ig</span>
            </div>
            <div className="text-center sm:text-right sm:border-r border-white/20 sm:pr-6">
              <p className="text-sm font-semibold text-white">واتساب: 01091383571</p>
              <p className="text-xs text-[#00d4ff] font-mono mt-1">ALHASSANBAKR2@GMAIL.COM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Bio column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo Section */}
            <div 
              onClick={() => handleFooterNavClick('home')} 
              className="flex items-center space-x-3 space-x-reverse cursor-pointer inline-flex"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-green border border-brand-gold/30 shadow-[0_0_12px_rgba(26,92,58,0.4)]">
                <span className="font-extrabold text-lg text-brand-gold">أ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-white tracking-wide">
                  الحسن
                </span>
                <span className="text-[9px] text-brand-blue font-mono tracking-widest text-right">
                  للحلول التقنية
                </span>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              شركة الحسن لتقنية المعلومات والحلول البرمجية هي شركة رائدة في تمكين ومساندة المشاريع الناشئة والشركات الرائدة وتطوير الأعمال، نصمم مواقعكم وتطبيقاتكم بأقوى مستويات الإبداع والموثوقية.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 space-x-reverse">
              <a 
                href="https://twitter.com/alhasan_tech" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="p-3 bg-white/5 hover:bg-brand-blue hover:text-black rounded-xl border border-white/10 text-gray-300 transition-all shadow-sm"
                aria-label="Twitter X"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a 
                href="https://linkedin.com/company/alhasan-tech" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="p-3 bg-white/5 hover:bg-brand-blue hover:text-black rounded-xl border border-white/10 text-gray-300 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com/alhasan_tech" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="p-3 bg-white/5 hover:bg-brand-blue hover:text-black rounded-xl border border-white/10 text-gray-300 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/201091383571" 
                target="_blank" 
                referrerPolicy="no-referrer"
                className="p-3 bg-white/5 hover:bg-brand-green hover:text-white rounded-xl border border-white/10 text-gray-300 transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <Phone className="h-4 w-4" />
              </a>
            </div>

          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-6 sm:pr-8">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#999999] border-r-2 border-brand-gold pr-3">مستكشف الصفحات</h4>
            <ul className="space-y-3 font-medium text-[15px]">
              {[
                { id: 'home', label: 'الرئيسية' },
                { id: 'services', label: 'خدماتنا الرقمية' },
                { id: 'portfolio', label: 'تصفح أعمالنا' },
                { id: 'about', label: 'قصتنا ومن نحن' },
                { id: 'contact', label: 'تواصل مباشرة' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleFooterNavClick(link.id)}
                    className={`hover:-translate-x-1.5 transition-all outline-none cursor-pointer text-sm ${
                      activeTab === link.id ? 'text-brand-gold font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    ← {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#999999] border-r-2 border-brand-blue pr-3">خدمات متميزة</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-medium">
              <li>
                <button onClick={() => handleFooterNavClick('services')} className="hover:text-white transition-colors cursor-pointer">
                  • تطوير وبرمجة مواقع الويب
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterNavClick('services')} className="hover:text-white transition-colors cursor-pointer">
                  • تطبيقات الآيفون والأندرويد
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterNavClick('services')} className="hover:text-white transition-colors cursor-pointer">
                  • الهوية البصرية والشعارات
                </button>
              </li>
              <li>
                <button onClick={() => handleFooterNavClick('services')} className="hover:text-white transition-colors cursor-pointer">
                  • عروض الباوربوينت والفيديوهات
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details quick summary */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#999999] border-r-2 border-brand-green pr-3">طرق التواصل</h4>
            <div className="text-xs text-gray-400 space-y-3 leading-relaxed">
              <p className="flex items-center space-x-1.5 space-x-reverse">
                <Mail className="h-3.5 w-3.5 text-brand-blue shrink-0" />
                <span className="font-bold">alhassanbakr2@gmail.com</span>
              </p>
              <p className="flex items-center space-x-1.5 space-x-reverse">
                <Phone className="h-3.5 w-3.5 text-brand-green shrink-0" />
                <span className="font-bold text-left">01091383571</span>
              </p>
            </div>
          </div>

        </div>

        {/* Copy Rights & Vision Footnote */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          
          <p className="text-gray-500 text-xs font-mono">
            © {currentYear} شركة الحسن للحلول التقنية والبرمجيات. جميع الحقوق محفوظة لعملائنا الكرام.
          </p>

          <div className="flex items-center space-x-1.5 space-x-reverse text-xs text-gray-400 font-semibold bg-white/[0.01] border border-white/5 px-4.5 py-1.5 rounded-full select-none">
            <span>صُنع بشغف لتمكين ريادة الأعمال والحلول الرقمية المتكاملة 🚀</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
