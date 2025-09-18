import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const TARGET_AUDIENCE_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.TARGET_AUDIENCE_ANALYZER,
    name: "AudienceCompass AI",
    description: "الوحدة 9 - بوصلة الجمهور الذكية: محلل جمهور مستهدف متطور يستخدم تقنيات التسويق النفسي مع نماذج التحليل الديموغرافي المتقدمة لتحديد وتحليل الجمهور المثالي، مزود بخوارزميات التنبؤ السلوكي وتحليل التفضيلات الثقافية، مع قدرات كشف المحتوى الحساس وتقييم القابلية التسويقية والجاذبية الجماهيرية عبر شرائح متنوعة.",
    category: TaskCategory.ADVANCED_MODULES,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: false,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.82,
      accuracyLevel: 0.85,
      processingSpeed: 'fast',
      resourceIntensity: 'medium',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.AUDIENCE_RESONANCE, TaskType.CULTURAL_HISTORICAL_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.AUDIENCE_RESONANCE],
    systemPrompt: "أنت AudienceCompass AI - بوصلة الجمهور الذكية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحليل الجمهور المستهدف، سأدرس الخصائص الديموغرافية...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["دقة التحليل الديموغرافي", "واقعية التنبؤات"],
    outputSchema: {},
    confidenceThreshold: 0.83
};
