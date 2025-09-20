import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة تحسين المشاهد القائمة.
 * تهدف إلى تحليل المشهد الحالي وتقديم نسخة منقحة مدعومة بحجج سردية وإنتاجية.
 */
export const SCENE_OPTIMIZER_INSTRUCTIONS = `### مهمة محسِّن المشاهد (TaskType.SCENE_OPTIMIZER)

#### الهدف
تفكيك مشهد قائم، تشخيص نقاط ضعفه السردية أو الإيقاعية، ثم تقديم نسخة معدّلة أكثر وضوحاً في الدافع والتوتر، مع توثيق جميع التغييرات المقترحة.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: قراءة المشهد الأصلي، تحليل البنية الداخلية، اقتراح تعديلات على الوصف والحوار، وتلخيص أثر كل تعديل.
- يشمل: احترام قيود الشخصيات، المواقع، والزمن المحدد ضمن المادة الأصلية.
- لا يشمل: تغيير الهدف الدرامي للمشهد جذرياً، إضافة شخصيات جديدة غير مذكورة، أو إلغاء مشاهد كاملة خارج نطاق التحسين.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **نص المشهد الأصلي**: بصيغة سيناريو أو تفريغ مكتوب مع تحديد الصفحات أو الطوابع الزمنية.
2. **هدف المشهد**: وصف من الجهة المالكة يوضح الغاية الدرامية أو المعلوماتية للمشهد (50-100 كلمة).
3. **ملاحظات سابقة**: أي تعليقات من المخرج، المنتج، أو الجمهور التجريبي توضح مكامن الخلل.
4. **قيود التعديل**: الحدود الزمنية المستهدفة (بالدقائق أو عدد الأسطر)، حدود اللغة أو التصنيف الرقابي، وأي عناصر يجب الإبقاء عليها دون تغيير.
5. **سياق الحبكة**: ملخص من 80-120 كلمة يربط المشهد بالمشاهد السابقة واللاحقة لتجنب تناقضات الاستمرارية.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن أقسام (تشخيص الوضع الحالي، استراتيجية التحسين، النسخة المحسنة، جدول المقارنات، توصيات المتابعة) باستخدام جداول مرقمة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "diagnosticReview": {
    "pacingScore": 0.52,
    "clarityIssues": ["الحافز غير واضح في منتصف المشهد"],
    "redundantBeats": ["تكرار حوار شرح المعلومات"],
    "strengths": ["افتتاح بصري قوي"]
  },
  "tensionCurve": [
    { "beat": "افتتاح", "original": 0.4, "optimized": 0.55 },
    { "beat": "مواجهة", "original": 0.6, "optimized": 0.82 },
    { "beat": "ختام", "original": 0.45, "optimized": 0.75 }
  ],
  "rewriteStrategy": {
    "objectives": ["تسريع التحفيز", "تعميق الصراع الداخلي"],
    "constraints": ["لا تغيير في الموقع", "الزمن الكلي ≤ 2.5 دقيقة"],
    "riskMitigation": ["حفظ الجملة المميزة للجمهور"]
  },
  "optimizedScene": {
    "format": "screenplay",
    "sections": [
      {
        "title": "INT. الميناء - ليل",
        "content": "ليان تدرك أن الخادم ليس خالياً، فتستخدم منارة القوارب للتشويش على الحراس.",
        "wordCount": 180
      }
    ],
    "changeHighlights": [
      {
        "type": "dialogue_trim",
        "originalExcerpt": "ليان: يجب أن أنهي التنزيل الآن وإلا لن يكون لدينا دليل...",
        "newExcerpt": "ليان (هامسة): يكفي نبضة واحدة.",
        "impact": "خفض الإيضاح المباشر وزيادة التوتر"
      }
    ]
  },
  "changeLog": [
    {
      "category": "pacing",
      "description": "تم دمج فقرتين متكررتين في وصف واحد",
      "expectedEffect": "تقليل التباطؤ في منتصف المشهد",
      "confidence": 0.78
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **تحسين قابل للقياس**: يجب أن تظهر فروقات واضحة في منحنى التوتر، عدد الكلمات، أو وضوح الهدف بين النسخة الأصلية والمعدّلة.
- **سلامة الاستمرارية**: لا يُسمح بأي أخطاء تخل بتتابع الأحداث أو معلومات سبق تثبيتها.
- **شروحات مبررة**: كل تعديل يُوثّق سببه وتأثيره المتوقع على الجمهور أو البنية.
- **سلامة اللغة**: استخدام لغة فصحى دقيقة، مع الحفاظ على بصمة الشخصيات الصوتية.
- **ملاءمة التكامل**: مخرجات الوحدة يجب أن تكون قابلة للاستهلاك من قبل وحدات الحوار، التوتر، والإنتاجية.

#### خطوات التنفيذ خطوة بخطوة
1. تحميل المشهد الأصلي وتخزين بياناته في قسم \`metadata\` (العنوان، الصفحات، الزمن).
2. تحليل المشهد إلى beats وتقييم التوتر والوضوح لكل جزء مع تدوين المخاطر في \`diagnosticReview\`.
3. تحديد أهداف التحسين وتوثيقها في \`rewriteStrategy.objectives\` مع أي قيود إلزامية.
4. صياغة النسخة المحسنة مع إبراز الاختلافات الأساسية وتوثيق التعديلات الجوهرية.
5. بناء منحنى توتر مقارن يوضح التحسن الرقمي والمتوقع.
6. إعداد التقرير النصي المنسق متضمناً جدول مقارنة (العنصر، قبل، بعد، التبرير).
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` وإدراج التوصيات وخطط المتابعة.
8. مراجعة الجودة اللغوية والتأكد من تطابق النص مع JSON قبل التسليم.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **مشهد قصير جداً (< 30 ثانية)**: ركز على تحسين الوضوح والحوار، واذكر محدودية البيانات في قسم الملاحظات.
- **تعليمات متضاربة**: إذا كانت الأهداف تتعارض مع القيود، سجّل التعارض في \`rewriteStrategy.constraints\` واقترح بدائل.
- **غياب نسخة أصلية**: امتنع عن التوليد واطلب تزويد النص، مع توثيق التعذر في التقرير.
- **إغفال سطر محوري**: إذا طُلب الحفاظ على جملة محددة، أدرجها كما هي مع شرح موقعها بعد التحسين.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من النسخة الأصلية:**
> \"ليان: يجب أن أنهي التنزيل الآن وإلا لن يكون لدينا دليل قانوني. ماهر: أنت لا تفهمين كم هو معقد هذا.\"

**مقتطف من النسخة المحسّنة:**
> \"ليان (هامسة): نبضة واحدة تكفي. ماهر (متراجع): هذا الجنون سيشعل الحرب.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محسِّن المشاهد حول \"ظلال الميناء\"",
  "summary": "تم تقليص الإيضاح الزائد في مشهد الميناء وتعزيز التوتر عبر مواجهة مركزة بين ليان وماهر.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["scene_optimizer", "story_structure"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Scene Optimizer",
    "collaborators": ["Story Editor"],
    "createdAt": "2025-03-03T08:30:00Z",
    "updatedAt": "2025-03-03T09:45:00Z",
    "analysisWindow": {
      "start": "2025-03-02T15:00:00Z",
      "end": "2025-03-03T08:00:00Z"
    },
    "wordCount": 20400,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تفضح شركة أمن فاسدة وتخاطر بعائلتها.",
    "referenceWorks": ["Zero Dark Thirty (2012)"],
    "productionCompany": "Horizon Pictures",
    "notes": ["المشهد المستهدف يقع بين الصفحات 54-57"]
  },
  "details": [
    {
      "id": "scene_optimizer_dock_confrontation",
      "title": "تحسين مشهد الميناء",
      "focus": "scene_optimizer",
      "expositionMethod": "analysis_then_rewrite",
      "summary": "تم تقليص الإيضاح وإعادة توزيع الصراع الداخلي لإبراز قرار ليان.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "diagnosticReview": {
        "pacingScore": 0.52,
        "clarityIssues": ["حوار متكرر يضعف التوتر"],
        "redundantBeats": ["تفسير قانوني طويل"],
        "strengths": ["إحساس بصري قوي بالليل"]
      },
      "tensionCurve": [
        { "beat": "افتتاح", "original": 0.42, "optimized": 0.6 },
        { "beat": "مواجهة", "original": 0.58, "optimized": 0.85 },
        { "beat": "ختام", "original": 0.5, "optimized": 0.78 }
      ],
      "rewriteStrategy": {
        "objectives": ["تسريع التحفيز", "تخفيض الشرح"],
        "constraints": ["عدم تغيير الموقع", "الحفاظ على دخول ماهر المفاجئ"],
        "riskMitigation": ["توثيق الحوار المحذوف في الملحق"]
      },
      "optimizedScene": {
        "format": "screenplay",
        "sections": [
          {
            "title": "EXT. الميناء الصناعي - ليل",
            "content": "ضوء المنارة يقطع الضباب بينما تخبئ ليان جهاز البث خلف صناديق الشحن. ماهر يظهر بلا صوت.",
            "wordCount": 190
          },
          {
            "title": "CONTINUOUS",
            "content": "يتبادل الاثنان حواراً قصيراً يحسم قرار ليان قبل اقتحام الحراس.",
            "wordCount": 95
          }
        ],
        "changeHighlights": [
          {
            "type": "dialogue_trim",
            "originalExcerpt": "ليان: إذا لم أفعل هذا الآن فلن يتبقى لنا أي أثر يدينهم قانونياً.",
            "newExcerpt": "ليان: نبضة واحدة وتنهار ملفاتهم.",
            "impact": "رفع التوتر وإزالة التفسير المطول"
          },
          {
            "type": "action_merge",
            "originalExcerpt": "تفحص لوحات التحكم ثم تتجه إلى الخادم الثاني.",
            "newExcerpt": "تضغط على المنارة وتثبت جهاز البث في نفس الحركة.",
            "impact": "تسريع الإيقاع"
          }
        ]
      },
      "changeLog": [
        {
          "category": "pacing",
          "description": "دمج فقرتي حركة متتاليتين",
          "expectedEffect": "تقليل التباطؤ قبل المواجهة",
          "confidence": 0.76
        },
        {
          "category": "dialogue",
          "description": "إعادة صياغة عرض ليان للدليل",
          "expectedEffect": "زيادة الإلحاح",
          "confidence": 0.8
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "opt_sync_with_tension",
      "title": "مزامنة منحنى التوتر",
      "description": "إبلاغ وحدة محسن التوتر بالقيم الجديدة لضمان اتساق المنحنى العام.",
      "priority": "high",
      "category": "integration",
      "focus": "tension",
      "estimatedEffortHours": 2,
      "owner": "Story Editor",
      "impact": "يحافظ على تناغم الإيقاع في الفصل الثاني",
      "dependencies": ["tension_optimizer_review"],
      "successCriteria": ["تحديث لوحة التوتر المشتركة", "اعتماد القيم من فريق الإشراف"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 89,
    "characterDepth": 84,
    "dialogueAuthenticity": 86,
    "pacingControl": 88,
    "thematicResonance": 82,
    "originality": 74,
    "productionFeasibility": 90,
    "audienceAlignment": 83,
    "localizationReadiness": 78,
    "confidenceInterval": {
      "lowerBound": 75,
      "upperBound": 91
    },
    "qualitativeNotes": [
      "النسخة المحسنة أكثر تكثيفاً وتعزز الصراع الداخلي",
      "تم الحفاظ على الجملة المفضلة لدى المنتج"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "table_read_update",
        "description": "إدراج النسخة المعدلة في قراءة الطاولة القادمة.",
        "owner": "Assistant Director",
        "dueDate": "2025-03-05T11:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["استلام تعليقات الطاقم", "إقرار النسخة النهائية"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك بيانات \`tensionCurve.optimized\` مع وحدة \`TENSION_OPTIMIZER\` لضبط المنحنى العام.
- أرسل التغييرات الحوارية إلى \`DIALOGUE_ADVANCED_ANALYZER\` و\`VOICE_INTERACTION_ANALYZER\` للتحقق من الاتساق الصوتي.
- أي تبعات إنتاجية يجب تحديثها في \`PRODUCIBILITY_ANALYZER\` عبر توصيات واضحة.
- حافظ على تطابق \`metadata.categories\` مع مخرجات \`INTEGRATED\` لتسهيل التجميع النهائي.
`;
