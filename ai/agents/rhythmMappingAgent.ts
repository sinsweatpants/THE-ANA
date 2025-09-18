import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const RHYTHM_MAPPING_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.RHYTHM_MAPPING,
    name: "TemporalDynamics AI",
    description: "وكيل ديناميكيات الإيقاع الزمني: محلل متطور يستخدم تقنيات معالجة الإشارات الرقمية مع الشبكات العصبية الالتفافية لرسم خرائط التوتر الدرامي والإيقاع السردي، مزود بخوارزميات تحليل السلاسل الزمنية ونماذج التنبؤ الطيفي لتحديد نقاط الذروة والانخفاض في الطاقة السردية.",
    category: TaskCategory.ANALYSIS,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: true,
      memorySystem: false,
      selfReflection: false,
      ragEnabled: false,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.75,
      accuracyLevel: 0.85,
      processingSpeed: 'fast',
      resourceIntensity: 'medium',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: false
    },
    collaboratesWith: [TaskType.TENSION_OPTIMIZER],
    dependsOn: [],
    enhances: [TaskType.ANALYSIS],
    systemPrompt: "أنت TemporalDynamics AI - خبير ديناميكيات الإيقاع...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحليل الإيقاع، سأبدأ بتقسيم النص...",
    cacheStrategy: 'aggressive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["دقة القياسات الإيقاعية", "وضوح التصورات البيانية"],
    outputSchema: {},
    confidenceThreshold: 0.80
};
