import { 
  Briefcase, 
  HardHat, 
  Banknote, 
  Users, 
  Scale, 
  Megaphone, 
  ShoppingCart, 
  Network, 
  Wrench, 
  Building2, 
  Smile,
  LayoutDashboard,
  Brain,
  ScanEye,
  Calculator,
  FileSearch,
  Bot,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Camera,
  Layers,
  Truck,
  FileText,
  Package,
  Receipt,
  ArrowUpRight,
  TrendingDown,
  Landmark,
  ShieldCheck,
  FileCheck,
  RefreshCcw,
  Globe,
  Tag,
  Glasses,
  MessageSquare,
  CreditCard,
  Activity,
  Calendar,
  Vote,
  Gavel,
  Armchair,
  Wallet
} from 'lucide-react';
import { ModuleType, NavItem, Project, SalesLead, ModuleDetail } from './types';

export const APP_NAME = "بنيان كلاود";

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'لوحة القيادة', icon: LayoutDashboard, module: ModuleType.ADMIN },
  { id: 'planning', label: 'التخطيط والدراسات', icon: Briefcase, module: ModuleType.PLANNING },
  { id: 'field', label: 'الذكاء الميداني', icon: HardHat, module: ModuleType.FIELD },
  { id: 'finance', label: 'الذكاء المالي', icon: Banknote, module: ModuleType.FINANCE },
  { id: 'admin', label: 'الموارد البشرية', icon: Users, module: ModuleType.ADMIN },
  { id: 'legal', label: 'الامتثال والقانون', icon: Scale, module: ModuleType.LEGAL },
  { id: 'marketing', label: 'التسويق (HubSpot)', icon: Megaphone, module: ModuleType.MARKETING },
  { id: 'sales', label: 'المبيعات والحجوزات', icon: ShoppingCart, module: ModuleType.SALES },
  { id: 'brokers', label: 'إدارة الوسطاء', icon: Network, module: ModuleType.BROKERS },
  { id: 'maintenance', label: 'الصيانة والضمان', icon: Wrench, module: ModuleType.MAINTENANCE },
  { id: 'community', label: 'إدارة الأملاك', icon: Building2, module: ModuleType.COMMUNITY },
  { id: 'aftersales', label: 'خدمة ما بعد البيع', icon: Smile, module: ModuleType.AFTERSALES },
];

export const MOCK_PROJECTS: Project[] = [
  { id: '1', name: 'مشروع روافد الرياض', location: 'حي النرجس، الرياض', progress: 65, status: 'Active', wafiLicense: 'وافي-2024-882' },
  { id: '2', name: 'أبراج جدة فيو', location: 'الكورنيش، جدة', progress: 30, status: 'Delayed', wafiLicense: 'وافي-2023-104' },
  { id: '3', name: 'ضاحية الخبر', location: 'العزيزية، الخبر', progress: 92, status: 'Active', wafiLicense: 'وافي-2023-551' },
];

export const MOCK_LEADS: SalesLead[] = [
  { id: '1', name: 'عبدالله السديري', status: 'Negotiation', value: 1200000, source: 'Instagram Ads' },
  { id: '2', name: 'شركة الاستثمار الأولى', status: 'Qualified', value: 45000000, source: 'Direct' },
  { id: '3', name: 'محمد القحطاني', status: 'New', value: 850000, source: 'HubSpot Form' },
];

export const DB_SCHEMA_SQL = `
-- Schema details truncated for brevity in this view...
-- See previous files for full SQL
`;

// ============================================================================
// AI SIMULATION DATA FOR ALL MODULES
// ============================================================================

