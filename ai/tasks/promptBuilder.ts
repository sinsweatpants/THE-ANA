import { Part } from '@google/genai';
import { TaskType, TaskCategory } from '../../types';
import {
  PROMPT_PERSONA_BASE,
  TASK_LABELS,
  TASK_SPECIFIC_INSTRUCTIONS,
  TASKS_EXPECTING_JSON_RESPONSE,
  COMPLETION_ENHANCEMENT_OPTIONS,
  TASK_CATEGORY_MAP,
} from '../../constants';
import { AIAgentConfig } from '../types';
import { TaskRuntimeParams } from './taskTypes';

interface BuildPromptPartsOptions extends TaskRuntimeParams {
  agentConfig: AIAgentConfig;
  taskType: TaskType;
  instructions: string;
}

const formatEnhancementSummary = (taskType: TaskType): string => {
  const enhancementDetail = COMPLETION_ENHANCEMENT_OPTIONS.find((opt) => opt.id === taskType);
  const enhancementInstructions = TASK_SPECIFIC_INSTRUCTIONS[taskType];
  let goalSummary = enhancementDetail?.label || taskType;

  if (enhancementInstructions) {
    const goalMatch = enhancementInstructions.match(/\*\*الهدف:\*\*\s*([^\r\n]+)/);
    if (goalMatch && goalMatch[1]) {
      goalSummary = goalMatch[1];
    }
  }

  return `- **${enhancementDetail?.label || taskType}:** ${goalSummary}.`;
};

const determineTaskRole = (taskType: TaskType): string => {
  const taskLabel = TASK_LABELS[taskType]?.split(':')[0].trim() || taskType;
  const category = TASK_CATEGORY_MAP[taskType];

  switch (category) {
    case TaskCategory.CORE:
      return `بصفتك ${taskLabel} من المستوى المتقدم، استخدم خبراتك الجوهرية لتحقيق نتائج دقيقة.`;
    case TaskCategory.ANALYSES:
      return `بصفتك محلل درامي متخصص في "${taskLabel}", طبق خبراتك المتقدمة لاستخلاص رؤى معمقة.`;
    case TaskCategory.ANALYSIS:
      return `بصفتك محلل درامي متخصص في "${taskLabel}", طبق خبراتك المتقدمة لاستخلاص رؤى معمقة.`;
    case TaskCategory.CREATIVE:
      return `بصفتك خبيرًا إبداعيًا في "${taskLabel}", حافظ على روح النص الأصلي وقدم حلولاً سردية متجددة.`;
    case TaskCategory.PREDICTIVE:
      return `بصفتك مستشرفًا دراميًا لمهمة "${taskLabel}", قدّم أفضل التوقعات والسيناريوهات المدعومة بالمنطق.`;
    case TaskCategory.AGENTS:
      return `أنت خبير متخصص في "${taskLabel}", التزم بالمعايير الاحترافية للوحدة وتقديم نتائج منظمة.`;
    case TaskCategory.ADVANCED_MODULES:
      return `أنت خبير متخصص في "${taskLabel}", التزم بالمعايير الاحترافية للوحدة وتقديم نتائج منظمة.`;
    default:
      return `اعمل كخبير متخصص في "${taskLabel}" وقدم أفضل ما لديك بناءً على المعطيات.`;
  }
};

