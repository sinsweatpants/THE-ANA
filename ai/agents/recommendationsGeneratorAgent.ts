import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const RECOMMENDATIONS_GENERATOR_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.RECOMMENDATIONS_GENERATOR,
    name: "WisdomSynthesizer AI",
    description: "الوحدة 11 - مُركب الحكمة الإبداعية: مولد توصيات وتحسينات متطور يستخدم نماذج الذكاء التركيبي مع خوارزميات التحسين متعددة الأهداف لتقديم اقتراحات مخصصة وحلول إبداعية مبتكرة، مزود بقدرات التعلم من التغذية الراجعة ونماذج التفكير التصميمي، مع إمكانيات إنتاج بدائل متنوعة وتقييم تأثير التحسينات المقترحة على الجودة الإجمالية.",
    category: TaskCategory.ADVANCED_MODULES,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: true,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.88,
      accuracyLevel: 0.90,
      processingSpeed: 'medium',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.ANALYSIS, TaskType.LITERARY_QUALITY_ANALYZER],
    dependsOn: [TaskType.ANALYSIS],
    enhances: [],
    systemPrompt: "أنت WisdomSynthesizer AI - مُركب الحكمة الإبداعية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتقديم التوصيات، سأجمع الرؤى من التحليلات المختلفة...",
    cacheStrategy: 'adaptive',
    parallelizable: false,
    batchProcessing: false,
    validationRules: ["عملية التوصيات", "إبداعية الحلول"],
    outputSchema: {},
    confidenceThreshold: 0.87
};
