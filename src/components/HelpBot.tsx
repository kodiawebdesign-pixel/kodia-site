"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/lib/siteData";
import { 
  MessageCircle, 
  Phone, 
  X, 
  HelpCircle,
  Sparkles,
  ChevronUp,
  Bot,
  Send,
  Mail,
  Clock,
  CheckCircle2,
  Star,
  Zap,
  Shield,
  Award,
  Heart
} from "lucide-react";

const quick = [
  { 
    q: "عايز عرض سعر سريع", 
    a: "ابعت نوع الموقع وعدد الصفحات والمجال، وهنرد عليك خلال ساعات. يمكنك أيضاً استخدام حاسبة السعر للحصول على تقدير فوري.",
    icon: "💰",
    color: "from-amber-600 to-orange-600"
  },
  { 
    q: "مدة التنفيذ؟", 
    a: "حسب حجم المشروع: مواقع بسيطة ٣-٧ أيام، متوسطة ١٠-١٥ يوم، كبيرة ٢٠-٣٠ يوم. نلتزم بالجدول الزمني المتفق عليه.",
    icon: "⏱️",
    color: "from-blue-600 to-cyan-600"
  },
  { 
    q: "هل الموقع متجاوب؟", 
    a: "نعم 100% على كل الأجهزة (موبايل، تابلت، كمبيوتر) مع تجربة مستخدم ممتازة وتصميم يتكيف مع جميع الشاشات.",
    icon: "📱",
    color: "from-emerald-600 to-teal-600"
  },
  { 
    q: "هل في دعم بعد التسليم؟", 
    a: "نعم، نقدم دعماً فنياً لمدة شهر مجاناً، ويمكن الاتفاق على عقود دعم أطول. فريقنا متاح ٢٤/٧ للمشاكل الطارئة.",
    icon: "🛡️",
    color: "from-violet-600 to-fuchsia-600"
  },
  { 
    q: "ما هي خطوات العمل؟", 
    a: "١. تحليل المتطلبات، ٢. تصميم واجهات، ٣. تطوير، ٤. اختبار، ٥. تسليم مع تدريب. كل مرحلة نوثقها معك.",
    icon: "📋",
    color: "from-purple-600 to-pink-600"
  },
  { 
    q: "هل تقدمون SEO؟", 
    a: "نعم، نقدم تهيئة أساسية لمحركات البحث في جميع المشاريع، وخدمات SEO متقدمة لتحسين ظهورك في جوجل.",
    icon: "🚀",
    color: "from-indigo-600 to-violet-600"
  },
];

