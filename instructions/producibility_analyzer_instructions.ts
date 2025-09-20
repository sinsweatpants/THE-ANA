import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محلل القابلية للإنتاج.
 * تهدف إلى تقييم المتطلبات المالية، اللوجستية، والتقنية لإنتاج العمل مع تقديم خطط تخفيف المخاطر.
 */
export const PRODUCIBILITY_ANALYZER_INSTRUCTIONS = `### وحدة محلل القابلية للإنتاج (TaskType.PRODUCIBILITY_ANALYZER)

#### الهدف
تشخيص مدى إمكانية تنفيذ المشروع ضمن نطاق زمني ومالي محدد، وتحديد العوائق المحتملة مع اقتراح حلول عملية.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تقدير الميزانية، تقييم المواقع، تحديد متطلبات الطاقم والتقنيات، تحليل الجدول الزمني، وتوثيق المخاطر.
- يشمل: اقتراح بدائل إنتاجية (تقليل مواقع، الاستفادة من استوديوهات، تعديل مشاهد عالية التكلفة).
- لا يشمل: إقرار الميزانية النهائية أو توقيع عقود الإنتاج؛ يقدّم تقديرات وتحليلات استرشادية.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **مسودة السيناريو أو التحليل المشهدي**: مع ترقيم المشاهد والمواقع.
2. **مستوى الميزانية المستهدف**: نطاق رقمي أو وصفي (منخفض، متوسط، مرتفع).
3. **خطط الجدولة المبدئية**: مواعيد الإطلاق أو مهل التسليم المطلوبة.
4. **الموارد المتاحة**: استوديوهات، معدات، شراكات، طاقم أساسي.
5. **قيود خاصة**: مواقع إلزامية، مواسم تصوير محددة، متطلبات قانونية.

#### المخرجات المتوقعة
- **نص تقريري منسق**: ملخص تنفيذي، جدول التكاليف، تقييم اللوجستيات، خطة الجدول الزمني، والمخاطر مع الحلول.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "productionProfile": {
    "projectScale": "mid_budget",
    "shootingDaysEstimate": 45,
    "castSize": 9,
    "extrasPerDay": 20,
    "locationCount": 12,
    "format": "limited_series"
  },
  "budgetBreakdown": {
    "currency": "USD",
    "totalEstimate": 4200000,
    "range": { "low": 3800000, "high": 4600000 },
    "costDrivers": ["تصوير ليلي خارجي", "مؤثرات بصرية للمرآة"],
    "savingsOpportunities": ["استخدام مواقع موحدة للمشاهد الداخلية", "الاعتماد على إضاءة عملية"],
    "confidence": 0.62
  },
  "logisticsAssessment": {
    "locations": [
      { "type": "heritage_palace", "availability": "seasonal", "challenge": "تصاريح تصوير محدودة" }
    ],
    "travelNeeds": ["نقل فريق من القاهرة إلى الإسكندرية"],
    "permits": ["وزارة السياحة", "الآثار"],
    "seasonalRisks": ["الأمطار في الشتاء"]
  },
  "technicalStack": {
    "vfxLevel": "medium",
    "soundDesignNeeds": ["تصميم صوتي للمرآة"],
    "specialEquipment": ["Steadicam", "كاميرا حرارية"],
    "crewGaps": ["مشرف مؤثرات رقمية", "منسق مشاهد ليلية"]
  },
  "riskMitigationPlan": {
    "risks": [
      {
        "riskId": "prod_weather_delay",
        "description": "تعطل التصوير بسبب الأمطار",
        "severity": "high",
        "contingency": "جدولة يومي احتياط وتوفير موقع داخلي بديل"
      }
    ],
    "scheduleContingencyWeeks": 2,
    "budgetContingencyPercent": 10
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **دقة التقديرات**: نطاقات ميزانية واقعية مدعومة بمتغيرات واضحة.
- **شمول التغطية**: معالجة الجوانب المالية، اللوجستية، التقنية، والموارد البشرية.
- **قابلية التنفيذ**: توصيات قابلة للتطبيق مع تحديد أصحاب القرار.
- **إدارة المخاطر**: تحديد المخاطر وترتيبها حسب الأولوية مع خطط تخفيف.
- **التكامل مع الوحدات الأخرى**: توافق التوصيات مع وحدات الإيقاع، المنصة، والصراع.

#### خطوات التنفيذ خطوة بخطوة
1. استخراج بيانات المشاهد والمواقع وتقدير حجم الإنتاج في \`productionProfile\`.
2. بناء تقدير الميزانية وتفصيله في \`budgetBreakdown\` مع ذكر مصادر التكاليف.
3. تحليل المتطلبات اللوجستية وتوثيقها في \`logisticsAssessment\`.
4. تحديد الاحتياجات التقنية وتوثيق الفجوات في \`technicalStack\`.
5. إعداد خطة المخاطر في \`riskMitigationPlan\` مع تحديد مسؤوليات المعالجة.
6. صياغة التقرير النصي مع الجداول والرسوم التوضيحية عند الحاجة.
7. إنتاج كائن \`AdvancedScreenplayModuleResult\` وتحديث \`recommendations\` و\`next_steps\` بالتبعات الإنتاجية.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **نقص المعلومات عن المواقع**: استخدم مواقع مماثلة كمرجع ودوّن مستوى الثقة.
- **ميزانية غير محددة**: قدم سيناريوهين (متفائل ومحافظ) وحدد الفروقات الأساسية.
- **متطلبات تقنية متقدمة**: اقترح خبراء أو شركاء محتملين وأدرج التكلفة التقديرية.
- **جدول زمني غير واقعي**: أوضح أسباب عدم الواقعية واقترح بدائل أو تمديدات.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من المدخلات:**
- المسلسل يتطلب قصراً تاريخياً مع مشاهد ليلية متعددة.

**مقتطف من التقرير بعد التحليل:**
> "يتطلب القصر موافقات من وزارة السياحة والآثار؛ لتقليل المخاطر يُنصح ببناء جزء من الديكور في استوديو داخلي يسمح بالتحكم في الإضاءة الليلية." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير القابلية للإنتاج لمسلسل \"ظلال الممر\"",
  "summary": "المشروع قابل للتنفيذ ضمن ميزانية 4.2 مليون دولار مع ضرورة إضافة احتياطي جدولي أسبوعين للتعامل مع الطقس.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "thriller"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "budgeting",
    "priority": "high",
    "categories": ["production", "logistics"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Producibility Analyzer",
    "collaborators": ["Line Producer", "Location Manager"],
    "createdAt": "2025-05-14T08:30:00Z",
    "updatedAt": "2025-05-14T10:30:00Z",
    "analysisWindow": {
      "start": "2025-05-13T07:00:00Z",
      "end": "2025-05-14T07:15:00Z"
    },
    "wordCount": 7200,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["The Night Manager (2016)", "Mindhunter (2017)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["تمت استشارة مشرف مواقع سابق"]
  },
  "details": [
    {
      "id": "producibility_pass_01",
      "title": "تقييم القصور والمشاهد الليلية",
      "focus": "production",
      "expositionMethod": "production_analysis",
      "summary": "تحليل الميزانية واللوجستيات لمشاهد القصر الليلية.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "productionProfile": {
        "projectScale": "mid_budget",
        "shootingDaysEstimate": 45,
        "castSize": 9,
        "extrasPerDay": 18,
        "locationCount": 12,
        "format": "limited_series"
      },
      "budgetBreakdown": {
        "currency": "USD",
        "totalEstimate": 4300000,
        "range": { "low": 3900000, "high": 4700000 },
        "costDrivers": ["إضاءة ليلية", "مؤثرات المرآة"],
        "savingsOpportunities": ["إعادة استخدام ديكورات الممر", "تقليل أيام التصوير الخارجي"],
        "confidence": 0.63
      },
      "logisticsAssessment": {
        "locations": [
          { "type": "heritage_palace", "availability": "seasonal", "challenge": "تصاريح محدودة" }
        ],
        "travelNeeds": ["نقل طاقم من القاهرة"],
        "permits": ["وزارة السياحة", "الآثار"],
        "seasonalRisks": ["أمطار الشتاء"]
      },
      "technicalStack": {
        "vfxLevel": "medium",
        "soundDesignNeeds": ["إعادة تسجيل الحوار", "تصميم صدى المرآة"],
        "specialEquipment": ["Steadicam"],
        "crewGaps": ["مشرف مؤثرات رقمية"]
      },
      "riskMitigationPlan": {
        "risks": [
          {
            "riskId": "prod_weather_delay",
            "description": "تأخير بسبب الطقس",
            "severity": "high",
            "contingency": "إضافة موقع داخلي بديل وجدولة يومي احتياط"
          }
        ],
        "scheduleContingencyWeeks": 2,
        "budgetContingencyPercent": 12
      }
    }
  ],
  "recommendations": [
    {
      "id": "prod_location_backup",
      "title": "تأمين موقع داخلي بديل",
      "description": "التعاقد مع استوديو لإعادة بناء جزء من القصر كخطة بديلة لمشاهد المطر.",
      "priority": "high",
      "category": "production",
      "focus": "risk",
      "estimatedEffortHours": 16,
      "owner": "Line Producer",
      "impact": "تقليل مخاطر التأخير",
      "dependencies": ["budget_approval"],
      "successCriteria": [
        "توقيع عقد الاستوديو",
        "تحديث الجدول الزمني"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 82,
    "characterDepth": 80,
    "dialogueAuthenticity": 78,
    "pacingControl": 81,
    "thematicResonance": 84,
    "originality": 75,
    "productionFeasibility": 88,
    "audienceAlignment": 83,
    "localizationReadiness": 76,
    "confidenceInterval": {
      "lowerBound": 73,
      "upperBound": 89
    },
    "qualitativeNotes": [
      "الخطة الإنتاجية قابلة للتنفيذ",
      "يجب تثبيت الطاقم التقني للمؤثرات"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "prod_budget_session",
        "description": "اجتماع مع المالية لتثبيت تقديرات الميزانية والاحتياطيات",
        "owner": "Producer",
        "dueDate": "2025-05-16T09:30:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "محضر اجتماع",
          "تأكيد نسبة الاحتياطي"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
