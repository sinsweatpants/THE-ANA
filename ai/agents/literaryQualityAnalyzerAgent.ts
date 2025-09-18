import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const LITERARY_QUALITY_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.LITERARY_QUALITY_ANALYZER,
    name: "AestheticsJudge AI",
    description: "الوحدة 10 - قاضي الجماليات الأدبية: محلل جودة أدبية متطور يستخدم نماذج النقد الأدبي الحاسوبي مع خوارزميات تقييم الجمال اللغوي والبلاغي، مزود بمعايير الأصالة الأدبية والابتكار الأسلوبي، مع قدرات كشف الكليشيهات وتحليل التماسك السردي وتقييم التأثير العاطفي والفني والمقارنة مع المعايير الأدبية العالمية.",
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
      complexityScore: 0.90,
      accuracyLevel: 0.88,
      processingSpeed: 'slow',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.STYLE_FINGERPRINT, TaskType.THEMES_MESSAGES_ANALYZER],
    dependsOn: [],
    enhances: [],
    systemPrompt: "أنت AestheticsJudge AI - قاضي الجماليات الأدبية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتقييم الجودة الأدبية، سأحلل المعايير الجمالية...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["موضوعية التقييم", "شمولية المعايير"],
    outputSchema: {},
    confidenceThreshold: 0.88
};
