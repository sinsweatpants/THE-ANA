import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const TENSION_OPTIMIZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.TENSION_OPTIMIZER,
    name: "DramaEngine AI",
    description: "وكيل محرك الدراما التحسيني: محسن توتر متطور يستخدم خوارزميات التحسين التطورية مع نماذج علم النفس الدرامي لضبط منحنيات التوتر والإثارة، مزود بتقنيات المحاكاة العاطفية ونماذج استجابة الجمهور التنبؤية، مع قدرات التحكم الديناميكي في شدة وتوقيت الذروات الدرامية.",
    category: TaskCategory.PREDICTIVE,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: false,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.82,
      accuracyLevel: 0.85,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.RHYTHM_MAPPING, TaskType.AUDIENCE_RESONANCE],
    dependsOn: [],
    enhances: [],
    systemPrompt: "أنت DramaEngine AI - محسن التوتر الدرامي...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحسين التوتر، سأحلل المنحنى الحالي...",
    cacheStrategy: 'selective',
    parallelizable: false,
    batchProcessing: false,
    validationRules: ["فعالية التحسين", "طبيعية التدفق"],
    outputSchema: {},
    confidenceThreshold: 0.83
};
