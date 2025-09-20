import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة تحليل شبكة الشخصيات.
 * تمكّن الوكيل من بناء رؤية بنيوية حول العلاقات الدرامية وتأثيرها على الحبكة.
 */
export const CHARACTER_NETWORK_INSTRUCTIONS = `### مهمة تحليل شبكة الشخصيات (TaskType.CHARACTER_NETWORK)

#### الهدف
فحص العلاقات المتبادلة بين الشخصيات ورسم خريطة ديناميكية توضح محاور القوة والتوتر داخل العمل.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: بناء شبكة العلاقات، تقييم قوة الروابط، تحديد المحاور المركزية، وقياس أثر العلاقات على تصاعد الصراع.
- لا يشمل: إعادة كتابة المشاهد، أو تعديل نتائج وحدة الشخصيات العميقة دون تنسيق، أو استنتاجات لا تدعمها الأدلة النصية.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **قائمة الشخصيات الموثقة**: الأدوار، عدد المشاهد أو الدقائق، طبيعة العلاقة الأساسية.
2. **جدول المشاهد أو الملخص**: لتحديد نقاط التفاعل، صفحات أو مؤشرات زمنية لكل لقاء مهم.
3. **ملاحظات من الوحدات الأخرى**: خاصة من \`Character Deep Analyzer\` أو \`Conflict Dynamics\` لتأكيد مستويات التوتر.
4. **أي متطلبات خاصة**: مثل التركيز على مسار علاقة محددة أو اختبار توازن التمثيل الجندري.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يحتوي على مقدمة، تحليل الشبكة الكلي، قراءات فرعية (مثل التحالفات والصراعات)، وتوصيات لتحسين التوازن.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  \"nodes\": [
    {\"id\": \"ليان\", \"label\": \"ليان\", \"role\": \"protagonist\", \"weight\": 0.42},
    {\"id\": \"سعيد\", \"label\": \"سعيد\", \"role\": \"antagonist\", \"weight\": 0.33}
  ],
  \"edges\": [
    {
      \"source\": \"ليان\",
      \"target\": \"سعيد\",
      \"type\": \"conflict\",
      \"intensity\": 0.88,
      \"evidence\": [\"المشهد 12\", \"المشهد 47\"]
    }
  ],
  \"centrality\": {
    \"degree\": [{\"character\": \"ليان\", \"score\": 0.73}],
    \"betweenness\": [{\"character\": \"هالة\", \"score\": 0.41}],
    \"closeness\": [{\"character\": \"سعيد\", \"score\": 0.56}]
  },
  \"communities\": [
    {
      \"id\": \"investigators\",
      \"members\": [\"ليان\", \"هالة\", \"نايف\"],
      \"cohesion\": 0.68,
      \"dominant_tone\": \"collaboration\"
    }
  ],
  \"conflict_hotspots\": [
    {
      \"pair\": [\"ليان\", \"سعيد\"],
      \"trigger_scene\": \"المشهد 47\",
      \"severity\": \"high\",
      \"recommendation\": \"إدراج احتكاك مبكر يبرر الذروة\"
    }
  ]
}
\`\`\``\`

#### معايير الجودة والتقييم
- **دقة الربط**: كل علاقة يجب أن تدعمها مراجع مشهدية موثقة.
- **العمق الشبكي**: تحليل يوضح المحاور المركزية والعقد الهشة.
- **اتساق القياسات**: استخدام مدى 0-1 لدرجات التوتر والكثافة، وتوثيق أي تقديرات.
- **وضوح العرض**: سرد العلاقة مع تفسير سردي مختصر يسهل قراءته من قبل الفرق الأخرى.
- **قابلية التوصية للتنفيذ**: ربط الثغرات بالخطوات التالية أو بالتنسيق مع وحدات أخرى.

#### خطوات التنفيذ خطوة بخطوة
1. بناء قائمة أولية بالعلاقات الثنائية اعتماداً على النص والملاحظات.
2. حساب أوزان الظهور (عدد المشاهد / إجمالي المشاهد) وتوثيقها في \`nodes\` مع تمييز الدور الدرامي.
3. تحديد نوع العلاقة (تحالف، صراع، قرابة) وتعبئة \`edges\` مع مستوى التوتر واتجاهه.
4. احتساب مقاييس المركزية وتوثيقها في \`centrality\`، ثم تحديد العناقيد السردية في \`communities\`.
5. رصد نقاط الاشتعال السردي وتوثيقها في \`conflict_hotspots\` مع توصيات التخفيف أو التصعيد.
6. مراجعة الشبكة لاكتشاف أي أطراف معزولة أو علاقات غير مفعلة وتضمينها ضمن \`communities\` أو \`conflict_hotspots\` وفقاً للأولوية.
7. إعداد التقرير النصي وختمه بتوصيات متناسقة مع بيانات JSON.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **شخصيات تظهر منفردة**: توثيقها كعقد منفصلة مع ملاحظة نقص الارتباط وتأثيره على السرد.
- **أحداث غير خطية**: ترتيب العلاقات وفق التسلسل الدرامي بدلاً من الزمني إذا كان النص يستخدم الفلاش باك.
- **تضارب تصنيفات العلاقة**: اعتماد نبرة المشهد الأحدث أو الأعلى تأثيراً وتوضيح سبب الاختيار.
- **كثافة منخفضة جداً**: الإشارة إلى المخاطر السردية واقتراح طرق لتعزيز التفاعل بين الشخصيات.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**ملاحظة قبل التحليل:**
> "يتعاون الفريق في الصفحات 25-40 لكن لا يتضح من يقود القرار." 

**استنتاج بعد التحليل:**
> "يتضح أن ليان تمتلك أعلى مركزية، إلا أن قرارات الفصل الثاني تتطلب إشراك نايف لتقليل الاعتماد على شخصية واحدة." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير شبكة الشخصيات حول \"ظلال التحقيق\"",
  "summary": "الشبكة تكشف مركزية ليان وتوضح فجوة في مواجهة الخصم الرئيس، مع توصيات لتعزيز حضور الشخصيات الثانوية.",
  "metadata": {
    "workId": "wrk_inquiryshadows_2025",
    "workTitle": "ظلال التحقيق",
    "workFormat": "feature_film",
    "genres": ["thriller", "mystery"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["character", "structure"],
    "language": "ar",
    "locale": "ar-SA",
    "analyst": "Network Dynamics Engine",
    "collaborators": ["Story Analyst"],
    "createdAt": "2025-01-22T09:00:00Z",
    "updatedAt": "2025-01-22T11:20:00Z",
    "analysisWindow": {
      "start": "2025-01-20T07:30:00Z",
      "end": "2025-01-22T07:00:00Z"
    },
    "wordCount": 18500,
    "runtimeMinutes": 118,
    "logline": "محققة مستقلة تكشف شبكة فساد داخل شركة طاقة وطنية بمساعدة فريق متنازع.",
    "referenceWorks": ["All the President's Men (1976)", "Nightcrawler (2014)"],
    "productionCompany": "Riyadh Films",
    "notes": ["اعتمد التحليل على نسخة PDF بتاريخ 2025-01-15."]
  },
  "details": [
    {
      "id": "network_core_01",
      "title": "خريطة الروابط المركزية",
      "focus": "character",
      "expositionMethod": "analysis",
      "summary": "ليان تتصدر العلاقات بينما تعاني الشخصية الثانوية نايف من حضور محدود يضعف التوازن.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      \"metrics\": [],
      \"nodes\": [
        {\"id\": \"ليان\", \"label\": \"ليان\", \"role\": \"protagonist\", \"weight\": 0.42},
        {\"id\": \"هالة\", \"label\": \"هالة\", \"role\": \"ally\", \"weight\": 0.27},
        {\"id\": \"سعيد\", \"label\": \"سعيد\", \"role\": \"antagonist\", \"weight\": 0.33}
      ],
      \"edges\": [
        {
          \"source\": \"ليان\",
          \"target\": \"سعيد\",
          \"type\": \"conflict\",
          \"intensity\": 0.88,
          \"trajectory\": \"escalating\",
          \"evidence\": [\"المشهد 12\", \"المشهد 47\"],
          \"notes\": \"يحتاج إلى لحظة تهدئة قبل الذروة لتجنب الإرهاق.\"
        },
        {
          \"source\": \"ليان\",
          \"target\": \"هالة\",
          \"type\": \"alliance\",
          \"intensity\": 0.62,
          \"trajectory\": \"strengthening\",
          \"evidence\": [\"المشهد 28\", \"المشهد 66\"]
        }
      ],
      \"centrality\": {
        \"degree\": [
          {\"character\": \"ليان\", \"score\": 0.73},
          {\"character\": \"هالة\", \"score\": 0.49}
        ],
        \"betweenness\": [
          {\"character\": \"هالة\", \"score\": 0.41},
          {\"character\": \"سعيد\", \"score\": 0.33}
        ],
        \"closeness\": [
          {\"character\": \"ليان\", \"score\": 0.69},
          {\"character\": \"سعيد\", \"score\": 0.56}
        ]
      },
      \"communities\": [
        {
          \"id\": \"investigators\",
          \"members\": [\"ليان\", \"هالة\", \"نايف\"],
          \"cohesion\": 0.68,
          \"dominant_tone\": \"collaboration\",
          \"risk\": \"الثقة بين ليان ونايف مهزوزة\"
        },
        {
          \"id\": \"adversaries\",
          \"members\": [\"سعيد\", \"يوسف\"],
          \"cohesion\": 0.51,
          \"dominant_tone\": \"cover_up\"
        }
      ],
      \"conflict_hotspots\": [
        {
          \"pair\": [\"ليان\", \"سعيد\"],
          \"trigger_scene\": \"المشهد 47\",
          \"severity\": \"high\",
          \"recommendation\": \"إضافة مواجهة كلامية مبكرة تظهر دوافع سعيد\"
        },
        {
          \"pair\": [\"هالة\", \"نايف\"],
          \"trigger_scene\": \"المشهد 73\",
          \"severity\": \"medium\",
          \"recommendation\": \"توضيح سبب انعدام الثقة قبل المشهد 73\"
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "network_add_saeed_scene",
      "title": "إدراج مواجهة سعيد والمرشد",
      "description": "كتابة مشهد يوضح كيف يدفع المرشد القانوني سعيد للتصعيد.",
      "priority": "medium",
      "category": "character",
      "focus": "character",
      "estimatedEffortHours": 5,
      "owner": "Story Editor",
      "impact": "رفع وضوح دوافع الخصم وتحسين توازن الشبكة",
      "dependencies": [],
      "successCriteria": [
        "المشهد يحدد بوضوح مصدر سلطة سعيد",
        "يزيد كثافة الشبكة إلى 0.58"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 76,
    "characterDepth": 80,
    "dialogueAuthenticity": 74,
    "pacingControl": 71,
    "thematicResonance": 79,
    "originality": 73,
    "productionFeasibility": 72,
    "audienceAlignment": 78,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 67,
      "upperBound": 85
    },
    "qualitativeNotes": [
      "إعادة توزيع الحوارات على نايف تقوّي الشبكة.",
      "يوصى بتقليل اعتماد الفصل الثالث على مواجهة ثنائية فقط." 
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "network_scene_brainstorm",
        "description": "جلسة عصف ذهني لتطوير مواجهة سعيد والمرشد",
        "owner": "Lead Writer",
        "dueDate": "2025-01-26T10:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "تحديد موقع المشهد في المخطط",
          "الحصول على موافقة المخرج"
        ]
      }
    ],
    "upcoming": [
      {
        "id": "network_table_read",
        "description": "قراءة طاولة لاختبار ديناميكيات الفريق",
        "owner": "Director",
        "dueDate": "2025-02-01T13:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "تقييم توازن الحوار",
          "جمع تغذية راجعة حول التوتر الجماعي"
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "تحديث خريطة العلاقات",
        "date": "2025-02-05T09:30:00Z",
        "focus": "character",
        "notes": "تأكيد تأثير المشهد المضاف على الكثافة." 
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "رئيس غرفة الكتابة",
          "role": "Head Writer",
          "channel": "Slack",
          "cadence": "مرتين أسبوعياً"
        }
      ],
      "notes": "مشاركة نسخة الشبكة المحدثة في نهاية كل أسبوع." 
    }
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- حافظ على تسميات الشخصيات والمعرفات كما وردت في \`Character Deep Analyzer\` لضمان الدمج الآلي.
- زوّد وحدة \`Conflict Dynamics\` ببيانات \`relationshipTimelines\` لدعم تحليل تصاعد الصراع.
- تأكد من أن التوصيات لا تتعارض مع خطط وحدة \`Completion\` أو \`Scene Optimizer\` قبل التنفيذ.
`;
