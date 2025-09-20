import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة التنقيب عن الموضوعات.
 * تهدف إلى استخراج البنية الموضوعاتية للعمل وتوثيق تطورها عبر السرد.
 */
export const THEMATIC_MINING_INSTRUCTIONS = `### مهمة التنقيب عن الموضوعات (TaskType.THEMATIC_MINING)

#### الهدف
تحليل العمل لاستخراج الموضوعات الرئيسية والفرعية، تتبع تطورها الزمني، وتوضيح كيفية دعمها للحبكة والشخصيات مع اقتراح فرص تعزيز أو تبسيط.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: قراءة العمل، تصنيف الموضوعات، تحليل الرموز والدلالات، وتقييم الاتساق الموضوعاتي.
- يشمل: ربط الموضوعات بالثيمات الفلسفية والجمهور المستهدف.
- لا يشمل: إعادة كتابة المشاهد أو إدخال موضوعات جديدة غير موجودة دون أدلة.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص الكامل أو الملخص المفصل**: بصيغة قابلة للبحث مع ترقيم صفحات أو طوابع زمنية.
2. **بيانات عن الشخصيات الرئيسية**: أهدافهم، أقواسهم، وما يتعلق بهم من موضوعات متوقعة.
3. **ملاحظات إبداعية**: أهداف المؤلف أو المنتج حول الرسائل المقصودة.
4. **أبحاث أو مراجع ثقافية** (إن وجدت) لتقييم الحساسية الموضوعاتية.
5. **قيود المنصة أو الجمهور**: موضوعات يجب تجنبها أو إبرازها.

#### المخرجات المتوقعة
- **نص تقريري منسق**: أقسام (ملخص الموضوعات، تحليل كل موضوع، الرموز الداعمة، التطور الزمني، توصيات التعزيز/التعديل) مع جداول زمنية ونقاط مرجعية.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "themeLandscape": [
    {
      "theme": "الحرية مقابل الأمان",
      "classification": "core",
      "strength": 0.82,
      "keyEvidence": [
        { "reference": "صفحة 15", "excerpt": "ليان ترفض التوقيع على عقد السرية", "confidence": 0.8 }
      ],
      "relatedCharacters": ["ليان", "ماهر"],
      "audienceImpact": "يثير أسئلة حول الثقة بالمؤسسات"
    },
    {
      "theme": "العائلة كملاذ",
      "classification": "secondary",
      "strength": 0.63,
      "keyEvidence": [
        { "reference": "صفحة 72", "excerpt": "ليان تتواصل مع والدتها بعد القطيعة", "confidence": 0.7 }
      ],
      "relatedCharacters": ["ليان", "الأم"],
      "audienceImpact": "يوفر مرساة عاطفية"
    }
  ],
  "symbolMapping": [
    {
      "symbol": "المرآة المتصدعة",
      "meaning": "تفكك الهوية",
      "frequency": 4,
      "firstAppearance": "صفحة 12",
      "evolution": "من علامة خوف إلى دليل على التحرر"
    }
  ],
  "evolutionTimeline": [
    {
      "act": 1,
      "dominantTheme": "الحرية مقابل الأمان",
      "turningPoint": "ليان تكتشف مراقبة الشركة لعائلتها",
      "emotionalShift": "ارتفاع الشعور بالتهديد",
      "supportingScenes": ["Scene_10", "Scene_14"]
    },
    {
      "act": 2,
      "dominantTheme": "العائلة كملاذ",
      "turningPoint": "عودة الأخ بعد اعتقاله",
      "emotionalShift": "تنامي التضامن",
      "supportingScenes": ["Scene_34"]
    }
  ],
  "audienceResonanceLinks": [
    {
      "theme": "الحرية مقابل الأمان",
      "audienceSegment": "محترفو التقنية",
      "relevance": 0.88,
      "messagingAngle": "الشفافية كحق أساسي"
    }
  ],
  "themeRisks": [
    {
      "riskId": "overcrowding",
      "description": "عدد الموضوعات الثانوية قد يربك الجمهور",
      "severity": "medium",
      "mitigation": "دمج ثيمتي العائلة والولاء في مشهد واحد محوري"
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **دقة الاستشهاد**: كل موضوع مدعوم بأمثلة محددة من النص مع مستوى ثقة.
- **وضوح التصنيف**: التفريق بين الموضوعات الأساسية، الثانوية، والفرعية.
- **التكامل الزمني**: تتبع تطور الموضوعات عبر الفصول مع تحديد نقاط التحول.
- **قابلية التطبيق**: تقديم توصيات عملية لتعزيز الموضوعات أو تقليصها.
- **الاتساق مع الجمهور**: ربط الموضوعات بالشرائح المستهدفة ومعايير المنصة.

#### خطوات التنفيذ خطوة بخطوة
1. جمع النص والملاحظات وتسجيل البيانات في \`metadata\`.
2. إجراء قراءة تحليلية لاستخراج الموضوعات الأولية وتدوين الأدلة في \`themeLandscape\`.
3. تحديد الرموز والدلالات الداعمة وتوثيقها في \`symbolMapping\`.
4. بناء خط زمني لتطور الموضوعات في \`evolutionTimeline\` يوضح التحولات الشعورية.
5. ربط الموضوعات بالجمهور المستهدف عبر \`audienceResonanceLinks\` وتقييم المخاطر.
6. صياغة التقرير النصي المنسق مع جداول وتوصيات واضحة.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` وتضمين التوصيات وخطط المتابعة.
8. مراجعة نهائية للتأكد من أن جميع الموضوعات مرتبطة بأدلة وأن البيانات الرقمية متسقة.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **نصوص قصيرة أو مقتطفات محدودة**: أشر إلى محدودية الاستنتاج وقدم توصية بجمع مادة إضافية.
- **موضوعات غير متسقة**: إذا ظهرت ثيمة مرة واحدة فقط، صنّفها كإشارة ووضّح الحاجة لتعزيزها أو حذفها.
- **تعارض ثقافي**: استعن بمراجع ثقافية موثوقة ودوّن الحاجة لاستشارة إضافية إذا كان موضوع حساس.
- **تشابه موضوعات**: دمج الموضوعات المتشابهة مع توضيح الفروقات الدقيقة في التقرير.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من التقرير:**
> \"يتحول رمز المرآة من أداة مراقبة إلى شاهد على استعادة البطلة لزمام المبادرة، ما يدعم ثيمة الحرية مقابل الأمان في الفصل الثالث.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير التنقيب عن الموضوعات حول \"ظلال الميناء\"",
  "summary": "يبرز التحليل ثيمة الحرية مقابل الأمان بوصفها المحرك الرئيس للصراع مع دعم ثانوي من موضوع العائلة كملاذ.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["theme", "analysis"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Theme Miner",
    "collaborators": ["Head Writer"],
    "createdAt": "2025-03-02T11:00:00Z",
    "updatedAt": "2025-03-02T12:30:00Z",
    "analysisWindow": {
      "start": "2025-03-01T10:00:00Z",
      "end": "2025-03-02T10:45:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تكشف فساد شركة أمنية وتواجه قرار التضحية بعائلتها.",
    "referenceWorks": ["The Insider (1999)", "Mr. Robot (2015)"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تمت مراجعة مسودة فبراير 2025"]
  },
  "details": [
    {
      "id": "thematic_map_core",
      "title": "الخريطة الموضوعاتية",
      "focus": "theme",
      "expositionMethod": "timeline_analysis",
      "summary": "توثيق تطور الثيمات الأساسية وتداخلها مع الرموز ودلالات الجمهور.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "themeLandscape": [
        {
          "theme": "الحرية مقابل الأمان",
          "classification": "core",
          "strength": 0.82,
          "keyEvidence": [
            { "reference": "صفحة 15", "excerpt": "ليان ترفض التوقيع على عقد السرية", "confidence": 0.8 }
          ],
          "relatedCharacters": ["ليان", "ماهر"],
          "audienceImpact": "يثير نقاشاً حول الثقة بالمؤسسات"
        },
        {
          "theme": "العائلة كملاذ",
          "classification": "secondary",
          "strength": 0.63,
          "keyEvidence": [
            { "reference": "صفحة 72", "excerpt": "ليان تتواصل مع والدتها", "confidence": 0.7 }
          ],
          "relatedCharacters": ["ليان", "الأم"],
          "audienceImpact": "يوفر دفء عاطفي يوازن التوتر"
        }
      ],
      "symbolMapping": [
        {
          "symbol": "المرآة المتصدعة",
          "meaning": "تفكك الهوية",
          "frequency": 4,
          "firstAppearance": "صفحة 12",
          "evolution": "من مراقبة قسرية إلى انعكاس للذات الحقيقية"
        }
      ],
      "evolutionTimeline": [
        {
          "act": 1,
          "dominantTheme": "الحرية مقابل الأمان",
          "turningPoint": "اكتشاف مراقبة الشركة",
          "emotionalShift": "تصاعد القلق",
          "supportingScenes": ["Scene_10", "Scene_14"]
        },
        {
          "act": 2,
          "dominantTheme": "العائلة كملاذ",
          "turningPoint": "عودة الأخ",
          "emotionalShift": "تعزيز التضامن",
          "supportingScenes": ["Scene_34"]
        }
      ],
      "audienceResonanceLinks": [
        {
          "theme": "الحرية مقابل الأمان",
          "audienceSegment": "محترفو التقنية",
          "relevance": 0.88,
          "messagingAngle": "حق معرفة كيفية استخدام البيانات"
        }
      ],
      "themeRisks": [
        {
          "riskId": "overcrowding",
          "description": "تشعب الموضوعات الثانوية قد يضعف الرسالة",
          "severity": "medium",
          "mitigation": "دمج موضوع الولاء داخل ثيمة العائلة"
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "theme_focus_revision",
      "title": "تركيز ثيمة العائلة",
      "description": "إعادة كتابة مشهد العشاء لإبراز التضامن العائلي وربطه بثيمة الحرية مقابل الأمان.",
      "priority": "medium",
      "category": "theme",
      "focus": "scene",
      "estimatedEffortHours": 5,
      "owner": "Head Writer",
      "impact": "رفع التماسك الموضوعاتي",
      "dependencies": ["scene_optimizer_update"],
      "successCriteria": ["حصول المشهد على موافقة المخرج", "انعكاس الثيمة في قراءة الطاولة"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 88,
    "characterDepth": 83,
    "dialogueAuthenticity": 81,
    "pacingControl": 79,
    "thematicResonance": 92,
    "originality": 76,
    "productionFeasibility": 85,
    "audienceAlignment": 87,
    "localizationReadiness": 80,
    "confidenceInterval": {
      "lowerBound": 74,
      "upperBound": 91
    },
    "qualitativeNotes": [
      "الثيمات الأساسية واضحة وتدعم حبكة التشويق",
      "موضوع الولاء يحتاج إلى تركيز أو دمج"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "share_with_thematic_team",
        "description": "مشاركة النتائج مع وحدة الرسائل والموضوعات لضبط خطاب التسويق.",
        "owner": "Story Supervisor",
        "dueDate": "2025-03-03T08:30:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["تأكيد استلام التقرير", "تحديد نقاط التعزيز"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك \`themeLandscape\` مع وحدات \`THEMES_MESSAGES_ANALYZER\` و\`AUDIENCE_RESONANCE\` لتنسيق الرسائل.
- زود \`SCENE_GENERATOR\` و\`SCENE_OPTIMIZER\` بالرموز والموضوعات لتعزيز الاتساق في المشاهد الجديدة أو المعدّلة.
- حدّث \`metadata.categories\` ليتضمن \"theme\" لضمان ربط النتائج في وحدة \`INTEGRATED\`.
- نسّق مع \`PLATFORM_ADAPTER\` حول أي موضوعات حساسة تتطلب تكييفاً للسوق.
`;
