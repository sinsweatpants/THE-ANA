

import React from 'react';
import { TaskType, TaskCategory, CompletionEnhancementOption } from './types'; // Import TaskType and TaskCategory
import { CORE_ANALYSIS_INSTRUCTIONS } from './instructions/analysis_instructions';
import { CORE_CREATIVE_INSTRUCTIONS } from './instructions/creative_instructions';
import { INTEGRATED_MODE_INSTRUCTIONS } from './instructions/integrated_instructions';
import { COMPLETION_MODE_INSTRUCTIONS } from './instructions/completion_instructions';
import { RHYTHM_MAPPING_INSTRUCTIONS } from './instructions/rhythm_mapping_instructions';
import { CHARACTER_NETWORK_INSTRUCTIONS } from './instructions/character_network_instructions';
import { DIALOGUE_FORENSICS_INSTRUCTIONS } from './instructions/dialogue_forensics_instructions';
import { THEMATIC_MINING_INSTRUCTIONS } from './instructions/thematic_mining_instructions';
import { STYLE_FINGERPRINT_INSTRUCTIONS } from './instructions/style_fingerprint_instructions';
import { CONFLICT_DYNAMICS_INSTRUCTIONS } from './instructions/conflict_dynamics_instructions';
import { ADAPTIVE_REWRITING_INSTRUCTIONS } from './instructions/adaptive_rewriting_instructions';
import { SCENE_GENERATOR_INSTRUCTIONS } from './instructions/scene_generator_instructions';
import { CHARACTER_VOICE_INSTRUCTIONS } from './instructions/character_voice_instructions';
import { WORLD_BUILDER_INSTRUCTIONS } from './instructions/world_builder_instructions';
import { PLOT_PREDICTOR_INSTRUCTIONS } from './instructions/plot_predictor_instructions';
import { TENSION_OPTIMIZER_INSTRUCTIONS } from './instructions/tension_optimizer_instructions';
import { AUDIENCE_RESONANCE_INSTRUCTIONS } from './instructions/audience_resonance_instructions';
import { PLATFORM_ADAPTER_INSTRUCTIONS } from './instructions/platform_adapter_instructions';
import { CHARACTER_DEEP_ANALYZER_INSTRUCTIONS } from './instructions/character_deep_analyzer_instructions';
import { DIALOGUE_ADVANCED_ANALYZER_INSTRUCTIONS } from './instructions/dialogue_advanced_analyzer_instructions';
import { VISUAL_CINEMATIC_ANALYZER_INSTRUCTIONS } from './instructions/visual_cinematic_analyzer_instructions';
import { THEMES_MESSAGES_ANALYZER_INSTRUCTIONS } from './instructions/themes_messages_analyzer_instructions';
import { CULTURAL_HISTORICAL_ANALYZER_INSTRUCTIONS } from './instructions/cultural_historical_analyzer_instructions';
import { PRODUCIBILITY_ANALYZER_INSTRUCTIONS } from './instructions/producibility_analyzer_instructions';
import { TARGET_AUDIENCE_ANALYZER_INSTRUCTIONS } from './instructions/target_audience_analyzer_instructions';
import { LITERARY_QUALITY_ANALYZER_INSTRUCTIONS } from './instructions/literary_quality_analyzer_instructions';
import { RECOMMENDATIONS_GENERATOR_INSTRUCTIONS } from './instructions/recommendations_generator_instructions';

/** @description The title of the application. */
export const APP_TITLE = "المحلل الدرامي والمبدع المحاكي";
/** @description The Gemini model used for text generation. */
export const GEMINI_TEXT_MODEL = 'gemini-2.5-pro';
/** @description The minimum number of files required for processing. */
export const MIN_FILES_REQUIRED = 1; 
/** @description The maximum file size in megabytes. */
export const MAX_FILE_SIZE_MB = 20;
/** @description The maximum file size in bytes. */
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

/**
 * @description A list of tasks that require a completion scope to be defined.
 */
