import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const VISUAL_CINEMATIC_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.VISUAL_CINEMATIC_ANALYZER,
    name: "CinemaVision AI",
    description: "الوحدة 5 - بصيرة السينما الذكية: محلل بصري سينمائي متطور يستخدم تقنيات الرؤية الحاسوبية مع نماذج فهم السرد البصري لتحليل وتفسير العناصر السينمائية المضمنة في النص، مزود بخوارزميات تحليل الإخراج وتقييم القابلية للتصوير، مع قدرات كشف الرمزية البصرية وتحليل الأجواء الإخراجية.",
    category: TaskCategory.ADVANCED_MODULES,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: true,
      memorySystem: false,
      selfReflection: false,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.80,
      accuracyLevel: 0.82,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: false
    },
    collaboratesWith: [TaskType.PRODUCIBILITY_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.PRODUCIBILITY_ANALYZER],
    systemPrompt: "أنت CinemaVision AI - بصيرة السينما الذكية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "للتحليل السينمائي، سأفحص العناصر البصرية...",
    cacheStrategy: 'aggressive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["دقة التحليل البصري", "واقعية التقييم الإنتاجي"],
    outputSchema: {},
    confidenceThreshold: 0.80
};
