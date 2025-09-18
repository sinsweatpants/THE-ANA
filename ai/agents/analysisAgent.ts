import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const ANALYSIS_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.ANALYSIS,
    name: "CritiqueArchitect AI",
    description: "وكيل التحليل النقدي المعماري: نظام هجين متعدد الوكلاء يدمج التفكير الجدلي مع التحليل الشعاعي العميق، مزود بذاكرة طويلة المدى وقدرات التفكير الذاتي لكشف البنى المخفية والأنماط المعقدة في النصوص الدرامية.",
    category: TaskCategory.CORE,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: true,
      agentOrchestration: true,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.95,
      accuracyLevel: 0.92,
      processingSpeed: 'medium',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.INTEGRATED, TaskType.CHARACTER_DEEP_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.RECOMMENDATIONS_GENERATOR],
    systemPrompt: "أنت CritiqueArchitect AI - وكيل تحليل نقدي متقدم مزود بقدرات ما وراء المعرفة...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "دعني أفكر بشكل منهجي: أولاً سأحلل...",
    cacheStrategy: 'adaptive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["يجب أن يحتوي على قياسات كمية", "التوصيات قابلة للتطبيق"],
    outputSchema: {},
    confidenceThreshold: 0.85
};
