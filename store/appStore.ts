import { create } from 'zustand';
import {
  TaskType,
  ProcessedFile,
  GeminiServiceResponse,
  PreviousCompletionContext,
} from '../types';
import { TASKS_REQUIRING_COMPLETION_SCOPE } from '../constants';

/**
 * Canonical shape of the application-wide Zustand store.
 *
 * Each property is intentionally documented so maintainers can quickly identify
 * where workflow-specific state lives and which actions are responsible for
 * mutating it. This significantly eases reasoning about complex UI flows.
 */
interface AppStoreState {
  /** Raw files staged by the user prior to preprocessing. */
  uploadedFiles: File[];
  /** Normalised representations of the uploaded assets that Gemini can consume. */
  processedFilesContent: ProcessedFile[];
  /** Currently selected task identifier that drives prompt construction. */
  selectedTask: TaskType | null;
  /** Free-form instructions provided by the user to tweak Gemini's behaviour. */
  specialRequirements: string;
  /** Supplemental metadata describing the project or desired tone. */
  additionalInfo: string;
  /** Scope field required for iterative completion oriented tasks. */
  completionScope: string;
  /** Optional completion enhancement modules toggled by the user. */
  selectedCompletionEnhancements: TaskType[];
  /** Snapshot of the previous completion output to enable iterative workflows. */
  previousCompletionContext: PreviousCompletionContext | null;
  /** Whether the user opted to reuse the captured previous completion context. */
  usePreviousContextForCompletion: boolean;
  /** Last response received from the Gemini service (success or error). */
  geminiResult: GeminiServiceResponse | null;
  /** Human-readable error encountered during preprocessing. */
  error: string | null;
  /** Human-readable error encountered during submission to Gemini. */
  submissionError: string | null;
  /** Flag representing whether background work is currently running. */
  isLoading: boolean;
  /** Whether a valid API key is available to drive Gemini interactions. */
  apiKeyPresent: boolean;
  /** Stores the processed files after local preprocessing succeeds. */
  setProcessedFilesContent: (files: ProcessedFile[]) => void;
  /** Persists updates to the free-form special requirements textarea. */
  setSpecialRequirements: (value: string) => void;
  /** Persists updates to the supplemental information textarea. */
  setAdditionalInfo: (value: string) => void;
  /** Updates the completion scope text field for completion tasks. */
  setCompletionScope: (value: string) => void;
  /** Saves the latest Gemini response so downstream components can render it. */
  setGeminiResult: (result: GeminiServiceResponse | null) => void;
  /** Captures preprocessing level errors to display inline in the UI. */
  setError: (message: string | null) => void;
  /** Captures submission level errors to display inline in the UI. */
  setSubmissionError: (message: string | null) => void;
  /** Toggles the loading indicator for both preprocessing and submission. */
  setIsLoading: (value: boolean) => void;
  /** Signals whether the UI has access to a configured Gemini API key. */
  setApiKeyPresent: (value: boolean) => void;
  /** Stores or clears the cached previous completion bundle. */
  setPreviousCompletionContext: (context: PreviousCompletionContext | null) => void;
  /** Enables or disables reusing the cached completion context in the next prompt. */
  setUsePreviousContextForCompletion: (value: boolean) => void;
  /** Sets the active completion enhancement modules. */
  setSelectedCompletionEnhancements: (enhancements: TaskType[]) => void;
  /** Handles new uploads by refreshing staged files and resetting dependent state. */
  handleFilesUploaded: (files: File[]) => void;
  /** Updates the currently selected task and clears incompatible settings. */
  handleTaskSelect: (task: TaskType) => void;
  /** Adds or removes a specific completion enhancement module. */
  toggleCompletionEnhancement: (enhancement: TaskType) => void;
}

/**
 * Shared Zustand store encapsulating the end-to-end workflow state for the app.
 *
 * The store centralises file handling, task configuration, Gemini responses and
 * error reporting. Co-locating the logic guarantees that React components remain
 * declarative and focus on presentation while hooks and actions orchestrate the
 * complex multi-step interactions.
 */
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
