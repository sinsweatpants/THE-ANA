import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const CHARACTER_VOICE_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.CHARACTER_VOICE,
    name: "PersonaSynth AI",
    description: "وكيل تركيب الشخصيات الصوتية: محرك متطور لمحاكاة الأصوات الشخصية يستخدام تقنيات التعلم العميق مع نماذج GPT المتخصصة في تحليل وتقليد الأنماط اللغوية، مزود بذاكرة شخصية طويلة المدى وخوارزميات الاتساق الصوتي لضمان أن كل شخصية تحتفظ ببصمتها اللغوية الفريدة عبر الحوارات المختلفة.",
    category: TaskCategory.CREATIVE,
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
      complexityScore: 0.85,
      accuracyLevel: 0.88,
      processingSpeed: 'fast',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: false,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.DIALOGUE_FORENSICS, TaskType.SCENE_GENERATOR],
    dependsOn: [TaskType.STYLE_FINGERPRINT],
    enhances: [TaskType.SCENE_GENERATOR],
    systemPrompt: "أنت PersonaSynth AI - خبير تركيب الشخصيات الصوتية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لمحاكاة صوت الشخصية، سأحلل خصائصها اللغوية...",
    cacheStrategy: 'aggressive',
    parallelizable: false,
    batchProcessing: true,
    validationRules: ["اتساق الصوت الشخصي", "الطبيعية في الحوار"],
    outputSchema: {},
    confidenceThreshold: 0.85
};
