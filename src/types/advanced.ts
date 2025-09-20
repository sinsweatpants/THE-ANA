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
export interface AudienceResonanceSegment {
  segmentId: string;
  descriptor: string;
  sizeEstimate?: number;
  engagementDrivers: string[];
  dropOffRisks: string[];
  preferredChannels?: string[];
}

export interface AudiencePersonaFit {
  primaryPersona: string;
  alignmentScore: number;
  supportingPersonas: string[];
  gaps: string[];
}

export interface CulturalSensitivityIssue {
  id: string;
  description: string;
  severity: "low" | "medium" | "high";
  regions: string[];
}

export interface CulturalSensitivityFix {
  issueId: string;
  action: string;
  owner?: string;
}

export interface RetentionRiskPoint {
  timestamp: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface AudienceResonanceDetail {
  segments: AudienceResonanceSegment[];
  persona_fit: AudiencePersonaFit;
  cultural_sensitivity: {
    issues: CulturalSensitivityIssue[];
    fixes: CulturalSensitivityFix[];
  };
  hook_strength: number;
  retention_risk_points: RetentionRiskPoint[];
}

export interface CharacterArcDetail {
  character: string;
  trajectory: string;
  status: "stable" | "growing" | "regressing";
}

export interface CharacterWoundDetail {
  character: string;
  wound: string;
  manifestation: string;
}

export interface CharacterLieDetail {
  character: string;
  lie: string;
  truth: string;
}

export interface CharacterTransformationDetail {
  character: string;
  from: string;
  to: string;
  catalyst: string;
}

export interface CharacterConsistencyFlag {
  character: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface CharacterDeepAnalyzerDetail {
  arcs: CharacterArcDetail[];
  wounds: CharacterWoundDetail[];
  lies: CharacterLieDetail[];
  transformations: CharacterTransformationDetail[];
  screen_time_map: Record<string, number>;
  consistency_flags: CharacterConsistencyFlag[];
}

export interface CharacterNetworkNode {
  id: string;
  label: string;
  role?: string;
  weight?: number;
}

export interface CharacterNetworkEdge {
  source: string;
  target: string;
  relationship: string;
  weight?: number;
}

export interface CharacterNetworkCommunity {
  id: string;
  members: string[];
  descriptor?: string;
}

export interface CharacterConflictHotspot {
  between: string[];
  summary: string;
  intensity: number;
  scenes?: string[];
}

export interface CharacterNetworkDetail {
  nodes: CharacterNetworkNode[];
  edges: CharacterNetworkEdge[];
  centrality: {
    degree: Record<string, number>;
    betweenness: Record<string, number>;
    closeness: Record<string, number>;
  };
  communities: CharacterNetworkCommunity[];
  conflict_hotspots: CharacterConflictHotspot[];
}

export interface CharacterVoiceFeature {
  lexicon: string[];
  avg_sentence_len: number;
  punctuation_profile: Record<string, number>;
  idioms: string[];
}

export interface CharacterVoiceDetail {
  voice_features: CharacterVoiceFeature;
  style_markers: Array<{ marker: string; evidence: string }>;
  exemplars: Array<{ scene: string; excerpt: string; note?: string }>;
}

export interface CompletionChecklistItem {
  id: string;
  description: string;
  status: "pending" | "in_progress" | "done";
  owner?: string;
}

export interface CompletionBlockingIssue {
  id: string;
  description: string;
  severity: "low" | "medium" | "high";
  mitigation?: string;
}

export interface CompletionInstructionsDetail {
  finalization_checklist: CompletionChecklistItem[];
  blocking_issues: CompletionBlockingIssue[];
  release_notes: string;
}

export interface ConflictDialogueScenario {
  id: string;
  setup: string;
  conflict_level: "low" | "medium" | "high";
  summary: string;
}

export interface ConflictDialogueVariationGroup {
  low: string[];
  medium: string[];
  high: string[];
}

export interface PowerShiftEntry {
  turn: number;
  dominant_character: string;
  description: string;
}

export interface InterruptionMetrics {
  total_interruptions: number;
  avg_gap_seconds: number;
  dominant_interruptor?: string;
}

export interface ConflictDialogueGeneratorDetail {
  scenarios: ConflictDialogueScenario[];
  variations_by_heat: ConflictDialogueVariationGroup;
  power_shift_map: PowerShiftEntry[];
  interruption_metrics: InterruptionMetrics;
}

export interface ConflictDynamicsDetail {
  conflict_types: string[];
  triggers: string[];
  escalation_curve: Array<{ phase: string; intensity: number }>;
  resolution_paths: string[];
}

export interface CreativeIdeaMatrixEntry {
  axis_a: string;
  axis_b: string;
  concept: string;
  viability: number;
}

export interface CreativeHybridizationEntry {
  sources: string[];
  description: string;
  risk: "low" | "medium" | "high";
}

export interface CreativeDiscardRationale {
  idea: string;
  reason: string;
}

export interface CreativeInstructionsDetail {
  idea_matrix: CreativeIdeaMatrixEntry[];
  hybridizations: CreativeHybridizationEntry[];
  discard_rationale: CreativeDiscardRationale[];
}

export interface CulturalHistoricalMisstep {
  id: string;
  description: string;
  severity: "low" | "medium" | "high";
  recommended_fix: string;
}

export interface CulturalSourceReference {
  type: string;
  reference: string;
  notes?: string;
}

export interface LocalizationGuideline {
  region: string;
  notes: string;
}

export interface CulturalHistoricalAnalyzerDetail {
  authenticity_score: number;
  missteps: CulturalHistoricalMisstep[];
  sources: CulturalSourceReference[];
  localization_guidelines: LocalizationGuideline[];
}

export interface PowerDynamicsSegment {
  scene: string;
  dominant_character: string;
  shift?: string;
  notes?: string;
}

export interface DialogueInterruptions {
  counts_by_char: Record<string, number>;
  total: number;
}

export interface DialogueAdvancedAnalyzerDetail {
  naturalness: number;
  distinctiveness: number;
  subtext: number;
  power_dynamics: { segments: PowerDynamicsSegment[] };
  interruptions: DialogueInterruptions;
  exposition_balance: number;
}

export interface DialogueForensicsEntry {
  scene: string;
  excerpt: string;
  note?: string;
}

export interface DialogueRedundancyEntry {
  scene: string;
  lines: number;
  recommendation: string;
}

export interface DialogueForensicsDetail {
  clichés: DialogueForensicsEntry[];
  info_dumps: DialogueForensicsEntry[];
  anachronisms: DialogueForensicsEntry[];
  redundancy_map: DialogueRedundancyEntry[];
}

export interface ForeshadowingClue {
  scene: string;
  text: string;
  subtlety: number;
  payoff_scene: string;
  linkage_strength: number;
  type: string;
}

export interface MissedPayoff {
  clue_id: string;
  expected_payoff_scene: string;
  recommendation: string;
}

export interface ForeshadowingDetectorDetail {
  clues: ForeshadowingClue[];
  missed_payoffs: MissedPayoff[];
}

export interface ModuleContradictionEntry {
  module: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface PriorityAlignmentEntry {
  module: string;
  priority: Priority;
  status: "aligned" | "misaligned" | "pending";
}

export interface DependencyGraphEdge {
  from: string;
  to: string;
  relation: string;
}

export interface IntegratedInstructionsDetail {
  module_coherence_report: string;
  contradictions: ModuleContradictionEntry[];
  priority_alignment: PriorityAlignmentEntry[];
  dependency_graph: {
    nodes: string[];
    edges: DependencyGraphEdge[];
  };
}

export interface MetaphorMapEntry {
  motif: string;
  occurrences: number;
  tone: string;
}

export interface RhythmProfileDetail {
  cadence: string;
  sentence_variance: number;
  dominant_structure: string;
}

export interface OriginalityFlag {
  aspect: string;
  severity: "low" | "medium" | "high";
  note: string;
}

export interface LiteraryQualityAnalyzerDetail {
  imagery_density: number;
  metaphor_map: MetaphorMapEntry[];
  rhythm_profile: RhythmProfileDetail;
  diction_register: string;
  originality_flags: OriginalityFlag[];
}

export interface ComplianceRequirement {
  region: string;
  notes: string;
}

export interface RequiredEditEntry {
  id: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface RuntimeAdjustmentDetail {
  current_runtime: number;
  target_runtime: number;
  notes: string;
}

export interface PlatformAdapterDetail {
  platform_profile: string;
  compliance_requirements: ComplianceRequirement[];
  edits_required: RequiredEditEntry[];
  runtime_adjustments: RuntimeAdjustmentDetail;
}

export interface PlotPredictorEvent {
  event: string;
  probability: number;
  confidence?: number;
}

export interface TwistOption {
  description: string;
  impact: string;
  risk: "low" | "medium" | "high";
}

export interface PlotPredictorDetail {
  next_events: PlotPredictorEvent[];
  probability_map: Record<string, number>;
  predictability_risk: number;
  twist_options: TwistOption[];
}

export interface RiskRegisterEntry {
  id: string;
  prob: number;
  impact: string;
  mitigation: string;
}

export interface ScheduleBucketEntry {
  label: string;
  items: string[];
}

export interface ProducibilityAnalyzerDetail {
  budget_tier: "low" | "medium" | "high";
  schedule_buckets: {
    by_location: ScheduleBucketEntry[];
    by_cast: ScheduleBucketEntry[];
  };
  risk_register: RiskRegisterEntry[];
  logistics_notes: string[];
}

export interface PrioritizedActionEntry {
  id: string;
  priority: Priority;
  category: Category;
  effort: number;
  impact: string;
}

export interface RoadmapPhase {
  id: string;
  name: string;
  duration_weeks: number;
  focus: string;
}

export interface SuccessMetricEntry {
  metric: string;
  target: string;
  measurement: string;
}

export interface RecommendationsGeneratorDetail {
  prioritized_actions: PrioritizedActionEntry[];
  roadmap: { phases: RoadmapPhase[] };
  success_metrics: SuccessMetricEntry[];
}

export interface RhythmBeatDetail {
  index: number;
  type: BeatType;
  tension: number;
  page_range: { start: number; end: number };
}

export interface RhythmMappingDetail {
  beats: RhythmBeatDetail[];
  tension_graph: Array<{ beat_index: number; tension: number }>;
  pacing_notes: string[];
}

export interface SceneGeneratorEntry {
  slug: string;
  slugline: string;
  body: string;
  rationale: string;
}

export interface SceneGeneratorDetail {
  prompts_used: string[];
  generated_scenes: SceneGeneratorEntry[];
  constraints_respected: string[];
}

export interface SceneOptimizerIssue {
  id: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface SceneOptimizerEdit {
  id: string;
  description: string;
  expected_gain: string;
}

export interface BeforeAfterSample {
  issue_id: string;
  before: string;
  after: string;
}

export interface SceneOptimizerImpactEstimate {
  pacing: number;
  clarity: number;
  emotional_intensity: number;
}

export interface SceneOptimizerDetail {
  issues_detected: SceneOptimizerIssue[];
  suggested_edits: SceneOptimizerEdit[];
  before_after_samples: BeforeAfterSample[];
  impact_estimate: SceneOptimizerImpactEstimate;
}

export interface StylometryDetail {
  function_words: Record<string, number>;
  ngrams: Record<string, number>;
  POS_profile: Record<string, number>;
}

export interface SignatureTraitEntry {
  trait: string;
  evidence: string;
}

export interface StyleFingerprintDetail {
  stylometry: StylometryDetail;
  comparative_corpus_refs: string[];
  signature_traits: SignatureTraitEntry[];
}

export interface TriggerFlagEntry {
  trigger: string;
  severity: "low" | "medium" | "high";
  scenes: string[];
}

export interface DemographicFitEntry {
  segment: string;
  alignment: number;
  notes: string;
}

export interface TargetAudienceAnalyzerDetail {
  rating_guidance: string;
  triggers_flags: TriggerFlagEntry[];
  suitability_score: number;
  demographic_fit: DemographicFitEntry[];
}

export interface TensionPlanEntry {
  point: string;
  rationale: string;
}

export interface HotspotSuggestion {
  scene: string;
  suggestion: string;
  expected_tension: number;
}

export interface RedistributionEntry {
  from: string;
  to: string;
  action: string;
}

export interface TensionOptimizerDetail {
  slack_points: TensionPlanEntry[];
  hotspot_suggestions: HotspotSuggestion[];
  redistribution_plan: RedistributionEntry[];
  revised_tension_curve: Array<{ index: number; tension: number }>;
}

export interface ThemeCandidateEntry {
  theme: string;
  strength: number;
}

export interface CounterpointEntry {
  theme: string;
  description: string;
}

export interface ThematicMiningDetail {
  theme_candidates: ThemeCandidateEntry[];
  evidence_map: { by_scene: Record<string, string[]> };
  counterpoints: CounterpointEntry[];
  clarity_score: number;
}

export interface ThemesMessagesAnalyzerDetail {
  explicit_messages: string[];
  implicit_messages: string[];
  alignment_with_themes: string;
  risk_of_misreading: string;
}

export interface ShotSuggestionEntry {
  scene: string;
  suggestion: string;
  lens?: string;
}

export interface CameraMoveEntry {
  scene: string;
  move: string;
  purpose: string;
}

export interface LightingNoteEntry {
  scene: string;
  note: string;
}

export interface ActionSequenceQualityEntry {
  sequence: string;
  score: number;
  notes: string;
}

export interface VisualCinematicAnalyzerDetail {
  shot_suggestions: ShotSuggestionEntry[];
  camera_moves: CameraMoveEntry[];
  lighting_notes: LightingNoteEntry[];
  action_sequence_quality: ActionSequenceQualityEntry[];
}

export interface VoiceInteractionIssue {
  scene: string;
  description: string;
}

export interface VoiceInteractionAnalyzerDetail {
  voiceover_usage: string;
  phone_radio_conventions: string;
  clarity_issues: VoiceInteractionIssue[];
  mix_guidelines: string[];
}

export interface WhatIfScenarioEntry {
  change: string;
  rationale: string;
  ripple_effects: string[];
  risks: string[];
  benefits: string[];
}

export interface DecisionMatrixOption {
  option: string;
  score: number;
  notes?: string;
}

export interface WhatIfScenarioAnalyzerDetail {
  scenarios: WhatIfScenarioEntry[];
  decision_matrix: {
    criteria: string[];
    options: DecisionMatrixOption[];
  };
}

export interface WorldBibleDetail {
  geography: string;
  culture: string;
  rules: string;
  economy: string;
  institutions: string;
}

export interface WorldBuilderInstructionsDetail {
  world_bible: WorldBibleDetail;
  consistency_checks: Array<{ aspect: string; status: "open" | "closed"; notes?: string }>;
  visual_motifs: Array<{ motif: string; description: string }>;
}

export interface EvidenceSampleEntry {
  id: string;
  description: string;
  confidence: number;
}

export interface AnalysisInstructionsDetail {
  scope_map: Record<string, string>;
  methods_used: string[];
  evidence_samples: EvidenceSampleEntry[];
  reliability_notes: string[];
}

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
  audience_resonance?: AudienceResonanceDetail;
  character_deep_analyzer?: CharacterDeepAnalyzerDetail;
  character_network?: CharacterNetworkDetail;
  character_voice?: CharacterVoiceDetail;
  completion_instructions?: CompletionInstructionsDetail;
  conflict_dialogue_generator?: ConflictDialogueGeneratorDetail;
  conflict_dynamics?: ConflictDynamicsDetail;
  creative_instructions?: CreativeInstructionsDetail;
  cultural_historical_analyzer?: CulturalHistoricalAnalyzerDetail;
  dialogue_advanced_analyzer?: DialogueAdvancedAnalyzerDetail;
  dialogue_forensics?: DialogueForensicsDetail;
  foreshadowing_detector?: ForeshadowingDetectorDetail;
  integrated_instructions?: IntegratedInstructionsDetail;
  literary_quality_analyzer?: LiteraryQualityAnalyzerDetail;
  platform_adapter?: PlatformAdapterDetail;
  plot_predictor?: PlotPredictorDetail;
  producibility_analyzer?: ProducibilityAnalyzerDetail;
  recommendations_generator?: RecommendationsGeneratorDetail;
  rhythm_mapping?: RhythmMappingDetail;
  scene_generator?: SceneGeneratorDetail;
  scene_optimizer?: SceneOptimizerDetail;
  style_fingerprint?: StyleFingerprintDetail;
  target_audience_analyzer?: TargetAudienceAnalyzerDetail;
  tension_optimizer?: TensionOptimizerDetail;
  thematic_mining?: ThematicMiningDetail;
  themes_messages_analyzer?: ThemesMessagesAnalyzerDetail;
  visual_cinematic_analyzer?: VisualCinematicAnalyzerDetail;
  voice_interaction_analyzer?: VoiceInteractionAnalyzerDetail;
  what_if_scenario_analyzer?: WhatIfScenarioAnalyzerDetail;
  world_builder_instructions?: WorldBuilderInstructionsDetail;
  analysis_instructions?: AnalysisInstructionsDetail;
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

const audienceResonanceSegmentSchema = z.object({
  segmentId: z.string().min(1),
  descriptor: z.string().min(1),
  sizeEstimate: z.number().positive().optional(),
  engagementDrivers: z.array(z.string().min(1)).min(1),
  dropOffRisks: z.array(z.string().min(1)).min(1),
  preferredChannels: z.array(z.string().min(1)).optional(),
});

const audiencePersonaFitSchema = z.object({
  primaryPersona: z.string().min(1),
  alignmentScore: z.number().min(0).max(1),
  supportingPersonas: z.array(z.string().min(1)).min(1),
  gaps: z.array(z.string().min(1)),
});

const culturalSensitivityIssueSchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
  regions: z.array(z.string().min(1)).min(1),
});

const culturalSensitivityFixSchema = z.object({
  issueId: z.string().min(1),
  action: z.string().min(1),
  owner: z.string().min(1).optional(),
});

const retentionRiskPointSchema = z.object({
  timestamp: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
});

const audienceResonanceDetailSchema = z.object({
  segments: z.array(audienceResonanceSegmentSchema).min(1),
  persona_fit: audiencePersonaFitSchema,
  cultural_sensitivity: z.object({
    issues: z.array(culturalSensitivityIssueSchema).min(1),
    fixes: z.array(culturalSensitivityFixSchema).min(1),
  }),
  hook_strength: z.number().min(0).max(1),
  retention_risk_points: z.array(retentionRiskPointSchema).min(1),
});

const characterArcDetailSchema = z.object({
  character: z.string().min(1),
  trajectory: z.string().min(1),
  status: z.enum(["stable", "growing", "regressing"]),
});

const characterWoundDetailSchema = z.object({
  character: z.string().min(1),
  wound: z.string().min(1),
  manifestation: z.string().min(1),
});

const characterLieDetailSchema = z.object({
  character: z.string().min(1),
  lie: z.string().min(1),
  truth: z.string().min(1),
});

const characterTransformationDetailSchema = z.object({
  character: z.string().min(1),
  from: z.string().min(1),
  to: z.string().min(1),
  catalyst: z.string().min(1),
});

const characterConsistencyFlagSchema = z.object({
  character: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
});

const characterDeepAnalyzerDetailSchema = z.object({
  arcs: z.array(characterArcDetailSchema).min(1),
  wounds: z.array(characterWoundDetailSchema).min(1),
  lies: z.array(characterLieDetailSchema).min(1),
  transformations: z.array(characterTransformationDetailSchema).min(1),
  screen_time_map: z.record(z.number().min(0)),
  consistency_flags: z.array(characterConsistencyFlagSchema).min(1),
});

const characterNetworkNodeSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  role: z.string().min(1).optional(),
  weight: z.number().nonnegative().optional(),
});

const characterNetworkEdgeSchema = z.object({
  source: z.string().min(1),
  target: z.string().min(1),
  relationship: z.string().min(1),
  weight: z.number().nonnegative().optional(),
});

const characterNetworkCommunitySchema = z.object({
  id: z.string().min(1),
  members: z.array(z.string().min(1)).min(1),
  descriptor: z.string().min(1).optional(),
});

const characterConflictHotspotSchema = z.object({
  between: z.array(z.string().min(1)).min(2),
  summary: z.string().min(1),
  intensity: z.number().min(0).max(100),
  scenes: z.array(z.string().min(1)).optional(),
});

const characterNetworkDetailSchema = z.object({
  nodes: z.array(characterNetworkNodeSchema).min(1),
  edges: z.array(characterNetworkEdgeSchema).min(1),
  centrality: z.object({
    degree: z.record(z.number().min(0)),
    betweenness: z.record(z.number().min(0)),
    closeness: z.record(z.number().min(0)),
  }),
  communities: z.array(characterNetworkCommunitySchema).min(1),
  conflict_hotspots: z.array(characterConflictHotspotSchema),
});

const characterVoiceFeatureSchema = z.object({
  lexicon: z.array(z.string().min(1)).min(1),
  avg_sentence_len: z.number().positive(),
  punctuation_profile: z.record(z.number().min(0)),
  idioms: z.array(z.string().min(1)),
});

const characterVoiceDetailSchema = z.object({
  voice_features: characterVoiceFeatureSchema,
  style_markers: z
    .array(
      z.object({
        marker: z.string().min(1),
        evidence: z.string().min(1),
      }),
    )
    .min(1),
  exemplars: z
    .array(
      z.object({
        scene: z.string().min(1),
        excerpt: z.string().min(1),
        note: z.string().min(1).optional(),
      }),
    )
    .min(1),
});

const completionChecklistItemSchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  status: z.enum(["pending", "in_progress", "done"]),
  owner: z.string().min(1).optional(),
});

const completionBlockingIssueSchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
  mitigation: z.string().min(1).optional(),
});

const completionInstructionsDetailSchema = z.object({
  finalization_checklist: z.array(completionChecklistItemSchema).min(1),
  blocking_issues: z.array(completionBlockingIssueSchema),
  release_notes: z.string().min(1),
});

const conflictDialogueScenarioSchema = z.object({
  id: z.string().min(1),
  setup: z.string().min(1),
  conflict_level: z.enum(["low", "medium", "high"]),
  summary: z.string().min(1),
});

const conflictDialogueVariationGroupSchema = z.object({
  low: z.array(z.string().min(1)),
  medium: z.array(z.string().min(1)),
  high: z.array(z.string().min(1)),
});

const powerShiftEntrySchema = z.object({
  turn: z.number().int().nonnegative(),
  dominant_character: z.string().min(1),
  description: z.string().min(1),
});

const interruptionMetricsSchema = z.object({
  total_interruptions: z.number().int().nonnegative(),
  avg_gap_seconds: z.number().min(0),
  dominant_interruptor: z.string().min(1).optional(),
});

const conflictDialogueGeneratorDetailSchema = z.object({
  scenarios: z.array(conflictDialogueScenarioSchema).min(1),
  variations_by_heat: conflictDialogueVariationGroupSchema,
  power_shift_map: z.array(powerShiftEntrySchema),
  interruption_metrics: interruptionMetricsSchema,
});

