export enum TaskType {
  // الوظائف الأساسية المحدثة
  ANALYSIS = 'analysis',
  CREATIVE = 'creative',
  INTEGRATED = 'integrated',
  COMPLETION = 'completion',
  
  // وظائف تحليلية متقدمة موجودة
  RHYTHM_MAPPING = 'rhythm_mapping', // رسم خرائط الإيقاع الدرامي
  CHARACTER_NETWORK = 'character_network', // تحليل شبكات الشخصيات
  DIALOGUE_FORENSICS = 'dialogue_forensics', // تحليل الحوار الجنائي
  THEMATIC_MINING = 'thematic_mining', // التنقيب عن الموضوعات العميقة
  STYLE_FINGERPRINT = 'style_fingerprint', // بصمة الأسلوب الفريدة
  CONFLICT_DYNAMICS = 'conflict_dynamics', // ديناميكيات الصراع
  
  // وظائف إبداعية متطورة موجودة
  ADAPTIVE_REWRITING = 'adaptive_rewriting', // إعادة الكتابة التكيفية
  SCENE_GENERATOR = 'scene_generator', // مولد المشاهد الذكي
  CHARACTER_VOICE = 'character_voice', // محاكي صوت الشخصيات
  WORLD_BUILDER = 'world_builder', // باني العوالم الدرامية
  
  // وظائف تنبؤية وتوليدية موجودة
  PLOT_PREDICTOR = 'plot_predictor', // متنبئ مسار الحبكة
  TENSION_OPTIMIZER = 'tension_optimizer', // محسن التوتر الدرامي
  AUDIENCE_RESONANCE = 'audience_resonance', // محلل صدى الجمهور
  PLATFORM_ADAPTER = 'platform_adapter', // محول المنصات الذكي

  // --- الوحدات الجديدة (Units 3-11) ---
  // الوحدة 3: مُحلل الشخصيات العميق
  CHARACTER_DEEP_ANALYZER = 'character_deep_analyzer',
  // الوحدة 4: محلل الحوار المتطور
  DIALOGUE_ADVANCED_ANALYZER = 'dialogue_advanced_analyzer',
  // الوحدة 5: محلل السياق البصري والسينمائي
  VISUAL_CINEMATIC_ANALYZER = 'visual_cinematic_analyzer',
  // الوحدة 6: محلل الموضوعات والرسائل
  THEMES_MESSAGES_ANALYZER = 'themes_messages_analyzer',
  // الوحدة 7: محلل السياق الثقافي والتاريخي
  CULTURAL_HISTORICAL_ANALYZER = 'cultural_historical_analyzer',
  // الوحدة 8: محلل القابلية للإنتاج
  PRODUCIBILITY_ANALYZER = 'producibility_analyzer',
  // الوحدة 9: محلل الجمهور المستهدف
  TARGET_AUDIENCE_ANALYZER = 'target_audience_analyzer',
  // الوحدة 10: محلل الجودة الأدبية
  LITERARY_QUALITY_ANALYZER = 'literary_quality_analyzer',
  // الوحدة 11: مولد التوصيات والتحسينات
  RECOMMENDATIONS_GENERATOR = 'recommendations_generator',
}

export enum TaskCategory {
  ANALYSIS = 'التحليل المتقدم',
  CREATIVE = 'الإبداع المتطور',
  PREDICTIVE = 'التنبؤ والتحسين',
  CORE = 'المهام الأساسية',
  ADVANCED_MODULES = 'وحدات التحليل المتخصصة' 
}

// Defined types based on user feedback
export interface DataPoint {
  x: number | string; // Can be a numerical value (e.g., time) or categorical (e.g., scene number)
  y: number;          // The value for the point (e.g., tension level)
  label?: string;     // Optional label for the data point
}

export interface NetworkGraphNode {
  id: string;         // Unique identifier for the node (e.g., character name)
  label: string;      // Display label for the node
  group?: string | number; // Optional group for coloring or categorization
  value?: number;     // Optional value associated with the node (e.g., importance)
}

export interface NetworkGraphEdge {
  from: string;       // ID of the source node
  to: string;         // ID of the target node
  label?: string;      // Optional label for the edge (e.g., relationship type)
  value?: number;     // Optional weight or strength of the connection
  arrows?: string;    // e.g., 'to', 'from', 'middle' to indicate direction
}

