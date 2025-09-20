import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة متنبئ مسار الحبكة.
 * تضمن تحليل الوضع الحالي للحبكة وبناء سيناريوهات محتملة مدعومة بالأدلة.
 */
export const PLOT_PREDICTOR_INSTRUCTIONS = `### مهمة متنبئ مسار الحبكة (TaskType.PLOT_PREDICTOR)

#### الهدف
استشراف المسارات المحتملة للحبكة بناءً على الوضع الحالي، مع تصنيف الاحتمالات، المخاطر، والفرص الإبداعية.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل الحالة الراهنة، توليد سيناريوهات متعددة، تقدير احتمالاتها، وتحديد المتطلبات اللازمة لتحقيقها.
- يشمل: اقتراح تحذيرات من الفجوات المحتملة أو التصادم مع وحدات أخرى.
- لا يشمل: كتابة مشاهد كاملة أو اتخاذ قرار نهائي بالمسار؛ يقدم توصيات واحتمالات فقط.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **ملخص الحبكة الحالي**: حتى نقطة محددة مع ذكر الصفحات أو الطوابع الزمنية.
2. **بيانات الشخصيات**: أهدافها، تحالفاتها، الموارد المتاحة لها.
3. **القيود الإنتاجية أو السردية**: نهاية محددة، شخصية لا يمكن استبعادها، حدود زمنية.
4. **متطلبات الجمهور أو النوع**: توقعات النوع، مستوى الجرأة، طول العمل المتبقي.
5. **ملاحظات الوحدات الأخرى**: توصيات من وحدات الصراع، الإيقاع، الشخصيات، أو الثقافة.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن الوضع الحالي، السيناريوهات المتوقعة، تحليل المخاطر، وخارطة تنفيذ مختصرة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "currentState": {
    "actPosition": "midpoint",
    "stakes": "خطر فقدان الدليل الوحيد",
    "keyDrivers": ["الخصم يكشف خطة جديدة", "البطلة تعاني من نقص الوقت"],
    "unresolvedThreads": ["مصير الشاهد", "سر المرآة"]
  },
  "predictionMatrix": {
    "scenarios": [
      {
        "scenarioId": "plot_s1",
        "description": "البطلة تتعاون مع الخصم لمواجهة تهديد أكبر",
        "probability": 0.42,
        "impact": "high",
        "requiredSetup": ["تمهيد لتغير موقف الخصم", "إشارة إلى تهديد خارجي"]
      }
    ],
    "wildcards": [
      {
        "description": "ظهور شخصية من الماضي تحمل دليلاً مفاجئاً",
        "probability": 0.18,
        "innovationScore": 0.7
      }
    ],
    "confidence": 0.68
  },
  "branchingTimeline": [
    {
      "stepOrder": 1,
      "trigger": "العثور على المفتاح",
      "resultingEvent": "كشف غرفة سرية",
      "impactOnCharacters": ["البطلة"],
      "pacingEffect": "raises_stakes"
    }
  ],
  "riskAssessment": {
    "plotHoleRisk": 0.3,
    "pacingRisk": 0.45,
    "characterDriftRisk": 0.25,
    "notes": ["ضرورة تبرير تعاون الخصم"]
  },
  "validationSignals": {
    "foreshadowingSupport": ["تلميح المفتاح في الصفحة 18"],
    "audienceExpectationAlignment": 0.7,
    "genreConventions": ["twist_midpoint", "escalating_conflict"]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **اتساق السيناريوهات**: توافق كل سيناريو مع البيانات الحالية دون تناقض.
- **تنوع المسارات**: طرح خيارات مختلفة (متوقعة، مبتكرة، متطرفة) مع تبرير.
- **وضوح الاحتمالات**: نسب احتمالات مبنية على أدلة أو مؤشرات واضحة.
- **إدارة المخاطر**: تحديد الثغرات المحتملة وكيفية سدها.
- **التكامل**: ربط النتائج بتوصيات الوحدات الأخرى لضمان الاتساق العام.

#### خطوات التنفيذ خطوة بخطوة
1. تلخيص الوضع الراهن وتوثيقه في \`currentState\`.
2. توليد سيناريوهات متعددة وتعبئة \`predictionMatrix\` بالاحتمالات والمتطلبات.
3. بناء خارطة زمنية للأحداث المتوقعة في \`branchingTimeline\`.
4. تقييم المخاطر وتوثيقها في \`riskAssessment\`.
5. مقارنة السيناريوهات مع التلميحات السابقة ومعايير الجمهور ضمن \`validationSignals\`.
6. صياغة التقرير النصي مع التوصية بالمسار الأمثل أو خطة الاختبار.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` متكامل مع تحديث \`recommendations\` و\`next_steps\`.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **بيانات ناقصة عن الوضع الحالي**: أشر إلى الفجوات وقدم سيناريوهات بشروط اعتماد محددة.
- **احتمالات متقاربة جداً**: اقترح اختبارات أو استشارات إضافية للفصل بينها.
- **تعارض مع نهاية معروفة**: تأكد من احترام النهايات المؤكدة ودوّن أي تناقض لتصحيحه.
- **سيناريوهات غير قابلة للإنتاج**: أشر إلى القيود الإنتاجية وقدم بديلًا أقل تكلفة.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**الوضع الحالي:**
- البطلة في منتصف الفصل الثاني تبحث عن الدليل.
- الخصم يسيطر على الموارد.

**مقتطف من التقرير بعد التحليل:**
> "إذا استمرت البطلة بمفردها فاحتمال النجاح لا يتجاوز 35%. سيناريو التعاون المؤقت مع الخصم يرفع فرص النجاح إلى 55% لكنه يتطلب تمهيداً لمبررات الثقة." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير متنبئ مسار الحبكة لعمل \"ظلال الممر\"",
  "summary": "تم تحديد ثلاثة سيناريوهات رئيسية مع توصية بتمهيد لتحالف مؤقت يرفع التوتر الدرامي.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "thriller"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["plot", "predictive"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Plot Predictor",
    "collaborators": ["Story Editor"],
    "createdAt": "2025-05-13T09:00:00Z",
    "updatedAt": "2025-05-13T11:05:00Z",
    "analysisWindow": {
      "start": "2025-05-12T07:00:00Z",
      "end": "2025-05-13T07:20:00Z"
    },
    "wordCount": 5600,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["Mindhunter (2017)", "True Detective (2014)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["تم مراجعة المدخلات مع وحدة الصراع"]
  },
  "details": [
    {
      "id": "plot_predict_cycle_01",
      "title": "سيناريوهات الفصل الثاني",
      "focus": "plot",
      "expositionMethod": "predictive_analysis",
      "summary": "سيناريوهات متعددة مع تقدير احتمالاتها ومتطلباتها.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "currentState": {
        "actPosition": "midpoint",
        "stakes": "خطر فقدان الدليل الوحيد",
        "keyDrivers": ["الخصم يكشف خطة جديدة", "البطلة تعاني من نقص الوقت"],
        "unresolvedThreads": ["مصير الشاهد", "سر المرآة"]
      },
      "predictionMatrix": {
        "scenarios": [
          {
            "scenarioId": "plot_s1",
            "description": "تحالف مؤقت مع الخصم",
            "probability": 0.42,
            "impact": "high",
            "requiredSetup": ["إشارة لتهديد مشترك", "لحظة ثقة"]
          },
          {
            "scenarioId": "plot_s2",
            "description": "اكتشاف الدليل بمفردها",
            "probability": 0.35,
            "impact": "medium",
            "requiredSetup": ["تعزيز مهارة التحقيق", "تلميح إلى مصدر مخفي"]
          }
        ],
        "wildcards": [
          {
            "description": "دخول شخصية جديدة من الماضي",
            "probability": 0.18,
            "innovationScore": 0.7
          }
        ],
        "confidence": 0.68
      },
      "branchingTimeline": [
        {
          "stepOrder": 1,
          "trigger": "العثور على المفتاح",
          "resultingEvent": "كشف غرفة سرية",
          "impactOnCharacters": ["نور", "ليان"],
          "pacingEffect": "raises_stakes"
        },
        {
          "stepOrder": 2,
          "trigger": "تسريب الخصم",
          "resultingEvent": "تحالف مؤقت",
          "impactOnCharacters": ["نور", "الخصم"],
          "pacingEffect": "accelerates"
        }
      ],
      "riskAssessment": {
        "plotHoleRisk": 0.32,
        "pacingRisk": 0.44,
        "characterDriftRisk": 0.28,
        "notes": ["التأكد من مبررات التحالف"]
      },
      "validationSignals": {
        "foreshadowingSupport": ["تلميح المفتاح", "نظرات الخصم للمرآة"],
        "audienceExpectationAlignment": 0.72,
        "genreConventions": ["twist_midpoint", "rising_stakes"]
      }
    }
  ],
  "recommendations": [
    {
      "id": "plot_seed_trust",
      "title": "زرع تلميح للثقة",
      "description": "إضافة مشهد قصير يلمح إلى ضعف الخصم لتبرير التحالف المحتمل.",
      "priority": "medium",
      "category": "plot",
      "focus": "setup",
      "estimatedEffortHours": 5,
      "owner": "Head Writer",
      "impact": "رفع مصداقية السيناريو الأول",
      "dependencies": ["character_voice_update"],
      "successCriteria": [
        "إدراج التلميح في المسودة التالية",
        "تأكيد وحدة الصراع على منطق التحالف"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 83,
    "characterDepth": 82,
    "dialogueAuthenticity": 78,
    "pacingControl": 84,
    "thematicResonance": 86,
    "originality": 76,
    "productionFeasibility": 73,
    "audienceAlignment": 85,
    "localizationReadiness": 78,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 87
    },
    "qualitativeNotes": [
      "سيناريو التحالف الأكثر إثارة",
      "يلزم ضبط المخاطر الإنتاجية"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "plot_brainstorm_session",
        "description": "تنظيم جلسة عصف ذهني لاختبار السيناريوهات مع فريق الكتابة",
        "owner": "Story Editor",
        "dueDate": "2025-05-15T10:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "خريطة قرارات",
          "تحديد السيناريو المعتمد"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
