import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة تحليل الحوار الجنائي.
 * تركّز على فحص الاتساق، نسب الأقوال، واكتشاف الانحرافات الأسلوبية عبر الشخصيات.
 */
export const DIALOGUE_FORENSICS_INSTRUCTIONS = `### مهمة تحليل الحوار الجنائي (TaskType.DIALOGUE_FORENSICS)

#### الهدف
التدقيق في حوارات الشخصيات للكشف عن الانزلاقات الأسلوبية، أخطاء النسبة، التناقضات الشعورية، وأي إشارات لاحتمال إعادة الكتابة أو العطب التحريري.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل أصوات الشخصيات الأساسية، مراقبة تطور قاموسهم، توثيق الانحرافات، والتحقق من نسب الحوار إلى المتحدث الصحيح.
- يشمل: رصد أي اختلاف بين سياق المشهد والحوار المنطوق (زمن، معلومة، مشاعر).
- لا يشمل: كتابة حوار جديد أو تعديل النص مباشرة؛ بل تقديم توصيات واضحة لمعالجة الخلل.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص كامل**: سيناريو أو مسودة مع ترقيم الصفحات/الأسطر.
2. **تعريف الشخصيات**: أدوار، خلفيات لغوية، سمات صوتية متوقعة.
3. **سجل التطوير**: معلومات عن المسودات السابقة أو التغييرات التحريرية المعروفة (إن توفرت).
4. **سياسة الاتساق**: تعليمات حول اللهجات، مستويات اللغة، والحد الأقصى للمصطلحات التقنية.
5. **المشاهد ذات الأولوية**: قائمة بالمشاهد التي يُشتبه بوجود مشاكل حوارية فيها.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يحتوي على ملخص تشخيصي، جدول بالانحرافات لكل شخصية، تحليل للنسبة الحوارية، وتوصيات للمعالجة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "dialogueContinuity": {
    "characterId": "leila_main",
    "timeline": [
      { "scene": "sc_05", "page": 18, "tone": "حذر", "lexicalShift": 0.12 },
      { "scene": "sc_27", "page": 95, "tone": "غضب", "lexicalShift": 0.48 }
    ],
    "anomalies": [
      { "type": "sudden_formality", "location": "صفحة 96", "description": "انتقال مفاجئ للفصحى الكاملة" }
    ]
  },
  "voiceIntegrity": {
    "consistencyScore": 0.74,
    "lexicalBaseline": ["مصطلحات تقنية", "تشبيهات ضوئية"],
    "outlierLines": ["\"لن أبرحكم حتى تسلموا\""],
    "confidence": 0.68
  },
  "evidenceLedger": [
    {
      "id": "dlg_anom_12",
      "excerpt": "ليلى: يا فتاتي الصغيرة...",
      "location": "صفحة 97",
      "issueType": "anachronism",
      "severity": "medium",
      "recommendation": "استبدال العبارة بما يتسق مع الشخصية العسكرية"
    }
  ],
  "plausibilityChecks": {
    "emotionalAlignment": 0.7,
    "contextMatch": 0.8,
    "logicBreaks": ["المشهد 12 يكشف معلومة لا تعلمها الشخصية بعد"]
  },
  "attributionAudit": {
    "speakerLabels": [
      { "line": 342, "speaker": "ليلى" },
      { "line": 343, "speaker": "سامي" }
    ],
    "misattributionRisks": ["صفحة 73: خط الحوار منسوب خطأً لسامي بدلاً من ليلى"]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **الدقة الجنائية**: كل ملاحظة مدعومة بموقع محدد (صفحة/سطر) أو طابع زمني.
- **شمول الشخصيات**: تغطية جميع الشخصيات المحورية وتوثيق أنماطها.
- **وضوح التوصيات**: اقتراحات قصيرة وقابلة للتطبيق مرتبطة بمستوى خطورة.
- **تكامل الأدلة**: ربط أي انحرافات مع بيانات من وحدات أخرى (صوت الشخصية، الإيقاع).
- **الحياد**: عرض النتائج دون أحكام جمالية عامة؛ التركيز على الأدلة.

#### خطوات التنفيذ خطوة بخطوة
1. بناء خط زمني لحوار كل شخصية وتحديد نقاط التحول الأسلوبية.
2. مقارنة الخط الزمني بالخط الأساسي للشخصية وتعبئة \`voiceIntegrity\`.
3. تسجيل الأدلة في \`evidenceLedger\` مع تصنيف نوع الخلل ومستوى خطورته.
4. تقييم اتساق المشاعر والمعرفة في \`plausibilityChecks\`.
5. مراجعة نسب الحوار وتوثيق الأخطاء المحتملة في \`attributionAudit\`.
6. صياغة التقرير النصي مع جداول مختصرة لكل شخصية وخطة المعالجة.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` متكامل ومزامنته مع وحدات الصوت، الديناميكيات، والإنهاء.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **شخصيات قليلة الظهور**: سجل محدودية البيانات وأشر إلى الحاجة لتأكيد بشري.
- **مسودات متداخلة**: إذا ظهرت نسخ مختلفة للحوار، وضّح ذلك وحدد النسخة الأكثر اتساقاً.
- **لهجات متعددة للشخصية نفسها**: قيم الأسباب المحتملة (تطور درامي أو خطأ)، وقدم توصية لتثبيت الاختيار.
- **معلومات ناقصة عن المتحدث**: اقترح إضافة وصف مسرحي أو علامات توضيحية لتفادي اللبس.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقطع حواري قبل التحليل:**
> "ليلى: لن أبرحكم حتى تسلموا.\n> سامي: من متى تتحدثين بهذه الطريقة؟" (صفحة 97)

