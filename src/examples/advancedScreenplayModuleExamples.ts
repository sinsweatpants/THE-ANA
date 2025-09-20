import { TaskType } from "../../types";
import {
  AnalysisType,
  Category,
  ExpositionMethod,
  Priority,
  CharacterType,
  BeatType,
  ConflictType,
  AntagonistType,
  RelationshipType,
  WorkFormat,
  Genre,
  Audience,
  DevelopmentStage,
} from "../types/common";
import type {
  AdvancedScreenplayMetadata,
  AdvancedScreenplayModuleResult,
  ModuleDetailSection,
  QualityMetrics,
  Recommendation,
  NextSteps,
} from "../types/advanced";

/**
 * @description مفاتيح الوحدات المدعومة بأمثلة كاملة.
 */
export type SupportedModule =
  | TaskType.CHARACTER_DEEP_ANALYZER
  | TaskType.DIALOGUE_ADVANCED_ANALYZER
  | TaskType.VISUAL_CINEMATIC_ANALYZER
  | TaskType.THEMES_MESSAGES_ANALYZER
  | TaskType.CULTURAL_HISTORICAL_ANALYZER
  | TaskType.PRODUCIBILITY_ANALYZER
  | TaskType.TARGET_AUDIENCE_ANALYZER
  | TaskType.LITERARY_QUALITY_ANALYZER
  | TaskType.RECOMMENDATIONS_GENERATOR
  | TaskType.VOICE_INTERACTION_ANALYZER
  | TaskType.FORESHADOWING_DETECTOR;

const baseMetadata: AdvancedScreenplayMetadata = {
  workId: "wrk_arena_001",
  workTitle: "صدى المرايا",
  workFormat: WorkFormat.FEATURE_FILM,
  genres: [Genre.DRAMA, Genre.THRILLER],
  primaryAudience: Audience.ADULTS,
  secondaryAudiences: [Audience.YOUNG_ADULTS],
  developmentStage: DevelopmentStage.DRAFT_TWO,
  priority: Priority.HIGH,
  categories: [Category.STORY_STRUCTURE, Category.CHARACTER],
  language: "ar",
  locale: "ar-EG",
  analyst: "AI Script Analyst",
  collaborators: ["Senior Story Editor"],
  createdAt: "2025-01-12T10:00:00Z",
  updatedAt: "2025-01-12T12:15:00Z",
  analysisWindow: {
    start: "2025-01-10T08:00:00Z",
    end: "2025-01-12T08:00:00Z",
  },
  wordCount: 19500,
  runtimeMinutes: 118,
  logline: "محقق مثالي يواجه شبكة فساد تكشف له ماضي عائلته المظلم.",
  referenceWorks: ["Heat (1995)", "Prisoners (2013)"],
  productionCompany: "Visionary Films",
  notes: ["تم توفير نسخة PDF محدّثة."],
};

const createMetadata = (overrides: Partial<AdvancedScreenplayMetadata>): AdvancedScreenplayMetadata => ({
  ...baseMetadata,
  ...overrides,
  categories: overrides.categories ?? baseMetadata.categories,
  secondaryAudiences: overrides.secondaryAudiences ?? baseMetadata.secondaryAudiences,
  referenceWorks: overrides.referenceWorks ?? baseMetadata.referenceWorks,
  notes: overrides.notes ?? baseMetadata.notes,
});

const baseQualityMetrics: QualityMetrics = {
  narrativeCohesion: 82,
  characterDepth: 84,
  dialogueAuthenticity: 79,
  pacingControl: 77,
  thematicResonance: 81,
  originality: 76,
  productionFeasibility: 73,
  audienceAlignment: 80,
  localizationReadiness: 74,
  confidenceInterval: {
    lowerBound: 70,
    upperBound: 88,
  },
  qualitativeNotes: [
    "تحافظ الحبكة على وضوح عام مع بعض التذبذب في الانتقال بين الفصول.",
  ],
};

const createQualityMetrics = (overrides?: Partial<QualityMetrics>): QualityMetrics => ({
  narrativeCohesion: overrides?.narrativeCohesion ?? baseQualityMetrics.narrativeCohesion,
  characterDepth: overrides?.characterDepth ?? baseQualityMetrics.characterDepth,
  dialogueAuthenticity:
    overrides?.dialogueAuthenticity ?? baseQualityMetrics.dialogueAuthenticity,
  pacingControl: overrides?.pacingControl ?? baseQualityMetrics.pacingControl,
  thematicResonance: overrides?.thematicResonance ?? baseQualityMetrics.thematicResonance,
  originality: overrides?.originality ?? baseQualityMetrics.originality,
  productionFeasibility:
    overrides?.productionFeasibility ?? baseQualityMetrics.productionFeasibility,
  audienceAlignment: overrides?.audienceAlignment ?? baseQualityMetrics.audienceAlignment,
  localizationReadiness:
    overrides?.localizationReadiness ?? baseQualityMetrics.localizationReadiness,
  confidenceInterval: {
    lowerBound:
      overrides?.confidenceInterval?.lowerBound ??
      baseQualityMetrics.confidenceInterval.lowerBound,
    upperBound:
      overrides?.confidenceInterval?.upperBound ??
      baseQualityMetrics.confidenceInterval.upperBound,
  },
  qualitativeNotes:
    overrides?.qualitativeNotes ?? baseQualityMetrics.qualitativeNotes,
});

