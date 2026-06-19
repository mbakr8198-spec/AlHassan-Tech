import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactInquiry } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Trash2, ArrowUpDown, MessageSquareHeart } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('استفسار عام');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Local inquiries log for testing & administrative demonstration
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [showAdminLogs, setShowAdminLogs] = useState(false);

  // Load inquiries on mount
  useEffect(() => {
    const saved = localStorage.getItem('alhasan_inquiries');
    if (saved) {
      try {
        setInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      alert('الرجاء التأكد من ملء جميع الحقول المطلوبة.');
      return;
    }

    setLoading(true);

    const waText = `السلام عليكم ورحمة الله وبركاته،
أود الاستفسار وطلب مشروع من شركة الحسن للحلول التقنية:

👤 *الاسم:* ${name}
📧 *البريد الإلكتروني:* ${email}
📞 *رقم الهاتف للتواصل:* ${phone}
🎨 *الموضوع:* ${subject}

📝 *تفاصيل فكرة المشروع:*
${message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=201091383571&text=${encodeURIComponent(waText)}`;

    // Simulate sending time
    setTimeout(() => {
      const newInquiry: ContactInquiry = {
        id: 'inq_' + Math.random().toString(36).substring(2, 9),
        name,
        email,
        phone,
        subject,
        message,
        createdAt: new Date().toLocaleString('ar-SA')
      };

      const updated = [newInquiry, ...inquiries];
      setInquiries(updated);
      localStorage.setItem('alhasan_inquiries', JSON.stringify(updated));

      setLoading(false);
      setSuccess(true);
      
      // Redirect to WhatsApp
      try {
        const wnd = window.open(whatsappUrl, '_blank');
        if (!wnd || wnd.closed || typeof wnd.closed === 'undefined') {
          // If popup is blocked by browser, redirect current window
          window.location.href = whatsappUrl;
        }
      } catch (err) {
        window.location.href = whatsappUrl;
      }

      // Reset form variables
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 1200);
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter(item => item.id !== id);
    setInquiries(updated);
    localStorage.setItem('alhasan_inquiries', JSON.stringify(updated));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark relative text-right">
      
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-sm font-bold uppercase tracking-wider block mb-2">تواصل مريح ومباشر</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">تواصل معنا (Contact Us)</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base mt-2">
            فريق شركة الحسن التقنية في أتم الجاهزية للرد على استفساراتكم وتحويل تطلعاتكم لمخرجات فريدة. تواصل معنا اليوم!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            
            <div className="p-8 rounded-3xl bg-brand-darker border border-white/5 space-y-8">
              <h3 className="text-2xl font-bold text-brand-gold">معلومات الاتصال المباشرة</h3>
              
              <div className="space-y-6">
                
                {/* Email Address */}
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="p-3.5 rounded-xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">راسلنا عبر البريد الإلكتروني</span>
                    <a href="mailto:alhassanbakr2@gmail.com" className="text-white hover:text-brand-blue font-bold transition-all text-sm sm:text-base">
                      alhassanbakr2@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp Connection */}
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="p-3.5 rounded-xl bg-brand-green/10 text-brand-green border border-brand-green/20">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs text-gray-500 block">اتصل أو راسلنا واتساب مباشراً</span>
                    <a href="https://wa.me/201091383571" target="_blank" referrerPolicy="no-referrer" className="text-white hover:text-brand-green font-bold transition-all text-sm sm:text-base">
                      01091383571
                    </a>
                  </div>
                </div>

              </div>

              {/* Decorative note */}
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center space-x-2 space-x-reverse text-xs text-gray-400">
                <Clock className="h-4 w-4 text-brand-gold animate-spin-slow" />
                <span>نستقبل استفساراتكم طوال أيام الأسبوع على مدار الساعة للرد الفوري.</span>
              </div>
            </div>

          </div>

          {/* Form Interactive Column */}
          <div className="lg:col-span-7 bg-[#161616] border border-white/10 rounded-3xl p-6 sm:p-10 order-1 lg:order-2 flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-2">طلب عرض سعر أو مناقشة فكرة</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">املأ الحقول التالية وسنقوم بالتواصل بك مع استشارة ودراسة برمجية مجانية لمشروعك.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">الاسم الحقيقي أو التجاري *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="مثال: أ. حسن بن محمد"
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-darker border border-white/10 hover:border-brand-green text-white text-sm focus:border-brand-gold focus:outline-none transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">البريد الإلكتروني *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="username@domain.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-darker border border-white/10 hover:border-brand-green text-white text-sm focus:border-brand-gold focus:outline-none transition-all text-left"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">رقم جوال للتواصل الواتساب *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05xxxxxxxx"
                        className="w-full px-4 py-3.5 rounded-xl bg-brand-darker border border-white/10 hover:border-brand-green text-white text-sm focus:border-brand-gold focus:outline-none transition-all text-left"
                      />
                    </div>

                    {/* Subject selection */}
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-300 block">الموضوع الرئيسي للمناقشة</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-4 rounded-xl bg-brand-darker border border-white/10 hover:border-brand-green text-white text-sm focus:border-brand-gold focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="تطوير موقع ويب (Web)">تطوير موقع ويب احترافي</option>
                        <option value="تطبيق جوال الذكي (Mobile App)">تطبيق آيفون وأندرويد</option>
                        <option value="هوية وتصميم بصري (Graphic)">شعار وهوية بصرية</option>
                        <option value="إنتاج تعليمي وبوربوينت (Edu)">محتوى وفيديوهات تعليمية</option>
                        <option value="استفسار عام">استشارة أو فكرة عامة</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 block">وصف فكرة مشروعك وتطلعاتك بالتفصيل *</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="صفحة رئيسية مع نموذج الدفع وتطبيق يدعم الخرائط..."
                      className="w-full px-4 py-3.5 rounded-xl bg-brand-darker border border-white/10 hover:border-brand-green text-white text-sm focus:border-brand-gold focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4.5 rounded-xl bg-brand-green text-white hover:bg-brand-green-dark border border-brand-gold/20 hover:border-brand-gold text-base font-bold shadow-[0_5px_15px_rgba(26,92,58,0.3)] transition-all cursor-pointer flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    {loading ? (
                      <span className="flex items-center space-x-2">
                        <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full ml-2" />
                        <span>يجري معالجة وإرسال طلبكم...</span>
                      </span>
                    ) : (
                      <>
                        <span>إرسال استمارة الطلب للشركة</span>
                        <Send className="h-4 w-4 mr-1" />
                      </>
                    )}
                  </button>

                </motion.form>
              ) : (
                <motion.div 
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-6"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-green/20 border border-brand-green text-brand-gold mb-3">
                    <CheckCircle className="h-10 w-10 text-brand-gold" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-white">تم إرسال رسالتكم بنجاح!</h3>
                  
                  <div className="bg-white/[0.02] p-6 rounded-2xl max-w-lg mx-auto border border-white/5 space-y-3">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      نشكرك جزيل الشكر على ثقتك باختيار <span className="text-brand-gold font-bold">شركة الحسن</span>. 
                      تم تسجيل استفسارك وسيقوم مستشارنا الفني بمطالعتها والتواصل المباشر معك هاتفياً أو عبر الواتساب في غضون ٢٤ ساعة على الأكثر لترتيب الخطوة القادمة.
                    </p>
                  </div>

                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 transition-all cursor-pointer"
                  >
                    إرسال طلب آخر
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Local Admin Feedback Log panel (Highly interactive verification feature) */}
        {inquiries.length > 0 && (
          <div className="mt-16 pt-8 border-t border-white/5 text-right">
            <button
              onClick={() => setShowAdminLogs(!showAdminLogs)}
              className="px-5 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 text-gray-400 hover:text-white text-xs font-semibold flex items-center space-x-2 space-x-reverse mr-auto translate-y-2 cursor-pointer transition-all"
            >
              <span>{showAdminLogs ? "إخفاء سجل الرسائل المستلمة بالتجربة (خاص بالإدارة)" : "مراجعة الرسائل المستلمة بالتجربة 🔐"}</span>
              <MessageSquareHeart className="h-4 w-4 text-brand-gold mr-1" />
            </button>

            <AnimatePresence>
              {showAdminLogs && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-6 p-6 rounded-3xl bg-brand-darker border border-brand-gold/10 space-y-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-3 py-1 rounded-full">جلسة محاكاة اختبار الإيداع</span>
                    <h4 className="text-lg font-bold text-white">الرسائل التي تم تسليمها وتخزينها في ذاكرة المتصفح المحلّية</h4>
                  </div>

                  <div className="space-y-4">
                    {inquiries.map((item) => (
                      <div key={item.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row md:items-start justify-between gap-4 text-right">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-brand-gold bg-brand-green/20 px-2 py-0.5 rounded-md">{item.subject}</span>
                            <span className="text-[11px] text-gray-500 font-mono">تاريخ الاستلام: {item.createdAt}</span>
                          </div>
                          <h5 className="font-extrabold text-white text-base">{item.name}</h5>
                          <div className="text-xs text-gray-400 space-x-4 space-x-reverse">
                            <span>البريد الإلكتروني: <a href={`mailto:${item.email}`} className="text-brand-blue hover:underline">{item.email}</a></span>
                            <span>رقم الجوال: <a href={`tel:${item.phone}`} className="text-brand-green hover:underline">{item.phone}</a></span>
                          </div>
                          <p className="text-gray-300 text-sm bg-black/10 p-3 rounded-lg border border-white/[0.02]">
                            {item.message}
                          </p>
                        </div>
                        <button
                          onClick={() => deleteInquiry(item.id)}
                          className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg border border-red-500/10 self-end md:self-start transition-all cursor-pointer"
                          title="حذف الرسالة"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
