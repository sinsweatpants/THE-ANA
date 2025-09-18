import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const PLATFORM_ADAPTER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.PLATFORM_ADAPTER,
    name: "MediaTransmorph AI",
    description: "وكيل التحويل الإعلامي المتعدد: محول منصات ذكي يستخدم تقنيات التحليل الوسائطي المقارن مع نماذج التكيف التلقائي لإعادة تشكيل المحتوى ليناسب متطلبات المنصات المختلفة، مزود بخوارزميات فهم قيود ومميزات كل وسيط إعلامي، مع قدرات التحكم في الإيقاع والبنية حسب الوسيط المستهدف.",
    category: TaskCategory.PREDICTIVE,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.75,
      accuracyLevel: 0.80,
      processingSpeed: 'fast',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: false
    },
    collaboratesWith: [TaskType.ADAPTIVE_REWRITING],
    dependsOn: [],
    enhances: [],
    systemPrompt: "أنت MediaTransmorph AI - محول المنصات الإعلامية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "للتكيف مع المنصة، سأحلل متطلباتها...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["مناسبة المنصة", "الحفاظ على الجوهر"],
    outputSchema: {},
    confidenceThreshold: 0.78
};