const createNextSteps = (
  moduleKey: SupportedModule,
  focus: AnalysisType,
  overrides?: Partial<NextSteps>,
): NextSteps => {
  const base: NextSteps = {
    immediate: [
      {
        id: `${moduleKey}_action_1`,
        description: "تنفيذ مراجعة مركزة بناءً على أهم استنتاجات الوحدة.",
        owner: "كاتب السيناريو الرئيسي",
        dueDate: "2025-01-20T09:00:00Z",
        priority: Priority.HIGH,
        status: "planned",
        successCriteria: [
          "توثيق النتائج في لوحة المتابعة المشتركة.",
          "مشاركة التحديث مع فريق التطوير قبل الاجتماع الأسبوعي.",
        ],
      },
    ],
    upcoming: [
      {
        id: `${moduleKey}_action_2`,
        description: "ورشة داخلية لمناقشة التوصيات وتحديد المخاطر المحتملة.",
        owner: "المنتج المنفذ",
        dueDate: "2025-01-25T11:00:00Z",
        priority: Priority.MEDIUM,
        status: "planned",
        successCriteria: [
          "عقد جلسة تفاعلية لمدة ساعتين.",
          "تحديد ثلاث قرارات قابلة للتنفيذ للنسخة التالية.",
        ],
      },
    ],
    reviewSchedule: [
      {
        milestone: "مراجعة شاملة للوحدة",
        date: "2025-02-05T10:00:00Z",
        focus,
        notes: "تقييم مدى تطبيق التعديلات خلال النسخة القادمة.",
      },
    ],
    communicationPlan: {
      stakeholders: [
        {
          name: "مدير التطوير",
          role: "رئيس غرفة الكتابة",
          channel: "Slack",
          cadence: "مرتين أسبوعياً",
        },
        {
          name: "فريق الإنتاج",
          role: "Production Leads",
          channel: "Email",
          cadence: "أسبوعي",
        },
      ],
      notes: "يرجى مشاركة التحديثات قبل 24 ساعة من كل اجتماع مراجعة.",
    },
  };

  return {
    ...base,
    ...overrides,
    immediate: overrides?.immediate ?? base.immediate,
    upcoming: overrides?.upcoming ?? base.upcoming,
    reviewSchedule: overrides?.reviewSchedule ?? base.reviewSchedule,
    communicationPlan: {
      ...base.communicationPlan,
      ...overrides?.communicationPlan,
      stakeholders:
        overrides?.communicationPlan?.stakeholders ??
        base.communicationPlan.stakeholders,
    },
  };
};

const createCharacterDetail = (): ModuleDetailSection => ({
  id: "character_arc_protagonist",
  title: "قوس سامر الدرامي",
  focus: AnalysisType.CHARACTER,
  expositionMethod: ExpositionMethod.DIALOGUE,
  summary: "يتحول سامر من محقق مثالي إلى شخصية تقبل الرمادية الأخلاقية.",
  personas: [
    {
      name: "سامر",
      type: CharacterType.PROTAGONIST,
      goals: ["تحقيق العدالة لأخيه", "كشف شبكة الفساد"],
      transformation: "يتعلم أن الحقيقة قد تتطلب تسويات مؤلمة.",
      screenTimeShare: 42,
    },
  ],
  insights: [
    {
      id: "insight_motivation",
      headline: "الدافع الجوهري يتضح متأخراً",
      analysisType: AnalysisType.CHARACTER,
      summary: "لا يظهر مقتل الأخ كمحفز رئيسي إلا في منتصف الفصل الأول.",
      impact: "يقل تعاطف الجمهور خلال المشاهد الافتتاحية.",
      confidence: 0.85,
      supportingEvidence: [
        {
          referenceId: "scene_12",
          source: "screenplay.pdf",
          excerpt: "سامر: لن أسمح بأن تضيع قضية أخي مجدداً.",
          location: "صفحة 34",
          confidence: 0.8,
        },
      ],
      recommendedActions: [
        "إدراج مشهد فلاش باك مبكر يوضح فقدان الأخ.",
        "تعزيز الحوار الأول مع ليلى لشرح الدافع فوراً.",
      ],
    },
  ],
  beats: [
    {
      type: BeatType.MIDPOINT,
      description: "المواجهة مع الضابط الفاسد تكسر ثقة سامر بالمؤسسة.",
      pages: { start: 65, end: 70 },
      intensity: 78,
    },
  ],
  conflicts: [
    {
      type: ConflictType.INTERPERSONAL,
      antagonistType: AntagonistType.INSTITUTIONAL,
      status: "escalating",
      summary: "سامر يصطدم مع رؤسائه بعد رفضهم فتح التحقيق القديم.",
      stakes: "خسارة القضية وتعريض أسرته للخطر.",
    },
  ],
  relationships: [
    {
      characters: ["سامر", "ليلى"],
      relationshipType: RelationshipType.ROMANTIC,
      tone: "متوتر بحذر",
      strength: 64,
      notes: "الحوار في الصفحة 40 يشير إلى عدم الثقة المتبادلة.",
    },
  ],
  metrics: [
    {
      name: "وضوح الدافع",
      score: 62,
      weight: 0.3,
      justification: "الدافع يظهر في الفصل الثاني فقط.",
    },
  ],
  character_deep_analyzer: {
    arcs: [
      {
        character: "سامر",
        trajectory: "من مثالي صارم إلى شخص يسمح بالحلول الوسط.",
        status: "growing",
      },
      {
        character: "ليلى",
        trajectory: "من حليف متردد إلى شريك كامل في التحقيق.",
        status: "growing",
      },
    ],
    wounds: [
      {
        character: "سامر",
        wound: "فقدان الأخ في حادث ملفق.",
        manifestation: "حاجة قسرية للعدالة المطلقة.",
      },
    ],
    lies: [
      {
        character: "سامر",
        lie: "العدالة لا تتحقق إلا بإتباع القواعد دائماً.",
        truth: "الحقيقة أحياناً تتطلب تجاوز الإجرائية المعتادة.",
      },
    ],
    transformations: [
      {
        character: "سامر",
        from: "محقق مثالي",
        to: "محقق واقعي قادر على عقد تحالفات رمادية",
        catalyst: "اكتشاف تورط رئيسه المباشر في التغطية.",
      },
    ],
    screen_time_map: {
      سامر: 42,
      ليلى: 26,
      "الضابط الفاسد": 18,
    },
    consistency_flags: [
      {
        character: "سامر",
        description: "يتجاهل القواعد فجأة في المشهد 52 دون تمهيد كافٍ.",
        severity: "medium",
      },
    ],
  },
});