const conflictDynamicsDetailSchema = z.object({
  conflict_types: z.array(z.string().min(1)).min(1),
  triggers: z.array(z.string().min(1)).min(1),
  escalation_curve: z.array(
    z.object({
      phase: z.string().min(1),
      intensity: z.number().min(0).max(1),
    }),
  ),
  resolution_paths: z.array(z.string().min(1)),
});

const creativeIdeaMatrixEntrySchema = z.object({
  axis_a: z.string().min(1),
  axis_b: z.string().min(1),
  concept: z.string().min(1),
  viability: z.number().min(0).max(1),
});

const creativeHybridizationEntrySchema = z.object({
  sources: z.array(z.string().min(1)).min(1),
  description: z.string().min(1),
  risk: z.enum(["low", "medium", "high"]),
});

const creativeDiscardRationaleSchema = z.object({
  idea: z.string().min(1),
  reason: z.string().min(1),
});

const creativeInstructionsDetailSchema = z.object({
  idea_matrix: z.array(creativeIdeaMatrixEntrySchema).min(1),
  hybridizations: z.array(creativeHybridizationEntrySchema),
  discard_rationale: z.array(creativeDiscardRationaleSchema),
});

const culturalHistoricalMisstepSchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
  recommended_fix: z.string().min(1),
});

