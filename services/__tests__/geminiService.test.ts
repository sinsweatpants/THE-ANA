import { describe, expect, it, beforeEach, vi } from 'vitest';
import { Part } from '@google/genai';
import { constructPromptParts, processTextsWithGemini } from '../geminiService';
import { TaskType, ProcessedFile } from '../../types';
import { TASK_LABELS, TASK_SPECIFIC_INSTRUCTIONS, TASKS_EXPECTING_JSON_RESPONSE, GEMINI_TEXT_MODEL } from '../../constants';
import { generateContent } from '../../ai/shared/geminiClient';

vi.mock('../../ai/shared/geminiClient', () => ({
  generateContent: vi.fn(),
}));

type PromptTestCase = {
  taskType: TaskType;
  expectedPersonaSnippet: string;
};

const baseFile: ProcessedFile = {
  name: 'scene.txt',
  mimeType: 'text/plain',
  content: 'مشهد تجريبي',
  isBase64: false,
  size: 16,
};

const baseParams = {
  processedFiles: [baseFile],
  specialRequirements: 'تضمين تحليل للشخصيات',
  additionalInfo: 'احترام الزمن الكلاسيكي',
  completionScope: 'فصل واحد',
  selectedCompletionEnhancements: [TaskType.THEMATIC_MINING],
  previousContextText: 'سياق سابق',
};

describe('constructPromptParts', () => {
  const cases: PromptTestCase[] = [
    {
      taskType: TaskType.ANALYSIS,
      expectedPersonaSnippet: 'خبير تحليل درامي',
    },
    {
      taskType: TaskType.COMPLETION,
      expectedPersonaSnippet: 'كاتب سيناريو وخبير استكمال نصوص درامية',
    },
    {
      taskType: TaskType.CREATIVE,
      expectedPersonaSnippet: 'كاتب سيناريو ومؤلف مبدع',
    },
    {
      taskType: TaskType.CHARACTER_DEEP_ANALYZER,
      expectedPersonaSnippet: 'خبير متخصص في',
    },
    {
      taskType: TaskType.SCENE_GENERATOR,
      expectedPersonaSnippet: 'كاتب سيناريو ومؤلف مبدع',
    },
  ];

  it.each(cases)('builds persona and mission sections for %s', ({ taskType, expectedPersonaSnippet }) => {
    const parts = constructPromptParts({
      ...baseParams,
      taskType,
      completionScope: taskType === TaskType.COMPLETION ? 'ثلاثة مشاهد' : baseParams.completionScope,
      selectedCompletionEnhancements:
        taskType === TaskType.COMPLETION ? baseParams.selectedCompletionEnhancements : undefined,
      previousContextText: taskType === TaskType.COMPLETION ? baseParams.previousContextText : undefined,
    });

    const personaPart = parts[0] as Part;
    expect(personaPart.text).toContain(expectedPersonaSnippet);

    const missionPart = parts.find((part) => 'text' in part && part.text?.includes('## المهمة المحددة')) as Part | undefined;
    expect(missionPart?.text).toContain(TASK_LABELS[taskType]);

    const instructions = TASK_SPECIFIC_INSTRUCTIONS[taskType];
    if (instructions) {
      expect(missionPart?.text).toContain(instructions.slice(0, 10));
    }

    const fileSection = parts.find((part) => 'text' in part && part.text?.includes('--- الملف المقدم 1')) as Part | undefined;
    expect(fileSection?.text).toContain(baseFile.name);
  });

  it('gracefully handles missing optional user configuration', () => {
    const parts = constructPromptParts({
      processedFiles: [baseFile],
      taskType: TaskType.ANALYSIS,
      specialRequirements: '',
      additionalInfo: '',
    });

    const requirementsSection = parts.find(
      (part) => 'text' in part && part.text?.includes('## مواصفات المستخدم الإضافية'),
    ) as Part | undefined;

    expect(requirementsSection).toBeDefined();
    expect(requirementsSection?.text).toContain('لم يتم تقديم متطلبات محددة');

    const previousContextSection = parts.find(
      (part) => 'text' in part && part.text?.includes('## سياق الاستكمال السابق'),
    );
    expect(previousContextSection).toBeUndefined();
  });
});

describe('processTextsWithGemini', () => {
  const mockedGenerateContent = generateContent as unknown as ReturnType<typeof vi.fn>;

  beforeEach(() => {
    mockedGenerateContent.mockReset();
    mockedGenerateContent.mockResolvedValue({ data: null, rawText: 'استجابة' });
  });

  it('passes constructed prompt parts and configuration to the Gemini client', async () => {
    const params = {
      ...baseParams,
      taskType: TaskType.COMPLETION,
      processedFiles: [baseFile],
      completionScope: 'مشهد واحد',
      selectedCompletionEnhancements: [TaskType.THEMATIC_MINING],
      previousContextText: 'نتيجة سابقة',
    };

    await processTextsWithGemini(params);

    expect(mockedGenerateContent).toHaveBeenCalledTimes(1);
    const callArgs = mockedGenerateContent.mock.calls[0][0];

    expect(callArgs.model).toBe(GEMINI_TEXT_MODEL);
    expect(Array.isArray(callArgs.promptParts)).toBe(true);
    expect(callArgs.promptParts).toEqual(constructPromptParts(params));
    expect(callArgs.shouldExpectJson).toBe(TASKS_EXPECTING_JSON_RESPONSE.includes(params.taskType));
  });
});