const createDialogueDetail = (): ModuleDetailSection => ({
  id: "dialogue_subtext",
  title: "تحليل التلميح تحت السطور",
  focus: AnalysisType.DIALOGUE,
  expositionMethod: ExpositionMethod.SUBTEXT,
  summary: "يتلاعب السيناريو بالمعاني الضمنية لإظهار الصراع الخفي.",
  insights: [
    {
      id: "dialogue_conflict",
      headline: "المزاح الحاد يكشف العداء",
      analysisType: AnalysisType.DIALOGUE,
      summary: "المشاجرة بين سامر ورفيقه تستخدم الاستعارات بدلاً من المواجهة المباشرة.",
      impact: "يحافظ على التوتر لكنه يربك المتابع في بعض اللحظات.",
      confidence: 0.78,
      supportingEvidence: [
        {
          referenceId: "scene_28",
          source: "transcript.txt",
          excerpt: "رفيق سامر: أحياناً يجب أن تحرق المصابيح لتكشف الحشرات.",
          location: "صفحة 58",
          confidence: 0.72,
        },
      ],
      recommendedActions: ["إضافة رد لفظي مباشر يؤكد الخلاف."],
    },
  ],
  metrics: [
    {
      name: "إيقاع الحوار",
      score: 74,
      weight: 0.25,
      justification: "توجد مقاطع تتجاوز ثلاث صفحات من دون تبديل في المكان.",
    },
  ],
  dialogue_advanced_analyzer: {
    naturalness: 0.78,
    distinctiveness: 0.74,
    subtext: 0.81,
    power_dynamics: {
      segments: [
        {
          scene: "28",
          dominant_character: "رفيق سامر",
          shift: "يتراجع نفوذ سامر بعد تهديد المذكرة.",
          notes: "يستعيد سامر السيطرة بذكره للأدلة في الصفحة 60.",
        },
      ],
    },
    interruptions: {
      counts_by_char: {
        سامر: 6,
        "رفيق سامر": 9,
        ليلى: 2,
      },
      total: 17,
    },
    exposition_balance: 0.62,
  },
});

const createVisualDetail = (): ModuleDetailSection => ({
  id: "visual_palette",
  title: "لوحة الألوان واللغة البصرية",
  focus: AnalysisType.VISUAL,
  expositionMethod: ExpositionMethod.VISUAL_SYMBOLISM,
  summary: "الألوان الباردة تعكس العزلة بينما تكشف الإضاءات الحمراء عن التهديد.",
  insights: [
    {
      id: "visual_contrast",
      headline: "تناقض لوني فعال",
      analysisType: AnalysisType.VISUAL,
      summary: "تتغير الإضاءة إلى ظلال حمراء كلما اقتربت الحقيقة من الانكشاف.",
      impact: "يعزز الإحساس بالخطر وينقل التوتر للجمهور.",
      confidence: 0.83,
      supportingEvidence: [
        {
          referenceId: "shot_3A",
          source: "storyboard.png",
          excerpt: "إضاءة نيون حمراء تتسرب من نوافذ غرفة التحقيق.",
          location: "مشهد 45",
          confidence: 0.88,
        },
      ],
    },
  ],
  beats: [
    {
      type: BeatType.TURNING_POINT,
      description: "الكشف عن تسجيل المراقبة في غرفة مظلمة ذات إضاءة حمراء.",
      pages: { start: 78, end: 80 },
      intensity: 82,
    },
  ],
  visual_cinematic_analyzer: {
    shot_suggestions: [
      {
        scene: "45",
        suggestion: "استخدام عدسة 35مم بفتحة واسعة لعزل سامر عن الخلفية.",
        lens: "35mm",
      },
    ],
    camera_moves: [
      {
        scene: "60",
        move: "تراكينغ خلفي",
        purpose: "إبراز تضييق الخناق المؤسسي على سامر.",
      },
    ],
    lighting_notes: [
      {
        scene: "80",
        note: "إضافة إضاءة عملية دافئة لتأكيد المصالحة العائلية.",
      },
    ],
    action_sequence_quality: [
      {
        sequence: "مطاردة النفق",
        score: 88,
        notes: "التقطيع سريع لكن يحتاج إلى لقطة علوية لإيضاح الجغرافيا.",
      },
    ],
  },
});

const createThemeDetail = (): ModuleDetailSection => ({
  id: "theme_corruption",
  title: "ثيمة الفساد مقابل العدالة",
  focus: AnalysisType.THEME,
  expositionMethod: ExpositionMethod.ACTION,
  summary: "الصراع بين العدالة الشخصية والعدالة المؤسسية يوجّه السرد.",
  insights: [
    {
      id: "theme_mirror",
      headline: "المرآة كرمز للتشظي",
      analysisType: AnalysisType.THEME,
      summary: "تكرار مشاهد المرآة يعكس ازدواجية سامر وإخفاء الحقيقة.",
      impact: "يوحد اللغة البصرية مع الثيمة المركزية.",
      confidence: 0.9,
      supportingEvidence: [
        {
          referenceId: "scene_07",
          source: "screenplay.pdf",
          excerpt: "سامر ينظف مرآة متكسرة قبل مغادرته المنزل.",
          location: "صفحة 12",
          confidence: 0.86,
        },
      ],
      recommendedActions: [
        "تعزيز الرمز في مشهد النهاية بإعادة صورة المرآة.",
      ],
    },
  ],
  themes_messages_analyzer: {
    explicit_messages: [
      "العدالة تتطلب مواجهة الفساد مهما كان الثمن.",
    ],
    implicit_messages: [
      "الولاء المؤسسي قد يحجب رؤية الحقيقة.",
      "العدالة الشخصية تهدد الاستقرار العائلي إذا غابت المصارحة.",
    ],
    alignment_with_themes:
      "المشاهد التي تتضمن المرآة والألوان الحمراء تدعم الرسالة حول كشف الحقيقة.",
    risk_of_misreading:
      "قد يفسر بعض الجمهور قبول سامر للصفقة النهائية كتطبيع مع الفساد إن لم يتم إبراز دوافعه الأخلاقية.",
  },
});

