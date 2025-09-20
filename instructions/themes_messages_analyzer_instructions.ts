import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة تحليل الموضوعات والرسائل.
 * تهدف إلى تفكيك الثيمات، الرسائل المعلنة والضمنية، وقياس عمقها وتأثيرها الثقافي.
 */
export const THEMES_MESSAGES_ANALYZER_INSTRUCTIONS = `### وحدة محلل الموضوعات والرسائل (TaskType.THEMES_MESSAGES_ANALYZER)

#### الهدف
تحديد الموضوعات المركزية والرسائل الضمنية والفلسفية، تقييم اتساقها عبر السرد، وقياس أثرها على الجمهور مع تقديم توصيات لتعزيز الوضوح أو التوازن.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل الموضوعات الرئيسية والفرعية، الرسائل المباشرة والمخفية، الروابط الفلسفية، وتأثيرها الثقافي.
- يشمل: مقارنة الرسائل مع توقعات الجمهور المستهدف ومعايير المنصة.
- لا يشمل: إصدار أحكام أخلاقية خارجية، أو تعديل النص مباشرةً دون تنسيق مع الوحدات الأخرى.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **نص أو سيناريو كامل** مع ترقيم واضح أو مخطط مشاهد شامل.
2. **ملاحظات المؤلف أو المنتج** حول الرسائل المقصودة أو الموضوعات الأساسية.
3. **بيانات الجمهور والمنصة**: التصنيف الرقابي، المناطق المستهدفة، اعتبارات ثقافية.
4. **أبحاث أو مراجع** عن الموضوعات المثارة (دراسات، مقالات) عند الحاجة لتقييم الحساسية.
5. **سياق تطوير العمل**: نسخة المسودة، التغييرات السابقة في الموضوعات أو الرسائل.

#### المخرجات المتوقعة
- **نص تقريري منسق**: أقسام (ملخص الموضوعات، تحليل الرسائل، العمق الفلسفي، المخاطر الثقافية، توصيات التعديل، خارطة التكامل) مع جداول ومخططات نصية.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "mainThemesExtractor": [
    {
      "themeName": "الحرية مقابل الأمان",
      "description": "كيف يتعامل النص مع الموازنة بين الخصوصية والأمن العام",
      "keyExamples": [
        { "reference": "صفحة 18", "excerpt": "حوار ليان مع مسؤول الأمن", "confidence": 0.82 }
      ],
      "emotionalTone": "توتر أخلاقي",
      "audienceAlignment": 0.86
    }
  ],
  "messagesMatrix": [
    {
      "messageType": "explicit",
      "statement": "الفساد لا يختبئ خلف الشعارات",
      "deliveryChannel": "حوار",
      "supportingScenes": ["Scene_22"],
      "impactScore": 0.78
    },
    {
      "messageType": "implicit",
      "statement": "البيانات الشخصية سلاح ذو حدين",
      "deliveryChannel": "بناء بصري",
      "supportingScenes": ["Scene_31", "Scene_40"],
      "impactScore": 0.83
    }
  ],
  "philosophicalDepthAnalyzer": {
    "identifiedPhilosophicalDimensions": ["الأخلاق التطبيقية", "مسؤولية الفرد"],
    "discussionOfDepth": "يوازن العمل بين نقد السلطة وأسئلة الضمير الفردي من خلال صراع ليان.",
    "relatedPhilosophicalConcepts": ["العقد الاجتماعي", "أخلاقيات التكنولوجيا"]
  },
  "culturalSensitivityReview": [
    {
      "topic": "الرقابة الحكومية",
      "riskLevel": "medium",
      "regionsAffected": ["الخليج"],
      "mitigation": "إضافة تنويه يوضح أن الأحداث تخيلية"
    }
  ],
  "deliveryConsistency": {
    "actBreakdown": [
      { "act": 1, "messageDensity": 0.6 },
      { "act": 2, "messageDensity": 0.8 },
      { "act": 3, "messageDensity": 0.7 }
    ],
    "contradictions": [
      { "description": "رسالة الثقة في الفريق تتعارض مع خيانة أحد الأعضاء", "resolution": "تأكيد ندم الشخصية لاحقاً" }
    ],
    "reinforcementOpportunities": [
      "إضافة مونتاج قصير يُظهر أثر تسريب البيانات على عائلات متعددة"
    ]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **وضوح الرسائل**: تحديد كل رسالة وتوثيق قناة إيصالها بدقة.
- **عمق التحليل**: ربط الموضوعات بمفاهيم فلسفية أو اجتماعية موثقة.
- **التوازن الثقافي**: تقييم المخاطر المحتملة وتقديم حلول واقعية.
- **قابلية التنفيذ**: توصيات محددة قابلة للتطبيق ضمن جدول التطوير.
- **التكامل الداخلي**: لا تناقض بين الموضوعات المختلفة، ويتم توثيق أي تعارض مع خطة معالجته.

#### خطوات التنفيذ خطوة بخطوة
1. مراجعة النص وجمع الملاحظات وتسجيل البيانات في \`metadata\`.
2. استخراج الموضوعات الرئيسية والفرعية وتوثيقها في \`mainThemesExtractor\` مع الأمثلة.
3. بناء \`messagesMatrix\` بتصنيف الرسائل إلى صريحة وضمنية وربطها بمشاهد محددة.
4. تحليل العمق الفلسفي وتوثيقه في \`philosophicalDepthAnalyzer\` مع المفاهيم المرجعية.
5. تقييم الحساسية الثقافية وتوثيق النتائج في \`culturalSensitivityReview\`.
6. فحص اتساق إيصال الرسائل عبر الفصول وتعبئة \`deliveryConsistency\`.
7. إعداد التقرير النصي المنسق مع توصيات وتحديد أولويات التنفيذ.
8. إنشاء كائن \`AdvancedScreenplayModuleResult\` والتأكد من توافقه مع الوحدات الأخرى.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **رسائل متناقضة**: إذا ظهرت رسائل متضاربة، أدرجها في قسم التناقضات مع توصية لمعالجة التناقض.
- **نقص الأدلة**: في حال عدم توفر مشاهد تدعم رسالة مزعومة، أشر إلى ذلك وأوصِ بإضافة مادة داعمة أو إزالة الرسالة.
- **حساسية ثقافية عالية**: أوصِ باستشارة خبراء ثقافيين ودوّن الحاجة في \`next_steps\`.
- **رسائل غير واضحة للجمهور العالمي**: اقترح تعديلات لغوية أو بصرية وتوثيقها في التوصيات.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من التقرير:**
> \"رسالة \"الشفافية مسؤولية مشتركة\" تصل عبر الحوار المباشر بين ليان وفريقها، لكنها تتعرض للتشويش في المشهد 40 بسبب نبرة ساخره من أحد الأعضاء. يُنصح بتعديل النبرة لإبقاء الرسالة متسقة.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محلل الموضوعات والرسائل حول \"ظلال الميناء\"",
  "summary": "يوثق التقرير اتساق ثيمة الحرية مقابل الأمان مع رسائل صريحة حول محاسبة الفساد ورسائل ضمنية تحذر من تسليح البيانات.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "political"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["theme", "messages"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Theme & Message Analyst",
    "collaborators": ["Cultural Consultant"],
    "createdAt": "2025-03-02T13:00:00Z",
    "updatedAt": "2025-03-02T14:15:00Z",
    "analysisWindow": {
      "start": "2025-03-01T12:00:00Z",
      "end": "2025-03-02T12:45:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تفضح شركة أمن فاسدة وتوازن بين حماية عائلتها وفضح الحقيقة.",
    "referenceWorks": ["Snowden (2016)", "The Report (2019)"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تم الاطلاع على نسخة فبراير مع تعليقات المنتج"]
  },
  "details": [
    {
      "id": "themes_messages_core",
      "title": "تحليل الموضوعات والرسائل",
      "focus": "themes_messages",
      "expositionMethod": "theme_matrix",
      "summary": "تدعم ثيمة الحرية مقابل الأمان رسائل المساءلة والشفافية مع تحذيرات حول تسليح البيانات.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "mainThemesExtractor": [
        {
          "themeName": "الحرية مقابل الأمان",
          "description": "يتناول الصراع بين خصوصية الأفراد ومتطلبات الأمن الوطني",
          "keyExamples": [
            { "reference": "صفحة 18", "excerpt": "ليان ترفض الصفقة", "confidence": 0.82 }
          ],
          "emotionalTone": "توتر أخلاقي",
          "audienceAlignment": 0.86
        },
        {
          "themeName": "الثقة داخل الفريق",
          "description": "يتساءل النص عن حدود الثقة بين أعضاء الفريق",
          "keyExamples": [
            { "reference": "صفحة 64", "excerpt": "خلاف ليان مع شريكها", "confidence": 0.74 }
          ],
          "emotionalTone": "ريبة",
          "audienceAlignment": 0.7
        }
      ],
      "messagesMatrix": [
        {
          "messageType": "explicit",
          "statement": "الفساد لا يختبئ خلف الشعارات",
          "deliveryChannel": "حوار",
          "supportingScenes": ["Scene_22"],
          "impactScore": 0.78
        },
        {
          "messageType": "implicit",
          "statement": "البيانات الشخصية سلاح ذو حدين",
          "deliveryChannel": "بناء بصري",
          "supportingScenes": ["Scene_31", "Scene_40"],
          "impactScore": 0.83
        }
      ],
      "philosophicalDepthAnalyzer": {
        "identifiedPhilosophicalDimensions": ["الأخلاق التطبيقية", "مسؤولية الفرد"],
        "discussionOfDepth": "المشهد 40 يعرض صراعاً أخلاقياً صامتاً بين الواجب والولاء",
        "relatedPhilosophicalConcepts": ["العقد الاجتماعي", "أخلاقيات التكنولوجيا"]
      },
      "culturalSensitivityReview": [
        {
          "topic": "الرقابة الحكومية",
          "riskLevel": "medium",
          "regionsAffected": ["الخليج"],
          "mitigation": "إضافة تنويه يوضح تخيّل الأحداث"
        }
      ],
      "deliveryConsistency": {
        "actBreakdown": [
          { "act": 1, "messageDensity": 0.6 },
          { "act": 2, "messageDensity": 0.8 },
          { "act": 3, "messageDensity": 0.72 }
        ],
        "contradictions": [
          { "description": "سخرية أحد أعضاء الفريق تقلل من جدية الرسالة", "resolution": "تعديل النبرة في المشهد 40" }
        ],
        "reinforcementOpportunities": [
          "إضافة مونتاج قصير لضحايا التسريبات"
        ]
      }
    }
  ],
  "recommendations": [
    {
      "id": "message_clarity_scene40",
      "title": "تعزيز وضوح الرسالة في المشهد 40",
      "description": "تعديل نبرة أحد أعضاء الفريق لتفادي تقويض رسالة الشفافية المشتركة.",
      "priority": "high",
      "category": "message",
      "focus": "dialogue",
      "estimatedEffortHours": 3,
      "owner": "Lead Writer",
      "impact": "يحافظ على اتساق الرسالة الأساسية",
      "dependencies": ["scene_optimizer_update"],
      "successCriteria": ["اعتماد النسخة الجديدة", "قياس أثر إيجابي في اختبار الجمهور"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 87,
    "characterDepth": 82,
    "dialogueAuthenticity": 84,
    "pacingControl": 80,
    "thematicResonance": 91,
    "originality": 75,
    "productionFeasibility": 83,
    "audienceAlignment": 88,
    "localizationReadiness": 81,
    "confidenceInterval": {
      "lowerBound": 74,
      "upperBound": 90
    },
    "qualitativeNotes": [
      "الرسائل متسقة وتدعم الثيمة الرئيسية",
      "يجب مراقبة الحساسية السياسية في الأسواق الخليجية"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "consult_cultural_expert",
        "description": "تنسيق اجتماع مع المستشار الثقافي لمراجعة معالجة الرقابة الحكومية.",
        "owner": "Cultural Consultant",
        "dueDate": "2025-03-04T11:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["توثيق التوصيات", "إدراجها في المسودة القادمة"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك نتائج \`messagesMatrix\` مع \`RECOMMENDATIONS_GENERATOR\` و\`CREATIVE\` لضمان اتساق الرسائل التسويقية.
- زود \`AUDIENCE_RESONANCE\` و\`TARGET_AUDIENCE_ANALYZER\` بالرسائل الأساسية لتقييم الأثر العاطفي.
- نسّق مع \`SCENE_GENERATOR\` و\`SCENE_OPTIMIZER\` لتطبيق التوصيات الخاصة بالحوار أو البناء البصري.
- حدث \`metadata.categories\` و\`next_steps\` لضمان ربط النتائج في لوحة \`INTEGRATED\` المركزية.
`;
