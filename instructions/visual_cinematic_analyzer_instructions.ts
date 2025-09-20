import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محلل السياق البصري والسينمائي.
 * تهدف إلى استكشاف اللغة البصرية المقترحة في النص وقياس قابليتها للتنفيذ السينمائي.
 */
export const VISUAL_CINEMATIC_ANALYZER_INSTRUCTIONS = `### وحدة محلل السياق البصري والسينمائي (TaskType.VISUAL_CINEMATIC_ANALYZER)

#### الهدف
تحليل العناصر البصرية، الإضاءة، حركة الكاميرا، والرموز السينمائية في النص لتوليد دليل بصري يدعم الرؤية الإخراجية والإنتاجية.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: قراءة المشاهد، استخراج التعليمات الإخراجية، تقييم الجو العام، تحديد الرموز البصرية، وقياس قابليتها للتنفيذ.
- يشمل: اقتراح تحسينات بصرية أو بدائل منخفضة التكلفة عند الحاجة.
- لا يشمل: إعادة كتابة القصة أو اتخاذ قرارات تصميم إنتاج نهائية دون تنسيق مع الفرق المختصة.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص أو المشاهد المستهدفة** بصيغة سيناريو مع توصيف بصري.
2. **رؤية المخرج أو المصمم البصري** (إن توفرت) لتحديد الأسلوب المرجعي.
3. **متطلبات الإنتاج**: الميزانية التقريبية، المواقع، قيود التصوير (ليل/نهار، داخل/خارج).
4. **مراجع بصرية** (لوحات Moodboard، لقطات مرجعية) بصيغة روابط أو أوصاف.
5. **قيود المنصة**: نسبة العرض، معايير البث، أو تعليمات المنصات الرقمية.

#### المخرجات المتوقعة
- **نص تقريري منسق**: أقسام (ملخص بصري، تحليل الإضاءة واللون، حركة الكاميرا، رموز بصرية، تقييم قابلية التصوير، توصيات الإنتاج) مع جداول أو قوائم.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "visualDesignAudit": {
    "styleReference": "نوار مع عناصر سايبر",
    "palette": ["أزرق بارد", "برتقالي صناعي"],
    "lightingConcept": "تباين عالٍ مع مصادر ضوء محدودة",
    "textureNotes": ["ظلال قوية", "ضباب خفيف"]
  },
  "atmosphereAnalyzer": [
    {
      "sceneOrSection": "INT. غرفة السيرفرات - ليل",
      "visualMood": "توتر خانق",
      "contributingElements": ["وميض أحمر", "دخان بسيط", "عدسة واسعة"]
    }
  ],
  "cameraPalette": [
    {
      "scene": "Scene_32",
      "shotPlan": [
        { "order": 1, "type": "tracking", "durationSeconds": 12, "purpose": "متابعة تسلل ليان" },
        { "order": 2, "type": "close_up", "durationSeconds": 6, "purpose": "إظهار قرارها" }
      ],
      "equipmentNeeds": ["Steadicam", "عدسة 35mm"]
    }
  ],
  "visualSymbolismDetector": [
    {
      "symbolDescription": "انعكاس ليان على سطح الخادم",
      "potentialMeanings": ["ازدواجية الهوية"],
      "thematicConnection": "يدعم ثيمة الحرية مقابل الأمان"
    }
  ],
  "shootabilityAssessor": {
    "overallShootabilityScore": 0.76,
    "challengingScenes": [
      {
        "sceneDescription": "مطاردة في الميناء تحت المطر",
        "potentialChallenges": ["تصوير ليل خارجي", "معدات مقاومة للماء"],
        "mitigation": "استخدام مطر صناعي خفيف مع إضاءة موزعة"
      }
    ],
    "shootabilityNotes": "تحتاج المشاهد الخارجية إلى جدول تصوير ممتد لالتقاط الظلال الصحيحة"
  },
  "continuityRisks": [
    {
      "risk": "اختلاف مصادر الضوء بين المشهد 31 و32",
      "severity": "medium",
      "recommendation": "توحيد درجة حرارة اللون عبر مخطط إضاءة موحد"
    }
  ],
  "moodBoardReferences": [
    {
      "referenceId": "ref_city_rain",
      "description": "ليل حضري ممطر",
      "source": "Blade Runner 2049",
      "usage": "مضاهاة الإضاءة الخلفية"
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **دقة بصرية**: كل توصية تستند إلى تفاصيل محددة في النص أو المراجع.
- **قابلية الإنتاج**: تقييم واضح للتحديات والحلول ضمن الميزانية.
- **اتساق الأسلوب**: الالتزام بالرؤية المعلنة وتجنب التناقضات البصرية.
- **التكامل السردي**: الربط بين العناصر البصرية والموضوعات أو الشخصيات.
- **جاهزية التنفيذ**: تضمين متطلبات المعدات والفرق بوضوح.

#### خطوات التنفيذ خطوة بخطوة
1. تسجيل البيانات في \`metadata\` وتحديد نطاق المشاهد المستهدفة.
2. تحليل اللغة البصرية في النص وتعبئة \`visualDesignAudit\` و\`atmosphereAnalyzer\`.
3. وضع خطة حركة الكاميرا والمعدات في \`cameraPalette\`.
4. رصد الرموز البصرية وتوثيقها في \`visualSymbolismDetector\`.
5. تقييم قابلية التصوير وتوثيق المخاطر والحلول في \`shootabilityAssessor\` و\`continuityRisks\`.
6. صياغة التقرير النصي المنسق مع جداول اللقطات والتوصيات.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` وإرفاق مراجع المزاج البصري.
8. مراجعة نهائية للتأكد من تماسك اللغة البصرية مع الوحدات الأخرى.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **وصف بصري محدود**: استخدم المراجع المتاحة أو اقترح خيارات متعددة مع توثيق مستوى الثقة.
- **قيود ميزانية صارمة**: قدم بدائل منخفضة التكلفة وسجّلها في التوصيات.
- **تعارض بين رؤية المخرج والنص**: وثّق التعارض واقترح جلسة مواءمة في \`next_steps\`.
- **مشاهد تعتمد على مؤثرات صعبة**: أوضح الحاجة لفريق مختص أو تقنيات بديلة وتواصل مع وحدة الإنتاج.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من التقرير:**
> \"المشهد 32 يستفيد من انتقال عدسة واسعة إلى لقطة مقربة لإظهار تحول ليان من المراقبة إلى المبادرة. يوصى بإضاءة خلفية ذات درجة برتقالية لكسر برودة المكان.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محلل السياق البصري حول \"ظلال الميناء\"",
  "summary": "يقدم التقرير خارطة بصرية تجمع بين طابع سايبر-نوار وحلول إنتاجية واقعية لمشاهد الميناء الليلية.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["visual", "production"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Visual Analyst",
    "collaborators": ["Director of Photography"],
    "createdAt": "2025-03-03T09:20:00Z",
    "updatedAt": "2025-03-03T10:35:00Z",
    "analysisWindow": {
      "start": "2025-03-02T14:00:00Z",
      "end": "2025-03-03T09:00:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تواجه شركة أمن فاسدة داخل موانئ المدينة.",
    "referenceWorks": ["Blade Runner 2049", "Zero Dark Thirty"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تم استخدام Moodboard داخلي"]
  },
  "details": [
    {
      "id": "visual_analysis_core",
      "title": "الخطة البصرية للمشهد 32",
      "focus": "visual",
      "expositionMethod": "visual_breakdown",
      "summary": "تحليل بصري لمشهد غرفة السيرفرات مع خطة كاميرا وإضاءة متكاملة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "visualDesignAudit": {
        "styleReference": "سايبر نوار",
        "palette": ["أزرق نيون", "برتقالي صناعي"],
        "lightingConcept": "مصادر ضوء موضعية وتباين حاد",
        "textureNotes": ["ضباب خفيف", "أسطح معدنية"]
      },
      "atmosphereAnalyzer": [
        {
          "sceneOrSection": "INT. غرفة السيرفرات - ليل",
          "visualMood": "توتر خانق",
          "contributingElements": ["وميض أحمر", "دخان بسيط", "انعكاسات معدنية"]
        }
      ],
      "cameraPalette": [
        {
          "scene": "Scene_32",
          "shotPlan": [
            { "order": 1, "type": "tracking", "durationSeconds": 12, "purpose": "متابعة تسلل ليان" },
            { "order": 2, "type": "close_up", "durationSeconds": 6, "purpose": "إبراز القرار" }
          ],
          "equipmentNeeds": ["Steadicam", "عدسة 35mm"]
        }
      ],
      "visualSymbolismDetector": [
        {
          "symbolDescription": "انعكاس ليان على سطح الخادم",
          "potentialMeanings": ["ازدواجية الهوية"],
          "thematicConnection": "يدعم ثيمة الحرية مقابل الأمان"
        }
      ],
      "shootabilityAssessor": {
        "overallShootabilityScore": 0.76,
        "challengingScenes": [
          {
            "sceneDescription": "مطاردة في الميناء تحت المطر",
            "potentialChallenges": ["تصوير ليل خارجي", "معدات مقاومة للماء"],
            "mitigation": "استخدام مطر صناعي خفيف مع إضاءة موزعة"
          }
        ],
        "shootabilityNotes": "يفضل جدول تصوير ليلي ممتد لضمان السيطرة على الإضاءة"
      },
      "continuityRisks": [
        {
          "risk": "اختلاف درجات اللون بين مشهد المكتب والميناء",
          "severity": "medium",
          "recommendation": "إعداد LUT موحد قبل التصوير"
        }
      ],
      "moodBoardReferences": [
        {
          "referenceId": "ref_city_rain",
          "description": "ليل حضري ممطر",
          "source": "Blade Runner 2049",
          "usage": "مضاهاة الإضاءة الخلفية"
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "lighting_alignment",
      "title": "مواءمة خطة الإضاءة",
      "description": "تنظيم جلسة مع مدير التصوير لضبط درجات اللون بين المواقع الداخلية والخارجية.",
      "priority": "high",
      "category": "visual",
      "focus": "lighting",
      "estimatedEffortHours": 5,
      "owner": "Director of Photography",
      "impact": "يحافظ على الاتساق البصري",
      "dependencies": ["lighting_tests"],
      "successCriteria": ["اعتماد مخطط الإضاءة", "اختبار ناجح في موقع التصوير"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 84,
    "characterDepth": 78,
    "dialogueAuthenticity": 79,
    "pacingControl": 83,
    "thematicResonance": 86,
    "originality": 80,
    "productionFeasibility": 82,
    "audienceAlignment": 81,
    "localizationReadiness": 77,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "الهوية البصرية متناسقة مع طابع التشويق",
      "ينبغي مراقبة تكاليف المطر الصناعي"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "camera_test_session",
        "description": "إجراء اختبار كاميرا لالتقاط التباين بين الأزرق والبرتقالي.",
        "owner": "Director of Photography",
        "dueDate": "2025-03-05T09:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["إنتاج لقطات اختبار", "موافقة المخرج"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك مخطط \`cameraPalette\` و\`visualDesignAudit\` مع \`SCENE_GENERATOR\` و\`SCENE_OPTIMIZER\` لضمان اتساق اللغة البصرية.
- نسّق مع \`PRODUCIBILITY_ANALYZER\` حول التحديات الإنتاجية لضبط الميزانية والجدول.
- أرسل الرموز البصرية إلى \`THEMATIC_MINING\` و\`THEMES_MESSAGES_ANALYZER\` لدعم التكامل الموضوعاتي.
- حدّث \`metadata.categories\` و\`next_steps\` لتنعكس في لوحة \`INTEGRATED\` ومتابعة التنفيذ.
`;