const culturalSourceReferenceSchema = z.object({
  type: z.string().min(1),
  reference: z.string().min(1),
  notes: z.string().min(1).optional(),
});

const localizationGuidelineSchema = z.object({
  region: z.string().min(1),
  notes: z.string().min(1),
});

const culturalHistoricalAnalyzerDetailSchema = z.object({
  authenticity_score: z.number().min(0).max(1),
  missteps: z.array(culturalHistoricalMisstepSchema),
  sources: z.array(culturalSourceReferenceSchema).min(1),
  localization_guidelines: z.array(localizationGuidelineSchema),
});

const powerDynamicsSegmentSchema = z.object({
  scene: z.string().min(1),
  dominant_character: z.string().min(1),
  shift: z.string().min(1).optional(),
  notes: z.string().min(1).optional(),
});

const dialogueInterruptionsSchema = z.object({
  counts_by_char: z.record(z.number().int().nonnegative()),
  total: z.number().int().nonnegative(),
});

const dialogueAdvancedAnalyzerDetailSchema = z.object({
  naturalness: z.number().min(0).max(1),
  distinctiveness: z.number().min(0).max(1),
  subtext: z.number().min(0).max(1),
  power_dynamics: z.object({ segments: z.array(powerDynamicsSegmentSchema).min(1) }),
  interruptions: dialogueInterruptionsSchema,
  exposition_balance: z.number().min(0).max(1),
});