export interface NetworkGraph {
  nodes: NetworkGraphNode[];
  edges: NetworkGraphEdge[];
  description?: string; // A textual summary or interpretation of the graph
}


// Placeholder for complex nested types.
// In a real scenario, these would be fully defined.
export type RhythmPattern = any;
export type ConflictData = any;
export type EditableSection = any;
export type Scenario = any;
export type WhatIfResult = any;
export type ImpactMetrics = any;
export type GrowthPoint = any;
export type VocabularyData = any;
export type Pattern = any;
export type EmotionData = any;
export type RelationshipEdge = NetworkGraphEdge; // Using defined type
export type TimelineEvent = any;
export type Development = any;
export type Conflict = any;
export type Breakpoint = any;
export type TransitionData = any;
export type WorkComparison = any;
export type DeviationData = any;
export type ComplexityMetrics = any;
export type Device = any;
export type Phrase = any;
export type TemporalPattern = any;
export type RevealStrategy = any;
export type VoiceCharacteristics = any;
export type Theme = any;
export type Symbol = any;
export type Philosophy = any;
export type Reference = any;
export type Feature = any;
export type EmotionCurve = DataPoint[]; // Using defined type
export type DemographicResponse = any;
export type PsychographicResponse = any;
export type CulturalResponse = any;
export type Controversy = any;
export type ViralPotential = any;
export type Sensitivity = any;
export type UniversalElement = any;
export type Modification = any;
export type Approach = any;
export type PlatformStrategy = any;
export type Setting = any;
export type AtmosphereData = any;
export type SensoryMap = any;
export type SpatialGraph = any;
export type Law = any;
export type Norm = any;
export type Code = any;
export type LogicSystem = any;
export type Timeline = any;
export type Mythology = any;
export type PowerMap = any;
export type Economy = any;
export type ConflictSource = any;
export type ThematicElement = any;
export type Constraint = any;
export type Possibility = any;
export type TensionPoint = DataPoint; // Using defined type
export type StructuralChange = any;
export type PaceData = any;
export type CliffhangerPoint = any;
export type Demographics = any;
export type Adjustment = any;
export type Hook = any;
export type Interactive = any;
export type Episode = any;
export type BingeStrategy = any;
export type SocialFeature = any;
export type PlotPoint = any;
export type PlotPath = any;
export type Pitfall = any;
export type SurpriseElement = any;
export type CoherenceCheck = any;
export type StructuredContent = any;
export type FileMetadata = any;
export type InitialInsights = any;
export type UnifiedContent = any;
export type ConsistencyReport = any;
export type VisualData = any;
export type AudioReference = any;
export type MultimediaInsights = any;
export type ActionItem = any;
export type ImprovementPlan = any;
export type StrategicGoal = any;
export type PrioritizedList = any;
export type ImplementationTracker = any;
export type ImpactReport = any;
export type UsageData = any;
export type UserProfile = any;
// Preferences was already defined, ensure no collision
// export type Preferences = any; 
export type UIConfiguration = any;
export type UserFeedback = any;
export type FeedbackDatabase = any;
export type AlgorithmUpdate = any;
export type QualityMetrics = any;
export type TextCorpus = any;
export type Rule = any;
// EnhancedResult was already defined, ensure no collision
// export type EnhancedResult = any; 
export type MarketData = any;
export type SuccessMetrics = any;
export type Optimization = any;
export type Risk = any;
export type RiskMatrix = any;
export type MitigationStrategy = any;
export type MarketAnalysis = any;
// Opportunity was already defined, use existing
// export type Opportunity = any; 
export type Innovation = any;
export type PotentialReport = any;
export type InnovativeIdea = any;


