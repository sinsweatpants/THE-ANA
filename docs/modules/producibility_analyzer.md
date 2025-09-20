# وحدة محلل القابلية للإنتاج

> تقيّم الوحدة الجوانب اللوجستية والميزانية وتقترح حلولاً لتقليل التكاليف.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `production`
- **الفئات المتأثرة:** `production`

## 📥 المدخلات المطلوبة
- تقارير الميزانية الأولية وخطط الإنتاج.
- جداول المواقع وعدد أيام التصوير المتوقعة.

## 📤 المخرجات المتوقعة
- تقديرات التوفير المحتمل بناءً على إعادة الهيكلة.
- خارطة أولويات للتعديلات الإنتاجية الحرجة.

## 🧩 حقول `details` المحورية
1. **details[].insights[]**: تحليل مفصل للتكاليف المرتفعة ومصادر الضغط اللوجستي.
1. **details[].metrics[]**: مقاييس مقارنة بين الخطة الحالية والخيارات البديلة.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير محلل القابلية للإنتاج",
  "summary": "يقيّم الملاءمة اللوجستية للمشاهد المكثفة ويقترح تعديلات تقلل التكاليف دون المساس بالحبكة.",
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
    "priority": "critical",
    "categories": [
      "production"
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
      "id": "production_scope",
      "title": "متطلبات الإنتاج العملية",
      "focus": "production",
      "expositionMethod": "action",
      "summary": "التسلسل الثالث يحتاج إلى إعادة هيكلة لتقليل المواقع الخارجية المكلفة.",
      "insights": [
        {
          "id": "production_budget",
          "headline": "تكلفة المشهد المفتوح مرتفعة",
          "analysisType": "production",
          "summary": "المطاردة في السوق تحتاج إلى 200 كومبارس و12 موقعاً مختلفاً.",
          "impact": "يرفع الميزانية إلى 180 ألف دولار فوق المخصص.",
          "confidence": 0.82,
          "supportingEvidence": [
            {
              "referenceId": "budget_sheet_v3",
              "source": "budget.xlsx",
              "excerpt": "تكلفة العنصر البشري للمشهد تصل إلى 95 ألف دولار.",
              "location": "تبويب Sequence 3",
              "confidence": 0.78
            }
          ],
          "recommendedActions": [
            "دمج المطاردة في موقعين رئيسيين بدل ستة.",
            "استبدال بعض الإضافات بتأثيرات رقمية مدروسة."
          ]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "producibility_streamline",
      "title": "إعادة توزيع مواقع التصوير",
      "description": "دمج مواقع التسلسل الثالث في موقعين رئيسيين لتقليل الانتقالات.",
      "priority": "high",
      "category": "production",
      "focus": "production",
      "estimatedEffortHours": 16,
      "owner": "مدير الإنتاج",
      "impact": "يخفض التكلفة الإجمالية بنسبة 18%.",
      "successCriteria": [
        "الحصول على موافقة المواقع البديلة.",
        "تحديث الجدول الزمني دون زيادة في الأيام."
      ]
    },
    {
      "id": "producibility_fx_mix",
      "title": "موازنة المؤثرات العملية والرقمية",
      "description": "تحليل اللقطات التي يمكن تحويلها إلى مؤثرات رقمية منخفضة التكلفة.",
      "priority": "medium",
      "category": "production",
      "focus": "production",
      "estimatedEffortHours": 10,
      "owner": "مشرف المؤثرات",
      "impact": "يحافظ على الجودة البصرية مع تقليل الحاجة للكومبارس.",
      "successCriteria": [
        "إعداد قائمة من ثلاثة خيارات بديلة لكل لقطة عالية التكلفة."
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
    "productionFeasibility": 65,
    "audienceAlignment": 80,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "الجدول الحالي يحتاج إلى دعم إضافي في إدارة المواقع."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "producibility_analyzer_action_1",
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
        "id": "producibility_analyzer_action_2",
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
        "focus": "production",
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
