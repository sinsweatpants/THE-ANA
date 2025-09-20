# وحدة مولد التوصيات والتحسينات

> تجمع الوحدة خلاصات الوحدات الأخرى وتبني خارطة طريق تنفيذية متكاملة.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `recommendation`
- **الفئات المتأثرة:** `story_structure`, `production`

## 📥 المدخلات المطلوبة
- مخرجات الوحدات المتقدمة الأخرى بصيغتها النهائية.
- أولويات فريق التطوير والقيود الزمنية الحالية.

## 📤 المخرجات المتوقعة
- مصفوفة أولويات تربط التأثير الدرامي بالجدوى الإنتاجية.
- قائمة إجراءات محددة بزمن التنفيذ والمسؤوليات.

## 🧩 حقول `details` المحورية
1. **details[].insights[]**: تجميع الاستنتاجات الرئيسة من الوحدات الفرعية مع تصنيفها.
1. **details[].metrics[]**: نقاط مقارنة بين العائد الإبداعي والجهد المطلوب.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير مولد التوصيات والتحسينات",
  "summary": "يجمع مخرجات الوحدات المتخصصة في مصفوفة واحدة ويوصي بتسلسل تنفيذي واضح للنسخة القادمة.",
  "metadata": {
    "workId": "wrk_arena_001",
    "workTitle": "صدى المرايا",
    "workFormat": "feature_film",
    "genres": [
      "drama",
      "thriller"
    ],
    "primaryAudience": "adults",
    "secondaryAudiences": [
      "young_adults"
    ],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": [
      "story_structure",
      "production",
      "character"
    ],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Script Analyst",
    "collaborators": [
      "Senior Story Editor"
    ],
    "createdAt": "2025-01-12T10:00:00Z",
    "updatedAt": "2025-01-12T12:15:00Z",
    "analysisWindow": {
      "start": "2025-01-10T08:00:00Z",
      "end": "2025-01-12T08:00:00Z"
    },
    "wordCount": 19500,
    "runtimeMinutes": 118,
    "logline": "محقق مثالي يواجه شبكة فساد تكشف له ماضي عائلته المظلم.",
    "referenceWorks": [
      "Heat (1995)",
      "Prisoners (2013)"
    ],
    "productionCompany": "Visionary Films",
    "notes": [
      "تم توفير نسخة PDF محدّثة."
    ]
  },
  "details": [
    {
      "id": "recommendation_overview",
      "title": "منهجية التوصيات المجمعة",
      "focus": "recommendation",
      "expositionMethod": "action",
      "summary": "يتم تجميع الإجراءات حسب التأثير الدرامي والفائدة الإنتاجية.",
      "insights": [
        {
          "id": "recommendation_matrix",
          "headline": "توزيع متوازن بين التحسين السردي والجدوى",
          "analysisType": "recommendation",
          "summary": "تجمع التوصيات بين تعديل الحبكة وإدارة الموارد لإطلاق النسخة المقبلة.",
          "impact": "يوفر مساراً تنفيذياً واضحاً لفريق التطوير.",
          "confidence": 0.92,
          "supportingEvidence": [
            {
              "referenceId": "module_reports",
              "source": "analytics.json",
              "excerpt": "تم دمج 18 توصية من الوحدات السابقة في 6 مسارات عمل.",
              "location": "قسم aggregation",
              "confidence": 0.9
            }
          ]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "recommendations_generator_rec_1",
      "title": "تحديد إجراء مركزي للنسخة المقبلة",
      "description": "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      "priority": "high",
      "category": "story_structure",
      "focus": "recommendation",
      "estimatedEffortHours": 12,
      "owner": "كاتب السيناريو الرئيسي",
      "impact": "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      "successCriteria": [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل."
      ]
    },
    {
      "id": "recommendations_generator_rec_2",
      "title": "اختبار التعديل مع جمهور مصغر",
      "description": "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      "priority": "medium",
      "category": "story_structure",
      "focus": "recommendation",
      "estimatedEffortHours": 6,
      "owner": "منسق التطوير",
      "impact": "يوفر دلائل سريعة على فعالية التعديل المقترح.",
      "successCriteria": [
        "جمع ملاحظات مكتوبة من خمسة مشاركين على الأقل.",
        "تسجيل نسبة رضا تتجاوز 70%."
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 85,
    "characterDepth": 84,
    "dialogueAuthenticity": 79,
    "pacingControl": 77,
    "thematicResonance": 81,
    "originality": 76,
    "productionFeasibility": 78,
    "audienceAlignment": 80,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "تساعد الأولويات المجمعة الفريق على رؤية الصورة الكاملة لكل وحدة."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "recommendations_generator_action_1",
        "description": "تنفيذ مراجعة مركزة بناءً على أهم استنتاجات الوحدة.",
        "owner": "كاتب السيناريو الرئيسي",
        "dueDate": "2025-01-20T09:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "توثيق النتائج في لوحة المتابعة المشتركة.",
          "مشاركة التحديث مع فريق التطوير قبل الاجتماع الأسبوعي."
        ]
      }
    ],
    "upcoming": [
      {
        "id": "recommendations_generator_action_2",
        "description": "ورشة داخلية لمناقشة التوصيات وتحديد المخاطر المحتملة.",
        "owner": "المنتج المنفذ",
        "dueDate": "2025-01-25T11:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "عقد جلسة تفاعلية لمدة ساعتين.",
          "تحديد ثلاث قرارات قابلة للتنفيذ للنسخة التالية."
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "مراجعة شاملة للوحدة",
        "date": "2025-02-05T10:00:00Z",
        "focus": "recommendation",
        "notes": "تقييم مدى تطبيق التعديلات خلال النسخة القادمة."
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "مدير التطوير",
          "role": "رئيس غرفة الكتابة",
          "channel": "Slack",
          "cadence": "مرتين أسبوعياً"
        },
        {
          "name": "فريق الإنتاج",
          "role": "Production Leads",
          "channel": "Email",
          "cadence": "أسبوعي"
        }
      ],
      "notes": "يرجى مشاركة التحديثات قبل 24 ساعة من كل اجتماع مراجعة."
    }
  }
}
```
