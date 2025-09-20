import { z } from "zod";
import {
  AnalysisType,
  AntagonistType,
  Audience,
  BeatType,
  Category,
  CharacterType,
  ConflictType,
  DevelopmentStage,
  ExpositionMethod,
  Genre,
  Priority,
  RelationshipType,
  WorkFormat,
} from "./common";

/**
 * @file تعريف البنية الموحدة لمخرجات الوحدات المتقدمة الخاصة بتحليل السيناريو.
 * @description يشمل هذا الملف الواجهة الرئيسة بالإضافة إلى مخطط Zod للتحقق الصارم.
 */

/**
 * @description يمثل الإطار الزمني الذي جرت فيه عملية التحليل.
 */
export interface AnalysisWindow {
  start: string;
  end: string;
}

/**
 * @description وصف مراجع الأدلة المستخدمة لتدعيم التحليل.
 */
export interface DetailEvidence {
  referenceId: string;
  source: string;
  excerpt: string;
  location: string;
  confidence: number;
}

/**
 * @description يمثل ملف الشخصية المرتبط بالمحور التحليلي.
 */
export interface CharacterPersona {
  name: string;
  type: CharacterType;
  goals: string[];
  transformation: string;
  screenTimeShare?: number;
}

/**
 * @description عنصر تحليلي متخصص داخل قسم التفاصيل.
 */
export interface DetailInsight {
  id: string;
  headline: string;
  analysisType: AnalysisType;
  summary: string;
  impact: string;
  confidence: number;
  supportingEvidence: DetailEvidence[];
  recommendedActions?: string[];
}

/**
 * @description الضربات الدرامية المرتبطة بالمشهد أو المحور المحدد.
 */
export interface NarrativeBeat {
  type: BeatType;
  description: string;
  pages?: {
    start: number;
    end: number;
  };
  intensity?: number;
}

/**
 * @description تمثيل حالات الصراع داخل القسم التحليلي.
 */
export interface ConflictInsight {
  type: ConflictType;
  antagonistType: AntagonistType;
  status: "unresolved" | "escalating" | "resolving" | "resolved";
  summary: string;
  stakes: string;
}

/**
 * @description تحليل العلاقات بين الشخصيات وأثرها الدرامي.
 */
export interface CharacterRelationship {
  characters: string[];
  relationshipType: RelationshipType;
  tone: string;
  strength: number;
  notes?: string;
}

/**
 * @description القياسات المتخصصة داخل تفاصيل الوحدة.
 */
export interface DetailMetric {
  name: string;
  score: number;
  weight?: number;
  justification: string;
}

/**
 * @description قسم تفصيلي واحد ضمن حقل التفاصيل.
 */
export interface ModuleDetailSection {
  id: string;
  title: string;
  focus: AnalysisType;
  expositionMethod: ExpositionMethod;
  summary: string;
  personas?: CharacterPersona[];
  insights: DetailInsight[];
  beats?: NarrativeBeat[];
  conflicts?: ConflictInsight[];
  relationships?: CharacterRelationship[];
  metrics?: DetailMetric[];
}

/**
 * @description البيانات الوصفية المرافقة لتقرير الوحدة المتقدمة.
 */
export interface AdvancedScreenplayMetadata {
  workId: string;
  workTitle: string;
  workFormat: WorkFormat;
  genres: Genre[];
  primaryAudience: Audience;
  secondaryAudiences?: Audience[];
  developmentStage: DevelopmentStage;
  priority: Priority;
  categories: Category[];
  language: string;
  locale?: string;
  analyst: string;
  collaborators: string[];
  createdAt: string;
  updatedAt?: string;
  analysisWindow: AnalysisWindow;
  wordCount?: number;
  runtimeMinutes?: number;
  logline?: string;
  referenceWorks?: string[];
  productionCompany?: string;
  notes?: string[];
}

/**
 * @description تمثيل توصية قابلة للتنفيذ.
 */
export interface Recommendation {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  category: Category;
  focus: AnalysisType;
  estimatedEffortHours: number;
  owner: string;
  impact: string;
  dependencies?: string[];
  successCriteria: string[];
}

/**
 * @description القياسات الكمية لجودة السيناريو.
 */
export interface QualityMetrics {
  narrativeCohesion: number;
  characterDepth: number;
  dialogueAuthenticity: number;
  pacingControl: number;
  thematicResonance: number;
  originality: number;
  productionFeasibility: number;
  audienceAlignment: number;
  localizationReadiness: number;
  confidenceInterval: {
    lowerBound: number;
    upperBound: number;
  };
  qualitativeNotes: string[];
}

/**
 * @description الحالة التنفيذية لخطوة تالية.
 */