// واجهة نتائج التحليل المتقدمة
export interface EnhancedAnalysisResult {
  title: string;
  content: string; // Could be a summary or main textual output if JSON is rich
  confidence?: number;
  metrics?: {
    dramaticTension?: number;
    paceIndex?: number;
    dialogueEfficiency?: number;
    structuralIntegrity?: number;
    characterDepth?: number;
    thematicResonance?: number;
  };
  visualizations?: {
    tensionCurve?: DataPoint[];
    characterNetwork?: NetworkGraph;
    rhythmMap?: RhythmPattern[]; // Could be array of DataPoint arrays for multiple rhythms
    conflictMatrix?: ConflictData[][]; // Or a more structured matrix type
  };
  recommendations?: SmartRecommendation[];
  interactiveElements?: {
    editableSections?: EditableSection[];
    alternativeScenarios?: Scenario[];
    whatIfAnalysis?: WhatIfResult[];
  };
}

// واجهة للتوصيات الذكية
export interface SmartRecommendation {
  id: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  category: 'structure' | 'character' | 'dialogue' | 'pacing' | 'theme' | 'other' | string; // Added string for future flexibility
  issue: string;
  solution: string;
  implementation?: {
    before: string;
    after: string;
    impact: ImpactMetrics;
  };
  aiConfidence?: number;
  estimatedEffort?: 'minimal' | 'moderate' | 'significant';
}

// واجهة لتحليل الشخصيات المتقدم
export interface CharacterAnalysis {
  id?: string; // Character ID or name
  name: string;
  content?: string; // Main textual output for character analysis summary
  psychologicalProfile?: {
    archetype?: string;
    motivations?: string[];
    fears?: string[];
    contradictions?: string[];
    growthArc?: GrowthPoint[];
  };
  dialogueAnalysis?: {
    voiceConsistency?: number; // 0-1
    vocabularyProfile?: VocabularyData; // Could be word frequencies or complexity scores
    speechPatterns?: Pattern[]; // Common phrases, sentence structures
    emotionalRange?: EmotionData[]; // Emotions expressed and their intensity
  };
  relationships?: NetworkGraph; // Using defined NetworkGraph for character relationships
  predictions?: {
    likelyDevelopments?: Development[];
    potentialConflicts?: Conflict[];
    characterBreakpoints?: Breakpoint[]; // Points where character might change significantly
  };
}

// واجهة لتحليل الإيقاع الدرامي
export interface RhythmAnalysis {
  overallPace?: 'slow' | 'moderate' | 'fast' | 'variable';
  content?: string; // Main textual output for rhythm analysis summary
  sceneAnalysis?: {
    sceneId: string;
    duration?: number; // Could be page count, word count, or estimated time
    intensity?: number; // 0-1 scale
    function?: 'exposition' | 'rising_action' | 'climax' | 'falling_action' | 'resolution' | 'other';
    transitions?: TransitionData[]; // How this scene transitions to the next
  }[];
  criticalPoints?: {
    location: number | string; // e.g., page number, scene ID, or % through text
    type: 'acceleration' | 'deceleration' | 'plateau' | 'spike' | 'turn';
    severity?: number; // 0-1
    recommendation?: string;
  }[];
  distribution?: { // Percentage or count
    actionScenes?: number;
    dialogueScenes?: number;
    contemplativeScenes?: number;
    transitionScenes?: number;
  };
  benchmarkComparison?: {
    genre?: string;
    similarWorks?: WorkComparison[]; // Comparison to known works
    deviationAnalysis?: DeviationData; // How it deviates from genre norms
  };
  rhythmMap?: DataPoint[]; // A specific visualization for the overall rhythm
}

export interface StyleFingerprintAnalysis {
  content?: string; // Main textual output summary
  linguisticSignature?: {
    sentenceComplexity?: ComplexityMetrics; // Avg sentence length, use of clauses
    vocabularyRichness?: number; // Type-token ratio, use of rare words
    syntacticPatterns?: Pattern[]; // Common sentence structures
    rhetoricalDevices?: Device[]; // Metaphors, similes, etc.
    uniquePhrases?: Phrase[]; // Phrases unique to this author/text
  };
  narrativeSignature?: {
    perspectivePreference?: string[]; // First person, third person limited/omniscient
    temporalManipulation?: TemporalPattern[]; // Flashbacks, flashforwards
    informationReveal?: RevealStrategy; // How information is given to the reader
    narrativeVoice?: VoiceCharacteristics; // Tone, style of narrator
  };
  thematicSignature?: {
    coreThemes?: Theme[]; // Identified major themes
    symbolSystem?: Symbol[]; // System of symbols used
    philosophicalUnderpinnings?: Philosophy[]; // Underlying philosophical ideas
    culturalReferences?: Reference[]; // References to cultural elements
  };
  uniqueness?: {
    similarityScores?: Map<string, number>; // Comparison with other authors/texts
    distinctiveFeatures?: Feature[]; // Features that make this style unique
    genreConformity?: number; // How much it conforms to genre conventions (0-1)
    innovationIndex?: number; // How innovative the style is (0-1)
  };
}