**فقرة من التقرير بعد التحليل:**
> "الصفحة 97 تكشف انزلاقاً لغوياً؛ ليلى، الضابطة الصارمة، تنتقل إلى صيغة فصحى تقليدية لا تتسق مع قاموسها. يوصى بإعادة الصياغة باللهجة الرسمية المستخدمة سابقاً أو تبرير التحول درامياً." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير تحليل الحوار الجنائي لمسودة \"خط الصدى\"",
  "summary": "تم رصد خمس انحرافات صوتية وثلاث حالات نسبة خاطئة تتطلب مراجعة تحريرية عاجلة.",
  "metadata": {
    "workId": "wrk_echo_line_2025",
    "workTitle": "خط الصدى",
    "workFormat": "series_pilot",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["dialogue", "consistency"],
    "language": "ar",
    "locale": "ar-SA",
    "analyst": "Dialogue Forensics Unit",
    "collaborators": ["Script Supervisor"],
    "createdAt": "2025-03-16T09:00:00Z",
    "updatedAt": "2025-03-16T11:10:00Z",
    "analysisWindow": {
      "start": "2025-03-15T07:30:00Z",
      "end": "2025-03-16T07:45:00Z"
    },
    "wordCount": 6400,
    "runtimeMinutes": 52,
    "logline": "فريق تحقيق صوتي يكشف جرائم عبر تتبع ترددات الأصداء في المدينة.",
    "referenceWorks": ["True Detective (2014)", "Mr. Robot (2015)"],
    "productionCompany": "Horizon Wave",
    "notes": ["تم تلقي تعليقات من قسم الإشراف النصي"]
  },
  "details": [
    {
      "id": "dialogue_forensics_scene27",
      "title": "مراجعة المشهد 27",
      "focus": "dialogue",
      "expositionMethod": "scene_analysis",
      "summary": "المشهد يحتوي على انحراف لغوي ونسبة خاطئة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "dialogueContinuity": {
        "characterId": "leila_main",
        "timeline": [
          { "scene": "sc_05", "page": 18, "tone": "حذر", "lexicalShift": 0.1 },
          { "scene": "sc_27", "page": 95, "tone": "غضب", "lexicalShift": 0.46 }
        ],
        "anomalies": [
          { "type": "formal_register", "location": "صفحة 97", "description": "التحول إلى لغة فصحى تقليدية" }
        ]
      },
      "voiceIntegrity": {
        "consistencyScore": 0.72,
        "lexicalBaseline": ["مصطلحات تقنية", "تشبيهات ضوئية"],
        "outlierLines": ["لن أبرحكم"],
        "confidence": 0.67
      },
      "evidenceLedger": [
        {
          "id": "dlg_anom_12",
          "excerpt": "ليلى: لن أبرحكم حتى تسلموا.",
          "location": "صفحة 97",
          "issueType": "register_shift",
          "severity": "medium",
          "recommendation": "استبدال الصيغة بالفصحى الحديثة أو اللهجة الرسمية المستخدمة سابقاً"
        },
        {
          "id": "dlg_attr_04",
          "excerpt": "سامي: التقرير وصل؟",
          "location": "صفحة 98",
          "issueType": "misattribution",
          "severity": "high",
          "recommendation": "ينبغي نسب السطر لليلى وفق السياق"
        }
      ],
      "plausibilityChecks": {
        "emotionalAlignment": 0.68,
        "contextMatch": 0.78,
        "logicBreaks": ["ليلى تشير إلى معلومات لم تتلقها بعد"]
      },
      "attributionAudit": {
        "speakerLabels": [
          { "line": 340, "speaker": "ليلى" },
          { "line": 341, "speaker": "سامي" }
        ],
        "misattributionRisks": ["صفحة 98: تبديل الأسماء في برنامج الكتابة"]
      }
    }
  ],
  "recommendations": [
    {
      "id": "dialogue_cleanup_formality",
      "title": "تعديل السجل اللغوي للمشهد 27",
      "description": "إعادة صياغة جمل ليلى لتتماشى مع قاموسها العسكري المستخدم سابقاً.",
      "priority": "high",
      "category": "dialogue",
      "focus": "consistency",
      "estimatedEffortHours": 4,
      "owner": "Script Editor",
      "impact": "استعادة مصداقية الشخصية ووضوح النبرة",
      "dependencies": ["character_voice_signoff"],
      "successCriteria": [
        "اختفاء الإنذار من تحليل الصوت",
        "اعتماد النسخة المنقحة من المشهد"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 79,
    "characterDepth": 83,
    "dialogueAuthenticity": 70,
    "pacingControl": 77,
    "thematicResonance": 81,
    "originality": 72,
    "productionFeasibility": 90,
    "audienceAlignment": 82,
    "localizationReadiness": 73,
    "confidenceInterval": {
      "lowerBound": 68,
      "upperBound": 85
    },
    "qualitativeNotes": [
      "المشهد 27 يحتاج ضبطاً لغوياً",
      "يوصى بمراجعة نسب الحوار في المشهد 9"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "dialogue_forensics_followup",
        "description": "مراجعة المشاهد المتأثرة بعد التعديلات للتأكد من زوال الانحراف",
        "owner": "Script Supervisor",
        "dueDate": "2025-03-20T09:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "قائمة تحقق موقعة",
          "تأكيد من وحدة صوت الشخصية"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
