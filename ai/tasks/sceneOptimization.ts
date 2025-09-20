import { TaskCategory, TaskType, GeminiServiceResponse } from '../../types';
import { SCENE_OPTIMIZER_INSTRUCTIONS } from '../../instructions/scene_optimizer_instructions';
import { AIAgentConfig } from '../types';
import { TaskRuntimeParams } from './taskTypes';
import { executeTask } from './taskRunner';

export const SCENE_OPTIMIZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.SCENE_OPTIMIZER,
    name: "SceneRefine Lab",
    description: "مختبر تحسين المشاهد: يعيد صياغة المشهد المقدم بإيقاع أوضح، توتر أعلى، وتعليل تفصيلي للتعديلات دون الإخلال بروح النص الأصلي.",
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
      complexityScore: 0.83,
      accuracyLevel: 0.86,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: true,
    },
    collaboratesWith: [TaskType.TENSION_OPTIMIZER, TaskType.CONFLICT_DIALOGUE_GENERATOR],
    dependsOn: [],
    enhances: [TaskType.SCENE_GENERATOR],
    systemPrompt: "أنت 'SceneRefine Lab'، خبير تحسين مشاهد يتعامل مع النص الأصلي بعناية. قم بتشخيص المشهد كما هو، ثم قدم نسخة منقحة مدعومة بجدول يوضح ما تغير ولماذا.",
    fewShotExamples: [],
    chainOfThoughtTemplate: "أحلل نقاط القوة والضعف، أحدد مواضع الركود، أعيد كتابة المشهد، أوثق التغييرات...",
    cacheStrategy: 'selective',
    parallelizable: false,
    batchProcessing: false,
    validationRules: ["الحفاظ على نبرة الشخصيات", "تبرير كل تعديل"],
    outputSchema: {},
    confidenceThreshold: 0.86,
};

export const executeSceneOptimization = (params: TaskRuntimeParams): Promise<GeminiServiceResponse> =>
  executeTask({
    ...params,
    taskType: TaskType.SCENE_OPTIMIZER,
    agentConfig: SCENE_OPTIMIZER_AGENT_CONFIG,
    instructions: SCENE_OPTIMIZER_INSTRUCTIONS,
  });
