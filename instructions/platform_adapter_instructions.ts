import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محول المنصات.
 * تهدف إلى تكييف العمل لبيئات عرض مختلفة مع الحفاظ على الهوية السردية والالتزام بقيود المنصة.
 */
export const PLATFORM_ADAPTER_INSTRUCTIONS = `### مهمة محول المنصات (TaskType.PLATFORM_ADAPTER)

#### الهدف
تقديم خطة تكييف شاملة تنقل العمل إلى منصة جديدة (سينما، مسلسل، بث رقمي، بودكاست) مع مراعاة المتطلبات التقنية والجمهور المستهدف.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تقييم الفروق بين المنصات، اقتراح تعديلات هيكلية وزمنية، مواءمة الأسلوب، وتحديد خصائص المنصة المستفاد منها.
- يشمل: إعداد خطة إنتاجية أولية للمنصة الجديدة (مدة الحلقات، عدد المواسم المقترحة، تنسيق الإصدارات).
- لا يشمل: إعادة كتابة النص بالكامل أو تغيير الملكية الفكرية دون تفويض؛ يقتصر على التوصيات التحويلية.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص الأصلي أو العمل المصدر**: مع تنسيق الإنتاج الحالي (فيلم، رواية، بودكاست).
2. **المنصة المستهدفة**: وصف واضح (مثلاً: منصة بث رقمي بحلقات 45 دقيقة، أو قناة تلفزيونية أسبوعية).
3. **بيانات الجمهور الجديد**: الفئة العمرية، الجغرافيا، عادات المشاهدة/الاستماع.
4. **قيود المنصة**: حدود زمنية، متطلبات تصنيف عمري، صيغ تسليم (4K، صوت ثلاثي الأبعاد).
5. **أهداف التكييف**: رفع نسب الاستبقاء، زيادة إمكانية التوسع، أو تحسين الجدوى الإنتاجية.

#### المخرجات المتوقعة
- **نص تقريري منسق**: ملخص للتغيير، جدول الفروقات بين النسخة الأصلية والمعدلة، خطة الحلقات/الأجزاء، وتوصيات الإنتاج.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "platformBrief": {
    "sourceFormat": "feature_film",
    "targetPlatform": "streaming_series",
    "targetAudienceProfile": {
      "primary": "young_adults",
      "regions": ["MENA", "Europe"],
      "viewingHabits": "binge_weekend"
    },
    "runtimeConstraints": {
      "episodeMinutes": 45,
      "seasonLength": 8
    },
    "formatRequirements": ["HDR10", "5.1 audio"],
    "monetizationModel": "subscription"
  },
  "contentAdjustments": {
    "structureChanges": [
      { "original": "ثلاثة فصول", "adapted": "8 حلقات", "notes": "الذروة في الحلقة 7" }
    ],
    "pacingPlan": {
      "cliffhangers": ["حلقة 2 تنتهي بكشف الهوية"],
      "coldOpens": ["إدراج افتتاحية تشويقية لكل حلقة"]
    },
    "toneCalibration": "رفع جرعة التشويق وتقليل العنف البصري"
  },
  "featureMapping": {
    "nativeFeatures": ["تصويت الجمهور", "تجربة تفاعلية"],
    "integrationPlan": [
      { "feature": "تصويت الجمهور", "implementation": "استبيان بعد الحلقة", "tools": ["in-app polls"] }
    ],
    "marketingTieIns": ["حملة قصص قصيرة على إنستغرام"]
  },
  "complianceChecklist": {
    "ratingTarget": "PG-13",
    "languageRestrictions": ["تخفيف الألفاظ القاسية"],
    "violenceLimits": "moderate",
    "legalConsiderations": ["حقوق الموسيقى", "اتفاقيات البث الدولية"],
    "censorshipNotes": ["حذف مشهد الدماء في الحلقة 5"]
  },
  "metricsProjection": {
    "retentionEstimate": 0.72,
    "budgetImpact": {
      "deltaPercent": 18,
      "drivers": ["زيادة المواقع", "توسيع الطاقم"]
    },
    "scheduleImpactWeeks": 6,
    "confidence": 0.65
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **ملاءمة المنصة**: تطابق المقترحات مع توقعات الجمهور والتقنيات المتاحة.
- **الاتساق السردي**: الحفاظ على جوهر العمل أثناء التعديل.
- **قابلية التنفيذ**: تقدير التكلفة والزمن وتأثيرهما على الإنتاج.
- **استغلال مزايا المنصة**: اقتراح ميزات تفاعلية أو بثية متوافقة مع المنصة.
- **الامتثال التنظيمي**: مراعاة التصنيفات والمعايير القانونية.

#### خطوات التنفيذ خطوة بخطوة
1. تحليل الاختلافات بين المنصة الأصلية والمستهدفة وتوثيقها في \`platformBrief\`.
2. صياغة خطة التعديلات الهيكلية والزمنية ضمن \`contentAdjustments\`.
3. تحديد خصائص المنصة المميزة وإدراجها في \`featureMapping\`.
4. تقييم متطلبات الامتثال وتوثيقها في \`complianceChecklist\`.
5. تقدير الأثر الإنتاجي والزمني داخل \`metricsProjection\`.
6. صياغة التقرير النصي مع جدول مقارنة واضح والتوصيات.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` مع توصيات متناسقة مع وحدات الإنتاج والإيقاع.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **منصة بدون معلومات كافية**: اطلب توضيحاً أو استخدم أقرب مثال معروف مع ذكر مستوى الثقة.
- **قيود ميزانية صارمة**: قدم بدائل منخفضة التكلفة ودوّن أثرها على الجودة.
- **عدم توافق المحتوى مع التصنيف**: اقترح تغييرات محددة أو خطط لإصدار نسخة معدلة.
- **اختلاف كبير في طول العمل**: استخدم استراتيجيات التجزئة أو الدمج مع توثيق الأثر على الإيقاع.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**قبل التكييف:**
- فيلم مدته 120 دقيقة يعرض في صالات السينما.

