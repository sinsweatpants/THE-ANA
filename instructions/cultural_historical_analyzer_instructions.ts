import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محلل السياق الثقافي والتاريخي.
 * تضمن فحص الدقة، الحساسية، والأثر الاجتماعي للأعمال السردية مع توثيق قابل للتكامل.
 */
export const CULTURAL_HISTORICAL_ANALYZER_INSTRUCTIONS = `### وحدة محلل السياق الثقافي والتاريخي (TaskType.CULTURAL_HISTORICAL_ANALYZER)

#### الهدف
تقييم مدى التزام العمل بالسياق التاريخي والثقافي المعلن، ورصد التحيزات أو المعالجات الحساسة، وتقديم توصيات عملية للحفاظ على الأصالة مع احترام الجمهور المعني.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحديد الإطار الزمني والجغرافي، تحليل تمثيل المجموعات الثقافية، التدقيق في التفاصيل التاريخية، ورصد القضايا الحساسة وتقديم خطط معالجة.
- يشمل: مقارنة المحتوى بمراجع موثوقة واقتراح مستشارين ثقافيين أو تاريخيين عند الحاجة.
- لا يشمل: إعادة كتابة النص إبداعياً، إصدار أحكام قانونية نهائية حول حقوق الملكية، أو المصادقة النهائية على المحتوى دون إشراك خبراء بشريين.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص أو السيناريو الكامل**: نسخة قابلة للبحث مع ترقيم صفحات أو طوابع زمنية (PDF، DOCX، نص). 
2. **البيانات المرجعية**: المرحلة التاريخية، الموقع، الخلفية الاجتماعية، اللغة أو اللهجة المتوقعة، والجمهور المستهدف.
3. **مصادر مقارنة**: مراجع تاريخية أو ثقافية موثوقة (كتب، مقالات أكاديمية، روابط موثقة) أو قائمة استشهادات قدمها الفريق.
4. **سياسات الحساسية**: إرشادات الشبكة أو المنصة حول المحتوى الحساس، درجات التصنيف العمري، وحدود الجرأة المقبولة.
5. **طلبات خاصة**: مجالات تركيز محددة (مثلاً تصوير النساء، الشعائر، اللهجات) ومستوى التفصيل المطلوب في التوصيات.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يتضمن ملخصاً تنفيذياً، تحليل الفترة التاريخية، مراجعة العناصر الثقافية، قائمة المخاطر، وتوصيات التعاون مع الخبراء.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "culturalContextMap": {
    "timeline": [
      { "period": "القاهرة 1956", "confidence": 0.78, "evidence": "ذكر العدوان الثلاثي في الصفحة 12" }
    ],
    "geographicSetting": {
      "country": "مصر",
      "city": "القاهرة",
      "neighborhood": "جاردن سيتي",
      "accuracyScore": 0.72
    },
    "socioPoliticalFactors": ["القومية العربية", "تأميم قناة السويس"],
    "primarySources": ["مذكرات خليل عبد الناصر", "أرشيف الأهرام 1956"]
  },
  "representationAudit": {
    "groupsDepicted": [
      {
        "groupName": "النساء العاملات",
        "portrayal": "يُظهرهن النص كموظفات بريد مكافحات",
        "accuracyScore": 0.69,
        "evidence": "المشهد في الصفحة 35"
      }
    ],
    "languageUse": {
      "dialects": ["مصري فصيح"],
      "loanwords": ["بوسطة"],
      "appropriateness": 0.75
    },
    "ritualDepictions": [
      { "name": "احتفال شم النسيم", "authenticity": 0.6, "notes": "يُذكر في الربيع بدلاً من بعد الفصح" }
    ]
  },
  "sensitivityAlerts": [
    {
      "issueId": "sens_displacement",
      "theme": "التهجير القسري",
      "severity": "high",
      "description": "المشهد 42 يختزل تجربة التهجير في نكتة جانبية",
      "recommendedActions": ["إعادة صياغة الحوار باحترام", "استشارة متخصص في تاريخ القناة"]
    }
  ],
  "biasAssessment": {
    "detectedBiases": [
      {
        "biasType": "طبقي",
        "evidence": "السرد يفترض أن جميع سكان الحي أثرياء",
        "impact": "يُهمّش طبقة العمال",
        "mitigation": "إدراج شخصية تمثل الطبقة المتوسطة مع منظور متوازن"
      }
    ],
    "mitigationStrategies": ["إضافة مراجع تاريخية داخل الحوار", "مراجعة الصور الأرشيفية"]
  },
  "authenticityScorecard": {
    "historicalAccuracy": 0.7,
    "culturalAuthenticity": 0.68,
    "consultationStatus": "pending",
    "notes": ["يوصى بمراجعة تفاصيل الزي العسكري", "ضرورة التأكد من تسلسل الأحداث"]
  }
}
\`\`\`

#### معايير الجودة والتقييم
- **التوثيق الدقيق**: كل استنتاج مرتبط بمصدر أو دليل نصي واضح.
- **الإنصاف الثقافي**: تقديم توصيات تقلل التحيز وتزيد التمثيل العادل للمجموعات المعنية.
- **عمق التحليل**: يتناول السياسة، الاقتصاد، الحياة اليومية، والطقوس وليس الأحداث الكبرى فقط.
- **القابلية للتنفيذ**: توصيات واضحة مع أولويات ومستويات خطورة.
- **التكامل مع بقية الوحدات**: توافق البيانات مع وحدات الجمهور، الشبكات الشخصيات، ووحدة الإنتاجية.

#### خطوات التنفيذ خطوة بخطوة
1. تحديد الفترة والموقع بدقة وتعبئة \`culturalContextMap\` مع المصادر الداعمة.
2. مراجعة تمثيل الشخصيات والمجموعات ضمن \`representationAudit\` وتقييم اللغة والرموز.
3. رصد القضايا الحساسة والجدلية وتسجيلها في \`sensitivityAlerts\` مع خطة المعالجة.
4. تحليل التحيزات النظامية وتوثيقها في \`biasAssessment\`.
5. حساب درجات الأصالة في \`authenticityScorecard\` واستنتاج المخاطر الرئيسية.
6. صياغة التقرير النصي مع الملخص التنفيذي والتوصيات الأولوية.
7. تجهيز كائن \`AdvancedScreenplayModuleResult\` مع التأكد من مواءمة الحقول مع الوحدات الأخرى (التعريفات، الأسماء، المراجع).

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **معلومات تاريخية ناقصة**: استخدم أقرب فترة مشابهة مع توثيق مستوى الثقة وتحديد فجوات المعرفة.
- **دمج فانتازيا مع تاريخ**: وضّح الحدود بين الحقيقة والخيال، وقيّم المخاطر على الجمهور المستهدف.
- **اختلاف مصادر متعارضة**: قدم التفسيرات المحتملة وحدد المرجح مع ذكر سبب الترجيح.
- **مصطلحات ثقافية حساسة غير مترجمة**: اقترح هوامش شرح أو مشاهد توضيحية واطلب موافقة فريق الترجمة.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف نصي قبل التحليل:**
> "يحتفل سكان الحي بشم النسيم في مساء ديسمبر بينما تُقرع أجراس الكنيسة المعلقة داخل القلعة." (صفحة 27)

**مقتطف من التقرير بعد التحليل:**
> "يتضمن المشهد خلطاً زمنياً بين احتفال شم النسيم (يُقام في الربيع بعد عيد القيامة) والموسم الشتوي. نوصي بتعديل التاريخ أو استبدال الحدث باحتفال يناسب ديسمبر مثل المولد النبوي." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير السياق الثقافي والتاريخي لعمل \"ظلال القناة\"",
  "summary": "حدد التحليل خللاً في تسلسل الأحداث المرتبط بتأميم قناة السويس وتوصيات لمعالجة القضايا الحساسة حول التهجير.",
  "metadata": {
    "workId": "wrk_canalshadows_2025",
    "workTitle": "ظلال القناة",
    "workFormat": "feature_film",
    "genres": ["historical", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["history_enthusiasts"],
    "developmentStage": "draft_one",
    "priority": "high",
    "categories": ["cultural", "historical"],
    "language": "ar",
    "locale": "ar-EG",
    "analyst": "Cultural Accuracy Engine",
    "collaborators": ["Historical Consultant"],
    "createdAt": "2025-04-18T08:00:00Z",
    "updatedAt": "2025-04-18T10:45:00Z",
    "analysisWindow": {
      "start": "2025-04-17T07:00:00Z",
      "end": "2025-04-18T07:30:00Z"
    },
    "wordCount": 7800,
    "runtimeMinutes": 110,
    "logline": "موظفة تلغراف مصرية تجد نفسها في قلب الصراع السياسي عام 1956.",
    "referenceWorks": ["The Suez War (2005)", "ذكريات من العدوان الثلاثي"],
    "productionCompany": "Nile Wave Productions",
    "notes": ["تم تزويد الوحدة بملاحظات من مستشار ثقافي مستقل."]
  },
  "details": [
    {
      "id": "cultural_review_01",
      "title": "تحليل مشهد الاحتفال الشتوي",
      "focus": "cultural",
      "expositionMethod": "scene_analysis",
      "summary": "المشهد يخلط بين احتفالات موسمية مختلفة ما يهدد مصداقية الفترة.",
      "personas": [],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "culturalContextMap": {
        "timeline": [
          { "period": "ديسمبر 1956", "confidence": 0.74, "evidence": "إشارة إلى خطاب ناصر" }
        ],
        "geographicSetting": {
          "country": "مصر",
          "city": "القاهرة",
          "neighborhood": "القلعة",
          "accuracyScore": 0.7
        },
        "socioPoliticalFactors": ["التعبئة الشعبية", "الرقابة البريطانية"],
        "primarySources": ["الأهرام 1956-12-02"]
      },
      "representationAudit": {
        "groupsDepicted": [
          {
            "groupName": "العائلات النازحة",
            "portrayal": "محور فرعي لخط التهجير",
            "accuracyScore": 0.62,
            "evidence": "حوار الصفحة 27"
          }
        ],
        "languageUse": {
          "dialects": ["عربي مصري"],
          "loanwords": ["ميري"],
          "appropriateness": 0.73
        },
        "ritualDepictions": [
          { "name": "شم النسيم", "authenticity": 0.5, "notes": "الزمن غير متسق" }
        ]
      },
      "sensitivityAlerts": [
        {
          "issueId": "sens_displacement",
          "theme": "التهجير",
          "severity": "high",
          "description": "تحويل معاناة الأسر إلى مزحة على لسان الضابط.",
          "recommendedActions": ["إعادة كتابة الحوار", "استشارة منظمة محلية"]
        }
      ],
      "biasAssessment": {
        "detectedBiases": [
          {
            "biasType": "طبقي",
            "evidence": "السرد يركز على الطبقة الثرية فقط",
            "impact": "تجاهل قصص الطبقة العاملة",
            "mitigation": "إضافة منظور موظفي التلغراف"
          }
        ],
        "mitigationStrategies": ["دعوة مستشار اجتماعي", "دمج شهادات تاريخية"]
      },
      "authenticityScorecard": {
        "historicalAccuracy": 0.68,
        "culturalAuthenticity": 0.64,
        "consultationStatus": "required",
        "notes": ["تعديل الجدول الزمني للاحتفالات", "مراجعة وصف الزي"]
      }
    }
  ],
  "recommendations": [
    {
      "id": "cultural_consultation_plan",
      "title": "تعيين مستشار ثقافي متخصص",
      "description": "التعاقد مع مؤرخ لمراجعة تسلسل الأحداث وطقوس الاحتفالات.",
      "priority": "high",
      "category": "cultural",
      "focus": "authenticity",
      "estimatedEffortHours": 20,
      "owner": "Line Producer",
      "impact": "رفع دقة التمثيل وتفادي الجدل",
      "dependencies": ["budget_approval"],
      "successCriteria": [
        "تقرير استشاري موقّع",
        "دمج التعديلات في المسودة التالية"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 78,
    "characterDepth": 81,
    "dialogueAuthenticity": 75,
    "pacingControl": 73,
    "thematicResonance": 85,
    "originality": 70,
    "productionFeasibility": 68,
    "audienceAlignment": 80,
    "localizationReadiness": 72,
    "confidenceInterval": {
      "lowerBound": 66,
      "upperBound": 84
    },
    "qualitativeNotes": [
      "العمل يحتفظ بصوت تاريخي قوي",
      "يلزم تدقيق إضافي في التفاصيل الشعائرية"
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "cultural_followup_01",
        "description": "مشاركة التقرير مع فريق الكتابة وجدولة ورشة الحساسية",
        "owner": "Story Editor",
        "dueDate": "2025-04-20T09:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "محضر ورشة موثق",
          "قائمة تعديلات متفق عليها"
        ]
      }
    ],
    "mid_term": [],
    "long_term": []
  }
}
\`\`\``;
