import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة بصمة الأسلوب.
 * تضمن تحليل السمات اللغوية والسردية للمؤلف وتوثيقها ضمن مخطط متكامل.
 */
export const STYLE_FINGERPRINT_INSTRUCTIONS = `### مهمة بصمة الأسلوب (TaskType.STYLE_FINGERPRINT)

#### الهدف
تحديد وتوثيق الخصائص الأسلوبية الفريدة للمؤلف (لغة، سرد، موضوعات) مع إبراز عناصر التفرّد وأوجه المخاطرة في التكرار أو الانحراف.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل العينات النصية، استخراج السمات المميزة، مقارنة الاتجاهات مع المراجع، وتقديم توصيات الحفاظ أو التطوير.
- يشمل: تقييم الانحرافات بين أعمال مختلفة للمؤلف ذاته إذا توفرت.
- لا يشمل: إعادة كتابة النصوص أو تقديم نقد سردي كامل للحبكة خارج سياق الأسلوب، ولا تقييم الجودة الإنتاجية.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **عينات نصية**: 3-5 مقاطع طول كل منها 250-400 كلمة بصيغة نصية قابلة للبحث.
2. **بيانات وصفية**: نوع العمل، الزمن السردي، الجمهور المستهدف، اللغة/اللهجة، وتاريخ الكتابة.
3. **مراجع مقارنة** (اختياري): قائمة بأعمال مشابهة أو كتّاب مرجعيين للمقارنة الأسلوبية.
4. **محاور التركيز**: طلبات خاصة مثل التركيز على الحوار، الوصف، أو الإيقاع.
5. **قيود التحليل**: إن وجدت (مثلاً تجاهل الاقتباسات المنقولة، أو استبعاد المشاهد المعدّلة لاحقاً).

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن أقسام (ملخص السمات، التحليل اللغوي، التحليل السردي، الثيمات، توصيات التطوير، مخاطر الانحراف) مع جداول ورسوم لفظية عند الحاجة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "linguisticSignature": {
    "sentenceLength": { "mean": 16.4, "std": 4.1 },
    "lexicalDiversity": 0.68,
    "dominantRegister": "فصحى مع استعارات علمية",
    "stylisticDevices": ["تشبيه ممتد", "تكرار إيقاعي"]
  },
  "narrativeSignature": {
    "pointOfView": ["الشخص الثالث المحدود"],
    "timelineStructure": "غير خطي مع ارتدادات قصيرة",
    "sceneConstruction": "وصف مكثف يسبق الحوار",
    "pacingProfile": { "dialogueShare": 0.35, "actionShare": 0.4, "introspectionShare": 0.25 }
  },
  "thematicSignature": {
    "coreThemes": [
      { "theme": "الثقة مقابل السيطرة", "recurrence": 0.8 },
      { "theme": "الهوية الرقمية", "recurrence": 0.6 }
    ],
    "symbolSystems": [
      { "symbol": "المرآة", "meaning": "فحص الذات", "usageFrequency": 5 }
    ],
    "philosophicalAngles": ["الوجودية التقنية"]
  },
  "comparativeBenchmarks": {
    "closestMatches": ["Denis Villeneuve - Arrival"],
    "distanceScore": 0.27,
    "uniqueDifferentiators": ["تحويل المصطلحات التقنية إلى صور شعرية"]
  },
  "styleRisks": [
    {
      "riskId": "over_metaphor",
      "description": "الإفراط في الاستعارات قد يبطئ الإيقاع",
      "severity": "medium",
      "mitigation": "إدراج جمل فعلية أقصر كل فقرتين"
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **استخراج دقيق**: كل سمة يجب أن تستند إلى أدلة نصية محددة ومذكورة في التقرير.
- **توازن كمي/نوعي**: دمج مؤشرات رقمية (متوسط طول الجمل، نسب الحوار) مع تحليل نوعي واضح.
- **تمييز الأصالة**: إبراز ما يجعل الأسلوب فريداً مقارنة بالمرجعيات المماثلة.
- **قابلية الاستخدام**: تقديم توصيات عملية للحفاظ على البصمة أو تطويرها بما يخدم وحدات الكتابة والتسويق.
- **اتساق البيانات**: تطابق الأرقام داخل \`linguisticSignature\` و\`narrativeSignature\` مع محتوى التقرير.

#### خطوات التنفيذ خطوة بخطوة
1. استيراد العينات وتصنيفها بحسب النوع أو المرحلة الزمنية وتسجيلها في \`metadata\`.
2. تحليل الجوانب اللغوية (إحصاءات، مفردات متكررة، أدوات بلاغية) وتعبئة \`linguisticSignature\`.
3. فحص البنية السردية ونقطة النظر وتوزيع المشاهد وتوثيقها في \`narrativeSignature\`.
4. استخراج الثيمات والرموز المتكررة وربطها بالسياق الفلسفي في \`thematicSignature\`.
5. مقارنة النتائج مع المراجع وتحديد عناصر التفرد أو المخاطر ضمن \`comparativeBenchmarks\` و\`styleRisks\`.
6. صياغة التقرير النصي مع أمثلة مقتبسة قصيرة وتحديد توصيات التطوير.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` متكامل وإدراج توصيات التكامل مع بقية الوحدات.
8. إجراء مراجعة نهائية لضمان خلو النص والـJSON من التناقضات اللغوية أو الرقمية.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **عينات قليلة أو قصيرة**: أشر إلى انخفاض الثقة، استخدم مؤشرات نوعية، وسجل الحاجة لمزيد من المواد.
- **تنوع لغوي كبير**: إذا تنوعت اللهجات أو الأساليب بين المقاطع، افصل التحليل لكل لهجة في التقرير وأشر إلى ذلك في \`metadata.notes\`.
- **وجود اقتباسات منسوبة للغير**: استبعدها من الإحصاءات واذكر ذلك بوضوح في قسم المنهجية.
- **عدم توفر مراجع مقارنة**: اعتمد قواعد بيانات داخلية أو أشر لعدم توافر المقارنة مع توصية بالحصول على أمثلة لاحقة.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف تحليلي في التقرير:**
> \"يتكرر استخدام الجمل الاسمية بنسبة 62%، ما يمنح اللغة شعوراً بالتأمل الساكن، بينما تكسر أفعال الحركة القصيرة هذا الثبات في لحظات الذروة.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير بصمة الأسلوب حول \"ظلال الميناء\"",
  "summary": "يُظهر التحليل أسلوباً يمزج بين لغة تقنية شاعرية وبنية غير خطية تدعم ثيمة الهوية الرقمية.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "sci-fi"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["tech_enthusiasts"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["style", "voice"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Style Profiler",
    "collaborators": ["Literary Consultant"],
    "createdAt": "2025-03-02T12:00:00Z",
    "updatedAt": "2025-03-02T13:10:00Z",
    "analysisWindow": {
      "start": "2025-03-01T09:00:00Z",
      "end": "2025-03-02T11:45:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تكشف شركة أمن فاسدة مستخدمة أدوات رقمية مبتكرة.",
    "referenceWorks": ["Mr. Robot (2015)", "The Insider (1999)"],
    "productionCompany": "Horizon Pictures",
    "notes": ["العينات مأخوذة من الفصول 1 و2 و3"]
  },
  "details": [
    {
      "id": "style_fp_core",
      "title": "بصمة أسلوب المؤلفة",
      "focus": "style",
      "expositionMethod": "comparative_analysis",
      "summary": "يمتزج وصف تقني شعري مع سرد غير خطي يدعم ثيمة الثقة مقابل السيطرة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "linguisticSignature": {
        "sentenceLength": { "mean": 16.4, "std": 4.1 },
        "lexicalDiversity": 0.68,
        "dominantRegister": "فصحى حديثة بنكهة تقنية",
        "stylisticDevices": ["تشبيه ممتد", "سجع غير متكلف"]
      },
      "narrativeSignature": {
        "pointOfView": ["الشخص الثالث المحدود"],
        "timelineStructure": "غير خطي مع ارتدادات قصيرة",
        "sceneConstruction": "وصف بصري مكثف يسبق الحوار",
        "pacingProfile": { "dialogueShare": 0.34, "actionShare": 0.41, "introspectionShare": 0.25 }
      },
      "thematicSignature": {
        "coreThemes": [
          { "theme": "الثقة مقابل السيطرة", "recurrence": 0.82 },
          { "theme": "الهوية الرقمية", "recurrence": 0.61 }
        ],
        "symbolSystems": [
          { "symbol": "المرآة", "meaning": "تفكيك الذات", "usageFrequency": 5 }
        ],
        "philosophicalAngles": ["الوجودية التقنية"]
      },
      "comparativeBenchmarks": {
        "closestMatches": ["Blade Runner 2049"],
        "distanceScore": 0.29,
        "uniqueDifferentiators": ["دمج مصطلحات تقنية بمرادفات شعرية"]
      },
      "styleRisks": [
        {
          "riskId": "over_metaphor",
          "description": "الاستعارات المكثفة قد تبطئ الإيقاع في مشاهد الحركة",
          "severity": "medium",
          "mitigation": "إضافة جمل فعلية قصيرة بعد كل مقطع وصفي"
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "style_guidelines_packet",
      "title": "إعداد دليل الأسلوب",
      "description": "صياغة دليل مختصر للكتّاب المساعدين يحافظ على السمات الأساسية ويحد من الإفراط في الاستعارات.",
      "priority": "medium",
      "category": "style",
      "focus": "documentation",
      "estimatedEffortHours": 6,
      "owner": "Literary Consultant",
      "impact": "يحمي الاتساق في المسودات المقبلة",
      "dependencies": ["writers_room_sync"],
      "successCriteria": ["مراجعة المؤلفة", "اعتماد فريق الكتابة"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 85,
    "characterDepth": 79,
    "dialogueAuthenticity": 82,
    "pacingControl": 80,
    "thematicResonance": 88,
    "originality": 90,
    "productionFeasibility": 72,
    "audienceAlignment": 84,
    "localizationReadiness": 77,
    "confidenceInterval": {
      "lowerBound": 70,
      "upperBound": 92
    },
    "qualitativeNotes": [
      "الأسلوب يشد القراء التقنيين لكن يحتاج تبسيطاً للجمهور العام",
      "إيقاع الجمل الطويلة قد يبطئ مشاهد الحركة"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "share_with_voice_unit",
        "description": "إرسال نتائج بصمة الأسلوب لوحدة صوت الشخصية لضبط الحوار المستقبلي.",
        "owner": "Head Writer",
        "dueDate": "2025-03-03T09:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": ["تأكيد الاستلام", "دمج الإرشادات في جلسة الكتابة"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك السمات اللغوية مع وحدة \`CHARACTER_VOICE\` لتوحيد البصمة الصوتية.
- استخدم \`styleRisks\` لإبلاغ \`SCENE_GENERATOR\` و\`SCENE_OPTIMIZER\` بما يجب تجنبه.
- حدث \`metadata.categories\` بحيث يشير إلى \"style\" و\"voice\" لتسهيل الفرز في وحدة \`INTEGRATED\`.
- شارك نتائج المقارنة مع \`PLATFORM_ADAPTER\` لتقييم جاهزية التوطين والتسويق.
`;
