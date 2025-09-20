# وحدة محلل الشخصيات العميق

> تحلل الوحدة دوافع الشخصيات وتحولاتها وتفاعل العلاقات فيما بينها.

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** `character`
- **الفئات المتأثرة:** `character`

## 📥 المدخلات المطلوبة
- النص الكامل للسيناريو أو النسخة الحالية منه.
- ملاحظات الكاتب حول الأهداف الدرامية لكل شخصية رئيسة.

## 📤 المخرجات المتوقعة
- خرائط التطور العاطفي لكل شخصية محورية.
- مؤشرات التماسك بين الدوافع والأفعال عبر الفصول.

## 🧩 حقول `details` المحورية
1. **details[].personas[]**: تعريف بالشخصيات، أهدافها، ونسبة ظهورها على الشاشة.
1. **details[].relationships[]**: تحليل ديناميكيات العلاقات وقوتها الدرامية.
1. **details[].conflicts[]**: تحديد مصادر الصراع المرتبطة بكل شخصية وتحولاتها.

## 🧾 مثال JSON معتمد
```json
{
  "title": "تقرير محلل الشخصيات العميق",
  "summary": "يركز التقرير على قوس سامر العاطفي وتوازن علاقاته، مع توصيات لتعزيز التعاطف المبكر.",
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
      "character",
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
      "id": "character_arc_protagonist",
      "title": "قوس سامر الدرامي",
      "focus": "character",
      "expositionMethod": "dialogue",
      "summary": "يتحول سامر من محقق مثالي إلى شخصية تقبل الرمادية الأخلاقية.",
      "personas": [
        {
          "name": "سامر",
          "type": "protagonist",
          "goals": [
            "تحقيق العدالة لأخيه",
            "كشف شبكة الفساد"
          ],
          "transformation": "يتعلم أن الحقيقة قد تتطلب تسويات مؤلمة.",
          "screenTimeShare": 42
        }
      ],
      "insights": [
        {
          "id": "insight_motivation",
          "headline": "الدافع الجوهري يتضح متأخراً",
          "analysisType": "character",
          "summary": "لا يظهر مقتل الأخ كمحفز رئيسي إلا في منتصف الفصل الأول.",
          "impact": "يقل تعاطف الجمهور خلال المشاهد الافتتاحية.",
          "confidence": 0.85,
          "supportingEvidence": [
            {
              "referenceId": "scene_12",
              "source": "screenplay.pdf",
              "excerpt": "سامر: لن أسمح بأن تضيع قضية أخي مجدداً.",
              "location": "صفحة 34",
              "confidence": 0.8
            }
          ],
          "recommendedActions": [
            "إدراج مشهد فلاش باك مبكر يوضح فقدان الأخ.",
            "تعزيز الحوار الأول مع ليلى لشرح الدافع فوراً."
          ]
        }
      ],
      "beats": [
        {
          "type": "midpoint",
          "description": "المواجهة مع الضابط الفاسد تكسر ثقة سامر بالمؤسسة.",
          "pages": {
            "start": 65,
            "end": 70
          },
          "intensity": 78
        }
      ],
      "conflicts": [
        {
          "type": "interpersonal",
          "antagonistType": "institutional",
          "status": "escalating",
          "summary": "سامر يصطدم مع رؤسائه بعد رفضهم فتح التحقيق القديم.",
          "stakes": "خسارة القضية وتعريض أسرته للخطر."
        }
      ],
      "relationships": [
        {
          "characters": [
            "سامر",
            "ليلى"
          ],
          "relationshipType": "romantic",
          "tone": "متوتر بحذر",
          "strength": 64,
          "notes": "الحوار في الصفحة 40 يشير إلى عدم الثقة المتبادلة."
        }
      ],
      "metrics": [
        {
          "name": "وضوح الدافع",
          "score": 62,
          "weight": 0.3,
          "justification": "الدافع يظهر في الفصل الثاني فقط."
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "character_deep_analyzer_rec_1",
      "title": "تحديد إجراء مركزي للنسخة المقبلة",
      "description": "تنفيذ تعديل واحد عالي التأثير يدعم رؤية الوحدة الحالية.",
      "priority": "high",
      "category": "character",
      "focus": "character",
      "estimatedEffortHours": 12,
      "owner": "كاتب السيناريو الرئيسي",
      "impact": "يرفع جودة النسخة الجديدة ويعالج الملاحظة الأهم.",
      "successCriteria": [
        "توثيق التغيير قبل جلسة المراجعة القادمة.",
        "الحصول على موافقة المنتج المنفذ على التعديل."
      ]
    },
    {
      "id": "character_deep_analyzer_rec_2",
      "title": "اختبار التعديل مع جمهور مصغر",
      "description": "تجربة التعديل المقترح مع مجموعة مراجعة داخلية وجمع ردود الفعل.",
      "priority": "medium",
      "category": "character",
      "focus": "character",
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
    "characterDepth": 88,
    "dialogueAuthenticity": 79,
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
      "تمنح الشخصية الرئيسية عمقاً مقنعاً لكن مقدمة الدافع تحتاج إلى ضبط."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "character_deep_analyzer_action_1",
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
        "id": "character_deep_analyzer_action_2",
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
        "focus": "character",
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
