import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محلل سيناريوهات "ماذا لو".
 * تولد مسارات بديلة للحبكة مع تقييم آثارها الدرامية والإنتاجية.
 */
export const WHAT_IF_SCENARIO_ANALYZER_INSTRUCTIONS = `### وحدة محلل سيناريوهات "ماذا لو" (TaskType.WHAT_IF_SCENARIO_ANALYZER)

#### الهدف
استكشاف سيناريوهات بديلة عبر تعديل متغير جوهري واحد في كل مرة، وتحليل أثره على الحبكة، الشخصيات، الثيمات، وقابلية الإنتاج.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: اختيار نقاط تحول محتملة، بناء مسارات بديلة متسقة، قياس المخاطر والفرص، وتقديم توصيات حول السيناريو الأكثر جدوى.
- يشمل: تقييم التبعات على التوتر، الموضوعات، والجمهور المستهدف.
- لا يشمل: إعادة كتابة النص بالكامل أو اتخاذ قرارات نهائية دون موافقة الفرق المسؤولة.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **ملخص الحبكة والشخصيات**: 200-300 كلمة مع تحديد نقاط التحول الأساسية.
2. **أهداف التطوير**: ما الذي يرغب الفريق في اختباره (رفع التوتر، تغيير نهاية، تعزيز ثيمة).
3. **قيود سردية أو إنتاجية**: عناصر لا يمكن تغييرها، حدود الميزانية، أطوال الحلقات أو مدة الفيلم.
4. **بيانات الجمهور**: الشرائح المستهدفة وردود الفعل السابقة إن وجدت.
5. **ملاحظات الوحدات الأخرى** ذات الصلة (تحليل شخصيات، توتر، موضوعات) لدعم الاتساق.

#### المخرجات المتوقعة
- **نص تقريري منسق**: أقسام (الفرضيات، السيناريوهات البديلة، تحليل التأثير، المخاطر، التوصية) مع جداول تقارن العواقب العاطفية، الصراع، والنهاية المتوقعة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "scenarioPivot": {
    "originalTurningPoint": "ليان تبث الأدلة قبل اعتقالها",
    "alteredVariable": "ليان تقرر حماية عائلتها وتأجيل البث",
    "rationale": "اختبار تأثير تأجيل الحقيقة على الثقة داخل الفريق"
  },
  "alternativeScenarios": [
    {
      "id": "what_if_delay_broadcast",
      "title": "ماذا لو أخرت ليان البث؟",
      "logline": "تختار ليان تأجيل كشف الأدلة لحماية عائلتها، مما يدفع الفريق للانقسام.",
      "causalChain": [
        { "stage": "التغيير", "description": "ليان تؤجل البث" },
        { "stage": "نتيجة مباشرة", "description": "الفريق ينقسم حول الثقة" },
        { "stage": "تصعيد", "description": "ماهر يستغل التأجيل لكشف خائن في الفريق" }
      ],
      "impactAssessment": {
        "tension": { "current": 0.78, "projected": 0.84 },
        "themeAlignment": { "freedom_vs_security": "يتعزز الصراع", "family": "يزداد الضغط" },
        "characterArcs": [
          { "character": "ليان", "trajectory": "تتعلم مشاركة القرار", "risk": "فقدان ثقة الفريق" }
        ],
        "audienceReaction": {
          "targetSegment": "محترفو التقنية",
          "opportunity": "استكشاف بعد أخلاقي أعمق",
          "risk": "بطء في الإيقاع إذا طال التأجيل"
        }
      },
      "productionImpact": {
        "budgetDelta": "+5%",
        "newLocations": ["منزل العائلة"],
        "complexity": "medium"
      },
      "viabilityScore": 0.76
    }
  ],
  "riskRegister": [
    {
      "scenarioId": "what_if_delay_broadcast",
      "risk": "تمديد الفصل الثالث",
      "probability": 0.6,
      "impact": "medium",
      "mitigation": "ضغط المواجهة النهائية في تسلسل أقصر"
    }
  ],
  "recommendationSummary": {
    "preferredScenarioId": "what_if_delay_broadcast",
    "justification": "يعزز الصراع الداخلي دون تجاوز القيود الإنتاجية",
    "nextValidationStep": "قراءة طاولة للنسخة البديلة"
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **تعدد السيناريوهات**: تقديم ثلاثة سيناريوهات كحد أقصى مع اختلافات جوهرية واضحة.
- **اتساق سردي**: كل سيناريو يحافظ على منطق الحبكة والشخصيات.
- **تحليل كمي ونوعي**: دمج مقاييس التوتر والجدوى مع تحليل نوعي للأثر العاطفي.
- **قابلية التنفيذ**: توضيح التأثير الإنتاجي والجدول الزمني المتوقع.
- **توصية مبررة**: اختيار سيناريو مفضل مع أسباب واضحة وخطوات تحقق لاحقة.

#### خطوات التنفيذ خطوة بخطوة
1. توثيق نقطة التحول الأصلية والمتغيرات الممكنة في \`scenarioPivot\`.
2. إنشاء 2-3 سيناريوهات بديلة وتفصيلها في \`alternativeScenarios\` مع سلسلة الأسباب والنتائج.
3. تقييم الأثر على التوتر، الثيمات، الشخصيات، والجمهور داخل \`impactAssessment\`.
4. حساب التبعات الإنتاجية لكل سيناريو وتوثيقها في \`productionImpact\`.
5. بناء سجل مخاطر في \`riskRegister\` مع احتمالية وتأثير ومقترحات تخفيف.
6. صياغة التقرير النصي المنسق مع جدول مقارنة واضح وتوصية مبررة.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` وتضمين \`recommendationSummary\` وخطط المتابعة.
8. مراجعة نهائية للتأكد من اتساق السيناريوهات مع وحدات الشخصيات، التوتر، والموضوعات.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **سيناريوهات متشابهة جداً**: أعد ضبط المتغير المحوري لضمان اختلاف حقيقي في النتائج.
- **قيود إنتاجية صارمة**: قدّم سيناريوهات بديلة منخفضة التكلفة ووضح تأثير كل منها.
- **تعارض مع شخصية رئيسية**: استعن بمخرجات \`CHARACTER_DEEP_ANALYZER\` لتعديل المسار بما يحفظ القوس الدرامي.
- **نقص بيانات الجمهور**: استخدم افتراضات موثقة واذكر الحاجة لدراسات إضافية.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من التقرير:**
> \"إذا أجلت ليان البث لحماية عائلتها، يتحول الصراع من مواجهة خارجية مع الشركة إلى اختبار ثقة داخل الفريق. يرتفع التوتر الداخلي بينما ينخفض خطر الانتقام الفوري، ما يمنح مساحة لتعميق الثيمة العائلية.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محلل سيناريوهات ماذا لو حول \"ظلال الميناء\"",
  "summary": "يستكشف التقرير تأثير تأجيل بث الأدلة، تغيير الخائن، ونقل الذروة إلى موقع بديل، مع توصية بالسيناريو الأول لزيادة الصراع الداخلي.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["scenario", "strategy"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Scenario Strategist",
    "collaborators": ["Head Writer"],
    "createdAt": "2025-03-02T16:00:00Z",
    "updatedAt": "2025-03-02T17:25:00Z",
    "analysisWindow": {
      "start": "2025-03-01T18:00:00Z",
      "end": "2025-03-02T15:30:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تتحدى شركة أمنية فاسدة عبر تسريب الأدلة في لحظة حرجة.",
    "referenceWorks": ["The Insider", "Mr. Robot"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تمت مراجعة تعليقات فريق التطوير"]
  },
  "details": [
    {
      "id": "what_if_package",
      "title": "حزمة سيناريوهات ماذا لو",
      "focus": "scenario",
      "expositionMethod": "branching_analysis",
      "summary": "ثلاثة مسارات بديلة توازن بين المخاطر والإمكانات لإعادة تشكيل الذروة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "scenarioPivot": {
        "originalTurningPoint": "ليان تبث الأدلة فوراً",
        "alteredVariable": "تأجيل قرار البث",
        "rationale": "زيادة التوتر الداخلي"
      },
      "alternativeScenarios": [
        {
          "id": "what_if_delay_broadcast",
          "title": "تأجيل البث",
          "logline": "ليان تؤخر الكشف لحماية عائلتها ما يؤدي لانقسام الفريق",
          "causalChain": [
            { "stage": "التغيير", "description": "ليان تخزن الأدلة بدل بثها" },
            { "stage": "نتيجة مباشرة", "description": "الفريق يشكك في القرار" },
            { "stage": "تصعيد", "description": "ماهر يقترب من كشف الخائن" }
          ],
          "impactAssessment": {
            "tension": { "current": 0.78, "projected": 0.85 },
            "themeAlignment": { "freedom_vs_security": "يزداد التعقيد", "family": "تتعزز" },
            "characterArcs": [
              { "character": "ليان", "trajectory": "تتعلم التفويض", "risk": "انقسام الفريق" }
            ],
            "audienceReaction": {
              "targetSegment": "محترفو التقنية",
              "opportunity": "استكشاف أخلاقي أعمق",
              "risk": "إيقاع أبطأ إذا لم يتم ضغط الأحداث"
            }
          },
          "productionImpact": {
            "budgetDelta": "+5%",
            "newLocations": ["منزل العائلة"],
            "complexity": "medium"
          },
          "viabilityScore": 0.76
        },
        {
          "id": "what_if_maher_switches",
          "title": "خيانة ماهر",
          "logline": "ماهر ينقلب على الشركة لينقذ عائلته",
          "causalChain": [
            { "stage": "التغيير", "description": "ماهر يتلقى تهديداً لعائلته" },
            { "stage": "نتيجة مباشرة", "description": "يتعاون سراً مع ليان" },
            { "stage": "تصعيد", "description": "يكشف الفريق عن جاسوس آخر" }
          ],
          "impactAssessment": {
            "tension": { "current": 0.78, "projected": 0.82 },
            "themeAlignment": { "trust": "يتعقد", "sacrifice": "يتعزز" },
            "characterArcs": [
              { "character": "ماهر", "trajectory": "خلاص جزئي", "risk": "فقدان تهديد الخصم" }
            ],
            "audienceReaction": {
              "targetSegment": "الجمهور العام",
              "opportunity": "مفاجأة درامية",
              "risk": "تقليل الشعور بالخطر"
            }
          },
          "productionImpact": {
            "budgetDelta": "+2%",
            "newLocations": [],
            "complexity": "low"
          },
          "viabilityScore": 0.68
        },
        {
          "id": "what_if_port_confrontation",
          "title": "نقل الذروة إلى الميناء",
          "logline": "تختار ليان مواجهة الشركة في الميناء أمام الجمهور",
          "causalChain": [
            { "stage": "التغيير", "description": "البث يحدث في الميناء" },
            { "stage": "نتيجة مباشرة", "description": "احتشاد الجمهور" },
            { "stage": "تصعيد", "description": "القوات الأمنية تتدخل" }
          ],
          "impactAssessment": {
            "tension": { "current": 0.78, "projected": 0.88 },
            "themeAlignment": { "justice": "يتصاعد", "family": "تعرض للخطر" },
            "characterArcs": [
              { "character": "ليان", "trajectory": "قيادة جماهيرية", "risk": "تضحية كبيرة" }
            ],
            "audienceReaction": {
              "targetSegment": "الجمهور العالمي",
              "opportunity": "مشهد بصري ضخم",
              "risk": "تكلفة إنتاج عالية"
            }
          },
          "productionImpact": {
            "budgetDelta": "+15%",
            "newLocations": ["الميناء"],
            "complexity": "high"
          },
          "viabilityScore": 0.61
        }
      ],
      "riskRegister": [
        {
          "scenarioId": "what_if_delay_broadcast",
          "risk": "تمديد الفصل الثالث",
          "probability": 0.6,
          "impact": "medium",
          "mitigation": "ضغط المواجهة في تسلسل مركّز"
        },
        {
          "scenarioId": "what_if_port_confrontation",
          "risk": "تكلفة عالية",
          "probability": 0.7,
          "impact": "high",
          "mitigation": "تصوير داخلي مع مؤثرات رقمية"
        }
      ],
      "recommendationSummary": {
        "preferredScenarioId": "what_if_delay_broadcast",
        "justification": "يرفع التوتر الداخلي ويحافظ على الميزانية",
        "nextValidationStep": "قراءة طاولة للنسخة البديلة"
      }
    }
  ],
  "recommendations": [
    {
      "id": "table_read_alt_scenario",
      "title": "قراءة طاولة للسيناريو المفضل",
      "description": "تنظيم جلسة قراءة لتقييم تأثير تأجيل البث على تفاعل الممثلين.",
      "priority": "high",
      "category": "development",
      "focus": "workshop",
      "estimatedEffortHours": 8,
      "owner": "Head Writer",
      "impact": "التحقق من تماسك السيناريو",
      "dependencies": ["cast_availability"],
      "successCriteria": ["توثيق الملاحظات", "اتخاذ قرار بالمضي أو الإلغاء"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 86,
    "characterDepth": 84,
    "dialogueAuthenticity": 80,
    "pacingControl": 83,
    "thematicResonance": 88,
    "originality": 82,
    "productionFeasibility": 74,
    "audienceAlignment": 85,
    "localizationReadiness": 79,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 90
    },
    "qualitativeNotes": [
      "السيناريو المفضل يضيف صراعاً داخلياً جذاباً",
      "التصعيد في الميناء يحتاج ميزانية إضافية"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "align_with_tension_team",
        "description": "مشاركة منحنيات التوتر المحدثة مع وحدة محسن التوتر.",
        "owner": "Story Supervisor",
        "dueDate": "2025-03-03T14:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["استلام الموافقة", "تحديث لوحة التوتر"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك السيناريوهات مع \`SCENE_GENERATOR\`, \`SCENE_OPTIMIZER\`, و\`TENSION_OPTIMIZER\` لضمان اتساق الإيقاع.
- نسّق مع \`THEMATIC_MINING\` و\`THEMES_MESSAGES_ANALYZER\` لتقييم أثر السيناريوهات على الموضوعات والرسائل.
- أبلغ \`PRODUCIBILITY_ANALYZER\` بالتغييرات الإنتاجية لكل سيناريو لتقدير الجدوى.
- حدّث \`metadata.categories\` و\`recommendationSummary\` ليتم تجميع النتائج في وحدة \`INTEGRATED\`.
`;
