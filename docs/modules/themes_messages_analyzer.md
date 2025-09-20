# وحدة محلل الموضوعات والرسائل

> ترصد الوحدة الثيمات الرئيسة وتتابع الرموز المتكررة ومدى دعمها للرسالة النهائية.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `theme`
- **الفئات المتأثرة:** `themes`

## 📥 المدخلات المطلوبة
- ملخصات المشاهد أو خريطة الموضوعات حسب النسخ السابقة.
- قائمة بالرموز أو العناصر المراد إبرازها.

## 📤 المخرجات المتوقعة
- تحليل لمدى تكرار الثيمات في كل فصل.
- توصيات لتعزيز الرمزية في الخاتمة أو الذروة.

## 🧩 حقول `details` المحورية
1. **details[].insights[]**: تفسير كل رمز أو ثيمة وارتباطه بالبنية الدرامية.
1. **details[].metrics[]**: مؤشرات كمية لانتشار الثيمة عبر المشاهد.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير محلل الموضوعات والرسائل",
  "summary": "يحلل الرموز المتكررة ودورها في تأكيد ثيمة العدالة، ويقترح تعزيز الخاتمة بالموازاة البصرية.",
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
      "themes",
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
      "id": "theme_corruption",
      "title": "ثيمة الفساد مقابل العدالة",
      "focus": "theme",
      "expositionMethod": "action",
      "summary": "الصراع بين العدالة الشخصية والعدالة المؤسسية يوجّه السرد.",
      "insights": [
        {
          "id": "theme_mirror",
          "headline": "المرآة كرمز للتشظي",
          "analysisType": "theme",
          "summary": "تكرار مشاهد المرآة يعكس ازدواجية سامر وإخفاء الحقيقة.",
          "impact": "يوحد اللغة البصرية مع الثيمة المركزية.",
          "confidence": 0.9,
          "supportingEvidence": [
            {
              "referenceId": "scene_07",
              "source": "screenplay.pdf",
              "excerpt": "سامر ينظف مرآة متكسرة قبل مغادرته المنزل.",
              "location": "صفحة 12",
              "confidence": 0.86
            }
          ],
          "recommendedActions": [
            "تعزيز الرمز في مشهد النهاية بإعادة صورة المرآة."
          ]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "themes_messages_analyzer_rec_1",
      "title": "تحديد إجراء مركزي للنسخة المقبلة",
      "description": "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      "priority": "high",
      "category": "themes",
      "focus": "theme",
      "estimatedEffortHours": 12,
      "owner": "كاتب السيناريو الرئيسي",
      "impact": "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      "successCriteria": [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل."
      ]
    },
    {
      "id": "themes_messages_analyzer_rec_2",
      "title": "اختبار التعديل مع جمهور مصغر",
      "description": "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      "priority": "medium",
      "category": "themes",
      "focus": "theme",
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
    "narrativeCohesion": 82,
    "characterDepth": 84,
    "dialogueAuthenticity": 79,
    "pacingControl": 77,
    "thematicResonance": 86,
    "originality": 76,
    "productionFeasibility": 73,
    "audienceAlignment": 80,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "الرموز متسقة وتدعم الرسالة الرئيسة بفعالية."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "themes_messages_analyzer_action_1",
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
        "id": "themes_messages_analyzer_action_2",
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
        "focus": "theme",
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
