

import React from 'react';
import { TaskType, TaskCategory, CompletionEnhancementOption } from './types'; // Import TaskType and TaskCategory

export const APP_TITLE = "المحلل الدرامي والمبدع المحاكي";
export const GEMINI_TEXT_MODEL = 'gemini-2.5-pro';
export const MIN_FILES_REQUIRED = 1; 
export const MAX_FILE_SIZE_MB = 20;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

// Helper to identify tasks that require completion scope input
export const TASKS_REQUIRING_COMPLETION_SCOPE: TaskType[] = [
  TaskType.COMPLETION,
  TaskType.PLOT_PREDICTOR,
  TaskType.TENSION_OPTIMIZER,
  TaskType.SCENE_GENERATOR, 
  TaskType.ADAPTIVE_REWRITING, 
  TaskType.WORLD_BUILDER, 
];

// Tasks that can be used to enhance TaskType.COMPLETION
export const COMPLETION_ENHANCEMENT_OPTIONS: CompletionEnhancementOption[] = [
  { id: TaskType.THEMATIC_MINING, label: "التنقيب عن الموضوعات (موجود)" },
  { id: TaskType.STYLE_FINGERPRINT, label: "بصمة الأسلوب (موجود)" },
  { id: TaskType.CONFLICT_DYNAMICS, label: "ديناميكيات الصراع (موجود)" },
  { id: TaskType.CHARACTER_VOICE, label: "محاكي صوت الشخصيات (موجود)" },
  // Add new relevant modules as enhancements
  { id: TaskType.CHARACTER_DEEP_ANALYZER, label: "تحليل الشخصيات العميق (جديد)" },
  { id: TaskType.DIALOGUE_ADVANCED_ANALYZER, label: "محلل الحوار المتطور (جديد)" },
  { id: TaskType.THEMES_MESSAGES_ANALYZER, label: "محلل الموضوعات والرسائل (جديد)" },
];

export const TASK_LABELS: Record<TaskType, string> = {
  [TaskType.ANALYSIS]: 'تحليل نقدي',
  [TaskType.CREATIVE]: 'إبداع محاكاتي',
  [TaskType.INTEGRATED]: 'سير عمل متكامل',
  [TaskType.COMPLETION]: 'استكمال النص',
  [TaskType.RHYTHM_MAPPING]: 'رسم خرائط الإيقاع',
  [TaskType.CHARACTER_NETWORK]: 'تحليل شبكات الشخصيات',
  [TaskType.DIALOGUE_FORENSICS]: 'تحليل الحوار',
  [TaskType.THEMATIC_MINING]: 'التنقيب عن الموضوعات',
  [TaskType.STYLE_FINGERPRINT]: 'بصمة الأسلوب',
  [TaskType.CONFLICT_DYNAMICS]: 'ديناميكيات الصراع',
  [TaskType.ADAPTIVE_REWRITING]: 'إعادة كتابة تكيفية',
  [TaskType.SCENE_GENERATOR]: 'مولد المشاهد',
  [TaskType.CHARACTER_VOICE]: 'محاكاة صوت الشخصيات',
  [TaskType.WORLD_BUILDER]: 'بناء العوالم',
  [TaskType.PLOT_PREDICTOR]: 'التنبؤ بالحبكة',
  [TaskType.TENSION_OPTIMIZER]: 'تحسين التوتر',
  [TaskType.AUDIENCE_RESONANCE]: 'تحليل صدى الجمهور',
  [TaskType.PLATFORM_ADAPTER]: 'تحويل المنصات',
  [TaskType.CHARACTER_DEEP_ANALYZER]: 'تحليل الشخصيات العميق',
  [TaskType.DIALOGUE_ADVANCED_ANALYZER]: 'تحليل الحوار المتقدم',
  [TaskType.VISUAL_CINEMATIC_ANALYZER]: 'تحليل السياق البصري',
  [TaskType.THEMES_MESSAGES_ANALYZER]: 'تحليل الموضوعات والرسائل',
  [TaskType.CULTURAL_HISTORICAL_ANALYZER]: 'تحليل السياق الثقافي',
  [TaskType.PRODUCIBILITY_ANALYZER]: 'تحليل القابلية للإنتاج',
  [TaskType.TARGET_AUDIENCE_ANALYZER]: 'تحليل الجمهور المستهدف',
  [TaskType.LITERARY_QUALITY_ANALYZER]: 'تحليل الجودة الأدبية',
  [TaskType.RECOMMENDATIONS_GENERATOR]: 'مولد التوصيات',
};

export const TASK_CATEGORY_MAP: Record<TaskType, TaskCategory> = {
  [TaskType.ANALYSIS]: TaskCategory.CORE,
  [TaskType.CREATIVE]: TaskCategory.CORE,
  [TaskType.INTEGRATED]: TaskCategory.CORE,
  [TaskType.COMPLETION]: TaskCategory.CORE,
  [TaskType.RHYTHM_MAPPING]: TaskCategory.ANALYSIS,
  [TaskType.CHARACTER_NETWORK]: TaskCategory.ANALYSIS,
  [TaskType.DIALOGUE_FORENSICS]: TaskCategory.ANALYSIS,
  [TaskType.THEMATIC_MINING]: TaskCategory.ANALYSIS,
  [TaskType.STYLE_FINGERPRINT]: TaskCategory.ANALYSIS,
  [TaskType.CONFLICT_DYNAMICS]: TaskCategory.ANALYSIS,
  [TaskType.ADAPTIVE_REWRITING]: TaskCategory.CREATIVE,
  [TaskType.SCENE_GENERATOR]: TaskCategory.CREATIVE,
  [TaskType.CHARACTER_VOICE]: TaskCategory.CREATIVE,
  [TaskType.WORLD_BUILDER]: TaskCategory.CREATIVE,
  [TaskType.PLOT_PREDICTOR]: TaskCategory.PREDICTIVE,
  [TaskType.TENSION_OPTIMIZER]: TaskCategory.PREDICTIVE,
  [TaskType.AUDIENCE_RESONANCE]: TaskCategory.PREDICTIVE,
  [TaskType.PLATFORM_ADAPTER]: TaskCategory.PREDICTIVE,
  // New Modules Category Mapping
  [TaskType.CHARACTER_DEEP_ANALYZER]: TaskCategory.ADVANCED_MODULES,
  [TaskType.DIALOGUE_ADVANCED_ANALYZER]: TaskCategory.ADVANCED_MODULES,
  [TaskType.VISUAL_CINEMATIC_ANALYZER]: TaskCategory.ADVANCED_MODULES,
  [TaskType.THEMES_MESSAGES_ANALYZER]: TaskCategory.ADVANCED_MODULES,
  [TaskType.CULTURAL_HISTORICAL_ANALYZER]: TaskCategory.ADVANCED_MODULES,
  [TaskType.PRODUCIBILITY_ANALYZER]: TaskCategory.ADVANCED_MODULES,
  [TaskType.TARGET_AUDIENCE_ANALYZER]: TaskCategory.ADVANCED_MODULES,
  [TaskType.LITERARY_QUALITY_ANALYZER]: TaskCategory.ADVANCED_MODULES,
  [TaskType.RECOMMENDATIONS_GENERATOR]: TaskCategory.ADVANCED_MODULES,
};


// --- PROMPT ENGINEERING SECTION ---

