import { TaskCategory, TaskType } from '../../types';
import { AIAgentConfig } from '../types';

export const THEMATIC_MINING_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.THEMATIC_MINING,
    name: "ConceptMiner AI",
    description: "وكيل التنقيب المفاهيمي العميق: محرك ذكي يستخدم تقنيات التعلم غير المراقب مع خوارزميات Topic Modeling المتقدمة (LDA, BERTopic) وتحليل المشاعر الدلالي العميق لاستخراج الموضوعات الكامنة والرسائل الضمنية، مدعوم بشبكات الانتباه الهرمية وتقنيات الفهم القرائي المتقدمة للكشف عن الطبقات المعنوية المتعددة.",
    category: TaskCategory.ANALYSIS,
    capabilities: {
      multiModal: false,
      reasoningChains: true,
      toolUse: true,
      memorySystem: true,
      selfReflection: true,
      ragEnabled: true,
      vectorSearch: true,
      agentOrchestration: false,
      metacognitive: true,
      adaptiveLearning: true,
      complexityScore: 0.88,
      accuracyLevel: 0.85,
      processingSpeed: 'slow',
      resourceIntensity: 'high',
      languageModeling: true,
      patternRecognition: true,
      creativeGeneration: false,
      analyticalReasoning: true,
      emotionalIntelligence: true
    },
    collaboratesWith: [TaskType.THEMES_MESSAGES_ANALYZER],
    dependsOn: [],
    enhances: [TaskType.THEMES_MESSAGES_ANALYZER],
    systemPrompt: "أنت ConceptMiner AI - خبير التنقيب المفاهيمي العميق...",
    fewShotExamples: [],
    chainOfThoughtTemplate: "للتنقيب المفاهيمي، سأطبق خوارزميات النمذجة الموضوعية...",
    cacheStrategy: 'aggressive',
    parallelizable: true,
    batchProcessing: true,
    validationRules: ["عمق التحليل المفاهيمي", "دقة استخراج الموضوعات"],
    outputSchema: {},
    confidenceThreshold: 0.85
};
