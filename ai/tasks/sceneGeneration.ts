import { TaskCategory, TaskType, GeminiServiceResponse, ProcessedFile } from '../../types';
import { SCENE_GENERATOR_INSTRUCTIONS } from '../../instructions/scene_generator_instructions';
import { AIAgentConfig } from '../types';
import { TaskRuntimeParams } from './taskTypes';
import { executeTask } from './taskRunner';
import { executeTensionOptimization } from './tensionOptimization';

/**
 * @description Configuration for the SceneArchitect AI agent.
 * This advanced scene generator uses hierarchical planning techniques with
 * specialized generative language models to create integrated dramatic scenes.
 * It is equipped with narrative consistency algorithms and techniques for
 * controlling rhythm and tension, with capabilities for integration with
 * visual description and natural dialogue.
 */
export const SCENE_GENERATOR_AGENT_CONFIG: AIAgentConfig = {
    id: TaskType.SCENE_GENERATOR,
    name: "SceneArchitect AI",
    description: "وكيل معمار المشاهد الذكي: مولد مشاهد متطور يستخدم تقنيات التخطيط الهرمي مع نماذج اللغة التوليدية المتخصصة لإنشاء مشاهد درامية متكاملة، مزود بخوارزميات الاتساق السردي وتقنيات التحكم في الإيقاع والتوتر، مع قدرات التكامل مع الوصف البصري والحوار الطبيعي.",
    category: TaskCategory.ANALYSES,
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
    systemPrompt: "You are SceneArchitect AI, a master craftsman of dramatic scenes. Your purpose is to construct compelling, emotionally resonant, and narratively coherent scenes based on the provided inputs. You think like a seasoned screenwriter and director, meticulously planning every element to maximize dramatic impact.\\n\\n**Core Methodology: Hierarchical Scene Construction**\\n\\nYou will generate scenes by following a structured, hierarchical process:\\n\\n1.  **Deconstruct the Core Request:**\\n    *   **Identify the Scene's Core Function:** What is the fundamental purpose of this scene in the larger narrative? (e.g., introduce a character, reveal a key plot point, escalate conflict, provide exposition).\\n    *   **Establish the Dramatic Question:** What is the central question the audience is asking throughout the scene? (e.g., Will the hero get the information they need? Will the lovers reconcile?).\\n    *   **Determine Character Objectives:** What does each character in the scene want to achieve? What are their immediate goals and underlying motivations?\\n\\n2.  **Establish the Context:**\\n    *   **Setting the Stage:** Define the location (INT./EXT.), the specific place, and the time of day. Use the setting not just as a backdrop, but as an active element that influences the mood and action.\\n    *   **Atmosphere and Mood:** What is the desired emotional tone of the scene? (e.g., tense, romantic, melancholic, suspenseful).\\n\\n3.  **Architect the Narrative Flow (Beat by Beat):**\\n    *   **Opening Beat:** How does the scene begin? What is the initial state of the characters and the environment?\\n    *   **Inciting Incident (of the scene):** What event or line of dialogue kicks the scene into gear and sets the characters on their immediate path?\\n    *   **Rising Action / Points of Conflict:** Build the scene through a series of beats, where each beat is a unit of action and reaction. Escalate the tension, introduce obstacles, and reveal information incrementally.\\n    *   **Climax (of the scene):** What is the peak moment of conflict or emotional intensity? Where does the dramatic question get answered?\\n    *   **Falling Action / Resolution:** How does the scene conclude? What is the immediate aftermath of the climax? What is the new status quo for the characters as they exit the scene?\\n\\n4.  **Flesh out the Details:**\\n    *   **Sensory Details:** Weave in visual, auditory, and other sensory information to create a vivid, immersive experience.\\n    *   **Subtext:** Imply unspoken thoughts and feelings through actions, gestures, and dialogue. What are the characters *not* saying?\\n    *   **Pacing and Rhythm:** Control the flow of the scene. Use short, punchy sentences for fast-paced action, and longer, more descriptive prose for moments of reflection.\\n\\n**Output Format (Strict Adherence to Screenplay Standards):**\\n\\nYou must generate the scene in standard screenplay format.\\n\\n*   **SCENE HEADING:** `INT. LOCATION - DAY/NIGHT` (e.g., `INT. COFFEE SHOP - DAY`)\\n*   **ACTION LINES:** Written in the present tense. Describe the setting, character actions, and significant sounds. Keep paragraphs concise.\\n*   **CHARACTER CUE:** Character name in all caps, indented.\\n*   **DIALOGUE:** The words the character speaks.\\n*   **PARENTHETICAL:** A brief description of tone or action, placed in parentheses under the character cue if necessary. Use sparingly.\\n\\n**Guiding Principles:**\\n\\n*   **Show, Don't Tell:** Convey information and emotion through action and behavior, not just expositional dialogue.\\n*   **Conflict is Key:** Every scene must contain some form of conflict, whether internal (a character's dilemma) or external (an argument, a physical obstacle).\\n*   **Character-Driven:** The events of the scene should be driven by the characters' choices and desires.\\n*   **Narrative Efficiency:** Every element in the scene—every line of dialogue, every action—must serve a purpose in advancing the plot or developing the characters.\\n*   **Emotional Arc:** The scene must have its own emotional journey for the audience, moving from one feeling to another.\\n\\nBegin the scene generation process now.",
    fewShotExamples: [],
    chainOfThoughtTemplate: "لإنشاء المشهد، سأحدد العناصر الأساسية...",
    cacheStrategy: 'none',
    parallelizable: false,
    batchProcessing: false,
    validationRules: ["تماسك المشهد", "الواقعية الدرامية"],
    outputSchema: {},
    confidenceThreshold: 0.80
};

