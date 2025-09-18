import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const AUDIENCE_RESONANCE_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.AUDIENCE_RESONANCE,
    name: "EmpathyMatrix AI",
    description: "وكيل مصفوفة التعاطف الجماهيري: محلل صدى متطور يستخدم نماذج علم النفس الجماعي مع تقنيات معالجة المشاعر المتقدمة لتحليل وتنبؤ استجابة الجمهور العاطفية والفكرية، مزود بقواعد بيانات ديموغرافية واسعة وخوارزميات التعلم الاجتماعي لفهم التفاعل الجماهيري المعقد.",
    category: TaskCategory.PREDICTIVE,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: false,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.80,
      accuracyLevel: 0.78,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.TARGET_AUDIENCE_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.TARGET_AUDIENCE_ANALYZER],
    systemPrompt: "أنت EmpathyMatrix AI - محلل الصدى الجماهيري...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحليل صدى الجمهور، سأدرس الاستجابات العاطفية...",
    cacheStrategy: 'aggressive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["دقة التنبؤات", "تنوع السيناريوهات"],
    outputSchema: {},
    confidenceThreshold: 0.75
};
