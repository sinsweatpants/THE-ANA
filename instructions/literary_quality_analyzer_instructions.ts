import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محلل الجودة الأدبية.
 * تضمن تقييم الأصالة، البلاغة، التماسك، والأثر العاطفي للنص مع توصيات نوعية دقيقة.
 */
export const LITERARY_QUALITY_ANALYZER_INSTRUCTIONS = `### وحدة محلل الجودة الأدبية (TaskType.LITERARY_QUALITY_ANALYZER)

#### الهدف
قياس القيمة الأدبية للنص عبر تحليل الأصالة، جماليات اللغة، قوة البنية السردية، وعمق الأثر العاطفي.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تقييم الأسلوب السردي، المقارنة مع أعمال مرجعية، رصد الكليشيهات، وتحليل الأجهزة البلاغية.
- يشمل: تقديم توصيات لتحسين اللغة أو البنية دون إعادة كتابة كاملة.
- لا يشمل: تعديل النص مباشرة أو إضافة محتوى إبداعي جديد؛ يقتصر على التحليل والتوجيه.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص الكامل**: نسخة قابلة للبحث مع ترقيم الصفحات.
2. **معلومات عن النوع الأدبي**: الرواية، السيناريو، الحلقة، مع الإشارة إلى الأسلوب المرجو (مثلاً شعرية، واقعية).
3. **المراجع المقارنة**: أعمال أو كتّاب يُستهدف الاقتراب من مستواهم أو تجاوزهم.
4. **الجمهور المستهدف**: لتحديد مستوى التعقيد اللغوي المناسب.
5. **قيود خاصة**: حدود زمن القراءة، متطلبات منصة النشر، أو حساسيات لغوية.

#### المخرجات المتوقعة
- **نص تقريري منسق**: ملخص تنفيذي، تحليل الأصالة، تقييم البلاغة، مصفوفة التماسك، توصيات تحسين.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "literaryTexture": {
    "proseVoiceDescriptors": ["شاعري مكثف", "إيقاع متدرج"],
    "dictionRange": { "averageWordLength": 4.8, "rareWordRatio": 0.22 },
    "syntaxVariety": 0.76,
    "figurativeDevices": [
      { "device": "استعارة", "frequency": 0.18, "effectiveness": 0.8 }
    ]
  },
  "originalityBenchmarks": {
    "plotScore": 0.72,
    "characterScore": 0.68,
    "deviceScore": 0.81,
    "comparativeReferences": ["أعمال رضوى عاشور", "لغز تشيسترتون"],
    "clicheAlerts": [
      { "element": "البطل المنعزل في المطر", "location": "صفحة 34", "impact": "reduces_surprise" }
    ]
  },
  "cohesionMatrix": {
    "structureScore": 0.83,
    "transitionFluidity": 0.74,
    "continuityIssues": ["تكرار صورة المرايا مرتين في الصفحات 40-41"],
    "narrativeModes": ["سرد داخلي", "حوار فلسفي"]
  },
  "emotionalArc": {
    "dominantEmotions": ["قلق", "أمل"],
    "arcShape": [
      { "phase": "افتتاح", "emotion": "فضول", "intensity": 0.5 },
      { "phase": "ذروة", "emotion": "توتر", "intensity": 0.88 }
    ],
    "peakMoments": [
      { "location": "صفحة 78", "description": "اعتراف البطل أمام المرآة" }
    ]
  },
  "qualityAlerts": [
    {
      "id": "lit_register_shift",
      "category": "language",
      "severity": "medium",
      "description": "انتقال مفاجئ إلى لغة عامية في مشهد رسمي",
      "recommendation": "تعديل السجل اللغوي للحفاظ على التماسك"
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **عمق التحليل**: ربط كل ملاحظة بأمثلة محددة من النص.
- **اتساق القياسات**: تطابق الدرجات الرقمية مع الأدلة النوعية.
- **وضوح اللغة**: تقرير عربي فصيح مع مصطلحات نقدية دقيقة.
- **قابلية التطبيق**: توصيات مفهومة تتضمن سبب التأثير وطريقة المعالجة.
- **تكامل المنظور**: مراعاة أثر الجودة الأدبية على بقية الوحدات (الصوت، الإيقاع، الجمهور).

#### خطوات التنفيذ خطوة بخطوة
1. قراءة النص واستيعاب صوته العام وتوثيقه في \`literaryTexture\`.
2. تقييم الأصالة مقابل المراجع وتعبئة \`originalityBenchmarks\`.
3. تحليل التماسك البنيوي وتسجيل الملاحظات في \`cohesionMatrix\`.
4. رسم الرحلة العاطفية وإدخال البيانات في \`emotionalArc\`.
5. تجميع الإنذارات والتوصيات في \`qualityAlerts\`.
6. صياغة التقرير النصي مع توثيق الأدلة والاقتباسات.
7. إعداد كائن \`AdvancedScreenplayModuleResult\` مع توصيات متناسقة مع وحدات أخرى.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **نص قصير جداً**: ركّز على تحليل اللغة والصور بدلاً من البنية الطويلة ودوّن محدودية التقييم.
- **لغة عامية بالكامل**: قيّمها وفق معايير الأصالة والتماسك مع الجمهور المستهدف دون فرض الفصحى.
- **أعمال تجريبية بلا حبكة واضحة**: ركّز على التجربة الأسلوبية ووضّح معاييرك بوضوح.
- **تشابه كبير مع عمل معروف**: أشر إلى المخاطر القانونية/الإبداعية واقترح مسارات التفريق.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف قبل التحليل:**
> "ظل الظل يبتلع أسماءهم حتى لم يبق إلا الهمس." (صفحة 23)

**مقتطف من التقرير بعد التحليل:**
> "الجملة تستثمر التكرار ('ظل الظل') لتوليد أثر إيقاعي، لكن استخدام كلمة 'الهمس' دون تحديد الفاعل يقلل من وضوح الصورة. يُقترح تعزيز الحسية عبر إدراج صوت محدد." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير الجودة الأدبية لمسودة \"ظلال الممر\"",
  "summary": "يوازن العمل بين لغة شاعرية وأصالة متوسطة مع الحاجة لضبط السجل اللغوي في المشاهد الرسمية.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "thriller"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["literary", "style"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Literary Quality Analyzer",
    "collaborators": ["Senior Editor"],
    "createdAt": "2025-05-12T09:30:00Z",
    "updatedAt": "2025-05-12T11:10:00Z",
    "analysisWindow": {
      "start": "2025-05-11T07:00:00Z",
      "end": "2025-05-12T07:20:00Z"
    },
    "wordCount": 5600,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["Season of Migration to the North", "Mindhunter (2017)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["تمت مقارنة النبرة بأعمال رضوى عاشور"]
  },
  "details": [
    {
      "id": "literary_review_01",
      "title": "تحليل اللغة والتماسك",
      "focus": "literary",
      "expositionMethod": "style_analysis",
      "summary": "لغة شاعرية مع حاجة لتثبيت السجل الرسمي في بعض المشاهد.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "literaryTexture": {
        "proseVoiceDescriptors": ["شاعري مكثف", "تصوير بصري"],
        "dictionRange": { "averageWordLength": 4.9, "rareWordRatio": 0.24 },
        "syntaxVariety": 0.78,
        "figurativeDevices": [
          { "device": "استعارة", "frequency": 0.2, "effectiveness": 0.82 }
        ]
      },
      "originalityBenchmarks": {
        "plotScore": 0.74,
        "characterScore": 0.69,
        "deviceScore": 0.8,
        "comparativeReferences": ["رضوى عاشور", "أعمال باتريشيا هايسميث"],
        "clicheAlerts": [
          { "element": "التحول عند المطر", "location": "صفحة 45", "impact": "moderate" }
        ]
      },
      "cohesionMatrix": {
        "structureScore": 0.85,
        "transitionFluidity": 0.76,
        "continuityIssues": ["تكرار صورة المرايا مرتين في الصفحات 40-41"],
        "narrativeModes": ["سرد داخلي", "حوار"]
      },
      "emotionalArc": {
        "dominantEmotions": ["قلق", "أمل"],
        "arcShape": [
          { "phase": "افتتاح", "emotion": "فضول", "intensity": 0.52 },
          { "phase": "ذروة", "emotion": "توتر", "intensity": 0.9 }
        ],
        "peakMoments": [
          { "location": "صفحة 78", "description": "اعتراف نور أمام المرآة" }
        ]
      },
      "qualityAlerts": [
        {
          "id": "lit_register_shift",
          "category": "language",
          "severity": "medium",
          "description": "انتقال إلى عامية كاملة في المشهد 34",
          "recommendation": "موازنة السجل عبر دمج مصطلحات فصحى"
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "literary_adjust_register",
      "title": "ضبط السجل اللغوي للمشهد 34",
      "description": "إعادة صياغة الحوار لتفادي الانتقال المفاجئ إلى العامية الصرفة.",
      "priority": "medium",
      "category": "literary",
      "focus": "language",
      "estimatedEffortHours": 6,
      "owner": "Lead Writer",
      "impact": "رفع التماسك اللغوي والحفاظ على الهوية الأسلوبية",
      "dependencies": ["dialogue_coach_review"],
      "successCriteria": [
        "انخفاض مؤشر الانحراف اللغوي إلى أقل من 0.2",
        "موافقة المحرر الأدبي"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 85,
    "characterDepth": 83,
    "dialogueAuthenticity": 79,
    "pacingControl": 80,
    "thematicResonance": 88,
    "originality": 77,
    "productionFeasibility": 72,
    "audienceAlignment": 82,
    "localizationReadiness": 75,
    "confidenceInterval": {
      "lowerBound": 71,
      "upperBound": 87
    },
    "qualitativeNotes": [
      "اللغة متينة وتحتاج ضبطاً طفيفاً",
      "المجازات البصرية فعالة"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "literary_sync_voice",
        "description": "مراجعة مشتركة مع وحدة صوت الشخصية لضمان الاتساق اللغوي",
        "owner": "Story Editor",
        "dueDate": "2025-05-16T09:30:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "تقرير مراجعة موحد",
          "تثبيت قائمة المصطلحات"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