export type NextStepStatus = "planned" | "in_progress" | "blocked" | "completed";

/**
 * @description عنصر واحد داخل خطة الإجراءات القادمة.
 */
export interface NextStepItem {
  id: string;
  description: string;
  owner: string;
  dueDate: string;
  priority: Priority;
  status: NextStepStatus;
  successCriteria: string[];
}

/**
 * @description نقاط المراجعة المستقبلية المقترحة.
 */
export interface ReviewMilestone {
  milestone: string;
  date: string;
  focus: AnalysisType;
  notes?: string;
}

/**
 * @description أصحاب المصلحة ضمن خطة التواصل.
 */
export interface CommunicationStakeholder {
  name: string;
  role: string;
  channel: string;
  cadence: string;
}

/**
 * @description خطة الخطوات التالية للتطوير أو المراجعة.
 */
export interface NextSteps {
  immediate: NextStepItem[];
  upcoming: NextStepItem[];
  reviewSchedule: ReviewMilestone[];
  communicationPlan: {
    stakeholders: CommunicationStakeholder[];
    notes?: string;
  };
}

/**
 * @description البنية الكاملة لمخرجات الوحدة المتقدمة لتحليل السيناريو.
 */
export interface AdvancedScreenplayModuleResult {
  title: string;
  summary: string;
  metadata: AdvancedScreenplayMetadata;
  details: ModuleDetailSection[];
  recommendations: Recommendation[];
  quality_metrics: QualityMetrics;
  next_steps: NextSteps;
}

const isoDateTimeSchema = z
  .string()
  .datetime({ offset: true, message: "يجب توفير تاريخ/وقت بصيغة ISO 8601 مع المنطقة الزمنية." });

const analysisWindowSchema = z
  .object({
    start: isoDateTimeSchema,
    end: isoDateTimeSchema,
  })
  .refine(
    (window) => new Date(window.start).getTime() <= new Date(window.end).getTime(),
    { message: "يجب أن يكون تاريخ البداية أقدم من أو يساوي تاريخ النهاية." },
  );

const detailEvidenceSchema = z.object({
  referenceId: z.string().min(1, "معرّف المرجع مطلوب."),
  source: z.string().min(1, "يجب تحديد مصدر الدليل."),
  excerpt: z.string().min(1, "يجب توفير مقتطف دال."),
  location: z.string().min(1, "موقع الدليل مطلوب."),
  confidence: z.number().min(0).max(1),
});

const characterPersonaSchema = z.object({
  name: z.string().min(1),
  type: z.nativeEnum(CharacterType),
  goals: z.array(z.string().min(1)).min(1),
  transformation: z.string().min(1),
  screenTimeShare: z.number().min(0).max(100).optional(),
});

const detailInsightSchema = z.object({
  id: z.string().min(1),
  headline: z.string().min(1),
  analysisType: z.nativeEnum(AnalysisType),
  summary: z.string().min(1),
  impact: z.string().min(1),
  confidence: z.number().min(0).max(1),
  supportingEvidence: z.array(detailEvidenceSchema).min(1),
  recommendedActions: z.array(z.string().min(1)).optional(),
});

const narrativeBeatSchema = z.object({
  type: z.nativeEnum(BeatType),
  description: z.string().min(1),
  pages: z
    .object({
      start: z.number().int().nonnegative(),
      end: z.number().int().nonnegative(),
    })
    .refine((pages) => pages.start <= pages.end, {
      message: "يجب ألا يتجاوز رقم الصفحة النهائية الصفحة الابتدائية.",
    })
    .optional(),
  intensity: z.number().min(0).max(100).optional(),
});

const conflictInsightSchema = z.object({
  type: z.nativeEnum(ConflictType),
  antagonistType: z.nativeEnum(AntagonistType),
  status: z.enum(["unresolved", "escalating", "resolving", "resolved"]),
  summary: z.string().min(1),
  stakes: z.string().min(1),
});

const characterRelationshipSchema = z.object({
  characters: z.array(z.string().min(1)).min(1),
  relationshipType: z.nativeEnum(RelationshipType),
  tone: z.string().min(1),
  strength: z.number().min(0).max(100),
  notes: z.string().min(1).optional(),
});

const detailMetricSchema = z.object({
  name: z.string().min(1),
  score: z.number().min(0).max(100),
  weight: z.number().min(0).max(1).optional(),
  justification: z.string().min(1),
});

const moduleDetailSectionSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  focus: z.nativeEnum(AnalysisType),
  expositionMethod: z.nativeEnum(ExpositionMethod),
  summary: z.string().min(1),
  personas: z.array(characterPersonaSchema).optional(),
  insights: z.array(detailInsightSchema).min(1),
  beats: z.array(narrativeBeatSchema).optional(),
  conflicts: z.array(conflictInsightSchema).optional(),
  relationships: z.array(characterRelationshipSchema).optional(),
  metrics: z.array(detailMetricSchema).optional(),
});