const createCulturalDetail = (): ModuleDetailSection => ({
  id: "cultural_context",
  title: "السياق الاجتماعي للمشهد الحضري",
  focus: AnalysisType.CULTURAL,
  expositionMethod: ExpositionMethod.TEXT_ON_SCREEN,
  summary: "يعكس السيناريو تحولات القاهرة المعاصرة بين الريادة التقنية والفوارق الاجتماعية.",
  insights: [
    {
      id: "cultural_authenticity",
      headline: "المفردات المحلية تتطلب مراجعة",
      analysisType: AnalysisType.CULTURAL,
      summary: "بعض العبارات باللهجة السورية تظهر في مشهد تدور أحداثه في القاهرة.",
      impact: "قد يؤثر على مصداقية العمل لدى الجمهور المحلي.",
      confidence: 0.76,
      supportingEvidence: [
        {
          referenceId: "scene_19",
          source: "script_notes.docx",
          excerpt: "الشخصية تقول: \"شو بدك مني؟\"",
          location: "صفحة 41",
          confidence: 0.7,
        },
      ],
      recommendedActions: ["استشارة مدقق لغوي مصري قبل القفل النهائي."],
    },
  ],
  cultural_historical_analyzer: {
    authenticity_score: 0.74,
    missteps: [
      {
        id: "dialect_shift",
        description: "دخول عبارة شامية في حوار يدور بالقاهرة.",
        severity: "medium",
        recommended_fix: "مراجعة الحوار مع مدقق لهجة مصري واستبدال العبارة بمكافئ محلي.",
      },
    ],
    sources: [
      {
        type: "مقابلة ميدانية",
        reference: "تقرير استشاري ثقافي - يناير 2025",
        notes: "شمل مقابلات مع سكان محليين من حي الدقي.",
      },
    ],
    localization_guidelines: [
      {
        region: "MENA",
        notes: "تضمين تحذير محتوى بشأن الفساد المؤسسي لتجنب الرقابة في بعض الدول.",
      },
    ],
  },
});

const createProductionDetail = (): ModuleDetailSection => ({
  id: "production_scope",
  title: "متطلبات الإنتاج العملية",
  focus: AnalysisType.PRODUCTION,
  expositionMethod: ExpositionMethod.ACTION,
  summary: "التسلسل الثالث يحتاج إلى إعادة هيكلة لتقليل المواقع الخارجية المكلفة.",
  insights: [
    {
      id: "production_budget",
      headline: "تكلفة المشهد المفتوح مرتفعة",
      analysisType: AnalysisType.PRODUCTION,
      summary: "المطاردة في السوق تحتاج إلى 200 كومبارس و12 موقعاً مختلفاً.",
      impact: "يرفع الميزانية إلى 180 ألف دولار فوق المخصص.",
      confidence: 0.82,
      supportingEvidence: [
        {
          referenceId: "budget_sheet_v3",
          source: "budget.xlsx",
          excerpt: "تكلفة العنصر البشري للمشهد تصل إلى 95 ألف دولار.",
          location: "تبويب Sequence 3",
          confidence: 0.78,
        },
      ],
      recommendedActions: [
        "دمج المطاردة في موقعين رئيسيين بدل ستة.",
        "استبدال بعض الإضافات بتأثيرات رقمية مدروسة.",
      ],
    },
  ],
  producibility_analyzer: {
    budget_tier: "medium",
    schedule_buckets: {
      by_location: [
        {
          label: "القاهرة - وسط المدينة",
          items: ["مبنى النيابة", "السوق الشعبي"],
        },
      ],
      by_cast: [
        {
          label: "الأبطال الرئيسيون",
          items: ["سامر", "ليلى"],
        },
      ],
    },
    risk_register: [
      {
        id: "weather_delay",
        prob: 0.35,
        impact: "قد يؤخر التصوير الخارجي يومين",
        mitigation: "توفير موقع داخلي بديل والتنسيق مع فريق الطقس.",
      },
    ],
    logistics_notes: [
      "يتطلب مشهد المطاردة إغلاق شارع لمدة 6 ساعات.",
      "يوصى بحجز وسائل نقل إضافية للفريق الليلي.",
    ],
  },
});

const createAudienceDetail = (): ModuleDetailSection => ({
  id: "audience_alignment",
  title: "توافق العمل مع الجمهور المستهدف",
  focus: AnalysisType.AUDIENCE,
  expositionMethod: ExpositionMethod.VOICE_OVER,
  summary: "يعكس السيناريو اهتمامات الجمهور العربي الشاب بقضايا العدالة المدنية.",
  insights: [
    {
      id: "audience_expectation",
      headline: "الرتم الهادئ قد يحد من جذب المنصات الرقمية",
      analysisType: AnalysisType.AUDIENCE,
      summary: "الفصل الأول يعتمد على التحقيق البطيء لمدة 25 دقيقة دون حدث صادم.",
      impact: "يزيد خطر فقدان المشاهدين على المنصات القصيرة.",
      confidence: 0.81,
      supportingEvidence: [
        {
          referenceId: "benchmark_report",
          source: "audience_insights.pdf",
          excerpt: "80% من المشاهدين يتوقعون حدثاً مفاجئاً خلال أول 12 دقيقة.",
          location: "صفحة 6",
          confidence: 0.84,
        },
      ],
      recommendedActions: [
        "إدراج لحظة تشويقية في الدقيقة العاشرة لدعم الاحتفاظ.",
      ],
    },
  ],
  target_audience_analyzer: {
    rating_guidance: "يناسب +16 مع تحذير عنف سياسي.",
    triggers_flags: [
      {
        trigger: "مشاهد عنف مؤسسي",
        severity: "medium",
        scenes: ["المشهد 55", "المشهد 87"],
      },
    ],
    suitability_score: 0.72,
    demographic_fit: [
      {
        segment: "شباب حضريون 18-29",
        alignment: 0.81,
        notes: "يستجيبون إيجابياً للمحور السياسي والتصوير الحديث.",
      },
      {
        segment: "عائلات 35-45",
        alignment: 0.58,
        notes: "تحتاج الخاتمة إلى تخفيف لغوي لدعمهم.",
      },
    ],
  },
});

