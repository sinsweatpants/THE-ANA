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
        field: "details[].character_deep_analyzer.arcs",
        description: "مسارات التحول العاطفي لكل شخصية محورية.",
      },
      {
        field: "details[].character_deep_analyzer.screen_time_map",
        description: "توزيع زمن الشاشة لضمان عدالة التركيز.",
      },
      {
        field: "details[].character_deep_analyzer.consistency_flags",
        description: "تنبيهات الاتساق السلوكي التي تتطلب مراجعة.",
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
        field: "details[].dialogue_advanced_analyzer.power_dynamics.segments",
        description: "مقاطع تغير السيطرة الكلامية داخل المشهد.",
      },
      {
        field: "details[].dialogue_advanced_analyzer.interruptions",
        description: "تحليل المقاطعات وتوزيعها على الشخصيات.",
      },
      {
        field: "details[].dialogue_advanced_analyzer.exposition_balance",
        description: "قياس التوازن بين الحوار التفسيري والتلميحي.",
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
        field: "details[].visual_cinematic_analyzer.shot_suggestions",
        description: "اقتراحات العدسات وتكوين اللقطة الداعمة للثيمة.",
      },
      {
        field: "details[].visual_cinematic_analyzer.camera_moves",
        description: "حركة الكاميرا الموصى بها وهدفها الدرامي.",
      },
      {
        field: "details[].visual_cinematic_analyzer.action_sequence_quality",
        description: "تقييم مشاهد الحركة وما يلزم لتحسينها.",
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
        field: "details[].themes_messages_analyzer.explicit_messages",
        description: "الرسائل المباشرة التي يصرح بها العمل.",
      },
      {
        field: "details[].themes_messages_analyzer.implicit_messages",
        description: "الرسائل الضمنية التي تُستشف من الرموز والسياق.",
      },
      {
        field: "details[].themes_messages_analyzer.risk_of_misreading",
        description: "نقاط الخطر في تفسير الثيمة وكيفية توضيحها.",
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
        field: "details[].cultural_historical_analyzer.missteps",
        description: "مناطق الخطأ أو الحساسية الثقافية التي تستوجب التدخل.",
      },
      {
        field: "details[].cultural_historical_analyzer.localization_guidelines",
        description: "إرشادات التوطين لكل سوق جغرافي مستهدف.",
      },
      {
        field: "details[].cultural_historical_analyzer.sources",
        description: "المراجع والاستشارات التي دعمت التحليل.",
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
        field: "details[].producibility_analyzer.risk_register",
        description: "سجل المخاطر الإنتاجية ونسب احتمالها.",
      },
      {
        field: "details[].producibility_analyzer.schedule_buckets",
        description: "تقسيم الجدول بحسب الموقع أو التوزيع التمثيلي.",
      },
      {
        field: "details[].producibility_analyzer.logistics_notes",
        description: "ملاحظات لوجستية يجب التخطيط لها مسبقاً.",
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
        field: "details[].target_audience_analyzer.rating_guidance",
        description: "إرشادات التصنيف العمري والملاحظات المصاحبة لكل سوق.",
      },
      {
        field: "details[].target_audience_analyzer.triggers_flags",
        description: "المحفزات الحساسة لكل شريحة جمهور وكيفية التعامل معها.",
      },
      {
        field: "details[].target_audience_analyzer.demographic_fit",
        description: "قياس التوافق مع الفئات الديموغرافية المستهدفة.",
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
        field: "details[].literary_quality_analyzer.metaphor_map",
        description: "خريطة الاستعارات والرموز المتكررة داخل النص.",
      },
      {
        field: "details[].literary_quality_analyzer.rhythm_profile",
        description: "تحليل الإيقاع السردي وتنوع الجمل.",
      },
      {
        field: "details[].literary_quality_analyzer.originality_flags",
        description: "تنبيهات الأصالة التي تشير إلى الحاجة لإعادة الصياغة.",
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
        field: "details[].recommendations_generator.prioritized_actions",
        description: "الإجراءات ذات التأثير العالي مرتبة بحسب الأولوية.",
      },
      {
        field: "details[].recommendations_generator.roadmap",
        description: "خارطة الطريق التنفيذية الموزعة على مراحل.",
      },
      {
        field: "details[].recommendations_generator.success_metrics",
        description: "معايير القياس التي تضمن متابعة أثر التعديلات.",
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
        field: "details[].voice_interaction_analyzer.voiceover_usage",
        description: "كيفية توزيع الراوي أو التعليق الصوتي عبر المشاهد.",
      },
      {
        field: "details[].voice_interaction_analyzer.clarity_issues",
        description: "نقاط الغموض أو التداخلات الصوتية التي يجب علاجها.",
      },
      {
        field: "details[].voice_interaction_analyzer.mix_guidelines",
        description: "إرشادات المكساج لضبط مستويات الصوت والمؤثرات.",
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
        field: "details[].foreshadowing_detector.clues",
        description: "قائمة التلميحات المبكرة ودرجة خفائها وربطها بالمكافأة.",
      },
      {
        field: "details[].foreshadowing_detector.missed_payoffs",
        description: "التلميحات التي لم تحقق أثرها المقصود مع مقترحات الإكمال.",
      },
    ],
    focus: AnalysisType.FORESHADOWING,
    categories: [Category.STORY_STRUCTURE],
  },
];
