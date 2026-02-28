import { Metadata } from 'next';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Reveal from '@/components/Reveal';
import { Shield, FileText, Scale, Eye, Lock, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'الشروط والأحكام - كوديا',
  description: 'تعرف على شروط وأحكام استخدام موقع كوديا لتصميم وبرمجة المواقع والتطبيقات، وسياسة الخصوصية وحقوق الملكية الفكرية.',
};

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: 'مقدمة',
      content: 'مرحباً بك في كوديا. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا. نحن نحتفظ بالحق في تحديث أو تعديل هذه الشروط في أي وقت دون إشعار مسبق.'
    },
    {
      icon: Scale,
      title: 'الملكية الفكرية',
      content: 'جميع المحتويات المعروضة على هذا الموقع، بما في ذلك التصاميم والنصوص والرسومات والشعارات وأكواد البرمجة، هي ملكية حصرية لشركة كوديا أو مرخصة لنا، ومحمية بموجب قوانين حماية حقوق الملكية الفكرية. لا يُسمح بنسخ أو إعادة إنتاج أو توزيع أي محتوى دون الحصول على موافقة خطية مسبقة منا.'
    },
    {
      icon: Eye,
      title: 'استخدام الموقع',
      content: 'يُسمح لك باستخدام موقعنا لأغراض مشروعة فقط. لا يجوز استخدام الموقع: (أ) بأي طريقة تنتهك أي قوانين محلية أو دولية، (ب) بأي طريقة احتيالية أو غير قانونية، (ج) لنقل أي مواد ضارة مثل الفيروسات أو برامج ضارة، (د) للتعدي على حقوق الملكية الفكرية للآخرين.'
    },
    {
      icon: Lock,
      title: 'سياسة الخصوصية',
      content: 'نحن نأخذ خصوصيتك على محمل الجد. يتم جمع معلوماتك الشخصية ومعالجتها وفقاً لسياسة الخصوصية الخاصة بنا. باستخدامك للموقع، فإنك توافق على جمع واستخدام معلوماتك وفقاً لهذه السياسة. نحن لا نشارك معلوماتك مع أطراف ثالثة دون موافقتك، إلا للامتثال للقانون أو حماية حقوقنا.'
    },
    {
      icon: Shield,
      title: 'الدفع والاسترداد',
      content: 'عند التعاقد معنا على أي خدمة، يتم تحديد شروط الدفع وجدول زمني للمشروع. سياسة الاسترداد: (أ) يتم استرداد المبالغ المدفوعة إذا لم نبدأ العمل على المشروع خلال 5 أيام عمل من تاريخ الاتفاق، (ب) في حالة إلغاء المشروع بعد البدء فيه، يتم احتساب نسبة العمل المنجز واسترداد المبلغ المتبقي، (ج) لا يتم استرداد المبالغ بعد تسليم العمل النهائي وموافقة العميل عليه.'
    },
    {
      icon: Mail,
      title: 'الاتصال بنا',
      content: 'إذا كان لديك أي استفسارات أو استفسارات بخصوص هذه الشروط والأحكام، يرجى الاتصال بنا عبر:',
      contact: true
    }
  ];

  return (
    <>
      {/* هيرو الصفحة */}
      <Section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Container>
          <Reveal>
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-6">
                <FileText className="w-10 h-10 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
              الشروط و<span className="gradient-text">الأحكام</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
              آخر تحديث: 28 فبراير 2026
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* المحتوى */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12">
              
              {/* تحذير مهم */}
              <div className="mb-10 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
                <p className="text-amber-800 dark:text-amber-300 text-sm">
                  ⚠️ يرجى قراءة هذه الشروط والأحكام بعناية قبل استخدام موقع كوديا. باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط.
                </p>
              </div>

              {/* الأقسام */}
              <div className="space-y-10">
                {sections.map((section, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0 last:pb-0">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                          <section.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {section.content}
                          </p>
                          
                          {/* معلومات الاتصال الإضافية */}
                          {section.contact && (
                            <div className="mt-4 space-y-2">
                              <p className="text-gray-600 dark:text-gray-300">
                                📧 البريد الإلكتروني: <a href="mailto:kodia.web.design@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">kodia.web.design@gmail.com</a>
                              </p>
                              <p className="text-gray-600 dark:text-gray-300">
                                📞 الهاتف: <a href="tel:+201207005495" className="text-primary-600 dark:text-primary-400 hover:underline">+20 120 700 5495</a>
                              </p>
                              <p className="text-gray-600 dark:text-gray-300">
                                🏢 العنوان: القاهرة، مصر
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* تذييل الصفحة */}
              <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  © {new Date().getFullYear()} كوديا - جميع الحقوق محفوظة
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}