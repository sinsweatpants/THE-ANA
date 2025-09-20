import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة ديناميكيات الصراع.
 * تهدف إلى تحليل أنواع الصراعات وتطورها وتأثيرها على السرد الكلي.
 */
export const CONFLICT_DYNAMICS_INSTRUCTIONS = `### مهمة ديناميكيات الصراع (TaskType.CONFLICT_DYNAMICS)

#### الهدف
رصد وتحليل الصراعات الأساسية والثانوية، وقياس تطورها الزمني وتأثيرها على الشخصيات والثيمات.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تصنيف الصراعات، قياس شدتها، تحليل منحنى التصعيد والتهدئة، ورصد الترابط مع الثيمات الرئيسة.
- لا يشمل: كتابة حوار جديد، أو تعديل الأحداث مباشرة، أو تجاهل تأثير الصراعات على الإنتاج.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **ملخص الحبكة**: تقسيم إلى فصول أو حلقات مع مؤشرات زمنية أو صفحات.
2. **قائمة الصراعات المعروفة**: الأطراف المشاركة، نوع الصراع (شخصي، مؤسسي، داخلي، بيئي)، مستوى الأهمية.
3. **بيانات داعمة**: مشاهد مرجعية، اقتباسات، أو نتائج وحدات أخرى (مثل \`Character Deep Analyzer\`).
4. **متطلبات خاصة**: التركيز على صراع معين، أو قيود إنتاجية، أو أهداف جمهور محددة.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن ملخصاً تنفيذياً، تحليل التصعيد، التوزيع الزمني للصراعات، المخاطر، والتوصيات.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "conflictInventory": [
    {
      "conflictId": "conf_main_justice",
      "type": "institutional",
      "parties": ["سمر", "شركة أوميغا"],
      "stakes": "مستقبل والد سمر وحقيقة الفساد",
      "importance": "critical",
      "visibility": 0.9
    }
  ],
  "trajectoryTimeline": [
    {
      "label": "Act I",
      "startPage": 1,
      "endPage": 30,
      "intensity": 0.55,
      "keyEvents": ["رفض الشركة إعادة التحقيق", "سمر تتلقى تهديداً"]
    },
    {
      "label": "Act II",
      "startPage": 31,
      "endPage": 90,
      "intensity": 0.78,
      "keyEvents": ["تسريب وثيقة", "ملاحقة الحارس"]
    }
  ],
  "intensityMetrics": {
    "peakIntensity": 0.92,
    "lowestPoint": 0.4,
    "volatility": 0.35,
    "timeToPeak": 78,
    "sustainedPressure": 0.7
  },
  "resolutionStatus": [
    {
      "conflictId": "conf_main_justice",
      "currentStage": "escalating",
      "expectedResolution": "Act III",
      "resolutionRisks": ["افتقار دليل قانوني", "تهديد السلامة الشخصية"],
      "recommendedActions": ["جمع شهادة إضافية", "تأمين حماية للشاهد"]
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **شمول التغطية**: تضمين كل صراع رئيسي مع توثيق مرجعي.
- **دقة القياسات**: القيم بين 0 و1 للأ intensity، مع توضيح مصادر التقدير.
- **التحليل السببي**: ربط تغير الشدة بالأحداث أو القرارات.
- **قابلية التنفيذ**: توصيات مرتبطة بخطوات واضحة في \`next_steps\`.
- **اتساق المصطلحات**: استخدام نفس معرفات الصراعات عبر الوحدات.

#### خطوات التنفيذ خطوة بخطوة
1. جمع كل الصراعات من النص والوحدات الأخرى وتوثيقها في \`conflictInventory\`.
2. رسم خط زمني للتصعيد وتعبئة \`trajectoryTimeline\` بالقيم واللحظات المفصلية.
3. حساب مقاييس الشدة والتذبذب وإدراجها في \`intensityMetrics\`.
4. تحليل حالة الحل لكل صراع وتوثيق المخاطر والإجراءات في \`resolutionStatus\`.
5. كتابة التقرير النصي موضحاً تأثير الصراعات على الشخصيات والثيمات.
6. إنشاء ملف JSON متكامل وضمان مواءمته مع التوصيات والخطوات التالية.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **صراعات غير متوازنة زمنياً**: اقترح مشاهد لتوزيع الضغط واذكر ذلك في التوصيات.
- **نقص الأدلة على صراع معين**: صنفه كمخاطرة منخفضة مع طلب معلومات إضافية.
- **قيم شدة متطرفة**: تحقق من المصدر، وإن كانت تقديرية فاذكر مستوى الثقة في الملاحظات.
- **تعارض مع وحدات أخرى**: دوّن التباين وحدد جلسة مواءمة في \`next_steps.reviewSchedule\`.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**الوضع قبل التحليل:**
> توجد ثلاثة صراعات متشابكة لكن غير مصنفة بوضوح (سمر ضد الشركة، سمر ضد العائلة، صراع داخلي).

**مقتطف من التقرير بعد التحليل:**
> "يصعد الصراع المؤسسي بين سمر والشركة من تهديدات قانونية إلى محاولة تشويه سمعة، ما يتطلب تعزيز الأدلة في منتصف الفصل الثاني للحفاظ على مصداقية القوس." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير ديناميكيات الصراع في \"قضية الصمت\"",
  "summary": "تكشف القراءة عن تصاعد مستمر للصراع المؤسسي مع ثغرة في إدارة الصراع العائلي الداخلي، ما يستدعي خطوات تصحيحية.",
  "metadata": {
    "workId": "wrk_silencecase_2025",
    "workTitle": "قضية الصمت",
    "workFormat": "feature_film",
    "genres": ["legal", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_three",
    "priority": "high",
    "categories": ["conflict", "analysis"],
    "language": "ar",
    "locale": "ar-LB",
    "analyst": "Conflict Dynamics Engine",
    "collaborators": ["Story Editor"],
    "createdAt": "2025-04-06T08:00:00Z",
    "updatedAt": "2025-04-06T09:45:00Z",
    "analysisWindow": {
      "start": "2025-04-04T07:00:00Z",
      "end": "2025-04-06T07:30:00Z"
    },
    "wordCount": 7200,
    "runtimeMinutes": 5,
    "logline": "محامية تكشف شبكة فساد تعرض عائلتها للخطر.",
    "referenceWorks": ["Dark Waters (2019)", "The Post (2017)"],
    "productionCompany": "Cedars Pictures",
    "notes": ["تم التركيز على نسخة النص 3.1."]
  },
  "details": [
    {
      "id": "conflict_analysis_main",
      "title": "الصراع المؤسسي",
      "focus": "conflict",
      "expositionMethod": "analysis",
      "summary": "تصعيد تدريجي بين سمر والشركة مع مخاطر قانونية وشخصية متزايدة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "conflictInventory": [
        {
          "conflictId": "conf_main_justice",
          "type": "institutional",
          "parties": ["سمر", "شركة أوميغا"],
          "stakes": "مستقبل والد سمر والسمعة العامة",
          "importance": "critical",
          "visibility": 0.92
        },
        {
          "conflictId": "conf_family_trust",
          "type": "interpersonal",
          "parties": ["سمر", "شقيقها"],
          "stakes": "تماسك العائلة",
          "importance": "high",
          "visibility": 0.6
        }
      ],
      "trajectoryTimeline": [
        {
          "label": "Act I",
          "startPage": 1,
          "endPage": 30,
          "intensity": 0.52,
          "keyEvents": ["سمر ترفض الصفقة", "العائلة تشكك في خطتها"]
        },
        {
          "label": "Act II",
          "startPage": 31,
          "endPage": 90,
          "intensity": 0.8,
          "keyEvents": ["تسريب الوثيقة", "تهديد العائلة"]
        },
        {
          "label": "Act III",
          "startPage": 91,
          "endPage": 118,
          "intensity": 0.93,
          "keyEvents": ["المواجهة النهائية", "إفراج مؤقت عن الوالد"]
        }
      ],
      "intensityMetrics": {
        "peakIntensity": 0.93,
        "lowestPoint": 0.45,
        "volatility": 0.38,
        "timeToPeak": 95,
        "sustainedPressure": 0.74
      },
      "resolutionStatus": [
        {
          "conflictId": "conf_main_justice",
          "currentStage": "escalating",
          "expectedResolution": "Act III",
          "resolutionRisks": ["عدم كفاية الأدلة", "تهديد الشاهد"],
          "recommendedActions": ["إضافة مشهد جمع توقيعات", "تعزيز حماية الشاهد"]
        },
        {
          "conflictId": "conf_family_trust",
          "currentStage": "volatile",
          "expectedResolution": "Act III",
          "resolutionRisks": ["انسحاب الشقيق", "تشتت العائلة"],
          "recommendedActions": ["مشهد مصارحة مبكر", "تأكيد دعم الأم"]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "conflict_add_family_scene",
      "title": "إضافة مشهد مصارحة عائلية",
      "description": "كتابة مشهد قصير في منتصف الفصل الثاني يوضح موقف العائلة لتقليل فجوة الصراع الداخلي.",
      "priority": "medium",
      "category": "conflict",
      "focus": "conflict",
      "estimatedEffortHours": 6,
      "owner": "Lead Writer",
      "impact": "يعزز مصداقية تحول العائلة",
      "dependencies": [],
      "successCriteria": [
        "إدراج المشهد قبل الصفحة 80",
        "تحسن مؤشر الثقة العائلية إلى 0.7"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 83,
    "characterDepth": 85,
    "dialogueAuthenticity": 78,
    "pacingControl": 82,
    "thematicResonance": 84,
    "originality": 75,
    "productionFeasibility": 79,
    "audienceAlignment": 80,
    "localizationReadiness": 77,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "توزيع التوتر العائلي يحتاج لحظة إعادة اصطفاف في الفصل الثالث.",
      "الصراع المؤسسي متماسك مع فرصة لتعزيز المخاطر القانونية." 
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "conflict_family_brainstorm",
        "description": "جلسة تفكير لكتابة مشهد العائلة",
        "owner": "Story Editor",
        "dueDate": "2025-04-07T16:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "تحديد موقع المشهد",
          "مسودة أولية خلال 48 ساعة"
        ]
      }
    ],
    "upcoming": [
      {
        "id": "conflict_alignment_meeting",
        "description": "اجتماع مواءمة مع وحدة الشخصيات",
        "owner": "Development Lead",
        "dueDate": "2025-04-10T11:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "تأكيد اتساق دوافع الشقيق",
          "تحديث ملاحظات الوحدة"
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "مراجعة تصعيد الصراع",
        "date": "2025-04-14T09:00:00Z",
        "focus": "conflict",
        "notes": "تقييم تأثير المشاهد الجديدة على المنحنى." 
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "مدير التطوير",
          "role": "Development Lead",
          "channel": "Email",
          "cadence": "أسبوعي"
        }
      ],
      "notes": "إرسال تحديثات التصعيد كل خميس." 
    }
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك نتائج \`trajectoryTimeline\` مع \`Rhythm Mapping\` لمزامنة منحنى التوتر.
- استخدم نفس معرفات الصراعات في \`Conflict Dialogue Generator\` لضمان اتساق المشاهد.
- أي توصية تؤثر على الشخصيات يجب تأكيدها مع \`Character Deep Analyzer\` قبل التنفيذ.
`;