const dialogueForensicsEntrySchema = z.object({
  scene: z.string().min(1),
  excerpt: z.string().min(1),
  note: z.string().min(1).optional(),
});

const dialogueRedundancyEntrySchema = z.object({
  scene: z.string().min(1),
  lines: z.number().int().nonnegative(),
  recommendation: z.string().min(1),
});

const dialogueForensicsDetailSchema = z.object({
  clichés: z.array(dialogueForensicsEntrySchema),
  info_dumps: z.array(dialogueForensicsEntrySchema),
  anachronisms: z.array(dialogueForensicsEntrySchema),
  redundancy_map: z.array(dialogueRedundancyEntrySchema),
});

const foreshadowingClueSchema = z.object({
  scene: z.string().min(1),
  text: z.string().min(1),
  subtlety: z.number().min(1).max(10),
  payoff_scene: z.string().min(1),
  linkage_strength: z.number().min(1).max(10),
  type: z.string().min(1),
});

const missedPayoffSchema = z.object({
  clue_id: z.string().min(1),
  expected_payoff_scene: z.string().min(1),
  recommendation: z.string().min(1),
});

const foreshadowingDetectorDetailSchema = z.object({
  clues: z.array(foreshadowingClueSchema).min(1),
  missed_payoffs: z.array(missedPayoffSchema),
});

