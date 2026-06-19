import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, MessageSquareCode, Sparkles, Send, Sparkle, User, Building, Quote } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  text: string;
  createdAt: string;
}

const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'م. عبد الله الحربي',
    company: 'الدمام للفنون العقارية',
    rating: 5,
    text: 'صممت لي شركة الحسن موقعاً عقارياً غاية في السرعة والتوافق التام مع الجوالات، فضلًا عن الدعم والمواكبة المستمرة، أنصح بقوة بالتعامل معهم.',
    createdAt: '2026-05-10'
  },
  {
    id: 't2',
    name: 'أ. ريم السليمان',
    company: 'مؤسسة نجد تكنولوجي',
    rating: 5,
    text: 'الهوية البصرية واللوجو الذي صممه فريق الحسن لعلامتنا حظي بإعجاب جميع عملائنا وجسَّد الرقي والأصالة التي نبحث عنها، مخلصون تماماً لمواعيدهم.',
    createdAt: '2026-05-24'
  },
  {
    id: 't3',
    name: 'أ. محمد بكر مصطفى',
    company: 'منصة خلود العلمية',
    rating: 5,
    text: 'تجاوب غير عادي وجودة فائقة في البرمجة والتصميم. موقع منصة خلود العلمية أصبح بوابتنا الرسمية وبأداء برمجى احترافي من الطراز الأول.',
    createdAt: '2026-06-02'
  }
];

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Load testimonials
  useEffect(() => {
    const saved = localStorage.getItem('alhasan_testimonials');
    if (saved) {
      try {
        setTestimonials(JSON.parse(saved));
      } catch (e) {
        setTestimonials(INITIAL_TESTIMONIALS);
      }
    } else {
      setTestimonials(INITIAL_TESTIMONIALS);
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text || !company) {
      alert('الرجاء تعبئة كافة الحقول المطلوبة بمصداقية.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newTestimonial: Testimonial = {
        id: 'user_t_' + Math.random().toString(36).substring(2, 9),
        name,
        company,
        rating,
        text,
        createdAt: new Date().toISOString().split('T')[0]
      };

      const updated = [newTestimonial, ...testimonials];
      setTestimonials(updated);
      localStorage.setItem('alhasan_testimonials', JSON.stringify(updated));

      // Reset
      setName('');
      setCompany('');
      setRating(5);
      setText('');
      
      setLoading(false);
      setMessage('شكرًا لثقتك الغالية! تم تسجيل تقييمك بنجاح ويعرض الآن فوراً بالمنصة.');
      
      setTimeout(() => {
        setMessage('');
      }, 5000);
    }, 1000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark relative text-right overflow-hidden">
      {/* Ambient neon gradient circles */}
      <div className="absolute top-1/4 right-0 w-72 h-72 rounded-full bg-brand-green/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-brand-blue/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-1.5 space-x-reverse bg-brand-blue/10 px-4 py-1 rounded-full border border-brand-blue/20 text-brand-blue text-xs font-bold mb-3">
            <Sparkle className="h-3.5 w-3.5 animate-pulse text-brand-blue" />
            <span>آراء ملهمة وشهادات حقيقية</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">آراء وتقييمات عملائنا (Reviews)</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base mt-2">
            نسعد ونفخر بكل رأي يسطره شركاء نجاحنا. تصفح آراء العملاء أو شاركنا تعليقك وتقييمك وتجربتك معنا بكل شفافية وسهولة!
          </p>
        </div>

        {/* Display Grid & Submission Column Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form write feedback column */}
          <div className="lg:col-span-5 bg-brand-darker border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 space-x-reverse mb-6">
                <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-xl border border-brand-gold/20">
                  <MessageSquareCode className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">اكتب تجربتك ورأيك</h3>
                  <p className="text-gray-400 text-xs mt-1">تساعدنا شهادتك على التطوير والتميز المستمر.</p>
                </div>
              </div>

              <form onSubmit={handleSubmitReview} className="space-y-5">
                
                {/* Full name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 block">الاسم الكريم *</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: أ. أحمد العتيبي"
                      className="w-full pl-4 pr-10 py-3 rounded-xl bg-brand-dark border border-white/10 hover:border-brand-green focus:border-brand-gold text-white text-sm focus:outline-none transition-all"
                    />
                    <User className="h-4 w-4 text-gray-500 absolute top-3.5 right-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Company / Platform name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 block">اسم المشروع أو الجهة *</label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="مثال: متجر الهواتف الذكية أو منصة تعليمية"
                      className="w-full pl-4 pr-10 py-3 rounded-xl bg-brand-dark border border-white/10 hover:border-brand-green focus:border-brand-gold text-white text-sm focus:outline-none transition-all"
                    />
                    <Building className="h-4 w-4 text-gray-500 absolute top-3.5 right-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Rating selection (Interactive Star Component) */}
                <div className="space-y-2">
                  <span className="text-sm font-semibold text-gray-300 block">تقييمك بالنجوم :</span>
                  <div className="flex items-center space-x-1.5 space-x-reverse py-1">
                    {[1, 2, 3, 4, 5].map((starValue) => {
                      const isHighlighted = hoverRating !== null 
                        ? starValue <= hoverRating 
                        : starValue <= rating;
                      return (
                        <button
                          type="button"
                          key={starValue}
                          onClick={() => setRating(starValue)}
                          onMouseEnter={() => setHoverRating(starValue)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="p-1 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
                        >
                          <Star 
                            className={`h-7 w-7 transition-all ${
                              isHighlighted 
                                ? 'fill-brand-gold text-brand-gold drop-shadow-[0_0_8px_#ffd700]' 
                                : 'text-gray-600'
                            }`} 
                          />
                        </button>
                      );
                    })}
                    <span className="text-xs text-brand-gold font-bold mr-2">
                      ({rating} من ٥)
                    </span>
                  </div>
                </div>

                {/* Brief review text area */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 block">تكلّم عن تجربتك ورأيك بالشركة *</label>
                  <textarea
                    required
                    rows={4}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="مستوى الالتزام بالموعد، جودة التصاميم والواجهة، سرعة التجاوب والاحترافية والتعامل..."
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 hover:border-brand-green focus:border-brand-gold text-white text-sm focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-brand-green text-white hover:bg-brand-green-dark hover:text-brand-gold border border-brand-gold/10 hover:border-brand-gold font-bold text-sm shadow-[0_5px_15px_rgba(26,92,58,0.3)] transition-all cursor-pointer flex items-center justify-center space-x-2 space-x-reverse"
                >
                  {loading ? (
                    <span className="flex items-center space-x-2">
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full ml-1" />
                      <span>حفظ رأيك وتثبيته...</span>
                    </span>
                  ) : (
                    <>
                      <span>مشاركة ونشر رأيي بالشركة</span>
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>

              </form>
            </div>

            {/* Success message banner */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 rounded-xl bg-brand-green/20 border border-brand-green/30 text-right"
                >
                  <p className="text-xs text-gray-200 font-medium leading-relaxed flex items-start space-x-1.5 space-x-reverse">
                    <Sparkles className="h-4 w-4 text-brand-gold shrink-0 mt-0.5" />
                    <span>{message}</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Testimonial Feed Card Display Column */}
          <div className="lg:col-span-7 space-y-6 max-h-[620px] overflow-y-auto pr-2 custom-scrollbar">
            
            <AnimatePresence initial={false}>
              {testimonials.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="p-6 rounded-2xl bg-brand-darker border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between relative group"
                >
                  <Quote className="h-10 w-10 text-brand-gold/5 absolute left-6 top-6 select-none group-hover:scale-110 transition-transform" />
                  
                  <div className="space-y-4">
                    {/* Stars and Rating */}
                    <div className="flex items-center space-x-1 space-x-reverse">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < item.rating ? 'fill-brand-gold text-brand-gold' : 'text-gray-700'
                          }`} 
                        />
                      ))}
                    </div>

                    {/* Testimonial Text body */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic font-medium">
                      « {item.text} »
                    </p>
                  </div>

                  {/* Client Identification Footer */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-6">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <div className="w-10 h-10 bg-brand-gold/10 text-brand-gold font-bold flex items-center justify-center rounded-full border border-brand-gold/20 select-none">
                        {item.name.substring(0, 2)}
                      </div>
                      <div>
                        <span className="text-sm font-bold text-white block">{item.name}</span>
                        <span className="text-xs text-gray-500 font-medium">{item.company}</span>
                      </div>
                    </div>
                    
                    <span className="text-[10px] text-gray-600 font-mono bg-black/20 px-2 py-0.5 rounded border border-white/[0.02]">
                      {item.createdAt}
                    </span>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
