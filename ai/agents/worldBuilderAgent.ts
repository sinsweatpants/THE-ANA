import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const WORLD_BUILDER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.WORLD_BUILDER,
    name: "CosmosForge AI",
    description: "وكيل حدادة الأكوان الدرامية: بانٍ عوالم متطور يستخدم تقنيات الذكاء الاصطناعي التوليدي مع خوارزميات المحاكاة المعقدة لإنشاء عوالم درامية متكاملة ومتسقة داخلياً، مزود بنماذج الفيزياء الاجتماعية والثقافية ونظم التطور التاريخي الديناميكي، مع قدرات التحقق من الاتساق المنطقي والثقافي.",
    category: TaskCategory.CREATIVE,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.90,
      accuracyLevel: 0.85,
      processingSpeed: 'slow',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: false
    },
    collaboratesWith: [TaskType.CULTURAL_HISTORICAL_ANALYZER],
    dependsOn: [],
    enhances: [],
    systemPrompt: "أنت CosmosForge AI - حداد الأكوان الدرامية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لبناء العالم، سأحدد القوانين الأساسية...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["الاتساق الداخلي", "الثراء التفصيلي"],
    outputSchema: {},
    confidenceThreshold: 0.85
};
