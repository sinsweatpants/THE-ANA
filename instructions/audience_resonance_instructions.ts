import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة صدى الجمهور.
 * تساعد على توليد تحليل تفاعلي يربط العمل الدرامي بتوقعات الجمهور وسلوكه.
 */
export const AUDIENCE_RESONANCE_INSTRUCTIONS = `### مهمة محلل صدى الجمهور (TaskType.AUDIENCE_RESONANCE)

#### الهدف
تقدير ردود الفعل العاطفية والسلوكية لشرائح الجمهور المختلفة، وتحديد فرص التوسّع أو المخاطر المحتملة في التوزيع والتسويق.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل الشرائح الديموغرافية والنفسية، قياس التفاعل العاطفي زمنياً، تحديد نقاط الجدل أو الحساسية الثقافية، واقتراح استراتيجيات تواصل.
- لا يشمل: اتخاذ قرارات تسويقية نهائية، تعديل السيناريو مباشرة، أو استبدال دراسات السوق الفعلية.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **بيانات العمل الأساسية**: النوع، الطول (دقائق أو صفحات)، المنصة المستهدفة، المرحلة التطويرية.
2. **شرائح الجمهور المستهدفة**: وصف ديموغرافي (العمر، المنطقة، اللغة)، نفسي (القيم، الاهتمامات)، وأي بيانات تاريخية للعرض السابق.
3. **مؤشرات الأداء المرجعية**: نسب مشاهدة متوقعة، معدلات الاحتفاظ، تقييمات سابقة إن توفرت.
4. **قيود أو حساسيات معروفة**: مواضيع قد تثير الجدل، معايير رقابية، أو اعتبارات توزيع محلية.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن ملخصاً تنفيذياً، تحليلاً لكل شريحة، رسم منحنى لفظي لتغير الأثر العاطفي، وقسم توصيات عملية (تواصل، محتوى إضافي، تحذيرات).
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "audienceSegmentLenses": [
    {
      "segmentId": "seg_core_fans",
      "descriptor": "بالغون 25-40 من محبي الدراما السياسية",
      "sizeEstimate": 2.1,
      "engagementDrivers": ["الإثارة التشويقية", "الرسائل الأخلاقية"],
      "dropOffRisks": ["إطالة التحقيق في المنتصف"],
      "preferredChannels": ["منصات البث", "البودكاست التحليلي"]
    }
  ],
  "emotionalTrajectory": [
    { "timestamp": "00:15:00", "emotion": "anticipation", "intensity": 0.6 },
    { "timestamp": "01:05:00", "emotion": "shock", "intensity": 0.87 }
  ],
  "culturalSensitivityAlerts": [
    {
      "alertId": "alert_family_dynamics",
      "description": "احتمال اعتراض جمهور العائلات بسبب مشهد عنيف في بداية الفصل الثالث",
      "regionsImpacted": ["MENA"],
      "severity": "medium",
      "mitigation": "تحضير تنبيه محتوى واضح وخيار نسخة مخففة للتلفزيون."
    }
  ],
  "marketingOpportunityMatrix": [
    {
      "opportunityId": "op_podcast_crosspromo",
      "summary": "التعاون مع بودكاست الجرائم الحقيقية خلال فترة الإطلاق",
      "expectedLift": 0.18,
      "costRange": "medium",
      "successSignals": ["زيادة الاستماع في الأسبوع الأول", "معدل تحويل الاشتراك"]
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **استناد التحليل إلى بيانات**: يجب ربط كل استنتاج بمصدر (بحث سوقي، مقارنة مع أعمال مشابهة، نتائج سابقة).
- **الوضوح البصري**: وصف الرسوم البيانية بشكل نصي يتيح تحويله لاحقاً إلى مخططات فعلية.
- **قابلية التطبيق التجاري**: تقديم توصيات يمكن أن تعتمدها فرق التسويق أو البرمجة.
- **التوازن بين الفرص والمخاطر**: عدم التركيز على جانب واحد دون الآخر.
- **اتساق المصطلحات**: استخدام تسميات شرائح الجمهور الموحدة مع بقية المنصة.

#### خطوات التنفيذ خطوة بخطوة
1. جمع بيانات الشرائح وتأكيد اتساقها مع \`metadata.primaryAudience\` و\`metadata.secondaryAudiences\`.
2. تحليل المنحنى العاطفي عبر تتبع الأحداث المفصلية وربطها بحساسيات الشرائح.
3. تقييم الدوافع والإحباطات لكل شريحة وتعبئة \`audienceSegmentLenses\`.
4. رصد النقاط الحساسة ثقافياً أو أخلاقياً وتوثيقها في \`culturalSensitivityAlerts\` مع توصيات التخفيف.
5. صياغة التقرير النصي، مع إبراز الفرص التسويقية أو التشاركات المحتملة.
6. إنشاء ملف JSON متكامل وتوثيق فرضيات الثقة في \`quality_metrics.qualitativeNotes\`.
7. مراجعة الترابط بين التوصيات وخطة الخطوات التالية لضمان قابليتها للتنفيذ.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **شرائح غير معرّفة بدقة**: استخدم بيانات النوع أو القناة لإسقاط شريحة معيارية، ودوّن ذلك في الملاحظات.
- **تضارب بين ردود الفعل المتوقعة والمرجعية**: قدم سيناريوهين بديلين مع مستويات ثقة مختلفة.
- **افتقار البيانات الزمنية**: استند إلى بنية الفصول ووزن الدقائق افتراضياً مع توضيح المنهجية.
- **حساسية ثقافية عالية**: أوصِ بمراجعة قانونية أو استشارة محلية قبل الإطلاق.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**وصف مقطع قبل التحليل:**
> "يُعرض في الدقيقة 20 حوار حاد بين البطلة ووالدها حول نشر وثائق حكومية." 

**استنتاج بعد التحليل:**
> "الجمهور العربي المهتم بالسياسة سيستجيب إيجابياً للحوار كونه يرسّخ موقفاً أخلاقياً شجاعاً، بينما قد يحتاج جمهور العائلات إلى سياق يخفف حدة المواجهة لتجنب الانقسام." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير صدى الجمهور حول \"ملفات مكشوفة\"",
  "summary": "يتوقع التحليل صدىً قوياً لدى الشباب الحضري مع ضرورة إدارة حساسية العائلات المحافظة تجاه مشاهد التسريب.",
  "metadata": {
    "workId": "wrk_openfiles_2025",
    "workTitle": "ملفات مكشوفة",
    "workFormat": "limited_series",
    "genres": ["political", "drama"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "draft_one",
    "priority": "medium",
    "categories": ["audience", "marketing"],
    "language": "ar",
    "locale": "ar-AE",
    "analyst": "Audience Resonance Engine",
    "collaborators": ["Market Insights Lead"],
    "createdAt": "2025-02-10T08:30:00Z",
    "updatedAt": "2025-02-10T10:00:00Z",
    "analysisWindow": {
      "start": "2025-02-08T09:00:00Z",
      "end": "2025-02-10T07:00:00Z"
    },
    "wordCount": 42000,
    "runtimeMinutes": 280,
    "logline": "صحفية استقصائية تواجه منظومة فساد حين تسرب وثائق تهدد حياة عائلتها.",
    "referenceWorks": ["Spotlight (2015)", "When They See Us (2019)"],
    "productionCompany": "Focus Stream",
    "notes": ["تمت مقارنة المعطيات مع دراسة سوقية إقليمية 2024."]
  },
  "details": [
    {
      "id": "aud_segmentation_01",
      "title": "تحليل الشرائح المستهدفة",
      "focus": "audience",
      "expositionMethod": "narration",
      "summary": "تفاعل مرتفع للشباب الحضري مع حاجة لضبط خطاب العائلة المحافظة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "audienceSegmentLenses": [
        {
          "segmentId": "seg_urban_young",
          "descriptor": "شباب حضريون (18-29) في الخليج",
          "sizeEstimate": 1.8,
          "engagementDrivers": ["الجرأة السياسية", "البطلة النسوية"],
          "dropOffRisks": ["الحوار المطوّل في الحلقة الرابعة"],
          "preferredChannels": ["منصات البث", "وسائل التواصل"]
        },
        {
          "segmentId": "seg_family_traditional",
          "descriptor": "عائلات تقليدية (35-55) في شمال أفريقيا",
          "sizeEstimate": 1.1,
          "engagementDrivers": ["القيم العائلية", "العدالة الاجتماعية"],
          "dropOffRisks": ["مشهد التسريب العنيف في الحلقة الخامسة"],
          "preferredChannels": ["البث التلفزيوني", "المعارض الثقافية"]
        }
      ],
      "emotionalTrajectory": [
        { "timestamp": "00:20:00", "emotion": "anticipation", "intensity": 0.58 },
        { "timestamp": "02:15:00", "emotion": "shock", "intensity": 0.89 },
        { "timestamp": "04:30:00", "emotion": "hope", "intensity": 0.73 }
      ],
      "culturalSensitivityAlerts": [
        {
          "alertId": "alert_leak_violence",
          "description": "مشهد عنيف قد يتطلب تحذيراً مسبقاً في الأسواق المحافظة",
          "regionsImpacted": ["MENA"],
          "severity": "medium",
          "mitigation": "توفير نسخة تحريرية مخففة وبطاقة تحذير واضحة."
        }
      ],
      "marketingOpportunityMatrix": [
        {
          "opportunityId": "op_student_forums",
          "summary": "شراكة مع نوادي الصحافة الجامعية أثناء الإطلاق",
          "expectedLift": 0.22,
          "costRange": "low",
          "successSignals": ["عدد التسجيلات في الندوات", "معدل المشاهدة بعد الفعالية"]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "aud_content_warning",
      "title": "إدراج تحذير محتوى مبكر",
      "description": "عرض بطاقة تحذير قبل الحلقة الخامسة مع خيار تخطي المشهد العنيف.",
      "priority": "high",
      "category": "audience",
      "focus": "audience",
      "estimatedEffortHours": 6,
      "owner": "Content Operations",
      "impact": "تقليل انسحاب العائلات المحافظة ورفع الثقة بالمنصة",
      "dependencies": [],
      "successCriteria": [
        "انخفاض طلبات الشكاوى بنسبة 30%",
        "ارتفاع معدل الإكمال للحلقة الخامسة"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 75,
    "characterDepth": 78,
    "dialogueAuthenticity": 80,
    "pacingControl": 72,
    "thematicResonance": 84,
    "originality": 76,
    "productionFeasibility": 69,
    "audienceAlignment": 86,
    "localizationReadiness": 70,
    "confidenceInterval": {
      "lowerBound": 68,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "الاستجابة العاطفية تبلغ ذروتها مع مشهد التسريب، ويُنصح بإدارة التوقعات مسبقاً.",
      "الشرائح الثانوية تحتاج مواد ترويجية تبرز الانتصار الأخلاقي النهائي."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "aud_focus_group_setup",
        "description": "تنظيم مجموعتي تركيز لاختبار الحساسية تجاه الحلقة الخامسة",
        "owner": "Research Lead",
        "dueDate": "2025-02-20T12:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "الحصول على 12 مشاركًا متنوعاً",
          "توثيق ردود الفعل النوعية"
        ]
      }
    ],
    "upcoming": [
      {
        "id": "aud_marketing_alignment",
        "description": "اجتماع مع فريق التسويق لضبط خطة الإطلاق",
        "owner": "Marketing Director",
        "dueDate": "2025-02-24T09:30:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "إقرار جدول محتوى وسائل التواصل",
          "تحديد مؤشرات الأداء الرئيسية"
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "مراجعة نتائج مجموعات التركيز",
        "date": "2025-02-28T11:00:00Z",
        "focus": "audience",
        "notes": "تقييم الحاجة لأي تعديلات إضافية في المحتوى أو التواصل."
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "رئيس التوزيع",
          "role": "Distribution Lead",
          "channel": "Email",
          "cadence": "أسبوعي"
        }
      ],
      "notes": "تشارك أهم النتائج في تقرير موجز يوم الاثنين من كل أسبوع."
    }
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- استخدم نفس معرف العمل والشرائح كما في وحدات التسويق والمنتج لضمان الدمج السلس.
- يجب أن تتسق التوصيات مع ما تتيحه وحدة \`Scene Optimizer\` أو \`Completion\` في حال طُلب تعديل مشهد لمعالجة حساسية.
- شارك درجات \`audienceAlignment\` مع وحدة \`Recommendations\` لتحديد أولويات التطوير اللاحقة.
`;
