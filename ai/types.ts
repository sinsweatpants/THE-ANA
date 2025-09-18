import { TaskCategory, TaskType } from '../types';

export interface AIAgentCapabilities {
  // Core AI Techniques
  multiModal: boolean;              // معالجة متعددة الوسائط
  reasoningChains: boolean;         // سلاسل التفكير
  toolUse: boolean;                 // استخدام الأدوات
  memorySystem: boolean;            // نظام الذاكرة
  selfReflection: boolean;          // التفكير الذاتي

  // Advanced Features
  ragEnabled: boolean;              // تعزيز البحث والإنتاج
  vectorSearch: boolean;            // البحث الشعاعي
  agentOrchestration: boolean;      // تنسيق الوكلاء
  metacognitive: boolean;           // ما وراء المعرفة
  adaptiveLearning: boolean;        // التعلم التكيفي

  // Performance Metrics
  complexityScore: number;          // درجة التعقيد (0-1)
  accuracyLevel: number;            // مستوى الدقة (0-1)
  processingSpeed: 'fast' | 'medium' | 'slow' | 'adaptive';
  resourceIntensity: 'low' | 'medium' | 'high' | 'variable';

  // Specialized Capabilities
  languageModeling: boolean;        // نمذجة اللغة
  patternRecognition: boolean;      // تمييز الأنماط
  creativeGeneration: boolean;      // التوليد الإبداعي
  analyticalReasoning: boolean;     // التفكير التحليلي
  emotionalIntelligence: boolean;   // الذكاء العاطفي
}

export interface AIAgentConfig {
  id: TaskType;
  name: string;
  description: string;
  category: TaskCategory;
  capabilities: AIAgentCapabilities;

  // Agent Collaboration
  collaboratesWith: TaskType[];     // الوكلاء المتعاونون
  dependsOn: TaskType[];           // التبعيات
  enhances: TaskType[];            // يعزز وكلاء آخرين

  // Prompt Engineering
  systemPrompt: string;
  fewShotExamples: string[];
  chainOfThoughtTemplate: string;

  // Performance Optimization
  cacheStrategy: 'none' | 'aggressive' | 'selective' | 'adaptive';
  parallelizable: boolean;
  batchProcessing: boolean;

  // Quality Assurance
  validationRules: string[];
  outputSchema: object;
  confidenceThreshold: number;
}
