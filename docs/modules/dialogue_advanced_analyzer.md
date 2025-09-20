# وحدة محلل الحوار المتطور

> تقيّم الوحدة جودة الحوار، مستويات التلميح، وإيقاع التبادل بين الشخصيات.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `dialogue`
- **الفئات المتأثرة:** `dialogue`

## 📥 المدخلات المطلوبة
- نص الحوار بالصيغة النهائية أو نسخة قابلة للتحرير.
- تسجيلات أو قراءات سابقة للجلسات الصوتية إن وجدت.

## 📤 المخرجات المتوقعة
- قياسات التوازن بين الحوار الصريح والضمني.
- مؤشرات الإيقاع الصوتي وزمن المشاهد الحوارية.

## 🧩 حقول `details` المحورية
1. **details[].insights[]**: استنتاجات حول فاعلية السطور ودقة التلميح تحت السطور.
1. **details[].metrics[]**: مقاييس كمية لعدد السطور وطول المشهد وتأثيره العاطفي.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير محلل الحوار المتطور",
  "summary": "يستعرض التوازن بين النص الصريح والتلميح ويقترح تحسينات للإيقاع في المشاهد الجدلية.",
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
      "dialogue"
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
      "id": "dialogue_subtext",
      "title": "تحليل التلميح تحت السطور",
      "focus": "dialogue",
      "expositionMethod": "subtext",
      "summary": "يتلاعب السيناريو بالمعاني الضمنية لإظهار الصراع الخفي.",
      "insights": [
        {
          "id": "dialogue_conflict",
          "headline": "المزاح الحاد يكشف العداء",
          "analysisType": "dialogue",
          "summary": "المشاجرة بين سامر ورفيقه تستخدم الاستعارات بدلاً من المواجهة المباشرة.",
          "impact": "يحافظ على التوتر لكنه يربك المتابع في بعض اللحظات.",
          "confidence": 0.78,
          "supportingEvidence": [
            {
              "referenceId": "scene_28",
              "source": "transcript.txt",
              "excerpt": "رفيق سامر: أحياناً يجب أن تحرق المصابيح لتكشف الحشرات.",
              "location": "صفحة 58",
              "confidence": 0.72
            }
          ],
          "recommendedActions": [
            "إضافة رد لفظي مباشر يؤكد الخلاف."
          ]
        }
      ],
      "metrics": [
        {
          "name": "إيقاع الحوار",
          "score": 74,
          "weight": 0.25,
          "justification": "توجد مقاطع تتجاوز ثلاث صفحات من دون تبديل في المكان."
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "dialogue_rec_density",
      "title": "تقليل طول المشهد الجدلي",
      "description": "تحرير المشهد 28 لتقليل التكرار وإتاحة لحظة صمت تدعم التوتر.",
      "priority": "medium",
      "category": "dialogue",
      "focus": "dialogue",
      "estimatedEffortHours": 5,
      "owner": "كاتب الحوار",
      "impact": "يعزز إيقاع المشهد ويحافظ على انتباه المشاهد.",
      "successCriteria": [
        "خفض عدد الأسطر بنسبة 20%.",
        "الحفاظ على المعنى العاطفي للمواجهة."
      ]
    },
    {
      "id": "dialogue_rec_subtext",
      "title": "تعزيز الوضوح في التلميح",
      "description": "إضافة جملة تأكيدية تكشف نوايا رفيق سامر في نهاية المشهد.",
      "priority": "high",
      "category": "dialogue",
      "focus": "dialogue",
      "estimatedEffortHours": 3,
      "owner": "مساعد الكتابة",
      "impact": "يسهّل على الجمهور فهم الاتجاه الدرامي دون فقد الغموض.",
      "successCriteria": [
        "اختبار السطر الجديد في قراءة الطاولة القادمة.",
        "تحقيق موافقة 4 من أصل 5 من فريق التمثيل."
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 80,
    "characterDepth": 84,
    "dialogueAuthenticity": 83,
    "pacingControl": 77,
    "thematicResonance": 81,
    "originality": 76,
    "productionFeasibility": 73,
    "audienceAlignment": 80,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "اللغة الحوارية غنية لكنها تحتاج إلى لحظات توقف محسوبة."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "dialogue_advanced_analyzer_action_1",
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
        "id": "dialogue_advanced_analyzer_action_2",
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
        "focus": "dialogue",
        "notes": "تقييم مدى تطبيق التعديلات خلال النسخة القادمة."
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "مشرف الحوار",
          "role": "Lead Dialogue Coach",
          "channel": "Zoom",
          "cadence": "جلسة أسبوعية"
        }
      ],
      "notes": "ينبغي إرسال النسخة المعدلة قبل 12 ساعة من الجلسة الصوتية."
    }
  }
}
```
