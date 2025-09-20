# وحدة كاشف التلميحات المبكرة

> ترسم الوحدة خريطة للتلميحات البصرية والسمعية وتضمن ظهورها قبل الذروة بشكل مدروس.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `foreshadowing`
- **الفئات المتأثرة:** `story_structure`

## 📥 المدخلات المطلوبة
- قائمة المشاهد مع الإشارات المبكرة المعروفة.
- ملاحظات فريق الكتابة حول الغموض المطلوب.

## 📤 المخرجات المتوقعة
- جدول يوضح موضع كل تلميح وتأثيره المتوقع.
- خطوات لتعزيز أو إعادة توزيع التلميحات قبل المشهد الحاسم.

## 🧩 حقول `details` المحورية
1. **details[].beats[]**: تحديد الضربات التي يجب أن يتواجد فيها التلميح.
1. **details[].insights[]**: شرح العلاقة بين التلميح والذروة الدرامية.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير كاشف التلميحات المبكرة",
  "summary": "يقيم توزيع التلميحات ويرصد لحظات تستحق إعادة التذكير، مع اقتراحات لتعزيز التأثير قبل الذروة.",
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
      "pacing"
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
      "id": "foreshadowing_map",
      "title": "خريطة التلميحات المبكرة",
      "focus": "foreshadowing",
      "expositionMethod": "flashback",
      "summary": "التلميحات البصرية والصوتية تمهد لذروة الكشف عن المتهم الحقيقي.",
      "insights": [
        {
          "id": "foreshadowing_locket",
          "headline": "القلادة كإشارة مبكرة",
          "analysisType": "foreshadowing",
          "summary": "تظهر القلادة الذهبية ثلاث مرات قبل الكشف عن هوية القاتل.",
          "impact": "توفر خيطاً بصرياً سهل التتبع للجمهور الواعي.",
          "confidence": 0.88,
          "supportingEvidence": [
            {
              "referenceId": "scene_15",
              "source": "screenplay.pdf",
              "excerpt": "كاميرا تتبع القلادة أثناء مغادرة الضحية الأولى.",
              "location": "صفحة 27",
              "confidence": 0.86
            }
          ],
          "recommendedActions": [
            "تعزيز ظهور القلادة في مشهد السوق لتثبيت الرابط لدى المشاهد."
          ]
        }
      ],
      "beats": [
        {
          "type": "pinch_point",
          "description": "اكتشاف سامر للقلادة في صندوق الدليل.",
          "pages": {
            "start": 54,
            "end": 55
          },
          "intensity": 75
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "foreshadowing_detector_rec_1",
      "title": "تحديد إجراء مركزي للنسخة المقبلة",
      "description": "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      "priority": "high",
      "category": "story_structure",
      "focus": "foreshadowing",
      "estimatedEffortHours": 12,
      "owner": "كاتب السيناريو الرئيسي",
      "impact": "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      "successCriteria": [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل."
      ]
    },
    {
      "id": "foreshadowing_detector_rec_2",
      "title": "اختبار التعديل مع جمهور مصغر",
      "description": "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      "priority": "medium",
      "category": "story_structure",
      "focus": "foreshadowing",
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
    "narrativeCohesion": 83,
    "characterDepth": 84,
    "dialogueAuthenticity": 79,
    "pacingControl": 79,
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
      "التلميحات موزعة بشكل جيد لكنها تحتاج إلى تأكيد قبل المشهد الأخير."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "foreshadowing_detector_action_1",
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
        "id": "foreshadowing_detector_action_2",
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
        "focus": "foreshadowing",
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
