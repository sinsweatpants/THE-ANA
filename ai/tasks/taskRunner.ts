import { GeminiServiceResponse, TaskType } from '../../types';
import { generateContent } from '../shared/geminiClient';
import { TaskRuntimeParams } from './taskTypes';
import { AIAgentConfig } from '../types';
import { buildPromptParts } from './promptBuilder';
import { TASKS_EXPECTING_JSON_RESPONSE } from '../../constants';

export interface ExecuteTaskOptions extends TaskRuntimeParams {
  taskType: TaskType;
  agentConfig: AIAgentConfig;
  instructions: string;
}

export const executeTask = async (options: ExecuteTaskOptions): Promise<GeminiServiceResponse> => {
  const { taskType, agentConfig, instructions, ...params } = options;

  const promptParts = buildPromptParts({
    ...params,
    taskType,
    agentConfig,
    instructions,
  });

  return generateContent({
    promptParts,
    model: 'models/gemini-2.5-pro',
    shouldExpectJson: TASKS_EXPECTING_JSON_RESPONSE.includes(taskType),
    maxOutputTokens: 65000,
  });
};

export const executeTaskSequence = async (
  sequence: ExecuteTaskOptions[],
): Promise<GeminiServiceResponse[]> => {
  const results: GeminiServiceResponse[] = [];

  for (const taskOptions of sequence) {
    const outcome = await executeTask(taskOptions);
    results.push(outcome);
  }

  return results;
};
