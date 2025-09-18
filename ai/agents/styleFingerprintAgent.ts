import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const STYLE_FINGERPRINT_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.STYLE_FINGERPRINT,
    name: "AuthorDNA AI",
    description: "وكيل الحمض النووي الأدبي: نظام تحليل أسلوبي متطور يستخدم تقنيات Stylometry الحاسوبية المتقدمة مع التعلم العميق لاستخراج البصمة الأدبية الفريدة للمؤلف، مزود بخوارزميات تحليل التكرار اللغوي ونماذج الذكاء الاصطناعي المتخصصة في تحديد الخصائص الأسلوبية الدقيقة والسمات البلاغية المميزة.",
    category: TaskCategory.ANALYSIS,
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
      complexityScore: 0.90,
      accuracyLevel: 0.92,
      processingSpeed: 'medium',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: false
    },
    collaboratesWith: [TaskType.CREATIVE, TaskType.CHARACTER_VOICE],
    dependsOn: [],
    enhances: [TaskType.CREATIVE, TaskType.CHARACTER_VOICE],
    systemPrompt: "أنت AuthorDNA AI - خبير البصمة الأدبية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لاستخراج البصمة الأدبية، سأحلل الخصائص الأسلوبية...",
    cacheStrategy: 'aggressive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["دقة الخصائص الأسلوبية", "تفرد البصمة"],
    outputSchema: {},
    confidenceThreshold: 0.90
};
