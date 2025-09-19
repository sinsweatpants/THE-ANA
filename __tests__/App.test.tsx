import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import App from '../App';
import { processFilesForGemini } from '../services/fileReaderService';
import { executeCoreAnalysis } from '../ai/tasks';
import { useAppStore } from '../store/appStore';
import { ProcessedFile, TaskType, GeminiServiceResponse } from '../types';

const mockUseDropzone = vi.fn();

type DropzoneOptions = {
  onDrop: (
    acceptedFiles: File[],
    rejectedFiles: Array<{ file: File; errors: Array<{ code: string; message: string }> }>,
  ) => void;
};

vi.mock('react-dropzone', () => ({
  useDropzone: (options: unknown) => mockUseDropzone(options),
}));

vi.mock('../services/fileReaderService', () => ({
  processFilesForGemini: vi.fn(),
}));

vi.mock('../ai/tasks', () => ({
  executeAdaptiveRewriting: vi.fn(),
  executeAudienceResonanceAnalysis: vi.fn(),
  executeCharacterDeepAnalysis: vi.fn(),
  executeCharacterNetworkAnalysis: vi.fn(),
  executeCharacterVoiceGeneration: vi.fn(),
  executeCompletionTask: vi.fn(),
  executeConflictDynamicsAnalysis: vi.fn(),
  executeCoreAnalysis: vi.fn(),
  executeCoreCreative: vi.fn(),
  executeCulturalHistoricalAnalysis: vi.fn(),
  executeDialogueAdvancedAnalysis: vi.fn(),
  executeDialogueForensicsAnalysis: vi.fn(),
  executeIntegratedAnalysis: vi.fn(),
  executeLiteraryQualityAnalysis: vi.fn(),
  executePlotPrediction: vi.fn(),
  executePlatformAdaptation: vi.fn(),
  executeProducibilityAnalysis: vi.fn(),
  executeRecommendationsGeneration: vi.fn(),
  executeRhythmMappingAnalysis: vi.fn(),
  executeSceneGeneration: vi.fn(),
  executeStyleFingerprintAnalysis: vi.fn(),
  executeTargetAudienceAnalysis: vi.fn(),
  executeThematicMiningAnalysis: vi.fn(),
  executeThemesMessagesAnalysis: vi.fn(),
  executeTensionOptimization: vi.fn(),
  executeVisualCinematicAnalysis: vi.fn(),
  executeWorldBuilding: vi.fn(),
}));

const mockedProcessFilesForGemini = vi.mocked(processFilesForGemini);
const mockedExecuteCoreAnalysis = vi.mocked(executeCoreAnalysis);

const resetStoreState = () => {
  useAppStore.setState({
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
  });
};

describe('App integration workflow', () => {
  let latestOptions: DropzoneOptions | null = null;

  beforeEach(() => {
    latestOptions = null;
    resetStoreState();
    mockUseDropzone.mockReset();
    mockedProcessFilesForGemini.mockReset();
    mockedExecuteCoreAnalysis.mockReset();

    mockUseDropzone.mockImplementation((options: DropzoneOptions) => {
      latestOptions = options;
      return {
        getRootProps: () => ({}),
        getInputProps: () => ({}),
        isDragActive: false,
      };
    });
  });

  it('handles uploading, task selection, and submission with loader feedback', async () => {
    const processedFiles: ProcessedFile[] = [
      {
        name: 'script.txt',
        mimeType: 'text/plain',
        content: 'المحتوى المعالج',
        isBase64: false,
        size: 42,
      },
    ];

    mockedProcessFilesForGemini.mockResolvedValue(processedFiles);

    let resolveSubmission: ((value: GeminiServiceResponse) => void) | undefined;
    const submissionPromise = new Promise<GeminiServiceResponse>((resolve) => {
      resolveSubmission = resolve;
    });
    mockedExecuteCoreAnalysis.mockReturnValue(submissionPromise);

    render(<App />);

    expect(latestOptions).not.toBeNull();

    const file = new File(['Scene'], 'script.txt', { type: 'text/plain' });

    await act(async () => {
      latestOptions?.onDrop([file], []);
    });

    await waitFor(() => {
      expect(mockedProcessFilesForGemini).toHaveBeenCalledWith([file]);
    });

    await screen.findByText('script.txt');

    const taskButton = (await screen.findByText('تحليل نقدي')).closest('button');
    expect(taskButton).not.toBeNull();
    fireEvent.click(taskButton!);

    const submitButtons = screen.getAllByRole('button', { name: 'تحليل نقدي' });
    const submitButton = submitButtons[submitButtons.length - 1];

    await act(async () => {
      fireEvent.click(submitButton);
    });

    expect(await screen.findByText('جاري تحليل نقدي...')).toBeInTheDocument();

    expect(resolveSubmission).toBeDefined();
    await act(async () => {
      resolveSubmission!({ data: null, rawText: 'استجابة' });
    });

    await waitFor(() => {
      expect(screen.queryByText('جاري تحليل نقدي...')).not.toBeInTheDocument();
    });

    expect(mockedExecuteCoreAnalysis).toHaveBeenCalledWith(
      expect.objectContaining({
        processedFiles,
      }),
    );
  });
});