const moduleContradictionEntrySchema = z.object({
  module: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
});

const priorityAlignmentEntrySchema = z.object({
  module: z.string().min(1),
  priority: z.nativeEnum(Priority),
  status: z.enum(["aligned", "misaligned", "pending"]),
});

const dependencyGraphEdgeSchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  relation: z.string().min(1),
});

const integratedInstructionsDetailSchema = z.object({
  module_coherence_report: z.string().min(1),
  contradictions: z.array(moduleContradictionEntrySchema),
  priority_alignment: z.array(priorityAlignmentEntrySchema),
  dependency_graph: z.object({
    nodes: z.array(z.string().min(1)).min(1),
    edges: z.array(dependencyGraphEdgeSchema),
  }),
});

const metaphorMapEntrySchema = z.object({
  motif: z.string().min(1),
  occurrences: z.number().int().nonnegative(),
  tone: z.string().min(1),
});

const rhythmProfileDetailSchema = z.object({
  cadence: z.string().min(1),
  sentence_variance: z.number().min(0),
  dominant_structure: z.string().min(1),
});

const originalityFlagSchema = z.object({
  aspect: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
  note: z.string().min(1),
});

const literaryQualityAnalyzerDetailSchema = z.object({
  imagery_density: z.number().min(0).max(1),
  metaphor_map: z.array(metaphorMapEntrySchema),
  rhythm_profile: rhythmProfileDetailSchema,
  diction_register: z.string().min(1),
  originality_flags: z.array(originalityFlagSchema),
});

const complianceRequirementSchema = z.object({
  region: z.string().min(1),
  notes: z.string().min(1),
});

const requiredEditEntrySchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
});

const runtimeAdjustmentDetailSchema = z.object({
  current_runtime: z.number().min(0),
  target_runtime: z.number().min(0),
  notes: z.string().min(1),
});

const platformAdapterDetailSchema = z.object({
  platform_profile: z.string().min(1),
  compliance_requirements: z.array(complianceRequirementSchema),
  edits_required: z.array(requiredEditEntrySchema),
  runtime_adjustments: runtimeAdjustmentDetailSchema,
});

const plotPredictorEventSchema = z.object({
  event: z.string().min(1),
  probability: z.number().min(0).max(1),
  confidence: z.number().min(0).max(1).optional(),
});

const twistOptionSchema = z.object({
  description: z.string().min(1),
  impact: z.string().min(1),
  risk: z.enum(["low", "medium", "high"]),
});

const plotPredictorDetailSchema = z.object({
  next_events: z.array(plotPredictorEventSchema),
  probability_map: z.record(z.number().min(0).max(1)),
  predictability_risk: z.number().min(0).max(1),
  twist_options: z.array(twistOptionSchema),
});

const riskRegisterEntrySchema = z.object({
  id: z.string().min(1),
  prob: z.number().min(0).max(1),
  impact: z.string().min(1),
  mitigation: z.string().min(1),
});

const scheduleBucketEntrySchema = z.object({
  label: z.string().min(1),
  items: z.array(z.string().min(1)),
});

const producibilityAnalyzerDetailSchema = z.object({
  budget_tier: z.enum(["low", "medium", "high"]),
  schedule_buckets: z.object({
    by_location: z.array(scheduleBucketEntrySchema),
    by_cast: z.array(scheduleBucketEntrySchema),
  }),
  risk_register: z.array(riskRegisterEntrySchema),
  logistics_notes: z.array(z.string().min(1)),
});

const prioritizedActionEntrySchema = z.object({
  id: z.string().min(1),
  priority: z.nativeEnum(Priority),
  category: z.nativeEnum(Category),
  effort: z.number().min(0),
  impact: z.string().min(1),
});

const roadmapPhaseSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  duration_weeks: z.number().min(0),
  focus: z.string().min(1),
});

const successMetricEntrySchema = z.object({
  metric: z.string().min(1),
  target: z.string().min(1),
  measurement: z.string().min(1),
});

