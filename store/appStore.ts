import { create } from 'zustand';
import {
  TaskType,
  ProcessedFile,
  GeminiServiceResponse,
  PreviousCompletionContext,
} from '../types';
import { TASKS_REQUIRING_COMPLETION_SCOPE } from '../constants';

interface AppStoreState {
  uploadedFiles: File[];
  processedFilesContent: ProcessedFile[];
  selectedTask: TaskType | null;
  specialRequirements: string;
  additionalInfo: string;
  completionScope: string;
  selectedCompletionEnhancements: TaskType[];
  previousCompletionContext: PreviousCompletionContext | null;
  usePreviousContextForCompletion: boolean;
  geminiResult: GeminiServiceResponse | null;
  error: string | null;
  submissionError: string | null;
  isLoading: boolean;
  apiKeyPresent: boolean;
  setProcessedFilesContent: (files: ProcessedFile[]) => void;
  setSpecialRequirements: (value: string) => void;
  setAdditionalInfo: (value: string) => void;
  setCompletionScope: (value: string) => void;
  setGeminiResult: (result: GeminiServiceResponse | null) => void;
  setError: (message: string | null) => void;
  setSubmissionError: (message: string | null) => void;
  setIsLoading: (value: boolean) => void;
  setApiKeyPresent: (value: boolean) => void;
  setPreviousCompletionContext: (context: PreviousCompletionContext | null) => void;
  setUsePreviousContextForCompletion: (value: boolean) => void;
  setSelectedCompletionEnhancements: (enhancements: TaskType[]) => void;
  handleFilesUploaded: (files: File[]) => void;
  handleTaskSelect: (task: TaskType) => void;
  toggleCompletionEnhancement: (enhancement: TaskType) => void;
}

export const useAppStore = create<AppStoreState>((set, get) => ({
  uploadedFiles: [],
  processedFilesContent: [],
  selectedTask: null,
  specialRequirements: '',
  additionalInfo: '',
  completionScope: '',
  selectedCompletionEnhancements: [],
  previousCompletionContext: null,
  usePreviousContextForCompletion: false,
  geminiResult: null,
  error: null,
  submissionError: null,
  isLoading: false,
  apiKeyPresent: true,
  setProcessedFilesContent: (files) => set({ processedFilesContent: files }),
  setSpecialRequirements: (value) => set({ specialRequirements: value }),
  setAdditionalInfo: (value) => set({ additionalInfo: value }),
  setCompletionScope: (value) => set({ completionScope: value }),
  setGeminiResult: (result) => set({ geminiResult: result }),
  setError: (message) => set({ error: message }),
  setSubmissionError: (message) => set({ submissionError: message }),
  setIsLoading: (value) => set({ isLoading: value }),
  setApiKeyPresent: (value) => set({ apiKeyPresent: value }),
  setPreviousCompletionContext: (context) => set({ previousCompletionContext: context }),
  setUsePreviousContextForCompletion: (value) => set({ usePreviousContextForCompletion: value }),
  setSelectedCompletionEnhancements: (enhancements) => set({ selectedCompletionEnhancements: enhancements }),
  handleFilesUploaded: (files) => {
    set({
      uploadedFiles: files,
      submissionError: null,
      geminiResult: null,
      previousCompletionContext: null,
      usePreviousContextForCompletion: false,
      selectedCompletionEnhancements: [],
    });
  },
  handleTaskSelect: (task) => {
    const updates: Partial<AppStoreState> = {
      selectedTask: task,
      submissionError: null,
      geminiResult: null,
    };

    if (!TASKS_REQUIRING_COMPLETION_SCOPE.includes(task)) {
      updates.completionScope = '';
      updates.usePreviousContextForCompletion = false;
    }

    if (task !== TaskType.COMPLETION) {
      updates.selectedCompletionEnhancements = [];
    }

    set(updates);
  },
  toggleCompletionEnhancement: (enhancement) => {
    set((state) => {
      const isSelected = state.selectedCompletionEnhancements.includes(enhancement);
      return {
        selectedCompletionEnhancements: isSelected
          ? state.selectedCompletionEnhancements.filter((id) => id !== enhancement)
          : [...state.selectedCompletionEnhancements, enhancement],
      };
    });
  },
}));
