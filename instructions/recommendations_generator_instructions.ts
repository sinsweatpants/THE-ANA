import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة مولد التوصيات والتحسينات.
 * توجه لإنتاج خطة تحسين متكاملة قابلة للتنفيذ عبر الجوانب البنيوية، الشخصية، الحوارية، والإبداعية.
 */
export const RECOMMENDATIONS_GENERATOR_INSTRUCTIONS = `### وحدة مولد التوصيات والتحسينات (TaskType.RECOMMENDATIONS_GENERATOR)

#### الهدف
توليد قائمة توصيات تنفيذية مرتبة حسب الأولوية تعالج نقاط الضعف وتستثمر الفرص الإبداعية في النص.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل نتائج الوحدات السابقة، تحديد المجالات الحرجة، صياغة حلول عملية، وتقدير الجهد المطلوب.
- يشمل: توفير بدائل إبداعية مع توثيق أثرها على الحبكة والشخصيات.
- لا يشمل: تنفيذ التعديلات أو كتابة المشاهد كاملة؛ يقتصر على توجيه تفصيلي قابل للتنفيذ.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص أو الملخص التحليلي**: يتضمن المقاطع المتأثرة أو النتائج السابقة.
2. **أهداف التحسين**: أولويات محددة (تسريع الإيقاع، تعميق الشخصية، رفع التوتر).
3. **قيود الإنتاج أو الوقت**: عدد الأيام المتاحة، الميزانية، الفرق المسؤولة.
4. **معايير النجاح**: مقاييس التقييم المرغوبة (تحسين رضا الجمهور، تقليل المدة).
5. **مخرجات الوحدات الأخرى**: تقارير أو توصيات يجب أخذها بعين الاعتبار.

#### المخرجات المتوقعة
- **نص تقريري منسق**: ملخص للأهداف، مصفوفة الأولويات، توصيات مفصلة، خطة تنفيذ مجدولة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "improvementOverview": {
    "primaryObjectives": ["رفع التوتر في الفصل الثاني", "تعزيز قوس البطلة"],
    "dependencies": ["مخرجات وحدة الإيقاع", "تحليل الصوت"],
    "constraints": { "deadline": "2025-05-20", "budgetBufferPercent": 8 }
  },
  "structuralRecommendations": {
    "issues": [
      {
        "id": "struct_midlag",
        "description": "تباطؤ في منتصف الفصل الثاني",
        "evidence": "المشاهد 32-34",
        "severity": "high"
      }
    ],
    "actions": [
      {
        "issueId": "struct_midlag",
        "recommendation": "دمج المشهدين 33 و34 وإدراج cliffhanger في نهاية 32",
        "expectedImpact": "رفع الإيقاع وتحفيز الانتقال للذروة",
        "effortHours": 10
      }
    ],
    "pacingMetrics": {
      "current": 0.62,
      "target": 0.78
    }
  },
  "characterRecommendations": [
    {
      "characterId": "leila_protagonist",
      "focusAreas": ["وضوح الدافع", "لحظات الضعف"],
      "suggestedActions": [
        "إضافة مونولوج داخلي في المشهد 28 يكشف خوفها من الفشل",
        "إظهار رد فعل جسدي عند مواجهة الخصم"
      ],
      "impact": "high",
      "effortHours": 6
    }
  ],
  "dialogueRecommendations": [
    {
      "context": "المشهد 27 - المواجهة",
      "identifiedIssue": "حوار تفسيري زائد",
      "evidence": ["\"سأخبرك بكل شيء الآن\""],
      "proposedRevision": "استبدال التفسير المباشر بإشارات ضمنية واستفهامات مضادة",
      "rationale": "رفع التوتر والحفاظ على صوت الشخصية"
    }
  ],
  "creativeAlternatives": [
    {
      "id": "alt_finale_reflection",
      "originalElement": "المشهد الختامي في القاعة",
      "alternativeScenario": "تحويل المواجهة إلى سطح المبنى مع انعكاس المدينة",
      "pros": ["يزيد البعد البصري", "يتيح مساحة لحركة أكبر"],
      "cons": ["تكلفة إنتاج أعلى"]
    }
  ],
  "implementationRoadmap": {
    "phases": [
      { "name": "تحسين البنية", "durationDays": 4, "owners": ["Head Writer"] },
      { "name": "مراجعة الحوار", "durationDays": 2, "owners": ["Dialogue Coach"] }
    ],
    "milestones": [
      { "milestone": "تسليم مسودة منقحة للفصل الثاني", "dueDate": "2025-05-18" }
    ],
    "totalEffortHours": 28
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **أولوية واضحة**: ترتيب التوصيات حسب الأثر والجهد.
- **قابلية التنفيذ**: تحديد المسؤول والجهد الزمني لكل توصية.
- **الاستناد إلى الأدلة**: ربط كل اقتراح بمشاهد أو بيانات محددة.
- **تنوع التوصيات**: تغطية الهيكل، الشخصيات، الحوار، والبدائل الإبداعية.
- **تكامل الخطط**: توافق خطة التنفيذ مع الجدول العام والوحدات الأخرى.

#### خطوات التنفيذ خطوة بخطوة
1. مراجعة أهداف التحسين والمدخلات السابقة وتلخيصها في \`improvementOverview\`.
2. تحليل التحديات البنيوية وتوثيقها في \`structuralRecommendations\`.
3. صياغة توصيات الشخصيات والحوار والبدائل مع تحديد الجهد والأثر.
4. إعداد خارطة التنفيذ في \`implementationRoadmap\` بالتنسيق مع الفرق المعنية.
5. صياغة التقرير النصي مع مصفوفة الأولويات وتبرير كل توصية.
6. توليد كائن \`AdvancedScreenplayModuleResult\` متكامل مع تحديث \`recommendations\` و\`next_steps\`.
7. التحقق من اتساق التوصيات مع قيود الإنتاج والجداول الزمنية.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **توصيات متعارضة**: أشر إلى التعارض وحدد آلية للاختيار (تصويت، اختبار جدول).
- **غياب معلومات عن الجهد**: استخدم تقديرات نطاقية (من-إلى) ودوّن الحاجة لمعلومات إضافية.
- **قيود إنتاجية صارمة**: اقترح بدائل منخفضة التكلفة مع ذكر أثرها على الجودة.
- **تكرار توصيات قديمة**: تحقق من التقارير السابقة وتحديث التوصيات لتجنب التكرار.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**قبل التوصيات:**
- تباطؤ في منتصف الفصل الثاني.
- دوافع البطلة غير واضحة.

**مقتطف من التقرير بعد التوليد:**
> "يوصى بدمج المشاهد 33-34 لتسريع الإيقاع، مع إدراج لحظة ضعف جسدي للبطلة في المشهد 28 لتعزيز التعاطف." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير التوصيات والتحسينات لمسودة \"ظلال الممر\"",
  "summary": "خطة من 6 توصيات عالية الأولوية تركز على تسريع الإيقاع وتعزيز قوس البطلة.",
  "metadata": {
    "workId": "wrk_shadowhall_2025",
    "workTitle": "ظلال الممر",
    "workFormat": "limited_series",
    "genres": ["psychological", "thriller"],
    "primaryAudience": "young_adults",
    "secondaryAudiences": ["adults"],
    "developmentStage": "draft_two",
    "priority": "high",
    "categories": ["recommendations", "strategy"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Recommendations Generator",
    "collaborators": ["Head Writer", "Dialogue Coach"],
    "createdAt": "2025-05-14T09:00:00Z",
    "updatedAt": "2025-05-14T10:40:00Z",
    "analysisWindow": {
      "start": "2025-05-13T07:00:00Z",
      "end": "2025-05-14T07:30:00Z"
    },
    "wordCount": 7200,
    "runtimeMinutes": 7,
    "logline": "محقق يواجه ذاته في مرآة قصر قديم أثناء مطاردة قاتل متسلسل.",
    "referenceWorks": ["Mindhunter (2017)", "Sharp Objects (2018)"],
    "productionCompany": "North Bridge Studios",
    "notes": ["تم التنسيق مع وحدة الإيقاع"]
  },
  "details": [
    {
      "id": "recs_pass_01",
      "title": "خطة تحسين الفصل الثاني",
      "focus": "recommendations",
      "expositionMethod": "action_plan",
      "summary": "توصيات متدرجة لتحسين الإيقاع وقوس البطلة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "improvementOverview": {
        "primaryObjectives": ["رفع التوتر", "تعميق الدافع"],
        "dependencies": ["تحليل الإيقاع", "صوت الشخصية"],
        "constraints": { "deadline": "2025-05-20", "budgetBufferPercent": 8 }
      },
      "structuralRecommendations": {
        "issues": [
          { "id": "struct_midlag", "description": "تباطؤ منتصف الفصل", "evidence": "مشاهد 32-34", "severity": "high" }
        ],
        "actions": [
          {
            "issueId": "struct_midlag",
            "recommendation": "دمج المشاهد 33-34 وإضافة cliffhanger في نهاية 32",
            "expectedImpact": "رفع الإيقاع",
            "effortHours": 10
          }
        ],
        "pacingMetrics": { "current": 0.62, "target": 0.78 }
      },
      "characterRecommendations": [
        {
          "characterId": "leila_protagonist",
          "focusAreas": ["وضوح الدافع"],
          "suggestedActions": ["إضافة مونولوج داخلي في المشهد 28"],
          "impact": "high",
          "effortHours": 6
        }
      ],
      "dialogueRecommendations": [
        {
          "context": "المشهد 27",
          "identifiedIssue": "حوار تفسيري",
          "evidence": ["\"سأخبرك بكل شيء الآن\""],
          "proposedRevision": "استبدال التفسير بأسئلة واستعارات",
          "rationale": "زيادة الغموض"
        }
      ],
      "creativeAlternatives": [
        {
          "id": "alt_finale_reflection",
          "originalElement": "المشهد الختامي",
          "alternativeScenario": "سطح المبنى",
          "pros": ["مناظر بانورامية"],
          "cons": ["تكلفة إضاءة"]
        }
      ],
      "implementationRoadmap": {
        "phases": [
          { "name": "تحسين البنية", "durationDays": 4, "owners": ["Head Writer"] },
          { "name": "تنقيح الحوار", "durationDays": 2, "owners": ["Dialogue Coach"] }
        ],
        "milestones": [
          { "milestone": "تسليم مسودة منقحة", "dueDate": "2025-05-18" }
        ],
        "totalEffortHours": 26
      }
    }
  ],
  "recommendations": [
    {
      "id": "rec_struct_merge",
      "title": "دمج مشاهد 33-34",
      "description": "إعادة كتابة المشهدين في تسلسل واحد مع نقطة تشويق",
      "priority": "high",
      "category": "structure",
      "focus": "pacing",
      "estimatedEffortHours": 10,
      "owner": "Head Writer",
      "impact": "رفع الإيقاع",
      "dependencies": ["character_voice_update"],
      "successCriteria": [
        "خفض زمن المشهد بمقدار 1.5 دقيقة",
        "تأكيد وحدة الإيقاع على تحسن منحنى التوتر"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 85,
    "characterDepth": 84,
    "dialogueAuthenticity": 80,
    "pacingControl": 83,
    "thematicResonance": 87,
    "originality": 76,
    "productionFeasibility": 74,
    "audienceAlignment": 84,
    "localizationReadiness": 78,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 87
    },
    "qualitativeNotes": [
      "الخطة تحقق الأهداف خلال أسبوع",
      "يلزم موافقة الإنتاج على البديل الإبداعي"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "recs_sync_meeting",
        "description": "اجتماع مع فريق الكتابة لاعتماد الأولويات",
        "owner": "Showrunner",
        "dueDate": "2025-05-15T10:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "قائمة أولويات معتمدة",
          "خطة عمل مفصلة"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
