import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  compact?: boolean;
  onNavigate?: (tabId: string) => void;
}

export default function ServicesSection({ compact = false, onNavigate }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // Render Lucide icons dynamically
  const renderIcon = (iconName: string, className = "h-8 w-8") => {
    // Falls back to Sparkles if not found
    const IconComponent = (Icons as any)[iconName] || Icons.Sparkles;
    return <IconComponent className={className} />;
  };

  // Determine which list to show (on Home page, we show a clean compact grid, on Services page we show full list)
  const displayServices = SERVICES_DATA;

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-brand-dark/50 relative overflow-hidden ${
      compact ? 'border-t border-b border-white/5' : 'min-h-[80vh]'
    }`}>
      
      {/* Visual background details */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-12">
          {compact ? (
            <div className="space-y-2">
              <span className="text-brand-blue text-sm font-semibold tracking-wide uppercase block">حلول متكاملة تضمن لك الريادة</span>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-brand-gold bg-clip-text text-transparent">
                الخدمات الأساسية التي نتميز بها
              </h2>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-brand-gold text-sm font-bold tracking-widest block uppercase">خدماتنا فائقة الحرفية</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white">ماذا يمكننا أن نصنع لأجلك؟</h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                نستثمر خبراتنا التقنية والفنية لنقدم حزمة من الحلول الرقمية الشاملة والمصممة خصيصاً لتناسب متطلبات تطور علامتك ومشاريعك في المملكة.
              </p>
            </div>
          )}
        </div>

        {/* 4 Cards Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {displayServices.map((service, index) => {
            // Give each service its branding accent color
            const getAccentColor = (id: string) => {
              switch (id) {
                case 'web': return 'border-t-4 border-[#00d4ff] bg-[#242424] text-white hover:-translate-y-2 duration-300 transition-all shadow-xl';
                case 'mobile': return 'border-t-4 border-[#ffd700] bg-[#242424] text-white hover:-translate-y-2 duration-300 transition-all shadow-xl';
                case 'design': return 'border-t-4 border-[#1a5c3a] bg-[#242424] text-white hover:-translate-y-2 duration-300 transition-all shadow-xl';
                case 'edu': return 'border-t-4 border-[#00d4ff] bg-[#242424] text-white hover:-translate-y-2 duration-300 transition-all shadow-xl';
                default: return 'border-t-4 border-white bg-[#242424] text-white hover:-translate-y-2 duration-300 transition-all shadow-xl';
              }
            };

            const getAccentBg = (id: string) => {
              switch (id) {
                case 'web': return 'bg-[#00d4ff]/10 text-[#00d4ff]';
                case 'mobile': return 'bg-[#ffd700]/10 text-[#ffd700]';
                case 'design': return 'bg-[#1a5c3a]/20 text-[#1a5c3a]';
                case 'edu': return 'bg-[#00d4ff]/10 text-[#00d4ff]';
                default: return 'bg-white/10 text-white';
              }
            };

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 ${getAccentColor(service.id)}`}
              >
                <div>
                  {/* Decorative corner tag */}
                  <span className="absolute top-4 left-4 text-[10px] uppercase font-mono tracking-wider opacity-30 select-none">
                    0{index + 1}
                  </span>

                  {/* Icon Frame */}
                  <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${getAccentBg(service.id)}`}>
                    {renderIcon(service.icon)}
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-gold transition-colors duration-200">
                    {service.title.split('(')[0].trim()}
                  </h3>
                  
                  <span className="text-xs font-mono text-gray-500 block mb-3">
                    {service.title.includes('(') ? '(' + service.title.split('(')[1] : ''}
                  </span>

                  {/* Short Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Card Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-3.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white text-sm font-semibold border border-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <span>ثقة وإبداع • اعرف أكثر</span>
                  <Icons.ArrowLeft className="h-4 w-4 mr-1 group-hover:-translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Home Compact Helper Redirect */}
        {compact && onNavigate && (
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center px-8 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-dark border border-brand-gold/20 hover:border-brand-gold text-white font-bold text-base transition-all"
            >
              عرض التفاصيل وخطة الأسعار المتميزة
            </button>
          </div>
        )}

      </div>

      {/* "Know More" Detailed Modal Panel */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-darker rounded-3xl p-6 sm:p-10 border border-white/10 shadow-[0_20px_50px_rgba(26,92,58,0.3)] overflow-y-auto max-h-[90vh] text-right"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 left-4 p-2 text-gray-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all cursor-pointer"
              >
                <Icons.X className="h-5 w-5" />
              </button>

              {/* Icon & Long Title */}
              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <div className="p-4 rounded-2xl bg-brand-green/20 text-brand-gold border border-brand-green/30">
                  {renderIcon(selectedService.icon, "h-10 w-10 text-brand-gold")}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {selectedService.title}
                  </h2>
                  <span className="text-xs text-brand-blue font-mono">الحل الأكثر ذكاءً وملائمة</span>
                </div>
              </div>

              {/* Detailed Explanation */}
              <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed mb-8 border-b border-white/5 pb-6">
                {selectedService.fullDescription}
              </p>

              {/* Features List */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-brand-gold mb-4 flex items-center space-x-2 space-x-reverse">
                  <Icons.CheckCircle className="h-5 w-5 text-brand-green" />
                  <span>مميزات الخدمة الأساسية مع شركة الحسن:</span>
                </h4>
                <ul className="space-y-3">
                  {selectedService.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2.5 space-x-reverse text-sm sm:text-base text-gray-300">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-green/20 text-brand-gold text-xs font-mono mt-0.5">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <h4 className="text-sm font-bold tracking-widest text-brand-blue uppercase mb-3">
                  التقنيات والأدوات المستخدمة (Tech Stack):
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-lg bg-brand-green/10 text-brand-gold text-xs sm:text-sm font-mono border border-brand-green/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    if (onNavigate) onNavigate('contact');
                  }}
                  className="flex-1 py-4.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-bold text-center border border-brand-gold/30 shadow-[0_5px_15px_rgba(26,92,58,0.3)] cursor-pointer"
                >
                  🚀 اطلب الخدمة الآن للنشاط
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="py-4.5 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-center border border-white/10 cursor-pointer"
                >
                  إغلاق
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
