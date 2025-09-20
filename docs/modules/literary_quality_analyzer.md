# وحدة محلل الجودة الأدبية

> ترصد الوحدة انسجام الصوت السردي والبناء الأدبي وتكشف مناطق الترهل أو التكرار.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `structure`
- **الفئات المتأثرة:** `story_structure`

## 📥 المدخلات المطلوبة
- نص السيناريو المصحوب بتعليقات التحرير السابقة.
- ملاحظات الكاتب حول الأسلوب الأدبي المفضل.

## 📤 المخرجات المتوقعة
- تقييم تفصيلي للإيقاع داخل كل فصل.
- توصيات لتحسين الصوت السردي وضبط التكرار.

## 🧩 حقول `details` المحورية
1. **details[].insights[]**: تحليل نوعي للجمل الطويلة، الاستعارات، وفاعليتها.
1. **details[].metrics[]**: مؤشرات كمية لعدد الصفحات لكل فصل ومعدل التقدم الدرامي.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير محلل الجودة الأدبية",
  "summary": "يراجع الإيقاع السردي والصوت الأدبي، مع توصيات لضغط الفصل الثالث وتحسين التماسك.",
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
      "themes"
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
      "id": "literary_voice",
      "title": "البنية الأدبية والصوت السردي",
      "focus": "structure",
      "expositionMethod": "voice_over",
      "summary": "العمل يوظف راوٍ داخلي يمنح عمقاً لكنه يحتاج إلى ضبط في الإيقاع.",
      "insights": [
        {
          "id": "structure_balance",
          "headline": "الفصل الثالث يحتاج إلى ضغط",
          "analysisType": "structure",
          "summary": "تتكرر الحجج الفلسفية ثلاث مرات في 15 صفحة.",
          "impact": "يقلل من الطاقة الدرامية قبل الذروة.",
          "confidence": 0.79,
          "supportingEvidence": [
            {
              "referenceId": "scene_90",
              "source": "screenplay.pdf",
              "excerpt": "الراوي يكرر مقولة \"العدالة مرآة مكسورة\" للمرة الثالثة.",
              "location": "صفحة 102",
              "confidence": 0.75
            }
          ]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "literary_quality_analyzer_rec_1",
      "title": "تحديد إجراء مركزي للنسخة المقبلة",
      "description": "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      "priority": "high",
      "category": "story_structure",
      "focus": "structure",
      "estimatedEffortHours": 12,
      "owner": "كاتب السيناريو الرئيسي",
      "impact": "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      "successCriteria": [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل."
      ]
    },
    {
      "id": "literary_quality_analyzer_rec_2",
      "title": "اختبار التعديل مع جمهور مصغر",
      "description": "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      "priority": "medium",
      "category": "story_structure",
      "focus": "structure",
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
    "narrativeCohesion": 79,
    "characterDepth": 84,
    "dialogueAuthenticity": 79,
    "pacingControl": 77,
    "thematicResonance": 84,
    "originality": 76,
    "productionFeasibility": 73,
    "audienceAlignment": 80,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "اللغة الأدبية ثرية لكن الطول الزائد في الخاتمة يقلل التأثير."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "literary_quality_analyzer_action_1",
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
        "id": "literary_quality_analyzer_action_2",
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
        "focus": "structure",
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
