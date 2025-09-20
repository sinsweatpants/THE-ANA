import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة رسم خرائط الإيقاع.
 * توفر إطاراً لتحليل سرعة السرد وتوزيع التوتر عبر المشاهد مع توصيات تحسين.
 */
export const RHYTHM_MAPPING_INSTRUCTIONS = `### مهمة رسم خرائط الإيقاع (TaskType.RHYTHM_MAPPING)

#### الهدف
تحليل نبض العمل الدرامي عبر قياس التوتر والسرعة في كل مقطع، وإنتاج خريطة إيقاعية توضح مناطق التباطؤ والتسارع.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: قراءة المسودة مع تتبع التوتر، بناء مخطط بياني، تحديد النقاط الحرجة، والتوصية بتعديلات زمنية أو هيكلية.
- يشمل: التنسيق مع وحدتي الإيقاع الموسيقي والحوار لتثبيت التعديلات.
- لا يشمل: إعادة كتابة كاملة للمشاهد؛ بل اقتراح تعديلات طولية أو إعادة توزيع أحداث.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص أو المخطط المشهدي**: مع تحديد الصفحات أو الطوابع الزمنية لكل مشهد.
2. **بيانات الطول المستهدف**: دقائق الحلقة أو الفيلم، طول المشاهد المرغوب.
3. **ملاحظات الجمهور أو الشبكة**: تفضيلات حول السرعة أو توزيع التوتر.
4. **تحليلات سابقة**: نتائج وحدات الصراع أو الإيقاع الموسيقي إن وجدت.
5. **قيود إنتاجية**: مشاهد لا يمكن تقصيرها أو أحداث يجب الحفاظ على طولها.

#### المخرجات المتوقعة
- **نص تقريري منسق**: ملخص للإيقاع العام، جدول المشاهد مع درجات التوتر، توصيات تعديل الطول والتوزيع.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "paceOverview": {
    "overallPace": "volatile",
    "actBreakdown": [
      { "act": 1, "avgIntensity": 0.52, "dominantTone": "mystery" },
      { "act": 2, "avgIntensity": 0.68, "dominantTone": "thriller" }
    ],
    "variance": 0.21,
    "peakIntensity": { "location": "صفحة 95", "value": 0.91 }
  },
  "sceneRhythmTable": [
    {
      "sceneId": "sc_12",
      "pageRange": { "start": 45, "end": 48 },
      "intensity": 0.74,
      "tempo": "fast",
      "dominantEmotion": "panic",
      "notes": "مطاردة في القصر"
    }
  ],
  "beatCurve": [
    { "beatIndex": 1, "cumulativeMinutes": 5, "intensity": 0.3, "annotation": "الإعداد" },
    { "beatIndex": 12, "cumulativeMinutes": 52, "intensity": 0.88, "annotation": "المواجهة" }
  ],
  "pacingAlerts": [
    {
      "id": "pace_flat_02",
      "location": "صفحات 60-66",
      "issue": "تراجع التوتر لمدة 6 صفحات",
      "severity": "high",
      "recommendation": "اختزال الحوار أو إدراج حدث مفاجئ"
    }
  ],
  "syncRecommendations": {
    "music": "إضافة طبقات إيقاعية في المشاهد 60-62",
    "editing": "قطع أسرع في المشهد 63",
    "performance": "توجيه الممثلين لرفع الطاقة في المواجهة"
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **دقة القياس**: توثيق القيم بناءً على مشاهد محددة.
- **وضوح الخريطة**: تقديم مخطط أو جدول يسهل قراءته.
- **قابلية التنفيذ**: توصيات قابلة للتطبيق داخل الجدول الزمني والميزانية.
- **تكامل التوصيات**: مزامنة المقترحات مع وحدات الصوت، الصراع، والحوار.
- **التبرير**: ربط كل تنبيه أو توصية بأدلة نصية أو بيانات من المشاهد.

#### خطوات التنفيذ خطوة بخطوة
1. تقييم سرعة الأحداث لكل مشهد وتسجيلها في \`sceneRhythmTable\`.
2. حساب المتوسطات والانحرافات في \`paceOverview\` لتحديد التوزيع العام.
3. بناء مخطط beats في \`beatCurve\` لإظهار تصاعد التوتر.
4. تحديد المناطق الحرجة وإدراجها في \`pacingAlerts\` مع توصيات محددة.
5. صياغة توصيات التزامن في \`syncRecommendations\` بالتنسيق مع الفرق المعنية.
6. إعداد التقرير النصي مع الجداول والرسوم الداعمة.
7. إنشاء كائن \`AdvancedScreenplayModuleResult\` وتحديث \`recommendations\` و\`next_steps\` وفق النتائج.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **مشاهد حوارية طويلة**: اقترح تقسيمات أو دمج حركات جسدية لرفع التوتر.
- **نقص في البيانات الزمنية**: استخدم تقديرات مع ذكر مستوى الثقة واطلب تأكيداً من فريق الإنتاج.
- **مقاطع أكشن متتالية**: راقب خطر الإرهاق واقترح لحظات تنفس محسوبة.
- **تغييرات إيقاعية مفاجئة**: قدم حلولاً تدريجية لإعادة التوازن.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**قبل التحليل:**
- الفصل الثاني يشعر بالركود بين الصفحات 60-66.

**بعد التحليل (مقتطف):**
> "يظهر انخفاض التوتر من 0.58 إلى 0.31 خلال الصفحات 60-66. يوصى بإدراج حدث بصري مفاجئ في الصفحة 63 لتسريع الإيقاع." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير رسم خرائط الإيقاع لمسودة \"ظلال الممر\"",
  "summary": "تم تحديد انخفاض واضح في منتصف الفصل الثاني مع توصيات لإعادة توزيع التوتر عبر خمس مشاهد.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "thriller"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "draft_two",
    "priority": "medium",
    "categories": ["rhythm", "pacing"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Rhythm Mapping Unit",
    "collaborators": ["Editor", "Music Supervisor"],
    "createdAt": "2025-05-13T08:30:00Z",
    "updatedAt": "2025-05-13T10:10:00Z",
    "analysisWindow": {
      "start": "2025-05-12T07:00:00Z",
      "end": "2025-05-13T07:30:00Z"
    },
    "wordCount": 5600,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["Mindhunter (2017)", "The Haunting of Hill House (2018)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["تم استخدام بيانات زمنية تقديرية"]
  },
  "details": [
    {
      "id": "rhythm_map_v1",
      "title": "خريطة الإيقاع للفصل الثاني",
      "focus": "rhythm",
      "expositionMethod": "rhythm_analysis",
      "summary": "خريطة تفصيلية للتوتر مع توصيات تعديل الطول.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "paceOverview": {
        "overallPace": "volatile",
        "actBreakdown": [
          { "act": 1, "avgIntensity": 0.52, "dominantTone": "mystery" },
          { "act": 2, "avgIntensity": 0.69, "dominantTone": "thriller" },
          { "act": 3, "avgIntensity": 0.85, "dominantTone": "confrontation" }
        ],
        "variance": 0.2,
        "peakIntensity": { "location": "صفحة 110", "value": 0.93 }
      },
      "sceneRhythmTable": [
        {
          "sceneId": "sc_12",
          "pageRange": { "start": 45, "end": 48 },
          "intensity": 0.75,
          "tempo": "fast",
          "dominantEmotion": "panic",
          "notes": "مطاردة في القصر"
        },
        {
          "sceneId": "sc_20",
          "pageRange": { "start": 60, "end": 66 },
          "intensity": 0.31,
          "tempo": "slow",
          "dominantEmotion": "contemplation",
          "notes": "حوار طويل بلا تصعيد"
        }
      ],
      "beatCurve": [
        { "beatIndex": 1, "cumulativeMinutes": 5, "intensity": 0.3, "annotation": "الإعداد" },
        { "beatIndex": 10, "cumulativeMinutes": 45, "intensity": 0.5, "annotation": "تصاعد" },
        { "beatIndex": 14, "cumulativeMinutes": 70, "intensity": 0.32, "annotation": "ركود" },
        { "beatIndex": 18, "cumulativeMinutes": 95, "intensity": 0.88, "annotation": "المواجهة" }
      ],
      "pacingAlerts": [
        {
          "id": "pace_flat_02",
          "location": "صفحات 60-66",
          "issue": "انخفاض التوتر",
          "severity": "high",
          "recommendation": "اختزال الحوار وإدراج مفاجأة بصرية"
        }
      ],
      "syncRecommendations": {
        "music": "إدراج مقطع موسيقي نابض في المشهد 60",
        "editing": "اعتماد cuts أقصر في المشهد 63",
        "performance": "تشديد انفعالات الخصم"
      }
    }
  ],
  "recommendations": [
    {
      "id": "rhythm_insert_jolt",
      "title": "إضافة حدث مفاجئ في المشهد 63",
      "description": "إدراج صوت ارتطام أو انطفاء مفاجئ للأنوار لرفع التوتر",
      "priority": "medium",
      "category": "pacing",
      "focus": "intensity",
      "estimatedEffortHours": 4,
      "owner": "Head Writer",
      "impact": "رفع التوتر",
      "dependencies": ["director_approval"],
      "successCriteria": [
        "ارتفاع مؤشر التوتر إلى 0.55",
        "موافقة وحدة الإيقاع الموسيقي"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 84,
    "characterDepth": 82,
    "dialogueAuthenticity": 78,
    "pacingControl": 86,
    "thematicResonance": 85,
    "originality": 75,
    "productionFeasibility": 80,
    "audienceAlignment": 83,
    "localizationReadiness": 77,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 87
    },
    "qualitativeNotes": [
      "المخطط يساعد على ضبط الركود",
      "يلزم اختبار موسيقي للمشهد 63"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "rhythm_sync_music",
        "description": "تنسيق مع المشرف الموسيقي لاعتماد التعديلات",
        "owner": "Editor",
        "dueDate": "2025-05-16T09:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "خطة موسيقية محدثة",
          "تأكيد من وحدة الحوار"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
