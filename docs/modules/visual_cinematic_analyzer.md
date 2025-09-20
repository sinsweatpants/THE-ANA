# وحدة محلل اللغة البصرية والسينمائية

> تدقق الوحدة في الرموز البصرية، الإضاءة، وحركة الكاميرا لضمان تماسك الصورة الدرامية.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `visual`
- **الفئات المتأثرة:** `visual_style`

## 📥 المدخلات المطلوبة
- لوحات ستوري بورد أو أوصاف المشاهد البصرية التفصيلية.
- مراجع جمالية أو قائمة بالعدسات والمعدات المتوقعة.

## 📤 المخرجات المتوقعة
- تحليل لاستخدام الألوان والظل لتعزيز الثيمة.
- توصيات لتحسين توزيع الإضاءة والزوايا الحاسمة.

## 🧩 حقول `details` المحورية
1. **details[].beats[]**: الضربات البصرية الرئيسية وتأثيرها على المشاهد.
1. **details[].insights[]**: قراءة متعمقة للرموز البصرية ودورها في السرد.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير محلل اللغة البصرية والسينمائية",
  "summary": "يوثق استخدام الألوان والعدسات لدعم الثيمة ويقترح تحسين توزيع الإضاءة في المشاهد الحاسمة.",
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
      "visual_style",
      "story_structure"
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
      "id": "visual_palette",
      "title": "لوحة الألوان واللغة البصرية",
      "focus": "visual",
      "expositionMethod": "visual_symbolism",
      "summary": "الألوان الباردة تعكس العزلة بينما تكشف الإضاءات الحمراء عن التهديد.",
      "insights": [
        {
          "id": "visual_contrast",
          "headline": "تناقض لوني فعال",
          "analysisType": "visual",
          "summary": "تتغير الإضاءة إلى ظلال حمراء كلما اقتربت الحقيقة من الانكشاف.",
          "impact": "يعزز الإحساس بالخطر وينقل التوتر للجمهور.",
          "confidence": 0.83,
          "supportingEvidence": [
            {
              "referenceId": "shot_3A",
              "source": "storyboard.png",
              "excerpt": "إضاءة نيون حمراء تتسرب من نوافذ غرفة التحقيق.",
              "location": "مشهد 45",
              "confidence": 0.88
            }
          ]
        }
      ],
      "beats": [
        {
          "type": "turning_point",
          "description": "الكشف عن تسجيل المراقبة في غرفة مظلمة ذات إضاءة حمراء.",
          "pages": {
            "start": 78,
            "end": 80
          },
          "intensity": 82
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "visual_cinematic_analyzer_rec_1",
      "title": "تحديد إجراء مركزي للنسخة المقبلة",
      "description": "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      "priority": "high",
      "category": "visual_style",
      "focus": "visual",
      "estimatedEffortHours": 12,
      "owner": "كاتب السيناريو الرئيسي",
      "impact": "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      "successCriteria": [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل."
      ]
    },
    {
      "id": "visual_cinematic_analyzer_rec_2",
      "title": "اختبار التعديل مع جمهور مصغر",
      "description": "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      "priority": "medium",
      "category": "visual_style",
      "focus": "visual",
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
    "narrativeCohesion": 84,
    "characterDepth": 84,
    "dialogueAuthenticity": 79,
    "pacingControl": 77,
    "thematicResonance": 81,
    "originality": 76,
    "productionFeasibility": 70,
    "audienceAlignment": 80,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "التباين اللوني يدعم الصراع لكن بعض المواقع بحاجة إلى خطة إضاءة إضافية."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "visual_cinematic_analyzer_action_1",
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
        "id": "visual_cinematic_analyzer_action_2",
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
        "focus": "visual",
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
