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
  \"finalization_checklist\": [
    {\"item\": \"تحقق من اتساق الزمن\", \"status\": \"pending\", \"owner\": \"Script Coordinator\"}
  ],
  \"blocking_issues\": [
    {\"id\": \"block_missing_motive\", \"description\": \"الدافع العاطفي غير مبرر\", \"severity\": \"medium\", \"owner\": \"Head Writer\"}
  ],
  \"release_notes\": \"تمت إضافة مواجهة في الأرشيف لتقوية الذروة الفرعية.\"
}
\`\`\``\`

#### معايير الجودة والتقييم
- **اتساق السرد**: يجب أن تتطابق الأحداث والشخصيات مع ما سبق دون تناقض.
- **تحقيق الأهداف**: قياس مدى تلبية الاستكمال للأهداف والتحسينات المحددة.
- **قوة التوتر والإيقاع**: الحفاظ على منحنى تصاعدي مناسب لمرحلة السرد.
- **جودة الحوار والوصف**: لغة واضحة ومتسقة مع صوت الشخصيات.
- **قابلية الدمج**: سهولة إدراج النص في النسخة الرئيسية دون تعديل إضافي كبير.

#### خطوات التنفيذ خطوة بخطوة
1. تلخيص السياق السابق في التقرير النصي وإنشاء عناصر \`finalization_checklist\` التي تضمن معالجة الخيوط المفتوحة.
2. ترجمة أهداف الاستكمال إلى عناصر قابلة للتنفيذ ضمن \`finalization_checklist\` مع تحديد المالك والموعد.
3. مسودة أولى للنص المولد وفق القيود الزمنية والطولية.
4. تقييم الاستكمال مقابل التحسينات المطلوبة وتوثيق أي معوقات في \`blocking_issues\` مع خطة معالجة.
5. مراجعة لغوية ودرامية للنص لضمان الاتساق مع الشخصيات والوحدات الأخرى.
6. إنشاء ملف JSON كامل وتحديث \`release_notes\` بما يلخص القرارات والتعديلات المعتمدة.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **نطاق استكمال غير واضح**: اطلب توضيحاً أو افترض أقل امتداد ممكن مع توثيق الافتراض.
- **تناقض مع وحدة أخرى**: نسق مع الوحدة المعنية وسجل التعارض والمخرج المقترح في \`metadata.notes\`.
- **قيود إنتاجية صارمة**: اضبط عدد الشخصيات والمواقع ودوّن أي تنازلات في \`finalization_checklist\`.
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
      \"metrics\": [],
      \"finalization_checklist\": [
        {
          \"item\": \"مراجعة اتساق الطابع الزمني مع المشهد 17\",
          \"status\": \"pending\",
          \"owner\": \"Script Coordinator\",
          \"due\": \"2025-04-08\"
        },
        {
          \"item\": \"تأكيد استخدام المفردات القانونية المعتمدة\",
          \"status\": \"in_progress\",
          \"owner\": \"Dialogue Lead\",
          \"due\": \"2025-04-07\"
        }
      ],
      \"blocking_issues\": [
        {
          \"id\": \"block_missing_motive\",
          \"description\": \"الدافع العاطفي لهالة لعدم إبلاغ الشرطة غير مفسر\",
          \"severity\": \"medium\",
          \"owner\": \"Head Writer\",
          \"resolution_plan\": \"إضافة سطر يوضح خوفها على عائلتها قبل المشهد\",
          \"status\": \"open\"
        }
      ],
      \"release_notes\": \"أضيفت مواجهة في الأرشيف وسطر حوار يبرر صمت هالة، مع ضبط طول المشهد على دقيقتين وثلاثين ثانية.\"
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
- شارك عناصر \`finalization_checklist\` وخلاصة \`release_notes\` مع وحدتي \`Character Voice\` و\`Conflict Dialogue Generator\` لمراجعة الاتساق اللغوي والتصاعدي.
- تأكد من أن \`finalization_checklist\` يتماشى مع توصيات \`Adaptive Rewriting\` في حال وجودها.
- أي تعديل على الجدول الزمني يجب توثيقه في \`release_notes\` ومزامنته مع \`Rhythm Mapping\`.
`;
