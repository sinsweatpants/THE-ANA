import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محسن التوتر الدرامي.
 * تهدف إلى تحليل منحنى التوتر وتقديم تعديلات دقيقة ترفع الإيقاع دون الإخلال بالحبكة.
 */
export const TENSION_OPTIMIZER_INSTRUCTIONS = `### مهمة محسن التوتر الدرامي (TaskType.TENSION_OPTIMIZER)

#### الهدف
تقييم مستويات التوتر عبر المشاهد أو الفصول، تشخيص مناطق الترهل أو الارتفاع المفاجئ، واقتراح تعديلات بنيوية أو حوارية تحافظ على منحنى توتر متماسك ومتدرج.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل البيانات السردية، قياس شدة التوتر، تحديد نقاط الضغط، وصياغة خطة تحسين مفصلة.
- يشمل: اقتراح تعديلات في الحوار أو الإيقاع أو ترتيب المشاهد ضمن النطاق المحدد.
- لا يشمل: إعادة كتابة شاملة للحبكة، تغيير نهاية العمل، أو اتخاذ قرارات إنتاجية منفصلة عن السياق.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **نطاق التحليل**: قائمة بالمشاهد أو الفصول المطلوب تحسينها مع صفحاتها أو طوابعها الزمنية.
2. **بيانات التوتر الحالية**: إن وجدت (رسوم بيانية، درجات من مراجعات سابقة، تعليقات الجمهور).
3. **أهداف الإيقاع**: متوسط التوتر المطلوب (0-1)، قمم ضرورية، أو لحظات يجب تهدئتها.
4. **قيود السرد**: أحداث لا يمكن تغيير ترتيبها، شخصيات يجب الحفاظ على ظهورها في نقاط محددة.
5. **اعتبارات الإنتاج**: حدود الطول، متطلبات التصوير، أو عناصر لا يمكن تعديلها.

#### المخرجات المتوقعة
- **نص تقريري منسق**: أقسام (خريطة التوتر الحالية، النقاط الحرجة، استراتيجية التحسين، توصيات التنفيذ، مؤشرات المتابعة) مع جداول ورسوم نصية.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "tensionDiagnostics": {
    "currentAverage": 0.58,
    "volatility": 0.21,
    "flatZones": [
      { "segment": "الصفحات 40-48", "impact": "انخفاض الإيقاع", "cause": "تكرار حوار توضيحي" }
    ],
    "spikes": [
      { "segment": "المشهد 32", "impact": "قفزة غير مبررة", "cause": "ظهور مفاجئ لمعلومات جديدة دون تمهيد" }
    ]
  },
  "pressurePoints": [
    {
      "id": "pp_midpoint",
      "location": "صفحة 67",
      "type": "character_confrontation",
      "currentIntensity": 0.62,
      "targetIntensity": 0.82,
      "dependencies": ["تعديل حوار ليان", "تسريع كشف ماهر"]
    }
  ],
  "optimizationPlan": {
    "actions": [
      {
        "actionId": "adjust_dialogue_page45",
        "description": "تقليص الشرح وإضافة فعل بصري", 
        "expectedEffect": "رفع التوتر إلى 0.68",
        "effortHours": 6,
        "owner": "Lead Writer"
      },
      {
        "actionId": "insert_micro_conflict",
        "description": "إدراج خلاف قصير بين ليان وشقيقها قبل الذروة",
        "expectedEffect": "زيادة تراكم الضغط العاطفي",
        "effortHours": 4,
        "owner": "Story Editor"
      }
    ],
    "risks": [
      { "risk": "إطالة مدة المشهد 34", "mitigation": "تخفيض وصف الموقع" }
    ]
  },
  "forecastCurve": [
    { "segment": "المشهد 30", "current": 0.55, "projected": 0.63 },
    { "segment": "المشهد 32", "current": 0.82, "projected": 0.74 },
    { "segment": "المشهد 40", "current": 0.48, "projected": 0.7 }
  ],
  "validationChecks": {
    "requiresFollowUp": true,
    "followUpNotes": ["تأكيد مع وحدة الإنتاج على إمكانية إضافة موقع فرعي"],
    "integrationSignals": ["إبلاغ محسن المشاهد بالتعديلات الحوارية"]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **دقة القياس**: استخدام مقاييس واضحة (0-1) مع توثيق مصادر التقييم.
- **فعالية التوصيات**: كل إجراء يحتوي على تأثير متوقع، جهد، ومالك مسؤول.
- **التوازن السردي**: الحفاظ على موجات التوتر مع فترات تنفس محسوبة.
- **الاتساق مع القيود**: الالتزام بالحدود السردية والإنتاجية الموثقة.
- **قابلية المتابعة**: توفير مؤشرات نجاح يمكن للوحدات الأخرى مراقبتها.

#### خطوات التنفيذ خطوة بخطوة
1. تحديد نطاق التحليل وتسجيله في \`metadata\` مع طول كل مشهد.
2. جمع البيانات الحالية للتوتر وتعبئتها في \`tensionDiagnostics\` مع تصنيف المناطق المسطحة والقمم.
3. اختيار نقاط الضغط الحرجة وتوثيقها في \`pressurePoints\` مع القيم الحالية والمستهدفة.
4. تصميم خطة تحسين تفصيلية في \`optimizationPlan\` تشمل الإجراءات والجهات المسؤولة والمخاطر.
5. بناء منحنى توتر متوقع بعد التطبيق وتوثيقه في \`forecastCurve\`.
6. إعداد التقرير النصي المنسق مع جداول مقارنة قبل/بعد وإشارات لمناطق المتابعة.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` وإضافة التوصيات وخطط التنفيذ.
8. مراجعة نهائية للتأكد من تماشي المقترحات مع وحدات الحوار، الإيقاع، والإنتاج.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **غياب بيانات رقمية**: استخدم تقديرات نسبية بناءً على تقييم نقدي، واذكر مستوى الثقة المنخفض.
- **مشاهد قصيرة جداً**: دمجها في مقاطع أطول عند التحليل مع توضيح الدمج.
- **قيود إنتاجية صارمة**: إذا تعذر تطبيق إجراء، قدّم بديلاً منخفض التكلفة أو أوصِ بإحالة إلى وحدة الإنتاج.
- **تعارض مع نبرة العمل**: في حال رفع التوتر يهدد النبرة الأصلية، اقترح خيارات تدريجية مع توضيح الأثر.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من التقرير:**
> \"يُظهر الفصل الثاني انخفاضاً متتالياً في التوتر بين الصفحات 44-50 بسبب حوار تفسيري مطوّل. تقترح الخطة دمج صراع قصير بين ليان وشقيقها لرفع التوتر إلى 0.7 قبل المواجهة مع ماهر.\"

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محسن التوتر الدرامي حول \"ظلال الميناء\"",
  "summary": "تم إعادة توزيع قمم التوتر في الفصل الثاني عبر إدراج صراع فرعي وتقليص الحوارات التفسيرية.",
  "metadata": {
    "workId": "wrk_shadowharbor_2025",
    "workTitle": "ظلال الميناء",
    "workFormat": "feature_film",
    "genres": ["thriller", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["tension", "pacing"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "AI Tension Optimizer",
    "collaborators": ["Story Editor"],
    "createdAt": "2025-03-03T10:00:00Z",
    "updatedAt": "2025-03-03T11:20:00Z",
    "analysisWindow": {
      "start": "2025-03-02T12:00:00Z",
      "end": "2025-03-03T09:30:00Z"
    },
    "wordCount": 20500,
    "runtimeMinutes": 112,
    "logline": "مهندسة نظم تخاطر بعائلتها لكشف فساد شركة أمنية.",
    "referenceWorks": ["Zero Dark Thirty (2012)"],
    "productionCompany": "Horizon Pictures",
    "notes": ["تمت مقارنة منحنى التوتر مع جدول الإيقاع العام"]
  },
  "details": [
    {
      "id": "tension_optimizer_act2",
      "title": "إعادة توزيع التوتر في الفصل الثاني",
      "focus": "tension",
      "expositionMethod": "quantitative_plus_qualitative",
      "summary": "تم رفع الضغط في منتصف الفصل الثاني وإزالة قفزة غير مبررة قبل الذروة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "tensionDiagnostics": {
        "currentAverage": 0.58,
        "volatility": 0.21,
        "flatZones": [
          { "segment": "صفحات 44-50", "impact": "هبوط الإيقاع", "cause": "حوار تفسيري" }
        ],
        "spikes": [
          { "segment": "مشهد 32", "impact": "قفزة مفاجئة", "cause": "كشف معلومات دون تمهيد" }
        ]
      },
      "pressurePoints": [
        {
          "id": "pp_midpoint",
          "location": "صفحة 67",
          "type": "character_confrontation",
          "currentIntensity": 0.62,
          "targetIntensity": 0.82,
          "dependencies": ["تعديل حوار ليان", "إدراج مقاومة من الأخ"]
        }
      ],
      "optimizationPlan": {
        "actions": [
          {
            "actionId": "adjust_dialogue_page45",
            "description": "خفض الشرح وإضافة رد فعل بصري",
            "expectedEffect": "رفع التوتر إلى 0.68",
            "effortHours": 6,
            "owner": "Lead Writer"
          },
          {
            "actionId": "insert_micro_conflict",
            "description": "إدراج خلاف قصير بين ليان وشقيقها",
            "expectedEffect": "زيادة الضغط العاطفي",
            "effortHours": 4,
            "owner": "Story Editor"
          }
        ],
        "risks": [
          { "risk": "تمديد مدة المشهد 34", "mitigation": "حذف وصف غير ضروري" }
        ]
      },
      "forecastCurve": [
        { "segment": "المشهد 30", "current": 0.55, "projected": 0.63 },
        { "segment": "المشهد 32", "current": 0.82, "projected": 0.74 },
        { "segment": "المشهد 40", "current": 0.48, "projected": 0.7 }
      ],
      "validationChecks": {
        "requiresFollowUp": true,
        "followUpNotes": ["التنسيق مع الإنتاج لضبط زمن التصوير"],
        "integrationSignals": ["مزامنة مع وحدة تحسين المشاهد"]
      }
    }
  ],
  "recommendations": [
    {
      "id": "sync_with_scene_optimizer",
      "title": "تعميم خطة التعديلات",
      "description": "إبلاغ وحدة تحسين المشاهد بالتعديلات الحوارية لضمان تنفيذ موحد.",
      "priority": "high",
      "category": "integration",
      "focus": "scene",
      "estimatedEffortHours": 3,
      "owner": "Story Editor",
      "impact": "يحافظ على اتساق الإيقاع عبر الوحدات",
      "dependencies": ["scene_optimizer_update"],
      "successCriteria": ["تحديث المسودة المشتركة", "توثيق التعديلات"]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 86,
    "characterDepth": 80,
    "dialogueAuthenticity": 81,
    "pacingControl": 92,
    "thematicResonance": 84,
    "originality": 76,
    "productionFeasibility": 85,
    "audienceAlignment": 83,
    "localizationReadiness": 79,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 90
    },
    "qualitativeNotes": [
      "رفع التوتر في منتصف الفصل يحسن الانخراط",
      "تحتاج بعض المشاهد الهادئة لإبقاء لحظات تنفس"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "update_tension_dashboard",
        "description": "تحديث لوحة التوتر المشتركة بالقيم المتوقعة.",
        "owner": "Analytics Lead",
        "dueDate": "2025-03-04T09:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": ["نشر الرسم المحدث", "مراجعة المخرج"]
      }
    ],
    "short_term": [],
    "long_term": []
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك منحنيات \`forecastCurve\` مع وحدات \`RHYTHM_MAPPING\` و\`SCENE_OPTIMIZER\` لضمان الاتساق.
- أرسل التعديلات الحوارية المقترحة إلى \`DIALOGUE_ADVANCED_ANALYZER\` و\`VOICE_INTERACTION_ANALYZER\` للتحقق من النبرة.
- نسّق مع \`PRODUCIBILITY_ANALYZER\` حول أي آثار على الجدول أو المواقع.
- حدث \`metadata.categories\` و\`next_steps\` بما يدعم وحدة \`INTEGRATED\` في إعداد لوحة القيادة المشتركة.
`;
