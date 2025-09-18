import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const DIALOGUE_FORENSICS_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.DIALOGUE_FORENSICS,
    name: "Voiceprint AI",
    description: "وكيل البصمة الصوتية للحوار: محلل لغوي متطور يستخدم تقنيات معالجة اللغة الطبيعية المتقدمة مع نماذج BERT المتخصصة لتحليل الخصائص الصوتية الفريدة لكل شخصية، مزود بخوارزميات تحليل المشاعر السياقية ونماذج التعرف على الأنماط اللغوية الدقيقة وكشف التناقضات الأسلوبية.",
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
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.82,
      accuracyLevel: 0.90,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.CHARACTER_VOICE, TaskType.DIALOGUE_ADVANCED_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.CHARACTER_VOICE],
    systemPrompt: "أنت Voiceprint AI - خبير البصمة الصوتية للحوار...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحليل البصمة الصوتية، سأدرس الخصائص اللغوية...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["تفرد الأصوات", "دقة التحليل اللغوي"],
    outputSchema: {},
    confidenceThreshold: 0.88
};
