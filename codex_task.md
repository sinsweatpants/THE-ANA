السياق الهندسي المتقدّم — أمرٌ مهيكل وجاهز للنسخ إلى نموذج ترميز (Code Model)

الغاية: تنفيذ ترقية وحدات التنفيذ إلى مخرجات موحّدة AdvancedScreenplayModuleResult مع اختبارات، توثيق مولّد تلقائياً، وضمان الجودة من طرف إلى طرف — دون أمثلة مكانية، وباعتماد fixtures فعلية.

⸻

SYSTEM — قواعد التعاقد والصرامة
	•	اللغة: TypeScript (Node.js / ESM).
	•	كل وحدة تنفيذ تُصدّر الدالة:

export async function run(input: ModuleInput): Promise<AdvancedScreenplayModuleResult>


	•	ModuleInput مٌعرّف في src/types/common.ts ويشمل: text | file | language | constraints وغيرها.
	•	التحقق إجباري عبر Zod قبل أي تشغيل.
	•	ADVANCED_MODULE_OUTPUT_STRUCTURE هو مرجع تعبئة كامل لنتيجة الوحدة.
	•	لا أمثلة مكانية. كل الأمثلة والتحاليل تعتمد ملفات tests/fixtures/**.
	•	الالتزام بـ حقول details الخاصة بكل وحدة (كما تُعرّفها *_instructions.ts) وبباقي الحقول:
recommendations[] { priority, impact_assessment, implementation_timeline, success_metrics },
quality_metrics, development_stage, estimated_revisions_needed.

⸻

SCOPE — نطاق التنفيذ
	1.	ترقية وحدات التنفيذ في الملفات المستهدفة (القائمة الكاملة أدناه).
	2.	ترقية وحدات البنية:
	•	taskTypes.ts: تعداد جميع الأنواع + خرائط type→instruction file & type→execution file.
	•	promptBuilder.ts: بناء الـ prompt من *_instructions.ts مع حقن قيود المهمة واللغة والمخرجات، وضمان انعكاس حقول details.
	•	taskRunner.ts: جدولة متوازية مضبوطة (حد أقصى التوازي قابل للتهيئة)، مهلات، إلغاء متسلسل، ومرحلة دمج integratedAnalysis لإنتاج تقرير تكامل نهائي يطابق AdvancedScreenplayModuleResult.
	•	index.ts: إعادة تصدير موحّد لجميع الوحدات والأنواع.
	3.	اختبارات وضمان جودة (Jest أو Vitest) + ESLint/Prettier.
	4.	توليد توثيق تلقائي docs/modules/*.md من التعليمات والأنواع، مع مثال مخرجات فعلي لكل وحدة.
	5.	التسليم: فرع، التزام، تحديث CHANGELOG.

⸻

INPUT — نص الأمر الأصلي المراد تنفيذه (للمرجع داخل النموذج)

ترقية وحدات التنفيذ (*.ts) لتوليد مخرجات مطابقة
لكل ملف تنفيذ أدناه، نفّذ دالة رئيسية قياسية:
export async function run(input: ModuleInput): Promise<AdvancedScreenplayModuleResult> { ... }
حيث ModuleInput يُعرّف في src/types/common.ts ويشمل النص/الملف/اللغة/القيود. المتطلبات:

التحقق من المدخلات عبر Zod قبل التشغيل.
استخدام ADVANCED_MODULE_OUTPUT_STRUCTURE كمرجع لتعبئة الهيكل الكامل.
تعبئة details وفق المواصفات الخاصة بكل وحدة أعلاه، بقيم حقيقية مشتقة من التحليل.
إرجاع توصيات قابلة للتنفيذ مع priority وimpact_assessment وimplementation_timeline وsuccess_metrics.
تسجيل درجات quality_metrics وتحديد development_stage وestimated_revisions_needed.
الامتناع عن أي أمثلة مكانية؛ استخدم تحليلاً حقيقياً لمدخلات الاختبار (fixtures) في مجلد tests/fixtures.

الملفات المستهدفة:
adaptiveRewriting.ts
analyzeCore.ts
audienceResonance.ts
characterDeepAnalysis.ts
characterNetwork.ts
characterVoiceGeneration.ts
completionTask.ts
conflictDialogueGeneration.ts
conflictDynamics.ts
createCoreCreative.ts
culturalHistoricalAnalysis.ts
dialogueAdvancedAnalysis.ts
dialogueForensics.ts
foreshadowingDetection.ts
index.ts
integratedAnalysis.ts
literaryQualityAnalysis.ts
platformAdaptation.ts
plotPrediction.ts
producibilityAnalysis.ts
promptBuilder.ts
recommendationsGeneration.ts
rhythmMapping.ts
sceneGeneration.ts
sceneOptimization.ts
styleFingerprint.ts
targetAudienceAnalysis.ts
taskRunner.ts
taskTypes.ts
tensionOptimization.ts
thematicMining.ts
themesMessagesAnalysis.ts
visualCinematicAnalysis.ts
voiceInteractionAnalysis.ts
whatIfScenarioAnalysis.ts
worldBuilding.ts

متطلبات إضافية لوحدات البنية:
taskTypes.ts: حدّث التعدادات لتشمل جميع الأنواع المذكورة أعلاه، ووفّر خرائط من النوع إلى ملف التعليمات وملف التنفيذ.
promptBuilder.ts: ابنِ الموجه من ملفات التعليمات المحدثة مع حقن قيود المهمة واللغة والمخرجات المطلوبة، وتحقق من أن كل prompt يعكس حقول details الخاصة بالوحدة.
taskRunner.ts: نفّذ جدولة متوازية مضبوطة (حد أقصى التوازي قابل للتهيئة)، مهلات، وإلغاء متسلسل؛ وأضف مرحلة دمج integratedAnalysis التي تجمع مخرجات الوحدات وتنتج تقرير تكامل نهائي مطابق لواجهة AdvancedScreenplayModuleResult.
index.ts: أعِد التصدير الموحّد لكل الوحدات والأنواع.

الاختبارات وضمان الجودة
أضف إطار اختبار (Jest أو Vitest). أنشئ tests/unit لكل وحدة مع اختبارات:
صحة المخطط: كل ناتج يمر عبر AdvancedScreenplayModuleResultSchema.
اكتمال details: وجود الحقول الإلزامية غير فارغة.
اتساق التوصيات: كل توصية تملك priority وimpact_assessment وsuccess_metrics.
اختبارات تكامل integratedAnalysis: يتحقق من خلوّ التناقضات أو يعلِّمها بوضوح.
أضف tests/fixtures لسيناريوهات عربية وإنجليزية مختصرة لاختبار التحليل فعلياً.
أضف ESLint + Prettier، وشغّل التصحيح الآلي للأنماط.

شروط القبول الإلزامية
ينجح build وtypecheck وtest دون أخطاء.
كل *_instructions.ts يحتوي الأقسام القياسية المذكورة، مع مثال JSON فعلي مطابق للمخطط.
كل وحدة تنفيذ تعيد AdvancedScreenplayModuleResult صالحاً عبر Zod وJSON Schema.
توليد ملفات docs/modules/*.md تلقائياً من التعليمات والأنواع، وتضمين مثال مخرجات فعلي لكل وحدة.
لا توجد قيم مكانية أو نصوص حشوية؛ كل الأمثلة مبنية على fixtures.

التسليم والتوثيق
أنشئ فرع feat/advanced-screenplay-modules.
التزم برسالة: feat(modules): upgrade instruction templates and execution outputs to AdvancedScreenplayModuleResult with per-module details, zod/schema, tests, docs
افتح ملف CHANGELOG.md وأضف قسم يصف التغييرات الهيكلية، حقول details لكل وحدة، وخطوات الترقية للمستخدمين.
نفّذ الآن هذه التعليمات بدقة، وابدأ بترقية الملفين النموذجيين كما ورد، ثم عمّم نفس منهجية الهيكلة على بقية ملفات التعليمات والتنفيذ مع الالتزام الصارم بحقوق الحقول في details وبمخرجات AdvancedScreenplayModuleResult.


⸻

CONTRACT — تعريفات وأنماط قياسية (يلتزم بها النموذج)

1) أنواع/مخططات (استخدمها أو استوردها)

// src/types/common.ts (موجود لديك؛ لا تعرّف مكرر. تحقّق وجودها وإلا أنشئها كما يلي)
import { z } from "zod";

export const ModuleInputSchema = z.object({
  text: z.string().optional(),
  file: z.string().optional(),          // مسار ملف/محتوى مُحمَّل
  language: z.enum(["ar", "en"]).default("ar"),
  constraints: z.record(z.any()).default({}),
});
export type ModuleInput = z.infer<typeof ModuleInputSchema>;

// مرجع الهيكل العام (استورد من ADVANCED_MODULE_OUTPUT_STRUCTURE أو عرف Schema مطابق)
export const AdvancedScreenplayModuleResultSchema = z.object({
  module: z.string(),                   // اسم الوحدة
  version: z.string(),
  input_ref: z.string().optional(),     // مرجع fixture/ملف
  summary: z.string(),
  details: z.record(z.any()),           // حقول متخصصة لكل وحدة (غير فارغة)
  recommendations: z.array(z.object({
    title: z.string(),
    description: z.string(),
    priority: z.enum(["low", "medium", "high", "critical"]),
    impact_assessment: z.string(),
    implementation_timeline: z.string(),
    success_metrics: z.array(z.string()).min(1),
  })).default([]),
  quality_metrics: z.object({
    completeness: z.number().min(0).max(1),
    accuracy: z.number().min(0).max(1),
    style_fidelity: z.number().min(0).max(1).optional(),
    robustness: z.number().min(0).max(1).optional(),
  }),
  development_stage: z.enum(["prototype","alpha","beta","production"]).default("alpha"),
  estimated_revisions_needed: z.number().int().nonnegative().default(0),
  warnings: z.array(z.string()).default([]),
});
export type AdvancedScreenplayModuleResult = z.infer<typeof AdvancedScreenplayModuleResultSchema>;

2) واجهة كل وحدة تنفيذ (نموذج التزام)

// قالب صارم لكل وحدة تنفيذ
import { ModuleInputSchema, AdvancedScreenplayModuleResultSchema, AdvancedScreenplayModuleResult } from "../types/common";

export async function run(input: ModuleInput): Promise<AdvancedScreenplayModuleResult> {
  const parsed = ModuleInputSchema.parse(input);              // 1) Zod validation

  // 2) تحميل fixture الفعلي إن لزم (text/file) دون أمثلة مكانية
  const { text, file, language, constraints } = parsed;

  // 3) تحليل فعلي يعتمد fixtures
  // ... build analysis → derive real fields for `details`

  const result: AdvancedScreenplayModuleResult = {
    module: "MODULE_NAME",
    version: "1.0.0",
    input_ref: file ?? "tests/fixtures/...",
    summary: "خلاصة تحليلية مختصرة دقيقة.",
    details: {
      // حقول غير فارغة مخصصة للوحدة — مشتقة من التحليل الحقيقي
    },
    recommendations: [
      {
        title: "خطوة 1",
        description: "وصف تنفيذي محدد.",
        priority: "high",
        impact_assessment: "أثر متوقع كمي/نوعي.",
        implementation_timeline: "قصير/متوسط/طويل مع أسابيع محددة",
        success_metrics: ["مقياس 1", "مقياس 2"]
      }
    ],
    quality_metrics: { completeness: 0.92, accuracy: 0.88, style_fidelity: 0.9, robustness: 0.85 },
    development_stage: "beta",
    estimated_revisions_needed: 1,
    warnings: []
  };

  return AdvancedScreenplayModuleResultSchema.parse(result);  // 4) توثيق صحة الخرج
}


⸻

IMPLEMENTATION — مواصفات تنفيذية مُلزِمة

A) taskTypes.ts (تعداد + خرائط)
	•	أضِف جميع الأنواع المذكورة؛ وامنح خرائط صريحة:
	•	TASK_TO_INSTRUCTIONS: Record<TaskType, string> → مسار ملف التعليمات (مثلاً instructions/adaptive_rewriting_instructions.ts).
	•	TASK_TO_EXECUTOR: Record<TaskType, string> → مسار ملف التنفيذ (مثلاً modules/adaptiveRewriting.ts).

// src/core/taskTypes.ts
export enum TaskType {
  ADAPTIVE_REWRITING = "adaptive_rewriting",
  ANALYZE_CORE = "analyze_core",
  AUDIENCE_RESONANCE = "audience_resonance",
  CHARACTER_DEEP_ANALYSIS = "character_deep_analysis",
  CHARACTER_NETWORK = "character_network",
  CHARACTER_VOICE_GENERATION = "character_voice_generation",
  COMPLETION_TASK = "completion_task",
  CONFLICT_DIALOGUE_GENERATION = "conflict_dialogue_generation",
  CONFLICT_DYNAMICS = "conflict_dynamics",
  CREATE_CORE_CREATIVE = "create_core_creative",
  CULTURAL_HISTORICAL_ANALYSIS = "cultural_historical_analysis",
  DIALOGUE_ADVANCED_ANALYSIS = "dialogue_advanced_analysis",
  DIALOGUE_FORENSICS = "dialogue_forensics",
  FORESHADOWING_DETECTION = "foreshadowing_detection",
  INTEGRATED_ANALYSIS = "integrated_analysis",
  LITERARY_QUALITY_ANALYSIS = "literary_quality_analysis",
  PLATFORM_ADAPTATION = "platform_adaptation",
  PLOT_PREDICTION = "plot_prediction",
  PRODUCIBILITY_ANALYSIS = "producibility_analysis",
  PROMPT_BUILDER = "prompt_builder",
  RECOMMENDATIONS_GENERATION = "recommendations_generation",
  RHYTHM_MAPPING = "rhythm_mapping",
  SCENE_GENERATION = "scene_generation",
  SCENE_OPTIMIZATION = "scene_optimization",
  STYLE_FINGERPRINT = "style_fingerprint",
  TARGET_AUDIENCE_ANALYSIS = "target_audience_analysis",
  TASK_RUNNER = "task_runner",
  THEMATIC_MINING = "thematic_mining",
  THEMES_MESSAGES_ANALYSIS = "themes_messages_analysis",
  TENSION_OPTIMIZATION = "tension_optimization",
  VISUAL_CINEMATIC_ANALYSIS = "visual_cinematic_analysis",
  VOICE_INTERACTION_ANALYSIS = "voice_interaction_analysis",
  WHAT_IF_SCENARIO_ANALYSIS = "what_if_scenario_analysis",
  WORLD_BUILDING = "world_building",
}

export const TASK_TO_INSTRUCTIONS: Record<TaskType, string> = {
  [TaskType.ADAPTIVE_REWRITING]: "instructions/adaptive_rewriting_instructions.ts",
  // ... أكمل لجميع الأنواع
} as const;

export const TASK_TO_EXECUTOR: Record<TaskType, string> = {
  [TaskType.ADAPTIVE_REWRITING]: "modules/adaptiveRewriting.ts",
  // ... أكمل لجميع الأنواع
} as const;

B) promptBuilder.ts (يبني موجهًا يعكس details)
	•	يقرأ ملف التعليمات الخاص بكل نوع، يحقن: constraints, language, required_outputs.
	•	يتأكد أن حقول details المطلوب إنتاجها مذكورة ضمن الموجه بشكل صريح.

// src/core/promptBuilder.ts
import { TaskType, TASK_TO_INSTRUCTIONS } from "./taskTypes";
export function buildPrompt(t: TaskType, opts: { language: "ar"|"en"; constraints?: Record<string,any>; requiredDetails: string[]; }): string {
  const instrPath = TASK_TO_INSTRUCTIONS[t];
  const instr = loadInstructionText(instrPath); // اقرأ كنص صريح
  const header = `[[LANG=${opts.language}]]\n[[CONSTRAINTS=${JSON.stringify(opts.constraints ?? {})}]]`;
  const detailsClause = `[[REQUIRED_DETAILS=${JSON.stringify(opts.requiredDetails)}]]`;
  return [header, detailsClause, instr].join("\n\n");
}

C) taskRunner.ts (توازي مضبوط + مهلات + إلغاء + دمج)
	•	حد أقصى التوازي عبر p-limit أو تنفيذ داخلي.
	•	مهلة لكل مهمة؛ إن تجاوزتها → وسم تحذير وإلغاء.
	•	إلغاء متسلسل: عند فشل مهام حرجة، ألغِ تبعياتها.
	•	integratedAnalysis: مرحلة نهائية تدمج نتائج الوحدات وتنتج AdvancedScreenplayModuleResult واحدًا بنطاق تكاملي، وتعلّم التناقضات بوضوح.

// src/core/taskRunner.ts
export async function runTasks(plan: { tasks: { type: TaskType; input: ModuleInput; requiredDetails: string[] }[]; concurrency: number; timeoutMs: number; }): Promise<AdvancedScreenplayModuleResult> {
  // 1) تنفيذ متوازي مضبوط
  // 2) تجميع المخرجات الجزئية
  // 3) بناء integratedAnalysis بملء details التكاملية (خرائط التعارض/الانسجام، درجات الإجماع، إلخ)
  // 4) تحقق Zod النهائي على النتيجة المندمجة
}

D) index.ts (إعادة تصدير موحّد)
	•	أعد تصدير الأنواع/الوحدات/البنية في نقطة دخول واحدة ثابتة.

⸻

EXEMPLARS — ابدأ بترقية ملفين نموذجيين (تنفيذ فعلي)

ابدأ بـ: modules/adaptiveRewriting.ts و modules/analyzeCore.ts بنفس القالب أدناه، ثم عمّم على باقي الوحدات.

// modules/adaptiveRewriting.ts
import { ModuleInput, ModuleInputSchema, AdvancedScreenplayModuleResult, AdvancedScreenplayModuleResultSchema } from "../types/common";
import { buildPrompt } from "../core/promptBuilder";
import { TaskType } from "../core/taskTypes";
import { analyzeAdaptiveRewriting } from "../engines/adaptiveRewriting/engine"; // محركك التحليلي الفعلي

export async function run(input: ModuleInput): Promise<AdvancedScreenplayModuleResult> {
  const parsed = ModuleInputSchema.parse(input);
  const requiredDetails = ["transformation_strategy","style_alignment","semantic_preservation","risk_notes"]; // مثال لحقول details الخاصة بهذه الوحدة (غير فارغة)
  const prompt = buildPrompt(TaskType.ADAPTIVE_REWRITING, { language: parsed.language, constraints: parsed.constraints, requiredDetails });

  const analysis = await analyzeAdaptiveRewriting({ prompt, text: parsed.text, file: parsed.file }); // يعتمد fixtures
  const result: AdvancedScreenplayModuleResult = {
    module: "adaptive_rewriting",
    version: "1.0.0",
    input_ref: parsed.file ?? "tests/fixtures/adaptive/sample_ar.txt",
    summary: analysis.summary,
    details: {
      transformation_strategy: analysis.strategy,
      style_alignment: analysis.styleScore,
      semantic_preservation: analysis.semanticScore,
      risk_notes: analysis.risks
    },
    recommendations: analysis.recommendations, // تحتوي priority/impact_assessment/implementation_timeline/success_metrics
    quality_metrics: analysis.quality,
    development_stage: "beta",
    estimated_revisions_needed: analysis.etaRevisions,
    warnings: analysis.warnings
  };
  return AdvancedScreenplayModuleResultSchema.parse(result);
}

// modules/analyzeCore.ts
import { ModuleInput, ModuleInputSchema, AdvancedScreenplayModuleResult, AdvancedScreenplayModuleResultSchema } from "../types/common";
import { coreAnalyze } from "../engines/core/engine";

export async function run(input: ModuleInput): Promise<AdvancedScreenplayModuleResult> {
  const parsed = ModuleInputSchema.parse(input);
  const analysis = await coreAnalyze(parsed);  // تحليل فعلي يعتمد fixtures

  const result: AdvancedScreenplayModuleResult = {
    module: "analyze_core",
    version: "1.0.0",
    input_ref: parsed.file ?? "tests/fixtures/core/sample_en.txt",
    summary: analysis.summary,
    details: {
      narrative_cohesion: analysis.narrativeCohesion,
      character_consistency: analysis.characterConsistency,
      pacing_signal: analysis.pacingSignal,
      red_flags: analysis.redFlags
    },
    recommendations: analysis.recommendations,
    quality_metrics: analysis.quality,
    development_stage: "beta",
    estimated_revisions_needed: analysis.etaRevisions,
    warnings: analysis.warnings
  };
  return AdvancedScreenplayModuleResultSchema.parse(result);
}

طبّق القالب ذاته على بقية الملفات المذكورة، مع details المتخصصة لكل وحدة كما تُحدّدها تعليماتها.

⸻

TESTS & QA — بنية اختبارات وتحقّقات

A) إطار الاختبارات
	•	استخدم Jest أو Vitest. أنشئ:
	•	tests/unit/<module>.spec.ts
	•	tests/fixtures/** (عربية/إنجليزية مختصرة).

// tests/unit/adaptiveRewriting.spec.ts
import { run } from "../../src/modules/adaptiveRewriting";
import { AdvancedScreenplayModuleResultSchema } from "../../src/types/common";

test("produces valid AdvancedScreenplayModuleResult and non-empty details", async () => {
  const res = await run({ file: "tests/fixtures/adaptive/sample_ar.txt", language: "ar", constraints: {} });
  const parsed = AdvancedScreenplayModuleResultSchema.parse(res);
  expect(Object.keys(parsed.details).length).toBeGreaterThan(0);
  for (const r of parsed.recommendations) {
    expect(r.priority).toBeDefined();
    expect(r.impact_assessment).toBeTruthy();
    expect(r.success_metrics.length).toBeGreaterThan(0);
  }
});

B) اختبارات تكامل integratedAnalysis
	•	نفّذ خطة مهام عبر taskRunner لمجموعة وحدات، ثم تحقق:
	•	لا تناقضات صامتة: إمّا خلوّها أو وسمها في warnings/details.conflicts.
	•	النتيجة النهائية تمرّ عبر AdvancedScreenplayModuleResultSchema.

⸻

DOCS — توليد وثائق تلقائياً
	•	سكربت: scripts/generate-module-docs.ts:
	•	يقرأ *_instructions.ts وTaskType وAdvancedScreenplayModuleResult ويولّد docs/modules/<module>.md.
	•	يتضمن مثال مخرجات فعلي مأخوذ من تشغيل fixture ضمن tests/fixtures/**.

⸻

LINT & STYLE
	•	أضف ESLint + Prettier.
	•	شغّل التصحيح الآلي قبل الاختبارات.

// package.json (مقتطف)
{
  "scripts": {
    "lint": "eslint 'src/**/*.{ts,tsx}'",
    "format": "prettier --write .",
    "test": "vitest run --reporter=verbose",
    "typecheck": "tsc -p tsconfig.json",
    "docs": "ts-node scripts/generate-module-docs.ts",
    "build": "tsc -p tsconfig.json"
  }
}


