import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محلل الحوار المتطور.
 * تضمن تقييم العمق الدرامي، الإيقاع، والفرادة الصوتية للحوار مع توصيات قابلة للتنفيذ.
 */
export const DIALOGUE_ADVANCED_ANALYZER_INSTRUCTIONS = `### وحدة محلل الحوار المتطور (TaskType.DIALOGUE_ADVANCED_ANALYZER)

#### الهدف
تقديم تشخيص شامل لجودة الحوار، قدرته على كشف الشخصية، فعاليته في دفع الحبكة، ومدى طبيعته أو انزلاقه إلى الكليشيه.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل الأصوات المتمايزة، البنية الإيقاعية للحوار، الكشف عن النصوص الفرعية، وتحديد اللحظات غير الطبيعية أو المبتذلة.
- يشمل: مقارنة الحوار بالمعايير النوعية أو الأعمال المرجعية عند توفرها.
- لا يشمل: إعادة كتابة كاملة للمشاهد أو ابتكار حوار جديد؛ يمكن تقديم مقترحات صياغية مختصرة في التوصيات فقط.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص أو السيناريو**: نسخة كاملة قابلة للبحث مع ترقيم الصفحات أو الطوابع الزمنية.
2. **قائمة الشخصيات**: أسماء، أدوار درامية، ملامح لغوية سابقة إن وجدت.
3. **سياق الحبكة**: ملخص موجز لكل فصل أو حلقة لتحديد وظيفة الحوار.
4. **المراجع الأسلوبية**: أعمال أو أمثلة لحوار يعتبر معياراً للاقتداء أو للمقارنة.
5. **قيود خاصة**: حد أقصى لطول الحوار، متطلبات تصنيف عمري، أو تعليمات حول اللهجات والمصطلحات.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن ملخصاً تنفيذياً، تحليل التوزيع الصوتي، منحنى التوتر الحواري، قائمة الإشكالات، وتوصيات التحسين.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "dialogueHeatmap": {
    "scenes": [
      {
        "sceneId": "sc_14",
        "location": "صفحة 62",
        "intensity": 0.83,
        "tension": 0.9,
        "comicRelief": 0.1,
        "notes": "مواجهة محورية بين البطل والخصم"
      }
    ],
    "pacingIssues": ["حوار طويل في المشهد 9 يبطئ الإيقاع"],
    "silenceUtilization": 0.45
  },
  "voiceDifferentiation": {
    "characters": [
      {
        "name": "ليلى",
        "uniqueLexicon": ["استعارات ضوئية", "جمل استفهامية"],
        "averageSentenceLength": 12,
        "voiceScore": 0.78,
        "sampleLines": ["ليلى: الضوء الوحيد الذي أخشاه هو القادم من الداخل."]
      }
    ],
    "overlapWarnings": ["صوت سامي وليلى متشابهان في الصفحات 40-44"]
  },
  "subtextMatrix": [
    {
      "id": "subtext_07",
      "speakers": ["سامي", "ليلى"],
      "excerpt": "سامي: الباب مفتوح إن أردت المغادرة.",
      "literalIntent": "إتاحة خيار الخروج",
      "hiddenIntent": "اختبار الولاء",
      "emotionalCharge": 0.7,
      "riskLevel": "medium"
    }
  ],
  "interactionDynamics": {
    "turnTaking": {
      "averageTurnsPerScene": 18,
      "interruptionsPerScene": 3,
      "dominanceRatio": { "initiator": 0.6, "responder": 0.4 }
    },
    "conflictLevel": 0.75,
    "supportLevel": 0.35,
    "listeningIndicators": ["إعادة صياغة الأفكار", "صمت دال"]
  },
  "qualitySignals": {
    "naturalism": 0.72,
    "memorability": 0.68,
    "quotableLines": ["لن أفرّط في الحقيقة ولو صارت وحيدة"],
    "flaggedCliches": [""],
    "revisionPriority": "high"
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **تميّز الأصوات**: تباين واضح في المفردات والإيقاع بين الشخصيات الرئيسية.
- **الفعالية الدرامية**: يدفع الحوار الحبكة أو يكشف الشخصية دون إطالة غير ضرورية.
- **الطبيعية والواقعية**: تتوافق الجمل مع سياق الزمن والمكان والشخصيات.
- **التوازن الإيقاعي**: توزيع مناسب بين الصمت، الأسئلة، والجمل الطويلة/القصيرة.
- **الذاكرة والقابلية للاقتباس**: وجود جمل محورية يمكنها البقاء في الذاكرة أو الحمل الترويجي.

#### خطوات التنفيذ خطوة بخطوة
1. استخراج خريطة المشاهد الحوارية وتقدير كثافة الحوار في كل مشهد.
2. تحليل صوت كل شخصية رئيسية وتعبئة \`voiceDifferentiation\` مع أمثلة داعمة.
3. دراسة النصوص الفرعية والنيات غير المعلنة وتوثيقها في \`subtextMatrix\`.
4. تقييم ديناميكيات التفاعل (التناوب، المقاطعات، مستويات الصراع) في \`interactionDynamics\`.
5. تسجيل مؤشرات الجودة والإنذارات في \`qualitySignals\` مع تحديد الأولويات.
6. صياغة التقرير النصي بالملخص والنتائج التفصيلية وتوصيات المعالجة.
7. إنتاج كائن \`AdvancedScreenplayModuleResult\` متكامل وتأكيد التوافق مع وحدات الصوت، الديناميكيات، والإنتاجية.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **حوار قصير جداً**: ركّز على تحليل الكثافة والإيحاء بدلاً من الكمية، واذكر محدودية البيانات.
- **اللهجات المختلطة**: وثّق الاستعمال المتداخل وحدد المخاطر على الاتساق أو الفهم.
- **مشاهد حركة بدون حوار**: قيّم استخدام الصمت والنظرات وأثرها على الإيقاع.
- **كليشيهات مترجمة حرفياً**: أشر إلى الحاجة لإعادة صياغة وتنسيق مع وحدة التكييف اللغوي.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف حواري قبل التحليل:**
> "سامي: لن ننجو بهذه الخطة.\n> ليلى: نحن مضطرون للمحاولة." (صفحة 44)

**فقرة من التقرير بعد التحليل:**
> "المشهد 44 يظهر تبادلاً قصيراً يخلو من التفرد الصوتي؛ كلا الطرفين يستخدم جمل قصيرة متشابهة. يوصى بإبراز اختلاف النبرة عبر إدخال استعارة ضوئية لليلى وجملة ذات بناء معقد لسامي." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محلل الحوار المتطور لمسودة \"خط الصدى\"",
  "summary": "يركز التقرير على رفع تميّز الأصوات وتخفيف المقاطع المبتذلة في الفصل الثاني.",
  "metadata": {
    "workId": "wrk_echo_line_2025",
    "workTitle": "خط الصدى",
    "workFormat": "series_pilot",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["dialogue", "character"],
    "language": "ar",
    "locale": "ar-SA",
    "analyst": "Advanced Dialogue Analyzer",
    "collaborators": ["Dialogue Coach"],
    "createdAt": "2025-03-14T09:00:00Z",
    "updatedAt": "2025-03-14T11:30:00Z",
    "analysisWindow": {
      "start": "2025-03-13T07:00:00Z",
      "end": "2025-03-14T07:15:00Z"
    },
    "wordCount": 6400,
    "runtimeMinutes": 52,
    "logline": "فريق تحقيق صوتي يكشف جرائم عبر تتبع ترددات الأصداء في المدينة.",
    "referenceWorks": ["True Detective (2014)", "Mr. Robot (2015)"],
    "productionCompany": "Horizon Wave",
    "notes": ["المشهد 14 أعيدت كتابته سابقاً"]
  },
  "details": [
    {
      "id": "dialogue_focus_scene14",
      "title": "تحليل المواجهة في المشهد 14",
      "focus": "dialogue",
      "expositionMethod": "scene_analysis",
      "summary": "المشهد يحتوي على ذروة حوارية تحتاج إلى موازنة بين التوتر والهدوء.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "dialogueHeatmap": {
        "scenes": [
          {
            "sceneId": "sc_14",
            "location": "صفحة 62",
            "intensity": 0.85,
            "tension": 0.92,
            "comicRelief": 0.12,
            "notes": "يتصاعد الجدل حول تسريب الملفات"
          }
        ],
        "pacingIssues": ["تكرار السؤال ذاته مرتين"],
        "silenceUtilization": 0.4
      },
      "voiceDifferentiation": {
        "characters": [
          {
            "name": "سامي",
            "uniqueLexicon": ["مصطلحات تقنية", "أفعال شرطية"],
            "averageSentenceLength": 16,
            "voiceScore": 0.7,
            "sampleLines": ["سامي: إن فقدنا الموجة المرجعية سنفقد أثر الجاني."]
          },
          {
            "name": "ليلى",
            "uniqueLexicon": ["صور حسية"],
            "averageSentenceLength": 10,
            "voiceScore": 0.82,
            "sampleLines": ["ليلى: الموجة ليست مجرد رقم، إنها نبض المدينة."]
          }
        ],
        "overlapWarnings": ["المشهد 9 يظهر تشابهاً في العبارات"]
      },
      "subtextMatrix": [
        {
          "id": "subtext_14a",
          "speakers": ["سامي", "ليلى"],
          "excerpt": "سامي: الباب مفتوح إن أردت المغادرة.",
          "literalIntent": "ترك الخيار لليلى",
          "hiddenIntent": "اختبار ولائها",
          "emotionalCharge": 0.72,
          "riskLevel": "medium"
        }
      ],
      "interactionDynamics": {
        "turnTaking": {
          "averageTurnsPerScene": 22,
          "interruptionsPerScene": 4,
          "dominanceRatio": { "initiator": 0.55, "responder": 0.45 }
        },
        "conflictLevel": 0.78,
        "supportLevel": 0.3,
        "listeningIndicators": ["ليلى تعيد صياغة جمل سامي"]
      },
      "qualitySignals": {
        "naturalism": 0.74,
        "memorability": 0.7,
        "quotableLines": ["لن أفرّط في الحقيقة ولو صارت وحيدة"],
        "flaggedCliches": ["كل شيء تحت السيطرة"],
        "revisionPriority": "high"
      }
    }
  ],
  "recommendations": [
    {
      "id": "dialogue_rephrase_tech",
      "title": "تنويع مفردات سامي التقنية",
      "description": "استبدال العبارات المكررة بمرادفات تشير إلى عمق خبرته دون إفراط في المصطلحات.",
      "priority": "medium",
      "category": "dialogue",
      "focus": "voice",
      "estimatedEffortHours": 6,
      "owner": "Dialogue Writer",
      "impact": "زيادة تميّز الشخصية وتعزيز الواقعية",
      "dependencies": ["tech_consult_review"],
      "successCriteria": [
        "خفض تكرار المصطلح \"الموجة\" بنسبة 40%",
        "موافقة المستشار التقني"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 80,
    "characterDepth": 84,
    "dialogueAuthenticity": 76,
    "pacingControl": 78,
    "thematicResonance": 82,
    "originality": 73,
    "productionFeasibility": 88,
    "audienceAlignment": 81,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 86
    },
    "qualitativeNotes": [
      "المشهد 14 غني بالتوتر لكنه يحتاج إلى قطع صامت أطول",
      "المشهد 9 يعاني من حوار توضيحي زائد"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "dialogue_workshop_01",
        "description": "جدولة ورشة عمل مع الممثلين لتجربة تنويعات الحوار",
        "owner": "Dialogue Coach",
        "dueDate": "2025-03-18T09:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "محضر جلسة مع مقترحات أداء",
          "تحديد المشاهد التي تحتاج إعادة كتابة"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
