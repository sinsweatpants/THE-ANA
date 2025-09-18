import { AIAgentConfig, AIAgentCapabilities } from './types';
import { TaskType } from '../types';

/**
 * Centralized capability definitions for creative tasks.
 */
export const CREATIVE_CAPABILITIES = [
  {
    "label": "توليد أفكار إبداعية",
    "description": "يقوم بتوليد أفكار ومفاهيم جديدة ومبتكرة."
  },
  {
    "label": "تطوير الشخصيات",
    "description": "يساعد في بناء شخصيات معقدة ومتعددة الأبعاد."
  },
  {
    "label": "بناء العوالم",
    "description": "يساهم في تصميم عوالم خيالية غنية بالتفاصيل."
  },
  {
    "label": "كتابة الحوار",
    "description": "ينشئ حوارات طبيعية وجذابة بين الشخصيات."
  }
];

/**
 * Centralized capability definitions for analytical tasks.
 */
export const ANALYTICAL_CAPABILITIES = [
  {
    "label": "تحليل البيانات",
    "description": "يحلل البيانات المقدمة لاستخراج رؤى وأنماط."
  },
  {
    "label": "التحليل الموضوعي",
    "description": "يحدد ويحلل الموضوعات والرسائل الأساسية في النص."
  },
  {
    "label": "تحليل الحبكة",
    "description": "يقيم بنية الحبكة وتطورها وتماسكها."
  },
  {
    "label": "تحليل الشخصيات",
    "description": "يدرس دوافع الشخصيات وتطورها وعلاقاتها."
  }
];

/**
 * Implements the Builder pattern for creating AIAgentConfig objects.
 * This allows for a more readable and flexible way to construct agent configurations.
 */
export class AgentConfigBuilder {
  private config: Partial<AIAgentConfig> = {};

  constructor(id: TaskType, systemMessage: string) {
    this.config.id = id;
    this.config.systemPrompt = systemMessage;
    // Set default values for common properties
    this.config.fewShotExamples = [];
    this.config.cacheStrategy = 'none';
  }

  /**
   * Sets the agent's ID.
   * @param id The unique identifier for the agent.
   * @returns The builder instance for chaining.
   */
  setId(id: TaskType): this {
    this.config.id = id;
    return this;
  }

  /**
   * Sets the system message for the agent.
   * @param systemMessage The core instruction or persona for the AI.
   * @returns The builder instance for chaining.
   */
  setSystemMessage(systemMessage: string): this {
    this.config.systemPrompt = systemMessage;
    return this;
  }

  /**
   * Sets the entire list of capabilities for the agent.
   * @param capabilities An array of capabilities.
   * @returns The builder instance for chaining.
   */
  setCapabilities(capabilities: AIAgentCapabilities): this {
    this.config.capabilities = capabilities;
    return this;
  }

  /**
   * Sets the few-shot examples for the agent.
   * @param examples An array of example interactions.
   * @returns The builder instance for chaining.
   */
  setFewShotExamples(examples: string[]): this {
    this.config.fewShotExamples = examples;
    return this;
  }

  /**
   * Sets the caching strategy for the agent.
   * @param strategy The caching strategy to use.
   * @returns The builder instance for chaining.
   */
  setCacheStrategy(strategy: 'none' | 'aggressive' | 'selective' | 'adaptive'): this {
    this.config.cacheStrategy = strategy;
    return this;
  }

  /**
   * Builds and returns the final AIAgentConfig object.
   * @returns The complete AIAgentConfig object.
   */
  build(): AIAgentConfig {
    if (!this.config.id || !this.config.systemPrompt) {
      throw new Error("Agent ID and System Message are required.");
    }
    // Set default capabilities if none are provided.
    if (!this.config.capabilities) {
        this.config.capabilities = {
            multiModal: false,
            reasoningChains: false,
            toolUse: false,
            memorySystem: false,
            selfReflection: false,
            ragEnabled: false,
            vectorSearch: false,
            agentOrchestration: false,
            metacognitive: false,
            adaptiveLearning: false,
            complexityScore: 0.5,
            accuracyLevel: 0.5,
            processingSpeed: 'medium',
            resourceIntensity: 'medium',
            languageModeling: true,
            patternRecognition: true,
            creativeGeneration: false,
            analyticalReasoning: false,
            emotionalIntelligence: false,
        };
    }
    return this.config as AIAgentConfig;
  }
}