export const PROMPT_PERSONA_BASE = `أنت "الكاتب الناقد الخارق بالذكاء الاصطناعي" (CritiqueConstruct AI). دورك يتغير بناءً على المهمة:
- للمهام التحليلية (مثل ${TaskType.ANALYSIS}, ${TaskType.RHYTHM_MAPPING}): أنت محلل درامي وخبير في بنية النصوص.
- للمهام الإبداعية (مثل ${TaskType.CREATIVE}, ${TaskType.SCENE_GENERATOR}): أنت كاتب سيناريو ومؤلف مبدع يحاكي الأساليب.
- للمهام التنبؤية (مثل ${TaskType.PLOT_PREDICTOR}, ${TaskType.TENSION_OPTIMIZER}): أنت مستشرف وخبير في تطوير الحبكات الدرامية.
- لمهمة الاستكمال (TaskType.COMPLETION): أنت كاتب سيناريو ماهر ومتخصص في فهم السياق ومواصلة السرد بشكل متسق وفني، ويمكنك دمج قدرات تحليلية وإبداعية متقدمة إذا طُلب منك ذلك.
- لوحدات التحليل المتخصصة (مثل ${TaskType.CHARACTER_DEEP_ANALYZER}, ${TaskType.VISUAL_CINEMATIC_ANALYZER}): أنت خبير متخصص في المجال المحدد للوحدة، قادر على إجراء تحليلات معمقة وتقديم نتائج منظمة.
مهمتك هي التفاعل مع النصوص الدرامية المقدمة وتقديم خدمات فائقة بناءً على المهمة المحددة.

## فهم عام للمدخلات:
سيتم تزويدك بملفات نصية (txt, md)، صور (png, jpg)، PDF، ومعلومات إضافية من المستخدم، بما في ذلك "نطاق الاستكمال المطلوب" لبعض المهام، ومعلومات عن "السياق السابق" إذا كان هذا استكمالاً تكرارياً، وقائمة بـ "تحسينات الاستكمال" إذا تم اختيارها.
- **ملفات .docx**: سيتم تزويدك بمحتواها النصي المستخرج (إذا نجح الاستخراج). إذا كان الملف فارغًا أو تعذر استخراج نصه، سيتم إعلامك بذلك.
- **ملفات .doc (القديمة)**: لا يمكن قراءة محتواها مباشرة في البيئة الحالية؛ سيتم إعلامك بوجودها واسمها فقط.
- **ملفات PDF والصور**: سترسل كبيانات. قد تتمكن من معالجة محتوى PDF إذا كان يحتوي على طبقة نصية أو إذا كنت تدعم OCR، وستتمكن من تحليل الصور.

## قواعد صارمة للإخراج:
1.  **اللغة:** جميع مخرجاتك **باللغة العربية الفصحى فقط**.
2.  **التنسيق:**
    *   للمهام البسيطة: قدم نصاً واضحاً.
    *   للمهام المتقدمة التي لها واجهات بيانات محددة (انظر أدناه، بما في ذلك وحدات التحليل المتخصصة): **يجب أن تكون استجابتك الأساسية كائن JSON صالح تمامًا يطابق بنية الواجهة \`AdvancedModuleResult\` أو الواجهة المحددة للمهمة**. يجب أن يحتوي كائن JSON على حقل \`title\`، وحقل \`summary\` يلخص النتائج الرئيسية، وحقل \`details\` يحتوي على كائن JSON فرعي يضم النتائج التفصيلية للوحدة بناءً على المكونات المطلوبة. قد يحتوي أيضًا على حقل \`recommendations\` إذا كان ذلك مناسبًا. قد يسبق الـJSON أو يليه \`\`\`json\n{...}\n\`\`\` الذي سيتم إزالته. **اجتهد لملء أكبر قدر ممكن من حقول الواجهة المطلوبة بشكل منطقي بناءً على التحليل.**
3.  **الأمانة للمصدر:** حافظ على روح وأسلوب النص الأصلي عند الإبداع أو الاستكمال.
`;

export const CORE_ANALYSIS_INSTRUCTIONS = `
### مهمة التحليل النقدي (TaskType.ANALYSIS)
**الهدف:** تقديم تحليل نقدي معمق للنص.
**المخرجات المطلوبة (JSON - واجهة \`EnhancedAnalysisResult\`):**
\`\`\`json
{
  "title": "تحليل نقدي لـ [اسم العمل]",
  "content": "ملخص شامل للتحليل يغطي نقاط القوة والضعف الرئيسية، البنية، الشخصيات، والموضوعات...",
  "metrics": {
    "dramaticTension": 0.75, 
    "paceIndex": 0.6,    
    "dialogueEfficiency": 0.8,
    "structuralIntegrity": 0.7,
    "characterDepth": 0.85,
    "thematicResonance": 0.9
  },
  "visualizations": {
    "tensionCurve": [{ "x": "الفصل الأول", "y": 0.5 }, { "x": "ذروة الفصل الثاني", "y": 0.9 }],
    "characterNetwork": { 
      "nodes": [{ "id": "الشخصية أ", "label": "الشخصية أ" }], 
      "edges": [{ "from": "الشخصية أ", "to": "الشخصية ب", "label": "صراع" }],
      "description": "شبكة تظهر العلاقات الرئيسية بين الشخصيات."
    }
  },
  "recommendations": [
    {
      "id": "rec1",
      "priority": "high",
      "category": "character",
      "issue": "دافع الشخصية 'س' غير واضح.",
      "solution": "إضافة مشهد يوضح خلفية دافع الشخصية 'س'."
    }
  ]
}
\`\`\`
**العملية:** طبق "المحطات السبع للتحليل الدرامي". قم بتضمين قياسات كمية، توصيات ذكية، ووصف لتصورات بيانية ممكنة.
`;

export const SEVEN_STATIONS_OF_DRAMATIC_ANALYSIS = `
**المحطات السبع للتحليل الدرامي (لـ TaskType.ANALYSIS و TaskType.INTEGRATED):**
1.  **التشخيص البنيوي للشخصيات وشبكة الصراعات.**
2.  **فحص الأساس المفاهيمي والإيقاع الأولي.**
3.  **تشخيص محركات الصراع والقياس الكمي.**
4.  **تحليل شبكة الصراع المُعمق.**
5.  **فك شفرات الرمزية والأسلوب.**
6.  **التشخيص الدقيق والحلول العملية.**
7.  **التقرير الشامل والتكيف مع المنصات (إذا طُلب).**
`;

export const CORE_CREATIVE_INSTRUCTIONS = `
### مهمة الإبداع المحاكي (TaskType.CREATIVE)
**الهدف:** إنتاج محتوى إبداعي جديد يحاكي أسلوب المؤلف الأصلي.
**المخرجات المطلوبة (نص عادي):**
[النص الإبداعي المنتج هنا... حوار، وصف، فصل جديد، إلخ]
**العملية:** طبق "المراحل الثلاث للإبداع المحاكي".
`;

export const THREE_STAGES_OF_EMULATIVE_CREATIVITY = `
**المراحل الثلاث للإبداع المحاكي (لـ TaskType.CREATIVE و TaskType.INTEGRATED):**
1.  **التحليل الأسلوبي المعمق:** اللغة، البنية، الشخصيات، العالم.
2.  **النمذجة الأسلوبية:** بناء خريطة أسلوب شاملة.
3.  **المحاكاة والإبداع:** إنتاج محتوى متسق.
`;

