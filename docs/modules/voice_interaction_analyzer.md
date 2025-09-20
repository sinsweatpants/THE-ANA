# وحدة محلل التفاعل الصوتي

> تتبع الوحدة التغييرات في الأداء الصوتي وتقدم توصيات لضبط الإيقاع والتنغيم.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `voice`
- **الفئات المتأثرة:** `sound_design`

## 📥 المدخلات المطلوبة
- تسجيلات أولية أو جلسات قراءة الطاولة.
- ملاحظات المخرج الصوتي حول الأداء المتوقع.

## 📤 المخرجات المتوقعة
- مخططات التباين في التنغيم ومستويات الشدة.
- اقتراحات لتحسين الاتساق بين الجلسات التسجيلية.

## 🧩 حقول `details` المحورية
1. **details[].insights[]**: تحليل لكل شخصية حول وضوح الصوت وتعبيره العاطفي.
1. **details[].insights[].recommendedActions**: خطوات تدريبية أو تعليمات أداء للتسجيل القادم.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير محلل التفاعل الصوتي",
  "summary": "يفحص التوازن بين الإيقاع الصوتي والتعبير العاطفي، مع خطوات لتحسين الاتساق بين الجلسات.",
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
      "sound_design",
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
      "id": "voice_modulation",
      "title": "تحليل التفاعل الصوتي",
      "focus": "voice",
      "expositionMethod": "voice_over",
      "summary": "يستعرض التفاعل بين الحوارات المسجلة والنبرة العاطفية للشخصيات.",
      "insights": [
        {
          "id": "voice_clarity",
          "headline": "نبرة الشخصية الثانوية غير متسقة",
          "analysisType": "voice",
          "summary": "تتغير سرعة كلام ليلى بين المشاهد الرسمية والحميمية دون مبرر.",
          "impact": "يؤثر على مصداقية الأداء الصوتي المتوقع.",
          "confidence": 0.74,
          "supportingEvidence": [
            {
              "referenceId": "audio_session_02",
              "source": "voice_samples.wav",
              "excerpt": "تفاوت في السرعة بين الدقيقة 01:20 و02:05",
              "location": "مشهد 18",
              "confidence": 0.72
            }
          ],
          "recommendedActions": [
            "توفير إرشادات أداء أدق للممثلة في المشاهد العاطفية."
          ]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "voice_interaction_analyzer_rec_1",
      "title": "تحديد إجراء مركزي للنسخة المقبلة",
      "description": "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      "priority": "high",
      "category": "sound_design",
      "focus": "voice",
      "estimatedEffortHours": 12,
      "owner": "كاتب السيناريو الرئيسي",
      "impact": "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      "successCriteria": [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل."
      ]
    },
    {
      "id": "voice_interaction_analyzer_rec_2",
      "title": "اختبار التعديل مع جمهور مصغر",
      "description": "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      "priority": "medium",
      "category": "sound_design",
      "focus": "voice",
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
    "dialogueAuthenticity": 81,
    "pacingControl": 77,
    "thematicResonance": 81,
    "originality": 76,
    "productionFeasibility": 73,
    "audienceAlignment": 80,
    "localizationReadiness": 72,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "التسجيلات الأولية واعدة لكنها تحتاج إلى ضبط ديناميكي أدق."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "voice_interaction_analyzer_action_1",
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
        "id": "voice_interaction_analyzer_action_2",
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
        "focus": "voice",
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
