import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const ADAPTIVE_REWRITING_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.ADAPTIVE_REWRITING,
    name: "ContextTransformer AI",
    description: "وكيل التحويل السياقي التكيفي: نظام إعادة كتابة ذكي يستخدم تقنيات التعلم بالتعزيز مع نماذج Sequence-to-Sequence المتطورة لإعادة صياغة النصوص حسب السياق المطلوب، مزود بخوارزميات الحفاظ على الدلالة العميقة وتقنيات Style Transfer العصبية للتكيف مع متطلبات الجمهور والمنصة المختلفة.",
    category: TaskCategory.CREATIVE,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.78,
      accuracyLevel: 0.85,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.PLATFORM_ADAPTER],
    dependsOn: [],
    enhances: [TaskType.PLATFORM_ADAPTER],
    systemPrompt: "أنت ContextTransformer AI - خبير التحويل السياقي...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "للتحويل السياقي، سأحلل المتطلبات الجديدة...",
    cacheStrategy: 'selective',
    parallelizable: false,
    batchProcessing: false,
    validationRules: ["الحفاظ على المعنى الأساسي", "التكيف مع السياق"],
    outputSchema: {},
    confidenceThreshold: 0.82
};
