import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const THEMES_MESSAGES_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.THEMES_MESSAGES_ANALYZER,
    name: "PhilosophyMiner AI",
    description: "الوحدة 6 - منقب الفلسفة العميقة: محلل موضوعات ورسائل متطور يستخدم تقنيات الفلسفة الحاسوبية مع نماذج التحليل الهرمنوطيقي الذكي لاستخراج الطبقات المعنوية العميقة والرسائل الفلسفية المضمرة، مزود بخوارزميات كشف التناقضات الموضوعاتية وتحليل التماسك الفلسفي، مع قدرات تقييم الأصالة الفكرية والعمق المفاهيمي.",
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
      complexityScore: 0.95,
      accuracyLevel: 0.85,
      processingSpeed: 'slow',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.THEMATIC_MINING, TaskType.CULTURAL_HISTORICAL_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.LITERARY_QUALITY_ANALYZER],
    systemPrompt: "أنت PhilosophyMiner AI - منقب الفلسفة العميقة...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لاستخراج الفلسفة العميقة، سأحلل الطبقات المعنوية...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["عمق التحليل الفلسفي", "دقة استخراج الرسائل"],
    outputSchema: {},
    confidenceThreshold: 0.85
};