export const buildPromptParts = (options: BuildPromptPartsOptions): Part[] => {
  const {
    agentConfig,
    taskType,
    instructions,
    processedFiles,
    specialRequirements,
    additionalInfo,
    completionScope,
    selectedCompletionEnhancements,
    previousContextText,
  } = options;

  const parts: Part[] = [];
  const taskLabel = TASK_LABELS[taskType] || 'مهمة عامة';

  const personaText = PROMPT_PERSONA_BASE.replace(
    'CritiqueConstruct AI',
    `CritiqueConstruct AI. ${determineTaskRole(taskType)}`,
  );

  parts.push({ text: personaText });
  parts.push({ text: `\n\n## هوية الوكيل:\n${agentConfig.systemPrompt.trim()}` });
  parts.push({ text: `\n\n## التعليمات المتخصصة للمهمة: ${taskLabel}\n${instructions.trim()}` });

  if (agentConfig.chainOfThoughtTemplate) {
    parts.push({ text: `\n\n## نمط التفكير المقترح:\n${agentConfig.chainOfThoughtTemplate}` });
  }

  if (agentConfig.validationRules && agentConfig.validationRules.length > 0) {
    const rulesList = agentConfig.validationRules.map((rule) => `- ${rule}`).join('\n');
    parts.push({ text: `\n\n## قواعد التحقق المطلوب الالتزام بها:\n${rulesList}` });
  }

  if (agentConfig.fewShotExamples && agentConfig.fewShotExamples.length > 0) {
    const examples = agentConfig.fewShotExamples
      .map((example, index) => `### مثال ${index + 1}\n${example}`)
      .join('\n\n');
    parts.push({ text: `\n\n## أمثلة مرجعية:\n${examples}` });
  }

  if (previousContextText) {
    parts.push({ text: '\n\n## سياق الاستكمال السابق:\n' });
    parts.push({
      text: 'تم تقديم النص التالي كنتيجة لعملية استكمال سابقة. المطلوب هو مواصلة العمل بناءً على هذا السياق بالإضافة إلى الملفات الأصلية (إذا كانت لا تزال ذات صلة) وضمن "نطاق الاستكمال المطلوب" الجديد.',
    });
    parts.push({ text: '\n--- بداية السياق السابق ---\n' });
    parts.push({ text: previousContextText });
    parts.push({ text: '\n--- نهاية السياق السابق ---\n' });
    parts.push({ text: 'يرجى الآن معالجة الملفات الحالية (إذا كانت منفصلة عن السياق أعلاه) والاستمرار في الاستكمال.' });
  }

  processedFiles.forEach((file, index) => {
    parts.push({ text: `\n\n--- الملف المقدم ${index + 1}: ${file.name} (نوع MIME: ${file.mimeType}) ---` });

    if (file.mimeType.startsWith('image/') || file.mimeType === 'application/pdf') {
      if (file.isBase64 && file.content && !file.content.startsWith('[Error:') && !file.content.startsWith('[ملاحظة:')) {
        parts.push({ inlineData: { mimeType: file.mimeType, data: file.content } });
        if (file.mimeType === 'application/pdf') {
          parts.push({ text: '[ملاحظة: تم إرسال ملف PDF كبيانات. قد يتمكن النموذج من معالجة المحتوى إذا كان PDF يحتوي على طبقة نصية أو إذا كان النموذج يدعم OCR على ملفات PDF المرسلة بهذه الطريقة.]' });
        }
      } else if (file.content.startsWith('[Error:') || file.content.startsWith('[ملاحظة:')) {
        parts.push({ text: file.content });
      } else {
        parts.push({ text: `[الملف ${file.name} (${file.mimeType}) كان من المتوقع أن يكون base64 ولكن لم تتم معالجته بشكل صحيح أو أن محتواه فارغ.]` });
      }
    } else if (file.mimeType === 'text/plain' || file.mimeType === 'text/markdown') {
      parts.push({ text: file.content });
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

  let userRequirementsSection = '\n\n## مواصفات المستخدم الإضافية:\n';
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
    userRequirementsSection += '\n**تحسينات الاستكمال المطلوبة (يجب دمجها بفعالية في النص المستكمل):**\n';
    selectedCompletionEnhancements.forEach((enhancementId) => {
      userRequirementsSection += `${formatEnhancementSummary(enhancementId)}\n`;
    });
    hasUserSpecs = true;
  }

  if (!hasUserSpecs) {
    userRequirementsSection += 'لم يتم تقديم متطلبات محددة أو نطاق استكمال أو تحسينات من المستخدم بخلاف الملفات ونوع المهمة.\n';
  }
  parts.push({ text: userRequirementsSection });

  if (TASKS_EXPECTING_JSON_RESPONSE.includes(taskType)) {
    const jsonTasks = TASKS_EXPECTING_JSON_RESPONSE.map((t) => TASK_LABELS[t]?.split(':')[0] || t).join(', ');
    parts.push({
      text: `\n\n**تذكير بتعليمات الإخراج الصارمة**: الرد الأساسي يجب أن يكون JSON صالحًا يلتزم بالواجهة المحددة للمهمة. المهام التي تتطلب JSON تشمل: ${jsonTasks}.`,
    });
  } else {
    parts.push({ text: '\n\n**تذكير:** حافظ على اللغة العربية الفصحى وجودة الصياغة في جميع المخرجات.' });
  }

  return parts;
};