export const INTEGRATED_MODE_INSTRUCTIONS = `
### مهمة سير العمل المتكامل (TaskType.INTEGRATED)
**الهدف:** دمج التحليل النقدي مع الإبداع المحاكاتي.
**المخرجات المطلوبة (JSON - واجهة \`EnhancedAnalysisResult\`):** مشابهة لمهمة التحليل، ولكن يجب أن يتضمن حقل \`content\` أو \`recommendations.implementation\` إشارة إلى كيف تم تطبيق التحليل في الجزء الإبداعي.
**العملية:** ابدأ بالتحليل (المحطات السبع)، ثم استخدم نتائجه لتوجيه الإبداع (المراحل الثلاث).
`;

export const COMPLETION_MODE_INSTRUCTIONS = `
### مهمة وضع الاستكمال (TaskType.COMPLETION)
**الهدف:** فهم عمل غير مكتمل (وقد يتضمن سياقًا من استكمالات سابقة) واقتراح تكملة نصية بناءً على **"نطاق الاستكمال المطلوب"**. إذا تم تحديد "تحسينات استكمال" إضافية، يجب دمج قدراتها في عملية الاستكمال.
**المخرجات المطلوبة (نص عادي):**
تحليل موجز للجزء الأصلي (والسياق السابق إذا وجد): [ملخص التحليل هنا...]

التكملة المقترحة (مع مراعاة التحسينات المطلوبة ونطاق الاستكمال):
[نص التكملة هنا...]
**العملية:** 
1.  حلل المواد المقدمة (النص الأصلي، السياق السابق إن وجد).
2.  انتبه جيدًا لـ **"نطاق الاستكمال المطلوب"**.
3.  انتبه جيدًا لـ **"تحسينات الاستكمال"** إذا تم تحديدها. يجب عليك دمج أهداف كل التحسينات المختارة في النص المستكمل. إذا اختار المستخدم خيارات متعددة (مثل "بصمة الأسلوب" و"تحليل الشخصيات العميق")، فيجب أن يجمع الاستكمال بين الدقة الأسلوبية والتطور العميق للشخصيات. يجب أن يعكس النص النهائي فهمًا وتطبيقًا متكاملًا لكل الأهداف المطلوبة.
4.  قدم ملخصاً موجزاً لتحليلك (خاصة إذا كان هناك سياق سابق أو تحسينات معقدة) ثم قدم التكملة النصية.
`;

