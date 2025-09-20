import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محاكي صوت الشخصية.
 * تهدف إلى ضمان إنتاج حوار يتماشى مع السمات المحددة للشخصية مع توثيق تحليلي كامل.
 */
export const CHARACTER_VOICE_INSTRUCTIONS = `### مهمة محاكي صوت الشخصية (TaskType.CHARACTER_VOICE)

#### الهدف
إعادة إنتاج حوار أو سرد قصير بصوت شخصية محددة مع الحفاظ على نبرتها اللغوية، قاموسها العاطفي، وإيقاعها المميز.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل عيّنات سابقة للشخصية، استخراج السمات الأسلوبية، توليد نص جديد متسق، وتوثيق مبررات الاختيارات.
- لا يشمل: تغيير أحداث الحبكة المحورية، أو تعديل شخصية مختلفة دون توجيه، أو كتابة نصوص عامة لا تعكس الصوت الأصلي.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **اسم الشخصية ومعرّفها**: كما هو مسجل في الوحدات الأخرى.
2. **عينة مرجعية**: 2-3 مقاطع حوارية أو سردية سابقة مع تحديد الصفحات أو الزمن بالثواني.
3. **سياق المشهد المطلوب**: المكان، الزمن، الهدف الدرامي، الحالة العاطفية (قيم بين 0-1 لشدة العاطفة إن توفرت).
4. **قيود لغوية أو أسلوبية**: مستوى الفصحى، إدراج مصطلحات تقنية، طول السطور (عدد الكلمات أو الثواني المتوقعة).

#### المخرجات المتوقعة
- **نص تقريري منسق**: يحتوي على فقرة تحليل صوتي، نقاط مرجعية للأسلوب، النص المولد بصيغة سيناريو، وملاحظات حول الاتساق.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "voiceBlueprint": {
    "characterId": "samar_lead",
    "lexicalPalette": ["مصطلحات قانونية", "لغة وجدانية معتدلة"],
    "syntaxProfile": "جمل متوسطة الطول مع استخدام مكثف للأفعال المضارعة",
    "rhythm": "ثابت مع زيادات مفاجئة أثناء الانفعال",
    "emotionalRange": {
      "calm": 0.4,
      "determined": 0.85,
      "vulnerable": 0.3
    }
  },
  "generatedDialogue": {
    "format": "screenplay",
    "lines": [
      { "speaker": "سمر", "content": "(تلتقط أنفاسها) لن أوقع على تسوية تحجب الحقيقة." },
      { "speaker": "سعيد", "content": "تظنين أن العالم سيتغير بخطاب واحد؟" }
    ],
    "stageDirections": ["تضغط سمر على الملف", "تتقدم خطوة نحو سعيد"],
    "wordCount": 86,
    "durationSeconds": 45
  },
  "consistencyChecks": {
    "referenceComparison": [
      {
        "sampleId": "ref_page_58",
        "matchingScore": 0.82,
        "notes": "تم الحفاظ على الإيقاع التحذيري ونبرة الثقة." 
      }
    ],
    "vocabularyOverlap": 0.67,
    "emotionalAlignment": 0.8,
    "styleDeviations": ["تم تقليل استخدام الجمل الاسمية لإبقاء الإيقاع نشطاً"]
  },
  "adaptationNotes": [
    {
      "context": "المشهد القانوني",
      "rationale": "تم إدخال استعارة خفيفة لتكثيف الأثر العاطفي",
      "approvalNeeded": true
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **دقة الصوت**: قياس تشابه المفردات والإيقاع مع المقاطع المرجعية بنسبة لا تقل عن 0.75.
- **الوضوح الدرامي**: يجب أن يخدم الحوار الهدف الدرامي للمشهد بوضوح.
- **التوازن العاطفي**: الحفاظ على تدرج المشاعر دون إفراط أو نقصان مقارنة بالسياق المطلوب.
- **خلو النص من التعارضات**: عدم تقديم معلومات تناقض وحدات التحليل الأخرى.
- **الجاهزية للإنتاج**: صياغة قابلة للقراءة المباشرة في النص النهائي.

#### خطوات التنفيذ خطوة بخطوة
1. تحليل المقاطع المرجعية واستخراج السمات الأسلوبية وتوثيقها في \`voiceBlueprint\`.
2. تحديد الهدف الدرامي للمشهد ودرجة التوتر بالتنسيق مع وحدتي \`Conflict Dynamics\` و\`Completion\` إن لزم.
3. توليد مسودة حوار وفق التنسيق المطلوب، ومراجعتها لغوياً للتأكد من الالتزام بالقواعد.
4. إجراء مطابقة مع العينات المرجعية وتعبئة قيم التشابه في \`consistencyChecks\`.
5. صياغة التقرير النصي وإدراج الحوار المولد مع التعليقات المسرحية.
6. إعداد JSON النهائي والتأكد من اتساق أسماء الشخصيات والمراجع مع بقية الوحدات.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **قلة العينات المرجعية**: استخدم تحليل اللغة العامة للشخصية من وحدات أخرى ودوّن مستوى الثقة المنخفض.
- **تعارض في نبرة الشخصية بعد تغير درامي**: برر التغيير في \`adaptationNotes\` مع طلب موافقة.
- **طول حوار غير متوافق**: قم بتعديل عدد السطور أو طولها مع الحفاظ على جوهر الرسالة.
- **اختلاف المصطلحات التقنية**: تحقق من دليل المصطلحات، وفي حال عدم التوفر أضف ملاحظة تطلب المصادقة.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقطع مرجعي قبل التحليل:**
> "سمر: نحن لا نحارب طيفاً، بل نظاماً يخاف من الضوء." (صفحة 45)

**الحوار المولد بعد التحليل:**
> سمر: (تضع الملف على الطاولة) لن أسمح أن يتحول الصمت إلى شهادة زور.
> سعيد: إن قلبت الطاولة الآن ستسقط مع الأوراق يا سمر.
> سمر: ربما، لكن سقوط الورق أخف من سقوطنا نحن.

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير صوت الشخصية لسمر في \"قضية الصمت\"",
  "summary": "الحوار المولد يحافظ على نبرة سمر الصلبة مع إضاءة جانبها العاطفي المكبوت دون كسر المنطق الدرامي.",
  "metadata": {
    "workId": "wrk_silencecase_2025",
    "workTitle": "قضية الصمت",
    "workFormat": "feature_film",
    "genres": ["legal", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_three",
    "priority": "medium",
    "categories": ["character", "dialogue"],
    "language": "ar",
    "locale": "ar-LB",
    "analyst": "Character Voice Synth",
    "collaborators": ["Dialogue Supervisor"],
    "createdAt": "2025-04-06T09:30:00Z",
    "updatedAt": "2025-04-06T10:15:00Z",
    "analysisWindow": {
      "start": "2025-04-05T07:30:00Z",
      "end": "2025-04-06T07:00:00Z"
    },
    "wordCount": 2500,
    "runtimeMinutes": 3,
    "logline": "محامية تتحدى الفساد في قضية تهدد مستقبل عائلتها.",
    "referenceWorks": ["Erin Brockovich (2000)"],
    "productionCompany": "Cedars Pictures",
    "notes": ["تم استخدام مقاطع من الصفحات 34، 45، 73 كمرجع صوتي."]
  },
  "details": [
    {
      "id": "voice_samar_scene12",
      "title": "مشهد المواجهة في غرفة الاجتماعات",
      "focus": "character",
      "expositionMethod": "dialogue",
      "summary": "النبرة تجمع بين الصرامة والجرأة مع لمحة هشاشة في الجملة الأخيرة.",
      "personas": [
        {
          "name": "سمر",
          "type": "protagonist",
          "goals": ["كشف الفساد"],
          "transformation": "تنتقل من الحذر إلى الهجوم المباشر",
          "screenTimeShare": 41
        }
      ],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "voiceBlueprint": {
        "characterId": "samar_lead",
        "lexicalPalette": ["لغة قانونية", "صور ضوئية"],
        "syntaxProfile": "جمل فعلية متوسطة الطول",
        "rhythm": "ثابت يتسارع عند الانفعال",
        "emotionalRange": {
          "calm": 0.35,
          "determined": 0.88,
          "vulnerable": 0.32
        }
      },
      "generatedDialogue": {
        "format": "screenplay",
        "lines": [
          { "speaker": "سمر", "content": "(تضع الملف على الطاولة) لن أسمح أن يتحول الصمت إلى شهادة زور." },
          { "speaker": "سعيد", "content": "إن قلبت الطاولة الآن ستسقط مع الأوراق يا سمر." },
          { "speaker": "سمر", "content": "ربما، لكن سقوط الورق أخف من سقوطنا نحن." }
        ],
        "stageDirections": ["تقترب من سعيد", "تخفض صوتها عند الجملة الأخيرة"],
        "wordCount": 94,
        "durationSeconds": 52
      },
      "consistencyChecks": {
        "referenceComparison": [
          {
            "sampleId": "ref_page_45",
            "matchingScore": 0.83,
            "notes": "تم الحفاظ على الجمل الفعلية وتدرج الثقة." 
          }
        ],
        "vocabularyOverlap": 0.7,
        "emotionalAlignment": 0.81,
        "styleDeviations": ["استخدام تشبيه جديد يتطلب موافقة"]
      },
      "adaptationNotes": [
        {
          "context": "المواجهة",
          "rationale": "أضيف تشبيه سقوط الورق لزيادة الأثر البصري",
          "approvalNeeded": true
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "voice_confirm_metaphor",
      "title": "اعتماد التشبيه الجديد",
      "description": "مراجعة التشبيه مع المخرج لضمان توافقه مع رؤية المشهد.",
      "priority": "low",
      "category": "dialogue",
      "focus": "character",
      "estimatedEffortHours": 2,
      "owner": "Dialogue Supervisor",
      "impact": "يضمن اتساق اللغة المجازية",
      "dependencies": [],
      "successCriteria": [
        "توثيق قرار القبول أو الرفض",
        "تحديث نسخة الحوار المعتمدة"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 82,
    "characterDepth": 86,
    "dialogueAuthenticity": 90,
    "pacingControl": 78,
    "thematicResonance": 80,
    "originality": 75,
    "productionFeasibility": 85,
    "audienceAlignment": 83,
    "localizationReadiness": 79,
    "confidenceInterval": {
      "lowerBound": 74,
      "upperBound": 90
    },
    "qualitativeNotes": [
      "أوصي بمراجعة طول السطر الثاني لتقليل التشبع المعلوماتي.",
      "النبرة متسقة مع ما أنتجته وحدة تحليل الشخصيات." 
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "voice_review_session",
        "description": "جلسة مراجعة صوتية مع المخرج",
        "owner": "Dialogue Supervisor",
        "dueDate": "2025-04-07T14:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "الحصول على ملاحظات صوتية",
          "تأكيد قبول التشبيه"
        ]
      }
    ],
    "upcoming": [
      {
        "id": "voice_actor_table_read",
        "description": "قراءة طاولة مع الممثلين لاختبار الإيقاع",
        "owner": "Casting Director",
        "dueDate": "2025-04-12T11:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "تسجيل ملاحظات حول التنفس والإيقاع",
          "تحديد أي تعديل لغوي مطلوب"
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "تحديث نسخة الحوار",
        "date": "2025-04-15T09:30:00Z",
        "focus": "dialogue",
        "notes": "التأكد من دمج الملاحظات المعتمدة." 
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "قائدة غرفة الكتابة",
          "role": "Head Writer",
          "channel": "Slack",
          "cadence": "أسبوعي"
        }
      ],
      "notes": "إرسال التسجيل الصوتي للمشهد بعد جلسة القراءة." 
    }
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- تأكد من توافق \`voiceBlueprint\` مع بيانات \`Character Deep Analyzer\` حول الدوافع.
- شارك \`generatedDialogue\` مع وحدة \`Conflict Dialogue Generator\` لتجنب التكرار أو التناقض في المشهد ذاته.
- حافظ على معرف الشخصية ذاته لتمكين تتبع التطور في لوحة التحكم المشتركة.
`;
