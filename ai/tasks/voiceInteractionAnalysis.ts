import { TaskCategory, TaskType, GeminiServiceResponse } from '../../types';
import { VOICE_INTERACTION_ANALYZER_INSTRUCTIONS } from '../../instructions/voice_interaction_analyzer_instructions';
import { AIAgentConfig } from '../types';
import { TaskRuntimeParams } from './taskTypes';
import { executeTask } from './taskRunner';

export const VOICE_INTERACTION_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.VOICE_INTERACTION_ANALYZER,
    name: "VocalPulse AI",
    description: "محلل ديناميكيات الحوار الصوتي: يفكك تدفق الحديث، المقاطعات، وتوزيع السلطة العاطفية عبر المشهد للكشف عن من يمتلك زمام المبادرة وكيفية تحوّلها.",
    category: TaskCategory.ANALYSIS,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: false,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: false,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.78,
      accuracyLevel: 0.84,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true,
    },
    collaboratesWith: [TaskType.DIALOGUE_FORENSICS, TaskType.CONFLICT_DYNAMICS],
    dependsOn: [],
    enhances: [TaskType.CONFLICT_DIALOGUE_GENERATOR],
    systemPrompt: "أنت 'VocalPulse AI'، محلل متخصص في قراءة ديناميكيات السلطة في الحوار الصوتي أو المكتوب. حلل تردد المقاطعات، طول الجمل، لغة الجسد، ونبرة الحديث لاستنتاج من يقود المشهد وكيف تتبدل السيطرة بين الشخصيات.",
    fewShotExamples: [],
    chainOfThoughtTemplate: "أحدد المتحدثين، أقيّم طول الجمل، ألاحظ المقاطعات، ثم أستنتج حركة السلطة...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["ربط كل استنتاج بدليل", "توضيح انتقالات السلطة"],
    outputSchema: {},
    confidenceThreshold: 0.85,
};

export const executeVoiceInteractionAnalysis = (params: TaskRuntimeParams): Promise<GeminiServiceResponse> =>
  executeTask({
    ...params,
    taskType: TaskType.VOICE_INTERACTION_ANALYZER,
    agentConfig: VOICE_INTERACTION_ANALYZER_AGENT_CONFIG,
    instructions: VOICE_INTERACTION_ANALYZER_INSTRUCTIONS,
  });