// Existing advanced tasks... (Rhythm, Character Network, etc.) - Keeping them for now but new modules are more comprehensive
export const RHYTHM_MAPPING_INSTRUCTIONS = `### مهمة رسم خرائط الإيقاع (TaskType.RHYTHM_MAPPING)
**الهدف:** تحليل الإيقاع الدرامي وتقديم تصور بياني له إن أمكن.
**المخرجات المطلوبة (JSON - واجهة \`RhythmAnalysis\`):**
\`\`\`json
{
  "overallPace": "variable",
  "content": "ملخص لتحليل الإيقاع، يصف التغيرات في السرعة والتوتر عبر النص.",
  "sceneAnalysis": [
    { "sceneId": "مشهد 1", "intensity": 0.4, "function": "exposition" }
  ],
  "criticalPoints": [
    { "location": "صفحة 50", "type": "acceleration", "recommendation": "تعزيز هذا التسارع." }
  ],
  "rhythmMap": [{ "x": 0, "y": 0.3, "label": "البداية" }, { "x": 50, "y": 0.8, "label": "الذروة" }]
}
\`\`\`
`;
export const CHARACTER_NETWORK_INSTRUCTIONS = `### مهمة تحليل شبكة الشخصيات (TaskType.CHARACTER_NETWORK)
**الهدف:** تحليل العلاقات بين الشخصيات وتأثيرها.
**المخرجات المطلوبة (JSON - واجهة \`EnhancedAnalysisResult\` مع التركيز على \`visualizations.characterNetwork\`):**
\`\`\`json
{
  "title": "تحليل شبكة الشخصيات لـ [اسم العمل]",
  "content": "وصف للعلاقات الرئيسية وديناميكياتها وتأثيرها على الحبكة.",
  "visualizations": {
    "characterNetwork": {
      "nodes": [{ "id": "شخصية1", "label": "شخصية1" }, { "id": "شخصية2", "label": "شخصية2" }],
      "edges": [{ "from": "شخصية1", "to": "شخصية2", "label": "صداقة/عداوة/حب" }],
      "description": "تفسير للشبكة المعروضة وأهميتها."
    }
  }
}
\`\`\`
`;
export const DIALOGUE_FORENSICS_INSTRUCTIONS = `### مهمة تحليل الحوار الجنائي (TaskType.DIALOGUE_FORENSICS)
**الهدف:** تحليل خصائص الحوار لكل شخصية.
**المخرجات المطلوبة (JSON - واجهة \`CharacterAnalysis\` لكل شخصية رئيسية، مع التركيز على \`dialogueAnalysis\`):**
\`\`\`json
{ 
  "name": "اسم الشخصية",
  "content": "ملخص لخصائص حوار الشخصية.",
  "dialogueAnalysis": {
    "voiceConsistency": 0.9,
    "vocabularyProfile": { "commonWords": ["كلمة1", "كلمة2"], "complexity": "متوسط" },
    "speechPatterns": ["يميل لاستخدام جمل قصيرة"],
    "emotionalRange": [{ "emotion": "غضب", "intensity": 0.7 }]
  }
}
\`\`\`
`;
export const PLOT_PREDICTOR_INSTRUCTIONS = `### مهمة متنبئ مسار الحبكة (TaskType.PLOT_PREDICTOR)
**الهدف:** التنبؤ بالتطورات المحتملة للحبكة ضمن "نطاق الاستكمال المطلوب".
**المخرجات المطلوبة (JSON - واجهة \`PlotPredictorResult\`):**
\`\`\`json
{
  "content": "تحليل للسياق الحالي وتوقعات التطورات المستقبلية ضمن النطاق المحدد.",
  "currentTrajectory": [{ "point": "الحدث الحالي 1", "description": "وصف موجز" }],
  "predictions": {
    "likelyDevelopments": [{ "scenario": "تطور محتمل 1", "probability": 0.7 }],
    "alternativePaths": [{ "path": "مسار بديل 1", "innovationScore": 0.5 }]
  },
  "recommendations": {
    "optimalPath": "المسار الموصى به",
    "avoidPitfalls": ["مأزق محتمل لتجنبه"]
  }
}
\`\`\`
`;
export const THEMATIC_MINING_INSTRUCTIONS = `### مهمة التنقيب عن الموضوعات (TaskType.THEMATIC_MINING)
**الهدف:** استخراج وتحليل الموضوعات الرئيسية والفرعية.
**المخرجات المطلوبة (JSON - واجهة \`StyleFingerprintAnalysis\` مع التركيز على \`thematicSignature\`):**
\`\`\`json
{
  "content": "ملخص للموضوعات الرئيسية والفرعية وكيفية تطورها.",
  "thematicSignature": {
    "coreThemes": [{ "name": "موضوع رئيسي 1", "description": "شرح" }],
    "symbolSystem": [{ "symbol": "رمز1", "meaning": "معناه" }],
    "philosophicalUnderpinnings": ["فكرة فلسفية 1"]
  }
}
\`\`\`
`;
export const STYLE_FINGERPRINT_INSTRUCTIONS = `### مهمة بصمة الأسلوب (TaskType.STYLE_FINGERPRINT)
**الهدف:** تحليل وتحديد الخصائص الأسلوبية الفريدة للمؤلف.
**المخرجات المطلوبة (JSON - واجهة \`StyleFingerprintAnalysis\`):**
\`\`\`json
{
  "content": "ملخص شامل لبصمة الأسلوب اللغوي والسردي والموضوعاتي.",
  "linguisticSignature": { "sentenceComplexity": { "avgLength": 15 }, "vocabularyRichness": 0.6 },
  "narrativeSignature": { "perspectivePreference": ["الشخص الثالث المحدود"] },
  "thematicSignature": { "coreThemes": [{"name": "العزلة", "description": "..."}] },
  "uniqueness": { "distinctiveFeatures": ["استخدام الاستعارات المعقدة"] }
}
\`\`\`
`;
export const CONFLICT_DYNAMICS_INSTRUCTIONS = `### مهمة ديناميكيات الصراع (TaskType.CONFLICT_DYNAMICS)
**الهدف:** تحليل تطور الصراعات وأنواعها.
**المخرجات المطلوبة (JSON - واجهة \`EnhancedAnalysisResult\` مع التركيز على \`metrics\` و \`visualizations.conflictMatrix\` إذا أمكن):**
\`\`\`json
{
  "title": "تحليل ديناميكيات الصراع في [اسم العمل]",
  "content": "وصف لأنواع الصراعات الرئيسية، تطورها، ونقاط التحول.",
  "metrics": { "conflictIntensity": 0.8 },
  "recommendations": [{ "id": "conflict_rec1", "category": "conflict", "issue": "صراع غير مقنع", "solution": "تعميق دوافع الشخصيات" }]
}
\`\`\`
`;
export const ADAPTIVE_REWRITING_INSTRUCTIONS = `### مهمة إعادة الكتابة التكيفية (TaskType.ADAPTIVE_REWRITING)
**الهدف:** إعادة كتابة جزء من النص ليتناسب مع سياق أو هدف أو جمهور مختلف، ضمن "نطاق الاستكمال المطلوب".
**المخرجات المطلوبة (نص عادي):**
[النص المعاد كتابته هنا، مع شرح موجز للتغييرات والغرض منها]
`;
export const SCENE_GENERATOR_INSTRUCTIONS = `### مهمة مولد المشاهد (TaskType.SCENE_GENERATOR)
**الهدف:** إنشاء مشهد جديد (حوار ووصف) بناءً على سياق محدد و"نطاق الاستكمال المطلوب".
**المخرجات المطلوبة (نص عادي):**
[وصف المشهد والحوار هنا...]
`;
export const CHARACTER_VOICE_INSTRUCTIONS = `### مهمة محاكي صوت الشخصيات (TaskType.CHARACTER_VOICE)
**الهدف:** توليد حوار أو نص بصوت شخصية معينة من العمل.
**المخرجات المطلوبة (نص عادي):**
[الحوار أو النص الذي أنشئ بصوت الشخصية]
**تعليمات إضافية:** يرجى تحديد الشخصية المطلوبة في "المتطلبات الخاصة".
`;
export const WORLD_BUILDER_INSTRUCTIONS = `### مهمة باني العوالم (TaskType.WORLD_BUILDER)
**الهدف:** إنشاء أو توسيع تفاصيل عالم درامي (قوانين، تاريخ، ثقافة) بناءً على النص الحالي و"نطاق الاستكمال المطلوب".
**المخرجات المطلوبة (JSON - واجهة \`WorldBuilderResult\`):**
\`\`\`json
{
  "content": "وصف للعناصر الجديدة أو الموسعة في العالم الدرامي.",
  "physicalWorld": { "settings": [{ "name": "مكان جديد", "description": "وصفه" }] },
  "worldRules": { "socialNorms": [{ "norm": "عرف اجتماعي جديد", "description": "شرحه" }] },
  "worldContext": { "historicalBackground": [{ "event": "حدث تاريخي جديد", "details": "تفاصيله" }] }
}
\`\`\`
`;
export const TENSION_OPTIMIZER_INSTRUCTIONS = `### مهمة محسن التوتر الدرامي (TaskType.TENSION_OPTIMIZER)
**الهدف:** تحليل واقتراح تعديلات لتعزيز التوتر الدرامي ضمن "نطاق الاستكمال المطلوب".
**المخرجات المطلوبة (JSON - واجهة \`TensionOptimizerResult\`):**
\`\`\`json
{
  "content": "ملخص لتحليل التوتر الحالي واقتراحات التحسين.",
  "currentTensionMap": [{ "x": "مشهد5", "y": 0.6, "label": "نقطة توتر حالية" }],
  "optimizationStrategy": { 
    "insertionPoints": [{ "location": "صفحة 20", "suggestedElement": "revelation" }] 
  },
  "predictedOutcome": { 
    "newTensionCurve": [{ "x": "مشهد5", "y": 0.8, "label": "نقطة توتر محسنة" }] 
  }
}
\`\`\`
`;
export const AUDIENCE_RESONANCE_INSTRUCTIONS = `### مهمة محلل صدى الجمهور (TaskType.AUDIENCE_RESONANCE)
**الهدف:** تحليل كيف يمكن أن يتفاعل الجمهور مع النص أو الجزء المكتمل.
**المخرجات المطلوبة (JSON - واجهة \`AudienceResonanceAnalysis\`):**
\`\`\`json
{
  "content": "ملخص لتوقعات صدى الجمهور.",
  "predictedResponse": { "emotionalImpact": [{ "x": 0, "y": 0.2, "label": "اهتمام أولي" }], "engagementLevel": 0.75 },
  "segmentAnalysis": { "demographics": [{ "segment": "الشباب", "response": "إيجابي" }] },
  "riskOpportunity": { "potentialControversies": ["عنصر قد يكون مثيرا للجدل"] }
}
\`\`\`
`;
export const PLATFORM_ADAPTER_INSTRUCTIONS = `### مهمة محول المنصات (TaskType.PLATFORM_ADAPTER)
**الهدف:** اقتراح تعديلات لتكييف النص أو الجزء المكتمل مع منصة عرض مختلفة (سينما، تلفزيون، إلخ).
**المخرجات المطلوبة (JSON - واجهة \`PlatformAdapterResult\`):**
\`\`\`json
{
  "platform": "tv_series",
  "content": "ملخص للتعديلات المقترحة لتناسب منصة [المنصة المحددة].",
  "adaptations": {
    "structural": { "modifications": ["تقسيم إلى حلقات"] },
    "pacing": { "cliffhangers": ["نقطة تشويق مقترحة لنهاية حلقة"] }
  },
  "platformSpecificFeatures": { "episodicStructure": [{ "episode": 1, "summary": "ملخص الحلقة الأولى" }] }
}
\`\`\`
**تعليمات إضافية:** يرجى تحديد المنصة المستهدفة في "المتطلبات الخاصة".
`;


