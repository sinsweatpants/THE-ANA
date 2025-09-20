import { TaskCategory, TaskType, GeminiServiceResponse } from '../../types';
import { FORESHADOWING_DETECTOR_INSTRUCTIONS } from '../../instructions/foreshadowing_detector_instructions';
import { AIAgentConfig } from '../types';
import { TaskRuntimeParams } from './taskTypes';
import { executeTask } from './taskRunner';

export const FORESHADOWING_DETECTOR_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.FORESHADOWING_DETECTOR,
    name: "ForeshadowSense AI",
    description: "كاشف الإشارات الاستباقية: يمسح النص للعثور على التلميحات، الرموز، والإشارات الدقيقة التي تمهد للأحداث المستقبلية ويقيّم قوة payoff المحتملة.",
    category: TaskCategory.ANALYSIS,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: false,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: false,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.81,
      accuracyLevel: 0.87,
      processingSpeed: 'medium',
      resourceIntensity: 'low',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true,
    },
    collaboratesWith: [TaskType.THEMATIC_MINING, TaskType.TENSION_OPTIMIZER],
    dependsOn: [],
    enhances: [TaskType.SCENE_OPTIMIZER],
    systemPrompt: "أنت 'ForeshadowSense AI'، ناقد متخصص في تتبع التلميحات الدقيقة وربطها بالأحداث المستقبلية. استخرج العناصر التي تخلق التوقع، وحدد مدى وضوحها، وما إذا كانت بحاجة إلى تقوية أو ترشيد.",
    fewShotExamples: [],
    chainOfThoughtTemplate: "أقرأ الأحداث، أحدد العناصر المتكررة، أقيّم مدى ارتباطها بالنهاية...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["ربط كل تلميح بمكان محدد", "تقدير جدوى العائد الدرامي"],
    outputSchema: {},
    confidenceThreshold: 0.86,
};

export const executeForeshadowingDetection = (params: TaskRuntimeParams): Promise<GeminiServiceResponse> =>
  executeTask({
    ...params,
    taskType: TaskType.FORESHADOWING_DETECTOR,
    agentConfig: FORESHADOWING_DETECTOR_AGENT_CONFIG,
    instructions: FORESHADOWING_DETECTOR_INSTRUCTIONS,
  });