const createLiteraryDetail = (): ModuleDetailSection => ({
  id: "literary_voice",
  title: "البنية الأدبية والصوت السردي",
  focus: AnalysisType.STRUCTURE,
  expositionMethod: ExpositionMethod.VOICE_OVER,
  summary: "العمل يوظف راوٍ داخلي يمنح عمقاً لكنه يحتاج إلى ضبط في الإيقاع.",
  insights: [
    {
      id: "structure_balance",
      headline: "الفصل الثالث يحتاج إلى ضغط",
      analysisType: AnalysisType.STRUCTURE,
      summary: "تتكرر الحجج الفلسفية ثلاث مرات في 15 صفحة.",
      impact: "يقلل من الطاقة الدرامية قبل الذروة.",
      confidence: 0.79,
      supportingEvidence: [
        {
          referenceId: "scene_90",
          source: "screenplay.pdf",
          excerpt: "الراوي يكرر مقولة \"العدالة مرآة مكسورة\" للمرة الثالثة.",
          location: "صفحة 102",
          confidence: 0.75,
        },
      ],
    },
  ],
  literary_quality_analyzer: {
    imagery_density: 0.64,
    metaphor_map: [
      {
        motif: "المرآة",
        occurrences: 6,
        tone: "يعكس التشظي والبحث عن الحقيقة.",
      },
    ],
    rhythm_profile: {
      cadence: "جمل متوسطة مع انعطافات تأملية",
      sentence_variance: 0.42,
      dominant_structure: "مقاطع صوت داخلي متبوعة بالفعل",
    },
    diction_register: "فصيح مع إدراج مفردات عامية مدروسة",
    originality_flags: [
      {
        aspect: "تشابه مع أعمال تحقيق تلفزيوني",
        severity: "low",
        note: "تظهر بعض العبارات المستعارة من أعمال معروفة، يوصى بإعادة صياغتها.",
      },
    ],
  },
});

const createRecommendationDetail = (): ModuleDetailSection => ({
  id: "recommendation_overview",
  title: "منهجية التوصيات المجمعة",
  focus: AnalysisType.RECOMMENDATION,
  expositionMethod: ExpositionMethod.ACTION,
  summary: "يتم تجميع الإجراءات حسب التأثير الدرامي والفائدة الإنتاجية.",
  insights: [
    {
      id: "recommendation_matrix",
      headline: "توزيع متوازن بين التحسين السردي والجدوى",
      analysisType: AnalysisType.RECOMMENDATION,
      summary: "تجمع التوصيات بين تعديل الحبكة وإدارة الموارد لإطلاق النسخة المقبلة.",
      impact: "يوفر مساراً تنفيذياً واضحاً لفريق التطوير.",
      confidence: 0.92,
      supportingEvidence: [
        {
          referenceId: "module_reports",
          source: "analytics.json",
          excerpt: "تم دمج 18 توصية من الوحدات السابقة في 6 مسارات عمل.",
          location: "قسم aggregation",
          confidence: 0.9,
        },
      ],
    },
  ],
  recommendations_generator: {
    prioritized_actions: [
      {
        id: "rec_prioritize_midpoint",
        priority: Priority.HIGH,
        category: Category.STORY_STRUCTURE,
        effort: 12,
        impact: "يعزز قوس سامر ويدعم التحولات البصرية.",
      },
    ],
    roadmap: {
      phases: [
        {
          id: "phase_focus_characters",
          name: "إعادة ضبط قوس البطل",
          duration_weeks: 2,
          focus: "تحسين المشاهد المحورية قبل منتصف الفيلم.",
        },
        {
          id: "phase_polish_dialogue",
          name: "تدقيق الحوار",
          duration_weeks: 1,
          focus: "تحسين الإيقاع وتوزيع التلميحات.",
        },
      ],
    },
    success_metrics: [
      {
        metric: "معدل رضا فريق التطوير",
        target: "80% أو أعلى",
        measurement: "استطلاع داخلي بعد تسليم النسخة المعدلة.",
      },
    ],
  },
});

const createVoiceDetail = (): ModuleDetailSection => ({
  id: "voice_modulation",
  title: "تحليل التفاعل الصوتي",
  focus: AnalysisType.VOICE,
  expositionMethod: ExpositionMethod.VOICE_OVER,
  summary: "يستعرض التفاعل بين الحوارات المسجلة والنبرة العاطفية للشخصيات.",
  insights: [
    {
      id: "voice_clarity",
      headline: "نبرة الشخصية الثانوية غير متسقة",
      analysisType: AnalysisType.VOICE,
      summary: "تتغير سرعة كلام ليلى بين المشاهد الرسمية والحميمية دون مبرر.",
      impact: "يؤثر على مصداقية الأداء الصوتي المتوقع.",
      confidence: 0.74,
      supportingEvidence: [
        {
          referenceId: "audio_session_02",
          source: "voice_samples.wav",
          excerpt: "تفاوت في السرعة بين الدقيقة 01:20 و02:05",
          location: "مشهد 18",
          confidence: 0.72,
        },
      ],
      recommendedActions: [
        "توفير إرشادات أداء أدق للممثلة في المشاهد العاطفية.",
      ],
    },
  ],
  voice_interaction_analyzer: {
    voiceover_usage: "يظهر الراوي الداخلي في 40% من المشاهد مع تركيز على المشاهد الانتقالية.",
    phone_radio_conventions: "يتم ترميز المكالمات الهاتفية بخط مائل، ويقترح إضافة إشارات صوتية للتمييز.",
    clarity_issues: [
      {
        scene: "18",
        description: "تداخل بين صوت الراوي وحوار ليلى يسبب إرباكاً.",
      },
    ],
    mix_guidelines: [
      "تخفيض صوت الراوي بنسبة 15% أثناء الحوارات الثنائية.",
      "إضافة مؤثر صوتي بسيط عند الانتقال للمكالمات اللاسلكية.",
    ],
  },
});