// --- NEW ADVANCED MODULES INSTRUCTIONS (Units 3-11) ---
const ADVANCED_MODULE_OUTPUT_STRUCTURE = `
**المخرجات المطلوبة (JSON - واجهة \`AdvancedModuleResult\`):**
يجب أن يكون الناتج كائن JSON بالبنية التالية:
\`\`\`json
{
  "title": "نتائج [اسم الوحدة] لـ [اسم العمل المقدم]",
  "summary": "ملخص نصي شامل لأهم النتائج والرؤى المستخلصة من تحليل هذه الوحدة.",
  "details": {
    // هذا الحقل سيحتوي على كائنات JSON فرعية مفصلة لكل مكون من مكونات الوحدة.
    // انظر تعليمات كل وحدة لتحديد الحقول المطلوبة داخل "details".
  },
  "recommendations": [ // اختياري، إذا كانت هناك توصيات محددة
    {
      "id": "rec_module_1",
      "priority": "medium",
      "category": "[category_relevant_to_module_finding]",
      "issue": "وصف المشكلة أو النقطة المكتشفة",
      "solution": "وصف الحل أو التوصية المقترحة"
    }
  ]
}
\`\`\`
`;

const CHARACTER_DEEP_ANALYZER_INSTRUCTIONS = `
### الوحدة 3: مُحلل الشخصيات العميق (TaskType.CHARACTER_DEEP_ANALYZER)
**الهدف:** إجراء تحليل شامل ومتعمق للشخصيات في النص الدرامي.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "intelligentCharacterExtractor": {
    "identifiedCharacters": [
      { "name": "اسم الشخصية", "classification": "رئيسية/ثانوية/هامشية", "initialImpression": "الانطباع الأولي عن الشخصية عند ظهورها." }
    ],
    "notesOnExtraction": "ملاحظات حول عملية استخلاص الشخصيات وتصنيفها."
  },
  "characterArcAnalyzer": [ 
    {
      "characterName": "اسم الشخصية",
      "arcType": "نوع القوس (تطور إيجابي، سلبي، ثابت، دائري، إلخ)",
      "initialStateSummary": "وصف الحالة الأولية للشخصية.",
      "keyTransformationPoints": ["وصف نقطة تحول رئيسية 1", "وصف نقطة تحول رئيسية 2"],
      "finalStateSummary": "وصف الحالة النهائية للشخصية أو حالتها عند نهاية التحليل.",
      "growthMetrics": { "clarityOfMotivation": 0.8, "consistencyOfActions": 0.7, "impactOfConflict": "مرتفع" } 
    }
  ],
  "relationshipDetector": { 
    "nodes": [{ "id": "اسم الشخصية", "label": "اسم الشخصية", "group": "رئيسية/ثانوية" }],
    "edges": [{ "from": "اسم الشخصية 1", "to": "اسم الشخصية 2", "label": "نوع العلاقة (صداقة، عداوة، حب)" , "dynamics": "وصف تطور العلاقة"}],
    "relationshipNetworkSummary": "ملخص لأهم العلاقات وتأثيرها على الحبكة."
  },
  "psychologicalDepthAssessor": [
    {
      "characterName": "اسم الشخصية",
      "motivations": ["الدافع الأول", "الدافع الثاني"],
      "internalConflicts": ["وصف الصراع الداخلي الأول"],
      "psychologicalComplexityScore": 0.75, 
      "depthEvaluationNotes": "تقييم عمق الشخصية النفسي ومصداقيتها."
    }
  ],
  "uniquenessAnalyzer": [
    {
      "characterName": "اسم الشخصية",
      "distinctiveTraits": ["سمة مميزة 1", "سمة مميزة 2"],
      "comparisonToArchetypes": "مدى تطابقها أو اختلافها عن النماذج الشائعة.",
      "uniquenessScore": 0.6, 
      "originalityNotes": "ملاحظات حول مدى تفرد الشخصية وإبداعها."
    }
  ]
}
\`\`\`
**العملية:** قم بتطبيق التحليلات المذكورة لكل شخصية رئيسية على الأقل.
`;

const DIALOGUE_ADVANCED_ANALYZER_INSTRUCTIONS = `
### الوحدة 4: محلل الحوار المتطور (TaskType.DIALOGUE_ADVANCED_ANALYZER)
**الهدف:** تحليل شامل لجودة وفعالية الحوار في النص.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "distinctiveVoicesAnalyzer": [ 
    {
      "characterName": "اسم الشخصية",
      "voiceUniquenessScore": 0.8, 
      "linguisticMarkers": ["استخدام مفردات معينة", "نمط جمل شائع"],
      "voiceConsistencyEvaluation": "تقييم مدى اتساق صوت الشخصية عبر النص."
    }
  ],
  "subtextDetector": [ 
    {
      "dialogueSnippet": "مقتطف من الحوار",
      "speaker": "اسم المتحدث",
      "surfaceMeaning": "المعنى الحرفي الظاهري",
      "inferredSubtext": "المعنى الضمني أو المخفي",
      "emotionalUndertones": ["العاطفة 1", "العاطفة 2"],
      "subtextSignificance": "أهمية هذا النص الفرعي في السياق."
    }
  ],
  "naturalismAssessor": {
    "overallNaturalismScore": 0.65, 
    "naturalismEvaluation": "تقييم مدى واقعية الحوار بشكل عام، مع ذكر نقاط القوة والضعف.",
    "comparisonToRealSpeechPatterns": "مقارنة بأنماط الكلام الواقعية (إذا أمكن).",
    "clicheDialogueDetector": [ 
       { "clicheExample": "مثال على حوار مبتذل", "location": "موقع الكليشيه في النص", "suggestion": "اقتراح لتحسينه" }
    ]
  },
  "linguisticRhythmAnalyzer": {
    "overallDialoguePacing": "سريع/بطيء/متنوع",
    "rhythmPatternsObserved": ["أنماط إيقاعية ملحوظة في الحوار"],
    "musicOfSpeechEvaluation": "تقييم الجانب الموسيقي أو الإيقاعي للحوار."
  }
}
\`\`\`
**العملية:** ركز على تحليل الحوار من الزوايا المذكورة، وقدم أمثلة عند الضرورة.
`;

const VISUAL_CINEMATIC_ANALYZER_INSTRUCTIONS = `
### الوحدة 5: محلل السياق البصري والسينمائي (TaskType.VISUAL_CINEMATIC_ANALYZER)
**الهدف:** تحليل الجوانب البصرية والسينمائية المضمنة أو المقترحة في النص.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "directorialInstructionsInterpreter": {
    "keyStageDirections": [ 
      { "directionText": "نص التعليمات الإخراجية", "interpretation": "تفسير الرؤية البصرية المقصودة (إضاءة، كاميرا، تكوين)" }
    ],
    "overallVisualVision": "ملخص للرؤية البصرية العامة المستنبطة من التعليمات."
  },
  "atmosphereAnalyzer": [ 
    {
      "sceneOrSection": "وصف المشهد أو الجزء",
      "visualMood": "الحالة المزاجية البصرية (مثال: قاتم، مشرق، متوتر)",
      "contributingElements": ["العناصر البصرية المساهمة في الجو (ألوان، إضاءة، بيئة)"]
    }
  ],
  "visualSymbolismDetector": [
    {
      "symbolDescription": "وصف الرمز البصري أو الاستعارة المرئية",
      "potentialMeanings": ["المعاني المحتملة للرمز"],
      "thematicConnection": "كيف يرتبط الرمز بالموضوعات الرئيسية."
    }
  ],
  "shootabilityAssessor": {
    "overallShootabilityScore": 0.7, 
    "challengingScenes": [ 
      { "sceneDescription": "وصف المشهد", "potentialChallenges": ["تحديات الإنتاج المحتملة (مؤثرات خاصة، مواقع معقدة)"] }
    ],
    "shootabilityNotes": "ملاحظات عامة حول قابلية النص للتصوير."
  },
  "cinematicFlowAnalyzer": {
    "sceneTransitionAnalysis": "تحليل عام لتدفق المشاهد والانتقالات بينها (مثال: سلس، متقطع، إيقاع سريع).",
    "keyTransitions": [ 
      { "fromScene": "وصف المشهد السابق", "toScene": "وصف المشهد التالي", "transitionType": "نوع الانتقال (قطع، مزج، تلاشي - إذا أمكن استنباطه)", "effect": "تأثير هذا الانتقال على السرد." }
    ],
    "pacingAndRhythmVisuals": "كيف يساهم التدفق البصري في الإيقاع العام."
  }
}
\`\`\`
`;