export const TASKS_REQUIRING_COMPLETION_SCOPE: TaskType[] = [
  TaskType.COMPLETION,
  TaskType.PLOT_PREDICTOR,
  TaskType.TENSION_OPTIMIZER,
  TaskType.SCENE_GENERATOR, 
  TaskType.ADAPTIVE_REWRITING, 
  TaskType.WORLD_BUILDER, 
];

/**
 * @description A list of enhancement options available for the completion task.
 */
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

/**
 * @description A record mapping task types to their display labels.
 */
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

/**
 * @description A record mapping task types to their categories.
 */
export const TASK_CATEGORY_MAP: Record<TaskType, TaskCategory> = {
  [TaskType.ANALYSIS]: TaskCategory.CORE,
  [TaskType.CREATIVE]: TaskCategory.CORE,
  [TaskType.INTEGRATED]: TaskCategory.CORE,
  [TaskType.COMPLETION]: TaskCategory.CORE,
  [TaskType.RHYTHM_MAPPING]: TaskCategory.ANALYSES,
  [TaskType.CHARACTER_NETWORK]: TaskCategory.ANALYSES,
  [TaskType.DIALOGUE_FORENSICS]: TaskCategory.ANALYSES,
  [TaskType.THEMATIC_MINING]: TaskCategory.ANALYSES,
  [TaskType.STYLE_FINGERPRINT]: TaskCategory.ANALYSES,
  [TaskType.CONFLICT_DYNAMICS]: TaskCategory.ANALYSES,
  [TaskType.ADAPTIVE_REWRITING]: TaskCategory.ANALYSES,
  [TaskType.SCENE_GENERATOR]: TaskCategory.ANALYSES,
  [TaskType.CHARACTER_VOICE]: TaskCategory.ANALYSES,
  [TaskType.WORLD_BUILDER]: TaskCategory.ANALYSES,
  [TaskType.PLOT_PREDICTOR]: TaskCategory.ANALYSES,
  [TaskType.TENSION_OPTIMIZER]: TaskCategory.ANALYSES,
  [TaskType.AUDIENCE_RESONANCE]: TaskCategory.ANALYSES,
  [TaskType.PLATFORM_ADAPTER]: TaskCategory.ANALYSES,
  // New Modules Category Mapping
  [TaskType.CHARACTER_DEEP_ANALYZER]: TaskCategory.AGENTS,
  [TaskType.DIALOGUE_ADVANCED_ANALYZER]: TaskCategory.AGENTS,
  [TaskType.VISUAL_CINEMATIC_ANALYZER]: TaskCategory.AGENTS,
  [TaskType.THEMES_MESSAGES_ANALYZER]: TaskCategory.AGENTS,
  [TaskType.CULTURAL_HISTORICAL_ANALYZER]: TaskCategory.AGENTS,
  [TaskType.PRODUCIBILITY_ANALYZER]: TaskCategory.AGENTS,
  [TaskType.TARGET_AUDIENCE_ANALYZER]: TaskCategory.AGENTS,
  [TaskType.LITERARY_QUALITY_ANALYZER]: TaskCategory.AGENTS,
  [TaskType.RECOMMENDATIONS_GENERATOR]: TaskCategory.AGENTS,
};


// --- PROMPT ENGINEERING SECTION ---

/**
 * @description The base persona for the AI prompt, defining its role and capabilities.
 */
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

/**
 * @description The seven stations of dramatic analysis for analysis and integrated tasks.
 */
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

/**
 * @description The three stages of emulative creativity for creative and integrated tasks.
 */
export const THREE_STAGES_OF_EMULATIVE_CREATIVITY = `
**المراحل الثلاث للإبداع المحاكي (لـ TaskType.CREATIVE و TaskType.INTEGRATED):**
1.  **التحليل الأسلوبي المعمق:** اللغة، البنية، الشخصيات، العالم.
2.  **النمذجة الأسلوبية:** بناء خريطة أسلوب شاملة.
3.  **المحاكاة والإبداع:** إنتاج محتوى متسق.
`;

/**
 * @description A record mapping task types to their specific instructions.
 */
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

/**
 * @description A list of tasks that are expected to return a JSON response.
 */
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

/**
 * @description A record of supported MIME types and their corresponding file extensions.
 */
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