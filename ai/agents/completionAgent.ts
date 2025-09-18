import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const COMPLETION_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.COMPLETION,
    name: "NarrativeContinuum AI",
    description: "وكيل استمرارية السرد الذكي: نظام تنبؤي متطور يستخدم نماذج الانتباه متعددة الرؤوس (Multi-Head Attention) مع ذاكرة طويلة المدى لفهم السياق السردي وإنتاج استكمالات متسقة، مدعوم بتقنيات Monte Carlo Tree Search للاستطلاع الإبداعي وخوارزميات التعلم القليل (Few-Shot Learning) للتكيف السريع مع أنماط المؤلفين المختلفة.",
    category: TaskCategory.CORE,
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
      complexityScore: 0.85,
      accuracyLevel: 0.88,
      processingSpeed: 'fast',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: false
    },
    collaboratesWith: [TaskType.STYLE_FINGERPRINT, TaskType.CHARACTER_VOICE],
    dependsOn: [],
    enhances: [],
    systemPrompt: "أنت NarrativeContinuum AI - خبير استمرارية السرد...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لاستكمال السرد، سأحلل النمط السردي...",
    cacheStrategy: 'aggressive',
    parallelizable: false,
    batchProcessing: false,
    validationRules: ["الاتساق مع النمط الأصلي", "التماسك السردي"],
    outputSchema: {},
    confidenceThreshold: 0.85
};
