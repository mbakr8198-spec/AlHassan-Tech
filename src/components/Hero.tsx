import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Shield, Award, Zap } from 'lucide-react';

interface HeroProps {
  onNavigate: (tabId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-l from-[#1a5c3a] to-[#14442b] border-b-4 border-[#ffd700] py-12 px-4 sm:px-6 lg:px-8">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#ffd700]/15 blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#00d4ff]/10 blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-[#ffd700]/10 pointer-events-none" />

      {/* SVG Wireframe Background from Sleek Design */}
      <div className="absolute left-0 bottom-0 top-0 w-1/3 opacity-15 bg-[radial-gradient(circle_at_center,_#ffd700_0%,_transparent_70%)] flex items-center justify-center pointer-events-none">
        <svg width="320" height="320" viewBox="0 0 24 24" fill="none" stroke="#ffd700" strokeWidth="0.5">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" />
          <path d="M2 17L12 22L22 17" />
          <path d="M2 12L12 17L22 12" />
        </svg>
      </div>

      {/* Grid Pattern overlay for tech aesthetics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        
        {/* Flag Badge & Sparkles */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 space-x-reverse px-4 py-1.5 rounded-full bg-black/35 border border-[#ffd700]/35 text-brand-gold text-xs sm:text-sm mb-8 shadow-2xl"
        >
          <Sparkles className="h-4 w-4 text-brand-gold animate-bounce" />
          <span className="font-semibold tracking-wide text-brand-gold">إبداع رقمي هادف ومستدام</span>
          <span className="text-gray-300">|</span>
          <span className="font-bold text-white">إتقان وريادة 🚀</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white"
        >
          <span className="block text-white mb-2">الحسن</span>
          <span className="bg-gradient-to-r from-brand-gold via-white to-white bg-clip-text text-transparent">
            شريكك التقني والبرمجي المتكامل
          </span>
        </motion.h1>

        {/* Dynamic Tag Pills from Sleek Theme */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex justify-center gap-3 mb-8"
        >
          <div className="bg-[#00d4ff]/20 border border-[#00d4ff] px-4 py-1.5 rounded text-[#00d4ff] text-sm font-semibold">
            #تحول_رقمي
          </div>
          <div className="bg-[#ffd700]/20 border border-[#ffd700] px-4 py-1.5 rounded text-[#ffd700] text-sm font-semibold">
            #ريادة_الابتكار
          </div>
        </motion.div>

        {/* Middle Phrase: نبرمج .. نصمم .. نبدع */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center space-x-4 sm:space-x-8 space-x-reverse mb-8"
        >
          <div className="flex items-center bg-black/20 border border-white/10 px-5 py-2.5 rounded-2xl shadow-inner hover:border-brand-green/40 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] ml-2 shadow-[0_0_8px_#10b981]" />
            <span className="font-bold text-lg sm:text-2xl text-white">نبرمج</span>
          </div>
          <span className="text-brand-gold font-bold text-2xl">••</span>
          <div className="flex items-center bg-black/20 border border-white/10 px-5 py-2.5 rounded-2xl shadow-inner hover:border-brand-blue/40 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-blue ml-2 shadow-[0_0_8px_#00d4ff]" />
            <span className="font-bold text-lg sm:text-2xl text-white">نصمم</span>
          </div>
          <span className="text-brand-gold font-bold text-2xl">••</span>
          <div className="flex items-center bg-black/20 border border-white/10 px-5 py-2.5 rounded-2xl shadow-inner hover:border-brand-gold/40 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-gold ml-2 shadow-[0_0_8px_#ffd700]" />
            <span className="font-bold text-lg sm:text-2xl text-white">نبدع</span>
          </div>
        </motion.div>

        {/* Supporting Description */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-xl text-gray-100 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          نبرمج .. نصمم .. نبدع. نقدم حلولاً تقنية متكاملة تواكب رؤية 2030 وتدعم نجاح أعمالكم ببرك تقنية مطوّرة وتصميمات عصرية جذابة.
        </motion.p>

        {/* Buttons Group */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16"
        >
          <button
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1a5c3a] font-black text-lg hover:bg-brand-gold hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center space-x-2 space-x-reverse shadow-xl border-2 border-transparent"
          >
            <span>ابدأ مشروعك معنا الآن</span>
            <ArrowLeft className="h-5 w-5 mr-1" />
          </button>
          
          <button
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent hover:bg-white/15 text-white font-bold text-lg border-2 border-white/80 transition-all cursor-pointer"
          >
            اكتشف خدماتنا الكاملة
          </button>
        </motion.div>

        {/* Extra Security & Excellence Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4 border-t border-white/5 text-center text-xs sm:text-sm text-gray-400"
        >
          <div className="flex items-center justify-center space-x-1.5 space-x-reverse bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.03]">
            <Shield className="h-4 w-4 text-brand-green" />
            <span>خصوصية وحماية ١٠٠٪</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5 space-x-reverse bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.03]">
            <Award className="h-4 w-4 text-brand-gold" />
            <span>كادر هندسي مبدع</span>
          </div>
          <div className="flex items-center justify-center space-x-1.5 space-x-reverse bg-white/[0.02] p-2.5 rounded-xl border border-white/[0.03]">
            <Zap className="h-4 w-4 text-brand-blue" />
            <span>دعم فني مستمر بموثوقية</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