export const MODULE_DETAILS: Record<string, ModuleDetail> = {
  [ModuleType.PLANNING]: {
    id: ModuleType.PLANNING,
    title: "ما قبل البناء والتخطيط",
    description: "إدارة مرحلة دراسات الجدوى والتصاميم وإصدار التراخيص.",
    subDomains: [
      {
        id: 'land_analysis',
        title: "تحليل فرص الأراضي (AI Land Analysis)",
        description: "تحليل ديموغرافي وجغرافي لفرص الاستثمار.",
        aiFeature: { title: "تقييم الموقع الجغرافي", description: "استخدام البيانات الجغرافية للتنبؤ بنمو الكثافة السكانية والخدمات المستقبلية حول الأرض.", icon: Brain },
        aiResult: {
          type: 'stat',
          summary: "أرض شمال الرياض (حي العارض) - تصنيف استثماري A+",
          confidenceScore: 89,
          data: { label: "النمو السكاني المتوقع (5 سنوات)", value: "+45%" }
        }
      },
      {
        id: 'engineering',
        title: "نمذجة المعلومات (BIM Integration)",
        description: "تكامل كامل مع المخططات الهندسية.",
        aiFeature: { title: "التحقق من كود البناء السعودي (SBC Compliance)", description: "مسح المخططات تلقائياً واكتشاف المخالفات لكود البناء السعودي قبل التقديم للبلدية.", icon: ScanEye },
        aiResult: {
          type: 'list',
          summary: "تم اكتشاف 3 مخالفات محتملة لكود البناء السعودي (SBC 1101).",
          confidenceScore: 98,
          data: [
             { label: "ارتفاع سترة السطح أقل من 1.5 متر", status: "warning" },
             { label: "نسبة النوافذ في الواجهة الجنوبية تتجاوز الحد الحراري", status: "error" },
             { label: "مخرج الطوارئ مطابق للمواصفات", status: "success" }
          ]
        }
      },
      {
        id: 'feasibility',
        title: "دراسات جدوى ذكية (Smart Feasibility)",
        description: "تقارير مالية فورية وتحليل التكلفة.",
        aiFeature: { title: "المحكاة التنبؤية (Predictive ROI)", description: "تحليل بيانات السوق التاريخية في الحي للتنبؤ بالعائد على الاستثمار ونسبة المخاطرة.", icon: Calculator },
        aiResult: {
          type: 'chart',
          summary: "بناءً على بيانات حي النرجس (الرياض)، نسبة العائد المتوقع 22% خلال 18 شهر.",
          confidenceScore: 94,
          data: [
            { name: 'شراء الأرض', value: 5000000 },
            { name: 'البناء', value: 8000000 },
            { name: 'التسويق', value: 500000 },
            { name: 'المبيعات المتوقعة', value: 16500000 },
          ]
        }
      }
    ]
  },
  [ModuleType.FIELD]: {
    id: ModuleType.FIELD,
    title: "الذكاء الميداني وإدارة الموقع (Site Intelligence)",
    description: "أدوات الذكاء الاصطناعي لدورة الحياة العقارية الشاملة.",
    subDomains: [
      {
        id: 'cctv_drone',
        title: "كاميرات CCTV & درونات",
        description: "مراقبة حية للمواقع وتحليل الفيديو.",
        aiFeature: { title: "رصد الموقع الحي", description: "بث مباشر وتحليل لقطات الفيديو للكشف عن سير العمل.", icon: Camera },
        aiResult: {
          type: 'text',
          summary: "الكاميرات تعمل بنسبة 100% في مشروع أفق 11.",
          confidenceScore: 100,
          data: null
        }
      },
      {
        id: 'safety_ai',
        title: "كشف السلامة (Safety AI)",
        description: "رصد مخاطر السلامة وارتداء الخوذة.",
        aiFeature: { title: "الرؤية الحاسوبية للسلامة", description: "تحديد المخالفات فورياً وارسال تنبيهات للمشرف.", icon: AlertTriangle },
        aiResult: {
          type: 'alert',
          summary: "تم رصد 3 مخالفات اليوم (عدم ارتداء خوذة).",
          confidenceScore: 98,
          data: { location: "أفق 11", type: "Safety Violation" }
        }
      },
      {
        id: 'bim_reality',
        title: "مقارنة المخطط بالواقع",
        description: "BIM vs Reality - كشف الانحرافات.",
        aiFeature: { title: "تحليل الانحراف (Deviation Analysis)", description: "مقارنة المسح الضوئي للموقع مع نموذج BIM الرقمي.", icon: Layers },
        aiResult: {
          type: 'stat',
          summary: "تطابق بنسبة 97% في أعمال الهيكل الخرساني.",
          confidenceScore: 95,
          data: { label: "نسبة الانحراف", value: "3%" }
        }
      },
      {
        id: 'tracking',
        title: "تتبع الموارد",
        description: "Resource Tracking - مراقبة المعدات والمواد.",
        aiFeature: { title: "التتبع الجغرافي (Geo-Tracking)", description: "تتبع حركة الرافعات والمعدات الثقيلة لضمان الاستخدام الأمثل.", icon: Truck },
        aiResult: {
          type: 'list',
          summary: "حالة المعدات في الموقع:",
          confidenceScore: 100,
          data: [
             { label: "رافعة برجية #1 (تعمل)", status: "success" },
             { label: "رافعة شوكية JCB (صيانة)", status: "warning" }
          ]
        }
      },
      {
        id: 'reports',
        title: "تقارير إنجاز آلية",
        description: "Auto-Progress Reports - تقارير يومية.",
        aiFeature: { title: "توليد التقارير الذكي", description: "إنشاء تقارير PDF يومية تلخص حالة المشروع بالصور والبيانات.", icon: FileText },
        aiResult: {
          type: 'text',
          summary: "تم إنشاء تقرير الإنجاز اليومي لمشروع أفق 11.",
          confidenceScore: 100,
          data: null
        }
      },
      {
        id: 'inventory',
        title: "استهلاك المواد",
        description: "Inventory AI - مراقبة مخزون التشوين.",
        aiFeature: { title: "التنبؤ بالمخزون", description: "حساب الكميات المتبقية وتوقع موعد النفاذ.", icon: Package },
        aiResult: {
          type: 'stat',
          summary: "مخزون الحديد منخفض.",
          confidenceScore: 92,
          data: { label: "الكمية المتبقية", value: "12 طن" }
        }
      }
    ]
  },
  [ModuleType.FINANCE]: {
    id: ModuleType.FINANCE,
    title: "الذكاء المالي والإداري (Financial & Admin AI)",
    description: "أدوات الذكاء الاصطناعي لدورة الحياة العقارية الشاملة.",
    subDomains: [
      {
        id: 'invoice_ocr',
        title: "قارئ فواتير ذكي",
        description: "Smart Invoice OCR - ربط مع 'فاتورة' ومطابقة PO.",
        aiFeature: { title: "استخراج البيانات الآلي", description: "مسح الفواتير ضوئياً واستخراج البيانات ومطابقتها مع أوامر الشراء ونظام ZATCA.", icon: ScanEye },
        aiResult: {
          type: 'text',
          summary: "فاتورة #9921 (شركة الخرسانة السعودية) - ZATCA Verified.",
          confidenceScore: 99,
          data: null
        }
      },
      {
        id: 'cashflow_forecast',
        title: "تنبؤ بالتدفق النقدي",
        description: "Cash Flow Forecast - تنبؤ بالعجز قبل 3 أشهر.",
        aiFeature: { title: "التنبؤ المالي", description: "تحليل جدول دفعات المقاولين مقابل دفعات العملاء ونظام وافي.", icon: TrendingUp },
        aiResult: {
          type: 'chart',
          summary: "توقع عجز حرج (-2.1M) في شهر أغسطس. يوصى بتسريع الإنجاز.",
          confidenceScore: 92,
          data: [
            { name: 'يونيو', value: 2300000 },
            { name: 'يوليو', value: -300000 },
            { name: 'أغسطس', value: -2100000 },
          ]
        }
      },
      {
        id: 'predictive_procurement',
        title: "إدارة مشتريات تنبؤية",
        description: "Predictive Procurement - مراقبة أسعار الحديد والخرسانة.",
        aiFeature: { title: "مؤشر أسعار السوق", description: "مراقبة الأسواق العالمية والمحلية للتنبؤ بارتفاع أسعار مواد البناء.", icon: ShoppingCart },
        aiResult: {
          type: 'alert',
          summary: "مؤشر سعر الحديد: +8% (توقعات بارتفاع السعر).",
          confidenceScore: 88,
          data: { action: "Buy Now", quantity: "45 Tons" }
        }
      }
    ]
  },
  [ModuleType.ADMIN]: {
    id: ModuleType.ADMIN,
    title: "الموارد البشرية والإدارة",
    description: "إدارة المواهب والعمليات الداخلية.",
    subDomains: [
      {
        id: 'hiring',
        title: "التوظيف",
        description: "جلب الكفاءات الهندسية والإدارية.",
        aiFeature: { title: "تحليل السير الذاتية (CV Parsing)", description: "فرز آلاف السير الذاتية وترشيح المهندسين ذوي الخبرة في المشاريع السعودية المماثلة.", icon: FileSearch },
        aiResult: {
          type: 'list',
          summary: "تم تحليل 150 سيرة ذاتية لوظيفة 'مهندس موقع'. أفضل 3 مرشحين:",
          confidenceScore: 88,
          data: [
            { label: "م. خالد الحربي (خبرة 5 سنوات في مشاريع روشن)", status: "success" },
            { label: "م. عمر فاروق (خبرة سابقة في بن لادن)", status: "success" },
            { label: "م. سارة علي (حديثة تخرج بمرتبة شرف)", status: "warning" }
          ]
        }
      },
      {
        id: 'saudization',
        title: "السعودة ونطاقات",
        description: "الامتثال لنسب التوطين.",
        aiFeature: { title: "محسن نطاقات (Nitaqat Optimizer)", description: "اقتراح خطط التوظيف للحفاظ على النطاق البلاتيني وتجنب إيقاف الخدمات.", icon: Calculator },
        aiResult: {
          type: 'stat',
          summary: "أنت حالياً في النطاق البلاتيني. للحفاظ عليه، يجب توظيف 1 سعودي إضافي قبل نهاية الربع.",
          confidenceScore: 100,
          data: { label: "نسبة التوطين الحالية", value: "38.5%" }
        }
      }
    ]
  },
  [ModuleType.LEGAL]: {
    id: ModuleType.LEGAL,
    title: "الامتثال الحكومي والقانوني (Legal & Compliance)",
    description: "أدوات الذكاء الاصطناعي لدورة الحياة العقارية الشاملة.",
    subDomains: [
      {
        id: 'sbc_bot',
        title: "بوت كود البناء (SBC Bot)",
        description: "SBC Bot - للتحقق من الاشتراطات والمواد.",
        aiFeature: { title: "المساعد الذكي لكود البناء", description: "SBC 1101 - الكود السعودي للمباني السكنية.", icon: Bot },
        aiResult: {
          type: 'text',
          summary: "استفسار شائع: مواصفات العزل الحراري المطلوبة للنوافذ في المنطقة المناخية الأولى؟",
          confidenceScore: 100,
          data: null
        }
      },
      {
        id: 'gov_api',
        title: "الربط الحكومي",
        description: "Gov. API - بلدي، وافي، هيئة العقار.",
        aiFeature: { title: "بوابة الربط الحكومي", description: "مزامنة البيانات الحية مع المنصات الحكومية لضمان الامتثال.", icon: Globe },
        aiResult: {
          type: 'list',
          summary: "حالة الربط مع المنصات الحكومية:",
          confidenceScore: 100,
          data: [
             { label: "بلدي (Balady)", status: "success" },
             { label: "وافي (Wafi)", status: "success" },
             { label: "هيئة العقار (REGA)", status: "warning" } // Warning indicates syncing
          ]
        }
      },
      {
        id: 'license_tracking',
        title: "متابعة التراخيص",
        description: "License Tracking - رخص الدفاع المدني والعمالة.",
        aiFeature: { title: "متتبع التراخيص الذكي", description: "تنبيهات آلية قبل انتهاء التراخيص الحكومية.", icon: FileCheck },
        aiResult: {
          type: 'alert',
          summary: "رخصة الدفاع المدني (المكتب) تنتهي قريباً (5 أيام).",
          confidenceScore: 100,
          data: { license: "Civil Defense", status: "Expiring Soon" }
        }
      }
    ]
  },
  [ModuleType.MARKETING]: {
    id: ModuleType.MARKETING,
    title: "التسويق (HubSpot Integration)",
    description: "إدارة الحملات والعلامة التجارية.",
    subDomains: [
      {
        id: 'content_gen',
        title: "صناعة المحتوى",
        description: "كتابة إعلانات ومنشورات.",
        aiFeature: { title: "مولد المحتوى العقاري (Generative Copy)", description: "توليد وصف تسويقي للوحدات باللهجة السعودية المحلية أو الفصحى حسب الجمهور المستهدف.", icon: Bot },
        aiResult: {
          type: 'text',
          summary: "اقتراح لنص إعلاني (تويتر): 'تملك بيت العمر في حي النرجس 🏡✨.. تصميم مودرن وموقع استراتيجي قريب من طريق الملك سلمان. احجز معاينتك الآن! #عقارات_الرياض'",
          confidenceScore: 85,
          data: null
        }
      },
      {
        id: 'targeting',
        title: "استهداف الجمهور",
        description: "تحديد من هم المشترين المحتملين.",
        aiFeature: { title: "الاستهداف التنبؤي (Predictive Targeting)", description: "تحليل البيانات لتحديد الأحياء التي يسكن فيها العملاء الأكثر احتمالاً للشراء في مشروعك.", icon: Brain },
        aiResult: {
          type: 'list',
          summary: "أفضل المناطق لاستهداف العملاء المحتملين لشراء فيلات بسعر 2.5 مليون:",
          confidenceScore: 91,
          data: [
            { label: "حي الملقا (الرياض)", status: "success" },
            { label: "حي الياسمين (الرياض)", status: "success" },
            { label: "حي حطين (الرياض)", status: "success" }
          ]
        }
      }
    ]
  },
  [ModuleType.SALES]: {
    id: ModuleType.SALES,
    title: "التسويق والمبيعات (Sales Intelligence)",
    description: "تحويل العملاء المحتملين إلى ملاك باستخدام الذكاء الاصطناعي.",
    subDomains: [
      {
        id: 'dynamic_pricing',
        title: "تسعير ديناميكي",
        description: "AI Pricing - تغيير السعر حسب الإطلالة والسوق.",
        aiFeature: { title: "محرك التسعير الذكي", description: "تحليل عوامل الإطلالة، الطلب الموسمي، والمخزون لاقتراح السعر الأمثل.", icon: Tag },
        aiResult: {
          type: 'stat',
          summary: "السعر المقترح للوحدة 1102 (روف) بناءً على الإطلالة الجبلية والطلب العالي.",
          confidenceScore: 95,
          data: { label: "السعر المقترح (AI)", value: "1,230,000 ر.س" }
        }
      },
      {
        id: 'vr_tours',
        title: "جولات افتراضية (VR)",
        description: "VR Tours - معاينة وتغيير التشطيبات.",
        aiFeature: { title: "المعاينة الافتراضية التفاعلية", description: "السماح للعميل بالتجول وتغيير الأرضيات والدهانات افتراضياً.", icon: Glasses },
        aiResult: {
          type: 'text',
          summary: "تم تفعيل جولة VR لوحدة العرض. العميل قام بتغيير الأرضيات إلى رخام.",
          confidenceScore: 100,
          data: null
        }
      },
      {
        id: 'sales_bot',
        title: "بوت مبيعات ذكي",
        description: "Smart Sales Bot - رد آلي وحجز مواعيد.",
        aiFeature: { title: "مساعد المبيعات الآلي", description: "الرد على استفسارات العملاء وحجز مواعيد الزيارة تلقائياً عبر واتساب.", icon: MessageSquare },
        aiResult: {
          type: 'stat',
          summary: "إحصائيات البوت اليوم:",
          confidenceScore: 100,
          data: { label: "محادثات نشطة", value: "24" }
        }
      },
      {
        id: 'eligibility',
        title: "التحقق من الأهلية",
        description: "Eligibility Check - ربط مع 'سكني' والبنك.",
        aiFeature: { title: "مدقق الأهلية الائتمانية", description: "التحقق الفوري من استحقاق الدعم السكني والملاءة المالية.", icon: CreditCard },
        aiResult: {
          type: 'list',
          summary: "حالة أهلية العملاء الجدد:",
          confidenceScore: 98,
          data: [
             { label: "سلطان العتيبي (مؤهل - 500K)", status: "success" },
             { label: "فهد الشمري (معلق - البنك)", status: "warning" }
          ]
        }
      }
    ]
  },
  [ModuleType.BROKERS]: {
    id: ModuleType.BROKERS,
    title: "إدارة الوسطاء",
    description: "التعامل مع المسوقين الخارجيين.",
    subDomains: [
      {
        id: 'fraud',
        title: "التحقق من الاحتيال",
        description: "مراجعة صفقات الوسطاء.",
        aiFeature: { title: "كشف تعارض المصالح", description: "تحليل العلاقات بين الوسطاء والمشترين لكشف أي عمليات بيع وهمية أو تلاعب بالعمولات.", icon: ScanEye },
        aiResult: {
          type: 'text',
          summary: "لم يتم اكتشاف أي تعارض مصالح في الصفقات الـ 50 الأخيرة.",
          confidenceScore: 99,
          data: null
        }
      },
      {
        id: 'matching',
        title: "مطابقة الوسطاء",
        description: "توزيع المخزون على الوسطاء.",
        aiFeature: { title: "نظام التوصية الذكي", description: "ترشيح أفضل وسيط لبيع 'فيلا دوبلكس' بناءً على سجل مبيعاته التاريخي في نفس الفئة.", icon: Brain },
        aiResult: {
          type: 'stat',
          summary: "الوسيط الأفضل لهذا النوع من الوحدات:",
          confidenceScore: 92,
          data: { label: "مكتب آفاق العقارية", value: "معدل إغلاق 15%" }
        }
      }
    ]
  },
  [ModuleType.MAINTENANCE]: {
    id: ModuleType.MAINTENANCE,
    title: "الصيانة الذكية وما بعد البيع (Maintenance & Warranty)",
    description: "أدوات الذكاء الاصطناعي لدورة الحياة العقارية الشاملة.",
    subDomains: [
      {
        id: 'photo_ticket',
        title: "نظام تذاكر مرئي",
        description: "Photo-to-Ticket AI - صور العطل ليتم إنشاء التذكرة.",
        aiFeature: { title: "تحليل الصور وتشخيص الأعطال", description: "رفع صور الأعطال ليقوم النظام بتصنيفها وتحديد خطورتها وإنشاء تذكرة للمقاول المختص تلقائياً.", icon: Camera },
        aiResult: {
          type: 'text',
          summary: "تم تحليل الصورة: تسريب مياه (سباكة). الأولوية: عالية. الضمان: ساري.",
          confidenceScore: 96,
          data: null
        }
      },
      {
        id: 'iot_sensors',
        title: "صيانة تنبؤية (IoT)",
        description: "IoT Sensors - مراقبة المصاعد والمضخات.",
        aiFeature: { title: "مراقبة الأصول الذكية", description: "ربط حساسات الاهتزاز والحرارة في المصاعد والمضخات للتنبؤ بالأعطال قبل حدوثها.", icon: Activity },
        aiResult: {
          type: 'alert',
          summary: "تنبيه: ضغط مضخة المياه الرئيسية منخفض (72%). يوصى بالصيانة.",
          confidenceScore: 90,
          data: { asset: "Main Water Pump", status: "Warning" }
        }
      },
      {
        id: 'preventive_scheduling',
        title: "جدولة وقائية",
        description: "Preventive Scheduling - جدولة النظافة والصيانة.",
        aiFeature: { title: "الجدولة الذكية", description: "جدولة أعمال الصيانة الدورية والنظافة بناءً على معدلات الاستخدام وحالة الطقس.", icon: Calendar },
        aiResult: {
          type: 'list',
          summary: "المهام الوقائية القادمة:",
          confidenceScore: 100,
          data: [
             { label: "صيانة التكييف المركزي (متبقي يومين)", status: "warning" },
             { label: "رش المبيدات الحشرية (دوري)", status: "success" }
          ]
        }
      }
    ]
  },
  [ModuleType.COMMUNITY]: {
    id: ModuleType.COMMUNITY,
    title: "إدارة الأملاك واتحاد الملاك (Property Management)",
    description: "أدوات الذكاء الاصطناعي لدورة الحياة العقارية الشاملة.",
    subDomains: [
      {
        id: 'mullak_integration',
        title: "منصة ملاك",
        description: "Mullak Integration - التصويت وإدارة الجمعية.",
        aiFeature: { title: "التصويت الذكي", description: "تحليل نتائج التصويت في جمعية الملاك وإرسال تذكيرات للأعضاء غير المصوتين.", icon: Vote },
        aiResult: {
          type: 'stat',
          summary: "تصويت نشط: تركيب كاميرات مراقبة.",
          confidenceScore: 100,
          data: { label: "نسبة الموافقة", value: "65%" }
        }
      },
      {
        id: 'auto_payments',
        title: "تحصيل رسوم وإيجارات",
        description: "Automated Payments - ربط مع 'إيجار' وسداد آلي.",
        aiFeature: { title: "التنبؤ بالتعثر المالي", description: "تحليل سلوك السداد للمستأجرين وتوقع التأخير في الدفع.", icon: Wallet },
        aiResult: {
          type: 'stat',
          summary: "نسبة التحصيل لشهر أغسطس (إيجار + رسوم ملاك).",
          confidenceScore: 100,
          data: { label: "نسبة التحصيل", value: "85%" }
        }
      },
      {
        id: 'facility_booking',
        title: "إدارة مرافق",
        description: "Facility Booking - حجز المسابح والقاعات.",
        aiFeature: { title: "تحسين جدولة المرافق", description: "اقتراح أوقات الصيانة وتنظيف المسابح بناءً على أوقات انخفاض الحجوزات.", icon: Armchair },
        aiResult: {
          type: 'list',
          summary: "حالة المرافق الحالية:",
          confidenceScore: 100,
          data: [
            { label: "المسبح المشترك (محجوز 4pm-6pm)", status: "warning" },
            { label: "النادي الرياضي (متاح)", status: "success" }
          ]
        }
      },
      {
        id: 'smart_dispute',
        title: "فض نزاعات ذكي",
        description: "Smart Dispute - بوت قانوني للخلافات.",
        aiFeature: { title: "المستشار القانوني الآلي", description: "بوت مدرب على لائحة جمعية الملاك للفصل في الخلافات البسيطة (مواقف، إزعاج) آلياً.", icon: Gavel },
        aiResult: {
          type: 'stat',
          summary: "لا توجد نزاعات نشطة حالياً.",
          confidenceScore: 100,
          data: { label: "نزاعات نشطة", value: "0" }
        }
      }
    ]
  },
  [ModuleType.AFTERSALES]: {
    id: ModuleType.AFTERSALES,
    title: "خدمة ما بعد البيع",
    description: "قياس الرضا وعمليات التسليم.",
    subDomains: [
      {
        id: 'handover',
        title: "التسليم",
        description: "تسليم الوحدة للمالك.",
        aiFeature: { title: "قائمة التحقق الذكية", description: "توليد قائمة نواقص مخصصة لكل وحدة بناءً على تقارير الجودة السابقة وتاريخ المقاول.", icon: FileSearch },
        aiResult: {
          type: 'list',
          summary: "قائمة النواقص المتوقعة للوحدة A-102 قبل التسليم:",
          confidenceScore: 85,
          data: [
            { label: "تأكد من عزل النوافذ (تكرر الخطأ 3 مرات)", status: "warning" },
            { label: "اختبار ضغط الماء في الحمام الرئيسي", status: "warning" }
          ]
        }
      },
      {
        id: 'sentiment',
        title: "تحليل المشاعر",
        description: "فهم رضا العملاء.",
        aiFeature: { title: "تحليل المشاعر (Sentiment Analysis)", description: "تحليل رسائل العملاء وشكاواهم لتحديد مستوى الرضا العام وتنبيه الإدارة في حال وجود غضب جماعي.", icon: Brain },
        aiResult: {
          type: 'stat',
          summary: "مؤشر رضا العملاء (NPS) لهذا الشهر إيجابي جداً.",
          confidenceScore: 94,
          data: { label: "NPS Score", value: "+72" }
        }
      }
    ]
  }
};