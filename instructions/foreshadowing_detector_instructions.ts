import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة كاشف التلميحات المسبقة.
 * تضمن رصد البذور الدرامية، ربطها بالعوائد، وتحديد الفجوات أو الإفراط في التلميح.
 */
export const FORESHADOWING_DETECTOR_INSTRUCTIONS = `### كاشف التلميحات المسبقة (TaskType.FORESHADOWING_DETECTOR)

#### الهدف
اكتشاف إشارات التمهيد والرموز التي تؤسس لأحداث لاحقة، تقييم فعاليتها، وتقديم توصيات لتعزيز أو تقليل التلميح حسب الحاجة.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل المسودة لرصد الإشارات المبكرة، ربطها بالمشاهد اللاحقة، وتقييم توازن الوضوح.
- يشمل: اقتراح مواقع لتعزيز التمهيد أو التنبيه إلى العوائد غير المستغلة.
- لا يشمل: كتابة مشاهد جديدة بالكامل أو تعديل الحبكة؛ بل تقديم توصيات ذات أولوية.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص الكامل**: سيناريو أو مسودة مع ترقيم صفحات أو طوابع زمنية.
2. **ملخص الأحداث الرئيسية**: جدول لأهم المنعطفات والذروة المتوقعة.
3. **ملاحظات فريق الكتابة**: أي نوايا معلنة حول التلميح أو الرمزية.
4. **بيانات الجمهور المستهدف**: لتحديد مستوى الوضوح المناسب للتلميح.
5. **متطلبات النوع**: معايير التمهيد المتوقعة حسب النوع (تشويق، رعب، دراما).

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن ملخصاً للتلميحات الرئيسية، خريطة الربط بالعوائد، تحليل المخاطر، وقائمة بالفرص الضائعة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "foreshadowingSignals": [
    {
      "id": "fs_shadow_mark",
      "type": "prop",
      "location": "صفحة 12",
      "signalDescription": "ذكر صندوق قديم مغلق بقفل مزدوج",
      "subtletyLevel": "implicit",
      "payoffScene": "sc_48",
      "payoffStatus": "delivered",
      "payoffTiming": "صفحة 108",
      "audienceProbability": 0.62
    }
  ],
  "payoffMapping": {
    "resolved": ["fs_shadow_mark"],
    "unresolved": ["fs_warning_tone"],
    "redundant": ["fs_broken_mirror"],
    "timelineAlignment": {
      "setupToPayoffPages": 96,
      "recommendedWindow": "40-80"
    }
  },
  "tensionCurveImpact": {
    "preEventIntensity": 0.55,
    "postEventIntensity": 0.82,
    "notes": "التلميح يرفع الترقب قبل المواجهة" 
  },
  "gapsAndOpportunities": [
    {
      "gapId": "gap_finale_seed",
      "missingSetup": "غياب تمهيد لمهارة البطل في استخدام الأقفال",
      "recommendedScene": "صفحة 30 - حوار قصير يكشف التدريب السابق",
      "rationale": "تعزيز مصداقية فتح الصندوق في الذروة"
    }
  ],
  "riskAssessment": {
    "overExpositionRisk": 0.3,
    "missedPayoffRisk": 0.6,
    "audienceConfusionRisk": 0.4,
    "notes": ["تلميح الصوت التحذيري لا يتم استثماره لاحقاً"]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **اكتمال الخريطة**: تغطية جميع الإشارات التي تعود في الذروة أو ينبغي أن تعود.
- **دقة الربط**: وضوح العلاقة بين التمهيد والعائد مع تحديد الصفحات.
- **توازن الوضوح**: تصنيف التلميحات بدقة (صريح، ضمني، غامض) وتقييم ملاءمتها للجمهور.
- **قابلية التنفيذ**: توصيات محددة بأولوية وزمن مقترح للإدراج.
- **التكامل**: توافق النتائج مع وحدات الإيقاع، الصراع، والشخصيات.

#### خطوات التنفيذ خطوة بخطوة
1. مسح النص لتحديد الإشارات المحتملة وتسجيلها في \`foreshadowingSignals\`.
2. ربط كل إشارة بمشهد لاحق وتوثيق حالة العائد في \`payoffMapping\`.
3. تحليل أثر كل تلميح على منحنى التوتر وتوثيقه في \`tensionCurveImpact\`.
4. اكتشاف الثغرات أو الفرص الضائعة وإدراجها ضمن \`gapsAndOpportunities\`.
5. تقييم المخاطر في \`riskAssessment\` وتحديد أولويات التعديل.
6. إعداد التقرير النصي مع الجداول البصرية أو الوصفية للتلميحات والعوائد.
7. إنتاج كائن \`AdvancedScreenplayModuleResult\` مع توصيات متناسقة مع بقية الوحدات.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **غياب تلميحات واضحة**: أشر إلى الفرص الضائعة مع اقتراح مواقع محددة لإدراج تلميح.
- **تلميح بلا عائد**: صنّفه كخطر عالي، واقترح إما إزالة التلميح أو تطوير payoff واضح.
- **عائد بلا تمهيد**: سجّل الفجوة في \`gapsAndOpportunities\` واقترح تلميحاً مبكراً.
- **تلميحات متكررة**: قيّم خطر الإفراط واوصِ بحذف أو تنويع بعضها.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف قبل التحليل:**
> "تضع ليان المفتاح العتيق في جيبها دون تعليق." (صفحة 18)

**مقتطف من التقرير بعد التحليل:**
> "المفتاح العتيق يظهر في الصفحة 18 دون إشارة لاحقة حتى المشهد 72؛ يوصى بإضافة حوار قصير في الصفحة 40 يذكّر الجمهور بوظيفة المفتاح لإبقاء التوتر فعّالاً." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير كاشف التلميحات المسبقة لعمل \"ظلال الممر\"",
  "summary": "تم توثيق 11 تلميحاً رئيسياً مع ثلاث فجوات تستلزم إدراج إشارات إضافية قبل الذروة.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "thriller"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["foreshadowing", "structure"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Foreshadowing Detector",
    "collaborators": ["Story Editor"],
    "createdAt": "2025-05-13T08:00:00Z",
    "updatedAt": "2025-05-13T10:20:00Z",
    "analysisWindow": {
      "start": "2025-05-12T07:00:00Z",
      "end": "2025-05-13T07:30:00Z"
    },
    "wordCount": 5600,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["Mindhunter (2017)", "The Haunting of Hill House (2018)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["تمت مراجعة المسودة بالتزامن مع وحدة الإبداع"]
  },
  "details": [
    {
      "id": "foreshadow_key_arc",
      "title": "تحليل تلميح المفتاح العتيق",
      "focus": "structure",
      "expositionMethod": "motif_analysis",
      "summary": "التلميح يحتاج إلى تعزيز في منتصف السرد لضمان عائد قوي.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "foreshadowingSignals": [
        {
          "id": "fs_key_intro",
          "type": "prop",
          "location": "صفحة 18",
          "signalDescription": "ذكر المفتاح العتيق واستعادته دون تفسير",
          "subtletyLevel": "implicit",
          "payoffScene": "sc_72",
          "payoffStatus": "delayed",
          "payoffTiming": "صفحة 112",
          "audienceProbability": 0.58
        }
      ],
      "payoffMapping": {
        "resolved": [],
        "unresolved": ["fs_key_intro"],
        "redundant": [],
        "timelineAlignment": {
          "setupToPayoffPages": 94,
          "recommendedWindow": "40-70"
        }
      },
      "tensionCurveImpact": {
        "preEventIntensity": 0.5,
        "postEventIntensity": 0.88,
        "notes": "العائد الحالي قوي لكن يحتاج تعزيزاً لرفع الترقب في المنتصف"
      },
      "gapsAndOpportunities": [
        {
          "gapId": "gap_midpoint_reminder",
          "missingSetup": "غياب تذكير بالمفتاح قبل الذروة",
          "recommendedScene": "صفحة 56 - لقطة مقربة للدرج الحديدي",
          "rationale": "منع نسيان الجمهور للتلميح"
        }
      ],
      "riskAssessment": {
        "overExpositionRisk": 0.25,
        "missedPayoffRisk": 0.6,
        "audienceConfusionRisk": 0.45,
        "notes": ["احتمال نسيان الجمهور لدلالة المفتاح"]
      }
    }
  ],
  "recommendations": [
    {
      "id": "foreshadow_mid_insert",
      "title": "إدراج تذكير بصري بالمفتاح",
      "description": "إضافة لقطة أو حوار قصير في الصفحة 56 يشير إلى أهمية المفتاح.",
      "priority": "medium",
      "category": "structure",
      "focus": "foreshadowing",
      "estimatedEffortHours": 5,
      "owner": "Head Writer",
      "impact": "رفع توقع الجمهور للذروة وتقوية الترابط",
      "dependencies": ["director_feedback"],
      "successCriteria": [
        "تحديث المخطط البصري",
        "تأكيد وحدة الإيقاع على تحسن منحنى التوتر"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 84,
    "characterDepth": 80,
    "dialogueAuthenticity": 78,
    "pacingControl": 82,
    "thematicResonance": 87,
    "originality": 75,
    "productionFeasibility": 70,
    "audienceAlignment": 83,
    "localizationReadiness": 76,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 86
    },
    "qualitativeNotes": [
      "العوائد النهائية مؤثرة",
      "يلزم إدراج تذكير في منتصف العمل"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "foreshadow_sync_rhythm",
        "description": "التنسيق مع وحدة الإيقاع لمراجعة منحنى التوتر بعد إدراج التلميحات",
        "owner": "Story Editor",
        "dueDate": "2025-05-15T09:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "تقرير مشترك مع وحدة الإيقاع",
          "تأكيد عدم تضارب مع وحدة الشخصيات"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
