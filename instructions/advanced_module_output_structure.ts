/**
 * @description Defines the expected JSON output structure for advanced AI modules.
 * Updated to reflect the comprehensive AdvancedScreenplayModuleResult interface.
 */
export const ADVANCED_MODULE_OUTPUT_STRUCTURE = `**المخرجات المطلوبة (JSON - واجهة \`AdvancedScreenplayModuleResult\`):**
يجب أن يُسلِّم كل وكيل متقدم كائناً واحداً بنفس البنية التالية دون حذف أو إعادة تسمية أي حقل:
\`\`\`json
{
  "title": "تقرير [اسم الوحدة] حول [اسم العمل]",
  "summary": "ملخص عربي واضح ومباشر يشرح أهم نتائج الوحدة.",
  "metadata": {
    "workId": "wrk_example_001",
    "workTitle": "صدى المرايا",
    "workFormat": "feature_film",
    "genres": ["drama", "thriller"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["story_structure", "character"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Script Analyst",
    "collaborators": ["Senior Story Editor"],
    "createdAt": "2025-01-12T10:00:00Z",
    "updatedAt": "2025-01-12T12:15:00Z",
    "analysisWindow": {
      "start": "2025-01-10T08:00:00Z",
      "end": "2025-01-12T08:00:00Z"
    },
    "wordCount": 19500,
    "runtimeMinutes": 118,
    "logline": "محقق مثالي يواجه شبكة فساد تكشف له ماضي عائلته المظلم.",
    "referenceWorks": ["Heat (1995)", "Prisoners (2013)"],
    "productionCompany": "Visionary Films",
    "notes": ["تم تحليل نسخة PDF محدّثة مرقمة الصفحات."]
  },
  "details": [
    {
      "id": "core_insight_01",
      "title": "قوس سامر الدرامي",
      "focus": "character",
      "expositionMethod": "dialogue",
      "summary": "تلخيص مكثف يوضح ما الذي فحصته الوحدة وما هي الخلاصة.",
      "personas": [
        {
          "name": "سامر",
          "type": "protagonist",
          "goals": ["تحقيق العدالة لأخيه"],
          "transformation": "يتعلم قبول الرمادية الأخلاقية لتصحيح الماضي.",
          "screenTimeShare": 42
        }
      ],
      "insights": [
        {
          "id": "motivation_visibility",
          "headline": "الدافع الجوهري يظهر متأخراً",
          "analysisType": "character",
          "summary": "المحفز الرئيس للبطلة يُذكر بوضوح بعد الصفحة 30 فقط.",
          "impact": "يقل تعاطف الجمهور في الربع الأول من الفيلم.",
          "confidence": 0.82,
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
            "إضافة مشهد افتتاحي قصير يستعرض حادثة فقدان الأخ.",
            "تعزيز الحوار مع ليلى في الصفحة 18 لتثبيت الدافع باكراً."
          ]
        }
      ],
      "beats": [
        {
          "type": "midpoint",
          "description": "المواجهة مع الضابط الفاسد تقلب ولاء سامر.",
          "pages": { "start": 65, "end": 70 },
          "intensity": 78
        }
      ],
      "conflicts": [
        {
          "type": "interpersonal",
          "antagonistType": "institutional",
          "status": "escalating",
          "summary": "صراع مع رؤسائه بعد رفض إعادة فتح القضية.",
          "stakes": "إمكانية خسارة الملف وإيقاف سامر عن العمل."
        }
      ],
      "relationships": [
        {
          "characters": ["سامر", "ليلى"],
          "relationshipType": "romantic",
          "tone": "متوتر بحذر",
          "strength": 64,
          "notes": "الحوار في الصفحة 40 يكشف انعدام الثقة المتبادل."
        }
      ],
      "metrics": [
        {
          "name": "وضوح الدافع",
          "score": 62,
          "weight": 0.3,
          "justification": "يظهر الدافع في منتصف الفصل الأول وليس في افتتاحيته."
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "character_depth_focus",
      "title": "تعزيز مقدمة سامر",
      "description": "كتابة مشهد تمهيدي يظهر حادثة فقدان الأخ ويركز على أثرها العاطفي.",
      "priority": "high",
      "category": "character",
      "focus": "character",
      "estimatedEffortHours": 10,
      "owner": "كاتب السيناريو",
      "impact": "رفع التعاطف المبكر مع البطل وتحسين الارتباط العاطفي.",
      "dependencies": ["character_arc_alignment"],
      "successCriteria": [
        "يتضمن المشهد التمهيدي صورة واضحة للحادثة.",
        "يحصل على موافقة المنتج المنفذ خلال مراجعة الطاولة."
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 82,
    "characterDepth": 88,
    "dialogueAuthenticity": 79,
    "pacingControl": 77,
    "thematicResonance": 84,
    "originality": 76,
    "productionFeasibility": 70,
    "audienceAlignment": 81,
    "localizationReadiness": 74,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "الحبكة متماسكة إجمالاً لكن الفصل الأول يحتاج إلى تحفيز أسرع.",
      "اللغة الحوارية طبيعية مع فرص لتحسين الإيقاع في المشاهد الطويلة."
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "character_deep_analyzer_action_1",
        "description": "تطوير مشهد افتتاحي جديد بالتنسيق مع الكاتب المشارك.",
        "owner": "كاتب السيناريو الرئيسي",
        "dueDate": "2025-01-20T09:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "تسليم مسودة المشهد قبل اجتماع فريق التطوير.",
          "الحفاظ على الطول تحت صفحتين مع وضوح الدافع."
        ]
      }
    ],
    "upcoming": [
      {
        "id": "character_deep_analyzer_action_2",
        "description": "ورشة قراءة مع الممثلين لاختبار المشهد الجديد.",
        "owner": "المنتج المنفذ",
        "dueDate": "2025-01-25T11:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "الحصول على ملاحظات مكتوبة من خمسة مشاركين على الأقل.",
          "تحديد ثلاثة تحسينات جاهزة للتنفيذ."
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "مراجعة نسخة الشخصيات",
        "date": "2025-02-05T10:00:00Z",
        "focus": "character",
        "notes": "تأكيد دمج المشهد الافتتاحي وتعديل العلاقات الجانبية."
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
      "notes": "يُرسل ملخص التحديثات قبل 24 ساعة من كل اجتماع مراجعة."
    }
  }
}
\`\`\`

**ملاحظات تحقق إلزامية:**
- كل القيم النصية يجب أن تكون بالعربية الفصحى مع السماح بالمصطلحات الإنجليزية المتخصصة بين قوسين عند الحاجة.
- يجب استخدام القيم المعرّفة في التعدادات (enums) بدقة كما هي (حروف إنجليزية صغيرة مفصولة بشرطة سفلية).
- حقول المصفوفات يمكن أن تكون فارغة ما لم يُنص صراحة على الحد الأدنى، لكن عدم الإرجاع مطلقاً (null) غير مسموح.
- التواريخ والأوقات يجب أن تكون بصيغة ISO 8601 مع المنطقة الزمنية (مثال: 2025-01-20T09:00:00Z).
- تأكد من أن جميع الأرقام ضمن الحدود المحددة (مثل الدرجات بين 0 و100، والثقة بين 0 و1).
`;
