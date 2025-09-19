import { TaskCategory, TaskType } from '../types';

/**
 * @interface AIAgentCapabilities
 * @description Defines the capabilities of an AI agent.
 */
export interface AIAgentCapabilities {
  /** @description Whether the agent can process multiple modalities (e.g., text, images). */
  multiModal: boolean;
  /** @description Whether the agent can perform multi-step reasoning. */
  reasoningChains: boolean;
  /** @description Whether the agent can use external tools. */
  toolUse: boolean;
  /** @description Whether the agent has a memory system. */
  memorySystem: boolean;
  /** @description Whether the agent can perform self-reflection to improve its performance. */
  selfReflection: boolean;

  /** @description Whether the agent uses Retrieval-Augmented Generation. */
  ragEnabled: boolean;
  /** @description Whether the agent can perform vector searches. */
  vectorSearch: boolean;
  /** @description Whether the agent can orchestrate other agents. */
  agentOrchestration: boolean;
  /** @description Whether the agent has metacognitive abilities. */
  metacognitive: boolean;
  /** @description Whether the agent can learn and adapt over time. */
  adaptiveLearning: boolean;

  /** @description The complexity score of the agent (0-1). */
  complexityScore: number;
  /** @description The accuracy level of the agent (0-1). */
  accuracyLevel: number;
  /** @description The processing speed of the agent. */
  processingSpeed: 'fast' | 'medium' | 'slow' | 'adaptive';
  /** @description The resource intensity of the agent. */
  resourceIntensity: 'low' | 'medium' | 'high' | 'variable';

  /** @description Whether the agent has language modeling capabilities. */
  languageModeling: boolean;
  /** @description Whether the agent can recognize patterns. */
  patternRecognition: boolean;
  /** @description Whether the agent can generate creative content. */
  creativeGeneration: boolean;
  /** @description Whether the agent can perform analytical reasoning. */
  analyticalReasoning: boolean;
  /** @description Whether the agent has emotional intelligence capabilities. */
  emotionalIntelligence: boolean;
}

/**
 * @interface AIAgentConfig
 * @description Defines the configuration for an AI agent.
 */
export interface AIAgentConfig {
  /** @description The unique identifier for the agent's task type. */
  id: TaskType;
  /** @description The name of the agent. */
  name: string;
  /** @description A brief description of the agent's purpose. */
  description: string;
  /** @description The category of the task the agent performs. */
  category: TaskCategory;
  /** @description The capabilities of the agent. */
  capabilities: AIAgentCapabilities;

  /** @description A list of task types this agent collaborates with. */
  collaboratesWith: TaskType[];
  /** @description A list of task types this agent depends on. */
  dependsOn: TaskType[];
  /** @description A list of task types this agent enhances. */
  enhances: TaskType[];

  /** @description The system prompt that defines the agent's behavior. */
  systemPrompt: string;
  /** @description A list of few-shot examples for the agent. */
  fewShotExamples: string[];
  /** @description The template for the agent's chain of thought. */
  chainOfThoughtTemplate: string;

  /** @description The caching strategy for the agent. */
  cacheStrategy: 'none' | 'aggressive' | 'selective' | 'adaptive';
  /** @description Whether the agent's tasks can be parallelized. */
  parallelizable: boolean;
  /** @description Whether the agent can process tasks in batches. */
  batchProcessing: boolean;

  /** @description A list of validation rules for the agent's output. */
  validationRules: string[];
  /** @description The expected schema of the agent's output. */
  outputSchema: object;
  /** @description The confidence threshold for the agent's output. */
  confidenceThreshold: number;
}
