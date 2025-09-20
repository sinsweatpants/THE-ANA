import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة الإبداع المحاكي.
 * تضمن توليد محتوى أصيل يحافظ على بصمة المؤلف الأصلية مع توثيق كامل لاختيارات الأسلوب.
 */
export const CORE_CREATIVE_INSTRUCTIONS = `### مهمة الإبداع المحاكي (TaskType.CREATIVE)

#### الهدف
ابتكار مادة سردية أو حوارية جديدة تحاكي الأسلوب الأصلي للعمل مع تقديم قيمة إضافية (توسيع مشهد، إنشاء تسلسل بديل، أو كتابة مادة ترويجية) دون الإخلال بالهوية الفنية.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل الأسلوب المرجعي، تحديد الأهداف الإبداعية، توليد نص جديد بصيغة مناسبة، وتوثيق نسبة الابتكار إلى المحاكاة.
- يشمل: الالتزام بالقيود الإنتاجية إن وُجدت (عدد الشخصيات، المواقع، طول المشهد).
- لا يشمل: إعادة كتابة كاملة للحبكة، تغيير مصير الشخصيات الرئيسية، أو إدخال عناصر من نوعيات مختلفة جذرياً دون تفويض صريح.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **المرجع الأسلوبي**: 2-4 مقاطع (نثرية، حوارية، أو سيناريو) مع تحديد الصفحات أو الطوابع الزمنية.
2. **الغاية الإبداعية**: وصف واضح للمطلوب (تمديد مشهد، مشهد بديل، مادة تسويقية) مع الهدف الدرامي أو التسويقي.
3. **نطاق الطول**: عدد الكلمات أو الصفحات أو الدقائق المتوقعة (مثلاً 400 كلمة أو مشهد مدته 2.5 دقيقة).
4. **الجمهور المستهدف والمنصة**: لتكييف اللغة والجرأة (مثلاً جمهور عائلي، منصة بث رقمي).
5. **قيود إضافية**: كلمات محظورة، نبرة إلزامية، عناصر يجب إدراجها، أو حدود للابتكار (نسبة 0-1).

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن ملخص الهدف، تحليل الأسلوب المرجعي، استراتيجية التوليد، النص الإبداعي النهائي، وجدول يقارن السمات الأصلية بالمستحدثة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "creativeBrief": {
    "prompt": "إعادة كتابة المواجهة الختامية بزاوية رؤية الخصم",
    "toneTargets": ["مكثّف", "شاعري"],
    "lengthTargetWords": 420,
    "narrativePurpose": "إبراز الثمن العاطفي قبل الذروة",
    "styleConstraints": ["لغة فصحى مع إيحاءات شاعرية", "تجنب الاستعارات الغربية"],
    "innovationQuota": 0.35
  },
  "referencePalette": {
    "samples": [
      { "id": "ref_scene_12", "location": "صفحة 48", "dominantMotifs": ["انعكاسات الضوء", "صمت طويل"] }
    ],
    "motifs": ["المرآة", "صوت المطر"],
    "linguisticDevices": ["تكرار إيقاعي", "صور حسية"],
    "negativeList": ["نكات ساخرة", "لغة عامية"]
  },
  "generatedContent": {
    "format": "screenplay",
    "sections": [
      {
        "title": "INT. ممر المحكمة - ليل",
        "content": "نور يراقب انعكاسه بينما يواجه خصمه، وتتحول المرآة إلى ساحة اعتراف.",
        "wordCount": 160,
        "emotionalCurve": [
          { "stage": "افتتاح", "intensity": 0.45 },
          { "stage": "تصاعد", "intensity": 0.78 },
          { "stage": "ذروة", "intensity": 0.92 }
        ]
      }
    ],
    "totalWordCount": 430
  },
  "qualityChecks": {
    "styleSimilarity": 0.81,
    "originalityScore": 0.66,
    "cohesionScore": 0.84,
    "plagiarismScan": "clean",
    "notes": ["تم الحفاظ على تكرار الصور البصرية", "ابتكار تشبيه جديد للمرآة"]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **اتساق الصوت والأسلوب**: درجة تشابه لا تقل عن 0.75 مع المرجع وفق تحليل القاموس ونمط الجملة.
- **نسبة الابتكار**: إدخال عناصر جديدة مدروسة دون كسر الهوية (0.25-0.4 ما لم يُطلب غير ذلك).
- **الملاءمة الدرامية/التسويقية**: يخدم النص الهدف المحدد ويستجيب للجمهور والمنصة.
- **السلامة اللغوية**: خلو من الأخطاء النحوية، استخدام علامات ترقيم ملائمة، وتماسك الفقرات.
- **قابلية الدمج**: يمكن إدراج النص مباشرة في الوثيقة الرئيسية دون تعديل بنيوي كبير.

#### خطوات التنفيذ خطوة بخطوة
1. تحليل المقاطع المرجعية وتوثيق السمات الأسلوبية في \`referencePalette\`.
2. تفكيك الغاية الإبداعية وتحديد نسب الابتكار والمحاكاة في \`creativeBrief\`.
3. إعداد مخطط محتوى (مشاهد أو فقرات) وتقدير الطول لكل قسم.
4. توليد المسودة الأولى مع مراقبة الانحرافات عن الأسلوب وتسجيلها.
5. مراجعة المسودة لغوياً ودلالياً، ومواءمتها مع القيود الإنتاجية والجمهور المستهدف.
6. ملء قسم \`qualityChecks\` بنتائج القياسات الآلية أو التقديرات المستندة إلى المعايير.
7. صياغة التقرير النصي وإنتاج كائن \`AdvancedScreenplayModuleResult\` متكامل مع التوصيات أو الخطوات التالية.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **مرجع أسلوبي محدود**: استخدم وحدات الصوت أو التحليل السابقة، ودوّن انخفاض الثقة في \`metadata.notes\`.
- **قيود طول متضاربة**: اعتمد الحد الأعلى وعلّل سبب اختيارك في التقرير النصي.
- **منصات متعددة بجمهور مختلف**: أنشئ أقساماً منفصلة ضمن \`generatedContent.sections\` مع توضيح تكييف كل منصة.
- **تشابه عالي مع النص الأصلي (>0.9)**: أعد صياغة المقاطع المتطابقة مع الاحتفاظ بالنية الدرامية.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف مرجعي قبل التنفيذ:**
> "نور: عندما ينعكس وجهي على الزجاج أرى كل الوجوه التي خذلتها." (صفحة 48)

**مقتطف من النص الإبداعي بعد التنفيذ:**
> نور يتقدم نحو خصمه، يضع كفه على المرآة: "أنظر جيداً، ليس وجهي وحده هنا... كل صمت تركته خلفي يقف الآن بيننا." 
> الخصم: "الأوهام لا تغيّر الحكم يا نور." 
> نور: "لكنها تكشف مَن اعتاد أن يختبئ وراءها." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير الإبداع المحاكي لمشهد المرآة في \"ظلال الممر\"",
  "summary": "تم إنتاج مشهد مواجه بديل يحافظ على شاعرية الأسلوب الأصلي ويضيف زاوية رؤية الخصم لرفع التوتر العاطفي.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "drama"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["creative", "character"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Creative Mimic Engine",
    "collaborators": ["Head Writer"],
    "createdAt": "2025-05-12T09:00:00Z",
    "updatedAt": "2025-05-12T11:20:00Z",
    "analysisWindow": {
      "start": "2025-05-11T07:00:00Z",
      "end": "2025-05-12T07:30:00Z"
    },
    "wordCount": 5600,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["The Night Of (2016)", "Mindhunter (2017)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["تم استخدام مقاطع من الحلقة 2 كمراجع أسلوبية."]
  },
  "details": [
    {
      "id": "creative_mirror_showdown",
      "title": "مشهد المواجهة أمام المرآة",
      "focus": "creative",
      "expositionMethod": "screenplay_scene",
      "summary": "المشهد يستحضر المجاز البصري الأصلي ويضيف حواراً داخلياً يرفع التوتر.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "creativeBrief": {
        "prompt": "كتابة مشهد مواجهة بديل بزاوية الخصم",
        "toneTargets": ["مكثف", "شاعري"],
        "lengthTargetWords": 420,
        "narrativePurpose": "تكثيف الصراع الداخلي قبل الذروة",
        "styleConstraints": ["لغة تصويرية", "تجنب العامية"],
        "innovationQuota": 0.34
      },
      "referencePalette": {
        "samples": [
          { "id": "ref_scene_02", "location": "Episode1 00:14:32", "dominantMotifs": ["المرآة", "انعكاس الضوء"] }
        ],
        "motifs": ["الانعكاس", "الظل"],
        "linguisticDevices": ["توازي", "تشبيه"],
        "negativeList": ["تهكم مباشر"]
      },
      "generatedContent": {
        "format": "screenplay",
        "sections": [
          {
            "title": "INT. قاعة القصر - ليل",
            "content": "نور يقف أمام خصمه، المرآة تتشقق مع كل اعتراف.",
            "wordCount": 155,
            "emotionalCurve": [
              { "stage": "افتتاح", "intensity": 0.4 },
              { "stage": "تصاعد", "intensity": 0.76 },
              { "stage": "ذروة", "intensity": 0.9 }
            ]
          }
        ],
        "totalWordCount": 425
      },
      "qualityChecks": {
        "styleSimilarity": 0.82,
        "originalityScore": 0.65,
        "cohesionScore": 0.85,
        "plagiarismScan": "clean",
        "notes": ["التزم بالصور الضوئية", "تم إدخال استعارة جديدة للمرايا"]
      }
    }
  ],
  "recommendations": [
    {
      "id": "creative_soundscape_alignment",
      "title": "مواءمة التصميم الصوتي",
      "description": "إضافة مؤثر صوتي لذبذبة الضوء يدعم الصور البصرية المستحدثة.",
      "priority": "medium",
      "category": "creative",
      "focus": "sound",
      "estimatedEffortHours": 6,
      "owner": "Sound Designer",
      "impact": "رفع التوتر السمعي ومواءمته مع الرمزية البصرية.",
      "dependencies": ["sound_team_review"],
      "successCriteria": [
        "إضافة طبقة صوتية معتمدة قبل الميكس النهائي",
        "الحصول على موافقة المخرج في جلسة الاستماع"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 86,
    "characterDepth": 82,
    "dialogueAuthenticity": 79,
    "pacingControl": 80,
    "thematicResonance": 88,
    "originality": 74,
    "productionFeasibility": 72,
    "audienceAlignment": 83,
    "localizationReadiness": 76,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 88
    },
    "qualitativeNotes": [
      "الصور الشعرية متسقة مع النبرة الأصلية",
      "يوصى بمراجعة طول الحوار لضمان السرعة"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "creative_review_01",
        "description": "تنسيق مراجعة مع كاتب الحلقة للتأكد من اتساق الحوافز",
        "owner": "Showrunner",
        "dueDate": "2025-05-14T09:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "تقرير موافقة خطي",
          "تثبيت التعديلات الصوتية"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