const THEMES_MESSAGES_ANALYZER_INSTRUCTIONS = `
### الوحدة 6: محلل الموضوعات والرسائل (TaskType.THEMES_MESSAGES_ANALYZER)
**الهدف:** استخراج وتحليل الموضوعات الرئيسية والفرعية والرسائل الضمنية والفلسفية.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "mainThemesExtractor": [
    { "themeName": "اسم الموضوع الرئيسي", "description": "شرح للموضوع وكيفية ظهوره في النص", "keyExamples": ["أمثلة من النص تدعم الموضوع"] }
  ],
  "philosophicalDepthAnalyzer": {
    "identifiedPhilosophicalDimensions": ["البعد الفلسفي الأول (مثال: الوجودية، العدالة)", "البعد الفلسفي الثاني"],
    "discussionOfDepth": "نقاش حول العمق الفلسفي للعمل وكيفية معالجته لهذه الأبعاد.",
    "relatedPhilosophicalConcepts": ["مفاهيم فلسفية ذات صلة"]
  },
  "hiddenMessagesDetector": [
    { "inferredMessage": "الرسالة الضمنية أو المخفية المستنبطة", "supportingEvidence": "الأدلة من النص التي تدعم هذا الاستنباط", "potentialImpact": "التأثير المحتمل لهذه الرسالة على الجمهور." }
  ],
  "thematicCohesionAssessor": {
    "cohesionScore": 0.85, 
    "analysisOfCohesion": "تحليل مدى ترابط الموضوعات المختلفة وكيف تخدم بعضها البعض.",
    "pointsOfPotentialConflictOrUnity": "نقاط قد تتعارض فيها الموضوعات أو تتحد."
  },
  "thematicOriginalityAnalyzer": {
    "originalityScore": 0.6, 
    "comparisonToCommonThemes": "مقارنة بمعالجة الموضوعات الشائعة في هذا النوع.",
    "innovativeAspects": "الجوانب المبتكرة في معالجة الموضوعات."
  }
}
\`\`\`
`;

const CULTURAL_HISTORICAL_ANALYZER_INSTRUCTIONS = `
### الوحدة 7: محلل السياق الثقافي والتاريخي (TaskType.CULTURAL_HISTORICAL_ANALYZER)
**الهدف:** تحليل الدقة الثقافية والتاريخية للنص، والتعامل مع القضايا الحساسة.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "historicalPeriodIdentifier": {
    "identifiedPeriod": "الفترة التاريخية التي تدور فيها الأحداث (إذا كانت محددة)",
    "periodCharacteristics": ["خصائص الفترة التاريخية البارزة"],
    "accuracyOfPeriodRepresentation": "تقييم دقة تمثيل الفترة (إذا كانت المعلومات متوفرة في النص)."
  },
  "culturalAccuracyAnalyzer": {
    "culturalElementsDepicted": ["عناصر ثقافية مصورة (عادات، تقاليد، لغة)"],
    "assessmentOfAccuracy": "تقييم صحة ودقة التمثيل الثقافي.",
    "potentialMisrepresentations": ["نقاط قد يكون فيها سوء تمثيل ثقافي أو تبسيط مخل."]
  },
  "biasDetector": [ 
    { "potentialBiasType": "نوع التحيز (مثال: ثقافي، تاريخي، جنساني)", "evidenceInText": "أمثلة من النص قد تشير إلى هذا التحيز", "impactOfBias": "التأثير المحتمل لهذا التحيز." }
  ],
  "sensitivityAssessor": [ 
    { "sensitiveIssue": "القضية الحساسة التي تم تناولها", "mannerOfTreatment": "كيفية تناول القضية في النص", "sensitivityEvaluation": "تقييم مدى حساسية وملاءمة التناول.", "recommendationsForHandling": "توصيات للتعامل مع القضية بحساسية أكبر." }
  ],
  "socialImpactAnalyzer": { 
    "potentialPositiveImpacts": ["التأثيرات الإيجابية المحتملة على المجتمع أو الفئات المعنية"],
    "potentialNegativeImpactsOrControversies": ["التأثيرات السلبية أو الجدل المحتمل"],
    "overallSocialCommentary": "التعليق الاجتماعي العام الذي يقدمه العمل."
  }
}
\`\`\`
`;

const PRODUCIBILITY_ANALYZER_INSTRUCTIONS = `
### الوحدة 8: محلل القابلية للإنتاج (TaskType.PRODUCIBILITY_ANALYZER)
**الهدف:** تقييم الجوانب العملية لإنتاج النص (ميزانية تقديرية، متطلبات فنية، تحديات).
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "smartBudgetEstimator": {
    "estimatedBudgetRange": "تقدير نطاق الميزانية (مثال: منخفض، متوسط، مرتفع، أو أرقام تقديرية إن أمكن)",
    "keyCostDrivers": ["العوامل الرئيسية المؤثرة في التكلفة (مثل عدد المواقع، المؤثرات الخاصة، عدد الشخصيات)"],
    "costOptimizationSuggestions": ["اقتراحات لتقليل التكاليف المحتملة."]
  },
  "technicalRequirementsAnalyzer": {
    "visualEffectsNeeds": ["الحاجة إلى مؤثرات بصرية ونوعها"],
    "soundAndMusicNeeds": ["متطلبات الصوت والموسيقى"],
    "specialEquipment": ["أي معدات خاصة قد تكون مطلوبة"],
    "crewExpertise": ["الخبرات المطلوبة في طاقم العمل"]
  },
  "shootingDifficultyAssessor": [ 
    { "sceneOrElement": "وصف المشهد أو العنصر", "difficultyRating": "تقدير الصعوبة (سهل، متوسط، صعب)", "reasonsForDifficulty": ["أسباب الصعوبة (لوجستيات، تقنيات معقدة)"], "mitigationStrategies": ["استراتيجيات مقترحة لتجاوز الصعوبات"] }
  ],
  "locationAnalyzer": {
    "numberOfUniqueLocations": "العدد التقريبي للمواقع الفريدة المطلوبة",
    "locationTypes": ["أنواع المواقع (داخلي، خارجي، استوديو)"],
    "specificLocationChallenges": ["تحديات متعلقة بمواقع معينة مذكورة في النص."]
  },
  "schedulingPlanner": { 
    "estimatedProductionTime": "تقدير لوقت الإنتاج الإجمالي (أيام، أسابيع)",
    "factorsAffectingSchedule": ["العوامل التي قد تؤثر على الجدول الزمني"],
    "potentialSchedulingBlocks": ["أقسام رئيسية للجدول الزمني (مثال: تصوير خارجي، تصوير داخلي)."]
  }
}
\`\`\`
`;