const advancedScreenplayMetadataSchema = z.object({
  workId: z.string().min(1),
  workTitle: z.string().min(1),
  workFormat: z.nativeEnum(WorkFormat),
  genres: z.array(z.nativeEnum(Genre)).min(1),
  primaryAudience: z.nativeEnum(Audience),
  secondaryAudiences: z.array(z.nativeEnum(Audience)).optional(),
  developmentStage: z.nativeEnum(DevelopmentStage),
  priority: z.nativeEnum(Priority),
  categories: z.array(z.nativeEnum(Category)).min(1),
  language: z.string().min(2),
  locale: z.string().regex(/^[a-z]{2}-[A-Z]{2}$/u, "صيغة اللغة المحلية يجب أن تكون مثل ar-EG.").optional(),
  analyst: z.string().min(1),
  collaborators: z.array(z.string().min(1)).min(1),
  createdAt: isoDateTimeSchema,
  updatedAt: isoDateTimeSchema.optional(),
  analysisWindow: analysisWindowSchema,
  wordCount: z.number().int().positive().optional(),
  runtimeMinutes: z.number().int().positive().optional(),
  logline: z.string().min(1).optional(),
  referenceWorks: z.array(z.string().min(1)).optional(),
  productionCompany: z.string().min(1).optional(),
  notes: z.array(z.string().min(1)).optional(),
});

const recommendationSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  priority: z.nativeEnum(Priority),
  category: z.nativeEnum(Category),
  focus: z.nativeEnum(AnalysisType),
  estimatedEffortHours: z.number().min(0),
  owner: z.string().min(1),
  impact: z.string().min(1),
  dependencies: z.array(z.string().min(1)).optional(),
  successCriteria: z.array(z.string().min(1)).min(1),
});

const qualityMetricsSchema = z.object({
  narrativeCohesion: z.number().min(0).max(100),
  characterDepth: z.number().min(0).max(100),
  dialogueAuthenticity: z.number().min(0).max(100),
  pacingControl: z.number().min(0).max(100),
  thematicResonance: z.number().min(0).max(100),
  originality: z.number().min(0).max(100),
  productionFeasibility: z.number().min(0).max(100),
  audienceAlignment: z.number().min(0).max(100),
  localizationReadiness: z.number().min(0).max(100),
  confidenceInterval: z.object({
    lowerBound: z.number().min(0).max(100),
    upperBound: z.number().min(0).max(100),
  }).refine((interval) => interval.lowerBound <= interval.upperBound, {
    message: "يجب أن يكون الحد الأعلى أكبر أو مساوياً للحد الأدنى.",
  }),
  qualitativeNotes: z.array(z.string().min(1)).min(1),
});

const nextStepItemSchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  owner: z.string().min(1),
  dueDate: isoDateTimeSchema,
  priority: z.nativeEnum(Priority),
  status: z.enum(["planned", "in_progress", "blocked", "completed"]),
  successCriteria: z.array(z.string().min(1)).min(1),
});

const reviewMilestoneSchema = z.object({
  milestone: z.string().min(1),
  date: isoDateTimeSchema,
  focus: z.nativeEnum(AnalysisType),
  notes: z.string().min(1).optional(),
});

const communicationStakeholderSchema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  channel: z.string().min(1),
  cadence: z.string().min(1),
});

const nextStepsSchema = z.object({
  immediate: z.array(nextStepItemSchema).min(1),
  upcoming: z.array(nextStepItemSchema).optional().default([]),
  reviewSchedule: z.array(reviewMilestoneSchema).min(1),
  communicationPlan: z.object({
    stakeholders: z.array(communicationStakeholderSchema).min(1),
    notes: z.string().min(1).optional(),
  }),
});

export const AdvancedScreenplayModuleResultSchema = z.object({
  title: z.string().min(1),
  summary: z.string().min(1),
  metadata: advancedScreenplayMetadataSchema,
  details: z.array(moduleDetailSectionSchema).min(1),
  recommendations: z.array(recommendationSchema),
  quality_metrics: qualityMetricsSchema,
  next_steps: nextStepsSchema,
});

export type AdvancedScreenplayModuleResultType = z.infer<
  typeof AdvancedScreenplayModuleResultSchema
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type _AssertAdvancedScreenplayModuleResult = [
  AdvancedScreenplayModuleResult extends AdvancedScreenplayModuleResultType ? true : never,
  AdvancedScreenplayModuleResultType extends AdvancedScreenplayModuleResult ? true : never,
];
