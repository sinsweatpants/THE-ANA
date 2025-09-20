import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة توليد المشاهد الجديدة.
 * تضمن إنتاج مشهد أصيل متماسك سردياً وتقنياً مع توثيق كامل للقرارات.
 */
export const SCENE_GENERATOR_INSTRUCTIONS = `### مهمة مولد المشاهد (TaskType.SCENE_GENERATOR)

#### الهدف
ابتكار مشهد جديد (وصف بصري + حوار) متسق مع السياق السردي والقيود الإنتاجية المحددة، ويضيف قيمة درامية واضحة للحبكة أو الشخصيات.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل السياق الحالي، تحديد هدف المشهد، صياغة وصف بصري مفصل، بناء حوار متماسك، وتوثيق القرارات الإبداعية والإنتاجية.
- يشمل: مراعاة قيود المواقع والشخصيات والمدة الزمنية المطلوبة وفق \"نطاق الاستكمال\".
- لا يشمل: إعادة كتابة مشاهد سابقة بالكامل، تغيير مسار الحبكة الرئيسة، أو إدخال عناصر إنتاجية مستحيلة دون تفويض صريح.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **السياق السردي**: ملخص من 150-250 كلمة يتضمن موقع المشهد في التسلسل، هدفه الدرامي، والعلاقة مع المشاهد السابقة/اللاحقة.
2. **المتطلبات الإنتاجية**: عدد الشخصيات المتاحة، حدود الزمن (بالدقائق أو الصفحات السينمائية حيث كل صفحة ≈ دقيقة)، قيود الموقع أو المؤثرات.
3. **ملفات مرجعية** (اختياري): مقاطع من النص الأصلي أو ملاحظات المخرج/المنتج بصيغة نصية أو PDF ممهورة.
4. **نبرة المشهد**: وصف موجز (مثلاً: تشويق مظلم، كوميديا خفيفة) مع درجة الشدة العاطفية المطلوبة (0-1).
5. **الجمهور المستهدف والمنصة**: لتحديد حدود اللغة والمحتوى (مثلاً +13، منصة بث رقمي).

#### المخرجات المتوقعة
- **نص تقريري منسق**: يحتوي على أقسام (ملخص الهدف، مسار المشهد، الحوار المنجز، مبررات الاختيارات، توصيات الاستكمال) باستخدام عناوين فرعية وقوائم مرقمة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "sceneBlueprint": {
    "scope": "مثال: مشهد داخلي قصير يسبق الذروة",
    "location": "INT. غرفة السيرفرات",
    "timeOfDay": "Night",
    "characters": [
      { "name": "ليان", "role": "protagonist", "emotionalState": "مستنفرة" },
      { "name": "ماهر", "role": "antagonist", "emotionalState": "متماسك ظاهرياً" }
    ],
    "dramaticObjective": "ليان تحاول تنزيل دليل الفساد قبل اكتشافها",
    "lengthTargetSeconds": 150,
    "tonalTarget": "توتر عالي مع لحظات صمت ثقيل"
  },
  "beatProgression": [
    {
      "order": 1,
      "type": "setup",
      "description": "ليان تتسلل وتفعّل تعطيل الكاميرات",
      "estimatedDurationSeconds": 35,
      "intensity": 0.55
    },
    {
      "order": 2,
      "type": "confrontation",
      "description": "ماهر يظهر فجأة ويجبرها على الحوار",
      "estimatedDurationSeconds": 70,
      "intensity": 0.82
    },
    {
      "order": 3,
      "type": "reversal",
      "description": "ليان تُسقط جهاز التشويش وتختار بث الحقيقة مباشرة",
      "estimatedDurationSeconds": 45,
      "intensity": 0.9
    }
  ],
  "dialogueArchitecture": {
    "lines": [
      {
        "speaker": "ماهر",
        "emotion": "ساخر",
        "line": "تظنين أن مقطعاً واحداً سيهدم إمبراطورية كاملة؟",
        "purpose": "اختبار ثبات ليان"
      },
      {
        "speaker": "ليان",
        "emotion": "ثابت",
        "line": "يكفي أن يسمعوا صمتك الآن.",
        "purpose": "قلب ميزان القوة"
      }
    ],
    "subtextNotes": ["ليان تخفي خوفها بالكلمات المقتضبة", "ماهر يتعمّد الاستفزاز لإضاعة الوقت"]
  },
  "visualTexture": {
    "sensoryDetails": [
      { "sense": "الضوء", "description": "وميض أحمر متقطع من أجهزة الإنذار" },
      { "sense": "الصوت", "description": "طنين الخوادم يعلو أثناء الحوار" }
    ],
    "cameraSuggestions": [
      { "shotType": "close_up", "subject": "عينا ليان", "narrativeFunction": "إظهار القرار" }
    ]
  },
  "continuityChecks": [
    {
      "reference": "Scene_21",
      "status": "aligned",
      "notes": "يحافظ على إصابة ليان في الذراع كما ورد سابقاً"
    }
  ],
  "productionConsiderations": {
    "estimatedBudgetImpact": "low",
    "stuntRequirements": false,
    "vfxNeeds": ["Overlay بسيط لبث مباشر"],
    "riskNotes": ["تأكد من سلامة الممثلين حول الأجهزة الكهربائية"]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **الاتساق السردي**: المشهد يجب أن يحقق هدفاً درامياً واضحاً ويستند إلى معطيات سابقة دون تناقضات.
- **الأصالة والأسلوب**: يحافظ على نبرة العمل ويضيف لمسة مبتكرة في الوصف أو الحوار دون تكرار مباشر للنصوص السابقة.
- **قابلية الإنتاج**: احترام القيود الزمنية، عدد المواقع، والإمكانات التقنية المحددة.
- **وضوح الحوار**: الحوارات موجزة ومشحونة بالدافع، مع نسبة توصيف (Action) مقابل الحوار متوازنة.
- **الربط مع بقية الوحدات**: أي توصية يجب أن تكون قابلة للتمرير إلى وحدات الإيقاع، التوتر، أو الإخراج.

#### خطوات التنفيذ خطوة بخطوة
1. مراجعة السياق والقيود وتدوينها في \`metadata\` و\`sceneBlueprint\`.
2. صياغة فرضية هدف المشهد ونتيجته المتوقعة وتأكيد توافقها مع مسار الشخصيات.
3. بناء مخطط إيقاعي (setup، confrontation، reversal) مع تحديد درجات التوتر لكل مرحلة.
4. كتابة الوصف البصري متضمناً عناصر حسية واقتراحات كاميرا تدعم الحالة الشعورية.
5. توليد الحوار مع مراعاة الأصوات المميزة لكل شخصية وتوثيق المعاني الضمنية.
6. إجراء فحص استمرارية ضد المشاهد السابقة وتسجيل أية مخاطر إنتاجية أو سردية.
7. إعداد التقرير النصي المنسق، ثم إنشاء كائن \`AdvancedScreenplayModuleResult\` مع ملء حقول \`details\`، \`recommendations\`، و\`quality_metrics\`.
8. مراجعة لغوية ونهائية لضمان التناسق بين النص والـJSON.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **سياق ناقص أو مفقود**: اطلب إيضاحات مختصرة، أو صِغ المشهد بافتراضات محددة مع توثيق مستوى الثقة في \`metadata.notes\`.
- **قيود زمنية مبهمة**: استخدم متوسط طول المشاهد المشابهة، واذكر التقدير في \`sceneBlueprint.lengthTargetSeconds\` مع تحذير.
- **تناقض شخصيّات**: عند ملاحظة حوار يخالف طبيعة الشخصية، أعد صياغته وعلل في قسم المبررات.
- **استخدام مؤثرات مكلفة دون تفويض**: اقترح بديلاً بصرياً أقل تكلفة وسجّل ذلك في \`productionConsiderations.riskNotes\`.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف قبل التنفيذ (تعليمات العميل):**
> \"نحتاج مشهدًا قبل الذروة حيث تتسلل ليان لغرفة السيرفرات لتبث الأدلة. يجب أن يبقى التوتر عالياً دون معارك جسدية.\"

**فقرة من التقرير بعد التنفيذ:**
> \"المشهد يحقق تصعيد التوتر عبر صمت الأجهزة المحيط، ويضع ليان أمام خيار أخلاقي لحظي: نشر الأدلة رغم انكشافها. الحوار القصير يمنحها زمام المبادرة ويبرر ظهور ماهر لاحقًا في الذروة.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير مولد المشاهد حول \"ظلال الميناء\"",
  "summary": "تم ابتكار مشهد غرفة السيرفرات ليعزز تصاعد التوتر قبل الذروة ويوضح قرار البطلة بالمخاطرة ببث الحقيقة.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["scene_generation", "creative"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Scene Generator",
    "collaborators": ["Lead Writer"],
    "createdAt": "2025-03-02T09:10:00Z",
    "updatedAt": "2025-03-02T10:05:00Z",
    "analysisWindow": {
      "start": "2025-03-01T14:00:00Z",
      "end": "2025-03-02T08:30:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تكشف شركة أمن فاسدة وتخاطر بسلامة أسرتها.",
    "referenceWorks": ["Enemy of the State (1998)", "The Insider (1999)"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تم الالتزام بعدم إضافة مواقع جديدة"]
  },
  "details": [
    {
      "id": "scene_generator_server_room",
      "title": "مشهد غرفة السيرفرات",
      "focus": "scene_generation",
      "expositionMethod": "screenplay_scene",
      "summary": "المشهد يهيئ الذروة عبر مواجهة صامتة تتوج بقرار بث الأدلة مباشرة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "sceneBlueprint": {
        "scope": "مرحلة قبل الذروة دون معارك",
        "location": "INT. غرفة السيرفرات - ليل",
        "timeOfDay": "Night",
        "characters": [
          { "name": "ليان", "role": "protagonist", "emotionalState": "متوترة لكنها حاسمة" },
          { "name": "ماهر", "role": "antagonist", "emotionalState": "متماسك ببرود" }
        ],
        "dramaticObjective": "بث الأدلة قبل أن يوقفها ماهر",
        "lengthTargetSeconds": 160,
        "tonalTarget": "توتر خانق مع لحظات قرار"
      },
      "beatProgression": [
        {
          "order": 1,
          "type": "setup",
          "description": "ليان تعطل الكاميرات وتتجه للخادم الرئيس",
          "estimatedDurationSeconds": 40,
          "intensity": 0.58
        },
        {
          "order": 2,
          "type": "confrontation",
          "description": "ماهر يكشف وجودها ويعرض صفقة صمت",
          "estimatedDurationSeconds": 75,
          "intensity": 0.81
        },
        {
          "order": 3,
          "type": "reversal",
          "description": "ليان تشغل البث المباشر وتمنع ماهر من قطع الطاقة",
          "estimatedDurationSeconds": 45,
          "intensity": 0.92
        }
      ],
      "dialogueArchitecture": {
        "lines": [
          {
            "speaker": "ماهر",
            "emotion": "هادئ مهدد",
            "line": "يكفي أن أغلق هذا الباب وننهي اللعبة هنا.",
            "purpose": "إظهار سيطرته الظاهرية"
          },
          {
            "speaker": "ليان",
            "emotion": "مصمم",
            "line": "إذا أغلقت الباب سيشاهده العالم كله وهو يغلق.",
            "purpose": "تحويل التهديد إلى فرصة"
          }
        ],
        "subtextNotes": ["ماهر يساوم للحفاظ على السلطة", "ليان تستخدم البث كورقة ضغط"]
      },
      "visualTexture": {
        "sensoryDetails": [
          { "sense": "الضوء", "description": "ومضات حمراء من لوحات التحكم" },
          { "sense": "الصوت", "description": "صوت المراوح يتحول إلى خلفية إيقاعية" }
        ],
        "cameraSuggestions": [
          { "shotType": "handheld", "subject": "ليان", "narrativeFunction": "تجسيد الارتجاف الداخلي" }
        ]
      },
      "continuityChecks": [
        { "reference": "Scene_18", "status": "aligned", "notes": "تحافظ على الجرح في كتف ليان" }
      ],
      "productionConsiderations": {
        "estimatedBudgetImpact": "low",
        "stuntRequirements": false,
        "vfxNeeds": ["تراكب واجهة بث"],
        "riskNotes": ["حماية الأجهزة من الحرارة أثناء التصوير"]
      }
    }
  ],
  "recommendations": [
    {
      "id": "scene_followup_transition",
      "title": "تأمين انتقال المشهد إلى الذروة",
      "description": "كتابة لقطة انتقالية قصيرة تُظهر استجابة الجمهور للبث قبل الانتقال للذروة.",
      "priority": "medium",
      "category": "story_structure",
      "focus": "transition",
      "estimatedEffortHours": 4,
      "owner": "Lead Writer",
      "impact": "يعزز الشعور بالعواقب الفورية للبث",
      "dependencies": ["editorial_sync"],
      "successCriteria": ["يتم إدراج الانتقال في المخطط الزمني", "يحصل على موافقة المخرج"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 87,
    "characterDepth": 80,
    "dialogueAuthenticity": 83,
    "pacingControl": 85,
    "thematicResonance": 82,
    "originality": 78,
    "productionFeasibility": 88,
    "audienceAlignment": 84,
    "localizationReadiness": 79,
    "confidenceInterval": {
      "lowerBound": 74,
      "upperBound": 90
    },
    "qualitativeNotes": [
      "المشهد يرفع التوتر قبل الذروة دون إضافة مواقع جديدة",
      "يوفر لحظة قرار أخلاقية تعزز ثيمة كشف الحقيقة"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "sound_design_sync",
        "description": "التنسيق مع فريق الصوت لإضافة طبقات إنذار تدريجية.",
        "owner": "Sound Lead",
        "dueDate": "2025-03-04T10:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["استلام مسار صوت تجريبي", "مراجعة المخرج"]
      }
    ],
    "short_term": [
      {
        "id": "director_review",
        "description": "عرض المشهد على المخرج للحصول على ملاحظات رؤية بصرية.",
        "owner": "Creative Producer",
        "dueDate": "2025-03-05T15:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": ["توثيق الملاحظات", "دمج التعديلات في النسخة التالية"]
      }
    ],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك قيم التوتر في \`beatProgression.intensity\` مع وحدة محسن التوتر لضبط المنحنى العام.
- تأكد من أن توصيف الشخصيات والحوار يُلائم مخرجات \`CHARACTER_VOICE\` و\`DIALOGUE_ADVANCED_ANALYZER\` لتجنب تناقض النبرة.
- أي قيود إنتاجية جديدة يجب ترحيلها إلى وحدات \`PRODUCIBILITY_ANALYZER\` و\`PLATFORM_ADAPTER\` عبر \`recommendations\` و\`next_steps\`.
- حدث \`metadata.categories\` بما يتماشى مع وحدة \`INTEGRATED\` لتسهيل التجميع الآلي للتقارير.
`;
