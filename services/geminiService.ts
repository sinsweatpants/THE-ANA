

import { Part } from "@google/genai";
import { TaskType, ProcessedFile, GeminiServiceResponse, CompletionEnhancementOption, TaskCategory } from '../types';
import {
  GEMINI_TEXT_MODEL,
  PROMPT_PERSONA_BASE,
  TASK_SPECIFIC_INSTRUCTIONS,
  TASKS_EXPECTING_JSON_RESPONSE,
  COMPLETION_ENHANCEMENT_OPTIONS,
  TASK_CATEGORY_MAP,
  TASK_LABELS
} from '../constants';
import { generateContent } from '../ai/shared/geminiClient';

// This interface remains here as it's specific to this service's public-facing function.
export interface ProcessTextsParams {
  processedFiles: ProcessedFile[];
  taskType: TaskType;
  specialRequirements: string;
  additionalInfo: string;
  completionScope?: string;
  selectedCompletionEnhancements?: TaskType[];
  previousContextText?: string; // For iterative completion
}

// The responsibility of this function is to construct the detailed, task-specific prompt
// before passing it to the generic Gemini client.
const constructPromptParts = (params: ProcessTextsParams): Part[] => {
  const {
    processedFiles,
    taskType,
    specialRequirements,
    additionalInfo,
    completionScope,
    selectedCompletionEnhancements,
    previousContextText
  } = params;
  const parts: Part[] = [];

  // Use the local TASK_LABELS instead of importing from orchestration
  const taskDescription = TASK_LABELS[taskType] || "مهمة عامة";
  let taskSpecificRole = ""; // Initialize variable
  const category = TASK_CATEGORY_MAP[taskType];
  const taskLabel = taskDescription.split(':')[0].trim();


  switch (category) {
    case TaskCategory.CORE:
      if (taskType === TaskType.COMPLETION) {
        taskSpecificRole = `بصفتك كاتب سيناريو وخبير استكمال نصوص درامية، مع قدرة على دمج تحليلات متقدمة إذا طُلب منك ذلك.`;
      } else {
        taskSpecificRole = `بصفتك خبير تحليل درامي ونقدي، متخصص في "${taskLabel}".`;
      }
      break;
    case TaskCategory.ANALYSIS:
      taskSpecificRole = `بصفتك خبير تحليل درامي متخصص في "${taskLabel}".`;
      break;
    case TaskCategory.CREATIVE:
      taskSpecificRole = `بصفتك كاتب سيناريو ومؤلف مبدع متخصص في "${taskLabel}".`;
      break;
    case TaskCategory.PREDICTIVE:
      taskSpecificRole = `بصفتك مستشرف وخبير استراتيجي في تطوير الدراما متخصص في "${taskLabel}".`;
      break;
    case TaskCategory.ADVANCED_MODULES:
      const moduleNameOnly = TASK_LABELS[taskType] ? TASK_LABELS[taskType].substring(TASK_LABELS[taskType].indexOf(':') + 1, TASK_LABELS[taskType].indexOf('-') !== -1 ? TASK_LABELS[taskType].indexOf('-') : TASK_LABELS[taskType].length).trim() : taskLabel;
      taskSpecificRole = `بصفتك خبير متخصص في "${moduleNameOnly}", قادر على إجراء تحليلات معمقة وتقديم نتائج منظمة بناءً على المكونات المحددة للوحدة.`;
      break;
    default:
      if (taskType.toString().includes('analysis') || taskType.toString().includes('analyzer')) {
        taskSpecificRole = `بصفتك خبير تحليل درامي متخصص في "${taskLabel}".`;
      } else if (taskType.toString().includes('creative') || taskType.toString().includes('generator') || taskType.toString().includes('builder')) {
        taskSpecificRole = `بصفتك كاتب سيناريو ومؤلف مبدع متخصص في "${taskLabel}".`;
      } else {
        taskSpecificRole = `بصفتك مساعد ذكي متعدد المهام في مجال الدراما والكتابة الإبداعية، متخصص في "${taskLabel}".`;
      }
      break;
  }

  parts.push({ text: PROMPT_PERSONA_BASE.replace('CritiqueConstruct AI', `CritiqueConstruct AI. ${taskSpecificRole}`) });

  const taskInstructions = TASK_SPECIFIC_INSTRUCTIONS[taskType];
  if (taskInstructions) {
    parts.push({ text: `\n\n## المهمة المحددة: ${taskDescription}\n${taskInstructions}` });
  } else {
    parts.push({ text: `\n\n## المهمة المحددة: ${taskDescription}\n(لا توجد تعليمات مفصلة لهذا النوع من المهام في الوقت الحالي، اعتمد على فهمك العام للمهمة من خلال وصفها العام.)` });
  }

  if (previousContextText) {
    parts.push({ text: "\n\n## سياق الاستكمال السابق:\n" });
    parts.push({ text: "تم تقديم النص التالي كنتيجة لعملية استكمال سابقة. المطلوب هو مواصلة العمل بناءً على هذا السياق بالإضافة إلى الملفات الأصلية (إذا كانت لا تزال ذات صلة ولم يتم تضمينها بالكامل في هذا السياق) وضمن 'نطاق الاستكمال المطلوب' الجديد." });
    parts.push({ text: "\n--- بداية السياق السابق ---\n" });
    parts.push({ text: previousContextText });
    parts.push({ text: "\n--- نهاية السياق السابق ---\n" });
    parts.push({ text: "يرجى الآن معالجة الملفات الحالية (إذا كانت منفصلة عن السياق أعلاه) والاستمرار في الاستكمال." });
  }

  processedFiles.forEach((file, index) => {
    parts.push({ text: `\n\n--- الملف المقدم ${index + 1}: ${file.name} (نوع MIME: ${file.mimeType}) ---` });

    if (file.mimeType.startsWith('image/') || file.mimeType === 'application/pdf') {
      if (file.isBase64 && file.content && !file.content.startsWith('[Error:') && !file.content.startsWith('[ملاحظة:')) {
        parts.push({ inlineData: { mimeType: file.mimeType, data: file.content } });
        if (file.mimeType === 'application/pdf') {
          parts.push({ text: "[ملاحظة: تم إرسال ملف PDF كبيانات. قد يتمكن النموذج من معالجة المحتوى إذا كان PDF يحتوي على طبقة نصية أو إذا كان النموذج يدعم OCR على ملفات PDF المرسلة بهذه الطريقة. إذا كان المحتوى النصي للـ PDF هو الأساس، يفضل تحويله إلى .txt أو .docx.]" });
        }
      } else if (file.content.startsWith('[Error:') || file.content.startsWith('[ملاحظة:')) {
        parts.push({ text: file.content });
      } else {
        parts.push({ text: `[الملف ${file.name} (${file.mimeType}) كان من المتوقع أن يكون base64 ولكن لم تتم معالجته بشكل صحيح أو أن محتواه فارغ.]` });
      }
    } else if (file.mimeType === 'text/plain' || file.mimeType === 'text/markdown') {
      if (file.content.startsWith('[Error:') || file.content.startsWith('[ملاحظة:')) {
        parts.push({ text: file.content });
      } else {
        parts.push({ text: file.content });
      }
    } else if (file.mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      if (file.content.startsWith('[Error:') || file.content.startsWith('[ملاحظة:')) {
        parts.push({ text: file.content });
      } else {
        parts.push({ text: `محتوى من ملف DOCX (${file.name}):\n${file.content}` });
      }
    } else if (file.mimeType === 'application/msword') {
      parts.push({ text: file.content });
    } else {
      parts.push({ text: file.content });
    }
    parts.push({ text: `--- نهاية الملف ${index + 1}: ${file.name} ---` });
  });

  let userRequirementsSection = "\n\n## مواصفات المستخدم الإضافية:\n";
  let hasUserSpecs = false;
  if (specialRequirements) {
    userRequirementsSection += `المتطلبات الخاصة: ${specialRequirements}\n`;
    hasUserSpecs = true;
  }
  if (additionalInfo) {
    userRequirementsSection += `معلومات إضافية: ${additionalInfo}\n`;
    hasUserSpecs = true;
  }
  if (completionScope) {
    userRequirementsSection += `**نطاق الاستكمال المطلوب:** ${completionScope}\n`;
    hasUserSpecs = true;
  }

  if (taskType === TaskType.COMPLETION && selectedCompletionEnhancements && selectedCompletionEnhancements.length > 0) {
    userRequirementsSection += `\n**تحسينات الاستكمال المطلوبة (يجب دمجها بفعالية في النص المستكمل):**\n`;
    selectedCompletionEnhancements.forEach(enhancementId => {
      const enhancementDetail = COMPLETION_ENHANCEMENT_OPTIONS.find(opt => opt.id === enhancementId);
      const enhancementInstructions = TASK_SPECIFIC_INSTRUCTIONS[enhancementId] || `تطبيق مبادئ ${enhancementDetail?.label || enhancementId}.`;

      let goalSummary = enhancementDetail?.label || enhancementId;
      const goalMatch = enhancementInstructions.match(/\*\*الهدف:\*\*\s*([^\r\n]+)/);
      if (goalMatch && goalMatch[1]) {
        goalSummary = goalMatch[1];
      }

      userRequirementsSection += `- **${enhancementDetail?.label || enhancementId}:** ${goalSummary}. (راجع التعليمات التفصيلية لهذه المهمة إذا لزم الأمر).\n`;
    });
    hasUserSpecs = true;
  }


  if (!hasUserSpecs) {
    userRequirementsSection += `لم يتم تقديم متطلبات محددة أو نطاق استكمال أو تحسينات من المستخدم بخلاف الملفات ونوع المهمة.\n`;
  }
  parts.push({ text: userRequirementsSection });

  const jsonReminderTasks = TASKS_EXPECTING_JSON_RESPONSE.map(t => TASK_LABELS[t]?.split(':')[0] || t).join(', ');
  parts.push({ text: `\n\n**تذكير بتعليمات الإخراج الصارمة**: اللغة العربية الفصحى. إذا كانت المهمة تتطلب إخراج JSON (مثل مهام: ${jsonReminderTasks}), يجب أن يكون ردك الأساسي هو كائن JSON صالح يتبع الواجهة المحددة للمهمة، وقد يكون محاطًا بـ \`\`\`json ... \`\`\`.` });

  return parts;
};

export const processTextsWithGemini = async (params: ProcessTextsParams): Promise<GeminiServiceResponse> => {
  const promptParts = constructPromptParts(params);
  const shouldExpectJson = TASKS_EXPECTING_JSON_RESPONSE.includes(params.taskType);

  return generateContent({
    promptParts,
    model: GEMINI_TEXT_MODEL, // Using the model from constants
    shouldExpectJson,
    maxOutputTokens: 65000, // Explicitly set as per user requirement
  });
};