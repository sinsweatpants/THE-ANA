import { TaskType } from "../../types";
import { AnalysisType, Category } from "../types/common";
import type { SupportedModule } from "../examples/advancedScreenplayModuleExamples";

/**
 * @description تعريف بنية عنصر التوثيق لكل وحدة متقدمة.
 */
export interface ModuleDocumentationEntry {
  taskType: SupportedModule;
  displayName: string;
  description: string;
  inputs: string[];
  outputs: string[];
  detailFields: Array<{ field: string; description: string }>;
  focus: AnalysisType;
  categories: Category[];
}

/**
 * @description قائمة تعريفية بالوحدات التي تُستخدم لتوليد ملفات التوثيق.
 */
export const MODULE_DOCUMENTATION: ModuleDocumentationEntry[] = [
  {
    taskType: TaskType.CHARACTER_DEEP_ANALYZER,
    displayName: "وحدة محلل الشخصيات العميق",
    description:
      "تحلل الوحدة دوافع الشخصيات وتحولاتها وتفاعل العلاقات فيما بينها.",
    inputs: [
      "النص الكامل للسيناريو أو النسخة الحالية منه.",
      "ملاحظات الكاتب حول الأهداف الدرامية لكل شخصية رئيسة.",
    ],
    outputs: [
      "خرائط التطور العاطفي لكل شخصية محورية.",
      "مؤشرات التماسك بين الدوافع والأفعال عبر الفصول.",
    ],
    detailFields: [
      {
        field: "details[].personas[]",
        description: "تعريف بالشخصيات، أهدافها، ونسبة ظهورها على الشاشة.",
      },
      {
        field: "details[].relationships[]",
        description: "تحليل ديناميكيات العلاقات وقوتها الدرامية.",
      },
      {
        field: "details[].conflicts[]",
        description: "تحديد مصادر الصراع المرتبطة بكل شخصية وتحولاتها.",
      },
    ],
    focus: AnalysisType.CHARACTER,
    categories: [Category.CHARACTER],
  },
  {
    taskType: TaskType.DIALOGUE_ADVANCED_ANALYZER,
    displayName: "وحدة محلل الحوار المتطور",
    description:
      "تقيّم الوحدة جودة الحوار، مستويات التلميح، وإيقاع التبادل بين الشخصيات.",
    inputs: [
      "نص الحوار بالصيغة النهائية أو نسخة قابلة للتحرير.",
      "تسجيلات أو قراءات سابقة للجلسات الصوتية إن وجدت.",
    ],
    outputs: [
      "قياسات التوازن بين الحوار الصريح والضمني.",
      "مؤشرات الإيقاع الصوتي وزمن المشاهد الحوارية.",
    ],
    detailFields: [
      {
        field: "details[].insights[]",
        description: "استنتاجات حول فاعلية السطور ودقة التلميح تحت السطور.",
      },
      {
        field: "details[].metrics[]",
        description: "مقاييس كمية لعدد السطور وطول المشهد وتأثيره العاطفي.",
      },
    ],
    focus: AnalysisType.DIALOGUE,
    categories: [Category.DIALOGUE],
  },
  {
    taskType: TaskType.VISUAL_CINEMATIC_ANALYZER,
    displayName: "وحدة محلل اللغة البصرية والسينمائية",
    description:
      "تدقق الوحدة في الرموز البصرية، الإضاءة، وحركة الكاميرا لضمان تماسك الصورة الدرامية.",
    inputs: [
      "لوحات ستوري بورد أو أوصاف المشاهد البصرية التفصيلية.",
      "مراجع جمالية أو قائمة بالعدسات والمعدات المتوقعة.",
    ],
    outputs: [
      "تحليل لاستخدام الألوان والظل لتعزيز الثيمة.",
      "توصيات لتحسين توزيع الإضاءة والزوايا الحاسمة.",
    ],
    detailFields: [
      {
        field: "details[].beats[]",
        description: "الضربات البصرية الرئيسية وتأثيرها على المشاهد.",
      },
      {
        field: "details[].insights[]",
        description: "قراءة متعمقة للرموز البصرية ودورها في السرد.",
      },
    ],
    focus: AnalysisType.VISUAL,
    categories: [Category.VISUAL_STYLE],
  },
  {
    taskType: TaskType.THEMES_MESSAGES_ANALYZER,
    displayName: "وحدة محلل الموضوعات والرسائل",
    description:
      "ترصد الوحدة الثيمات الرئيسة وتتابع الرموز المتكررة ومدى دعمها للرسالة النهائية.",
    inputs: [
      "ملخصات المشاهد أو خريطة الموضوعات حسب النسخ السابقة.",
      "قائمة بالرموز أو العناصر المراد إبرازها.",
    ],
    outputs: [
      "تحليل لمدى تكرار الثيمات في كل فصل.",
      "توصيات لتعزيز الرمزية في الخاتمة أو الذروة.",
    ],
    detailFields: [
      {
        field: "details[].insights[]",
        description: "تفسير كل رمز أو ثيمة وارتباطه بالبنية الدرامية.",
      },
      {
        field: "details[].metrics[]",
        description: "مؤشرات كمية لانتشار الثيمة عبر المشاهد.",
      },
    ],
    focus: AnalysisType.THEME,
    categories: [Category.THEMES],
  },
  {
    taskType: TaskType.CULTURAL_HISTORICAL_ANALYZER,
    displayName: "وحدة محلل السياق الثقافي والتاريخي",
    description:
      "تضمن الوحدة دقة التمثيل الثقافي واللغوي ومطابقة السياق التاريخي للبيئة المختارة.",
    inputs: [
      "السيناريو الكامل مع الهوامش الثقافية المرفقة.",
      "قائمة بالمراجع التاريخية أو الاستشاريين المعتمدين.",
    ],
    outputs: [
      "مناطق حساسة تحتاج إلى تدقيق ثقافي إضافي.",
      "اقتراحات للتوطين اللغوي ومراعاة الجمهور المحلي.",
    ],
    detailFields: [
      {
        field: "details[].insights[]",
        description: "الملاحظات المتعلقة بالأصالة اللغوية والسياق الاجتماعي.",
      },
      {
        field: "details[].insights[].recommendedActions",
        description: "إجراءات التحقق الميداني أو الاستشاري اللازمة.",
      },
    ],
    focus: AnalysisType.CULTURAL,
    categories: [Category.CULTURAL_CONTEXT],
  },
  {
    taskType: TaskType.PRODUCIBILITY_ANALYZER,
    displayName: "وحدة محلل القابلية للإنتاج",
    description:
      "تقيّم الوحدة الجوانب اللوجستية والميزانية وتقترح حلولاً لتقليل التكاليف.",
    inputs: [
      "تقارير الميزانية الأولية وخطط الإنتاج.",
      "جداول المواقع وعدد أيام التصوير المتوقعة.",
    ],
    outputs: [
      "تقديرات التوفير المحتمل بناءً على إعادة الهيكلة.",
      "خارطة أولويات للتعديلات الإنتاجية الحرجة.",
    ],
    detailFields: [
      {
        field: "details[].insights[]",
        description: "تحليل مفصل للتكاليف المرتفعة ومصادر الضغط اللوجستي.",
      },
      {
        field: "details[].metrics[]",
        description: "مقاييس مقارنة بين الخطة الحالية والخيارات البديلة.",
      },
    ],
    focus: AnalysisType.PRODUCTION,
    categories: [Category.PRODUCTION],
  },
  {
    taskType: TaskType.TARGET_AUDIENCE_ANALYZER,
    displayName: "وحدة محلل الجمهور المستهدف",
    description:
      "تربط الوحدة توقعات الجمهور بسير الحبكة وتقترح تعديلات لتعزيز الجاذبية السوقية.",
    inputs: [
      "أبحاث الجمهور أو البيانات المنصية المتاحة.",
      "ملخصات التسويق السابقة أو رؤى المنصات الرقمية.",
    ],
    outputs: [
      "مؤشرات التوافق مع سلوك المشاهد المستهدف.",
      "توصيات زمنية لرفع معدل الاحتفاظ خلال الفصل الأول.",
    ],
    detailFields: [
      {
        field: "details[].insights[]",
        description: "تحليل توقعات الجمهور وتوزيع الاهتمام عبر المشاهد.",
      },
      {
        field: "details[].insights[].recommendedActions",
        description: "خطوات تسويقية أو سردية لضمان الارتباط العاطفي.",
      },
    ],
    focus: AnalysisType.AUDIENCE,
    categories: [Category.MARKET_POSITIONING],
  },
  {
    taskType: TaskType.LITERARY_QUALITY_ANALYZER,
    displayName: "وحدة محلل الجودة الأدبية",
    description:
      "ترصد الوحدة انسجام الصوت السردي والبناء الأدبي وتكشف مناطق الترهل أو التكرار.",
    inputs: [
      "نص السيناريو المصحوب بتعليقات التحرير السابقة.",
      "ملاحظات الكاتب حول الأسلوب الأدبي المفضل.",
    ],
    outputs: [
      "تقييم تفصيلي للإيقاع داخل كل فصل.",
      "توصيات لتحسين الصوت السردي وضبط التكرار.",
    ],
    detailFields: [
      {
        field: "details[].insights[]",
        description: "تحليل نوعي للجمل الطويلة، الاستعارات، وفاعليتها.",
      },
      {
        field: "details[].metrics[]",
        description: "مؤشرات كمية لعدد الصفحات لكل فصل ومعدل التقدم الدرامي.",
      },
    ],
    focus: AnalysisType.STRUCTURE,
    categories: [Category.STORY_STRUCTURE],
  },
  {
    taskType: TaskType.RECOMMENDATIONS_GENERATOR,
    displayName: "وحدة مولد التوصيات والتحسينات",
    description:
      "تجمع الوحدة خلاصات الوحدات الأخرى وتبني خارطة طريق تنفيذية متكاملة.",
    inputs: [
      "مخرجات الوحدات المتقدمة الأخرى بصيغتها النهائية.",
      "أولويات فريق التطوير والقيود الزمنية الحالية.",
    ],
    outputs: [
      "مصفوفة أولويات تربط التأثير الدرامي بالجدوى الإنتاجية.",
      "قائمة إجراءات محددة بزمن التنفيذ والمسؤوليات.",
    ],
    detailFields: [
      {
        field: "details[].insights[]",
        description: "تجميع الاستنتاجات الرئيسة من الوحدات الفرعية مع تصنيفها.",
      },
      {
        field: "details[].metrics[]",
        description: "نقاط مقارنة بين العائد الإبداعي والجهد المطلوب.",
      },
    ],
    focus: AnalysisType.RECOMMENDATION,
    categories: [Category.STORY_STRUCTURE, Category.PRODUCTION],
  },
  {
    taskType: TaskType.VOICE_INTERACTION_ANALYZER,
    displayName: "وحدة محلل التفاعل الصوتي",
    description:
      "تتبع الوحدة التغييرات في الأداء الصوتي وتقدم توصيات لضبط الإيقاع والتنغيم.",
    inputs: [
      "تسجيلات أولية أو جلسات قراءة الطاولة.",
      "ملاحظات المخرج الصوتي حول الأداء المتوقع.",
    ],
    outputs: [
      "مخططات التباين في التنغيم ومستويات الشدة.",
      "اقتراحات لتحسين الاتساق بين الجلسات التسجيلية.",
    ],
    detailFields: [
      {
        field: "details[].insights[]",
        description: "تحليل لكل شخصية حول وضوح الصوت وتعبيره العاطفي.",
      },
      {
        field: "details[].insights[].recommendedActions",
        description: "خطوات تدريبية أو تعليمات أداء للتسجيل القادم.",
      },
    ],
    focus: AnalysisType.VOICE,
    categories: [Category.SOUND_DESIGN],
  },
  {
    taskType: TaskType.FORESHADOWING_DETECTOR,
    displayName: "وحدة كاشف التلميحات المبكرة",
    description:
      "ترسم الوحدة خريطة للتلميحات البصرية والسمعية وتضمن ظهورها قبل الذروة بشكل مدروس.",
    inputs: [
      "قائمة المشاهد مع الإشارات المبكرة المعروفة.",
      "ملاحظات فريق الكتابة حول الغموض المطلوب.",
    ],
    outputs: [
      "جدول يوضح موضع كل تلميح وتأثيره المتوقع.",
      "خطوات لتعزيز أو إعادة توزيع التلميحات قبل المشهد الحاسم.",
    ],
    detailFields: [
      {
        field: "details[].beats[]",
        description: "تحديد الضربات التي يجب أن يتواجد فيها التلميح.",
      },
      {
        field: "details[].insights[]",
        description: "شرح العلاقة بين التلميح والذروة الدرامية.",
      },
    ],
    focus: AnalysisType.FORESHADOWING,
    categories: [Category.STORY_STRUCTURE],
  },
];