export interface AudienceResonanceAnalysis {
  content?: string; // Main textual output summary
  predictedResponse?: {
    emotionalImpact?: EmotionCurve[]; // Predicted emotional journey of the audience
    engagementLevel?: number; // Predicted engagement (0-1)
    shareability?: number; // Likelihood of being shared (0-1)
    memorability?: number; // How memorable the content is (0-1)
  };
  segmentAnalysis?: { // Analysis for different audience segments
    demographics?: DemographicResponse[];
    psychographics?: PsychographicResponse[];
    culturalGroups?: CulturalResponse[];
  };
  riskOpportunity?: {
    potentialControversies?: Controversy[];
    viralMoments?: ViralPotential[]; // Moments with high viral potential
    culturalSensitivities?: Sensitivity[]; // Potential cultural sensitivities
    universalAppeals?: UniversalElement[]; // Elements with universal appeal
  };
  optimizationSuggestions?: {
    targetAudience?: string;
    modifications?: Modification[]; // Suggested changes to improve resonance
    alternativeApproaches?: Approach[];
    platformSpecific?: PlatformStrategy[];
  };
}

export interface WorldBuilderResult {
  content?: string; // Main textual output for world building summary or narrative description
  physicalWorld?: {
    settings?: Setting[]; // Descriptions of key locations
    atmosphere?: AtmosphereData; // Overall mood and atmosphere
    sensoryDetails?: SensoryMap; // Map of sensory experiences
    spatialRelationships?: SpatialGraph; // How locations are connected
  };
  worldRules?: {
    physicalLaws?: Law[]; // Unique physical laws of the world
    socialNorms?: Norm[]; // Social customs and norms
    culturalCodes?: Code[]; // Cultural behaviors and codes
    internalLogic?: LogicSystem; // The underlying logic of the world
  };
  worldContext?: {
    historicalBackground?: Timeline; // Key historical events
    mythologySystem?: Mythology; // Myths and legends
    powerStructures?: PowerMap; // Who holds power and how
    economicSystem?: Economy; // How the economy works
  };
  dramaticIntegration?: {
    conflictGenerators?: ConflictSource[]; // Elements in the world that generate conflict
    thematicResonators?: ThematicElement[]; // Elements that resonate with themes
    characterConstraints?: Constraint[]; // How the world constrains characters
    narrativePossibilities?: Possibility[]; // Unique story possibilities offered by the world
  };
}

export interface TensionOptimizerResult {
  content?: string; // Main textual output, e.g., summary of optimizations
  currentTensionMap?: TensionPoint[]; // Tension points in the original text
  optimizationStrategy?: {
    insertionPoints?: { // Suggested points to insert elements
      location: number | string; // Page, scene, or %
      suggestedElement: 'conflict' | 'revelation' | 'complication' | 'deadline' | 'stakes_increase' | 'mystery';
      expectedImpact?: number; // 0-1
    }[];
    removalSuggestions?: { // Elements to remove or alter
      location: number | string;
      reason: string; // Why it should be removed/altered
      alternativeHandling?: string; // How to handle it differently
    }[];
    reorderingSuggestions?: { // Scenes or events to reorder
      currentOrder: (number | string)[];
      suggestedOrder: (number | string)[];
      rationale?: string;
    };
  };
  predictedOutcome?: {
    newTensionCurve?: DataPoint[]; // Predicted tension curve after optimization
    audienceEngagement?: number; // Predicted change in engagement (0-1)
    dramaticSatisfaction?: number; // Predicted change in satisfaction (0-1)
  };
}

