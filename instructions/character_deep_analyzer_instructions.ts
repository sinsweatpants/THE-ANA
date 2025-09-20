import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description تعليمات موحّدة لوحدة محلل الشخصيات العميق.
 * تؤطر عملية تفكيك القوس الدرامي للشخصيات وعلاقاتها النفسية والسلوكية.
 */
export const CHARACTER_DEEP_ANALYZER_INSTRUCTIONS = `### وحدة مُحلل الشخصيات العميق (TaskType.CHARACTER_DEEP_ANALYZER)

#### الهدف
إجراء تشريح كامل للشخصيات الرئيسية والثانوية، مع التركيز على دوافعها، أقواس تطورها، شبكات العلاقات، ومستوى التفرد.

#### نطاق المهمة وما لا يدخل في النطاق
- يشمل: تحليل الخلفيات، توثيق التحولات، تقييم الصراعات الداخلية والخارجية، تحديد الثغرات أو التكرار في بناء الشخصيات.
- لا يشمل: إعادة كتابة مشاهد الحوار بالكامل، أو إنشاء شخصيات جديدة غير موجودة في النص الأصلي، أو تعديل أحداث الحبكة خارج توصيات موثقة.

#### المدخلات المطلوبة بدقة (وحدات قياس، أنواع)
1. **النص الكامل أو المختارات**: بصيغة قابلة للبحث مع تحديد صفحات أو أزمنة ظهور كل شخصية.
2. **قائمة الشخصيات المقدمة**: أدوارها (بطلة، خصم، مساندة)، الفئة العمرية، والجنس إن وُجد.
3. **تعليمات خاصة**: أي تركيز مطلوب من أصحاب المصلحة (مثل إبراز شخصية بعينها أو مقارنة مع أعمال أخرى).
4. **بيانات مرجعية**: ملاحظات سابقة عن الشخصيات، نتائج اختبارات جمهور، أو تعليقات من فريق التمثيل.

#### المخرجات المتوقعة
- **نص تقريري منسق**: يشمل ملخصاً تنفيذياً، جداول أو قوائم لأقواس الشخصية، تحليل العلاقات، تقييم التعقيد النفسي، وتوصيات لتحسين الأصالة.
- **مخرجات JSON مطابقة تماماً لـ \`AdvancedScreenplayModuleResult\`**:
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**الحقول الخاصة بقسم \`details\` لهذه الوحدة:**
\`\`\`json
{
  "characterPersonaMatrix": [
    {
      "name": "سمر",
      "classification": "protagonist",
      "screenTimeShare": 0.38,
      "primaryObjective": "إنقاذ والدها من اتهام ظالم",
      "coreTraits": ["شجاعة", "تحليلية"],
      "vulnerabilities": ["الخوف من الفشل", "الضغط العائلي"],
      "introPage": 3,
      "exitPage": 118
    }
  ],
  "arcProgressionTracker": [
    {
      "character": "سمر",
      "arcType": "positive_change",
      "initialState": "محامية مبتدئة تتردد في تحدي المؤسسة",
      "keyBeats": [
        { "page": 15, "turn": "تقرر قبول القضية رغم تحذير شركائها" },
        { "page": 78, "turn": "تواجه عمها المتورط" }
      ],
      "finalState": "تتبنى الشفافية الكاملة وتكسب ثقة الجمهور",
      "growthScores": { "motivationClarity": 0.82, "agency": 0.9, "emotionalAuthenticity": 0.76 }
    }
  ],
  "relationshipTopology": {
    "nodes": [
      { "id": "سمر", "label": "سمر", "type": "protagonist" },
      { "id": "رامي", "label": "رامي", "type": "antagonist" }
    ],
    "edges": [
      {
        "from": "سمر",
        "to": "رامي",
        "relationshipType": "institutional_conflict",
        "evolution": "يتحول من صراع قانوني إلى صراع شخصي",
        "heat": 0.85
      }
    ],
    "networkSummary": "تكشف الشبكة عن اعتماد البطلة على شخصيات ثانوية لكشف الأدلة." 
  },
  "psychologicalDepthProfiles": [
    {
      "character": "سمر",
      "internalConflicts": ["الخوف من خيانة العائلة", "التعارض بين الواجب المهني والروابط العائلية"],
      "copingMechanisms": ["التوثيق الدقيق", "الاستشارة مع المرشد"],
      "complexityScore": 0.79,
      "notes": "تحتاج لحظة انهيار تعيد تشكيل علاقتها بوالدها."
    }
  ],
  "originalitySignals": [
    {
      "character": "رامي",
      "archetypeReference": "corrupt_official",
      "subversionLevel": 0.44,
      "uniqueAngles": ["دوافعه مرتبطة بتهديد خارجي", "يظهر تعاطفاً مع عائلة البطلة"],
      "enhancementIdeas": ["إضافة مشهد يبرز ضغوط رؤسائه", "توضيح تاريخه مع والد سمر"]
    }
  ]
}
\`\`\`

#### معايير الجودة والتقييم
- **شمول التغطية**: يجب تحليل كل شخصية رئيسية وثانوية ذات أثر، مع ربطها بالمشاهد المحورية.
- **عمق الاستنتاج**: إظهار العلاقة بين الدوافع والأفعال والنتائج، وتقدير أثر كل شخصية على الثيمات.
- **الوضوح البنيوي**: تنظيم التقرير في أقسام ثابتة لتسهيل المقارنة مع وحدات أخرى.
- **تناسق الدرجات**: الالتزام بالمدى 0-1 لمقاييس العمق والتعقيد، و0-100 لأي تقييم رقمي إضافي.
- **قابلية التفعيل**: كل توصية متصلة بخطوة محددة في \`next_steps\`.

#### خطوات التنفيذ خطوة بخطوة
1. استخراج قائمة الشخصيات وأول ظهور لها من النص أو البيانات المرفقة.
2. تقييم الهدف، العوائق، والأدوات لكل شخصية رئيسية وتعبئة \`characterPersonaMatrix\`.
3. تتبّع القوس عبر المشاهد، وتحديد نقاط التحول الرئيسية، وتوثيقها في \`arcProgressionTracker\`.
4. رسم شبكة العلاقات وتحليل قوة الروابط والتوترات داخل \`relationshipTopology\`.
5. دراسة الأبعاد النفسية وتحديد الصراعات الداخلية وآليات التكيف في \`psychologicalDepthProfiles\`.
6. مقارنة الشخصيات مع الأنماط السردية المعروفة وتوثيق عناصر التفرد في \`originalitySignals\`.
7. إعداد التقرير النصي، ثم إنشاء JSON كامل، والتأكد من تطابق الأسماء والبيانات عبر جميع الحقول.

#### حالات الحافة والأخطاء الشائعة وكيفية التعامل معها
- **شخصيات تظهر لمشهد واحد**: توثيقها في قائمة منفصلة مع الإشارة إلى تأثيرها المحدود.
- **بيانات متعارضة حول دوافع الشخصية**: اعتماد المشهد الأكثر حداثة زمنياً وتوضيح سبب الترجيح.
- **غياب المشهد الحاسم للقوس**: اقتراح موقع افتراضي وإدراجه كخطوة متابعة في \`next_steps\`.
- **تشابه شخصيات ثانوية**: دمجها تحت تصنيف واحد مع إبراز الفروق القليلة وتقديم توصية لتفريقها.

#### مثال كامل قبل/بعد + مثال JSON فعلي وواقعي
**مقتطف من النص قبل التحليل:**
> "سمر: لن أسمح لهم بإسكات الحقيقة، حتى لو خسرت كل شيء." (صفحة 58)

**مقتطف من التقرير بعد التحليل:**
> "يكشف الحوار عن انتقال سمر من الدفاع الحذر إلى المواجهة المباشرة، ما يؤكد نقطة التحول الثانية في قوسها الإيجابي ويستدعي إبراز ثمن المواجهة العائلية." 

**عينة JSON متكاملة:**
\`\`\`json
{
  "title": "تقرير محلل الشخصيات حول \"قضية الصمت\"",
  "summary": "يُبرز التقرير قوس سمر الإيجابي، هشاشة الخصم رامي، والحاجة إلى توسيع أدوار المساندين لدعم التحول الأخير.",
  "metadata": {
    "workId": "wrk_silencecase_2025",
    "workTitle": "قضية الصمت",
    "workFormat": "feature_film",
    "genres": ["legal", "drama"],
    "primaryAudience": "adults",
    "secondaryAudiences": ["young_adults"],
    "developmentStage": "draft_three",
    "priority": "high",
    "categories": ["character", "analysis"],
    "language": "ar",
    "locale": "ar-LB",
    "analyst": "Character Insight Engine",
    "collaborators": ["Lead Character Editor"],
    "createdAt": "2025-04-05T09:00:00Z",
    "updatedAt": "2025-04-05T12:20:00Z",
    "analysisWindow": {
      "start": "2025-04-02T08:00:00Z",
      "end": "2025-04-05T07:30:00Z"
    },
    "wordCount": 19780,
    "runtimeMinutes": 122,
    "logline": "محامية شابة تواجه شبكة فساد عائلية لإنقاذ والدها من السجن.",
    "referenceWorks": ["Erin Brockovich (2000)", "Official Secrets (2019)"],
    "productionCompany": "Cedars Pictures",
    "notes": ["تم استخدام نسخة ما قبل التصوير للمراجعة."]
  },
  "details": [
    {
      "id": "char_analysis_samar",
      "title": "ملف سمر العاطفي",
      "focus": "character",
      "expositionMethod": "dialogue",
      "summary": "سمر تنتقل من التحفظ إلى المواجهة، مع حاجة إلى إبراز هشاشتها الداخلية.",
      "personas": [
        {
          "name": "سمر",
          "type": "protagonist",
          "goals": ["تبرئة والدها"],
          "transformation": "تتعلم الثقة بقدرتها وتقبل التضحية العائلية",
          "screenTimeShare": 41
        }
      ],
      "insights": [],
      "beats": [],
      "conflicts": [],
      "relationships": [],
      "metrics": [],
      "characterPersonaMatrix": [
        {
          "name": "سمر",
          "classification": "protagonist",
          "screenTimeShare": 0.41,
          "primaryObjective": "تبرئة والدها",
          "coreTraits": ["مصرة", "ذكية"],
          "vulnerabilities": ["الضغط العائلي", "الخوف من الفشل"],
          "introPage": 3,
          "exitPage": 118
        },
        {
          "name": "رامي",
          "classification": "antagonist",
          "screenTimeShare": 0.22,
          "primaryObjective": "حماية الشركة من الفضيحة",
          "coreTraits": ["مهيمن", "براجماتي"],
          "vulnerabilities": ["ملفات تدينه", "ضغوط سياسية"],
          "introPage": 12,
          "exitPage": 115
        }
      ],
      "arcProgressionTracker": [
        {
          "character": "سمر",
          "arcType": "positive_change",
          "initialState": "محامية مترددة",
          "keyBeats": [
            { "page": 18, "turn": "تقبل القضية" },
            { "page": 72, "turn": "تفقد دعم عمها" },
            { "page": 104, "turn": "تواجه رامي أمام المحكمة" }
          ],
          "finalState": "تقود القضية بثقة وتكشف الفساد",
          "growthScores": { "motivationClarity": 0.84, "agency": 0.91, "emotionalAuthenticity": 0.78 }
        }
      ],
      "relationshipTopology": {
        "nodes": [
          { "id": "سمر", "label": "سمر", "type": "protagonist" },
          { "id": "رامي", "label": "رامي", "type": "antagonist" },
          { "id": "ليلى", "label": "ليلى", "type": "support" }
        ],
        "edges": [
          {
            "from": "سمر",
            "to": "رامي",
            "relationshipType": "institutional_conflict",
            "evolution": "ينتقل من صراع مهني إلى تهديد شخصي",
            "heat": 0.87
          },
          {
            "from": "سمر",
            "to": "ليلى",
            "relationshipType": "ally",
            "evolution": "يتطور من دعم حذر إلى تحالف كامل",
            "heat": 0.63
          }
        ],
        "networkSummary": "العلاقات تكشف حاجة لتقوية مساهمة ليلى خلال الذروة." 
      },
      "psychologicalDepthProfiles": [
        {
          "character": "سمر",
          "internalConflicts": ["الخوف من خسارة العائلة", "التوتر بين الواجب المهني والعاطفة"],
          "copingMechanisms": ["توثيق دقيق", "التأمل"],
          "complexityScore": 0.81,
          "notes": "أدرج مشهد تضعف فيه أمام والدها لإبراز هشاشتها."
        }
      ],
      "originalitySignals": [
        {
          "character": "رامي",
          "archetypeReference": "corrupt_official",
          "subversionLevel": 0.46,
          "uniqueAngles": ["يريد حماية عائلته", "يتردد قبل التصعيد"],
          "enhancementIdeas": ["إضافة مواجهة مع رؤسائه", "إظهار دليل على نواياه المترددة"]
        }
      ]
    }
  ],
  "recommendations": [
    {
      "id": "char_add_samar_vulnerability",
      "title": "تعزيز هشاشة سمر",
      "description": "كتابة مشهد قصير قبل الذروة يظهر صراعها العاطفي مع والدها.",
      "priority": "high",
      "category": "character",
      "focus": "character",
      "estimatedEffortHours": 6,
      "owner": "Character Writer",
      "impact": "رفع عمق التعاطف مع البطلة وتبرير قرارها النهائي",
      "dependencies": [],
      "successCriteria": [
        "يتضمن المشهد اعترافاً شخصياً",
        "يحصل على موافقة المخرج في جلسة القراءة"
      ]
    }
  ],
  "quality_metrics": {
    "narrativeCohesion": 80,
    "characterDepth": 88,
    "dialogueAuthenticity": 79,
    "pacingControl": 73,
    "thematicResonance": 82,
    "originality": 77,
    "productionFeasibility": 71,
    "audienceAlignment": 84,
    "localizationReadiness": 75,
    "confidenceInterval": {
      "lowerBound": 72,
      "upperBound": 89
    },
    "qualitativeNotes": [
      "تحتاج ليلى لمشاهد إضافية تدعم تحول سمر.",
      "الخصم رامي يستفيد من تبرير أعمق لضغط المؤسسة." 
    ]
  },
  "next_steps": {
    "immediate": [
      {
        "id": "char_workshop",
        "description": "ورشة كتابة تركز على مشهد سمر ووالدها",
        "owner": "Lead Writer",
        "dueDate": "2025-04-10T10:00:00Z",
        "priority": "high",
        "status": "planned",
        "successCriteria": [
          "تسليم مسودة منقحة",
          "تقييم إيجابي من المنتج"
        ]
      }
    ],
    "upcoming": [
      {
        "id": "char_relationship_pass",
        "description": "مراجعة العلاقات الثانوية لتقوية التحالفات",
        "owner": "Story Editor",
        "dueDate": "2025-04-18T09:00:00Z",
        "priority": "medium",
        "status": "planned",
        "successCriteria": [
          "تحديد مشهدين لإبراز ليلى",
          "تحديث خريطة العلاقات"
        ]
      }
    ],
    "reviewSchedule": [
      {
        "milestone": "مراجعة قوس سمر",
        "date": "2025-04-22T11:30:00Z",
        "focus": "character",
        "notes": "التأكد من دمج مشهد الضعف الجديد." 
      }
    ],
    "communicationPlan": {
      "stakeholders": [
        {
          "name": "مستشار الشخصيات",
          "role": "Character Consultant",
          "channel": "Slack",
          "cadence": "مرتين أسبوعياً"
        }
      ],
      "notes": "يتم مشاركة التحديثات بعد كل جلسة كتابة." 
    }
  }
}
\`\`\`

#### متطلبات التوافق مع بقية الوحدات (تكامل integrated)
- شارك نتائج \`characterPersonaMatrix\` مع وحدة \`Character Voice\` لضمان اتساق النبرة.
- يجب أن تتماشى توصيات الأقواس مع خطة \`Conflict Dynamics\` لضمان عدم تناقض التوتر الدرامي.
- تأكد من مطابقة معرفات الشخصيات مع ما تستخدمه وحدة \`Character Network\` لتفادي التكرار أو التعارض.
`;
