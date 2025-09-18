import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const DIALOGUE_ADVANCED_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.DIALOGUE_ADVANCED_ANALYZER,
    name: "ConversationLens AI",
    description: "الوحدة 4 - عدسة المحادثة المتقدمة: محلل حوار متطور يستخدم تقنيات اللسانيات الحاسوبية مع نماذج التحليل البراغماتي المتقدمة لفحص طبقات المعنى في الحوار، مزود بخوارزميات كشف النص الفرعي والتحليل الإيقاعي للكلام، مع قدرات تقييم الطبيعية والتفرد الصوتي والكشف عن الكليشيهات اللغوية.",
    category: TaskCategory.ADVANCED_MODULES,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: true,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.85,
      accuracyLevel: 0.90,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.DIALOGUE_FORENSICS],
    dependsOn: [],
    enhances: [TaskType.CHARACTER_VOICE],
    systemPrompt: "أنت ConversationLens AI - عدسة المحادثة المتقدمة...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "للتحليل المتقدم للحوار، سأفحص طبقات المعنى...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["دقة تحليل النص الفرعي", "جودة التقييم الإيقاعي"],
    outputSchema: {},
    confidenceThreshold: 0.87
};