const TARGET_AUDIENCE_ANALYZER_INSTRUCTIONS = `
### الوحدة 9: محلل الجمهور المستهدف (TaskType.TARGET_AUDIENCE_ANALYZER)
**الهدف:** تحديد وتحليل الجمهور المثالي للنص، وتوقعاتهم، وجاذبية العمل لهم.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "demographicsIdentifier": {
    "primaryTargetAudience": { "ageRange": "الفئة العمرية", "gender": "الجنس", "interests": ["الاهتمامات"] },
    "secondaryTargetAudiences": [{ "description": "وصف جمهور ثانوي محتمل" }],
    "justificationForSelection": "مبررات اختيار هذه الفئات الجماهيرية بناءً على محتوى النص."
  },
  "expectationsAnalyzer": {
    "audienceExpectationsBasedOnGenre": "توقعات الجمهور بناءً على نوع العمل (إذا كان واضحًا).",
    "expectationsFromThemesAndPlot": "التوقعات الناشئة عن الموضوعات والحبكة.",
    "howWellTextMeetsExpectations": "مدى تلبية النص لهذه التوقعات أو تحديها بشكل فعال."
  },
  "attractionAssessor": {
    "keyAttractionFactors": ["عوامل الجذب الرئيسية في النص (قصة، شخصيات، أسلوب، موضوع)"],
    "uniqueSellingPoints": ["نقاط البيع الفريدة التي تميز العمل."],
    "potentialWeaknessesInAppeal": ["نقاط ضعف محتملة في جاذبية العمل لفئات معينة."]
  },
  "sensitiveContentDetectorForAudience": [ 
    { "elementDescription": "وصف العنصر الحساس", "targetAudienceSegment": "الفئة الجماهيرية التي قد تجده حساسًا", "potentialReaction": "رد الفعل المحتمل", "mitigationSuggestion": "اقتراح للتعامل معه أو تعديله." }
  ],
  "marketabilityAnalyzer": {
    "overallMarketabilityScore": 0.7, 
    "marketingAngles": ["زوايا تسويقية محتملة للعمل"],
    "comparisonToSimilarWorksInMarket": "مقارنة بأعمال مشابهة في السوق."
  }
}
\`\`\`
`;

const LITERARY_QUALITY_ANALYZER_INSTRUCTIONS = `
### الوحدة 10: محلل الجودة الأدبية (TaskType.LITERARY_QUALITY_ANALYZER)
**الهدف:** تقييم الجودة الأدبية والفنية للنص، بما في ذلك الأصالة، البلاغة، والتماسك السردي.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "originalityAssessor": {
    "plotOriginalityScore": 0.75, 
    "characterOriginalityScore": 0.6, 
    "thematicOriginalityScore": 0.8, 
    "originalityComments": "تعليقات مفصلة حول مدى إبداعية وتفرد العمل في جوانبه المختلفة.",
    "clicheDetection": [ 
      { "clicheElement": "العنصر المبتذل (في الحبكة، الشخصية، الحوار)", "location": "موقعه في النص", "impact": "تأثيره على الأصالة." }
    ]
  },
  "rhetoricAnalyzer": {
    "languageElegance": "تقييم جمالية اللغة وأسلوب السرد.",
    "dialogueCraftsmanship": "تقييم جودة بناء الحوار وبلاغته.",
    "useOfLiteraryDevices": ["أمثلة على استخدام الأدوات البلاغية (استعارة، تشبيه) وتقييم فعاليتها."]
  },
  "narrativeCohesionAssessor": {
    "plotCoherence": "مدى تماسك الحبكة وخلوها من الثغرات المنطقية.",
    "pacingAndFlow": "تقييم إيقاع السرد وتدفقه.",
    "structuralIntegrity": "تقييم قوة البنية الدرامية العامة.",
    "cohesionScore": 0.9 
  },
  "emotionalImpactAnalyzerModuleSpecific": { 
    "predictedEmotionalJourney": "وصف للرحلة العاطفية التي من المرجح أن يمر بها القارئ/المشاهد.",
    "keyEmotionalMoments": ["اللحظات العاطفية الرئيسية وتأثيرها المتوقع."],
    "depthOfEmotionalResonance": "تقييم عمق الصدى العاطفي الذي يمكن أن يحدثه العمل."
  }
}
\`\`\`
`;

const RECOMMENDATIONS_GENERATOR_INSTRUCTIONS = `
### الوحدة 11: مولد التوصيات والتحسينات (TaskType.RECOMMENDATIONS_GENERATOR)
**الهدف:** تقديم اقتراحات تحسين مفصلة للنص الدرامي تغطي جوانب مثل البنية، تطوير الشخصيات، تحسين الحوار، وتقديم بدائل إبداعية. يتم ذلك بناءً على تحليل النص (أو نتائج وحدات تحليلية سابقة إذا تم توفيرها).
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "intelligentRecommendationsEngine": { 
    "improvementPriorities": ["مجالات التحسين ذات الأولوية (بنية، شخصيات، حوار، إلخ)"],
    "specificTargetedSuggestions": [ 
      { 
        "id": "rec_gen_1", 
        "priority": "high", 
        "category": "structure", 
        "issue": "مشكلة محددة في البنية", 
        "solution": "حل مقترح ومفصل",
        "estimatedEffort": "moderate"
      }
    ]
  },
  "structureOptimizerSuggestions": {
    "identifiedWeaknesses": ["نقاط ضعف هيكلية محددة"],
    "structuralAdjustments": ["تعديلات هيكلية مقترحة (إضافة/حذف/نقل مشاهد)"],
    "pacingImprovements": ["اقتراحات لتحسين الإيقاع العام."]
  },
  "characterDeveloperSuggestions": [
    {
      "characterName": "اسم الشخصية",
      "areasForDevelopment": ["جوانب يمكن تطويرها في الشخصية (دوافع، صراعات، قوس تطور)"],
      "specificSuggestions": ["اقتراحات محددة لتعميق الشخصية."]
    }
  ],
  "dialogueEnhancerSuggestions": [
    {
      "dialogueIssue": "مشكلة محددة في الحوار (مثال: حوار غير طبيعي، صوت شخصية غير متسق)",
      "examplesFromText": ["أمثلة من النص توضح المشكلة"],
      "suggestedImprovements": ["اقتراحات لتحسين جودة الحوار."]
    }
  ],
  "creativeAlternativeGenerator": [
    {
      "originalElement": "وصف للعنصر الأصلي في النص (حبكة، شخصية، مشهد)",
      "alternativeScenario": "وصف لسيناريو أو مسار بديل مقترح",
      "potentialImpactOfAlternative": "التأثير المحتمل للبديل على العمل."
    }
  ]
}
\`\`\`
**تعليمات إضافية صارمة:** بناءً على التحليل، يجب عليك تقديم اقتراحات محددة وقابلة للتنفيذ لكل قسم من الأقسام التالية ضمن كائن \`details\`: \`structureOptimizerSuggestions\`، \`characterDeveloperSuggestions\`، \`dialogueEnhancerSuggestions\`، و \`creativeAlternativeGenerator\`. يجب أن تكون هذه الأقسام مليئة بالرؤى العملية.
**ملاحظة هامة:** إذا كان هذا الطلب يهدف إلى تحسين نص بناءً على نتائج تحليل سابقة من وحدات أخرى، يرجى الإشارة إلى ذلك في "المتطلبات الخاصة" للمستخدم، ويفضل أن يتم تزويدك بملخص لتلك النتائج.
`;

