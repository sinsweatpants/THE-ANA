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
  \"voice_features\": {
    \"lexicon\": [\"مصطلحات قانونية\", \"صور ضوئية\"],
    \"avg_sentence_len\": 14,
    \"punctuation_profile\": {\"commas\": 0.4, \"dashes\": 0.2, \"ellipsis\": 0.1},
    \"idioms\": [\"لن أبيع الحقيقة\", \"الضوء يكشف كل شيء\"]
  },
  \"style_markers\": [
    {\"marker\": \"assertive_closings\", \"description\": \"تنهي الجمل بتأكيد قوي\", \"confidence\": 0.82},
    {\"marker\": \"controlled_emotion\", \"description\": \"تستخدم انفجارات عاطفية قصيرة\", \"confidence\": 0.74}
  ],
  \"exemplars\": [
    {\"source\": \"ref_page_58\", \"usage\": \"closing_argument\", \"excerpt\": \"نحن لا نحارب طيفاً بل منظومة\", \"notes\": \"تم الحفاظ على الجرس الإيقاعي.\"}
  ]
}
\`\`\``\`

#### معايير الجودة والتقييم
- **دقة الصوت**: قياس تشابه المفردات والإيقاع مع المقاطع المرجعية بنسبة لا تقل عن 0.75.
- **الوضوح الدرامي**: يجب أن يخدم الحوار الهدف الدرامي للمشهد بوضوح.
- **التوازن العاطفي**: الحفاظ على تدرج المشاعر دون إفراط أو نقصان مقارنة بالسياق المطلوب.
- **خلو النص من التعارضات**: عدم تقديم معلومات تناقض وحدات التحليل الأخرى.
- **الجاهزية للإنتاج**: صياغة قابلة للقراءة المباشرة في النص النهائي.

#### خطوات التنفيذ خطوة بخطوة
1. تحليل المقاطع المرجعية واستخراج السمات الأسلوبية وتوثيقها في \`voice_features\` مع أمثلة ممثلة في \`exemplars\`.
2. تحديد الهدف الدرامي للمشهد ودرجة التوتر بالتنسيق مع وحدتي \`Conflict Dynamics\` و\`Completion\` إن لزم.
3. توليد مسودة حوار وفق التنسيق المطلوب، ومراجعتها لغوياً للتأكد من الالتزام بالقواعد.
4. ربط المقاطع المرجعية بالحوار المولد وتحديث \`style_markers\` و\`exemplars\` بملاحظات التشابه.
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
      \"metrics\": [],
      \"voice_features\": {
        \"lexicon\": [\"مصطلحات قانونية\", \"تشبيهات ضوئية\", \"تعابير وجدانية\"],
        \"avg_sentence_len\": 13,
        \"punctuation_profile\": {\"commas\": 0.38, \"dashes\": 0.18, \"ellipsis\": 0.08},
        \"idioms\": [\"الضوء يكشف كل شيء\", \"لن أبيع الحقيقة\"]
      },
      \"style_markers\": [
        {
          \"marker\": \"assertive_closings\",
          \"description\": \"الجمل تنتهي بإعلان موقف واضح أو سؤال استنكاري\",
          \"confidence\": 0.82
        },
        {
          \"marker\": \"controlled_emotion\",
          \"description\": \"تمزج بين هدوء منطقي وطفرة انفعالية عند المواجهة\",
          \"confidence\": 0.74
        }
      ],
      \"exemplars\": [
        {
          \"source\": \"ref_page_58\",
          \"usage\": \"closing_argument\",
          \"excerpt\": \"نحن لا نحارب طيفاً بل منظومة تخاف من الضوء.\",
          \"notes\": \"تم اعتماد الجملة كنموذج للختام الحاسم.\"
        },
        {
          \"source\": \"generated_scene_23\",
          \"usage\": \"legal_confrontation\",
          \"excerpt\": \"لن أسمح أن يتحول الصمت إلى شهادة زور، فالصمت أيضاً توقيع.\",
          \"notes\": \"يُظهر الدمج بين العاطفة واللغة القانونية دون فقدان الإيقاع.\"
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
- تأكد من توافق \`voice_features\` مع بيانات \`Character Deep Analyzer\` حول الدوافع والجرس العاطفي.
- شارك المقاطع المعتمدة في \`exemplars\` مع وحدة \`Conflict Dialogue Generator\` لتجنب التكرار أو التناقض في المشهد ذاته.
- حافظ على معرف الشخصية ذاته لتمكين تتبع التطور في لوحة التحكم المشتركة.
`;
