import React from 'react';
import { 
  ArrowLeft, 
  Building, 
  ShieldCheck, 
  PieChart, 
  TrendingDown, 
  MessageCircle, 
  MapPin, 
  Users, 
  Star,
  Check,
  Lock,
  Server,
  FileCode,
  Database,
  Zap,
  Award,
  Network
} from 'lucide-react';
import { Button } from './Button';
import { NAVIGATION_ITEMS } from '../constants';

interface LandingPageProps {
  onLogin: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const whatsappUrl = "https://wa.me/966532297690";
  const mapsUrl = "https://maps.app.goo.gl/6R7HV63KPeDZnqPu6";

  return (
    <div className="min-h-screen bg-white font-sans text-right pb-20" dir="rtl">
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] transition-transform hover:scale-110 flex items-center gap-2 group"
      >
        <span className="hidden group-hover:block font-bold text-sm transition-all duration-300">تواصل معنا الآن</span>
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-saudi-green p-2 rounded-lg">
                <Building className="w-6 h-6 text-white" />
            </div>
            <div>
                <span className="text-xl font-bold text-gray-900 block leading-none">بنيان <span className="text-saudi-green">كلاود</span></span>
                <span className="text-[10px] text-gray-500 font-medium">من شركة ذكاء صبح للذكاء الاصطناعي</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#brokers" className="hover:text-saudi-green transition font-bold text-saudi-dark">شبكة الوسطاء</a>
            <a href="#savings" className="hover:text-saudi-green transition">التوفير المالي</a>
            <a href="#offer" className="hover:text-saudi-green transition text-saudi-gold font-bold">خصم الإطلاق</a>
            <a href="#about" className="hover:text-saudi-green transition">من نحن</a>
          </div>
          <div className="flex gap-3">
            <Button variant="ghost" onClick={onLogin} className="hidden sm:inline-flex">دخول المشتركين</Button>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
                <Button className="bg-saudi-dark hover:bg-black shadow-lg shadow-saudi-green/20">
                احجز نسختك
                <ArrowLeft className="mr-2 w-4 h-4" />
                </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea9ba6a80f4?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-6 border border-green-200">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
              </span>
              بفريق سعودي 100% من مكة المكرمة
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.15] mb-6">
              أوقف الهدر المالي.. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-saudi-green to-saudi-dark">
                وفر 30% من تكاليفك
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              أول منصة ذكاء اصطناعي عقارية في السعودية تكتشف مصادر الهدر في مشاريعك، تضبط المقاولين، وتدير اتحاد الملاك تلقائياً.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full sm:w-auto bg-saudi-green hover:bg-saudi-dark text-lg h-14 px-8 shadow-xl shadow-green-900/10">
                    أريد تقليل المصاريف الآن
                    <ArrowLeft className="mr-2 w-5 h-5" />
                  </Button>
              </a>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 border-2" onClick={onLogin}>
                تجربة النظام مجاناً
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
                <div className="flex -space-x-2 space-x-reverse overflow-hidden">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                </div>
                <p>انضم لأكثر من 50 مطور عقاري يثقون بنا</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Brokers Network (High Priority) */}
      <section id="brokers" className="py-16 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
             
             {/* Content */}
             <div className="order-2 lg:order-1">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saudi-light text-saudi-green text-xs font-bold mb-6 border border-saudi-green/20">
                  <Star className="w-4 h-4 fill-saudi-green" />
                  ميزة حصرية للمشتركين
               </div>
               <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                 لا تشيل هم التصريف.. <br/>
                 <span className="text-saudi-gold">100 وسيط عقاري</span> في خدمتك
               </h2>
               <p className="text-lg text-gray-600 leading-relaxed mb-8">
                 هل تعاني من بطء المبيعات؟ نحن لا نقدم لك نظاماً فقط، بل نوفر لك <span className="font-bold text-gray-900">جيشاً من المسوقين</span>. نربط مخزونك آلياً مع أكثر من 100 وسيط عقاري مرخص وموثوق في منطقتك لبيع الشقق والفلل الخاصة بك.
               </p>

               <div className="space-y-6">
                 {/* Benefit 1 */}
                 <div className="flex gap-4">
                   <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center shrink-0">
                     <Zap className="w-6 h-6 text-yellow-500" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-900">بيع في وقت قياسي</h4>
                     <p className="text-gray-500 text-sm mt-1">ضاعف قوتك البيعية 100 مرة فور إطلاق المشروع، مما يضمن لك سيولة نقدية أسرع.</p>
                   </div>
                 </div>
                 
                 {/* Benefit 2 */}
                 <div className="flex gap-4">
                   <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                     <Award className="w-6 h-6 text-saudi-green" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-900">وسطاء موثوقين ومرخصين</h4>
                     <p className="text-gray-500 text-sm mt-1">جميع الوسطاء في شبكتنا مرخصين من "الهيئة العامة للعقار" وتم التحقق من سجلهم المهني.</p>
                   </div>
                 </div>

                 {/* Benefit 3 */}
                 <div className="flex gap-4">
                   <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                     <Network className="w-6 h-6 text-blue-500" />
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-900">إدارة مخزون آلية</h4>
                     <p className="text-gray-500 text-sm mt-1">تحديث لحظي لحالة الوحدات لدى جميع الوسطاء لمنع تضارب الحجوزات أو البيع المزدوج.</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Visual */}
             <div className="order-1 lg:order-2 relative">
               <div className="absolute inset-0 bg-saudi-green/5 rounded-3xl transform rotate-3"></div>
               <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-32 h-32 bg-saudi-gold/10 rounded-full blur-3xl"></div>
                 
                 <div className="flex flex-col gap-4">
                    {/* Simulated Broker Card 1 */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-saudi-green transition-colors">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100">🏢</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">شركة آفاق العقارية</div>
                        <div className="text-xs text-gray-500">الرياض - حي النرجس</div>
                      </div>
                      <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">نشط</div>
                    </div>
                    
                    {/* Simulated Broker Card 2 */}
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-saudi-green transition-colors">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm border border-gray-100">🏠</div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">مكتب التميز للوساطة</div>
                        <div className="text-xs text-gray-500">جدة - أبحر الشمالية</div>
                      </div>
                      <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-bold">نشط</div>
                    </div>

                    {/* Stats */}
                    <div className="mt-2">
                       <div className="bg-saudi-dark p-4 rounded-xl text-white text-center w-full">
                          <div className="text-3xl font-black mb-1">100+</div>
                          <div className="text-xs text-gray-300">وسيط معتمد</div>
                       </div>
                    </div>
                 </div>
               </div>
             </div>

           </div>
        </div>
      </section>

      {/* The 30% Savings Breakdown Section */}
      <section id="savings" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">كيف نوفر لك مئات الآلاف سنوياً؟</h2>
            <p className="text-lg text-gray-600">
              لا نقدم مجرد "برنامج إدارة"، نحن نقدم "مدير مالي وتشغيلي ذكي" يلغي الهدر في 3 مناطق رئيسية:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                    <TrendingDown className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">تقليل هدر مواد البناء</h3>
                <div className="text-4xl font-black text-gray-900 mb-2">12% <span className="text-sm font-normal text-gray-500">توفير</span></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    من خلال خوارزميات الذكاء الاصطناعي التي تحسب الاحتياج الدقيق للحديد والخرسانة وتمنع الطلبات الزائدة أو السرقة في الموقع.
                </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-0 bg-saudi-gold text-white text-xs font-bold px-3 py-1 rounded-br-lg">الأكثر تأثيراً</div>
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">أتمتة العمل الإداري</h3>
                <div className="text-4xl font-black text-gray-900 mb-2">40% <span className="text-sm font-normal text-gray-500">كفاءة</span></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    تقليص الحاجة للمحاسبين ومدخلي البيانات. النظام يقوم بإصدار فواتير ZATCA، عقود إيجار، ومتابعة التحصيل آلياً.
                </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">تجنب الغرامات والمخالفات</h3>
                <div className="text-4xl font-black text-gray-900 mb-2">100% <span className="text-sm font-normal text-gray-500">حماية</span></div>
                <p className="text-gray-600 text-sm leading-relaxed">
                    تنبيهات استباقية قبل انتهاء تراخيص "وافي" أو السجلات، وضمان الامتثال لكود البناء السعودي لتجنب إيقاف العمل.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Offer Section */}
      <section id="offer" className="py-12">
        <div className="container mx-auto px-4">
            <div className="bg-saudi-dark rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-saudi-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <div className="grid lg:grid-cols-2 items-center">
                    <div className="p-10 lg:p-16 text-white relative z-10">
                        <div className="inline-block bg-saudi-gold text-black font-bold px-4 py-1 rounded-full text-sm mb-6">
                            عرض خاص للإطلاق الرسمي
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">كن من الرواد الـ 5 الأوائل</h2>
                        <p className="text-lg text-gray-300 mb-8">
                            احصل على خصم 70% (Lifetime Discount) وجلسة استشارية مجانية لتهيئة التحول الرقمي في شركتك.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                <span>تركيب وتشغيل النظام مجاناً</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                <span>مدير حساب خاص (Account Manager)</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-green-400" /></div>
                                <span>اشتراك مفتوح في جميع الوحدات الـ 11</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-yellow-400 font-bold bg-white/10 p-4 rounded-xl border border-white/10 w-fit">
                            <Star className="w-5 h-5 fill-yellow-400" />
                            متبقي 2 مقعد فقط من أصل 5
                        </div>
                    </div>
                    <div className="bg-white p-10 lg:h-full flex flex-col justify-center">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">احجز مقعدك الآن</h3>
                            <p className="text-gray-500 mb-8">تواصل مباشرة مع فريق المبيعات عبر الواتس اب</p>
                            
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="block w-full">
                                <button className="w-full bg-[#25D366] hover:bg-[#1ebc57] text-white font-bold py-4 rounded-xl text-lg shadow-lg flex items-center justify-center gap-3 transition-colors">
                                    <MessageCircle className="w-6 h-6" />
                                    تفعيل العرض عبر الواتساب
                                </button>
                            </a>
                            <p className="text-xs text-gray-400 mt-4">
                                * العرض ساري حتى اكتمال العدد. لا يتطلب دفع فوري.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* NEW SECTION: Data Sovereignty & Security */}
      <section className="py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-saudi-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-saudi-gold text-sm font-bold mb-6 border border-white/10">
                    <ShieldCheck className="w-4 h-4" />
                    ضمان الخصوصية والسيادة
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                    بياناتك في أمان تام.. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        داخل حدود المملكة وتحت سيطرتك
                    </span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    نحن نؤمن بأن بياناتك هي أصلك الاستثماري الأهم. لذلك نقدم لك التزاماً قاطعاً بملكيتك الكاملة للنظام والبيانات، مع ضمانات قانونية وتقنية صارمة.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Feature 1: Source Code */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition group">
                    <div className="w-12 h-12 bg-saudi-gold/20 rounded-lg flex items-center justify-center mb-4 text-saudi-gold group-hover:scale-110 transition-transform">
                        <FileCode className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">تسليم الكود بالكامل</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        نضمن لك تسليم جميع الأكواد المصدرية (Source Code) والخوارزميات لتكون ملكاً خالصاً لشركتك بنسبة 100%.
                    </p>
                </div>

                {/* Feature 2: No Access */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition group">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center mb-4 text-red-400 group-hover:scale-110 transition-transform">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">سياسة حجب الوصول</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        لا يمكننا الاطلاع على بياناتك نهائياً. النظام مصمم ليكون "صندوقاً مغلقاً" (Black Box) مفاتيحه معك وحدك.
                    </p>
                </div>

                {/* Feature 3: Saudi Hosting */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition group">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-400 group-hover:scale-110 transition-transform">
                        <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">استضافة سعودية 100%</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        جميع بياناتك مستضافة داخل المملكة العربية السعودية، متوافقة مع متطلبات الأمن السيبراني والسيادة الوطنية للبيانات.
                    </p>
                </div>

                {/* Feature 4: Full Ownership */}
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition group">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                        <Database className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">ملكية مطلقة</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        أنت المالك الوحيد والنهائي للبيانات والنظام. لك الحق الكامل في التصرف بها دون أي قيود من طرفنا.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* About Company Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                    <div className="relative">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gray-100 rounded-full -z-10"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=1000&auto=format&fit=crop" 
                            alt="Thakaa Sobh Team" 
                            className="rounded-2xl shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <a 
                            href={mapsUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 hover:scale-105 transition-transform cursor-pointer group"
                            title="عرض الموقع على خرائط جوجل"
                        >
                            <div className="bg-saudi-green p-2 rounded-full group-hover:bg-saudi-dark transition-colors">
                                <MapPin className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500">المقر الرئيسي</div>
                                <div className="font-bold text-gray-900 group-hover:text-saudi-green transition-colors">مكة المكرمة، السعودية</div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        نحن لسنا مجرد شركة برمجيات.. <br/>
                        <span className="text-saudi-green">نحن شريكك التقني السعودي</span>
                    </h2>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">عن شركة ذكاء صبح للذكاء الاصطناعي</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        انطلقنا من مكة المكرمة برؤية طموحة: توطين تقنيات الذكاء الاصطناعي لخدمة القطاع العقاري السعودي. نفهم تحدياتك مع المقاولين، ونعرف تعقيدات الأنظمة الحكومية، لذلك بنينا نظاماً يتحدث لغتك ويحمي مصالحك.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                        <div>
                            <div className="text-3xl font-black text-saudi-gold mb-1">+50</div>
                            <div className="text-sm text-gray-500">مشروع عقاري مدار</div>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-saudi-gold mb-1">100%</div>
                            <div className="text-sm text-gray-500">فريق تطوير سعودي</div>
                        </div>
                    </div>

                    <a href={whatsappUrl} target="_blank" rel="noreferrer">
                        <Button variant="outline" className="border-saudi-dark text-saudi-dark hover:bg-saudi-dark hover:text-white">
                            تحدث مع المؤسسين
                        </Button>
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
                <Building className="w-8 h-8 text-saudi-green" />
                <span className="text-2xl font-bold">بنيان كلاود</span>
            </div>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                إحدى منتجات شركة ذكاء صبح للذكاء الاصطناعي.
                <br/>
                سجل تجاري: 4031234567 | مكة المكرمة
            </p>
            <div className="flex justify-center gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-white transition">سياسة الخصوصية</a>
                <a href="#" className="hover:text-white transition">شروط الاستخدام</a>
                <a href={whatsappUrl} className="hover:text-white transition">الدعم الفني</a>
            </div>
            <div className="mt-8 text-xs text-gray-600">
                © 2024 Thakaa Sobh AI. All rights reserved.
            </div>
        </div>
      </footer>
    </div>
  );
};