⸻

PROTOCOL — مراحل التنفيذ (build → assemble → grade → mix → render → export)
	1.	build
	•	تثبيت/تحديث الاعتمادات، إضافة Zod/Jest/Vitest/ESLint/Prettier.
	•	التحقق من وجود src/types/common.ts وADVANCED_MODULE_OUTPUT_STRUCTURE.
	2.	assemble
	•	ترقية وحدتي: adaptiveRewriting.ts, analyzeCore.ts بالقالب القياسي.
	•	إكمال taskTypes.ts (تعداد + خرائط)، وpromptBuilder.ts, وindex.ts.
	3.	grade
	•	كتابة unit tests للوحدتين، وتمرير typecheck وlint.
	4.	mix
	•	تنفيذ taskRunner.ts (توازي مضبوط + مهلات + إلغاء).
	•	تنفيذ مرحلة integratedAnalysis وإضافة اختبار تكامل.
	5.	render
	•	توليد docs/modules/*.md من التعليمات والأنواع + أمثلة فعلية عبر fixtures.
	6.	export
	•	إنشاء الفرع والتزام وتحديث CHANGELOG.md.

⸻

ACCEPTANCE — شروط القبول الإلزامية (Definition of Done)
	•	build وtypecheck وtest تمرّ دون أخطاء.
	•	كل *_instructions.ts يحوي الأقسام القياسية + مثال JSON فعلي مطابق للمخطط.
	•	كل وحدة تنفيذ تعيد AdvancedScreenplayModuleResult صالحاً عبر Zod.
	•	تم توليد docs/modules/*.md مع أمثلة حقيقية من fixtures.
	•	لا قيم مكانية أو نصوص حشوية.
	•	CHANGELOG.md محدّث ويصف: التغييرات الهيكلية، حقول details لكل وحدة، وخطوات الترقية للمستخدمين.

⸻

COMMANDS — أوامر عملية (جاهزة لللصق داخل بيئة التطوير)

# فرع العمل
git checkout -b feat/advanced-screenplay-modules

# أدوات الجودة
pnpm add -D zod vitest @types/node ts-node eslint prettier eslint-config-prettier eslint-plugin-import

# تشغيل الجودة
pnpm format && pnpm lint && pnpm typecheck && pnpm test

# توليد الوثائق
pnpm docs

# بناء
pnpm build

# الالتزام والتسليم
git add .
git commit -m "feat(modules): upgrade instruction templates and execution outputs to AdvancedScreenplayModuleResult with per-module details, zod/schema, tests, docs"
git push -u origin feat/advanced-screenplay-modules


⸻

FILES — القائمة المستهدفة (نفّذ عليها القالب القياسي)
	•	adaptiveRewriting.ts (ابدأ به)
	•	analyzeCore.ts (ابدأ به)
	•	audienceResonance.ts
	•	characterDeepAnalysis.ts
	•	characterNetwork.ts
	•	characterVoiceGeneration.ts
	•	completionTask.ts
	•	conflictDialogueGeneration.ts
	•	conflictDynamics.ts
	•	createCoreCreative.ts
	•	culturalHistoricalAnalysis.ts
	•	dialogueAdvancedAnalysis.ts
	•	dialogueForensics.ts
	•	foreshadowingDetection.ts
	•	index.ts
	•	integratedAnalysis.ts
	•	literaryQualityAnalysis.ts
	•	platformAdaptation.ts
	•	plotPrediction.ts
	•	producibilityAnalysis.ts
	•	promptBuilder.ts
	•	recommendationsGeneration.ts
	•	rhythmMapping.ts
	•	sceneGeneration.ts
	•	sceneOptimization.ts
	•	styleFingerprint.ts
	•	targetAudienceAnalysis.ts
	•	taskRunner.ts
	•	taskTypes.ts
	•	tensionOptimization.ts
	•	thematicMining.ts
	•	themesMessagesAnalysis.ts
	•	visualCinematicAnalysis.ts
	•	voiceInteractionAnalysis.ts
	•	whatIfScenarioAnalysis.ts
	•	worldBuilding.ts

⸻

NOTES — تعليمات إلزامية أخيرة
	•	ابدأ الآن بترقية الملفين النموذجيين (adaptiveRewriting.ts وanalyzeCore.ts) وفق القوالب أعلاه، ثم عمّم المنهجية نفسها على بقية الوحدات.
	•	احرص على أن تعكس prompts حقول details المتوقعة لكل وحدة، وأن تكون هذه الحقول غير فارغة ومشتقة من تحليل فعلي لملفات tests/fixtures.
	•	أي تعارض بين نتائج الوحدات يجب وسمه بوضوح داخل integratedAnalysis (details.conflicts أو warnings[]).
	•	أي حقل/نوع مفقود: أنشئه بدقة بما يتوافق مع ADVANCED_MODULE_OUTPUT_STRUCTURE وضمن Zod + JSON Schema.

— انتهى السياق الهندسي.