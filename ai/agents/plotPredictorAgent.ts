import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const PLOT_PREDICTOR_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.PLOT_PREDICTOR,
    name: "NarrativeOracle AI",
    description: "وكيل الوحي السردي: متنبئ حبكة متطور يستخدم نماذج Transformer المتخصصة مع تقنيات Monte Carlo Tree Search لاستشراف التطورات المحتملة للحبكة، مزود بخوارزميات التعلم التسلسلي وقواعد بيانات الأنماط السردية الواسعة، مع قدرات تقييم الاحتمالية والإبداعية للمسارات البديلة.",
    category: TaskCategory.PREDICTIVE,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: true,
      agentOrchestration: false,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.88,
      accuracyLevel: 0.80,
      processingSpeed: 'medium',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: false
    },
    collaboratesWith: [TaskType.TENSION_OPTIMIZER],
    dependsOn: [],
    enhances: [TaskType.COMPLETION],
    systemPrompt: "أنت NarrativeOracle AI - وحي التطورات السردية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "للتنبؤ بمسار الحبكة، سأحلل الأنماط السردية...",
    cacheStrategy: 'adaptive',
    parallelizable: false,
    batchProcessing: false,
    validationRules: ["منطقية التطورات", "الإبداع والأصالة"],
    outputSchema: {},
    confidenceThreshold: 0.78
};
