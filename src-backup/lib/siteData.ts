// siteData.ts - نسخة محسنة ومتكاملة مع الهوية البنفسجية

export const siteData = {
  brand: {
    name: "Kodia Web Design",
    shortName: "Kodia",
    tagline: "شريكك الرقمي الموثوق",
    phoneDisplay: "01207005495",
    phoneE164: "+201207005495",
    email: "kodia.web.design@gmail.com",
    whatsappLink: "https://wa.me/201207005495",
    url: "https://kodia-web-design-com.vercel.app", // رابط Vercel بعد النشر
    logo: "/images/logo.png",
    favicon: "/favicon.ico",
    locale: "ar_EG",
    serviceArea: "مصر وجميع الدول العربية (أونلاين)",
    foundingYear: "2023",
    teamSize: "١٢+ خبير",
    satisfactionRate: "٩٨٪",
    sameAs: [
      "https://www.instagram.com/kodia_web_design",
      "https://www.threads.com/@kodia_web_design",
      "https://www.facebook.com/kodia.web.design.apps/",
      "https://www.linkedin.com/in/kodia-web-design/",
      "https://t.me/kodia_web_design",
      "https://www.tiktok.com/@kodia_web_design?_r=1&_t=ZS-943sLTpQ5CP",
      "https://x.com/kodia_web_desgn",
      "https://www.snapchat.com/add/kodia.webdesign?share_id=PruhWFTedA0&locale=ar-EG",
      "https://youtube.com/@kodia_web_design?si=TJ0n66Pbla0z3vWX",
    ],
  },

  topNav: {
    socials: [
      { name: "Instagram", href: "https://www.instagram.com/kodia_web_design", icon: "instagram" },
      { name: "Threads", href: "https://www.threads.com/@kodia_web_design", icon: "threads" },
      { name: "Facebook", href: "https://www.facebook.com/kodia.web.design.apps/", icon: "facebook" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/kodia-web-design/", icon: "linkedin" },
      { name: "Telegram", href: "https://t.me/kodia_web_design", icon: "telegram" },
      { name: "TikTok", href: "https://www.tiktok.com/@kodia_web_design", icon: "tiktok" },
      { name: "X", href: "https://x.com/kodia_web_desgn", icon: "x" },
      { name: "Snapchat", href: "https://www.snapchat.com/add/kodia.webdesign", icon: "snapchat" },
      { name: "YouTube", href: "https://youtube.com/@kodia_web_design", icon: "youtube" },
    ],
  },
  
  nav: [
    { label: "الرئيسية", href: "/" },
    { label: "من نحن", href: "/about" },
    { 
      label: "خدماتنا", 
      href: "/services",
      children: [
        { label: "تصميم مواقع شركات", href: "/services/web-design", description: "مواقع تعبر عن قيمتك" },
        { label: "متاجر إلكترونية", href: "/services/ecommerce", description: "متاجر تبيع 24/7" },
        { label: "تطبيقات موبايل", href: "/services/mobile-apps", description: "تطبيقات Android و iOS" },
        { label: "UI/UX Design", href: "/services/ui-ux", description: "واجهات وتجربة مستخدم" },
        { label: "تحسين SEO", href: "/services/seo", description: "ظهور متقدم في جوجل" },
        { label: "دعم فني", href: "/services/support", description: "متابعة مستمرة" },
      ],
    },
    { 
      label: "أعمالنا", 
      href: "/portfolio",
      children: [
        { label: "جميع الأعمال", href: "/portfolio" },
        { label: "مواقع شركات", href: "/portfolio?category=company" },
        { label: "متاجر إلكترونية", href: "/portfolio?category=ecommerce" },
        { label: "تطبيقات موبايل", href: "/portfolio?category=apps" },
        { label: "معرض الصور", href: "/portfolio/gallery" },
      ],
    },
    { label: "آراء العملاء", href: "/testimonials" },
    { label: "المدونة", href: "/blog" },
    { label: "اتصل بنا", href: "/contact" },
    {
      label: "ابدأ مشروعك",
      href: "/quote",
      children: [
        { label: "طلب عرض سعر", href: "/quote", description: "احصل على عرض دقيق" },
        { label: "حاسبة السعر", href: "/estimate", description: "احسب تكلفة مشروعك" },
        { label: "نموذج Brief", href: "/brief", description: "اشرح فكرتك بالتفصيل" },
        { label: "Company Profile", href: "/profile", description: "تعرف على ملف الشركة" },
        { label: "الضمانات", href: "/policies", description: "سياسات العمل والضمانات" },
      ],
    },
  ],

  home: {
    marketing: {
      speedLine: "⚡ أداء عالي وسرعة فائقة | 🎯 تصميم يجذب العملاء",
      responseLine: "📞 الرد خلال ساعات العمل - تواصل فوري عبر واتساب",
      badgeLine: "✨ تجربة مستخدم احترافية + تصميم فاخر + كود نظيف",
      trustIndicators: ["موثوق من +٢٠ عميل", "تسليم في الموعد", "دعم فني ٢٤/٧"],
    },

    showreel: {
      title: "شاهد كيف نصنع الفرق",
      subtitle: "فيديو تعريفي بخدماتنا وأعمالنا",
      videoUrl: "https://www.youtube.com/embed/placeholder",
      videoMp4Url: "/videos/showreel.mp4",
      posterImage: "/images/showreel-poster.jpg",
    },

    hero: {
      title: "نُحوِّل أفكارك إلى مواقع وتطبيقات فاخرة تبيع نيابة عنك",
      subtitle: "نصمم ونطور مواقع شركات، متاجر إلكترونية، وتطبيقات موبايل بتجربة مستخدم استثنائية وتصميم يخلّي العميل يثق فيك من أول نظرة.",
      primaryCta: { label: "شاهد أعمالنا", href: "/portfolio" },
      secondaryCta: { label: "تحدث مع خبير", href: "/contact" },
      stats: [
        { value: "٢٥+", label: "نموذج عمل" },
        { value: "٢٠+", label: "عميل سعيد" },
        { value: "٢٤/٧", label: "دعم فني" },
      ],
    },

    trustBar: {
      items: [
        "✨ تصميم UI/UX احترافي",
        "📱 متجاوب على كل الأجهزة",
        "🚀 تهيئة SEO وسرعة",
        "🛠️ تسليم منظم + دعم",
        "💯 ضمان استعادة الحقوق",
        "🎨 تصميم فاخر",
      ],
    },

    servicesIntro: {
      title: "خدماتنا المتكاملة",
      subtitle: "نقدم حلولاً رقمية شاملة تأخذ مشروعك من الفكرة إلى النجاح باحترافية",
      badge: "جميع الحلول الرقمية",
    },

    services: [
      { 
        title: "تصميم مواقع الشركات", 
        desc: "موقع يعبر عن قيمتك ويحول الزوار إلى عملاء",
        icon: "Building2",
        slug: "/services/web-design",
        popular: true,
      },
      { 
        title: "تصميم المتاجر الإلكترونية", 
        desc: "متجر يبيع 24 ساعة بتجربة شراء استثنائية",
        icon: "ShoppingBag",
        slug: "/services/ecommerce",
        popular: true,
      },
      { 
        title: "برمجة تطبيقات الهاتف", 
        desc: "تطبيقات Android و iOS بتصميم جذاب وأداء عالي",
        icon: "Smartphone",
        slug: "/services/mobile-apps",
      },
      { 
        title: "UI/UX Design", 
        desc: "واجهات مستخدم بديهية وتجربة استخدام تزيد التحويل",
        icon: "Palette",
        slug: "/services/ui-ux",
      },
      { 
        title: "تحسين محركات البحث (SEO)", 
        desc: "ظهور متقدم في جوجل يجلب زواراً مستهدفين",
        icon: "TrendingUp",
        slug: "/services/seo",
      },
      { 
        title: "الدعم الفني والصيانة", 
        desc: "متابعة مستمرة وتحديثات منتظمة لموقعك",
        icon: "Settings",
        slug: "/services/maintenance",
      },
      { 
        title: "كتابة المحتوى التسويقي", 
        desc: "محتوى إبداعي يخاطب جمهورك ويقنعه",
        icon: "FileText",
        slug: "/services/content",
      },
      { 
        title: "استضافة وحماية", 
        desc: "استضافة سريعة وآمنة مع شهادة SSL",
        icon: "Shield",
        slug: "/services/hosting",
      },
    ],

    howWeWork: {
      title: "كيف نعمل؟",
      subtitle: "منهجية عمل واضحة تضمن نتائج مبهرة في كل مشروع",
      steps: [
        { 
          number: "٠١", 
          title: "فهم وتحليل", 
          desc: "نجلس معك لنفهم نشاطك، جمهورك، وأهدافك بالكامل",
          icon: "Users",
          duration: "١-٣ أيام",
        },
        { 
          number: "٠٢", 
          title: "تصميم واجهات", 
          desc: "نصمم نموذج أولي تفاعلي لترى كيف سيبدو موقعك",
          icon: "Palette",
          duration: "٢-٤ أيام",
        },
        { 
          number: "٠٣", 
          title: "تطوير وبرمجة", 
          desc: "نحول التصميم إلى كود نظيف بأحدث التقنيات",
          icon: "Code2",
          duration: "٣-٥ أيام",
        },
        { 
          number: "٠٤", 
          title: "اختبار ومراجعة", 
          desc: "نختبر كل زاوية للتأكد من خلوه من الأخطاء",
          icon: "TestTube",
          duration: "١-٢ يوم",
        },
        { 
          number: "٠٥", 
          title: "إطلاق وتدريب", 
          desc: "ننشر موقعك وندربك على إدارته بنفسك",
          icon: "Rocket",
          duration: "يوم الإطلاق",
        },
        { 
          number: "٠٦", 
          title: "دعم ومتابعة", 
          desc: "نبقى معك حتى بعد الإطلاق لدعم نجاحك",
          icon: "Heart",
          duration: "مستمر",
        },
      ],
    },

    packages: {
      title: "باقات تناسب الجميع",
      subtitle: "اختر الباقة المناسبة لمشروعك، أو اطلب تصميم حسب الطلب",
      note: "الأسعار تقديرية للمعاينة - السعر النهائي حسب متطلبات مشروعك",
      items: [
        {
          name: "موقع تعريفي",
          price: "يبدأ من ٥,٠٠٠ جنيه",
          features: [
            "✓ حتى ٥ صفحات رئيسية",
            "✓ تصميم متجاوب بالكامل",
            "✓ نموذج تواصل احترافي",
            "✓ ربط واتساب تلقائي",
            "✓ تهيئة SEO أساسية",
          ],
          cta: { label: "اطلب عرض سعر", href: "/quote" },
        },
        {
          name: "موقع شركة متقدم",
          price: "يبدأ من ٩,٠٠٠ جنيه",
          features: [
            "✓ حتى ١٠ صفحات احترافية",
            "✓ تصميم فاخر حسب الطلب",
            "✓ تحسين سرعة متقدم",
            "✓ تهيئة SEO شاملة",
            "✓ دعم فني لمدة شهر",
            "✓ تحليلات وإحصائيات",
          ],
          cta: { label: "تواصل الآن", href: "/quote" },
          popular: true,
        },
        {
          name: "متجر إلكتروني",
          price: "يبدأ من ١٥,٠٠٠ جنيه",
          features: [
            "✓ حتى ٢٠٠ منتج",
            "✓ سلة شراء متكاملة",
            "✓ بوابات دفع إلكتروني",
            "✓ تقارير مبيعات",
            "✓ دعم فني ٣ أشهر",
            "✓ تكامل شحن",
          ],
          cta: { label: "اطلب عرض سعر", href: "/quote" },
        },
      ],
    },

    guarantees: {
      title: "لماذا تثق في Kodia؟",
      subtitle: "نحن لا نصمم فقط، بل نضمن نجاح مشروعك",
      items: [
        { icon: "Award", title: "ضمان استعادة الحقوق", desc: "إذا لم نلتزم بالمواصفات المتفق عليها" },
        { icon: "Clock", title: "تسليم في الموعد", desc: "نلتزم بالجدول الزمني المتفق عليه" },
        { icon: "Headphones", title: "دعم فني مستمر", desc: "فريق متواجد للإجابة على استفساراتك" },
        { icon: "RefreshCw", title: "تعديلات مجانية", desc: "فترة تعديلات بعد التسليم حسب الاتفاق" },
        { icon: "Shield", title: "ضمان الجودة", desc: "نحن واثقون من جودة عملنا" },
        { icon: "Heart", title: "علاقة طويلة الأمد", desc: "نصمم لنسعدك، ليس لمرة واحدة فقط" },
      ],
    },

    techStack: {
      title: "التقنيات التي نستخدمها",
      subtitle: "نوظف أحدث الأدوات لبناء مواقع سريعة وآمنة وقابلة للتطوير",
      items: [
        { icon: "Nextjs", title: "Next.js 14", desc: "إطار العمل الأسرع والأفضل في السيو" },
        { icon: "React", title: "React", desc: "مكتبة لبناء واجهات مستخدم تفاعلية" },
        { icon: "Tailwind", title: "Tailwind CSS", desc: "تصميم سريع ومتناسق" },
        { icon: "Typescript", title: "TypeScript", desc: "كود آمن وخالي من الأخطاء" },
        { icon: "Figma", title: "Figma", desc: "تصميم احترافي للواجهات" },
        { icon: "Vercel", title: "Vercel", desc: "استضافة سريعة مع تكامل مستمر" },
        { icon: "Prisma", title: "Prisma", desc: "قواعد بيانات قوية ومرنة" },
        { icon: "NextAuth", title: "NextAuth.js", desc: "أنظمة تسجيل دخول آمنة" },
        { icon: "Stripe", title: "Stripe", desc: "بوابات دفع آمنة" },
        { icon: "Framer", title: "Framer Motion", desc: "تأثيرات حركية سينمائية" },
      ],
    },

    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات واضحة لأهم الأسئلة التي تهم عملائنا",
      items: [
        { q: "كم تكلفة تصميم موقع إلكتروني؟", a: "التكلفة تعتمد على حجم المشروع وتعقيده. نقدم عروض تبدأ من ٥,٠٠٠ جنيه للمواقع البسيطة، ويمكننا تقديم عرض تفصيلي بعد فهم متطلباتك." },
        { q: "كم من الوقت يستغرق بناء الموقع؟", a: "المواقع البسيطة تستغرق ١-٢ أسبوع، المتوسطة ٣-٤ أسابيع، والمعقدة ٦-٨ أسابيع حسب المتطلبات." },
        { q: "هل يمكنني تحديث الموقع بنفسي؟", a: "نعم، نوفر لك لوحة تحكم سهلة تمكنك من إضافة وتعديل المحتوى بكل سهولة دون حاجة لمبرمج." },
        { q: "هل تقدمون خدمات SEO؟", a: "نعم، نقدم تهيئة أساسية لمحركات البحث في جميع الباقات، ويمكننا تقديم خطة متكاملة لتحسين ظهورك." },
        { q: "ماذا بعد تسليم الموقع؟", a: "نقدم دعماً فنياً لمدة شهر في الباقة الأساسية، ويمكن الاتفاق على عقود دعم طويلة الأمد." },
        { q: "هل أسعاركم ثابتة؟", a: "الأسعار تقديرية للمعاينة، السعر النهائي يعتمد على تفاصيل مشروعك ويمكننا مناقشته." },
        { q: "هل تدعمون اللغة العربية؟", a: "نعم، التصميم بالكامل باللغة العربية مع دعم كامل للواجهة والمحتوى." },
        { q: "هل تقدمون ضمان على المشروع؟", a: "نعم، نقدم ضمان استعادة الحقوق إذا لم نلتزم بالمواصفات المتفق عليها." },
      ],
    },

    clients: {
      title: "قطاعات نتميز فيها",
      subtitle: "لدينا خبرة في تصميم مواقع لمختلف المجالات والأنشطة",
      items: [
        { name: "العيادات والمراكز الطبية", icon: "Stethoscope" },
        { name: "العقارات والمقاولات", icon: "Building" },
        { name: "التعليم والتدريب", icon: "GraduationCap" },
        { name: "المطاعم والكافيهات", icon: "Utensils" },
        { name: "المتاجر الإلكترونية", icon: "ShoppingCart" },
        { name: "الشركات الناشئة", icon: "Rocket" },
        { name: "المحاماة والاستشارات", icon: "Scale" },
        { name: "الفنادق والسياحة", icon: "Hotel" },
        { name: "الجمعيات الخيرية", icon: "Heart" },
        { name: "المعارض والمؤتمرات", icon: "Calendar" },
      ],
    },

    location: {
      title: "نعمل مع عملاء أينما كانوا",
      subtitle: "نقدم خدماتنا لعملاء في جميع أنحاء مصر والوطن العربي عبر تقنيات التواصل الحديثة",
      cityLine: "📍 القاهرة، مصر - نرحب بالعملاء من جميع المحافظات والدول العربية",
      mapImage: "/images/map-placeholder.jpg",
    },

    quality: {
      title: "معايير الجودة لدينا",
      subtitle: "نلتزم بأعلى المعايير لنقدم لك موقعاً يفوق توقعاتك",
      items: [
        { icon: "Zap", title: "سرعة التحميل", desc: "أقل من ٢ ثانية للتحميل الكامل" },
        { icon: "Smartphone", title: "توافق مع الأجهزة", desc: "تجربة مثالية على الموبايل والتابلت والكمبيوتر" },
        { icon: "Search", title: "تحسين محركات البحث", desc: "تطبيق أفضل ممارسات السيو" },
        { icon: "Code2", title: "كود نظيف", desc: "هيكل برمجي منظم وسهل التطوير" },
        { icon: "Accessibility", title: "إمكانية الوصول", desc: "متوافق مع معايير وصول ذوي الاحتياجات الخاصة" },
        { icon: "Shield", title: "أمان عالي", desc: "حماية من الاختراقات والثغرات" },
        { icon: "Palette", title: "تصميم جذاب", desc: "واجهات عصرية تخطف الأنظار" },
        { icon: "Users", title: "تجربة مستخدم", desc: "سهولة الاستخدام ترضي الزوار" },
      ],
    },

    addons: {
      title: "خدمات إضافية لمشروع متكامل",
      subtitle: "اختر ما تحتاجه لتكتمل منظومتك الرقمية",
      items: [
        { title: "تسجيل دومين .com .eg", desc: "نساعدك في اختيار وتسجيل اسم الموقع المثالي" },
        { title: "استضافة سريعة وآمنة", desc: "استضافة عالية الجودة مع دعم فني" },
        { title: "بريد احترافي باسم الدومين", desc: "info@yourcompany.com بريد يعزز ثقة العملاء" },
        { title: "شهادة SSL مجانية", desc: "تأمين بيانات زوارك ورفع ترتيبك في جوجل" },
        { title: "Google Analytics", desc: "تتبع زوار موقعك وتحليل سلوكهم" },
        { title: "صفحات سوشيال ميديا", desc: "تصميم هوية متكاملة لوسائل التواصل" },
        { title: "لاندينج بيج للحملات", desc: "صفحات خاصة بالحملات الإعلانية" },
        { title: "تحسين سرعة متقدم", desc: "ضغط الصور وتحسين الأداء لأقصى درجة" },
        { title: "تدريب على الإدارة", desc: "جلسات تدريبية لفريقك لإدارة الموقع" },
      ],
    },

    leadMagnet: {
      title: "تحليل مجاني لمشروعك",
      subtitle: "احصل على استشارة مبدئية مجانية دون أي التزام",
      bullets: [
        "✓ مراجعة شاملة لتجربة المستخدم الحالية (إن وجدت)",
        "✓ اقتراحات لتحسين التحويل وزيادة المبيعات",
        "✓ هيكل مقترح للموقع يناسب نشاطك وأهدافك",
        "✓ تقدير مبدئي للتكلفة والوقت",
      ],
      ctaLabel: "احصل على استشارتك المجانية",
      ctaHref: "/quote",
      image: "/images/consultation.jpg",
    },

    finalCta: {
      title: "هل أنت مستعد للانطلاق؟",
      subtitle: "تواصل معنا الآن ودعنا نحول فكرتك إلى مشروع ناجح",
      buttons: [
        { label: "واتساب", href: "WHATSAPP", icon: "MessageCircle", primary: true },
        { label: "اتصال", href: "CALL", icon: "Phone", primary: false },
        { label: "بريد", href: "EMAIL", icon: "Mail", primary: false },
      ],
      backgroundVideo: "/images/cta-bg.mp4",
    },

    portfolioIntro: {
      title: "أحدث أعمالنا",
      subtitle: "نماذج حقيقية (وأخرى تجريبية) تعكس أسلوبنا في التصميم والتنفيذ",
      ctaLabel: "استعرض جميع الأعمال",
      ctaHref: "/portfolio",
    },

    portfolioTabs: [
      {
        key: "company",
        label: "مواقع الشركات",
        icon: "Building2",
        items: [
          {
            title: "Nexa Construction",
            slug: "nexa-construction",
            tags: ["مقاولات", "مشاريع", "خدمات"],
            summary: "موقع يعرض مشاريع ضخمة بخدمات متكاملة ونموذج طلب معاينة",
            image: "/images/demos/nexa-construction-1.svg",
            images: ["/images/demos/nexa-construction-1.svg", "/images/demos/nexa-construction-2.svg", "/images/demos/nexa-construction-3.svg"],
            deliverables: ["UI/UX احترافي", "صفحات مشاريع", "طلب معاينة", "SEO"],
            year: "٢٠٢٤",
            client: "شركة مقاولات كبرى",
          },
          {
            title: "Prime Dental Clinic",
            slug: "prime-dental-clinic",
            tags: ["عيادة", "خدمات طبية", "حجوزات"],
            summary: "موقع عيادة أسنان بحجوزات أونلاين وصفحات خدمات تفصيلية",
            image: "/images/demos/prime-dental-clinic-1.svg",
            images: ["/images/demos/prime-dental-clinic-1.svg", "/images/demos/prime-dental-clinic-2.svg", "/images/demos/prime-dental-clinic-3.svg"],
            deliverables: ["تصميم راقي", "نظام حجوزات", "ملفات مرضى"],
            year: "٢٠٢٤",
          },
          {
            title: "Skyline Logistics",
            slug: "skyline-logistics",
            tags: ["شحن", "لوجستيات", "تتبع"],
            summary: "موقع شركة شحن مع نظام تتبع الشحنات ونموذج عرض سعر",
            image: "/images/demos/skyline-logistics-1.svg",
            images: ["/images/demos/skyline-logistics-1.svg", "/images/demos/skyline-logistics-2.svg", "/images/demos/skyline-logistics-3.svg"],
            deliverables: ["تتبع شحنات", "عرض أسعار", "مناطق تغطية"],
            year: "٢٠٢٣",
          },
          {
            title: "Elite Law Firm",
            slug: "elite-law-firm",
            tags: ["محاماة", "استشارات", "قضايا"],
            summary: "موقع شركة محاماة يعرض التخصصات والفريق والقضايا الناجحة",
            image: "/images/demos/elite-law-firm-1.svg",
            images: ["/images/demos/elite-law-firm-1.svg", "/images/demos/elite-law-firm-2.svg"],
            deliverables: ["تصميم فخم", "سير ذاتية", "مقالات قانونية"],
            year: "٢٠٢٤",
          },
          {
            title: "Harmony Interiors",
            slug: "harmony-interiors",
            tags: ["ديكور", "تصميم داخلي", "معارض"],
            summary: "موقع لشركة ديكور يعرض معرض صور المشاريع والخدمات",
            image: "/images/demos/harmony-interiors-1.svg",
            images: ["/images/demos/harmony-interiors-1.svg", "/images/demos/harmony-interiors-2.svg", "/images/demos/harmony-interiors-3.svg"],
            deliverables: ["معرض صور", "تصميم جذاب", "استشارات"],
            year: "٢٠٢٣",
          },
          {
            title: "TechSolutions IT",
            slug: "techsolutions-it",
            tags: ["تقنية", "حلول برمجية", "دعم"],
            summary: "موقع شركة تقنية يقدم خدمات البرمجة والدعم الفني",
            image: "/images/demos/techsolutions-it-1.svg",
            images: ["/images/demos/techsolutions-it-1.svg", "/images/demos/techsolutions-it-2.svg"],
            deliverables: ["صفحات خدمات", "باقات", "طلب دعم"],
            year: "٢٠٢٤",
          },
        ],
      },
      {
        key: "ecommerce",
        label: "متاجر إلكترونية",
        icon: "ShoppingBag",
        items: [
          {
            title: "UrbanWear Store",
            slug: "urbanwear-store",
            tags: ["ملابس", "أزياء", "ماركات"],
            summary: "متجر ملابس عصرية مع فلترة متقدمة وتجربة شراء سلسة",
            image: "/images/demos/urbanwear-store-1.svg",
            images: ["/images/demos/urbanwear-store-1.svg", "/images/demos/urbanwear-store-2.svg", "/images/demos/urbanwear-store-3.svg"],
            deliverables: ["فلترة منتجات", "سلة شراء", "مقاسات", "تقييمات"],
            year: "٢٠٢٤",
          },
          {
            title: "GadgetHub",
            slug: "gadgethub",
            tags: ["إلكترونيات", "أجهزة", "مقارنة"],
            summary: "متجر إلكترونيات مع خاصية مقارنة المنتجات والتقييمات",
            image: "/images/demos/gadgethub-1.svg",
            images: ["/images/demos/gadgethub-1.svg", "/images/demos/gadgethub-2.svg", "/images/demos/gadgethub-3.svg"],
            deliverables: ["مقارنة منتجات", "تقييمات", "مواصفات"],
            year: "٢٠٢٤",
          },
          {
            title: "BeautyBox",
            slug: "beautybox",
            tags: ["مستحضرات تجميل", "عناية", "باقات"],
            summary: "متجر تجميل مع باقات واشتراكات شهرية مميزة",
            image: "/images/demos/beautybox-1.svg",
            images: ["/images/demos/beautybox-1.svg", "/images/demos/beautybox-2.svg", "/images/demos/beautybox-3.svg"],
            deliverables: ["باقات", "اشتراكات", "منتجات"],
            year: "٢٠٢٣",
          },
          {
            title: "FreshMart",
            slug: "freshmart",
            tags: ["مواد غذائية", "بقالة", "توصيل"],
            summary: "سوبر ماركت أونلاين مع توصيل سريع وطلبات سهلة",
            image: "/images/demos/freshmart-1.svg",
            images: ["/images/demos/freshmart-1.svg", "/images/demos/freshmart-2.svg"],
            deliverables: ["توصيل", "أقسام", "عروض"],
            year: "٢٠٢٤",
          },
          {
            title: "BookNest",
            slug: "booknest",
            tags: ["كتب", "مكتبة", "أدب"],
            summary: "مكتبة إلكترونية لبيع الكتب العربية والأجنبية",
            image: "/images/demos/booknest-1.svg",
            images: ["/images/demos/booknest-1.svg", "/images/demos/booknest-2.svg", "/images/demos/booknest-3.svg"],
            deliverables: ["بحث متقدم", "تصنيفات", "مراجعات"],
            year: "٢٠٢٣",
          },
          {
            title: "FurniCasa",
            slug: "furnicasa",
            tags: ["أثاث", "منزل", "ديكور"],
            summary: "متجر أثاث منزلي مع معرض صور وتصميم ثلاثي الأبعاد",
            image: "/images/demos/furnicasa-1.svg",
            images: ["/images/demos/furnicasa-1.svg", "/images/demos/furnicasa-2.svg"],
            deliverables: ["معرض 3D", "تصميم أنيق", "حجوزات"],
            year: "٢٠٢٤",
          },
        ],
      },
      {
        key: "tourism",
        label: "سياحة وفنادق",
        icon: "Hotel",
        items: [
          {
            title: "NileTrip Tours",
            slug: "niletrip-tours",
            tags: ["رحلات", "سياحة", "باقات"],
            summary: "موقع رحلات سياحية يعرض باقات مميزة مع حجوزات أونلاين",
            image: "/images/demos/niletrip-tours-1.svg",
            images: ["/images/demos/niletrip-tours-1.svg", "/images/demos/niletrip-tours-2.svg", "/images/demos/niletrip-tours-3.svg"],
            deliverables: ["باقات سياحية", "حجوزات", "برامج"],
            year: "٢٠٢٤",
          },
          {
            title: "Sinai Camp",
            slug: "sinai-camp",
            tags: ["إقامة", "مخيمات", "طبيعة"],
            summary: "موقع مخيم سياحي في سيناء يعرض الغرف والأنشطة",
            image: "/images/demos/sinai-camp-1.svg",
            images: ["/images/demos/sinai-camp-1.svg", "/images/demos/sinai-camp-2.svg", "/images/demos/sinai-camp-3.svg"],
            deliverables: ["حجوزات", "أنشطة", "معرض"],
            year: "٢٠٢٣",
          },
          {
            title: "Cairo Heritage",
            slug: "cairo-heritage",
            tags: ["جولات", "تاريخ", "معالم"],
            summary: "دليل سياحي للقاهرة التاريخية مع مقالات وجولات منظمة",
            image: "/images/demos/cairo-heritage-1.svg",
            images: ["/images/demos/cairo-heritage-1.svg", "/images/demos/cairo-heritage-2.svg", "/images/demos/cairo-heritage-3.svg"],
            deliverables: ["مدونة", "جولات", "خرائط"],
            year: "٢٠٢٤",
          },
          {
            title: "LuxorStay",
            slug: "luxorstay",
            tags: ["فنادق", "إقامة", "معابد"],
            summary: "موقع حجوزات فنادق في الأقصر مع عروض سياحية",
            image: "/images/demos/luxorstay-1.svg",
            images: ["/images/demos/luxorstay-1.svg", "/images/demos/luxorstay-2.svg"],
            deliverables: ["فنادق", "عروض", "حجوزات"],
            year: "٢٠٢٤",
          },
        ],
      },
      {
        key: "education",
        label: "منصات تعليمية",
        icon: "GraduationCap",
        items: [
          {
            title: "Learnify Academy",
            slug: "learnify-academy",
            tags: ["كورسات", "تعليم", "أونلاين"],
            summary: "منصة كورسات أونلاين مع لوحة تحكم للطلاب والدروس",
            image: "/images/demos/learnify-academy-1.svg",
            images: ["/images/demos/learnify-academy-1.svg", "/images/demos/learnify-academy-2.svg", "/images/demos/learnify-academy-3.svg"],
            deliverables: ["دورات", "دروس فيديو", "اختبارات"],
            year: "٢٠٢٤",
          },
          {
            title: "Quranic Path",
            slug: "quranic-path",
            tags: ["قرآن", "تحفيظ", "إسلامي"],
            summary: "منصة لتعليم القرآن مع مستويات واختبارات تفاعلية",
            image: "/images/demos/quranic-path-1.svg",
            images: ["/images/demos/quranic-path-1.svg", "/images/demos/quranic-path-2.svg", "/images/demos/quranic-path-3.svg"],
            deliverables: ["مستويات", "اختبارات", "تلاوات"],
            year: "٢٠٢٣",
          },
          {
            title: "CodeStart Kids",
            slug: "codestart-kids",
            tags: ["برمجة", "أطفال", "تحديات"],
            summary: "منصة تعليم برمجة للأطفال بتمارين وتحديات ممتعة",
            image: "/images/demos/codestart-kids-1.svg",
            images: ["/images/demos/codestart-kids-1.svg", "/images/demos/codestart-kids-2.svg", "/images/demos/codestart-kids-3.svg"],
            deliverables: ["تمارين", "تحديات", "مستويات"],
            year: "٢٠٢٤",
          },
          {
            title: "LangMaster",
            slug: "langmaster",
            tags: ["لغات", "تعلم", "دورات"],
            summary: "منصة تعلم لغات مع دروس تفاعلية وتمارين نطق",
            image: "/images/demos/langmaster-1.svg",
            images: ["/images/demos/langmaster-1.svg", "/images/demos/langmaster-2.svg"],
            deliverables: ["دروس", "تمارين", "شهادات"],
            year: "٢٠٢٤",
          },
        ],
      },
      {
        key: "apps",
        label: "تطبيقات موبايل",
        icon: "Smartphone",
        items: [
          {
            title: "FitTrack App",
            slug: "fittrack-app",
            tags: ["رياضة", "لياقة", "صحة"],
            summary: "تصميم تطبيق لمتابعة التمارين والخطط الغذائية",
            image: "/images/demos/fittrack-app-1.svg",
            images: ["/images/demos/fittrack-app-1.svg", "/images/demos/fittrack-app-2.svg", "/images/demos/fittrack-app-3.svg"],
            deliverables: ["خطط تمارين", "متابعة", "إشعارات"],
            year: "٢٠٢٤",
          },
          {
            title: "Foodie Delivery",
            slug: "foodie-delivery",
            tags: ["توصيل", "مطاعم", "طلبات"],
            summary: "واجهة تطبيق توصيل طعام مع سلة وتتبع الطلب",
            image: "/images/demos/foodie-delivery-1.svg",
            images: ["/images/demos/foodie-delivery-1.svg", "/images/demos/foodie-delivery-2.svg", "/images/demos/foodie-delivery-3.svg"],
            deliverables: ["سلة شراء", "تتبع طلب", "مطاعم"],
            year: "٢٠٢٣",
          },
          {
            title: "Clinic Booking",
            slug: "clinic-booking",
            tags: ["طبي", "حجوزات", "عيادات"],
            summary: "تطبيق حجز مواعيد العيادات مع ملفات المرضى",
            image: "/images/demos/clinic-booking-1.svg",
            images: ["/images/demos/clinic-booking-1.svg", "/images/demos/clinic-booking-2.svg", "/images/demos/clinic-booking-3.svg"],
            deliverables: ["حجوزات", "ملفات مرضى", "مواعيد"],
            year: "٢٠٢٤",
          },
          {
            title: "TaskFlow",
            slug: "taskflow",
            tags: ["إنتاجية", "مهام", "تنظيم"],
            summary: "تطبيق إدارة مهام ومشاريع للفريق",
            image: "/images/demos/taskflow-1.svg",
            images: ["/images/demos/taskflow-1.svg", "/images/demos/taskflow-2.svg"],
            deliverables: ["مهام", "مشاريع", "تقارير"],
            year: "٢٠٢٤",
          },
          {
            title: "SocialApp",
            slug: "socialapp",
            tags: ["تواصل", "اجتماعي", "شبكة"],
            summary: "تصميم تطبيق تواصل اجتماعي مع منشورات وتفاعلات",
            image: "/images/demos/socialapp-1.svg",
            images: ["/images/demos/socialapp-1.svg", "/images/demos/socialapp-2.svg", "/images/demos/socialapp-3.svg"],
            deliverables: ["منشورات", "تفاعلات", "رسائل"],
            year: "٢٠٢٣",
          },
        ],
      },
    ],

    testimonials: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "ثقتهم هي رأس مالنا الحقيقي - آراء حقيقية من شركاء النجاح",
      items: [
        { 
          name: "أحمد عبدالله", 
          role: "صاحب متجر UrbanWear", 
          quote: "كنت محتاج متجر إلكتروني يبيع بجد، والنتيجة كانت مذهلة. المبيعات زادت ٨٥٪ في أول ٣ شهور. التعامل مع Kodia كان احترافي من أول يوم.",
          rating: 5,
          avatar: "/images/avatars/avatar-1.jpg",
          date: "فبراير ٢٠٢٤",
        },
        { 
          name: "د. منى سامي", 
          role: "مديرة عيادة Prime Dental", 
          quote: "الدكتورة منى سعيدة جداً بالموقع. المرضى بيحجزوا أونلاين والتصميم راقي جداً. الفريق فهم احتياجاتنا بسرعة ونفذها بدقة.",
          rating: 5,
          avatar: "/images/avatars/avatar-2.jpg",
          date: "يناير ٢٠٢٤",
        },
        { 
          name: "محمد الجمل", 
          role: "مؤسس Learnify Academy", 
          quote: "منصة الكورسات اللي صممها فريق Kodia فاقت توقعاتي. الطلاب مدحوا في سهولة الاستخدام والتصميم الجذاب. أكيد هكرر التجربة.",
          rating: 5,
          avatar: "/images/avatars/avatar-3.jpg",
          date: "مارس ٢٠٢٤",
        },
        { 
          name: "سارة عادل", 
          role: "مديرة تسويق - تكافل للتأمين", 
          quote: "موقع الشركة الجديد ساهم في زيادة طلبات الاتصال بنسبة ١٤٠٪. الفريق متفهم ومتعاون والتسليم كان في الوقت المحدد.",
          rating: 5,
          avatar: "/images/avatars/avatar-4.jpg",
          date: "ديسمبر ٢٠٢٣",
        },
        { 
          name: "خالد السيد", 
          role: "صاحب FitTrack App", 
          quote: "تصميم التطبيق كان تحفة. المستخدمين مدحوا في الواجهة والسهولة. التطبيق حصل على تقييم ٤.٨ في المتجر.",
          rating: 5,
          avatar: "/images/avatars/avatar-5.jpg",
          date: "نوفمبر ٢٠٢٣",
        },
        { 
          name: "نورا أحمد", 
          role: "مؤسسة BeautyBox", 
          quote: "فريق Kodia فاهم جداً في تجربة المستخدم. المتجر سلس وسهل والطلبات زادت بشكل كبير. شكراً على المجهود الرائع.",
          rating: 5,
          avatar: "/images/avatars/avatar-6.jpg",
          date: "أكتوبر ٢٠٢٣",
        },
      ],
    },

    whyUs: {
      title: "لماذا Kodia هو الخيار الأمثل؟",
      subtitle: "نحن لا نصنع مواقع فقط، بل نبني أدوات نجاح حقيقية",
      items: [
        { icon: "PenTool", title: "تصميم UI/UX احترافي", desc: "نصمم مع التركيز على تحويل الزوار لعملاء" },
        { icon: "Zap", title: "سرعة وأداء عالي", desc: "أوقات تحميل قياسية وتحسينات متقدمة" },
        { icon: "Search", title: "تحسين محركات البحث", desc: "ظهور متقدم في جوجل يجلب زوار مجانيين" },
        { icon: "Heart", title: "دعم مستمر", desc: "نبقى معك حتى بعد الإطلاق لضمان نجاحك" },
        { icon: "MessageCircle", title: "تواصل شفاف", desc: "نبقيك على اطلاع بكل خطوة في المشروع" },
        { icon: "Shield", title: "ضمان الجودة", desc: "نلتزم بالمواصفات ونضمن رضاك التام" },
        { icon: "Clock", title: "تسليم سريع", desc: "نلتزم بالجدول الزمني المتفق عليه" },
        { icon: "Award", title: "خبرة متنوعة", desc: "عملنا مع مختلف القطاعات يضمن فهم احتياجاتك" },
      ],
    },

    stats: [
      { label: "سنوات خبرة", value: "٢+", icon: "Calendar" },
      { label: "مشاريع منجزة", value: "٢٥+", icon: "Briefcase" },
      { label: "عملاء سعداء", value: "٢٠+", icon: "Users" },
      { label: "نماذج أعمال", value: "٣٠+", icon: "Layers" },
      { label: "رضا العملاء", value: "٩٨٪", icon: "Heart" },
      { label: "دعم فني", value: "٢٤/٧", icon: "Headphones" },
    ],

    blog: {
      title: "آخر المقالات",
      subtitle: "نصائح وأفكار لتطوير أعمالك الرقمية",
      items: [
        { 
          title: "كيف تصمم موقعاً يحول الزوار إلى عملاء؟ ٩ خطوات عملية", 
          category: "تصميم مواقع", 
          href: "/blog/website-conversion-tips",
          date: "١٥ مارس ٢٠٢٤",
          image: "/images/blog/blog-1.jpg",
          summary: "تعرف على أسرار تحسين التحويل في المواقع الإلكترونية وكيف تجعل زوارك يتواصلون معك.",
        },
        { 
          title: "دليلك الشامل لاختيار أفضل استضافة لموقعك في ٢٠٢٤", 
          category: "استضافة", 
          href: "/blog/hosting-guide",
          date: "١٠ مارس ٢٠٢٤",
          image: "/images/blog/blog-2.jpg",
          summary: "مقارنة بين أفضل شركات الاستضافة وأهم العوامل التي تحدد اختيارك.",
        },
        { 
          title: "أساسيات تحسين محركات البحث للمبتدئين", 
          category: "SEO", 
          href: "/blog/seo-basics",
          date: "٥ مارس ٢٠٢٤",
          image: "/images/blog/blog-3.jpg",
          summary: "١٠ خطوات أساسية لتحسين ظهور موقعك في نتائج البحث وجذب زوار مجانيين.",
        },
        { 
          title: "تصميم تطبيقات الجوال: ٧ أخطاء تدمر تجربة المستخدم", 
          category: "تطبيقات", 
          href: "/blog/mobile-app-mistakes",
          date: "١ مارس ٢٠٢٤",
          image: "/images/blog/blog-4.jpg",
          summary: "احذر هذه الأخطاء الشائعة في تصميم التطبيقات التي تجعل المستخدمين يحذفون تطبيقك.",
        },
        { 
          title: "لماذا تحتاج متجراً إلكترونياً في ٢٠٢٤؟", 
          category: "تجارة إلكترونية", 
          href: "/blog/why-ecommerce",
          date: "٢٥ فبراير ٢٠٢٤",
          image: "/images/blog/blog-5.jpg",
          summary: "٥ أسباب تجعل المتجر الإلكتروني ضرورة لأي نشاط تجاري اليوم.",
        },
        { 
          title: "أهم اتجاهات تصميم المواقع في ٢٠٢٤", 
          category: "تصميم", 
          href: "/blog/web-design-trends-2024",
          date: "٢٠ فبراير ٢٠٢٤",
          image: "/images/blog/blog-6.jpg",
          summary: "تعرف على أحدث صيحات التصميم التي تجعل موقعك عصرياً وجذاباً.",
        },
      ],
    },

    footer: {
      about: "Kodia Web Design - شريكك الرقمي لبناء مواقع وتطبيقات فاخرة تحول أفكارك إلى نجاح. نتميز بالجودة والاحترافية والدعم المستمر.",
      quickLinks: [
        { label: "الرئيسية", href: "/" },
        { label: "من نحن", href: "/about" },
        { label: "خدماتنا", href: "/services" },
        { label: "أعمالنا", href: "/portfolio" },
        { label: "آراء العملاء", href: "/testimonials" },
        { label: "المدونة", href: "/blog" },
        { label: "اتصل بنا", href: "/contact" },
      ],
      services: [
        { label: "تصميم مواقع شركات", href: "/services/web-design" },
        { label: "متاجر إلكترونية", href: "/services/ecommerce" },
        { label: "تطبيقات موبايل", href: "/services/mobile-apps" },
        { label: "UI/UX تصميم", href: "/services/ui-ux" },
        { label: "تحسين SEO", href: "/services/seo" },
        { label: "الدعم الفني", href: "/services/support" },
      ],
      contact: {
        phone: "٠١٢٠٧٠٠٥٤٩٥",
        email: "kodia.web.design@gmail.com",
        whatsapp: "https://wa.me/201207005495",
        address: "القاهرة، مصر - خدمة أونلاين لجميع المحافظات والدول العربية",
      },
      copyright: "© ٢٠٢٤ Kodia Web Design. جميع الحقوق محفوظة.",
      designCredit: "تصميم وتطوير Kodia Web Design",
    },
  },

  // بيانات عامة للصفحات الأخرى
  pages: {
    about: {
      title: "من نحن - Kodia Web Design",
      subtitle: "شريكك الرقمي الموثوق لبناء حضور قوي على الإنترنت",
      story: "بدأنا رحلتنا في ٢٠٢٣ بهدف بسيط: تقديم تصاميم رقمية راقية تجمع بين الجمال والوظيفة. اليوم، نفخر بثقة عملائنا ونعمل على تطوير أنفسنا باستمرار.",
      mission: "نحن نؤمن أن التصميم الجيد هو استثمار، وليس تكلفة. نساعد الشركات على بناء هوية رقمية قوية تحقق أهدافها وتنمي أعمالها.",
      vision: "نسعى لنكون الشريك الرقمي الأول للشركات الناشئة والمتوسطة في مصر والوطن العربي.",
      values: [
        { title: "الجودة", desc: "نقدم أفضل ما لدينا في كل مشروع" },
        { title: "الشفافية", desc: "نبقيك على اطلاع بكل خطوة" },
        { title: "الالتزام", desc: "نفي بوعودنا ونسلم في الوقت المحدد" },
        { title: "الاحترافية", desc: "نعمل بأحدث المنهجيات والأدوات" },
        { title: "الإبداع", desc: "نفكر خارج الصندوق لنقدم تصاميم مميزة" },
      ],
      team: [
        { name: "أحمد كوديا", role: "مؤسس ومصمم UI/UX", bio: "خبرة ٥ سنوات في تصميم وتطوير المواقع، شغوف بإنشاء تجارب مستخدم استثنائية.", avatar: "/images/team/ahmed.jpg" },
        { name: "فريق العمل", role: "مطورين ومصممين", bio: "فريق متكامل من الخبراء في مختلف المجالات التقنية.", avatar: "/images/team/team.jpg" },
      ],
    },
    
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا للإجابة على استفساراتك ومناقشة مشروعك",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        service: "الخدمة المطلوبة",
        message: "رسالتك",
        submit: "إرسال",
      },
      info: {
        response: "نرد خلال ٢٤ ساعة",
        workingHours: "السبت - الخميس، ٩ ص - ٦ م",
      },
    },

    quote: {
      title: "طلب عرض سعر",
      subtitle: "أخبرنا عن مشروعك وسنقدم لك عرضاً تفصيلياً",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        projectType: "نوع المشروع",
        budget: "الميزانية التقريبية",
        timeline: "الإطار الزمني",
        details: "تفاصيل المشروع",
        submit: "طلب عرض السعر",
      },
    },
  },
};
