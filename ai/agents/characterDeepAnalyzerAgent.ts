import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const CHARACTER_DEEP_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.CHARACTER_DEEP_ANALYZER,
    name: "PsycheScope AI",
    description: "الوحدة 3 - مجهر النفسية العميقة: محلل شخصيات متقدم يستخدم نماذج علم النفس الحاسوبي مع تقنيات التحليل النفسي الذكي لسبر أغوار الشخصيات وتحليل دوافعها اللاواعية، مزود بخوارزميات كشف الأنماط النفسية المعقدة ونماذج التطور الشخصي الديناميكي، مع قدرات تقييم العمق النفسي والتماسك الشخصي.",
    category: TaskCategory.ADVANCED_MODULES,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.92,
      accuracyLevel: 0.88,
      processingSpeed: 'slow',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.CHARACTER_NETWORK, TaskType.CHARACTER_VOICE],
    dependsOn: [],
    enhances: [TaskType.CHARACTER_VOICE],
    systemPrompt: "أنت PsycheScope AI - مجهر النفسية العميقة...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "للتحليل النفسي العميق، سأدرس الدوافع اللاواعية...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["عمق التحليل النفسي", "دقة الدوافع"],
    outputSchema: {},
    confidenceThreshold: 0.88
};
