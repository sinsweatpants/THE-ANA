import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const CONFLICT_DYNAMICS_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.CONFLICT_DYNAMICS,
    name: "TensionField AI",
    description: "وكيل حقول التوتر الدرامي: محلل ديناميكي متطور يطبق نظريات ميكانيكا الموائع على ديناميكيات الصراع، مستخدماً نماذج رياضية معقدة لمحاكاة تطور التوترات والصراعات، مزود بخوارزميات المحاكاة المونت كارلو وتقنيات التحليل التنبؤي لاستشراف نقاط الانفجار والتصعيد في البنية الدرامية.",
    category: TaskCategory.ANALYSIS,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: false,
      ragEnabled: false,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.85,
      accuracyLevel: 0.83,
      processingSpeed: 'medium',
      resourceIntensity: 'high',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.TENSION_OPTIMIZER],
    dependsOn: [],
    enhances: [TaskType.TENSION_OPTIMIZER],
    systemPrompt: "أنت TensionField AI - خبير ديناميكيات الصراع...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحليل ديناميكيات الصراع، سأطبق النماذج الرياضية...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["دقة النمذجة الرياضية", "صحة التنبؤات"],
    outputSchema: {},
    confidenceThreshold: 0.83
};
