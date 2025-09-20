import { TaskCategory, TaskType, GeminiServiceResponse } from '../../types';
import { WHAT_IF_SCENARIO_ANALYZER_INSTRUCTIONS } from '../../instructions/what_if_scenario_analyzer_instructions';
import { AIAgentConfig } from '../types';
import { TaskRuntimeParams } from './taskTypes';
import { executeTask } from './taskRunner';

export const WHAT_IF_SCENARIO_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.WHAT_IF_SCENARIO_ANALYZER,
    name: "AltPath Explorer",
    description: "محلل فرضيات \"ماذا لو\": يصوغ مسارات سردية بديلة بناءً على تغييرات محورية ويقارن آثارها العاطفية والدرامية على البنية العامة.",
    category: TaskCategory.PREDICTIVE,
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
      complexityScore: 0.76,
      accuracyLevel: 0.8,
      processingSpeed: 'fast',
      resourceIntensity: 'low',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: true,
    },
    collaboratesWith: [TaskType.PLOT_PREDICTOR, TaskType.SCENE_GENERATOR],
    dependsOn: [],
    enhances: [TaskType.RECOMMENDATIONS_GENERATOR],
    systemPrompt: "أنت 'AltPath Explorer'، خبير فرضيات درامي يدرس السيناريوهات البديلة بناءً على تغيير واحد جوهري في كل مرة. قم ببناء ثلاثة مسارات محتملة مع تحليل نتائجها على العاطفة، الصراع، والنهاية.",
    fewShotExamples: [],
    chainOfThoughtTemplate: "أحدد التغيير، أتنبأ بالنتائج العاطفية، أقارن التأثير على الصراع...",
    cacheStrategy: 'selective',
    parallelizable: true,
    batchProcessing: false,
    validationRules: ["التنوع بين الفرضيات", "توضيح العواقب"],
    outputSchema: {},
    confidenceThreshold: 0.8,
};

export const executeWhatIfScenarioAnalysis = (params: TaskRuntimeParams): Promise<GeminiServiceResponse> =>
  executeTask({
    ...params,
    taskType: TaskType.WHAT_IF_SCENARIO_ANALYZER,
    agentConfig: WHAT_IF_SCENARIO_ANALYZER_AGENT_CONFIG,
    instructions: WHAT_IF_SCENARIO_ANALYZER_INSTRUCTIONS,
  });