**بعد التكييف (مقتطف من التقرير):**
> "يُقسم الفيلم إلى ثماني حلقات متساوية تقريباً، مع تقديم شخصية الخصم مبكراً عبر cold open في الحلقة الأولى لتعزيز الاستبقاء." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير تكييف المنصة لعمل \"ظلال الممر\"",
  "summary": "تحويل الفيلم إلى سلسلة بث رقمي من ثماني حلقات مع خطة ميزانية وجدول زمني محدث.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "thriller"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "adaptation_proposal",
    "priority": "high",
    "categories": ["platform", "production"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Platform Adapter",
    "collaborators": ["Line Producer", "Marketing Lead"],
    "createdAt": "2025-05-15T08:00:00Z",
    "updatedAt": "2025-05-15T10:20:00Z",
    "analysisWindow": {
      "start": "2025-05-14T07:00:00Z",
      "end": "2025-05-15T07:30:00Z"
    },
    "wordCount": 6400,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["Mindhunter (2017)", "Sharp Objects (2018)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["تم التشاور مع فريق المبيعات"]
  },
  "details": [
    {
      "id": "platform_conversion_plan",
      "title": "خطة تحويل الفيلم إلى مسلسل",
      "focus": "platform",
      "expositionMethod": "adaptation_plan",
      "summary": "يحدد هذا القسم التقسيم الحلقاتي، التعديلات الزمنية، ومتطلبات الامتثال.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "platformBrief": {
        "sourceFormat": "feature_film",
        "targetPlatform": "streaming_series",
        "targetAudienceProfile": {
          "primary": "young_adults",
          "regions": ["MENA", "Europe"],
          "viewingHabits": "binge_weekend"
        },
        "runtimeConstraints": {
          "episodeMinutes": 45,
          "seasonLength": 8
        },
        "formatRequirements": ["HDR10", "5.1 audio"],
        "monetizationModel": "subscription"
      },
      "contentAdjustments": {
        "structureChanges": [
          { "original": "ثلاثة فصول", "adapted": "8 حلقات", "notes": "الذروة في الحلقة 7" }
        ],
        "pacingPlan": {
          "cliffhangers": ["حلقة 2 تنتهي بكشف الهوية"],
          "coldOpens": ["إدراج افتتاحية تشويقية لكل حلقة"]
        },
        "toneCalibration": "رفع جرعة التشويق وتقليل العنف البصري"
      },
      "featureMapping": {
        "nativeFeatures": ["تصويت الجمهور", "تجربة تفاعلية"],
        "integrationPlan": [
          { "feature": "تصويت الجمهور", "implementation": "استبيان بعد الحلقة", "tools": ["in-app polls"] }
        ],
        "marketingTieIns": ["حملة قصص قصيرة على إنستغرام"]
      },
      "complianceChecklist": {
        "ratingTarget": "PG-13",
        "languageRestrictions": ["تخفيف الألفاظ القاسية"],
        "violenceLimits": "moderate",
        "legalConsiderations": ["حقوق الموسيقى", "اتفاقيات البث الدولية"],
        "censorshipNotes": ["حذف مشهد الدماء في الحلقة 5"]
      },
      "metricsProjection": {
        "retentionEstimate": 0.74,
        "budgetImpact": {
          "deltaPercent": 20,
          "drivers": ["تصوير مواقع جديدة", "التسويق التفاعلي"]
        },
        "scheduleImpactWeeks": 8,
        "confidence": 0.66
      }
    }
  ],
  "recommendations": [
    {
      "id": "platform_budget_review",
      "title": "مراجعة الميزانية المعدلة",
      "description": "التنسيق مع فريق المالية لتأكيد زيادة الميزانية بنسبة 20% وتحديد مصادر التمويل.",
      "priority": "high",
      "category": "platform",
      "focus": "finance",
      "estimatedEffortHours": 12,
      "owner": "Line Producer",
      "impact": "ضمان قابلية التنفيذ المالي",
      "dependencies": ["finance_committee"],
      "successCriteria": [
        "تقرير ميزانية محدث",
        "موافقة رسمية من الإدارة"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 82,
    "characterDepth": 80,
    "dialogueAuthenticity": 78,
    "pacingControl": 85,
    "thematicResonance": 86,
    "originality": 74,
    "productionFeasibility": 76,
    "audienceAlignment": 88,
    "localizationReadiness": 79,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 87
    },
    "qualitativeNotes": [
      "الخطة تستفيد من خصائص المنصة",
      "يلزم ضبط التكلفة الإضافية"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "platform_exec_brief",
        "description": "إعداد عرض تنفيذي قصير لعرض خطة التكييف على الإدارة",
        "owner": "Showrunner",
        "dueDate": "2025-05-17T09:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "عرض تقديمي منسق",
          "تحديد قرار المضي قدماً"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