const recommendationsGeneratorDetailSchema = z.object({
  prioritized_actions: z.array(prioritizedActionEntrySchema).min(1),
  roadmap: z.object({ phases: z.array(roadmapPhaseSchema).min(1) }),
  success_metrics: z.array(successMetricEntrySchema),
});

const rhythmBeatDetailSchema = z.object({
  index: z.number().int().nonnegative(),
  type: z.nativeEnum(BeatType),
  tension: z.number().min(1).max(10),
  page_range: z.object({
    start: z.number().int().nonnegative(),
    end: z.number().int().nonnegative(),
  }),
});

const rhythmMappingDetailSchema = z.object({
  beats: z.array(rhythmBeatDetailSchema).min(1),
  tension_graph: z.array(
    z.object({
      beat_index: z.number().int().nonnegative(),
      tension: z.number().min(0).max(10),
    }),
  ),
  pacing_notes: z.array(z.string().min(1)),
});

const sceneGeneratorEntrySchema = z.object({
  slug: z.string().min(1),
  slugline: z.string().min(1),
  body: z.string().min(1),
  rationale: z.string().min(1),
});

const sceneGeneratorDetailSchema = z.object({
  prompts_used: z.array(z.string().min(1)),
  generated_scenes: z.array(sceneGeneratorEntrySchema).min(1),
  constraints_respected: z.array(z.string().min(1)),
});

const sceneOptimizerIssueSchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
});

const sceneOptimizerEditSchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  expected_gain: z.string().min(1),
});

const beforeAfterSampleSchema = z.object({
  issue_id: z.string().min(1),
  before: z.string().min(1),
  after: z.string().min(1),
});

const sceneOptimizerImpactEstimateSchema = z.object({
  pacing: z.number().min(0).max(1),
  clarity: z.number().min(0).max(1),
  emotional_intensity: z.number().min(0).max(1),
});

const sceneOptimizerDetailSchema = z.object({
  issues_detected: z.array(sceneOptimizerIssueSchema),
  suggested_edits: z.array(sceneOptimizerEditSchema),
  before_after_samples: z.array(beforeAfterSampleSchema),
  impact_estimate: sceneOptimizerImpactEstimateSchema,
});

const stylometryDetailSchema = z.object({
  function_words: z.record(z.number().min(0)),
  ngrams: z.record(z.number().min(0)),
  POS_profile: z.record(z.number().min(0)),
});

const signatureTraitEntrySchema = z.object({
  trait: z.string().min(1),
  evidence: z.string().min(1),
});

const styleFingerprintDetailSchema = z.object({
  stylometry: stylometryDetailSchema,
  comparative_corpus_refs: z.array(z.string().min(1)),
  signature_traits: z.array(signatureTraitEntrySchema),
});

const triggerFlagEntrySchema = z.object({
  trigger: z.string().min(1),
  severity: z.enum(["low", "medium", "high"]),
  scenes: z.array(z.string().min(1)),
});

const demographicFitEntrySchema = z.object({
  segment: z.string().min(1),
  alignment: z.number().min(0).max(1),
  notes: z.string().min(1),
});

const targetAudienceAnalyzerDetailSchema = z.object({
  rating_guidance: z.string().min(1),
  triggers_flags: z.array(triggerFlagEntrySchema),
  suitability_score: z.number().min(0).max(1),
  demographic_fit: z.array(demographicFitEntrySchema),
});

const tensionPlanEntrySchema = z.object({
  point: z.string().min(1),
  rationale: z.string().min(1),
});

const hotspotSuggestionSchema = z.object({
  scene: z.string().min(1),
  suggestion: z.string().min(1),
  expected_tension: z.number().min(0).max(1),
});

const redistributionEntrySchema = z.object({
  from: z.string().min(1),
  to: z.string().min(1),
  action: z.string().min(1),
});

const tensionOptimizerDetailSchema = z.object({
  slack_points: z.array(tensionPlanEntrySchema),
  hotspot_suggestions: z.array(hotspotSuggestionSchema),
  redistribution_plan: z.array(redistributionEntrySchema),
  revised_tension_curve: z.array(
    z.object({
      index: z.number().int().nonnegative(),
      tension: z.number().min(0).max(1),
    }),
  ),
});

const themeCandidateEntrySchema = z.object({
  theme: z.string().min(1),
  strength: z.number().min(0).max(1),
});

const counterpointEntrySchema = z.object({
  theme: z.string().min(1),
  description: z.string().min(1),
});

const thematicMiningDetailSchema = z.object({
  theme_candidates: z.array(themeCandidateEntrySchema),
  evidence_map: z.object({ by_scene: z.record(z.array(z.string().min(1))) }),
  counterpoints: z.array(counterpointEntrySchema),
  clarity_score: z.number().min(0).max(1),
});

const themesMessagesAnalyzerDetailSchema = z.object({
  explicit_messages: z.array(z.string().min(1)),
  implicit_messages: z.array(z.string().min(1)),
  alignment_with_themes: z.string().min(1),
  risk_of_misreading: z.string().min(1),
});

const shotSuggestionEntrySchema = z.object({
  scene: z.string().min(1),
  suggestion: z.string().min(1),
  lens: z.string().min(1).optional(),
});

const cameraMoveEntrySchema = z.object({
  scene: z.string().min(1),
  move: z.string().min(1),
  purpose: z.string().min(1),
});

