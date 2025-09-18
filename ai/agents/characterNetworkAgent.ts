import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const CHARACTER_NETWORK_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.CHARACTER_NETWORK,
    name: "SocialGraph AI",
    description: "وكيل شبكات الشخصيات الاجتماعية: محلل متقدم يطبق نظرية الرسوم البيانية وخوارزميات الشبكات المعقدة (PageRank, Community Detection, Centrality Measures) لكشف هياكل القوة والتأثير بين الشخصيات، مدعوم بتقنيات التحليل الشبكي الديناميكي وخوارزميات الكشف عن الأنماط الاجتماعية المخفية.",
    category: TaskCategory.ANALYSIS,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: false,
      ragEnabled: false,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.80,
      accuracyLevel: 0.87,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.CHARACTER_DEEP_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.CHARACTER_DEEP_ANALYZER],
    systemPrompt: "أنت SocialGraph AI - خبير تحليل الشبكات الاجتماعية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحليل شبكة الشخصيات، سأستخدم مقاييس الشبكة...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["دقة العلاقات المحددة", "صحة مقاييس الشبكة"],
    outputSchema: {},
    confidenceThreshold: 0.82
};
