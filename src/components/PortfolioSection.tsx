import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PORTFOLIO_DATA } from '../data';
import { PortfolioItem } from '../types';
import { Filter, Calendar, User, AlignJustify, ExternalLink, Star, ChevronLeft, Layers, X } from 'lucide-react';

interface PortfolioSectionProps {
  compact?: boolean;
}

export default function PortfolioSection({ compact = false }: PortfolioSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  // Filter Categories
  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'web', label: 'تطوير الويب' },
    { id: 'mobile', label: 'تطبيقات الجوال' },
    { id: 'design', label: 'الهوية البصرية' },
    { id: 'edu', label: 'المحتوى التعليمي' }
  ];

  // If compact (for Home landing), we show high priority 6 items. Else (Portfolio page), we show all 9.
  const allProjects = PORTFOLIO_DATA;
  const filteredProjects = selectedFilter === 'all' 
    ? allProjects 
    : allProjects.filter(p => p.category === selectedFilter);

  const displayedProjects = compact ? filteredProjects.slice(0, 6) : filteredProjects;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark relative overflow-hidden">
      
      {/* Absolute Decorative elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-blue/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-brand-gold/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          {compact ? (
            <div className="space-y-2">
              <span className="text-brand-gold text-sm font-bold uppercase tracking-wider block">معرض أعمالنا المتميزة</span>
              <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-brand-gold bg-clip-text text-transparent">
                مقتطفات من مسيرة النجاح البرمجي
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
                نفخر بمشاركة نخبة قصيرة من الحلول التي أنتجناها لشركائنا محلياً في مجالات شتى.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-brand-blue text-sm font-bold uppercase tracking-wider block">سجل النجاحات الرقمية</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white">معرض أعمالنا (Portfolio)</h1>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
                نحول الأفكار المعقدة لواقع رقمي فريد ومحسّن. تصفح مشاريعنا الملهمة وصنع ريادتك الرقمية والجمالية اليوم.
              </p>
            </div>
          )}
        </div>

        {/* Category Filters (Only on full view or optionally on landing) */}
        {!compact && (
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((category) => {
              const isActive = selectedFilter === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-brand-green text-brand-gold shadow-[0_4px_12px_rgba(26,92,58,0.4)] border border-brand-gold/30'
                      : 'bg-white/5 text-gray-400 border border-white/5 hover:border-white/10 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        )}

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  onClick={() => setSelectedProject(project)}
                  className="group relative bg-[#181818] rounded-3xl overflow-hidden border border-white/5 hover:border-brand-gold/30 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.6)] transition-all duration-300 cursor-pointer"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-darker">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="object-cover w-full h-full transition-transform duration-500 scale-100 group-hover:scale-110"
                    />
                    
                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Category Label Overlay */}
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-brand-green/90 border border-brand-gold/30 text-brand-gold text-xs font-bold shadow-md">
                      {project.categoryLabel}
                    </span>

                    {/* Project Year Overlay */}
                    <span className="absolute bottom-4 left-4 flex items-center space-x-1 space-x-reverse bg-black/60 border border-white/10 px-2 py-1 rounded-md text-[10px] text-gray-300">
                      <Calendar className="h-3 w-3 text-brand-gold" />
                      <span>{project.year} م</span>
                    </span>
                  </div>

                  {/* Text details in the card */}
                  <div className="p-6 text-right">
                    <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors duration-200 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm font-medium mb-4 line-clamp-1">
                      {project.client}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Action Hint */}
                    <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-brand-blue text-xs font-semibold group-hover:text-brand-gold transition-colors">
                      <span>تفاصيل العميل والتقييمات</span>
                      <ChevronLeft className="h-4 w-4 group-hover:-translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {displayedProjects.length === 0 && (
          <div className="text-center py-20 bg-white/[0.01] rounded-3xl border border-white/5">
            <span className="text-4xl">📂</span>
            <p className="text-gray-400 mt-4 font-semibold text-lg">لم يتم العثور على مشاريع في هذا القسم بعد.</p>
            <p className="text-gray-500 text-sm mt-1">تجري شركة حسن إنهاء المزيد من الروائع لعرضها هنا قريباً.</p>
          </div>
        )}

      </div>

      {/* Full Detail Modal Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            
            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl bg-[#141414] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(26,92,58,0.4)] max-h-[92vh] overflow-y-auto"
            >
              
              {/* Floating Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 left-4 z-20 p-2 text-white bg-black/70 hover:bg-black/90 rounded-full border border-white/15 cursor-pointer backdrop-blur-sm"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Visual Half */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-brand-darker">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#141414] via-transparent to-transparent" />
                  
                  {/* Category overlay */}
                  <div className="absolute top-4 right-4 z-10 px-4 py-2 rounded-xl bg-brand-green border border-brand-gold/30 text-brand-gold font-bold text-sm">
                    {selectedProject.categoryLabel}
                  </div>
                </div>

                {/* Information Half */}
                <div className="p-6 sm:p-10 text-right flex flex-col justify-between">
                  <div className="space-y-6">
                    
                    {/* Header Details */}
                    <div>
                      <span className="text-xs text-brand-blue font-mono uppercase tracking-widest block mb-1">تفاصيل ومخرجات المشروع</span>
                      <h2 className="text-2xl sm:text-3.5xl font-extrabold text-white">
                        {selectedProject.title}
                      </h2>
                    </div>

                    {/* Metadata boxes */}
                    <div className="grid grid-cols-2 gap-4 border-t border-b border-white/5 py-4">
                      <div className="space-y-1">
                        <span className="text-[10px] text-gray-500 font-bold block uppercase">العميل الفعلي</span>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-300">
                          <User className="h-4 w-4 text-brand-green" />
                          <span className="line-clamp-1">{selectedProject.client}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-gray-500 font-bold block uppercase">سنة الصنع والإصدار</span>
                        <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-300">
                          <Calendar className="h-4 w-4 text-brand-gold" />
                          <span>عام {selectedProject.year} م</span>
                        </div>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-bold text-brand-gold uppercase tracking-wider">نطاق العمل والإنجاز:</h4>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Client testimonial if exists */}
                    {selectedProject.testimonial && (
                      <div className="p-4 rounded-2xl bg-brand-green/10 border border-brand-green/20 relative">
                        <span className="absolute top-2 left-4 text-4xl text-brand-gold/20 select-none">”</span>
                        <div className="flex items-center space-x-1 space-x-reverse mb-2">
                          {[...Array(selectedProject.testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                          ))}
                        </div>
                        <p className="text-gray-300 text-xs sm:text-sm italic mb-2 leading-relaxed">
                          « {selectedProject.testimonial.comment} »
                        </p>
                        <span className="text-[11px] font-bold text-brand-gold block">
                          - {selectedProject.testimonial.clientName}
                        </span>
                      </div>
                    )}

                  </div>

                  {/* Inner Action buttons */}
                  <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                    {selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex-1 py-3.5 rounded-xl bg-[#00d4ff] hover:bg-[#00b2d6] text-black font-extrabold text-center text-sm transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>زيارة موقع المشروع</span>
                      </a>
                    )}
                    <a
                      href="https://wa.me/201091383571"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="flex-1 py-3.5 rounded-xl bg-brand-green hover:bg-brand-green-dark text-white font-bold text-center border border-brand-gold/30 text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <span>💬 استفسر عن مشروع مماثل</span>
                    </a>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10"
                    >
                      إغلاق النافذة
                    </button>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
