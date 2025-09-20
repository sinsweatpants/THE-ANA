import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوضع الاستكمال.
 * تضمن بناء تكملة سردية متسقة مع السياق السابق مع توثيق تحليلي وتنفيذي كامل.
 */
export const COMPLETION_MODE_INSTRUCTIONS = `### مهمة وضع الاستكمال (TaskType.COMPLETION)

#### الهدف
إكمال مقطع أو مشهد أو حلقة غير مكتملة بما يحقق الأهداف السردية المحددة ويستجيب لتحسينات الاستكمال المطلوبة.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل السياق السابق، صياغة خطة استكمال، كتابة النص الجديد، وتوثيق كيفية دمجه داخل البنية العامة.
- يشمل: مراعاة التحسينات المحددة (إيقاع، أسلوب، تطوير شخصية، توتر).
- لا يشمل: تغيير النهاية المتفق عليها دون تفويض، أو إدخال شخصيات رئيسية جديدة، أو تعديل خط زمني خارج الجزء المحدد.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص الأصلي**: المقطع المراد استكماله مع تحديد بداية النهاية الحالية (صفحة أو طابع زمني).
2. **سياق سابق**: ملخص للمشاهد السابقة أو نقاط الحبكة الأساسية لدعم الاتساق.
3. **نطاق الاستكمال المطلوب**: حجم الإضافة (عدد الصفحات، الكلمات، أو الدقائق)، الهدف الدرامي، ونقطة النهاية المتوقعة.
4. **تحسينات الاستكمال**: قائمة محددة (مثلاً: "تعميق الشخصية"، "رفع التوتر"، "مواءمة الإيقاع") مع أوزان أو أولويات.
5. **قيود إنتاجية**: حد أقصى للشخصيات في المشهد، المواقع المتاحة، أو طول المشهد بالدقائق.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن ملخصاً للسياق، خطة الاستكمال، النص المولد، وكيفية القياس مقابل التحسينات.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "contextDigest": {
    "previousScenes": [
      { "id": "sc_17", "summary": "البطلة تكتشف الوثائق", "pageRange": { "start": 52, "end": 55 } }
    ],
    "unresolvedThreads": ["مصير الشاهد", "رد فعل العائلة"],
    "tone": "suspense",
    "stakes": "فشل الكشف سيؤدي لفقدان الوظيفة"
  },
  "completionPlan": {
    "targetLengthPages": 2.5,
    "primaryObjectives": ["إغلاق خط الشاهد", "رفع التوتر قبل الذروة"],
    "stylisticDirectives": ["لغة فصحى حديثة", "إيقاع سريع"],
    "riskMitigation": ["تجنب كشف النهاية الحقيقية"]
  },
  "generatedContinuation": {
    "format": "screenplay",
    "scenes": [
      {
        "sceneId": "sc_18a",
        "slugline": "INT. غرفة الأرشيف - ليل",
        "beats": [
          { "order": 1, "description": "سمر تواجه الحارس وتخدعه" },
          { "order": 2, "description": "تعثر على الملف المفقود" }
        ],
        "dialogue": [
          { "speaker": "سمر", "content": "لن أترك الحقيقة تدفن هنا." },
          { "speaker": "الحارس", "content": "هذا المكان مغلق بأمر الإدارة." }
        ]
      }
    ],
    "wordCount": 350,
    "estimatedDurationSeconds": 170
  },
  "integrationChecklist": [
    {
      "item": "التأكد من اتساق الزمن مع المشهد السابق",
      "status": "pending",
      "notes": "يجب تثبيت الوقت في \`metadata.notes\` بعد مراجعة وحدة الإيقاع." 
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **اتساق السرد**: يجب أن تتطابق الأحداث والشخصيات مع ما سبق دون تناقض.
- **تحقيق الأهداف**: قياس مدى تلبية الاستكمال للأهداف والتحسينات المحددة.
- **قوة التوتر والإيقاع**: الحفاظ على منحنى تصاعدي مناسب لمرحلة السرد.
- **جودة الحوار والوصف**: لغة واضحة ومتسقة مع صوت الشخصيات.
- **قابلية الدمج**: سهولة إدراج النص في النسخة الرئيسية دون تعديل إضافي كبير.

#### خطوات التنفيذ خطوة بخطوة
1. تلخيص السياق السابق وتحديد الخيوط المفتوحة في \`contextDigest\`.
2. تحديد أهداف الاستكمال وترجمتها إلى خطة تنفيذية في \`completionPlan\`.
3. مسودة أولى للنص المولد وفق القيود الزمنية والطولية.
4. مطابقة النص مع التحسينات المطلوبة وتسجيل النتائج في التقرير النصي و\`integrationChecklist\`.
5. مراجعة لغوية ودرامية للنص لضمان الاتساق مع الشخصيات والوحدات الأخرى.
6. إنشاء ملف JSON كامل وتحديث \`next_steps\` بما يدعم متابعة التنفيذ.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **نطاق استكمال غير واضح**: اطلب توضيحاً أو افترض أقل امتداد ممكن مع توثيق الافتراض.
- **تناقض مع وحدة أخرى**: نسق مع الوحدة المعنية وسجل التعارض والمخرج المقترح في \`metadata.notes\`.
- **قيود إنتاجية صارمة**: اضبط عدد الشخصيات والمواقع ودوّن أي تنازلات في \`integrationChecklist\`.
- **نقص المعلومات عن النهاية**: توقف عند نقطة توتر مرتفعة ووضح الحاجة لتوجيه إضافي.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**الوضع قبل الاستكمال:**
> ينتهي المشهد السابق عند دخول سمر غرفة الأرشيف دون معرفة مصير الملف.

**مقتطف من الاستكمال بعد التنفيذ:**
> INT. غرفة الأرشيف - ليل
> سمر تدفع الباب بصمت، تلتفت للحارس: "لن أدع الورق يختنق بالصمت بعد الآن." 
> الحارس يقترب مهدداً، فتشعل سمر مسجل الصوت لتضمن الدليل.

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير الاستكمال لمشهد الأرشيف في \"قضية الصمت\"",
  "summary": "تم استكمال المشهد بإغلاق خط الشاهد ورفع التوتر قبل الذروة مع الالتزام بالقيود الإنتاجية المحددة.",
  "metadata": {
    "workId": "wrk_silencecase_2025",
    "workTitle": "قضية الصمت",
    "workFormat": "feature_film",
    "genres": ["legal", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_three",
    "priority": "high",
    "categories": ["completion", "structure"],
    "language": "ar",
    "locale": "ar-LB",
    "analyst": "Completion Engine",
    "collaborators": ["Lead Writer"],
    "createdAt": "2025-04-08T08:30:00Z",
    "updatedAt": "2025-04-08T10:05:00Z",
    "analysisWindow": {
      "start": "2025-04-07T07:00:00Z",
      "end": "2025-04-08T07:30:00Z"
    },
    "wordCount": 3650,
    "runtimeMinutes": 5,
    "logline": "محامية تكافح لإثبات براءة والدها وسط شبكة فساد متجذرة.",
    "referenceWorks": ["Dark Waters (2019)", "The Report (2019)"],
    "productionCompany": "Cedars Pictures",
    "notes": ["المشهد مصور في موقع واحد مع إضاءة محدودة."]
  },
  "details": [
    {
      "id": "completion_archive_scene",
      "title": "استكمال غرفة الأرشيف",
      "focus": "structure",
      "expositionMethod": "scene_description",
      "summary": "الاستكمال يغلق خط الشاهد ويعيد تصعيد الخطر قبل الذروة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "contextDigest": {
        "previousScenes": [
          { "id": "sc_17", "summary": "سمر تسرق بطاقة الدخول", "pageRange": { "start": 50, "end": 52 } }
        ],
        "unresolvedThreads": ["مصير الملف", "موقف الحارس"],
        "tone": "suspense",
        "stakes": "فشل سمر يعني خسارة القضية"
      },
      "completionPlan": {
        "targetLengthPages": 2.5,
        "primaryObjectives": ["إظهار براعة سمر", "تثبيت تهديد الخصم"],
        "stylisticDirectives": ["إيقاع سريع", "لغة مشحونة"],
        "riskMitigation": ["عدم كشف تفاصيل الحكم النهائي"]
      },
      "generatedContinuation": {
        "format": "screenplay",
        "scenes": [
          {
            "sceneId": "sc_18a",
            "slugline": "INT. غرفة الأرشيف - ليل",
            "beats": [
              { "order": 1, "description": "سمر تتسلل وتضبط جهاز التسجيل" },
              { "order": 2, "description": "الحارس يواجهها" },
              { "order": 3, "description": "تجد الملف وتغادر" }
            ],
            "dialogue": [
              { "speaker": "سمر", "content": "لن أسمح أن يختنق الحق بالغبار." },
              { "speaker": "الحارس", "content": "أنت تلعبين بالنار يا أستاذة." }
            ]
          }
        ],
        "wordCount": 340,
        "estimatedDurationSeconds": 165
      },
      "integrationChecklist": [
        {
          "item": "تأكيد الزمن",
          "status": "pending",
          "notes": "بانتظار وحدة الإيقاع لتثبيت الفاصل الزمني."
        },
        {
          "item": "مراجعة الحوار مع وحدة الصوت",
          "status": "planned",
          "notes": "تمت إضافة استعارة جديدة تحتاج موافقة."
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "completion_sync_rhythm",
      "title": "تنسيق مع وحدة الإيقاع",
      "description": "مراجعة المشهد مع وحدة \"Rhythm Mapping\" لضمان تدرج التوتر.",
      "priority": "medium",
      "category": "structure",
      "focus": "structure",
      "estimatedEffortHours": 4,
      "owner": "Story Editor",
      "impact": "يحافظ على اتساق المنحنى الزمني",
      "dependencies": [],
      "successCriteria": [
        "موافقة وحدة الإيقاع",
        "تحديث الجدول الزمني في المستند الرئيسي"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 84,
    "characterDepth": 81,
    "dialogueAuthenticity": 79,
    "pacingControl": 83,
    "thematicResonance": 82,
    "originality": 74,
    "productionFeasibility": 80,
    "audienceAlignment": 78,
    "localizationReadiness": 76,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "ينصح بضبط طول المشهد ليتماشى مع خطة التصوير.",
      "الحوار الجديد متسق مع نبرة سمر وفق مراجعة أولية." 
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "completion_rhythm_check",
        "description": "مراجعة الإيقاع مع الفريق المختص",
        "owner": "Rhythm Lead",
        "dueDate": "2025-04-09T12:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "الحصول على ملاحظات رسمية",
          "إدراج أي تعديلات لازمة في المشهد"
        ]
      }
    ],
    "upcoming": [
      {
        "id": "completion_table_read",
        "description": "قراءة طاولة للمشهد المستكمل",
        "owner": "Director",
        "dueDate": "2025-04-15T15:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "تقييم استجابة الممثلين",
          "تثبيت التعديلات النهائية"
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "اعتماد النسخة المحدثة",
        "date": "2025-04-18T10:00:00Z",
        "focus": "structure",
        "notes": "التأكد من دمج الملاحظات وتحديث المخطط." 
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "رئيس غرفة الكتابة",
          "role": "Head Writer",
          "channel": "Email",
          "cadence": "مرتين أسبوعياً"
        }
      ],
      "notes": "إرسال نسخة المشهد النهائية بعد جلسة القراءة." 
    }
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك \`generatedContinuation\` مع وحدتي \`Character Voice\` و\`Conflict Dialogue Generator\` لمراجعة الاتساق اللغوي والتصاعدي.
- تأكد من أن \`completionPlan\` يتماشى مع توصيات \`Adaptive Rewriting\` في حال وجودها.
- أي تعديل على الجدول الزمني يجب مزامنته مع \`Rhythm Mapping\` لتجنب التناقضات.
`;
