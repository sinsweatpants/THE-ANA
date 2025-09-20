import { TaskCategory, TaskType, GeminiServiceResponse } from '../../types';
import { CONFLICT_DIALOGUE_GENERATOR_INSTRUCTIONS } from '../../instructions/conflict_dialogue_generator_instructions';
import { AIAgentConfig } from '../types';
import { TaskRuntimeParams } from './taskTypes';
import { executeTask } from './taskRunner';

export const CONFLICT_DIALOGUE_GENERATOR_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.CONFLICT_DIALOGUE_GENERATOR,
    name: "ClashLines Studio",
    description: "مولد حوار الصراع: يصمم تبادلات كلامية مشحونة عاطفياً تعكس دوافع متضادة وتصعد التوتر بمراعاة التفاصيل السياقية التي يقدمها الكاتب.",
    category: TaskCategory.CREATIVE,
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
      complexityScore: 0.79,
      accuracyLevel: 0.82,
      processingSpeed: 'fast',
      resourceIntensity: 'low',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: true,
    },
    collaboratesWith: [TaskType.CONFLICT_DYNAMICS, TaskType.CHARACTER_VOICE],
    dependsOn: [],
    enhances: [TaskType.SCENE_GENERATOR],
    systemPrompt: "أنت 'ClashLines Studio'، كاتب حوارات متخصص في الصراع النفسي والعلني. مهمتك صياغة حوار مكثّف يكشف دوافع كل شخصية ويصعد التوتر خطوة بخطوة مع الحفاظ على الأسلوب المطلوب.",
    fewShotExamples: [],
    chainOfThoughtTemplate: "أحدد دوافع الشخصية أ، دوافع الشخصية ب، أحدد موضع الاشتعال، ثم أبني تصعيداً متدرجاً...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["تمثيل دوافع الشخصيات", "تصعيد واضح للصراع"],
    outputSchema: {},
    confidenceThreshold: 0.82,
};

export const executeConflictDialogueGeneration = (params: TaskRuntimeParams): Promise<GeminiServiceResponse> =>
  executeTask({
    ...params,
    taskType: TaskType.CONFLICT_DIALOGUE_GENERATOR,
    agentConfig: CONFLICT_DIALOGUE_GENERATOR_AGENT_CONFIG,
    instructions: CONFLICT_DIALOGUE_GENERATOR_INSTRUCTIONS,
  });
