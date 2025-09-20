import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محلل التفاعل الصوتي.
 * تقيّم ديناميكيات الحوار، توزيع القوة، والإشارات العاطفية في المشاهد الحوارية.
 */
export const VOICE_INTERACTION_ANALYZER_INSTRUCTIONS = `### وحدة محلل التفاعل الصوتي (TaskType.VOICE_INTERACTION_ANALYZER)

#### الهدف
تحليل الحوارات أو التفريغات الصوتية لتحديد توزيع القوة، توازن الحديث، الإشارات العاطفية، ونقاط التحول أثناء التفاعل.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل التبادل الحواري، قياس نسب الكلام، رصد المقاطعات، واستخراج التحولات في القوة أو النبرة.
- يشمل: تقديم توصيات لتحسين وضوح النبرة أو توازن القوة بين الشخصيات.
- لا يشمل: إعادة كتابة الحوار بالكامل أو استنتاج أحداث خارج سياق النص المقدم.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **نص الحوار أو التفريغ الصوتي** مع تحديد المتحدث والطوابع الزمنية إن أمكن.
2. **سياق المشهد**: ملخص 80-120 كلمة يوضح موقع المشهد في الحبكة وهدفه الدرامي.
3. **معلومات الشخصيات**: دوافعهم، العلاقات بينهم، وأي ملاحظات عن النبرة المرغوبة.
4. **قيود الأداء أو المنصة**: حدود اللغة، طول المشهد بالدقائق، أو متطلبات الأداء الصوتي.
5. **مراجع صوتية أو أدائية** (اختياري) لدعم التحليل (روابط أو أوصاف).

#### المخرجات المتوقعة
- **نص تقريري منسق**: أقسام (ملخص التفاعل، توزيع القوة، توازن الحديث، إشارات عاطفية، توصيات الأداء) مع جداول أو رسوم لفظية.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "interactionScope": {
    "sceneId": "Scene_32",
    "location": "INT. غرفة السيرفرات",
    "timeCode": { "start": "00:45:12", "end": "00:48:30" },
    "participants": ["ليان", "ماهر"],
    "objective": "ليان تحاول الحفاظ على السيطرة أثناء مواجهة ماهر"
  },
  "powerDynamics": [
    {
      "character": "ليان",
      "powerScore": 0.54,
      "dominantTraits": ["إجابات مختصرة", "توجيه الأسئلة"],
      "supportingEvidence": [
        { "excerpt": "ليان: إذا قطعت البث الآن سيعرف الجميع.", "timestamp": "00:46:10" }
      ]
    },
    {
      "character": "ماهر",
      "powerScore": 0.46,
      "dominantTraits": ["مقاطعات", "محاولات تهديد"],
      "supportingEvidence": [
        { "excerpt": "ماهر: أغلقي الجهاز وإلا...", "timestamp": "00:46:02" }
      ]
    }
  ],
  "turnTakingAnalysis": {
    "totalTurns": 18,
    "averageTurnLengthSeconds": 5.4,
    "interruptions": [
      { "by": "ماهر", "target": "ليان", "count": 3 }
    ],
    "silenceMoments": [
      { "timestamp": "00:47:20", "durationSeconds": 4.5, "interpretation": "ليان تفكر قبل الرد" }
    ]
  },
  "emotionalTrajectory": [
    { "timestamp": "00:45:20", "speaker": "ليان", "emotion": "قلق", "intensity": 0.6 },
    { "timestamp": "00:46:30", "speaker": "ليان", "emotion": "تصميم", "intensity": 0.82 },
    { "timestamp": "00:47:50", "speaker": "ماهر", "emotion": "ارتباك", "intensity": 0.55 }
  ],
  "communicationSignals": {
    "dominanceShift": {
      "moment": "00:46:25",
      "description": "ليان تستخدم صمتاً محسوباً ثم تتحكم بنبرة الحوار",
      "confidence": 0.78
    },
    "misalignmentRisks": [
      {
        "risk": "نبرة ماهر تتحول لسخرية تخفف التهديد",
        "mitigation": "توجيه الأداء ليبقى على نبرة تهديد متصاعدة"
      }
    ],
    "performanceNotes": [
      "التأكيد على تنفس ليان قبل الرد النهائي لإظهار السيطرة",
      "تجنب رفع الصوت المفاجئ من ماهر للحفاظ على طابع التهديد الهادئ"
    ]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **دقة القياس**: استخدام نسب ومقاييس واضحة لزمن الحديث والمقاطعات.
- **استناد للأدلة**: كل استنتاج مدعوم باقتباس أو طابع زمني.
- **قابلية التطبيق**: توصيات الأداء يمكن تنفيذها من قبل الممثلين أو المخرجين بسهولة.
- **اتساق الشخصية**: التحليلات تحترم البصمة الصوتية لكل شخصية.
- **التكامل مع الوحدات الأخرى**: البيانات قابلة للمزامنة مع وحدات الحوار، الصوت، والتوتر.

#### خطوات التنفيذ خطوة بخطوة
1. إدخال سياق المشهد وتسجيله في \`metadata\` و\`interactionScope\`.
2. حساب نسب الحديث والمقاطعات وتعبئة \`turnTakingAnalysis\`.
3. تقييم توزيع القوة وتوثيقه في \`powerDynamics\` مع الأدلة.
4. رسم المسار العاطفي في \`emotionalTrajectory\` لتوضيح التحولات.
5. توثيق التحذيرات والتوصيات في \`communicationSignals\`.
6. إعداد التقرير النصي المنسق مع جداول توزيع القوة ونسب الحديث.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` وإدراج التوصيات وخطط المتابعة.
8. مراجعة نهائية لضمان توافق التحليل مع وحدات الصوت والحوار الأخرى.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **نصوص ناقصة أو بدون نسب حديث**: استعمل تقديرات نسبية مع توثيق مستوى الثقة.
- **حوار متعدد المتحدثين بشكل فوضوي**: قسّم التحليل إلى مجموعات فرعية ووضح ذلك في التقرير.
- **غياب طوابع زمنية**: استخدم أرقام الأسطر أو الصفحات كبديل واذكر ذلك.
- **تعارض في نبرة الشخصية**: سجّل التعارض ووجّه توصية بإعادة الأداء أو مراجعة الحوار.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من التقرير:**
> \"يحدث التحول في السيطرة عند الدقيقة 46 عندما تلتزم ليان بالصمت لمدة أربع ثوانٍ قبل أن تقلب الاتهام. ينبغي توجيه الأداء الصوتي لاستثمار الصمت كأداة تهديد مضاد.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محلل التفاعل الصوتي حول \"ظلال الميناء\"",
  "summary": "يحدد التقرير تحول السيطرة في مشهد غرفة السيرفرات ويقدم توصيات لضبط أداء المقاطعات والنبرة.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["dialogue", "voice"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Voice Interaction Analyst",
    "collaborators": ["Dialogue Coach"],
    "createdAt": "2025-03-03T11:30:00Z",
    "updatedAt": "2025-03-03T12:20:00Z",
    "analysisWindow": {
      "start": "2025-03-02T18:00:00Z",
      "end": "2025-03-03T10:45:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تواجه خصمها داخل غرفة سيرفرات مكشوفة.",
    "referenceWorks": ["Zero Dark Thirty", "The Insider"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تم الاعتماد على تفريغ الحوار بتاريخ 2 مارس"]
  },
  "details": [
    {
      "id": "voice_interaction_server_room",
      "title": "تفاعل ليان وماهر",
      "focus": "voice_interaction",
      "expositionMethod": "dialogue_diagnostics",
      "summary": "تحليل لتوزيع القوة والمقاطعات في المواجهة داخل غرفة السيرفرات.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "interactionScope": {
        "sceneId": "Scene_32",
        "location": "INT. غرفة السيرفرات",
        "timeCode": { "start": "00:45:12", "end": "00:48:30" },
        "participants": ["ليان", "ماهر"],
        "objective": "ليان تحافظ على السيطرة أثناء المواجهة"
      },
      "powerDynamics": [
        {
          "character": "ليان",
          "powerScore": 0.54,
          "dominantTraits": ["أسئلة موجهة", "صمت تكتيكي"],
          "supportingEvidence": [
            { "excerpt": "ليان: إذا قطعت البث الآن سيعرف الجميع.", "timestamp": "00:46:10" }
          ]
        },
        {
          "character": "ماهر",
          "powerScore": 0.46,
          "dominantTraits": ["مقاطعات", "تهديد"],
          "supportingEvidence": [
            { "excerpt": "ماهر: أغلقي الجهاز وإلا...", "timestamp": "00:46:02" }
          ]
        }
      ],
      "turnTakingAnalysis": {
        "totalTurns": 18,
        "averageTurnLengthSeconds": 5.4,
        "interruptions": [
          { "by": "ماهر", "target": "ليان", "count": 3 }
        ],
        "silenceMoments": [
          { "timestamp": "00:47:20", "durationSeconds": 4.5, "interpretation": "صمت تكتيكي" }
        ]
      },
      "emotionalTrajectory": [
        { "timestamp": "00:45:20", "speaker": "ليان", "emotion": "قلق", "intensity": 0.6 },
        { "timestamp": "00:46:30", "speaker": "ليان", "emotion": "تصميم", "intensity": 0.82 },
        { "timestamp": "00:47:50", "speaker": "ماهر", "emotion": "ارتباك", "intensity": 0.55 }
      ],
      "communicationSignals": {
        "dominanceShift": {
          "moment": "00:46:25",
          "description": "صمت ليان قبل الرد يمنحها السيطرة",
          "confidence": 0.78
        },
        "misalignmentRisks": [
          {
            "risk": "تحول نبرة ماهر إلى سخرية",
            "mitigation": "ضبط الأداء الصوتي ليبقى حاداً"
          }
        ],
        "performanceNotes": [
          "التأكيد على الشهيق العميق قبل جملة ليان الأخيرة",
          "خفض مستوى الصوت في جملة التهديد للحفاظ على الهدوء المخيف"
        ]
      }
    }
  ],
  "recommendations": [
    {
      "id": "coach_session_power_balance",
      "title": "جلسة تدريب على توازن القوة",
      "description": "تنظيم تمرين أداء يركز على استخدام الصمت والنبرة لضبط السيطرة بين ليان وماهر.",
      "priority": "medium",
      "category": "performance",
      "focus": "acting",
      "estimatedEffortHours": 4,
      "owner": "Dialogue Coach",
      "impact": "يحسن وضوح التحول في السيطرة",
      "dependencies": ["rehearsal_schedule"],
      "successCriteria": ["ملاحظات إيجابية من المخرج", "تقليل المقاطعات غير الضرورية"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 85,
    "characterDepth": 83,
    "dialogueAuthenticity": 88,
    "pacingControl": 80,
    "thematicResonance": 84,
    "originality": 72,
    "productionFeasibility": 90,
    "audienceAlignment": 82,
    "localizationReadiness": 79,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 89
    },
    "qualitativeNotes": [
      "المشهد يحافظ على توتر متدرج",
      "المقاطعات تحتاج ضبطاً لتجنب تشويش الرسالة"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "share_with_dialogue_team",
        "description": "مشاركة النتائج مع وحدة تحليل الحوار المتقدم لمراجعة المقاطعات.",
        "owner": "Dialogue Supervisor",
        "dueDate": "2025-03-04T12:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["اعتماد التوصيات", "تحديث مخطط الحوار"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك بيانات \`powerDynamics\` و\`turnTakingAnalysis\` مع \`DIALOGUE_ADVANCED_ANALYZER\` لضبط النصوص.
- نسّق مع \`SCENE_OPTIMIZER\` و\`TENSION_OPTIMIZER\` لضمان توافق منحنى السيطرة مع الإيقاع العام.
- أرسل ملاحظات الأداء إلى \`CREATIVE\` و\`RECOMMENDATIONS_GENERATOR\` لتضمينها في خطط التدريب.
- حدّث \`metadata.categories\` و\`next_steps\` ليتسنى لوحدة \`INTEGRATED\` تتبع المهام البينية.
`;