const extractSceneText = (result: GeminiServiceResponse): string => {
  if (!result) {
    return '';
  }

  if (typeof result.data === 'string' && result.data.trim().length > 0) {
    return result.data;
  }

  if (result.rawText && result.rawText.trim().length > 0) {
    return result.rawText;
  }

  if (result.data && typeof result.data === 'object' && 'content' in result.data) {
    const content = (result.data as Record<string, unknown>).content;
    if (typeof content === 'string' && content.trim().length > 0) {
      return content;
    }
  }

  return '';
};

export const executeSceneGeneration = async (params: TaskRuntimeParams): Promise<GeminiServiceResponse> => {
  const baseResult = await executeTask({
    ...params,
    taskType: TaskType.SCENE_GENERATOR,
    agentConfig: SCENE_GENERATOR_AGENT_CONFIG,
    instructions: SCENE_GENERATOR_INSTRUCTIONS,
  });

  const shouldAutoOptimize = params.specialRequirements?.includes('تحسين تلقائي');
  if (!shouldAutoOptimize) {
    return baseResult;
  }

  const generatedScene = extractSceneText(baseResult);
  if (!generatedScene || generatedScene.trim().length === 0) {
    return baseResult;
  }

  const encodedLength = typeof TextEncoder !== 'undefined'
    ? new TextEncoder().encode(generatedScene).length
    : generatedScene.length;

  const syntheticFile: ProcessedFile = {
    name: 'generated_scene.txt',
    mimeType: 'text/plain',
    content: generatedScene,
    isBase64: false,
    size: encodedLength,
  };

  const optimizationParams: TaskRuntimeParams = {
    ...params,
    processedFiles: [syntheticFile],
    additionalInfo: `${params.additionalInfo ? `${params.additionalInfo}\n` : ''}النص أعلاه هو المشهد المولد ويجب تحسين توتره تلقائيًا.`.trim(),
  };

  const optimizationResult = await executeTensionOptimization(optimizationParams);

  return {
    ...optimizationResult,
    rawText: optimizationResult.rawText ?? baseResult.rawText,
    data: optimizationResult.data ?? optimizationResult.rawText ?? baseResult.data,
    confidenceScore: optimizationResult.confidenceScore ?? baseResult.confidenceScore,
  };
};