export const TASK_SPECIFIC_INSTRUCTIONS: Record<TaskType, string> = {
  [TaskType.ANALYSIS]: CORE_ANALYSIS_INSTRUCTIONS,
  [TaskType.CREATIVE]: CORE_CREATIVE_INSTRUCTIONS,
  [TaskType.INTEGRATED]: INTEGRATED_MODE_INSTRUCTIONS,
  [TaskType.COMPLETION]: COMPLETION_MODE_INSTRUCTIONS,
  [TaskType.RHYTHM_MAPPING]: RHYTHM_MAPPING_INSTRUCTIONS,
  [TaskType.CHARACTER_NETWORK]: CHARACTER_NETWORK_INSTRUCTIONS,
  [TaskType.DIALOGUE_FORENSICS]: DIALOGUE_FORENSICS_INSTRUCTIONS,
  [TaskType.THEMATIC_MINING]: THEMATIC_MINING_INSTRUCTIONS,
  [TaskType.STYLE_FINGERPRINT]: STYLE_FINGERPRINT_INSTRUCTIONS,
  [TaskType.CONFLICT_DYNAMICS]: CONFLICT_DYNAMICS_INSTRUCTIONS,
  [TaskType.ADAPTIVE_REWRITING]: ADAPTIVE_REWRITING_INSTRUCTIONS,
  [TaskType.SCENE_GENERATOR]: SCENE_GENERATOR_INSTRUCTIONS,
  [TaskType.CHARACTER_VOICE]: CHARACTER_VOICE_INSTRUCTIONS,
  [TaskType.WORLD_BUILDER]: WORLD_BUILDER_INSTRUCTIONS,
  [TaskType.PLOT_PREDICTOR]: PLOT_PREDICTOR_INSTRUCTIONS,
  [TaskType.TENSION_OPTIMIZER]: TENSION_OPTIMIZER_INSTRUCTIONS,
  [TaskType.AUDIENCE_RESONANCE]: AUDIENCE_RESONANCE_INSTRUCTIONS,
  [TaskType.PLATFORM_ADAPTER]: PLATFORM_ADAPTER_INSTRUCTIONS,
  [TaskType.CHARACTER_DEEP_ANALYZER]: CHARACTER_DEEP_ANALYZER_INSTRUCTIONS,
  [TaskType.DIALOGUE_ADVANCED_ANALYZER]: DIALOGUE_ADVANCED_ANALYZER_INSTRUCTIONS,
  [TaskType.VISUAL_CINEMATIC_ANALYZER]: VISUAL_CINEMATIC_ANALYZER_INSTRUCTIONS,
  [TaskType.THEMES_MESSAGES_ANALYZER]: THEMES_MESSAGES_ANALYZER_INSTRUCTIONS,
  [TaskType.CULTURAL_HISTORICAL_ANALYZER]: CULTURAL_HISTORICAL_ANALYZER_INSTRUCTIONS,
  [TaskType.PRODUCIBILITY_ANALYZER]: PRODUCIBILITY_ANALYZER_INSTRUCTIONS,
  [TaskType.TARGET_AUDIENCE_ANALYZER]: TARGET_AUDIENCE_ANALYZER_INSTRUCTIONS,
  [TaskType.LITERARY_QUALITY_ANALYZER]: LITERARY_QUALITY_ANALYZER_INSTRUCTIONS,
  [TaskType.RECOMMENDATIONS_GENERATOR]: RECOMMENDATIONS_GENERATOR_INSTRUCTIONS,
};

export const TASKS_EXPECTING_JSON_RESPONSE: TaskType[] = [
  TaskType.ANALYSIS,
  TaskType.INTEGRATED,
  TaskType.RHYTHM_MAPPING,
  TaskType.CHARACTER_NETWORK,
  TaskType.DIALOGUE_FORENSICS,
  TaskType.THEMATIC_MINING,
  TaskType.STYLE_FINGERPRINT,
  TaskType.CONFLICT_DYNAMICS,
  TaskType.PLOT_PREDICTOR,
  TaskType.TENSION_OPTIMIZER,
  TaskType.AUDIENCE_RESONANCE,
  TaskType.PLATFORM_ADAPTER,
  TaskType.WORLD_BUILDER, // This one is creative but has a complex JSON structure
  TaskType.CHARACTER_DEEP_ANALYZER,
  TaskType.DIALOGUE_ADVANCED_ANALYZER,
  TaskType.VISUAL_CINEMATIC_ANALYZER,
  TaskType.THEMES_MESSAGES_ANALYZER,
  TaskType.CULTURAL_HISTORICAL_ANALYZER,
  TaskType.PRODUCIBILITY_ANALYZER,
  TaskType.TARGET_AUDIENCE_ANALYZER,
  TaskType.LITERARY_QUALITY_ANALYZER,
  TaskType.RECOMMENDATIONS_GENERATOR,
];

export const SUPPORTED_MIME_TYPES = {
  'text/plain': ['.txt'],
  'text/markdown': ['.md'],
  'application/pdf': ['.pdf'],
  'application/msword': ['.doc'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'image/webp': ['.webp'],
};

// SVG Icons
export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
  </svg>
);

export const DocumentTextIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

export const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a14.994 14.994 0 01-3.75 0M9.75 10.5a3 3 0 116 0 3 3 0 01-6 0z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.567L16.5 21.75l-.398-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.398a2.25 2.25 0 001.423-1.423L16.5 15.75l.398 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.398a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

export const PencilSquareIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
  </svg>
);

export const ChartBarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962c.57-1.023-.59-2.096-1.745-2.096-1.498 0-2.585 1.549-1.758 3.097m11.268-3.097c-.57 1.023.59 2.096 1.745 2.096 1.498 0 2.585-1.549 1.758-3.097m-9.5 2.962c.57-1.023-.59-2.096-1.745-2.096-1.498 0-2.585 1.549-1.758 3.097M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
);

export const MagnifyingGlassIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

export const GlobeAltIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
);

export const BeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.596.484-1.087 1.088-1.087h.624a1.088 1.088 0 011.088 1.087v11.826c0 .596-.484 1.087-1.088 1.087h-.624a1.088 1.088 0 01-1.088-1.087V6.087zM6.75 6.087c0-.596.484-1.087 1.088-1.087h.624a1.088 1.088 0 011.088 1.087v11.826c0 .596-.484 1.087-1.088 1.087h-.624a1.088 1.088 0 01-1.088-1.087V6.087z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12h10.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 6.087c0-.596.484-1.087 1.088-1.087h12.824c.604 0 1.088.49 1.088 1.087v.624a1.088 1.088 0 01-1.088 1.087H5.588a1.088 1.088 0 01-1.088-1.087v-.624zM4.5 17.913c0 .596.484 1.087 1.088 1.087h12.824c.604 0 1.088-.49 1.088-1.087v-.624a1.088 1.088 0 00-1.088-1.087H5.588a1.088 1.088 0 00-1.088 1.087v.624z" />
    </svg>
);

export const ArrowsRightLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h18m-7.5-12L21 9m0 0L16.5 12M21 9H3" />
    </svg>
);

export const FilmIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
);

export const ClipboardDocumentIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5H18a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25v-9a2.25 2.25 0 012.25-2.25z" />
    </svg>
);