const lightingNoteEntrySchema = z.object({
  scene: z.string().min(1),
  note: z.string().min(1),
});

const actionSequenceQualityEntrySchema = z.object({
  sequence: z.string().min(1),
  score: z.number().min(0).max(100),
  notes: z.string().min(1),
});

const visualCinematicAnalyzerDetailSchema = z.object({
  shot_suggestions: z.array(shotSuggestionEntrySchema),
  camera_moves: z.array(cameraMoveEntrySchema),
  lighting_notes: z.array(lightingNoteEntrySchema),
  action_sequence_quality: z.array(actionSequenceQualityEntrySchema),
});

const voiceInteractionIssueSchema = z.object({
  scene: z.string().min(1),
  description: z.string().min(1),
});

const voiceInteractionAnalyzerDetailSchema = z.object({
  voiceover_usage: z.string().min(1),
  phone_radio_conventions: z.string().min(1),
  clarity_issues: z.array(voiceInteractionIssueSchema),
  mix_guidelines: z.array(z.string().min(1)),
});

const whatIfScenarioEntrySchema = z.object({
  change: z.string().min(1),
  rationale: z.string().min(1),
  ripple_effects: z.array(z.string().min(1)),
  risks: z.array(z.string().min(1)),
  benefits: z.array(z.string().min(1)),
});

const decisionMatrixOptionSchema = z.object({
  option: z.string().min(1),
  score: z.number().min(0).max(1),
  notes: z.string().min(1).optional(),
});

const whatIfScenarioAnalyzerDetailSchema = z.object({
  scenarios: z.array(whatIfScenarioEntrySchema).min(1),
  decision_matrix: z.object({
    criteria: z.array(z.string().min(1)),
    options: z.array(decisionMatrixOptionSchema),
  }),
});

const worldBibleDetailSchema = z.object({
  geography: z.string().min(1),
  culture: z.string().min(1),
  rules: z.string().min(1),
  economy: z.string().min(1),
  institutions: z.string().min(1),
});

const worldBuilderInstructionsDetailSchema = z.object({
  world_bible: worldBibleDetailSchema,
  consistency_checks: z.array(
    z.object({
      aspect: z.string().min(1),
      status: z.enum(["open", "closed"]),
      notes: z.string().min(1).optional(),
    }),
  ),
  visual_motifs: z.array(
    z.object({
      motif: z.string().min(1),
      description: z.string().min(1),
    }),
  ),
});

const evidenceSampleEntrySchema = z.object({
  id: z.string().min(1),
  description: z.string().min(1),
  confidence: z.number().min(0).max(1),
});

const analysisInstructionsDetailSchema = z.object({
  scope_map: z.record(z.string().min(1)),
  methods_used: z.array(z.string().min(1)),
  evidence_samples: z.array(evidenceSampleEntrySchema),
  reliability_notes: z.array(z.string().min(1)),
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
  audience_resonance: audienceResonanceDetailSchema.optional(),
  character_deep_analyzer: characterDeepAnalyzerDetailSchema.optional(),
  character_network: characterNetworkDetailSchema.optional(),
  character_voice: characterVoiceDetailSchema.optional(),
  completion_instructions: completionInstructionsDetailSchema.optional(),
  conflict_dialogue_generator: conflictDialogueGeneratorDetailSchema.optional(),
  conflict_dynamics: conflictDynamicsDetailSchema.optional(),
  creative_instructions: creativeInstructionsDetailSchema.optional(),
  cultural_historical_analyzer: culturalHistoricalAnalyzerDetailSchema.optional(),
  dialogue_advanced_analyzer: dialogueAdvancedAnalyzerDetailSchema.optional(),
  dialogue_forensics: dialogueForensicsDetailSchema.optional(),
  foreshadowing_detector: foreshadowingDetectorDetailSchema.optional(),
  integrated_instructions: integratedInstructionsDetailSchema.optional(),
  literary_quality_analyzer: literaryQualityAnalyzerDetailSchema.optional(),
  platform_adapter: platformAdapterDetailSchema.optional(),
  plot_predictor: plotPredictorDetailSchema.optional(),
  producibility_analyzer: producibilityAnalyzerDetailSchema.optional(),
  recommendations_generator: recommendationsGeneratorDetailSchema.optional(),
  rhythm_mapping: rhythmMappingDetailSchema.optional(),
  scene_generator: sceneGeneratorDetailSchema.optional(),
  scene_optimizer: sceneOptimizerDetailSchema.optional(),
  style_fingerprint: styleFingerprintDetailSchema.optional(),
  target_audience_analyzer: targetAudienceAnalyzerDetailSchema.optional(),
  tension_optimizer: tensionOptimizerDetailSchema.optional(),
  thematic_mining: thematicMiningDetailSchema.optional(),
  themes_messages_analyzer: themesMessagesAnalyzerDetailSchema.optional(),
  visual_cinematic_analyzer: visualCinematicAnalyzerDetailSchema.optional(),
  voice_interaction_analyzer: voiceInteractionAnalyzerDetailSchema.optional(),
  what_if_scenario_analyzer: whatIfScenarioAnalyzerDetailSchema.optional(),
  world_builder_instructions: worldBuilderInstructionsDetailSchema.optional(),
  analysis_instructions: analysisInstructionsDetailSchema.optional(),
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