export default function HelpBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [showTyping, setShowTyping] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, sender: 'user' | 'bot'}>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [unreadCount, setUnreadCount] = useState(1);
  const [rating, setRating] = useState<number | null>(null);

  // التمرير لآخر رسالة
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // رسالة ترحيب عند الفتح
  useEffect(() => {
    if (open && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          { text: "مرحباً! 👋 أنا مساعد Kodia الذكي. كيف يمكنني مساعدتك اليوم؟", sender: 'bot' }
        ]);
      }, 300);
      setUnreadCount(0);
    }
  }, [open]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { text: message, sender: 'user' }]);
    setMessage("");
    setShowTyping(true);

    // محاكاة رد البوت
    setTimeout(() => {
      setShowTyping(false);
      const botResponse = getBotResponse(message);
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1500);
  };

  const getBotResponse = (msg: string) => {
    const lowerMsg = msg.toLowerCase();
    if (lowerMsg.includes("سعر") || lowerMsg.includes("تكلفة") || lowerMsg.includes("عرض")) {
      return "للحصول على عرض سعر دقيق، يرجى إرسال تفاصيل مشروعك عبر واتساب أو استخدام نموذج Brief. سيقوم فريقنا بالرد خلال ٢٤ ساعة.";
    }
    if (lowerMsg.includes("وقت") || lowerMsg.includes("مدة") || lowerMsg.includes("تسليم")) {
      return "مدة التنفيذ تعتمد على حجم المشروع: المواقع البسيطة ٣-٧ أيام، المتوسطة ١٠-١٥ يوم، والكبيرة ٢٠-٣٠ يوم. نلتزم بالموعد المتفق عليه.";
    }
    if (lowerMsg.includes("شكرا") || lowerMsg.includes("thanks") || lowerMsg.includes("تسلم")) {
      return "العفو! 🤝 سعيد بمساعدتك. هل هناك شيء آخر تريد الاستفسار عنه؟";
    }
    if (lowerMsg.includes("ضمان") || lowerMsg.includes("ضمانات")) {
      return "نقدم ضمان استعادة الحقوق إذا لم نلتزم بالمواصفات. كما نوفر ضمان الجودة ودعم فني مستمر. تفاصيل أكثر في صفحة السياسات.";
    }
    if (lowerMsg.includes("خدمات") || lowerMsg.includes("تخدم")) {
      return "نقدم مجموعة متكاملة من الخدمات: تصميم مواقع شركات، متاجر إلكترونية، تطبيقات موبايل، UI/UX، تحسين SEO، ودعم فني. يمكنك زيارة صفحة الخدمات للمزيد.";
    }
    return "شكراً لتواصلك! يمكنك اختيار أحد الأسئلة الشائعة أعلاه أو التواصل مباشرة عبر واتساب لفريق الدعم.";
  };

  const handleQuickQuestion = (q: string, a: string) => {
    setMessages(prev => [...prev, { text: q, sender: 'user' }]);
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      setMessages(prev => [...prev, { text: a, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-20 right-0 w-[380px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-violet-100 dark:border-violet-800 overflow-hidden"
          >
            {/* رأس المساعد */}
            <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-600 p-4 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Bot className="w-6 h-6" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">المساعد الذكي</h3>
                      <p className="text-xs text-white/80">رد فوري ٢٤/٧</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* المحادثة */}
            <div className="h-[400px] overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
              <div className="space-y-3">
                {/* رسالة ترحيب أولية */}
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-xs flex-shrink-0">
                    🤖
                  </div>
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tr-none p-3 shadow-sm">
                      <p className="text-xs text-gray-700 dark:text-gray-300">
                        مرحباً! أنا مساعد Kodia الذكي. كيف يمكنني مساعدتك اليوم؟
                      </p>
                    </div>
                    <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">الآن</span>
                  </div>
                </div>

                {/* الأسئلة السريعة */}
                <div className="mt-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">أسئلة سريعة:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quick.slice(0, 4).map((x, idx) => (
                      <motion.button
                        key={idx}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleQuickQuestion(x.q, x.a)}
                        className={`text-right bg-white dark:bg-gray-800 p-2 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-200 dark:hover:border-violet-700 hover:shadow-md transition-all group`}
                      >
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${x.color} p-1 text-white text-sm mb-1`}>
                          {x.icon}
                        </div>
                        <p className="text-xs font-bold mt-1 text-gray-800 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {x.q}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* رسائل المحادثة */}
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : ''}`}
                  >
                    {msg.sender === 'bot' && (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-xs flex-shrink-0">
                        🤖
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        msg.sender === 'user'
                          ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-br-none'
                          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-tl-none shadow-sm'
                      }`}
                    >
                      <p className="text-xs">{msg.text}</p>
                    </div>
                    {msg.sender === 'user' && (
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white text-xs flex-shrink-0">
                        👤
                      </div>
                    )}
                  </motion.div>
                ))}

                {/* مؤشر الكتابة */}
                {showTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-2"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center text-white text-xs flex-shrink-0">
                      🤖
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl rounded-tl-none p-3 shadow-sm">
                      <div className="flex gap-1">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* أسفل المساعد */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              {/* معلومات التواصل السريع */}
              <div className="flex items-center justify-between mb-3 text-xs text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>متوسط الرد: دقيقة</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-green-500" />
                  <span>متصل</span>
                </div>
              </div>

              {/* أزرار التواصل */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={siteData.brand.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 p-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl text-xs font-semibold hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-3 h-3" />
                  واتساب
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${siteData.brand.phoneE164}`}
                  className="flex items-center justify-center gap-1 p-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl text-xs font-semibold hover:shadow-lg transition-all"
                >
                  <Phone className="w-3 h-3" />
                  اتصال
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`mailto:${siteData.brand.email}`}
                  className="flex items-center justify-center gap-1 p-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl text-xs font-semibold hover:shadow-lg transition-all"
                >
                  <Mail className="w-3 h-3" />
                  بريد
                </motion.a>
              </div>

              {/* حقل إدخال الرسالة */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="اكتب رسالتك..."
                  className="flex-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="px-3 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>

              <p className="mt-2 text-[10px] text-gray-400 dark:text-gray-500 text-center">
                اكتب استفسارك أو اختر أحد الأسئلة الشائعة
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* زر المساعد */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className={`relative flex items-center gap-2 px-4 py-3 rounded-2xl shadow-xl transition-all ${
          open 
            ? 'bg-gradient-to-r from-red-600 to-pink-600' 
            : 'bg-gradient-to-r from-violet-600 to-fuchsia-600'
        }`}
      >
        {/* خلفية متوهجة */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 blur-xl opacity-50"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* المحتوى */}
        <div className="relative z-10 flex items-center gap-2 text-white">
          {open ? (
            <>
              <X className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-bold">إغلاق</span>
            </>
          ) : (
            <>
              <HelpCircle className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-bold">مساعدة</span>
              <Sparkles className="w-4 h-4" />
            </>
          )}
        </div>

        {/* شارة الإشعار */}
        {!open && unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
          >
            {unreadCount}
          </motion.span>
        )}
      </motion.button>

      {/* تقييم المساعد */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -top-12 right-0 flex items-center gap-2 bg-white dark:bg-gray-800 rounded-full px-3 py-1 shadow-md border border-gray-200 dark:border-gray-700"
        >
          <span className="text-xs text-gray-600 dark:text-gray-400">تقييم المساعد:</span>
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                onClick={() => setRating(star)}
              >
                <Star 
                  className={`w-3 h-3 transition-colors ${
                    star <= (rating || 5) 
                      ? 'text-amber-400 fill-amber-400' 
                      : 'text-gray-300 dark:text-gray-600'
                  }`} 
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