export interface PlatformAdapterResult {
  platform?: 'cinema' | 'tv_series' | 'streaming_film' | 'streaming_series' | 'theater' | 'web_short' | 'interactive_narrative';
  content?: string; // Main textual output, e.g., summary of adaptations
  adaptations?: {
    structural?: {
      originalFormat?: string;
      adaptedFormat?: string;
      modifications?: StructuralChange[]; // e.g., act changes, scene splits
    };
    pacing?: {
      originalPace?: PaceData;
      platformOptimizedPace?: PaceData;
      cliffhangers?: CliffhangerPoint[]; // Suggested cliffhanger points for episodic
    };
    audience?: {
      platformDemographics?: Demographics; // Target audience on the new platform
      contentAdjustments?: Adjustment[]; // Adjustments for that audience
      engagementHooks?: Hook[]; // Hooks specific to platform audience
    };
  };
  platformSpecificFeatures?: { // How to leverage features of the target platform
    interactiveElements?: Interactive[];
    episodicStructure?: Episode[]; // For series
    bingeOptimization?: BingeStrategy; // For streaming series
    socialIntegration?: SocialFeature[]; // For web content
  };
}

export interface PlotPredictorResult {
  content?: string; // Main textual output (e.g., the predicted plot itself or a summary)
  currentTrajectory?: PlotPoint[]; // Key points in the current plot
  predictions?: {
    likelyDevelopments?: {
      scenario: string; // Description of the predicted development
      probability?: number; // 0-1
      narrativeLogic?: string; // Why this development is logical
      dramaticValue?: number; // Potential dramatic impact (0-1)
    }[];
    alternativePaths?: {
      path: PlotPath; // Description of an alternative path
      innovationScore?: number; // How innovative this path is (0-1)
      riskLevel?: 'low' | 'medium' | 'high';
      potentialImpact?: string; // Potential impact of this path
    }[];
    convergencePoints?: { // Points where different plot paths might converge
      location: number | string; // Page, scene, or %
      inevitability?: number; // How inevitable this convergence is (0-1)
      alternatives?: string[]; // Alternative outcomes at convergence
    }[];
  };
  recommendations?: {
    optimalPath?: PlotPath; // The AI's recommended path
    avoidPitfalls?: Pitfall[]; // Pitfalls to avoid
    maximizeSurprise?: SurpriseElement[]; // Elements to maximize surprise
    maintainCoherence?: CoherenceCheck[]; // Checks to maintain coherence
  };
}

// New generic result type for advanced modules (Units 3-11)
export interface AdvancedModuleResult {
  title: string; // e.g., "تحليل الشخصيات العميق لـ [اسم العمل]"
  summary: string; // A general summary of the findings for this module
  // 'details' will hold the specific structured output based on the module's components.
  // The structure within 'details' will be dictated by the prompt for each specific module.
  details: Record<string, any>; 
  recommendations?: SmartRecommendation[]; // Common output for many advanced modules
}


export interface BasicAnalysisResult {
  title: string;
  content: string;
}

export interface CreativeResult {
  title: string;
  content: string;
}

export interface GroundingSource {
  web: {
    uri: string;
    title: string;
  }
}

export interface ProcessedFile {
  name: string;
  mimeType: string;
  content: string; // Can be text content or base64 encoded data
  isBase64: boolean; // True if content is base64, false if text
  size: number; // File size in bytes
}

// Generic result type from Gemini service, accommodating various structures
export type GeminiTaskResultData = 
  | string // For simple text responses
  | EnhancedAnalysisResult
  | StyleFingerprintAnalysis
  | AudienceResonanceAnalysis
  | WorldBuilderResult
  | TensionOptimizerResult
  | PlatformAdapterResult
  | PlotPredictorResult
  | CharacterAnalysis
  | RhythmAnalysis
  | CreativeResult // For basic creative tasks
  | BasicAnalysisResult // For basic analysis
  | AdvancedModuleResult; // Added for new advanced modules

export interface GeminiServiceResponse {
  data?: GeminiTaskResultData;
  rawText?: string; // Always include the raw text for fallback or simplified display
  error?: string;
}

export interface PreviousCompletionContext {
  filesHash: string; // Hash of original files (e.g., names + total size)
  originalTask: TaskType;
  completionScopeOfResult: string;
  lastCompletionOutput: string; // The text output of the last completion
}

export interface CompletionEnhancementOption {
  id: TaskType;
  label: string;
}
