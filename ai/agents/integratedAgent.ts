import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const INTEGRATED_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.INTEGRATED,
    name: "SynthesisOrchestrator AI", 
    description: "المنسق التركيبي الذكي: وكيل أوركسترالي متقدم يستخدم تقنيات الذكاء الجمعي (Swarm Intelligence) لتنسيق وتكامل عمليات التحليل والإبداع في تدفق عمل موحد، مزود بخوارزميات التعلم التعزيزي متعدد المستويات وقدرات التحكم التكيفي في شدة التعقيد حسب السياق.",
    category: TaskCategory.CORE,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: true,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.92,
      accuracyLevel: 0.90,
      processingSpeed: 'adaptive',
      resourceIntensity: 'variable',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: true,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.ANALYSIS, TaskType.CREATIVE],
    dependsOn: [TaskType.ANALYSIS, TaskType.CREATIVE],
    enhances: [],
    systemPrompt: "أنت SynthesisOrchestrator AI - منسق التكامل الذكي...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "للتكامل الذكي، سأنسق بين التحليل والإبداع...",
    cacheStrategy: 'adaptive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["التوازن بين التحليل والإبداع", "التماسك الشامل"],
    outputSchema: {},
    confidenceThreshold: 0.87
};
