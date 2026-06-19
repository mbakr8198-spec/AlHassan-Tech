import { motion } from 'motion/react';
import { COMPANY_STATS, TEAM_MEMBERS, CORE_VALUES } from '../data';
import { Target, Compass, Sparkles, Award, ShieldAlert, Heart, Trophy, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-brand-darker relative overflow-hidden text-right">
      
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-blue/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Company Bio intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-blue text-sm font-bold uppercase tracking-widest block mb-2">من نحن</span>
          
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
            شركة الحسن <br />
            <span className="bg-gradient-to-r from-brand-gold to-white bg-clip-text text-transparent">
              نصنع هويتك الرقمية بإبداع متكامل وأداء متميز
            </span>
          </h1>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            نحن شركة تقنية إبداعية المنشأ والرؤية، نعمل على سد الفجوة بين الأفكار الطموحة والحلول والتقنيات البرمجية الأكثر كفاءة. نوفر لعملائنا في القطاعين التجاري والخدمي تصميماً باهراً وترميزاً متطوراً لبناء خدمات مريحة وذكية تلقى رواجاً هائلاً.
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Vision (رؤيتنا) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-gold/30 transition-all shadow-xl relative overflow-hidden group"
          >
            <div className="absolute right-0 top-0 h-2 bg-gradient-to-l from-brand-gold to-transparent w-32" />
            
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-brand-gold/10 text-brand-gold mb-6 group-hover:scale-110 transition-transform">
              <Compass className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">رؤيتنا (Our Vision)</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              « أن نكون الشريك التقني الملهم والأكثر موثوقية للشركات الطموحة والمشاريع الناشئة، مساهِمين بفعالية في تمكين ودعم أهداف التحول الرقمي وصناعة الحضور الرقمي اللائق والمنافس بأعلى معايير الإتقان التقني والفني. »
            </p>
          </motion.div>

          {/* Mission (رسالتنا) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-blue/30 transition-all shadow-xl relative overflow-hidden group"
          >
            <div className="absolute right-0 top-0 h-2 bg-gradient-to-l from-brand-blue to-transparent w-32" />
            
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-brand-blue/10 text-brand-blue mb-6 group-hover:scale-110 transition-transform">
              <Target className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">رسالتنا (Our Mission)</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              « تقديم حلول وخيارات تقنية مبتكرة، متكاملة وآمنة تماماً، بجودة برمجية متناهية المقاييس وأسعار منافسة تلبي حاجة السوق المحلي، مع تقديم دعم ومواكبة فنية طويلة المدى لتهيئة مشاريع شركائنا لنجاح مستمر. »
            </p>
          </motion.div>

        </div>

        {/* Numerical Statistics Container */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24 text-center">
          {COMPANY_STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner"
            >
              <span className="block text-3xl sm:text-5xl font-extrabold text-brand-gold font-mono mb-2">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Corporate Core Values (القيم) */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-2">القيم المؤسسية التي توجه طاقاتنا</span>
            <h3 className="text-3xl font-extrabold text-white">قيمنا وسر تميزنا (Our Core Values)</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => {
              // map different icons for a rich feel
              const getValIcon = (index: number) => {
                switch(index) {
                  case 0: return <Sparkles className="h-6 w-6 text-brand-gold" />;
                  case 1: return <Trophy className="h-6 w-6 text-brand-green animate-pulse" />;
                  case 2: return <Users className="h-6 w-6 text-brand-blue" />;
                  case 3: return <Award className="h-6 w-6 text-purple-400" />;
                  default: return <Sparkles className="h-6 w-6 text-white" />;
                }
              };

              return (
                <div 
                  key={idx}
                  className="bg-brand-dark p-6 rounded-2xl border border-white/5 hover:border-brand-green/30 transition-all hover:scale-102 flex flex-col items-start"
                >
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 mb-4">
                    {getValIcon(idx)}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <div className="text-center mb-12">
            <span className="text-brand-blue text-sm font-bold uppercase tracking-wider block mb-2">صناع التميز</span>
            <h3 className="text-3xl font-extrabold text-white">الكادر والخبرات الرائدة بالشركة</h3>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base mt-2">
              نحن فخورون بضم نخبة من المبرمجين والمصممين الشغوفين، لتقديم مخرجات عمل لا مثيل لها.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-brand-dark rounded-3xl overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-2xl flex flex-col group"
                whileHover={{ y: -5 }}
              >
                {/* Photo frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-darker">
                  <img
                    src={member.image}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  {/* Subtle dark layout gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                </div>

                {/* Team detail details */}
                <div className="p-6 flex-1 flex flex-col justify-between text-right">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-brand-gold transition-colors">
                      {member.name}
                    </h4>
                    <span className="text-xs text-brand-blue font-mono font-bold block mb-4">
                      {member.role}
                    </span>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Contact team member link mockup */}
                  <div className="mt-6 pt-4 border-t border-white/5 text-left">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-brand-gold/60">Al-Hasan Member</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