const createForeshadowingDetail = (): ModuleDetailSection => ({
  id: "foreshadowing_map",
  title: "خريطة التلميحات المبكرة",
  focus: AnalysisType.FORESHADOWING,
  expositionMethod: ExpositionMethod.FLASHBACK,
  summary: "التلميحات البصرية والصوتية تمهد لذروة الكشف عن المتهم الحقيقي.",
  insights: [
    {
      id: "foreshadowing_locket",
      headline: "القلادة كإشارة مبكرة",
      analysisType: AnalysisType.FORESHADOWING,
      summary: "تظهر القلادة الذهبية ثلاث مرات قبل الكشف عن هوية القاتل.",
      impact: "توفر خيطاً بصرياً سهل التتبع للجمهور الواعي.",
      confidence: 0.88,
      supportingEvidence: [
        {
          referenceId: "scene_15",
          source: "screenplay.pdf",
          excerpt: "كاميرا تتبع القلادة أثناء مغادرة الضحية الأولى.",
          location: "صفحة 27",
          confidence: 0.86,
        },
      ],
      recommendedActions: [
        "تعزيز ظهور القلادة في مشهد السوق لتثبيت الرابط لدى المشاهد.",
      ],
    },
  ],
  beats: [
    {
      type: BeatType.PINCH_POINT,
      description: "اكتشاف سامر للقلادة في صندوق الدليل.",
      pages: { start: 54, end: 55 },
      intensity: 75,
    },
  ],
  foreshadowing_detector: {
    clues: [
      {
        scene: "15",
        text: "إشارة سريعة للقلادة أثناء حديث عابر.",
        subtlety: 6,
        payoff_scene: "87",
        linkage_strength: 8,
        type: "visual",
      },
      {
        scene: "33",
        text: "ذكر ملفوظ لشخصية ترتدي القلادة نفسها.",
        subtlety: 7,
        payoff_scene: "87",
        linkage_strength: 7,
        type: "dialogue",
      },
    ],
    missed_payoffs: [
      {
        clue_id: "scene_48_note",
        expected_payoff_scene: "77",
        recommendation: "إضافة لقطة رد فعل توضح علاقة المذكرة بالقضية الأولى.",
      },
    ],
  },
});

const createRecommendations = (
  moduleKey: SupportedModule,
  focus: AnalysisType,
  category: Category,
  overrides?: Recommendation[],
): Recommendation[] => {
  if (overrides) {
    return overrides;
  }

  return [
    {
      id: `${moduleKey}_rec_1`,
      title: "تحديد إجراء مركزي للنسخة المقبلة",
      description: "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      priority: Priority.HIGH,
      category,
      focus,
      estimatedEffortHours: 12,
      owner: "كاتب السيناريو الرئيسي",
      impact: "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      successCriteria: [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل.",
      ],
    },
    {
      id: `${moduleKey}_rec_2`,
      title: "اختبار التعديل مع جمهور مصغر",
      description: "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      priority: Priority.MEDIUM,
      category,
      focus,
      estimatedEffortHours: 6,
      owner: "منسق التطوير",
      impact: "يوفر دلائل سريعة على فعالية التعديل المقترح.",
      successCriteria: [
        "جمع ملاحظات مكتوبة من خمسة مشاركين على الأقل.",
        "تسجيل نسبة رضا تتجاوز 70%.",
      ],
    },
  ];
};

const characterDeepAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل الشخصيات العميق",
  summary:
    "يركز التقرير على قوس سامر العاطفي وتوازن علاقاته، مع توصيات لتعزيز التعاطف المبكر.",
  metadata: createMetadata({
    categories: [Category.CHARACTER, Category.STORY_STRUCTURE],
  }),
  details: [createCharacterDetail()],
  recommendations: createRecommendations(
    TaskType.CHARACTER_DEEP_ANALYZER,
    AnalysisType.CHARACTER,
    Category.CHARACTER,
  ),
  quality_metrics: createQualityMetrics({
    characterDepth: 88,
    qualitativeNotes: [
      "تمنح الشخصية الرئيسية عمقاً مقنعاً لكن مقدمة الدافع تحتاج إلى ضبط.",
    ],
  }),
  next_steps: createNextSteps(TaskType.CHARACTER_DEEP_ANALYZER, AnalysisType.CHARACTER),
};

const dialogueAdvancedAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل الحوار المتطور",
  summary:
    "يستعرض التوازن بين النص الصريح والتلميح ويقترح تحسينات للإيقاع في المشاهد الجدلية.",
  metadata: createMetadata({
    categories: [Category.DIALOGUE],
  }),
  details: [createDialogueDetail()],
  recommendations: createRecommendations(
    TaskType.DIALOGUE_ADVANCED_ANALYZER,
    AnalysisType.DIALOGUE,
    Category.DIALOGUE,
    [
      {
        id: "dialogue_rec_density",
        title: "تقليل طول المشهد الجدلي",
        description:
          "تحرير المشهد 28 لتقليل التكرار وإتاحة لحظة صمت تدعم التوتر.",
        priority: Priority.MEDIUM,
        category: Category.DIALOGUE,
        focus: AnalysisType.DIALOGUE,
        estimatedEffortHours: 5,
        owner: "كاتب الحوار",
        impact: "يعزز إيقاع المشهد ويحافظ على انتباه المشاهد.",
        successCriteria: [
          "خفض عدد الأسطر بنسبة 20%.",
          "الحفاظ على المعنى العاطفي للمواجهة.",
        ],
      },
      {
        id: "dialogue_rec_subtext",
        title: "تعزيز الوضوح في التلميح",
        description:
          "إضافة جملة تأكيدية تكشف نوايا رفيق سامر في نهاية المشهد.",
        priority: Priority.HIGH,
        category: Category.DIALOGUE,
        focus: AnalysisType.DIALOGUE,
        estimatedEffortHours: 3,
        owner: "مساعد الكتابة",
        impact: "يسهّل على الجمهور فهم الاتجاه الدرامي دون فقد الغموض.",
        successCriteria: [
          "اختبار السطر الجديد في قراءة الطاولة القادمة.",
          "تحقيق موافقة 4 من أصل 5 من فريق التمثيل.",
        ],
      },
    ],
  ),
  quality_metrics: createQualityMetrics({
    dialogueAuthenticity: 83,
    narrativeCohesion: 80,
    qualitativeNotes: [
      "اللغة الحوارية غنية لكنها تحتاج إلى لحظات توقف محسوبة.",
    ],
  }),
  next_steps: createNextSteps(TaskType.DIALOGUE_ADVANCED_ANALYZER, AnalysisType.DIALOGUE, {
    communicationPlan: {
      stakeholders: [
        {
          name: "مشرف الحوار",
          role: "Lead Dialogue Coach",
          channel: "Zoom",
          cadence: "جلسة أسبوعية",
        },
      ],
      notes: "ينبغي إرسال النسخة المعدلة قبل 12 ساعة من الجلسة الصوتية.",
    },
  }),
};

const visualCinematicAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل اللغة البصرية والسينمائية",
  summary:
    "يوثق استخدام الألوان والعدسات لدعم الثيمة ويقترح تحسين توزيع الإضاءة في المشاهد الحاسمة.",
  metadata: createMetadata({
    categories: [Category.VISUAL_STYLE, Category.STORY_STRUCTURE],
  }),
  details: [createVisualDetail()],
  recommendations: createRecommendations(
    TaskType.VISUAL_CINEMATIC_ANALYZER,
    AnalysisType.VISUAL,
    Category.VISUAL_STYLE,
  ),
  quality_metrics: createQualityMetrics({
    narrativeCohesion: 84,
    productionFeasibility: 70,
    qualitativeNotes: [
      "التباين اللوني يدعم الصراع لكن بعض المواقع بحاجة إلى خطة إضاءة إضافية.",
    ],
  }),
  next_steps: createNextSteps(TaskType.VISUAL_CINEMATIC_ANALYZER, AnalysisType.VISUAL),
};

const themesMessagesAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل الموضوعات والرسائل",
  summary:
    "يحلل الرموز المتكررة ودورها في تأكيد ثيمة العدالة، ويقترح تعزيز الخاتمة بالموازاة البصرية.",
  metadata: createMetadata({
    categories: [Category.THEMES, Category.STORY_STRUCTURE],
  }),
  details: [createThemeDetail()],
  recommendations: createRecommendations(
    TaskType.THEMES_MESSAGES_ANALYZER,
    AnalysisType.THEME,
    Category.THEMES,
  ),
  quality_metrics: createQualityMetrics({
    thematicResonance: 86,
    qualitativeNotes: ["الرموز متسقة وتدعم الرسالة الرئيسة بفعالية."],
  }),
  next_steps: createNextSteps(TaskType.THEMES_MESSAGES_ANALYZER, AnalysisType.THEME),
};

const culturalHistoricalAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل السياق الثقافي والتاريخي",
  summary:
    "يراجع دقة التمثيل الثقافي ويشير إلى مواضع تحتاج إلى توطين لغوي أدق للحفاظ على المصداقية المحلية.",
  metadata: createMetadata({
    categories: [Category.CULTURAL_CONTEXT, Category.MARKET_POSITIONING],
  }),
  details: [createCulturalDetail()],
  recommendations: createRecommendations(
    TaskType.CULTURAL_HISTORICAL_ANALYZER,
    AnalysisType.CULTURAL,
    Category.CULTURAL_CONTEXT,
  ),
  quality_metrics: createQualityMetrics({
    localizationReadiness: 68,
    qualitativeNotes: [
      "البيئة الحضرية مقنعة لكن اللهجة تحتاج إلى توحيد.",
    ],
  }),
  next_steps: createNextSteps(TaskType.CULTURAL_HISTORICAL_ANALYZER, AnalysisType.CULTURAL, {
    immediate: [
      {
        id: "cultural_historical_analyzer_action_1",
        description: "تنظيم جلسة مراجعة لغوية مع مستشار اللهجة المصري.",
        owner: "المنتج الإبداعي",
        dueDate: "2025-01-18T14:00:00Z",
        priority: Priority.HIGH,
        status: "planned",
        successCriteria: [
          "توثيق جميع التعليقات في مستند مركزي.",
          "تحديث 90% من الجمل المعلقة خلال أسبوع.",
        ],
      },
    ],
  }),
};

const producibilityAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل القابلية للإنتاج",
  summary:
    "يقيّم الملاءمة اللوجستية للمشاهد المكثفة ويقترح تعديلات تقلل التكاليف دون المساس بالحبكة.",
  metadata: createMetadata({
    categories: [Category.PRODUCTION],
    priority: Priority.CRITICAL,
  }),
  details: [createProductionDetail()],
  recommendations: createRecommendations(
    TaskType.PRODUCIBILITY_ANALYZER,
    AnalysisType.PRODUCTION,
    Category.PRODUCTION,
    [
      {
        id: "producibility_streamline",
        title: "إعادة توزيع مواقع التصوير",
        description: "دمج مواقع التسلسل الثالث في موقعين رئيسيين لتقليل الانتقالات.",
        priority: Priority.HIGH,
        category: Category.PRODUCTION,
        focus: AnalysisType.PRODUCTION,
        estimatedEffortHours: 16,
        owner: "مدير الإنتاج",
        impact: "يخفض التكلفة الإجمالية بنسبة 18%.",
        successCriteria: [
          "الحصول على موافقة المواقع البديلة.",
          "تحديث الجدول الزمني دون زيادة في الأيام.",
        ],
      },
      {
        id: "producibility_fx_mix",
        title: "موازنة المؤثرات العملية والرقمية",
        description: "تحليل اللقطات التي يمكن تحويلها إلى مؤثرات رقمية منخفضة التكلفة.",
        priority: Priority.MEDIUM,
        category: Category.PRODUCTION,
        focus: AnalysisType.PRODUCTION,
        estimatedEffortHours: 10,
        owner: "مشرف المؤثرات",
        impact: "يحافظ على الجودة البصرية مع تقليل الحاجة للكومبارس.",
        successCriteria: [
          "إعداد قائمة من ثلاثة خيارات بديلة لكل لقطة عالية التكلفة.",
        ],
      },
    ],
  ),
  quality_metrics: createQualityMetrics({
    productionFeasibility: 65,
    qualitativeNotes: [
      "الجدول الحالي يحتاج إلى دعم إضافي في إدارة المواقع.",
    ],
  }),
  next_steps: createNextSteps(TaskType.PRODUCIBILITY_ANALYZER, AnalysisType.PRODUCTION),
};

const targetAudienceAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل الجمهور المستهدف",
  summary:
    "يقارن توقعات الجمهور مع بنية الحبكة الحالية، ويقترح إيقاعاً أسرع للفصل الأول للمحافظة على الاهتمام.",
  metadata: createMetadata({
    categories: [Category.MARKET_POSITIONING, Category.PACING],
  }),
  details: [createAudienceDetail()],
  recommendations: createRecommendations(
    TaskType.TARGET_AUDIENCE_ANALYZER,
    AnalysisType.AUDIENCE,
    Category.MARKET_POSITIONING,
  ),
  quality_metrics: createQualityMetrics({
    audienceAlignment: 82,
    pacingControl: 70,
    qualitativeNotes: [
      "القصة جذابة للجمهور البالغ لكن تحتاج إلى لحظة مشوقة مبكرة.",
    ],
  }),
  next_steps: createNextSteps(TaskType.TARGET_AUDIENCE_ANALYZER, AnalysisType.AUDIENCE),
};

const literaryQualityAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل الجودة الأدبية",
  summary:
    "يراجع الإيقاع السردي والصوت الأدبي، مع توصيات لضغط الفصل الثالث وتحسين التماسك.",
  metadata: createMetadata({
    categories: [Category.STORY_STRUCTURE, Category.THEMES],
  }),
  details: [createLiteraryDetail()],
  recommendations: createRecommendations(
    TaskType.LITERARY_QUALITY_ANALYZER,
    AnalysisType.STRUCTURE,
    Category.STORY_STRUCTURE,
  ),
  quality_metrics: createQualityMetrics({
    narrativeCohesion: 79,
    thematicResonance: 84,
    qualitativeNotes: [
      "اللغة الأدبية ثرية لكن الطول الزائد في الخاتمة يقلل التأثير.",
    ],
  }),
  next_steps: createNextSteps(TaskType.LITERARY_QUALITY_ANALYZER, AnalysisType.STRUCTURE),
};

const recommendationsGenerator: AdvancedScreenplayModuleResult = {
  title: "تقرير مولد التوصيات والتحسينات",
  summary:
    "يجمع مخرجات الوحدات المتخصصة في مصفوفة واحدة ويوصي بتسلسل تنفيذي واضح للنسخة القادمة.",
  metadata: createMetadata({
    categories: [Category.STORY_STRUCTURE, Category.PRODUCTION, Category.CHARACTER],
  }),
  details: [createRecommendationDetail()],
  recommendations: createRecommendations(
    TaskType.RECOMMENDATIONS_GENERATOR,
    AnalysisType.RECOMMENDATION,
    Category.STORY_STRUCTURE,
  ),
  quality_metrics: createQualityMetrics({
    narrativeCohesion: 85,
    productionFeasibility: 78,
    qualitativeNotes: [
      "تساعد الأولويات المجمعة الفريق على رؤية الصورة الكاملة لكل وحدة.",
    ],
  }),
  next_steps: createNextSteps(TaskType.RECOMMENDATIONS_GENERATOR, AnalysisType.RECOMMENDATION),
};

const voiceInteractionAnalyzer: AdvancedScreenplayModuleResult = {
  title: "تقرير محلل التفاعل الصوتي",
  summary:
    "يفحص التوازن بين الإيقاع الصوتي والتعبير العاطفي، مع خطوات لتحسين الاتساق بين الجلسات.",
  metadata: createMetadata({
    categories: [Category.SOUND_DESIGN, Category.DIALOGUE],
  }),
  details: [createVoiceDetail()],
  recommendations: createRecommendations(
    TaskType.VOICE_INTERACTION_ANALYZER,
    AnalysisType.VOICE,
    Category.SOUND_DESIGN,
  ),
  quality_metrics: createQualityMetrics({
    dialogueAuthenticity: 81,
    localizationReadiness: 72,
    qualitativeNotes: [
      "التسجيلات الأولية واعدة لكنها تحتاج إلى ضبط ديناميكي أدق.",
    ],
  }),
  next_steps: createNextSteps(TaskType.VOICE_INTERACTION_ANALYZER, AnalysisType.VOICE),
};

const foreshadowingDetector: AdvancedScreenplayModuleResult = {
  title: "تقرير كاشف التلميحات المبكرة",
  summary:
    "يقيم توزيع التلميحات ويرصد لحظات تستحق إعادة التذكير، مع اقتراحات لتعزيز التأثير قبل الذروة.",
  metadata: createMetadata({
    categories: [Category.STORY_STRUCTURE, Category.PACING],
  }),
  details: [createForeshadowingDetail()],
  recommendations: createRecommendations(
    TaskType.FORESHADOWING_DETECTOR,
    AnalysisType.FORESHADOWING,
    Category.STORY_STRUCTURE,
  ),
  quality_metrics: createQualityMetrics({
    narrativeCohesion: 83,
    pacingControl: 79,
    qualitativeNotes: [
      "التلميحات موزعة بشكل جيد لكنها تحتاج إلى تأكيد قبل المشهد الأخير.",
    ],
  }),
  next_steps: createNextSteps(TaskType.FORESHADOWING_DETECTOR, AnalysisType.FORESHADOWING),
};

export const MODULE_EXAMPLES: Record<SupportedModule, AdvancedScreenplayModuleResult> = {
  [TaskType.CHARACTER_DEEP_ANALYZER]: characterDeepAnalyzer,
  [TaskType.DIALOGUE_ADVANCED_ANALYZER]: dialogueAdvancedAnalyzer,
  [TaskType.VISUAL_CINEMATIC_ANALYZER]: visualCinematicAnalyzer,
  [TaskType.THEMES_MESSAGES_ANALYZER]: themesMessagesAnalyzer,
  [TaskType.CULTURAL_HISTORICAL_ANALYZER]: culturalHistoricalAnalyzer,
  [TaskType.PRODUCIBILITY_ANALYZER]: producibilityAnalyzer,
  [TaskType.TARGET_AUDIENCE_ANALYZER]: targetAudienceAnalyzer,
  [TaskType.LITERARY_QUALITY_ANALYZER]: literaryQualityAnalyzer,
  [TaskType.RECOMMENDATIONS_GENERATOR]: recommendationsGenerator,
  [TaskType.VOICE_INTERACTION_ANALYZER]: voiceInteractionAnalyzer,
  [TaskType.FORESHADOWING_DETECTOR]: foreshadowingDetector,
};
