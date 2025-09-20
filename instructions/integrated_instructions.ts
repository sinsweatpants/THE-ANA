import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة سير العمل المتكامل.
 * تجمع بين التحليل المتقدم والمخرجات الإبداعية مع ضمان التناسق بين الوحدات.
 */
export const INTEGRATED_MODE_INSTRUCTIONS = `### مهمة سير العمل المتكامل (TaskType.INTEGRATED)

#### الهدف
تنفيذ دورة كاملة تبدأ بالتحليل المتعدد الوحدات، مروراً بتوليد محتوى إبداعي موجّه، وانتهاءً بخطة تنفيذية تربط النتائج والتوصيات.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: دمج رؤى وحدات التحليل (بنية، شخصيات، صراع، ثقافة)، صياغة مخرجات إبداعية مبنية على تلك الرؤى، وتوليد خطة تطبيق متكاملة.
- يشمل: التنسيق بين القياسات الرقمية والسرد النوعي لضمان الاتساق.
- لا يشمل: استبدال تقييمات الوحدات المتخصصة أو تجاوز القيود الإنتاجية الموثقة دون الرجوع إلى الوحدة المعنية.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **مخرجات الوحدات السابقة**: تقارير JSON مع حقول \`details\` و\`recommendations\` للوحدات ذات الصلة.
2. **الأهداف التكاملية**: قائمة بالأولويات (مثلاً تعزيز الذروة، رفع قابلية الإنتاج) مع درجات الأهمية (0-1).
3. **نطاق الإبداع المطلوب**: نوع المخرج (مشهد، معالجة، عرض تقديمي) وطوله المتوقع (كلمات، صفحات، دقائق).
4. **القيود الزمنية والإنتاجية**: مواعيد نهائية، فرق مسؤولة، ميزانيات تقديرية.
5. **معايير النجاح المشتركة**: مؤشرات قابلة للقياس لتقييم التكامل (تحسين التوتر بـ10%، رفع وضوح الشخصية، إلخ).

#### المخرجات المتوقعة
- **نص تقريري منسق**: يشمل ملخصاً تنفيذياً، جدول التوافق بين الوحدات، المخرجات الإبداعية، وخطة المتابعة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "integratedWorkflow": {
    "modulesInvolved": ["analysis", "character_deep", "creative"],
    "primaryObjective": "تعزيز الذروة مع الحفاظ على الأصالة الثقافية",
    "workflowSteps": [
      { "order": 1, "description": "دمج نتائج التحليل البنيوي", "owner": "Story Analyst" },
      { "order": 2, "description": "صياغة ملخص إبداعي", "owner": "Lead Writer" }
    ],
    "syncPoints": ["مراجعة مشتركة مع وحدة الصراع", "اعتماد وحدة الإنتاج"]
  },
  "analysisInsights": {
    "keyFindings": ["الفصل الثاني يحتاج إلى تسريع الإيقاع", "الشخصية الرئيسية تفتقر للحظة ضعف"],
    "alignmentScore": 0.78,
    "conflictMatrix": [
      { "module": "conflict_dynamics", "status": "aligned" },
      { "module": "cultural_historical", "status": "pending_review" }
    ]
  },
  "creativeDeliverable": {
    "type": "screenplay_scene",
    "title": "INT. قاعة القصر - ليل",
    "wordCount": 420,
    "excerpt": "نور يواجه المرآة التي تكشف ماضيه، مستنداً إلى توصيات تحليل الشخصية.",
    "justification": "استجابة لتوصيات وحدة الصوت والشخصيات لتعميق الضعف الداخلي"
  },
  "integrationRisks": [
    {
      "riskId": "risk_tone_shift",
      "description": "احتمال اختلاف نبرة المشهد الإبداعي عن بقية المسودة",
      "severity": "medium",
      "mitigation": "مراجعة وحدة الصوت بعد التعديلات"
    }
  ],
  "handoffPlan": {
    "nextOwners": ["Director", "Production Designer"],
    "deadlines": {
      "creativeReview": "2025-05-16T09:00:00Z",
      "productionSync": "2025-05-18T11:00:00Z"
    },
    "toolchain": ["Notion", "ShotGrid"],
    "dependencies": ["Budget approval", "Actor availability"]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **اتساق البيانات**: توافق الأسماء والمعرّفات مع بقية الوحدات دون تناقض.
- **وضوح المسار التنفيذي**: خطة متابعة محددة المسؤوليات والمواعيد.
- **قابلية القياس**: تحديد معايير نجاح قابلة للرصد لاحقاً.
- **توازن التحليل والإبداع**: المخرجات الإبداعية مبنية بشكل صريح على رؤى تحليلية.
- **إدارة المخاطر**: تحديد المخاطر التكاملية وخطط التخفيف.

#### خطوات التنفيذ خطوة بخطوة
1. جمع خلاصات الوحدات وتحليل نقاط التلاقي أو التعارض.
2. تعبئة \`integratedWorkflow\` و\`analysisInsights\` بملخص واضح للأهداف والأولويات.
3. توليد المخرج الإبداعي وفق نطاق المهمة وتوثيقه داخل \`creativeDeliverable\`.
4. تقييم المخاطر ونقاط التعارض وتسجيلها في \`integrationRisks\`.
5. إعداد خطة التسليم والمتابعة في \`handoffPlan\` مع تحديد المالكين والمواعيد.
6. صياغة التقرير النصي الذي يشرح كيفية استخدام النتائج وتطبيقها.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` والتأكد من أن \`recommendations\` و\`next_steps\` تعكسان العمل التكاملي.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **تعارض بين وحدات التحليل**: وثّق التعارض وحدد آلية التحكيم (اجتماع، اختبار إضافي).
- **غياب مخرجات من وحدة أساسية**: استخدم أحدث نسخة متاحة ودوّن الحاجة لتحديث لاحق.
- **مخاطر إنتاجية عالية**: أعد جدولة الخطة أو اقترح حلولاً بديلة ضمن \`integrationRisks\`.
- **تكرار توصيات**: دمج التوصيات المتشابهة وتحديد مالك واحد للتنفيذ.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**قبل التكامل:**
- تحليل البنية يشير إلى بطء في منتصف الفصل الثاني.
- وحدة الصوت تقترح إبراز ضعف البطل.
- وحدة الصراع توصي برفع stakes في الذروة.

**بعد التكامل (مقتطف من التقرير):**
> "تم تصميم مشهد جديد في القاعة يعكس هشاشة نور ويهيئ لصدام الذروة، مع خطة تعاون بين المؤلف والمخرج لضمان اتساق النبرة." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير سير العمل المتكامل لعمل \"ظلال الممر\"",
  "summary": "دمج التقرير التحليلي مع مشهد إبداعي جديد وخطة تنفيذية لضبط الذروة.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "thriller"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["integrated", "creative", "analysis"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Integrated Workflow Engine",
    "collaborators": ["Showrunner", "Director"],
    "createdAt": "2025-05-14T08:00:00Z",
    "updatedAt": "2025-05-14T10:45:00Z",
    "analysisWindow": {
      "start": "2025-05-13T07:00:00Z",
      "end": "2025-05-14T07:30:00Z"
    },
    "wordCount": 7200,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["Mindhunter (2017)", "Dark (2017)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["التقرير يعتمد على مخرجات وحدات التحليل والصوت والإبداع"]
  },
  "details": [
    {
      "id": "integrated_cycle_01",
      "title": "دورة التكامل الأولى",
      "focus": "integrated",
      "expositionMethod": "workflow_report",
      "summary": "دمج الرؤى التحليلية مع مشهد إبداعي وخطة تنفيذية.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "integratedWorkflow": {
        "modulesInvolved": ["analysis", "character_deep", "conflict_dynamics", "creative"],
        "primaryObjective": "تسريع منتصف الفصل الثاني وتعميق هشاشة البطل",
        "workflowSteps": [
          { "order": 1, "description": "مراجعة نتائج التحليل البنيوي", "owner": "Story Analyst" },
          { "order": 2, "description": "فحص توصيات وحدة الصوت والشخصيات", "owner": "Character Lead" },
          { "order": 3, "description": "توليد مشهد جديد", "owner": "Lead Writer" }
        ],
        "syncPoints": ["ورشة مع المخرج", "مراجعة الإنتاج"]
      },
      "analysisInsights": {
        "keyFindings": ["الحافز يتأخر", "الصراع العاطفي يحتاج إبراز"],
        "alignmentScore": 0.8,
        "conflictMatrix": [
          { "module": "conflict_dynamics", "status": "aligned" },
          { "module": "cultural_historical", "status": "needs_review" }
        ]
      },
      "creativeDeliverable": {
        "type": "screenplay_scene",
        "title": "INT. قاعة القصر - ليل",
        "wordCount": 430,
        "excerpt": "نور يعترف لمرآته بأن الخوف الحقيقي هو أن يشبه خصمه.",
        "justification": "استناداً إلى توصيات وحدة الصوت لعرض الضعف الداخلي"
      },
      "integrationRisks": [
        {
          "riskId": "risk_schedule",
          "description": "تأخير مراجعة المخرج قد يؤثر على جدول الإنتاج",
          "severity": "medium",
          "mitigation": "تحديد موعد ثابت خلال 48 ساعة"
        }
      ],
      "handoffPlan": {
        "nextOwners": ["Director", "Production Designer"],
        "deadlines": {
          "creativeReview": "2025-05-16T09:00:00Z",
          "productionSync": "2025-05-18T11:00:00Z"
        },
        "toolchain": ["Notion", "ShotGrid"],
        "dependencies": ["Budget approval", "Actor availability"]
      }
    }
  ],
  "recommendations": [
    {
      "id": "integrated_followup_scene",
      "title": "تنسيق مراجعة مشهد القاعة",
      "description": "عقد جلسة مع المخرج وفريق الصراع لمراجعة المشهد الجديد وضبط التوتر.",
      "priority": "high",
      "category": "integrated",
      "focus": "workflow",
      "estimatedEffortHours": 8,
      "owner": "Showrunner",
      "impact": "ضمان اتساق الذروة وتماسك الخطة",
      "dependencies": ["director_availability"],
      "successCriteria": [
        "محضر اجتماع موثق",
        "تأكيد إدراج المشهد في المسودة التالية"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 86,
    "characterDepth": 85,
    "dialogueAuthenticity": 80,
    "pacingControl": 83,
    "thematicResonance": 89,
    "originality": 78,
    "productionFeasibility": 74,
    "audienceAlignment": 84,
    "localizationReadiness": 77,
    "confidenceInterval": {
      "lowerBound": 73,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "المشهد الجديد يرفع التوتر",
      "مطلوب موافقة ثقافية للمراجع الجديدة"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "integrated_sync_meeting",
        "description": "تنظيم اجتماع تكاملي مع كل قادة الوحدات لمراجعة الخطة",
        "owner": "Project Manager",
        "dueDate": "2025-05-15T10:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "قائمة قرارات مشتركة",
          "جدول زمني محدّث"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
