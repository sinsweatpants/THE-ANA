import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const SCENE_GENERATOR_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.SCENE_GENERATOR,
    name: "SceneArchitect AI",
    description: "وكيل معمار المشاهد الذكي: مولد مشاهد متطور يستخدم تقنيات التخطيط الهرمي مع نماذج اللغة التوليدية المتخصصة لإنشاء مشاهد درامية متكاملة، مزود بخوارزميات الاتساق السردي وتقنيات التحكم في الإيقاع والتوتر، مع قدرات التكامل مع الوصف البصري والحوار الطبيعي.",
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
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.80,
      accuracyLevel: 0.82,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.CHARACTER_VOICE],
    dependsOn: [],
    enhances: [],
    systemPrompt: "أنت SceneArchitect AI - معمار المشاهد الدرامية...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لإنشاء المشهد، سأحدد العناصر الأساسية...",
    cacheStrategy: 'none',
    parallelizable: false,
    batchProcessing: false,
    validationRules: ["تماسك المشهد", "الواقعية الدرامية"],
    outputSchema: {},
    confidenceThreshold: 0.80
};
