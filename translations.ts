
export type Language = 'en' | 'ar' | 'tr' | 'de';

export const UI_STRINGS = {
  en: {
    common: { return: 'Return', download: 'Download', submit: 'Submit', sending: 'Submitting...', back: 'Back', next: 'Next', prev: 'Previous', ok: 'OK', error: 'Error' },
    nav: { services: 'Services', portfolio: 'Portfolio', about: 'About', contact: 'Contact', launch: 'Launch Platform', enquire: 'Enquire' },
    hero: { legacy: 'Legacy of Excellence', title: 'CRAFTING THE NEW HORIZON', subtitle: 'We bridge the gap between visionary architectural concepts and tangible structural reality. Premium materials, sustainable engineering, and uncompromising precision in every joint.', explore: 'Explore Portfolio', dossier: 'Our Legacy (Digital Dossier)', precision: 'Precision', level: 'BIM Level' },
    stats: { landmarks: 'Landmarks Delivered', built: 'Sq. Meters Built', offices: 'Global Offices', safety: 'Safety Compromises' },
    pageHeaders: {
      services: 'Engineering the impossible',
      portfolio: 'A legacy of structural landmarks',
      about: 'Precision. Integrity. Vision.',
      contact: 'Let\'s build something extraordinary',
      notFound: 'Project not found.'
    },
    services: { title: 'PRECISION ENGINEERING FOR EVERY SECTOR', subtitle: 'Core Competencies', description: 'From the ground up, we provide integrated construction solutions that redefine industry standards.', download: 'Download Spec' },
    portfolio: { 
      title: 'ARCHITECTURAL LANDMARKS', subtitle: 'Selected Works', simulate: 'Simulate BIM', archives: 'Access Global Archives',
      filters: { all: 'All', res: 'Residential', com: 'Commercial', infra: 'Infrastructure', ren: 'Renovation' },
      status: 'Structural OK', ref: 'Node Reference'
    },
    arScanner: { 
      title: 'GAMMA AR: FIELD SCANNER', subtitle: 'Architectural Intelligence', description: 'Point your camera at any architectural structure. Our AI performs an instant structural audit, identifying materials and tectonic systems.', 
      init: 'Initialize Field Scan', analyze: 'Analyze Structure', exit: 'Exit Hub', scanning: 'Processing Frame...', 
      step1Title: 'Visual Recognition', step1Desc: 'Identifies building style using Gemini Vision.', 
      step2Title: 'Material Extrapolation', step2Desc: 'Calculates likely material palette.',
      fault: 'HARDWARE FAULT: CAMERA PERMISSION DENIED.', reset: 'Reset Node'
    },
    about: { 
      title: 'A PLATFORM FOR PROFESSIONALS', subtitle: 'The Technology Core', 
      desc: 'STRUCTURA is a modern construction technology platform designed to support professionals with structured, centralized systems for managing workflows and operational processes.',
      performance: 'Performance', performanceDesc: 'High-tolerance engineering that eliminates bottlenecks.',
      scalability: 'Scalability', scalabilityDesc: 'Infrastructure designed to grow with your vision.',
      vision: 'Platform Vision', visionDesc: 'Focusing on clarity, performance, and scalability — helping teams reduce complexity.',
      protocol: 'Platform Protocol (PDF)', years: 'Future-Ready Architectural Prowess'
    },
    cta: {
      commissioning: 'Project Commissioning',
      readyTitle: 'READY TO BUILD YOUR',
      legacy: 'LEGACY?',
      brief: 'Submit Project Brief',
      hq: 'Contact Global HQ'
    },
    contact: { 
      title: 'START YOUR NEXT LEGACY', subtitle: 'Direct Commissioning', identity: 'Identity', communication: 'Communication', sector: 'Sector Selection', description: 'Brief Description', submit: 'Submit', success: 'Transmission Success',
      successDesc: 'The project brief has been encrypted and sent to our senior planning division.',
      form: { name: 'FULL NAME', email: 'EMAIL ADDRESS', vision: 'OUTLINE YOUR VISION...', sectors: ['Residential Architecture', 'Commercial Infrastructure', 'Industrial Solutions', 'Structural Renovation'] },
      nodes: 'Communication Nodes', hq: 'Global HQ'
    },
    footer: { 
      vision: 'Engineering high-performance environments since 2026. Recognized globally for architectural precision.', 
      directory: 'Directory', company: 'Company', newsletter: 'Newsletter', join: 'Join',
      newsletterDesc: 'Quarterly insights into structural innovation.',
      emailPlaceholder: 'Email Address',
      links: { projects: 'Current Projects', overview: 'Services Overview', vision: 'Architectural Vision', brand: 'Brand Assets (SVG)', team: 'Executive Team', careers: 'Careers', press: 'Press & Media', privacy: 'Privacy Policy', terms: 'Terms of Service', cookies: 'Cookie Settings' }
    },
    projectDetail: { 
      back: 'Exit to Gallery', 
      study: 'Spatial Study', 
      studyDesc: 'Every structural junction was optimized for maximum load efficiency. Our imagery captures the transition from raw structural integrity to finished architectural refinement.',
      prev: 'Previous Milestone', 
      next: 'Next Milestone', 
      simulate: 'Initialize BIM Simulation', 
      blueprint: 'Download Blueprint' 
    },
    legacyPresentation: {
      download: 'Download Formal Dossier (PDF)',
      focus: 'Architectural Focus',
      slides: [
        {
          title: "THE GENESIS OF PRECISION",
          subtitle: "ESTABLISHED 2026",
          description: "Born from the intersection of aerospace engineering and classical architecture, STRUCTURA was founded to lead the next horizon. We engineer emotions into the steel that supports our skyline.",
          emphasis: "Foundations are built on trust, but landmarks are built on integrity."
        },
        {
          title: "MISSION CONTROL: THE PLATFORM",
          subtitle: "DIGITAL TWIN REVOLUTION",
          description: "Our proprietary Platform is the digital nervous system of every project. It connects the architect's hand to the machine's precision for BIM Level 400 coordination.",
          emphasis: "Sub-millimeter accuracy is our standard, not our goal."
        },
        {
          title: "THE ARCHITECTURE OF EMOTION",
          subtitle: "HUMAN-CENTRIC DESIGN",
          description: "Beyond load-bearing calculations lies the human experience. We craft environments that breathe, inspire, and evolve through curated spaces.",
          emphasis: "Buildings should be more than stone and glass; they should be poetry."
        },
        {
          title: "A FUTURE-PROOF LEGACY",
          subtitle: "TOWARDS 2050",
          description: "Sustainability is our structural core. By leveraging material science and carbon-neutral logistics, we ensure our buildings stand for centuries.",
          emphasis: "We are building the heritage of the next thousand years."
        }
      ]
    },
    staticContent: {
      brand: {
        title: 'Brand Identity',
        subtitle: 'Assets & Origin',
        content: 'STRUCTURA is a modern construction technology platform. It is built to support construction and architecture professionals by providing a structured, centralized system.',
        sections: [
          { h: 'The Logo (SVG)', p: 'The primary mark represents structural symmetry and core stability. It is a rotated square within a square.' },
          { h: 'Favicon Icon', p: 'A pure white and black version of the core diamond icon for high-visibility digital utility.' },
          { h: 'The Manifesto', p: 'Focusing on clarity, performance, and scalability to reduce complexity in real-world construction.' }
        ]
      },
      servicesOverview: {
        title: 'Integrated Services',
        subtitle: 'Our Holistic Approach',
        content: 'We provide end-to-end solutions from conceptual stress testing to post-occupancy facility management. Our methodology leverages BIM Level 400 precision and carbon-neutral material science.',
        sections: [
          { h: 'Conceptual Design', p: 'Architectural modeling with structural feasibility audits.' },
          { h: 'Advanced Engineering', p: 'Tensioned cable systems and hybrid load-bearing solutions.' },
          { h: 'Material Logistics', p: 'Ethical sourcing of high-performance composites.' }
        ]
      },
      careers: {
        title: 'Join the Vanguard',
        subtitle: 'Future Horizons',
        content: 'We are always looking for visionary engineers and innovative architects who challenge the limits of structural geometry.',
        sections: [
          { h: 'Senior Structural Engineer', p: 'Lead complex steel-hybrid projects in Chicago.' },
          { h: 'BIM Coordinator', p: 'Manage high-LOD digital twins for international landmarks.' },
          { h: 'Material Scientist', p: 'R&D focused on sustainable concrete alternatives.' }
        ]
      },
      press: {
        title: 'Press & Media',
        subtitle: 'Newsroom',
        content: 'Discover the latest breakthroughs in high-tolerance engineering and metropolitan landmark deliveries.',
        sections: [
          { h: 'Media Kit', p: 'Download high-resolution structural renderings and corporate logos.' },
          { h: 'Public Relations', p: 'For inquiries, reach out to hello@amrostudio.co.' }
        ]
      },
      enquire: {
        title: 'Start a Project',
        subtitle: 'Project Enquiry',
        content: 'Ready to build the future? Fill out the form below or contact our global headquarters directly at hello@amrostudio.co.',
        brief: 'Blueprint Received',
        successMsg: 'Your enquiry has been securely transmitted to hello@amrostudio.co. Our senior consultants will reach out within 48 hours.',
        another: 'Send Another Transmission'
      },
      privacy: {
        title: 'Privacy Protocol',
        subtitle: 'Data Integrity',
        content: 'At STRUCTURA, we treat architectural data with the same integrity as our buildings. Your blueprints and metadata are encrypted.',
        sections: [
          { h: 'Data Security', p: 'All transmissions to hello@amrostudio.co are secured using AES-256 encryption.' },
          { h: 'BIM Protection', p: 'Metadata is used only for calculation accuracy within the Mission Control hub.' },
          { h: 'Your Rights', p: 'You have full ownership of your architectural models stored on our nodes.' }
        ]
      },
      terms: {
        title: 'Terms of Service',
        subtitle: 'Legal Framework',
        content: 'Accessing the STRUCTURA platform implies agreement with our architectural and engineering operational standards.',
        sections: [
          { h: 'BIM Usage', p: 'Users are responsible for verifying structural parameters generated by the Analysis tab.' },
          { h: 'Liability', p: 'Final structural sign-off must be conducted by a certified engineer in your jurisdiction.' },
          { h: 'Platform Access', p: 'Mission Control is provided for professional use only.' }
        ]
      },
      cookies: {
        title: 'Cookie Settings',
        subtitle: 'System Persistence',
        content: 'We use essential technical cookies to maintain your Mission Control session and structural metadata preferences.',
        sections: [
          { h: 'Session Cookies', p: 'Required for maintaining state across Analysis and Workflow tabs.' },
          { h: 'Analytical Nodes', p: 'Used to improve the responsiveness of our BIM Level 400 simulations.' },
          { h: 'Preference Sync', p: 'Ensures your Node ID remains consistent throughout your workspace session.' }
        ]
      }
    }
  },
  ar: {
    common: { return: 'رجوع', download: 'تحميل', submit: 'إرسال', sending: 'جاري الإرسال...', back: 'خلف', next: 'التالي', prev: 'السابق', ok: 'موافق', error: 'خطأ' },
    nav: { services: 'الخدمات', portfolio: 'الأعمال', about: 'عن الشركة', contact: 'اتصل بنا', launch: 'إطلاق المنصة', enquire: 'استفسار' },
    hero: { legacy: 'إرث من التميز', title: 'صياغة آفاق جديدة', subtitle: 'نحن نسد الفجوة بين المفاهيم المعمارية الرؤيوية والواقع الإنشائي الملموس. مواد ممتازة، هندسة مستدامة، ودقة لا تضاهى في كل مفصل.', explore: 'استكشف الأعمال', dossier: 'إرثنا (الملف الرقمي)', precision: 'الدقة', level: 'مستوى BIM' },
    stats: { landmarks: 'معالم تم تسليمها', built: 'متر مربع مبني', offices: 'مكاتب عالمية', safety: 'تنازلات السلامة' },
    pageHeaders: {
      services: 'هندسة المستحيل',
      portfolio: 'إرث من المعالم الإنشائية',
      about: 'دقة. نزاهة. رؤية.',
      contact: 'لنبنِ شيئاً استثنائياً',
      notFound: 'المشروع غير موجود.'
    },
    services: { title: 'هندسة دقيقة لكل قطاع', subtitle: 'الكفاءات الأساسية', description: 'من الألف إلى الياء، نقدم حلول بناء متكاملة تعيد تعريف معايير الصناعة.', download: 'تحميل المواصفات' },
    portfolio: { 
      title: 'معالم معمارية', subtitle: 'أعمال مختارة', simulate: 'محاكاة BIM', archives: 'الوصول للأرشيف العالمي',
      filters: { all: 'الكل', res: 'سكني', com: 'تجاري', infra: 'بنية تحتية', ren: 'تجديد' },
      status: 'الهيكل سليم', ref: 'مرجع العقدة'
    },
    arScanner: { 
      title: 'جاما AR: الماسح الميداني', subtitle: 'الذكاء المعماري', description: 'وجه كاميرتك نحو أي هيكل معماري. يقوم ذكاؤنا الاصطناعي بإجراء تدقيق إنشائي فوري، وتحديد المواد والأنظمة التكتونية.', 
      init: 'بدء المسح الميداني', analyze: 'تحليل الهيكل', exit: 'خروج', scanning: 'جاري المعالجة...', 
      step1Title: 'التعرف البصري', step1Desc: 'يحدد نمط البناء باستخدام رؤية Gemini.', 
      step2Title: 'استقراء المواد', step2Desc: 'يحسب لوحة المواد المحتملة.',
      fault: 'خطأ في الأجهزة: تم رفض إذن الكاميرا.', reset: 'إعادة ضبط العقدة'
    },
    about: { 
      title: 'منصة للمحترفين', subtitle: 'جوهر التكنولوجيا', 
      desc: 'STRUCTURA هي منصة تكنولوجيا بناء حديثة مصممة لدعم المحترفين بأنظمة مركزية ومنظمة لإدارة سير العمل والعمليات التشغيلية.',
      performance: 'الأداء', performanceDesc: 'هندسة عالية التحمل تقضي على الاختناقات.',
      scalability: 'القابلية للتوسع', scalabilityDesc: 'بنية تحتية مصممة لتنمو مع رؤيتك.',
      vision: 'رؤية المنصة', visionDesc: 'التركيز على الوضوح والأداء والقابلية للتوسع - مساعدة الفرق على تقليل التعقيد.',
      protocol: 'بروتوكول المنصة (PDF)', years: 'براعة معمارية جاهزة للمستقبل'
    },
    cta: {
      commissioning: 'تكليف المشاريع',
      readyTitle: 'جاهز لبناء',
      legacy: 'إرثك؟',
      brief: 'إرسال ملخص المشروع',
      hq: 'الاتصال بالمقر العالمي'
    },
    contact: { 
      title: 'ابدأ إرثك القادم', subtitle: 'التكليف المباشر', identity: 'الهوية', communication: 'التواصل', sector: 'اختيار القطاع', description: 'وصف موجز', submit: 'إرسال', success: 'تم الإرسال بنجاح',
      successDesc: 'تم تشفير ملخص المشروع وإرساله إلى قسم التخطيط لدينا.',
      form: { name: 'الاسم الكامل', email: 'البريد الإلكتروني', vision: 'لخص رؤيتك...', sectors: ['العمارة السكنية', 'البنية التحتية التجارية', 'الحلول الصناعية', 'التجديد الإنشائي'] },
      nodes: 'نقاط التواصل', hq: 'المقر العالمي'
    },
    footer: { 
      vision: 'هندسة بيئات عالية الأداء منذ عام 2026. معترف بها عالمياً بالدقة المعمارية.', 
      directory: 'الدليل', company: 'الشركة', newsletter: 'النشرة الإخبارية', join: 'انضمام',
      newsletterDesc: 'رؤى ربع سنوية حول الابتكار الإنشائي.',
      emailPlaceholder: 'البريد الإلكتروني',
      links: { projects: 'المشاريع الحالية', overview: 'نظرة عامة على الخدمات', vision: 'الرؤية المعمارية', brand: 'أصول العلامة التجارية', team: 'الفريق التنفيذي', careers: 'الوظائف', press: 'الصحافة والإعلام', privacy: 'سياسة الخصوصية', terms: 'شروط الخدمة', cookies: 'إعدادات الكوكيز' }
    },
    projectDetail: { 
      back: 'العودة للمعرض', 
      study: 'دراسة مكانية', 
      studyDesc: 'تم تحسين كل مفصل إنشائي لتحقيق أقصى قدر من كفاءة الحمل. تلتقط صورنا الانتقال من السلامة الإنشائية الخام إلى الصقل المعماري النهائي.',
      prev: 'المعلم السابق', 
      next: 'المعلم التالي', 
      simulate: 'بدء محاكاة BIM', 
      blueprint: 'تحميل المخطط' 
    },
    legacyPresentation: {
      download: 'تحميل الملف الرسمي (PDF)',
      focus: 'التركيز المعماري',
      slides: [
        {
          title: "نشأة الدقة",
          subtitle: "تأسست عام 2026",
          description: "ولدت سترككتورا لتقود الأفق القادم. نحن نهندس العواطف في الفولاذ الذي يدعم أفقنا.",
          emphasis: "تُبنى الأساسات على الثقة، لكن المعالم تُبنى على النزاهة."
        },
        {
          title: "مركز التحكم: المنصة",
          subtitle: "ثورة التوأم الرقمي",
          description: "منصتنا الخاصة هي الجهاز العصبي الرقمي لكل مشروع. تربط يد المعماري بدقة الآلة لتنسيق BIM المستوى 400.",
          emphasis: "دقة ما دون الميليمتر هي معيارنا، وليست هدفنا."
        },
        {
          title: "عمارة العاطفة",
          subtitle: "تصميم متمحور حول الإنسان",
          description: "خلف حسابات تحمل الأحمال تكمن التجربة الإنسانية. نحن نصمم بيئات تتنفس وتلهم وتتطور من خلال مساحات منسقة.",
          emphasis: "يجب أن تكون المباني أكثر من مجرد حجر وزجاج؛ يجب أن تكون شعراً."
        },
        {
          title: "إرث مستدام للمستقبل",
          subtitle: "نحو عام 2050",
          description: "الاستدامة هي جوهرنا الإنشائي. من خلال الاستفادة من علم المواد والخدمات اللوجستية المحايدة للكربون، نضمن بقاء مبانينا لقرون.",
          emphasis: "نحن نبني تراث الألف عام القادمة."
        }
      ]
    },
    staticContent: {
      brand: {
        title: 'هوية العلامة التجارية',
        subtitle: 'الأصول والأصل',
        content: 'STRUCTURA هي منصة تكنولوجيا بناء حديثة. تم بناؤها لدعم محترفي البناء والعمارة من خلال توفير نظام مركزي ومنظم.',
        sections: [
          { h: 'الشعار (SVG)', p: 'تمثل العلامة الأساسية التماثل الإنشائي والاستقرار الجوهري. إنه مربع مدور داخل مربع.' },
          { h: 'أيقونة الموقع', p: 'نسخة نقية باللونين الأبيض والأسود من أيقونة الألماس الأساسية للمرافق الرقمية عالية الرؤية.' },
          { h: 'البيان', p: 'التركيز على الوضوح والأداء والقابلية للتوسع لتقليل التعقيد في البناء الحقيقي.' }
        ]
      },
      servicesOverview: {
        title: 'خدمات متكاملة',
        subtitle: 'نهجنا الشمولي',
        content: 'نحن نقدم حلولاً متكاملة من اختبار الإجهاد المفاهيمي إلى إدارة المرافق بعد الإشغال. تعتمد منهجيتنا على دقة BIM المستوى 400 وعلم المواد المحايد للكربون.',
        sections: [
          { h: 'التصميم المفاهيمي', p: 'النمذجة المعمارية مع تدقيق الجدوى الإنشائية.' },
          { h: 'الهندسة المتقدمة', p: 'أنظمة الكابلات المشدودة وحلول التحميل الهجينة.' },
          { h: 'لوجستيات المواد', p: 'المصادر الأخلاقية للمركبات عالية الأداء.' }
        ]
      },
      careers: {
        title: 'انضم إلى الطليعة',
        subtitle: 'آفاق المستقبل',
        content: 'نحن نبحث دائماً عن مهندسين رؤيويين ومعماريين مبتكرين يتحدون حدود الهندسة الإنشائية.',
        sections: [
          { h: 'مهندس إنشائي أول', p: 'قيادة مشاريع الفولاذ الهجين المعقدة في شيكاغو.' },
          { h: 'منسق BIM', p: 'إدارة التوائم الرقمية عالية LOD للمعالم الدولية.' },
          { h: 'عالم مواد', p: 'البحث والتطوير المركز على بدائل الخرسانة المستدامة.' }
        ]
      },
      press: {
        title: 'الصحافة والإعلام',
        subtitle: 'غرفة الأخبار',
        content: 'اكتشف أحدث الاختراقات في الهندسة عالية التحمل وتسليم المعالم الحضرية.',
        sections: [
          { h: 'مجموعة الإعلام', p: 'تحميل صور معمارية عالية الدقة وشعارات الشركة.' },
          { h: 'العلاقات العامة', p: 'للاستفسارات، تواصل معنا عبر hello@amrostudio.co.' }
        ]
      },
      enquire: {
        title: 'ابدأ مشروعاً',
        subtitle: 'استفسار عن مشروع',
        content: 'جاهز لبناء المستقبل؟ املأ النموذج أدناه أو اتصل بمقرنا العالمي مباشرة على hello@amrostudio.co.',
        brief: 'تم استلام المخطط',
        successMsg: 'تم إرسال استفسارك بأمان إلى hello@amrostudio.co. وسيتواصل معك كبار مستشارينا في غضون 48 ساعة.',
        another: 'إرسال إرسالية أخرى'
      },
      privacy: {
        title: 'بروتوكول الخصوصية',
        subtitle: 'نزاهة البيانات',
        content: 'في STRUCTURA، نتعامل مع البيانات المعمارية بنفس النزاهة التي نتعامل بها مع مبانينا. مخططاتك وبياناتك مشفرة.',
        sections: [
          { h: 'أمن البيانات', p: 'يتم تأمين جميع المراسلات إلى hello@amrostudio.co باستخدام تشفير AES-256.' },
          { h: 'حماية BIM', p: 'تُستخدم البيانات الوصفية فقط لدقة الحساب داخل مركز Mission Control.' },
          { h: 'حقوقك', p: 'تملك الملكية الكاملة لنماذجك المعمارية المخزنة على عقدنا.' }
        ]
      },
      terms: {
        title: 'شروط الخدمة',
        subtitle: 'الإطار القانوني',
        content: 'الوصول إلى منصة STRUCTURA يعني الموافقة على معاييرنا التشغيلية المعمارية والهندسية.',
        sections: [
          { h: 'بناء BIM', p: 'المستخدمون مسؤولون عن التحقق من المعايير الإنشائية التي تم إنشاؤها بواسطة علامة تبويب التحليل.' },
          { h: 'المسؤولية', p: 'يجب إجراء الاعتماد الإنشائي النهائي من قبل مهندس معتمد في اختصاصك القضائي.' },
          { h: 'الوصول للمنصة', p: 'يتم توفير Mission Control للاستخدام المهني فقط.' }
        ]
      },
      cookies: {
        title: 'إعدادات الكوكيز',
        subtitle: 'استمرارية النظام',
        content: 'نحن نستخدم ملفات تعريف الارتباط التقنية الأساسية للحفاظ على جلسة Mission Control وتفضيلات البيانات الوصفية الإنشائية.',
        sections: [
          { h: 'ملفات تعريف الارتباط للجلسة', p: 'مطلوبة للحفاظ على الحالة عبر علامات تبويب التحليل وسير العمل.' },
          { h: 'عقد تحليلية', p: 'تُستخدم لتحسين استجابة محاكاة BIM المستوى 400 الخاصة بنا.' },
          { h: 'مزامنة التفضيلات', p: 'تضمن بقاء معرف العقدة الخاص بك ثابتاً طوال جلسة مساحة العمل.' }
        ]
      }
    }
  },
  tr: {
    common: { return: 'Geri Dön', download: 'İndir', submit: 'Gönder', sending: 'Gönderiliyor...', back: 'Geri', next: 'İleri', prev: 'Geri', ok: 'Tamam', error: 'Hata' },
    nav: { services: 'Hizmetler', portfolio: 'Portföy', about: 'Hakkımızda', contact: 'İletişim', launch: 'Platformu Başlat', enquire: 'Bilgi Al' },
    hero: { legacy: 'Mükemmellik Mirası', title: 'YENİ UFUKLARI ŞEKİLLENDİRİYORUZ', subtitle: 'Vizyoner mimari kavramlar ile somut yapısal gerçeklik arasındaki boşluğu dolduruyoruz. Birinci sınıf malzemeler, sürdürülebilir mühendislik ve her bağlantıda tavizsiz hassasiyet.', explore: 'Portföyü Keşfet', dossier: 'Mirasımız (Dijital Dosya)', precision: 'Hassasiyet', level: 'BIM Seviyesi' },
    stats: { landmarks: 'Teslim Edilen Yapılar', built: 'İnşa Edilen m²', offices: 'Global Ofisler', safety: 'Güvenlik Tavizi' },
    pageHeaders: {
      services: 'İmkansızı tasarlamak',
      portfolio: 'Yapısal dönüm noktalarından oluşan bir miras',
      about: 'Hassasiyet. Dürüstlük. Vizyon.',
      contact: 'Olağanüstü bir şey inşa edelim',
      notFound: 'Proje bulunamadı.'
    },
    services: { title: 'HER SEKTÖR İÇİN HASSAS MÜHENDİSLİK', subtitle: 'Temel Yetkinlikler', description: 'Temelden başlayarak, endüstri standartlarını yeniden tanımlayan entegre inşaat çözümleri sunuyoruz.', download: 'Şartnameyi İndir' },
    portfolio: { 
      title: 'MİMARİ YAPILAR', subtitle: 'Seçilmiş Çalışmalar', simulate: 'BIM Simülasyonu', archives: 'Küresel Arşivlere Eriş',
      filters: { all: 'Hepsi', res: 'Konut', com: 'Ticari', infra: 'Altyapı', ren: 'Yenileme' },
      status: 'Yapısal Durum Tamam', ref: 'Düğüm Referansı'
    },
    arScanner: { 
      title: 'GAMMA AR: SAHA TARAYICI', subtitle: 'Mimari Zeka', description: 'Kameranızı herhangi bir mimari yapıya doğrultun. Yapay zekamız anında yapısal denetim gerçekleştirir, malzemeleri ve tektonik sistemleri tanımlar.', 
      init: 'Saha Taramasını Başlat', analyze: 'Yapıyı Analiz Et', exit: 'Çıkış', scanning: 'Kare İşleniyor...', 
      step1Title: 'Görsel Tanıma', step1Desc: 'Gemini Vision kullanarak bina stilini tanımlar.', 
      step2Title: 'Malzeme Tahmini', step2Desc: 'Muhtemel malzeme paletini hesaplar.',
      fault: 'DONANIM HATASI: KAMERA İZNİ REDDEDİLDİ.', reset: 'Düğümü Sıfırla'
    },
    about: { 
      title: 'PROFESYONELLER İÇİR BİR PLATFORM', subtitle: 'Teknoloji Çekirdeği', 
      desc: 'STRUCTURA, iş akışlarını ve operasyonel süreçleri yönetmek için yapılandırılmış, merkezi sistemler sunan modern bir inşaat teknolojisi platformudur.',
      performance: 'Performans', performanceDesc: 'Darboğazları ortadan kaldıran yüksek toleranslı mühendislik.',
      scalability: 'Ölçeklenebilirlik', scalabilityDesc: 'Vizyonunuzla birlikte büyüyecek şekilde tasarlanmış altyapı.',
      vision: 'Platform Vizyonu', visionDesc: 'Netlik, performans ve ölçeklenebilirliğe odaklanarak ekiplerin karmaşıklığı azaltmasına yardımcı olur.',
      protocol: 'Platform Protokolü (PDF)', years: 'Geleceğe Hazır Mimari Hüner'
    },
    cta: {
      commissioning: 'Proje Görevlendirme',
      readyTitle: 'İNŞA ETMEYE HAZIR MISINIZ?',
      legacy: 'MİRASINIZI?',
      brief: 'Proje Özetini Gönder',
      hq: 'Global Merkezle İletişime Geç'
    },
    contact: { 
      title: 'BİR SONRAKİ MİRASINIZA BAŞLAYIN', subtitle: 'Doğrudan Görevlendirme', identity: 'Kimlik', communication: 'İletişim', sector: 'Sektör Seçimi', description: 'Kısa Açıklama', submit: 'Gönder', success: 'Gönderim Başarılı',
      successDesc: 'Proje özeti şifrelendi ve kıdemli planlama departmanımıza gönderildi.',
      form: { name: 'AD SOYAD', email: 'E-POSTA ADRESİ', vision: 'VİZYONUNUZU ÖZETLEYİN...', sectors: ['Konut Mimarisi', 'Ticari Altyapı', 'Endüstriyel Çözümler', 'Yapısal Yenileme'] },
      nodes: 'İletişim Düğümleri', hq: 'Global Merkez'
    },
    footer: { 
      vision: '2026\'dan beri yüksek performanslı ortamlar inşa ediyoruz. Mimari hassasiyetle küresel olarak tanınıyoruz.', 
      directory: 'Dizin', company: 'Şirket', newsletter: 'Bülten', join: 'Katıl',
      newsletterDesc: 'Yapısal inovasyona dair üç aylık bilgiler.',
      emailPlaceholder: 'E-posta Adresi',
      links: { projects: 'Güncel Projeler', overview: 'Hizmet Genel Bakış', vision: 'Mimari Vizyon', brand: 'Marka Varlıkları', team: 'Yönetici Ekibi', careers: 'Kariyer', press: 'Basın ve Medya', privacy: 'Gizlilik Politikası', terms: 'Hizmet Şartları', cookies: 'Çerez Ayarları' }
    },
    projectDetail: { 
      back: 'Galeriye Dön', 
      study: 'Mekansal Çalışma', 
      studyDesc: 'Her yapısal bağlantı, maksimum yük verimliliği için optimize edildi. Görüntülerimiz, ham yapısal bütünlükten bitmiş mimari inceliğe geçişi yakalıyor.',
      prev: 'Önceki Kilometre Taşı', 
      next: 'Sonraki Kilometre Taşı', 
      simulate: 'BIM Simülasyonunu Başlat', 
      blueprint: 'Planı İndir' 
    },
    legacyPresentation: {
      download: 'Resmi Dosyayı İndir (PDF)',
      focus: 'Mimari Odak',
      slides: [
        {
          title: "HASSASİYETİN DOĞUŞU",
          subtitle: "2026'DA KURULDU",
          description: "Havacılık mühendisliği ve klasik mimarinin kesişiminden doğan STRUCTURA, bir sonraki ufka liderlik etmek için kuruldu. Gökyüzümüzü destekleyen çeliğe duyguları işliyoruz.",
          emphasis: "Temeller güven üzerine kurulur, ancak simge yapılar dürüstlük üzerine inşa edilir."
        },
        {
          title: "GÖREV KONTROLÜ: PLATFORM",
          subtitle: "DİJİTAL İKİZ DEVRİMİ",
          description: "Tescilli Platformumuz her projenin dijital sinir sistemidir. BIM Seviye 400 koordinasyonu için mimarın elini makinenin hassasiyetiyle birleştirir.",
          emphasis: "Milimetre altı doğruluk bizim hedefimiz değil, standardımızdır."
        },
        {
          title: "DUYGUNUN MİMARİSİ",
          subtitle: "İNSAN ODAKLI TASARIM",
          description: "Yük taşıma hesaplarının ötesinde insan deneyimi yatar. Özenle seçilmiş alanlar aracılığıyla nefes alan, ilham veren ve gelişen ortamlar tasarlıyoruz.",
          emphasis: "Binalar taş ve camdan daha fazı olmalı; onlar birer şiir olmalı."
        },
        {
          title: "GELECEĞE UYGUN BİR MİRAS",
          subtitle: "2050'YE DOĞRU",
          description: "Sürdürülebilirlik yapısal çekirdeğimizdir. Malzeme bilimi ve karbon nötr lojistikten yararlanarak binalarımızın yüzyıllarca ayakta kalmasını sağlıyoruz.",
          emphasis: "Gelecek bin yılın mirasını inşa ediyoruz."
        }
      ]
    },
    staticContent: {
      brand: {
        title: 'Marka Kimliği',
        subtitle: 'Varlıklar ve Köken',
        content: 'STRUCTURA modern bir inşaat teknolojisi platformudur. İnşaat ve mimarlık profesyonellerini yapılandırılmış, merkezi bir sistemle desteklemek için inşa edilmiştir.',
        sections: [
          { h: 'Logo (SVG)', p: 'Birincil marka yapısal simetriyi ve temel kararlılığı temsil eder. Kare içinde döndürülmüş bir karedir.' },
          { h: 'Site İkonu', p: 'Yüksek görünürlüklü dijital kullanım için çekirdek elmas ikonunun saf siyah-beyaz versiyonu.' },
          { h: 'Manifesto', p: 'Gerçek dünyadaki inşaat karmaşıklığını azaltmak için netlik, performans ve ölçeklenebilirliğe odaklanıyoruz.' }
        ]
      },
      servicesOverview: {
        title: 'Entegre Hizmetler',
        subtitle: 'Bütünsel Yaklaşımımız',
        content: 'Kavramsal stres testinden doluluk sonrası tesis yönetimine kadar uçtan uca çözümler sunuyoruz. Metodolojimiz BIM Seviye 400 hassasiyetinden ve karbon nötr malzeme biliminden yararlanır.',
        sections: [
          { h: 'Kavramsal Tasarım', p: 'Yapısal fizibilite denetimleri ile mimari modelleme.' },
          { h: 'Gelişmiş Mühendislik', p: 'Gerilmiş kablo sistemleri ve hibrit yük taşıma çözümleri.' },
          { h: 'Malzeme Lojistiği', p: 'Yüksek performanslı kompozitlerin etik tedariği.' }
        ]
      },
      careers: {
        title: 'Öncü Birliğe Katılın',
        subtitle: 'Gelecek Ufukları',
        content: 'Her zaman yapısal geometrinin sınırlarını zorlayan vizyoner mühendisler ve yenilikçi mimarlar arıyoruz.',
        sections: [
          { h: 'Kıdemli Yapı Mühendisi', p: 'Chicago\'daki karmaşık çelik-hibrit projelere liderlik edin.' },
          { h: 'BIM Koordinatörü', p: 'Uluslararası simge yapılar için yüksek LOD dijital ikizleri yönetin.' },
          { h: 'Malzeme Bilimci', p: 'Sürdürülebilir beton alternatiflerine odaklanan Ar-Ge.' }
        ]
      },
      press: {
        title: 'Basın ve Medya',
        subtitle: 'Haber Merkezi',
        content: 'Yüksek toleranslı mühendislik ve metropol simge yapı teslimatlarındaki en son gelişmeleri keşfedin.',
        sections: [
          { h: 'Medya Kiti', p: 'Yüksek çözünürlüklü yapısal çizimleri ve kurumsal logoları indirin.' },
          { h: 'Halkla İlişkiler', p: 'Sorularınız için hello@amrostudio.co adresinden bize ulaşın.' }
        ]
      },
      enquire: {
        title: 'Proje Başlat',
        subtitle: 'Proje Bilgi Talebi',
        content: 'Geleceği inşa etmeye hazır mısınız? Aşağıdaki formu doldurun veya doğrudan hello@amrostudio.co adresinden genel merkezimizle iletişime geçin.',
        brief: 'Plan Alındı',
        successMsg: 'Talebiniz hello@amrostudio.co adresine güvenli bir şekilde iletildi. Kıdemli danışmanlarımız 48 saat içinde size ulaşacaktır.',
        another: 'Başka Bir Gönderi Gönder'
      },
      privacy: {
        title: 'Gizlilik Protokolü',
        subtitle: 'Veri Bütünlüğü',
        content: 'STRUCTURA olarak mimari verilere binalarımızla aynı dürüstlükle yaklaşıyoruz. Planlarınız ve meta verileriniz şifrelenmiştir.',
        sections: [
          { h: 'Veri Güvenliği', p: 'hello@amrostudio.co adresine yapılan tüm gönderimler AES-256 şifrelemesi kullanılarak güvence altına alınır.' },
          { h: 'BIM Koruması', p: 'Meta veriler yalnızca Mission Control hub\'ı içindeki hesaplama doğruluğu için kullanılır.' },
          { h: 'Haklarınız', p: 'Düğümlerimizde saklanan mimari modellerinizin tam mülkiyetine sahipsiniz.' }
        ]
      },
      terms: {
        title: 'Hizmet Şartları',
        subtitle: 'Yasal Çerçeve',
        content: 'STRUCTURA platformuna erişmek, mimari ve mühendislik operasyon standartlarımızı kabul ettiğiniz anlamına gelir.',
        sections: [
          { h: 'BIM Kullanımı', p: 'Kullanıcılar, Analiz sekmesi tarafından oluşturulan yapısal parametreleri doğrulamaktan sorumludur.' },
          { h: 'Sorumluluk', p: 'Nihai yapısal onay, bölgenizdeki sertifikalı bir mühendis tarafından yapılmalıdır.' },
          { h: 'Platform Erişimi', p: 'Mission Control yalnızca profesyonel kullanım için sağlanmıştır.' }
        ]
      },
      cookies: {
        title: 'Cookie Settings',
        subtitle: 'Sistem Sürekliliği',
        content: 'Mission Control oturumunuzu ve yapısal meta veri tercihlerinizi korumak için gerekli teknik çerezleri kullanıyoruz.',
        sections: [
          { h: 'Sitzungs-Cookies', p: 'Erforderlich für die Statuserhaltung zwischen Analyse- und Workflow-Tabs.' },
          { h: 'Analytische Knoten', p: 'Zur Verbesserung der Reaktionsfähigkeit unserer BIM Level 400 Simulationen.' },
          { h: 'Präferenz-Sync', p: 'Stellt sicher, dass Ihre Node-ID während der gesamten Sitzung konsistent bleibt.' }
        ]
      }
    }
  },
  de: {
    common: { return: 'Zurückkehren', download: 'Herunterladen', submit: 'Senden', sending: 'Wird gesendet...', back: 'Zurück', next: 'Weiter', prev: 'Zurück', ok: 'OK', error: 'Fehler' },
    nav: { services: 'Dienstleistungen', portfolio: 'Portfolio', about: 'Über uns', contact: 'Kontakt', launch: 'Plattform starten', enquire: 'Anfragen' },
    hero: { legacy: 'Erbe der Exzellenz', title: 'DEN NEUEN HORIZONT GESTALTEN', subtitle: 'Wir schlagen die Brücke zwischen visionären Architekturkonzepten und greifbarer baulicher Realität. Premium-Materialien, nachhaltiges Engineering und kompromisslose Präzision.', explore: 'Portfolio erkunden', dossier: 'Unser Erbe (Digitales Dossier)', precision: 'Präzision', level: 'BIM-Ebene' },
    stats: { landmarks: 'Gelieferte Wahrzeichen', built: 'Gebaute m²', offices: 'Globale Büros', safety: 'Sicherheitskompromisse' },
    pageHeaders: {
      services: 'Das Unmögliche konstruieren',
      portfolio: 'Ein Vermächtnis baulicher Wahrzeichen',
      about: 'Präzision. Integrität. Vision.',
      contact: 'Lassen Sie uns etwas Außergewöhnliches bauen',
      notFound: 'Projekt nicht gefunden.'
    },
    services: { title: 'PRÄZISIONSENGINEERING FÜR JEDEN SEKTOR', subtitle: 'Kernkompetenzen', description: 'Von Grund auf bieten wir integrierte Baulösungen, die Industriestandards neu definieren.', download: 'Spezifikation herunterladen' },
    portfolio: { 
      title: 'ARCHITEKTONISCHE WAHRZEICHEN', subtitle: 'Ausgewählte Werke', simulate: 'BIM simulieren', archives: 'Globale Archive aufrufen',
      filters: { all: 'Alle', res: 'Wohnen', com: 'Gewerbe', infra: 'Infrastruktur', ren: 'Renovierung' },
      status: 'Strukturell OK', ref: 'Knotenreferenz'
    },
    arScanner: { 
      title: 'GAMMA AR: FELDSCANNER', subtitle: 'Architektonische Intelligenz', description: 'Richten Sie Ihre Kamera auf ein beliebiges Bauwerk. Unsere KI führt eine sofortige statische Prüfung durch und identifiziert Materialien.', 
      init: 'Feldscan initialisieren', analyze: 'Struktur analysieren', exit: 'Hub verlassen', scanning: 'Frame wird verarbeitet...', 
      step1Title: 'Visuelle Erkennung', step1Desc: 'Identifiziert den Baustil mittels Gemini Vision.', 
      step2Title: 'Materialextrapolation', step2Desc: 'Berechnet die wahrscheinliche Materialpalette.',
      fault: 'HARDWAREFEHLER: KAMERABERECHTIGUNG VERWEIGERT.', reset: 'Knoten zurücksetzen'
    },
    about: { 
      title: 'EINE PLATTFORM FÜR PROFIS', subtitle: 'Der Technologiekern', 
      desc: 'STRUCTURA ist eine moderne Bautechnologieplattform, die Profis mit strukturierten, zentralisierten Systemen für Workflows und Prozesse unterstützt.',
      performance: 'Leistung', performanceDesc: 'High-Tolerance-Engineering, das Engpässe eliminiert.',
      scalability: 'Skalierbarkeit', scalabilityDesc: 'Infrastruktur, die mit Ihrer Vision wächst.',
      vision: 'Plattform-Vision', visionDesc: 'Fokus auf Klarheit, Leistung und Skalierbarkeit — hilft Teams, Komplexität zu reduzieren.',
      protocol: 'Plattform-Protokoll (PDF)', years: 'Zukunftsweisende architektonische Exzellenz'
    },
    cta: {
      commissioning: 'Projektbeauftragung',
      readyTitle: 'BEREIT ZUM BAU IHRES',
      legacy: 'VERMÄCHTNISSES?',
      brief: 'Projekt-Briefing einreichen',
      hq: 'Globales HQ kontaktieren'
    },
    contact: { 
      title: 'STARTEN SIE IHR NÄCHSTES ERBE', subtitle: 'Direktbeauftragung', identity: 'Identität', communication: 'Kommunikation', sector: 'Sektorauswahl', description: 'Kurzbeschreibung', submit: 'Senden', success: 'Übertragung erfolgreich',
      successDesc: 'Das Projekt-Briefing wurde verschlüsselt and an unsere Planungsabteilung gesendet.',
      form: { name: 'VOLLSTÄNDIGER NAME', email: 'E-MAIL-ADRESSE', vision: 'VOLLSTÄNDIGER NAME...', sectors: ['Wohnarchitektur', 'Gewerbe-Infrastruktur', 'Industrielösungen', 'Strukturelle Renovierung'] },
      nodes: 'Kommunikationsknoten', hq: 'Globale Zentrale'
    },
    footer: { 
      vision: 'Bau von Hochleistungsumgebungen seit 2026. Weltweit anerkannt für architektonische Präzision.', 
      directory: 'Verzeichnis', company: 'Unternehmen', newsletter: 'Newsletter', join: 'Beitreten',
      newsletterDesc: 'Vierteljährliche Einblicke in strukturelle Innovationen.',
      emailPlaceholder: 'E-Mail-Adresse',
      links: { projects: 'Aktuelle Projekte', overview: 'Leistungsübersicht', vision: 'Architektonische Vision', brand: 'Marken-Assets', team: 'Management-Team', careers: 'Karriere', press: 'Presse & Medien', privacy: 'Datenschutz', terms: 'AGB', cookies: 'Cookie-Einstellungen' }
    },
    projectDetail: { 
      back: 'Zurück zur Galerie', 
      study: 'Raumstudie', 
      studyDesc: 'Jede strukturelle Verbindung wurde für maximale Lasteffizienz optimiert. Unsere Aufnahmen fangen den Übergang von roher struktureller Integrität zu vollendeter architektonischer Raffinesse ein.',
      prev: 'Vorheriger Meilenstein', 
      next: 'Nächster Meilenstein', 
      simulate: 'BIM-Simulation starten', 
      blueprint: 'Plan herunterladen' 
    },
    legacyPresentation: {
      download: 'Formales Dossier herunterladen (PDF)',
      focus: 'Architektonischer Fokus',
      slides: [
        {
          title: "DIE GENESIS DER PRÄZISION",
          subtitle: "GEGRÜNDET 2026",
          description: "Geboren aus der Schnittmenge von Luft- und Raumfahrttechnik und klassischer Architektur. Wir sind angetreten, um den nächsten Horizont anzuführen.",
          emphasis: "Fundamente bauen auf Vertrauen, aber Wahrzeichen bauen auf Integrität."
        },
        {
          title: "MISSIONSKONTROLLE: DIE PLATTFORM",
          subtitle: "REVOLUTION DER DIGITALEN ZWILLINGE",
          description: "Unsere Plattform ist das digitale Nervensystem jedes Projekts. Sie verbindet die Hand des Architekten mit der Präzision der Maschine.",
          emphasis: "Sub-Millimeter-Genauigkeit ist unser Standard, nicht unser Ziel."
        },
        {
          title: "DIE ARCHITEKTUR DER EMOTION",
          subtitle: "MENSCHENZENTRIERTES DESIGN",
          description: "Jenseits statischer Berechnungen liegt die menschliche Erfahrung. Wir schaffen Umgebungen, die atmen, inspirieren und sich entwickeln.",
          emphasis: "Gebäude sollten mehr als Stein und Glas sein; sie sollten Poesie sein."
        },
        {
          title: "EIN ZUKUNFTSSICHERES ERBE",
          subtitle: "AUF DEM WEG ZU 2050",
          description: "Nachhaltigkeit ist unser struktureller Kern. Durch Materialwissenschaft und CO2-neutrale Logistik halten unsere Gebäude jahrhundertelang.",
          emphasis: "Wir bauen das Erbe der nächsten tausend Jahre."
        }
      ]
    },
    staticContent: {
      brand: {
        title: 'Markenidentität',
        subtitle: 'Assets & Ursprung',
        content: 'STRUCTURA ist eine moderne Bautechnologieplattform. Sie wurde entwickelt, um Bau- und Architekturprofis durch ein strukturiertes, zentralisiertes System zu unterstützen.',
        sections: [
          { h: 'Das Logo (SVG)', p: 'Das primäre Zeichen steht für strukturelle Symmetrie und Kernstabilität. Es ist ein gedrehtes Quadrat in einem Quadrat.' },
          { h: 'Favicon-Icon', p: 'Eine rein schwarz-weiße Version des Kern-Diamant-Icons für hohe Sichtbarkeit im digitalen Bereich.' },
          { h: 'Das Manifest', p: 'Fokus auf Klarheit, Leistung und Skalierbarkeit, um die Komplexität im realen Bauwesen zu reduzieren.' }
        ]
      },
      servicesOverview: {
        title: 'Integrierte Dienstleistungen',
        subtitle: 'Unser ganzheitlicher Ansatz',
        content: 'Wir bieten End-to-End-Lösungen von konzeptionellen Belastungstests bis hin zum Facility Management nach dem Einzug. Unsere Methodik nutzt BIM Level 400 Präzision.',
        sections: [
          { h: 'Konzeptionelles Design', p: 'Architektonische Modellierung mit statischen Machbarkeitsprüfungen.' },
          { h: 'Fortgeschrittenes Engineering', p: 'Zugelemente und hybride tragende Lösungen.' },
          { h: 'Materiallogistik', p: 'Ethische Beschaffung von Hochleistungsverbundstoffen.' }
        ]
      },
      careers: {
        title: 'Werden Sie Teil der Vorhut',
        subtitle: 'Zukunftshorizonte',
        content: 'Wir suchen immer visionäre Ingenieure und innovative Architekten, die die Grenzen der strukturellen Geometrie herausfordern.',
        sections: [
          { h: 'Senior Tragwerksplaner', p: 'Leiten Sie komplexe Stahl-Hybrid-Projekte in Chicago.' },
          { h: 'BIM-Koordinator', p: 'Verwalten Sie digitale Zwillinge mit hohem LOD für internationale Wahrzeichen.' },
          { h: 'Materialwissenschaftler', p: 'F&E mit Fokus auf nachhaltige Beton-Alternativen.' }
        ]
      },
      press: {
        title: 'Presse & Medien',
        subtitle: 'Newsroom',
        content: 'Entdecken Sie die neuesten Durchbrüche im High-Tolerance-Engineering und bei metropolen Wahrzeichen.',
        sections: [
          { h: 'Pressemappe', p: 'Laden Sie hochauflösende Renderings und Firmenlogos herunter.' },
          { h: 'Öffentlichkeitsarbeit', p: 'Für Anfragen wenden Sie sich an hello@amrostudio.co.' }
        ]
      },
      enquire: {
        title: 'Projekt starten',
        subtitle: 'Projektanfrage',
        content: 'Bereit, die Zukunft zu bauen? Füllen Sie das Formular aus oder kontaktieren Sie uns direkt unter hello@amrostudio.co.',
        brief: 'Plan erhalten',
        successMsg: 'Ihre Anfrage wurde sicher an hello@amrostudio.co übermittelt. Unsere Berater werden sich innerhalb von 48 Stunden melden.',
        another: 'Weitere Übertragung senden'
      },
      privacy: {
        title: 'Datenschutzprotokoll',
        subtitle: 'Datenintegrität',
        content: 'Bei STRUCTURA behandeln wir architektonische Daten mit der gleichen Integrität wie unsere Gebäude. Ihre Pläne und Metadaten sind verschlüsselt.',
        sections: [
          { h: 'Datensicherheit', p: 'Alle Übertragungen an hello@amrostudio.co sind mit AES-256-Verschlüsselung gesichert.' },
          { h: 'BIM-Schutz', p: 'Metadaten werden nur zur Berechnungsgenauigkeit innerhalb des Mission Control Hubs verwendet.' },
          { h: 'Ihre Rechte', p: 'Sie haben das volle Eigentum an Ihren architektonischen Modellen.' }
        ]
      },
      terms: {
        title: 'Nutzungsbedingungen',
        subtitle: 'Legal Framework',
        content: 'Der Zugriff auf die STRUCTURA-Plattform setzt die Zustimmung zu unseren architektonischen und technischen Standards voraus.',
        sections: [
          { h: 'BIM-Nutzung', p: 'Benutzer sind für die Überprüfung der generierten Strukturparameter verantwortlich.' },
          { h: 'Haftung', p: 'Die endgültige statische Abnahme muss durch einen zertifizierten Ingenieur erfolgen.' },
          { h: 'Plattformzugriff', p: 'Mission Control wird nur für den professionellen Gebrauch zur Verfügung gestellt.' }
        ]
      },
      cookies: {
        title: 'Cookie-Einstellungen',
        subtitle: 'Systempersistenz',
        content: 'Wir verwenden essenzielle technische Cookies, um Ihre Mission Control-Sitzung und Präferenzen zu speichern.',
        sections: [
          { h: 'Sitzungs-Cookies', p: 'Erforderlich für die Statuserhaltung zwischen Analyse- und Workflow-Tabs.' },
          { h: 'Analytische Knoten', p: 'Zur Verbesserung der Reaktionsfähigkeit unserer BIM Level 400 Simulationen.' },
          { h: 'Präferenz-Sync', p: 'Stellt sicher, dass Ihre Node-ID während der gesamten Sitzung konsistent bleibt.' }
        ]
      }
    }
  }
};
