import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة تحليل الجمهور المستهدف.
 * توجه الوكيل لتحديد الشرائح المثلى، توقعاتهم، واستجابة السوق المحتملة.
 */
export const TARGET_AUDIENCE_ANALYZER_INSTRUCTIONS = `### وحدة محلل الجمهور المستهدف (TaskType.TARGET_AUDIENCE_ANALYZER)

#### الهدف
رسم خريطة دقيقة للجمهور الأساسي والثانوي، تقييم توقعاتهم، قياس جاذبية العمل لهم، وتقديم توصيات تسويقية وتكييفية قابلة للتنفيذ.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل بيانات السوق، مطابقة خصائص العمل مع احتياجات الجمهور، تحديد المخاطر الحساسة، وتقديم استراتيجيات تواصل.
- يشمل: دمج معطيات النوع (Genre) والمنصة للتنبؤ بالتوافق السلوكي.
- لا يشمل: إعداد خطة تسويق تفصيلية بميزانيات، أو تعديل نص العمل مباشرةً دون الرجوع للوحدات المختصة.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **بيانات العمل**: النوع، الطول، التصنيف الرقابي، المرحلة التطويرية، المنصة المستهدفة.
2. **معلومات الجمهور الحالية**: إن وجدت (تقارير سابقة، استطلاعات، أداء أعمال مشابهة).
3. **أهداف التوزيع**: أسواق محلية/عالمية، تواريخ إطلاق تقريبية، أهداف الإيرادات أو نسب الوصول.
4. **قيود المحتوى**: عناصر حساسة يجب الانتباه إليها (دين، سياسة، عنف) مع توضيح الأسواق المتأثرة.
5. **مراجع المقارنة**: ثلاثة أعمال ناجحة في سوق مماثل مع بيانات الأداء (شباك التذاكر، نسب المشاهدة، تقييمات الجمهور).

#### المخرجات المتوقعة
- **نص تقريري منسق**: أقسام (تحديد الشرائح، ملاءمة التوقعات، عوامل الجذب، عناصر الحساسية، استراتيجيات التسويق، توصيات التكييف) مع جداول مقارنة وخلاصات كمية.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "demographicsIdentifier": {
    "primaryTargetAudience": {
      "label": "محترفو التقنية 25-39",
      "ageRange": "25-39",
      "gender": "mixed",
      "regions": ["MENA Urban"],
      "interests": ["تقنية", "أعمال تشويق"],
      "lifestyleMarkers": ["مشاهدة منصات بث", "العمل عن بعد"]
    },
    "secondaryTargetAudiences": [
      {
        "label": "طلاب جامعات",
        "ageRange": "19-24",
        "interests": ["أفلام تحقيق", "قضايا اجتماعية"],
        "regions": ["مصر", "الإمارات"],
        "sizeEstimate": 1.2
      }
    ],
    "justificationForSelection": "العمل يعالج قضايا أمن معلومات مع عناصر درامية تجذب الشباب المحترفين."
  },
  "expectationsAnalyzer": {
    "genreExpectations": [
      { "expectation": "إيقاع سريع", "alignment": 0.78 },
      { "expectation": "بطلة قوية تقود الأحداث", "alignment": 0.9 }
    ],
    "themeExpectations": [
      { "theme": "العدالة الاجتماعية", "alignment": 0.72 }
    ],
    "formatPreferences": ["مسلسل قصير 8 حلقات", "فيلم 110 دقائق"],
    "gaps": ["قلة اللحظات العاطفية المؤثرة للجمهور العائلي"]
  },
  "attractionAssessor": {
    "uniqueSellingPoints": [
      { "usp": "بطلة عربية في مجال الأمن السيبراني", "perceivedImpact": "high" },
      { "usp": "مؤامرة سياسية مستوحاة من أحداث واقعية", "perceivedImpact": "medium" }
    ],
    "hookMoments": [
      { "moment": "اختراق البث المباشر", "recommendedPlacement": "الإعلان التشويقي" }
    ],
    "potentialWeaknesses": [
      { "issue": "المصطلحات التقنية المعقدة", "affectedSegment": "الجمهور العام", "mitigation": "تضمين شروح بصرية" }
    ]
  },
  "sensitiveContentDetectorForAudience": [
    {
      "elementDescription": "مشهد استجواب عنيف",
      "targetAudienceSegment": "العائلات المحافظة",
      "potentialReaction": "انسحاب من المشاهدة",
      "mitigationSuggestion": "تخفيف الجرعة البصرية أو تحذير محتوى مسبق"
    }
  ],
  "marketabilityAnalyzer": {
    "overallMarketabilityScore": 0.74,
    "marketingAngles": [
      "تقاطع الأمن السيبراني مع الدراما العائلية",
      "بطلة عربية تقود ثورة بيانات"
    ],
    "comparativePerformance": [
      {
        "referenceTitle": "The Night Manager (Arabic)",
        "similarity": 0.63,
        "performance": {
          "platform": "TV",
          "metric": "متوسط 8.1/10 تقييم جمهور"
        }
      }
    ],
    "distributionNotes": "يفضل إطلاق تدريجي في رمضان مع حملة رقمية مكثفة."
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **دقة الشرائح**: يجب أن تستند كل شريحة إلى بيانات أو مراجع موثوقة مذكورة في التقرير.
- **قابلية التنفيذ**: التوصيات التسويقية قابلة للتطبيق ضمن جداول زمنية واقعية.
- **تغطية الحساسية**: جميع العناصر الحساسة المحتملة موثقة مع حلول واضحة.
- **تكامل الأرقام**: الاتساق بين قيم \`overallMarketabilityScore\` وتحليل النص.
- **متابعة الأثر**: توصيات مرتبطة بمؤشرات نجاح (KPIs) يمكن للوحدات الأخرى تتبعها.

#### خطوات التنفيذ خطوة بخطوة
1. جمع البيانات الوصفية للعمل وتسجيلها في \`metadata\`.
2. تحليل السوق والشرائح بناءً على النوع والمنصة وتوثيق النتائج في \`demographicsIdentifier\`.
3. مطابقة توقعات الجمهور مع عناصر العمل الحالية وتعبئة \`expectationsAnalyzer\` مع تحديد الفجوات.
4. تحديد نقاط الجذب والمخاطر وتوثيقها في \`attractionAssessor\` و\`sensitiveContentDetectorForAudience\`.
5. تقييم قابلية التسويق ومقارنة الأداء مع أعمال مشابهة وملء \`marketabilityAnalyzer\`.
6. إعداد التقرير النصي المنسق مع جداول الشرائح وخريطة التوقعات.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` وإدراج توصيات وخطوات متابعة محددة.
8. مراجعة نهائية للتأكد من أن كل توصية مرتبطة بجمهور محدد وأن القيم الرقمية متسقة.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **نقص البيانات السوقية**: استخدم قواعد بيانات داخلية أو نماذج تقديرية، مع توثيق مستوى الثقة في \`metadata.notes\`.
- **عمل متعدد المنصات**: قدم تحليلاً منفصلاً لكل منصة وحدد التداخل بين الشرائح.
- **تعارض بين الجمهور الحالي والمستهدف**: اشرح الفجوة واقترح حلول تكييف أو حملات تثقيفية.
- **محتوى حساس غير موثق**: إذا لم تتوافر معلومات كافية، أوضح الحاجة لاستشارة قانونية أو ثقافية إضافية.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من التقرير:**
> \"تشير بيانات الجمهور الرقمي إلى أن نسبة 64% من المهنيين التقنيين يشاهدون مسلسلات الجرائم الواقعية. احتفظنا بمستوى المصطلحات التقنية لكن أوصينا بإضافة شروح مرئية لضمان عدم فقدان الجمهور العام.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محلل الجمهور المستهدف حول \"ظلال الميناء\"",
  "summary": "يستهدف العمل محترفي التقنية في المدن العربية مع إمكانات توسع نحو طلاب الجامعات عبر حملات توعية بالمخاطر الرقمية.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "political"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["market", "audience"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Audience Strategist",
    "collaborators": ["Marketing Lead"],
    "createdAt": "2025-03-02T14:00:00Z",
    "updatedAt": "2025-03-02T15:10:00Z",
    "analysisWindow": {
      "start": "2025-03-01T16:00:00Z",
      "end": "2025-03-02T13:45:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تسعى لفضح شركة أمن فاسدة قبل أن تُسكتها السلطة.",
    "referenceWorks": ["Snowden (2016)", "The Looming Tower (2018)"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تم الاعتماد على تقرير Nielsen MENA 2024"]
  },
  "details": [
    {
      "id": "audience_core_segments",
      "title": "شرائح الجمهور المستهدفة",
      "focus": "audience",
      "expositionMethod": "market_analysis",
      "summary": "الجمهور الأساسي من محترفي التقنية يحتاج إلى رسائل تركّز على كشف الفساد الرقمي، مع توسع نحو الطلاب عبر حملات توعوية.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "demographicsIdentifier": {
        "primaryTargetAudience": {
          "label": "محترفو التقنية 25-39",
          "ageRange": "25-39",
          "gender": "mixed",
          "regions": ["MENA Urban"],
          "interests": ["تقنية", "سياسة"],
          "lifestyleMarkers": ["منصات بث", "مؤتمرات تقنية"]
        },
        "secondaryTargetAudiences": [
          {
            "label": "طلاب جامعات",
            "ageRange": "19-24",
            "interests": ["قضايا اجتماعية", "دراما واقعية"],
            "regions": ["مصر", "الإمارات"],
            "sizeEstimate": 1.2
          }
        ],
        "justificationForSelection": "القصة تركز على أمن المعلومات مع بطلة شابة ملهمة لهذه الفئات."
      },
      "expectationsAnalyzer": {
        "genreExpectations": [
          { "expectation": "إيقاع سريع", "alignment": 0.78 },
          { "expectation": "مواجهات ذكية وليس عنفاً مباشراً", "alignment": 0.72 }
        ],
        "themeExpectations": [
          { "theme": "محاسبة السلطة", "alignment": 0.75 }
        ],
        "formatPreferences": ["فيلم 110 دقائق", "سلسلة محدودة"],
        "gaps": ["غياب لحظات إنسانية دافئة للجمهور العائلي"]
      },
      "attractionAssessor": {
        "uniqueSellingPoints": [
          { "usp": "بطلة عربية في الأمن السيبراني", "perceivedImpact": "high" }
        ],
        "hookMoments": [
          { "moment": "البث المباشر للأدلة", "recommendedPlacement": "حملة ترويج رقمية" }
        ],
        "potentialWeaknesses": [
          { "issue": "لغة تقنية معقدة", "affectedSegment": "الجمهور العام", "mitigation": "شروح بصرية مبسطة" }
        ]
      },
      "sensitiveContentDetectorForAudience": [
        {
          "elementDescription": "استجواب بدني في الفصل الثالث",
          "targetAudienceSegment": "العائلات المحافظة",
          "potentialReaction": "رفض المحتوى",
          "mitigationSuggestion": "اقتراح نسختين للمشهد بدرجتي حدة مختلفتين"
        }
      ],
      "marketabilityAnalyzer": {
        "overallMarketabilityScore": 0.74,
        "marketingAngles": [
          "دراما تقنية مبنية على أحداث عربية",
          "رحلة بطلة تكشف شبكة فساد"
        ],
        "comparativePerformance": [
          {
            "referenceTitle": "The Night Manager (Arabic)",
            "similarity": 0.63,
            "performance": { "platform": "TV", "metric": "متوسط 8.1/10 تقييم جمهور" }
          }
        ],
        "distributionNotes": "إطلاق تدريجي عبر منصة بث مع حملة تواصل عبر لينكدإن"
      }
    }
  ],
  "recommendations": [
    {
      "id": "aud_campaign_teaser",
      "title": "حملة تشويقية موجهة",
      "description": "تصميم حملة تشويقية رقمية تستهدف محترفي التقنية مع محتوى توعوي حول الأمن السيبراني.",
      "priority": "high",
      "category": "marketing",
      "focus": "campaign",
      "estimatedEffortHours": 18,
      "owner": "Marketing Lead",
      "impact": "رفع معدل الوعي بنسبة متوقعة 20%",
      "dependencies": ["creative_asset_alignment"],
      "successCriteria": ["تحقيق 1.5 مليون انطباع", "معدل تفاعل ≥ 6%"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 82,
    "characterDepth": 78,
    "dialogueAuthenticity": 80,
    "pacingControl": 79,
    "thematicResonance": 85,
    "originality": 73,
    "productionFeasibility": 88,
    "audienceAlignment": 90,
    "localizationReadiness": 82,
    "confidenceInterval": {
      "lowerBound": 74,
      "upperBound": 90
    },
    "qualitativeNotes": [
      "يحتاج إلى محتوى توعوي لمساعدة الجمهور العام",
      "المنطقة الخليجية تتطلب مراجعة حساسية إضافية"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "sync_with_platform_adapter",
        "description": "مشاركة نتائج الجمهور مع وحدة مواءمة المنصات لتحديد صيغ الإصدارات.",
        "owner": "Distribution Manager",
        "dueDate": "2025-03-04T10:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": ["تأكيد المنصة المستهدفة", "إدراج تعديلات المحتوى"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- زود \`PLATFORM_ADAPTER\` و\`PRODUCIBILITY_ANALYZER\` بنتائج الحساسية لتكييف النسخ والمنصات.
- شارك توصيات الحملة مع \`CREATIVE\` و\`RECOMMENDATIONS_GENERATOR\` لضمان اتساق الرسائل.
- حدث \`metadata.categories\` و\`recommendations\` بما يدعم وحدة \`INTEGRATED\` في تلخيص وضع السوق.
- أرسل بيانات الشرائح إلى \`AUDIENCE_RESONANCE\` لمواءمة التأثير العاطفي مع الجمهور الفعلي.
`;
