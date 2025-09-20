# وحدة محلل السياق الثقافي والتاريخي

> تضمن الوحدة دقة التمثيل الثقافي واللغوي ومطابقة السياق التاريخي للبيئة المختارة.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `cultural`
- **الفئات المتأثرة:** `cultural_context`

## 📥 المدخلات المطلوبة
- السيناريو الكامل مع الهوامش الثقافية المرفقة.
- قائمة بالمراجع التاريخية أو الاستشاريين المعتمدين.

## 📤 المخرجات المتوقعة
- مناطق حساسة تحتاج إلى تدقيق ثقافي إضافي.
- اقتراحات للتوطين اللغوي ومراعاة الجمهور المحلي.

## 🧩 حقول `details` المحورية
1. **details[].insights[]**: الملاحظات المتعلقة بالأصالة اللغوية والسياق الاجتماعي.
1. **details[].insights[].recommendedActions**: إجراءات التحقق الميداني أو الاستشاري اللازمة.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير محلل السياق الثقافي والتاريخي",
  "summary": "يراجع دقة التمثيل الثقافي ويشير إلى مواضع تحتاج إلى توطين لغوي أدق للحفاظ على المصداقية المحلية.",
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
      "cultural_context",
      "market_positioning"
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
      "id": "cultural_context",
      "title": "السياق الاجتماعي للمشهد الحضري",
      "focus": "cultural",
      "expositionMethod": "text_on_screen",
      "summary": "يعكس السيناريو تحولات القاهرة المعاصرة بين الريادة التقنية والفوارق الاجتماعية.",
      "insights": [
        {
          "id": "cultural_authenticity",
          "headline": "المفردات المحلية تتطلب مراجعة",
          "analysisType": "cultural",
          "summary": "بعض العبارات باللهجة السورية تظهر في مشهد تدور أحداثه في القاهرة.",
          "impact": "قد يؤثر على مصداقية العمل لدى الجمهور المحلي.",
          "confidence": 0.76,
          "supportingEvidence": [
            {
              "referenceId": "scene_19",
              "source": "script_notes.docx",
              "excerpt": "الشخصية تقول: \"شو بدك مني؟\"",
              "location": "صفحة 41",
              "confidence": 0.7
            }
          ],
          "recommendedActions": [
            "استشارة مدقق لغوي مصري قبل القفل النهائي."
          ]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "cultural_historical_analyzer_rec_1",
      "title": "تحديد إجراء مركزي للنسخة المقبلة",
      "description": "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      "priority": "high",
      "category": "cultural_context",
      "focus": "cultural",
      "estimatedEffortHours": 12,
      "owner": "كاتب السيناريو الرئيسي",
      "impact": "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      "successCriteria": [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل."
      ]
    },
    {
      "id": "cultural_historical_analyzer_rec_2",
      "title": "اختبار التعديل مع جمهور مصغر",
      "description": "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      "priority": "medium",
      "category": "cultural_context",
      "focus": "cultural",
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
    "thematicResonance": 81,
    "originality": 76,
    "productionFeasibility": 73,
    "audienceAlignment": 80,
    "localizationReadiness": 68,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "البيئة الحضرية مقنعة لكن اللهجة تحتاج إلى توحيد."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "cultural_historical_analyzer_action_1",
        "description": "تنظيم جلسة مراجعة لغوية مع مستشار اللهجة المصري.",
        "owner": "المنتج الإبداعي",
        "dueDate": "2025-01-18T14:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "توثيق جميع التعليقات في مستند مركزي.",
          "تحديث 90% من الجمل المعلقة خلال أسبوع."
        ]
      }
    ],
    "upcoming": [
      {
        "id": "cultural_historical_analyzer_action_2",
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
        "focus": "cultural",
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
