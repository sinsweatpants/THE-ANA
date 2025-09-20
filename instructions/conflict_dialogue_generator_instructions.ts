import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة مولد حوار الصراع.
 * تضمن إنشاء مشاهد حوارية عالية التوتر مدعومة بتحليل بنيوي وتوثيق كامل.
 */
export const CONFLICT_DIALOGUE_GENERATOR_INSTRUCTIONS = `### مولد حوار الصراع (TaskType.CONFLICT_DIALOGUE_GENERATOR)

#### الهدف
توليد مشهد حواري مكثف يكشف دوافع الأطراف المتعارضة، ويصعد التوتر بما يخدم المرحلة الدرامية المحددة.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل السياق، تعريف دوافع الأطراف، بناء تبادل حواري تصاعدي، واقتراح مسارات تصعيد أو تهدئة لاحقة.
- لا يشمل: تغيير خط الحبكة الرئيسي دون تنسيق، أو تقديم حلول نهائية للصراع إذا لم تُطلب، أو إهمال القيود الإنتاجية.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **هوية الشخصيات**: أسماء، أدوار (بطلة، خصم، حليف)، ومستوى القوة النسبي (0-1).
2. **السياق الدرامي**: مكان وزمان المشهد، الحدث السابق، الهدف لكل طرف، وحدة الزمن أو الصفحات المعنية.
3. **متطلبات خاصة**: درجة العنف اللفظي، حدود اللغة، عناصر يجب ذكرها أو تجنبها.
4. **المخرجات المرغوبة بعد المشهد**: هل يجب أن ينتهي بتصعيد، تهدئة، أو نقطة تعليق.

#### المخرجات المتوقعة
- **نص تقريري منسق**: مقدمة عن اللحظة الدرامية، تحليل دوافع الشخصيات، المشهد الحواري بصيغة سيناريو، فقرة ختامية حول المسارات المحتملة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "scenarioSetup": {
    "location": "INT. غرفة الاجتماعات - ليل",
    "timePressure": "high",
    "stakes": "فشل الاتفاق يؤدي لإغلاق المشروع",
    "previousBeat": "سمر اكتشفت خيانة سعيد"
  },
  "conflictBeatMap": [
    {
      "order": 1,
      "beat": "الاستفزاز الافتتاحي",
      "tensionLevel": 0.65,
      "objective": "سعيد يضغط لقبول التسوية"
    },
    {
      "order": 2,
      "beat": "كشف الحقيقة",
      "tensionLevel": 0.85,
      "objective": "سمر تفضح المستند المزور"
    }
  ],
  "dialogueExchange": {
    "format": "screenplay",
    "lines": [
      { "speaker": "سعيد", "content": "وقّعي وانتهي، المجلس لن ينتظر." },
      { "speaker": "سمر", "content": "لن أبيع الحقيقة مقابل وعد فارغ." }
    ],
    "stageDirections": ["سعيد يضرب الطاولة", "سمر تحافظ على نظرتها"],
    "wordCount": 160,
    "escalationCurve": [0.6, 0.72, 0.88, 0.93]
  },
  "resolutionOptions": [
    {
      "path": "تصعيد",
      "description": "سمر تكشف تسجيل الصوت وتنسحب تاركة سعيد في مأزق",
      "impact": "يرفع المخاطر للفصل الثالث"
    },
    {
      "path": "تهدئة مشروطة",
      "description": "سعيد يعرض تمديد المهلة مقابل تنازل محدود",
      "impact": "يؤجل المواجهة مع زيادة التوتر الداخلي"
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **حدة التوتر**: يجب أن يتدرج التوتر بوضوح مع كل سطر حواري.
- **الالتزام بصوت الشخصيات**: توافق مع نتائج \`Character Voice\`.
- **الوضوح البنيوي**: تقسيم المشهد إلى ضربات واضحة مع دوافع محددة.
- **قابلية الإنتاج**: طول الحوار مناسب (عدد السطور والمدة) ويلتزم بالقيود.
- **التأثير الدرامي**: يترك المشهد أثراً يدعم تصاعد الحبكة.

#### خطوات التنفيذ خطوة بخطوة
1. مراجعة السياق والأهداف لكل شخصية وتوثيقها في \`scenarioSetup\`.
2. تصميم منحنى الصراع وتحديد الضربات الرئيسية داخل \`conflictBeatMap\`.
3. كتابة الحوار بصيغة سيناريو مع تعليمات مسرحية مختصرة، وتوثيقه في \`dialogueExchange\`.
4. تقييم نهاية المشهد واقتراح مسارات لاحقة في \`resolutionOptions\`.
5. صياغة التقرير النصي الذي يشرح المنطق الدرامي لكل اختيار.
6. إعداد JSON النهائي والتأكد من اتساق الأسماء والمعرفات.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **توازن قوة غير واضح**: حدد في التقرير كيف يؤثر عدم التوازن على الحوار وقدم اقتراحاً لتعديله.
- **قيود لغوية صارمة**: استخدم لغة بديلة أو استعارات مع توثيق الالتزام في الملاحظات.
- **مشهد يحتاج هدنة**: ركز على الشد والجذب النفسي بدلاً من التصعيد اللفظي.
- **طول المشهد يتجاوز المطلوب**: ضغط السطور بتلخيص الأهداف في جمل أقصر دون التضحية بالتوتر.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**السياق قبل التوليد:**
> سمر اكتشفت أن سعيد أخفى وثائق قد تدين الشركة، ويجتمعان ليلاً لحسم مصير الصفقة.

**مقتطف من الحوار بعد التوليد:**
> سعيد: وقّعي وانتهي، المجلس لن ينتظر.
> سمر: (تسحب جهاز تسجيل) المجلس سيستمع لما أخفيته قبل أن أوقع.
> سعيد: أنتِ لا تعرفين من تحاربين.
> سمر: بل أعرف أن الصمت صار شريككم الوحيد.

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "مشهد حوار الصراع بين سمر وسعيد",
  "summary": "المشهد يولد تصعيداً تدريجياً يثبت رفض سمر للتسوية ويكشف ضعف سعيد، مع اقتراحات لمسارات لاحقة.",
  "metadata": {
    "workId": "wrk_silencecase_2025",
    "workTitle": "قضية الصمت",
    "workFormat": "feature_film",
    "genres": ["legal", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_three",
    "priority": "high",
    "categories": ["dialogue", "conflict"],
    "language": "ar",
    "locale": "ar-LB",
    "analyst": "Conflict Dialogue Engine",
    "collaborators": ["Dialogue Supervisor"],
    "createdAt": "2025-04-06T12:00:00Z",
    "updatedAt": "2025-04-06T12:40:00Z",
    "analysisWindow": {
      "start": "2025-04-05T09:00:00Z",
      "end": "2025-04-06T08:30:00Z"
    },
    "wordCount": 2800,
    "runtimeMinutes": 2,
    "logline": "محامية تواجه مديراً فاسداً لإنقاذ والدها من السجن.",
    "referenceWorks": ["The Insider (1999)"],
    "productionCompany": "Cedars Pictures",
    "notes": ["القيود تتطلب مشهداً واحداً داخل غرفة الاجتماعات."]
  },
  "details": [
    {
      "id": "conflict_scene_01",
      "title": "مواجهة غرفة الاجتماعات",
      "focus": "conflict",
      "expositionMethod": "dialogue",
      "summary": "المواجهة تكشف خيانة سعيد وتثبت صلابة سمر مع استعداد لتصعيد لاحق.",
      "personas": [
        {
          "name": "سمر",
          "type": "protagonist",
          "goals": ["كشف الحقيقة"],
          "transformation": "تتخذ موقفاً علنياً ضد الفساد",
          "screenTimeShare": 12
        },
        {
          "name": "سعيد",
          "type": "antagonist",
          "goals": ["حماية الشركة"],
          "transformation": "يبدأ بفقدان السيطرة",
          "screenTimeShare": 8
        }
      ],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "scenarioSetup": {
        "location": "INT. غرفة الاجتماعات - ليل",
        "timePressure": "high",
        "stakes": "مصير الصفقة ومستقبل والد سمر",
        "previousBeat": "سمر حصلت على تسجيل يدين سعيد"
      },
      "conflictBeatMap": [
        {
          "order": 1,
          "beat": "إنذار سعيد",
          "tensionLevel": 0.66,
          "objective": "فرض توقيع سريع"
        },
        {
          "order": 2,
          "beat": "انقلاب القوة",
          "tensionLevel": 0.9,
          "objective": "سمر تكشف التسجيل"
        },
        {
          "order": 3,
          "beat": "تهديد متبادل",
          "tensionLevel": 0.94,
          "objective": "كلاهما يستعد للخطوة التالية"
        }
      ],
      "dialogueExchange": {
        "format": "screenplay",
        "lines": [
          { "speaker": "سعيد", "content": "وقّعي وانتهي، المجلس لن ينتظر." },
          { "speaker": "سمر", "content": "المجلس سيستمع لما أخفيته قبل أن أوقع." },
          { "speaker": "سعيد", "content": "أنتِ لا تعرفين من تحاربين." },
          { "speaker": "سمر", "content": "أعرف أن الصمت صار شريككم الوحيد." }
        ],
        "stageDirections": ["سعيد يضرب الطاولة", "سمر ترفع جهاز التسجيل"],
        "wordCount": 120,
        "escalationCurve": [0.62, 0.75, 0.9, 0.95]
      },
      "resolutionOptions": [
        {
          "path": "تصعيد",
          "description": "سمر تغادر مع التسجيل مهددة بكشفه",
          "impact": "يرفع stakes للفصل التالي"
        },
        {
          "path": "تفاوض",
          "description": "سعيد يعرض مهلة يوم واحد مقابل عدم نشر التسجيل",
          "impact": "يخلق ضغطاً زمنياً جديداً"
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "conflict_followup_scene",
      "title": "تخطيط مشهد التصعيد",
      "description": "كتابة مشهد لاحق يوضح رد فعل الإدارة بعد تهديد سمر.",
      "priority": "medium",
      "category": "conflict",
      "focus": "conflict",
      "estimatedEffortHours": 5,
      "owner": "Story Editor",
      "impact": "يحافظ على زخم التوتر",
      "dependencies": [],
      "successCriteria": [
        "المشهد يحدد قرار الإدارة",
        "يرفع التهديد الخارجي"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 80,
    "characterDepth": 83,
    "dialogueAuthenticity": 88,
    "pacingControl": 82,
    "thematicResonance": 81,
    "originality": 76,
    "productionFeasibility": 86,
    "audienceAlignment": 79,
    "localizationReadiness": 78,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "يوصى بمراجعة اللغة لضمان توافقها مع وحدة الصوت.",
      "المرحلة التالية تحتاج مشهداً يوضح أثر التهديد على الشركة." 
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "conflict_review_voice",
        "description": "مراجعة الحوار مع وحدة الصوت",
        "owner": "Dialogue Supervisor",
        "dueDate": "2025-04-07T10:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "الحفاظ على نبرة الشخصيات",
          "تأكيد ملاءمة التشبيهات"
        ]
      }
    ],
    "upcoming": [
      {
        "id": "conflict_plan_followup",
        "description": "اجتماع لتخطيط مشهد التصعيد",
        "owner": "Head Writer",
        "dueDate": "2025-04-09T15:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "تحديد موقع المشهد في المخطط",
          "توزيع المسؤوليات"
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "اعتماد الحوار",
        "date": "2025-04-12T09:30:00Z",
        "focus": "conflict",
        "notes": "التأكد من دمج ملاحظات الصوت والتصعيد." 
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "مدير التطوير",
          "role": "Development Lead",
          "channel": "Slack",
          "cadence": "أسبوعي"
        }
      ],
      "notes": "إرسال نسخة الحوار المحدثة بعد المراجعة." 
    }
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- تأكد من أن مستوى التوتر متسق مع تحليلات \`Conflict Dynamics\`.
- نسق مع \`Character Voice\` لضمان مطابقة النبرة اللغوية.
- شارك خيارات \`resolutionOptions\` مع وحدة \`Completion\` عند التخطيط للمشاهد التالية.
`;
