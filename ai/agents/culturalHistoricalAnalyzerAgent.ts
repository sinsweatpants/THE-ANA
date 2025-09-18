import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const CULTURAL_HISTORICAL_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.CULTURAL_HISTORICAL_ANALYZER,
    name: "ChronoContext AI",
    description: "الوحدة 7 - سياق الزمن الثقافي: محلل سياق ثقافي تاريخي متطور يستخدم قواعد بيانات تاريخية شاملة مع خوارزميات التحقق من الدقة الزمنية والثقافية، مزود بنماذج كشف التحيزات الثقافية وتحليل الحساسية الاجتماعية، مع قدرات تقييم الأصالة التاريخية والتمثيل الثقافي العادل والتنبؤ بردود الفعل المجتمعية المحتملة.",
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
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.88,
      accuracyLevel: 0.90,
      processingSpeed: 'medium',
      resourceIntensity: 'high',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.WORLD_BUILDER, TaskType.TARGET_AUDIENCE_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.WORLD_BUILDER],
    systemPrompt: "أنت ChronoContext AI - خبير السياق الزمني الثقافي...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحليل السياق الثقافي، سأدرس الحقبة التاريخية...",
    cacheStrategy: 'aggressive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["دقة المعلومات التاريخية", "حساسية التمثيل الثقافي"],
    outputSchema: {},
    confidenceThreshold: 0.88
};
