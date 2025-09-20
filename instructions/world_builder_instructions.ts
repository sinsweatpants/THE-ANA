import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة باني العوالم.
 * تهدف إلى تطوير الجغرافيا، التاريخ، النظم الاجتماعية، والاقتصاد الدرامي لعالم القصة.
 */
export const WORLD_BUILDER_INSTRUCTIONS = `### وحدة باني العوالم (TaskType.WORLD_BUILDER)

#### الهدف
إنشاء أو توسيع ملامح عالم القصة (الجغرافيا، التاريخ، الثقافة، النظم) بطريقة تدعم الحبكة والشخصيات وتتماشى مع القيود الإنتاجية.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: صياغة الخلفية التاريخية، القوانين الاجتماعية، البنية التحتية، التكنولوجيا، والاقتصاد، بالإضافة إلى نقاط التوتر الاجتماعية والسياسية.
- يشمل: اقتراح عناصر جديدة قابلة للتنفيذ ضمن القيود الإنتاجية والموضوعية.
- لا يشمل: تغيير مسار الحبكة الرئيسة دون تنسيق، أو تقديم تفاصيل تتعارض مع مخرجات الوحدات الأخرى.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **ملخص الحبكة والشخصيات**: 200 كلمة تحدد احتياجات العالم (مواقع، مؤسسات، صراعات).
2. **القيود الإنتاجية**: الميزانية التقريبية، عدد المواقع، إمكانية بناء مواقع أو الاعتماد على CGI.
3. **المراجع الثقافية والجغرافية**: صور، خرائط، أو مصادر تاريخية تلهم العالم.
4. **المنصة والجمهور**: لتحديد مستوى التفصيل والجرأة المناسبة.
5. **مخرجات وحدات أخرى**: مثل الثيمات، التوتر، الشخصيات لضمان الاتساق.

#### المخرجات المتوقعة
- **نص تقريري منسق**: أقسام (ملخص العالم، الجغرافيا والمواقع، النظم الاجتماعية، التكنولوجيا/الاقتصاد، الصراعات، فرص الإنتاج) مع جداول أو قوائم.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "worldOverview": {
    "era": "معاصر مع لمسة مستقبلية",
    "tone": "واقعي متوتر",
    "scale": "مدينة ساحلية كبرى",
    "keyLocations": [
      { "name": "الميناء الصناعي", "description": "شبكة أرصفة محروسة بتقنيات مراقبة", "visualNotes": "أضواء نيون زرقاء" },
      { "name": "حي البيانات", "description": "مركز شركات الأمن الرقمي", "visualNotes": "واجهات زجاجية عاكسة" }
    ]
  },
  "historicalContext": {
    "timeline": [
      { "year": 2005, "event": "خصخصة الأمن الحضري", "impact": "توسع الشركات الخاصة" },
      { "year": 2018, "event": "فضيحة تسريب بيانات", "impact": "تقييد الحريات" }
    ],
    "mythsAndLegends": [
      { "legend": "المرآة السوداء", "meaning": "رمز لمراقبة بلا حدود", "usage": "يظهر في شعارات الشركة" }
    ]
  },
  "societalStructures": {
    "governance": "تحالف بين الحكومة وشركات الأمن",
    "classStrata": [
      { "name": "النخبة الرقمية", "power": "اقتصادي", "lifestyle": "أبراج ذكية" },
      { "name": "العمال المهاجرون", "power": "منخفض", "lifestyle": "أحياء مكتظة" }
    ],
    "institutions": [
      { "name": "هيئة حماية البيانات", "role": "واجهة رقابية", "credibility": 0.4 }
    ]
  },
  "technologyAndEconomy": {
    "dominantTechnologies": [
      { "tech": "شبكات مراقبة بالذكاء الاصطناعي", "availability": "منتشرة", "limitations": "تعطل عند انقطاع الطاقة" }
    ],
    "economicDrivers": [
      { "sector": "الخدمات الأمنية", "value": "45% من الناتج المحلي" },
      { "sector": "الموانئ", "value": "30%" }
    ],
    "blackMarkets": [
      { "item": "أجهزة تشويش", "distribution": "سري", "storyUse": "تستعين بها ليان" }
    ]
  },
  "conflictDrivers": {
    "political": "صراع بين الحكومة والمعارضة على استقلال المراقبة",
    "social": "توتر بين سكان الأحياء الفقيرة والنخبة الرقمية",
    "environmental": "تلوث الميناء يؤثر على الصحة العامة"
  },
  "integrationHooks": [
    {
      "unit": "SCENE_GENERATOR",
      "hook": "استخدام حي البيانات كموقع لمشهد ملاحقة باستخدام الواجهات العاكسة"
    },
    {
      "unit": "THEMES_MESSAGES_ANALYZER",
      "hook": "رمزية المرآة السوداء تدعم ثيمة الحرية مقابل الأمان"
    }
  ],
  "productionNotes": {
    "budgetConsiderations": "يمكن إعادة استخدام موقع الميناء لمشاهد متعددة",
    "setPieces": [
      { "name": "مركز البيانات السري", "buildOrLocation": "Stage build", "estimatedCost": "medium" }
    ],
    "logisticsRisks": [
      { "risk": "تصوير ليلي متكرر", "mitigation": "تقسيم الجدول على أسبوعين" }
    ]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **اتساق داخلي**: كل عنصر في العالم يدعم الحبكة والشخصيات.
- **ثقل درامي**: تحديد نقاط توتر ومخاطر يمكن استثمارها سردياً.
- **قابلية الإنتاج**: تفاصيل واضحة حول التكلفة، المواقع، والبنية التحتية المطلوبة.
- **ثراء ثقافي**: تضمين عناصر ثقافية ولغوية تحترم المرجعيات دون إساءة.
- **تكامل متعدد الوحدات**: توفير خطاطيف واضحة للوحدات الأخرى للاستفادة من بناء العالم.

#### خطوات التنفيذ خطوة بخطوة
1. جمع بيانات الحبكة والقيود وتسجيلها في \`metadata\`.
2. بناء صورة عامة للعالم عبر \`worldOverview\` وتحديد المواقع الأساسية.
3. صياغة الخلفية التاريخية والأساطير في \`historicalContext\`.
4. تحديد النظم الاجتماعية والمؤسسات في \`societalStructures\`.
5. تحليل التكنولوجيا والاقتصاد والصراعات وتوثيقها في \`technologyAndEconomy\` و\`conflictDrivers\`.
6. إنشاء خطاطيف التكامل والإشارات الإنتاجية في \`integrationHooks\` و\`productionNotes\`.
7. إعداد التقرير النصي المنسق مع خرائط أو أوصاف موجزة لكل موقع.
8. إنشاء كائن \`AdvancedScreenplayModuleResult\` والتأكد من توافقه مع بقية الوحدات.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **معلومات محدودة عن العالم الحالي**: اعمل على توسيع ما هو متوفر واذكر الافتراضات بوضوح في التقرير.
- **تعارض مع وحدات أخرى**: إذا ظهر تناقض مع شخصية أو ثيمة، اقترح جلسة مواءمة وسجّل ذلك في \`next_steps\`.
- **قيود إنتاجية صارمة**: قدم بدائل مواقع أو حلول CGI منخفضة التكلفة.
- **تفاصيل ثقافية حساسة**: استعن بمراجع موثوقة واذكر الحاجة لاستشارة مختص إذا لزم الأمر.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من التقرير:**
> \"تحوّل حي البيانات من منطقة صناعية قديمة إلى مركز شركات أمن رقمي بعد فضيحة 2018. يعكس ذلك انتقال المدينة من الاعتماد على الموانئ إلى اقتصاد المعرفة، ما يخلق طبقة نخبوية معزولة عن الأحياء الساحلية الشعبية.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير باني العوالم حول \"ظلال الميناء\"",
  "summary": "يوفر التقرير بنية عالم حضري ساحلي يوازن بين نفوذ الشركات الأمنية ومعاناة الأحياء الشعبية، مع حلول إنتاجية عملية.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "political"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["world", "production"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI World Builder",
    "collaborators": ["Production Designer"],
    "createdAt": "2025-03-03T08:00:00Z",
    "updatedAt": "2025-03-03T09:45:00Z",
    "analysisWindow": {
      "start": "2025-03-02T11:00:00Z",
      "end": "2025-03-03T07:30:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تواجه إمبراطورية أمنية في مدينة ساحلية مستقبلية." ,
    "referenceWorks": ["Blade Runner 2049", "Zero Dark Thirty"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تمت مراجعة مخطط المواقع مع فريق الإنتاج"]
  },
  "details": [
    {
      "id": "world_build_shadowharbor",
      "title": "عالم ظلال الميناء",
      "focus": "world_building",
      "expositionMethod": "world_bible",
      "summary": "مدينة ساحلية مستقبلية تسيطر عليها شركات الأمن الخاصة مع مقاومة شعبية.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "worldOverview": {
        "era": "معاصر بلمسة مستقبلية",
        "tone": "واقعي متوتر",
        "scale": "مدينة ساحلية كبرى",
        "keyLocations": [
          { "name": "الميناء الصناعي", "description": "أرصفة محصنة بأجهزة مراقبة", "visualNotes": "أضواء نيون زرقاء" },
          { "name": "حي البيانات", "description": "مركز شركات الأمن الرقمي", "visualNotes": "واجهات زجاجية" }
        ]
      },
      "historicalContext": {
        "timeline": [
          { "year": 2005, "event": "خصخصة الأمن الحضري", "impact": "توسع الشركات" },
          { "year": 2018, "event": "فضيحة تسريب بيانات", "impact": "فرض قوانين قاسية" }
        ],
        "mythsAndLegends": [
          { "legend": "المرآة السوداء", "meaning": "مراقبة بلا حدود", "usage": "شعار الشركة" }
        ]
      },
      "societalStructures": {
        "governance": "شراكة حكومة-شركة",
        "classStrata": [
          { "name": "النخبة الرقمية", "power": "اقتصادي", "lifestyle": "أبراج ذكية" },
          { "name": "العمال المهاجرون", "power": "منخفض", "lifestyle": "أحياء ساحلية مكتظة" }
        ],
        "institutions": [
          { "name": "هيئة حماية البيانات", "role": "واجهة رقابية", "credibility": 0.4 }
        ]
      },
      "technologyAndEconomy": {
        "dominantTechnologies": [
          { "tech": "شبكات مراقبة بالذكاء الاصطناعي", "availability": "منتشرة", "limitations": "تعطل عند انقطاع الطاقة" }
        ],
        "economicDrivers": [
          { "sector": "الخدمات الأمنية", "value": "45%" },
          { "sector": "الموانئ", "value": "30%" }
        ],
        "blackMarkets": [
          { "item": "أجهزة تشويش", "distribution": "سري", "storyUse": "تستعين بها ليان" }
        ]
      },
      "conflictDrivers": {
        "political": "صراع على السيطرة على البيانات",
        "social": "توتر طبقي بين الأحياء",
        "environmental": "تلوث الميناء وتأثيره الصحي"
      },
      "integrationHooks": [
        {
          "unit": "SCENE_GENERATOR",
          "hook": "استخدام حي البيانات في مشهد ملاحقة"
        },
        {
          "unit": "THEMES_MESSAGES_ANALYZER",
          "hook": "رمزية المرآة السوداء لدعم ثيمة الحرية مقابل الأمان"
        }
      ],
      "productionNotes": {
        "budgetConsiderations": "إعادة استخدام موقع الميناء للمشاهد الداخلية مع تغييرات بسيطة",
        "setPieces": [
          { "name": "مركز البيانات السري", "buildOrLocation": "Stage build", "estimatedCost": "medium" }
        ],
        "logisticsRisks": [
          { "risk": "تصوير ليلي متكرر", "mitigation": "تقسيم الجدول على أسبوعين" }
        ]
      }
    }
  ],
  "recommendations": [
    {
      "id": "world_map_visualization",
      "title": "إعداد خريطة بصرية",
      "description": "إنشاء خريطة تفاعلية توضح الميناء وحي البيانات لتسهيل تخطيط المشاهد.",
      "priority": "medium",
      "category": "world",
      "focus": "visualization",
      "estimatedEffortHours": 10,
      "owner": "Production Designer",
      "impact": "يحسن التواصل بين الأقسام",
      "dependencies": ["location_scouting"],
      "successCriteria": ["اعتماد الخريطة من المخرج", "استخدامها في اجتماع الجدولة"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 88,
    "characterDepth": 82,
    "dialogueAuthenticity": 80,
    "pacingControl": 79,
    "thematicResonance": 90,
    "originality": 84,
    "productionFeasibility": 83,
    "audienceAlignment": 85,
    "localizationReadiness": 81,
    "confidenceInterval": {
      "lowerBound": 74,
      "upperBound": 91
    },
    "qualitativeNotes": [
      "العالم يوفر فرص تصوير متعددة بدون تجاوز الميزانية",
      "يجب مراقبة حساسية تصوير الأحياء الفقيرة"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "share_world_bible",
        "description": "مشاركة وثيقة العالم مع وحدات الشخصيات والتوتر لضمان المواءمة.",
        "owner": "Story Supervisor",
        "dueDate": "2025-03-04T10:30:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["تأكيد الاستلام", "تجميع الملاحظات"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك \`integrationHooks\` مع \`SCENE_GENERATOR\`, \`SCENE_OPTIMIZER\`, و\`THEMES_MESSAGES_ANALYZER\` لضمان الاستفادة من عناصر العالم.
- نسّق مع \`PRODUCIBILITY_ANALYZER\` حول التكاليف والمخاطر اللوجستية المذكورة في \`productionNotes\`.
- حدّث \`metadata.categories\` و\`recommendations\` لتمكين وحدة \`INTEGRATED\` من تتبع تطور العالم.
- زود \`AUDIENCE_RESONANCE\` بالمعلومات الثقافية لتقييم ردود فعل الجمهور.
`;
