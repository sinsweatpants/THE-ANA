import { ProcessedFile, TaskType } from '../../types';

export interface TaskRuntimeParams {
  processedFiles: ProcessedFile[];
  specialRequirements: string;
  additionalInfo: string;
  completionScope?: string;
  selectedCompletionEnhancements?: TaskType[];
  previousContextText?: string;
}
