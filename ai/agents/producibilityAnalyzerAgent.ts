import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const PRODUCIBILITY_ANALYZER_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.PRODUCIBILITY_ANALYZER,
    name: "ProductionOracle AI",
    description: "الوحدة 8 - وحي الإنتاج الذكي: محلل قابلية إنتاج متطور يستخدم نماذج تقدير التكاليف الذكية مع خوارزميات محاكاة الإنتاج المعقدة لتحليل وتقدير متطلبات الإنتاج بدقة عالية، مزود بقواعد بيانات المواقع والمعدات والكوادر الفنية، مع قدرات التحليل اللوجستي والتنبؤ بالتحديات الإنتاجية والحلول البديلة المبتكرة.",
    category: TaskCategory.ADVANCED_MODULES,
    capabilities: {
      multiModal: true,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: false,
      ragEnabled: true,
      vectorSearch: false,
      agentOrchestration: false,
      metacognitive: false,
      adaptiveLearning: true,
      complexityScore: 0.78,
      accuracyLevel: 0.85,
      processingSpeed: 'medium',
      resourceIntensity: 'medium',
      languageModeling: false,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: false
    },
    collaboratesWith: [TaskType.VISUAL_CINEMATIC_ANALYZER],
    dependsOn: [],
    enhances: [],
    systemPrompt: "أنت ProductionOracle AI - وحي الإنتاج الذكي...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لتحليل قابلية الإنتاج، سأقدر المتطلبات التقنية...",
    cacheStrategy: 'aggressive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["واقعية التقديرات", "شمولية التحليل"],
    outputSchema: {},
    confidenceThreshold: 0.82
};
