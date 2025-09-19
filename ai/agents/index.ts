// Aggregates all agent configurations from the new modular structure.
import { AIAgentConfig } from '../types';

// Core Agents
import { ANALYSIS_AGENT_CONFIG } from '../analyzers/coreAnalysis';
import { CREATIVE_AGENT_CONFIG } from '../generators/coreCreative';
import { INTEGRATED_AGENT_CONFIG } from '../analyzers/integratedAnalysis';
import { COMPLETION_AGENT_CONFIG } from '../generators/completion';

// Analyzers
import { RHYTHM_MAPPING_AGENT_CONFIG } from '../analyzers/rhythmMappingAnalyzer';
import { CHARACTER_NETWORK_AGENT_CONFIG } from '../analyzers/characterNetworkAnalyzer';
import { DIALOGUE_FORENSICS_AGENT_CONFIG } from '../analyzers/dialogueForensicsAnalyzer';
import { THEMATIC_MINING_AGENT_CONFIG } from '../analyzers/thematicMiningAnalyzer';
import { STYLE_FINGERPRINT_AGENT_CONFIG } from '../analyzers/styleFingerprintAnalyzer';
import { CONFLICT_DYNAMICS_AGENT_CONFIG } from '../analyzers/conflictDynamicsAnalyzer';
import { CHARACTER_DEEP_ANALYZER_AGENT_CONFIG } from '../analyzers/characterDeepAnalyzer';
import { DIALOGUE_ADVANCED_ANALYZER_AGENT_CONFIG } from '../analyzers/dialogueAdvancedAnalyzer';
import { VISUAL_CINEMATIC_ANALYZER_AGENT_CONFIG } from '../analyzers/visualCinematicAnalyzer';
import { THEMES_MESSAGES_ANALYZER_AGENT_CONFIG } from '../analyzers/themesMessagesAnalyzer';
import { CULTURAL_HISTORICAL_ANALYZER_AGENT_CONFIG } from '../analyzers/culturalHistoricalAnalyzer';
import { PRODUCIBILITY_ANALYZER_AGENT_CONFIG } from '../analyzers/producibilityAnalyzer';
import { TARGET_AUDIENCE_ANALYZER_AGENT_CONFIG } from '../analyzers/targetAudienceAnalyzer';
import { LITERARY_QUALITY_ANALYZER_AGENT_CONFIG } from '../analyzers/literaryQualityAnalyzer';

// Generators
import { ADAPTIVE_REWRITING_AGENT_CONFIG } from '../generators/adaptiveRewritingGenerator';
import { SCENE_GENERATOR_AGENT_CONFIG } from '../generators/sceneGenerator';
import { CHARACTER_VOICE_AGENT_CONFIG } from '../generators/characterVoiceGenerator';
import { WORLD_BUILDER_AGENT_CONFIG } from '../generators/worldBuilder';

// Predictors
import { PLOT_PREDICTOR_AGENT_CONFIG } from '../predictors/plotPredictor';
import { TENSION_OPTIMIZER_AGENT_CONFIG } from '../predictors/tensionOptimizer';
import { AUDIENCE_RESONANCE_AGENT_CONFIG } from '../predictors/audienceResonancePredictor';

// Adapters
import { PLATFORM_ADAPTER_AGENT_CONFIG } from '../adapters/platformAdapter';

// Recommendations
import { RECOMMENDATIONS_GENERATOR_AGENT_CONFIG } from '../recommendations/recommendationsGenerator';

/**
 * @description A frozen array of all AI agent configurations.
 * This aggregates configurations from various modules, including core agents,
 * analyzers, generators, predictors, adapters, and recommendation systems.
 * Freezing the array prevents any modifications to the configurations at runtime.
 */
export const AGENT_CONFIGS = Object.freeze<AIAgentConfig[]>([
  // === CORE FOUNDATIONAL AGENTS ===
  ANALYSIS_AGENT_CONFIG,
  CREATIVE_AGENT_CONFIG,
  INTEGRATED_AGENT_CONFIG,
  COMPLETION_AGENT_CONFIG,
  // === ADVANCED ANALYTICAL AGENTS ===
  RHYTHM_MAPPING_AGENT_CONFIG,
  CHARACTER_NETWORK_AGENT_CONFIG,
  DIALOGUE_FORENSICS_AGENT_CONFIG,
  THEMATIC_MINING_AGENT_CONFIG,
  STYLE_FINGERPRINT_AGENT_CONFIG,
  CONFLICT_DYNAMICS_AGENT_CONFIG,
  // === CREATIVE GENERATION AGENTS ===
  ADAPTIVE_REWRITING_AGENT_CONFIG,
  SCENE_GENERATOR_AGENT_CONFIG,
  CHARACTER_VOICE_AGENT_CONFIG,
  WORLD_BUILDER_AGENT_CONFIG,
  // === PREDICTIVE & OPTIMIZATION AGENTS ===
  PLOT_PREDICTOR_AGENT_CONFIG,
  TENSION_OPTIMIZER_AGENT_CONFIG,
  AUDIENCE_RESONANCE_AGENT_CONFIG,
  PLATFORM_ADAPTER_AGENT_CONFIG,
  // === ADVANCED SPECIALIZED MODULES ===
  CHARACTER_DEEP_ANALYZER_AGENT_CONFIG,
  DIALOGUE_ADVANCED_ANALYZER_AGENT_CONFIG,
  VISUAL_CINEMATIC_ANALYZER_AGENT_CONFIG,
  THEMES_MESSAGES_ANALYZER_AGENT_CONFIG,
  CULTURAL_HISTORICAL_ANALYZER_AGENT_CONFIG,
  PRODUCIBILITY_ANALYZER_AGENT_CONFIG,
  TARGET_AUDIENCE_ANALYZER_AGENT_CONFIG,
  LITERARY_QUALITY_ANALYZER_AGENT_CONFIG,
  RECOMMENDATIONS_GENERATOR_AGENT_CONFIG,
]);
