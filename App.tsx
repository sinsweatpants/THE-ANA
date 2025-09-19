

import React, { useEffect, useCallback } from 'react';
import { TaskType, ProcessedFile, TaskCategory } from './types';
import { FileUpload } from './components/FileUpload';
import { TaskSelector } from './components/TaskSelector';
import { RequirementsForm } from './components/RequirementsForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Loader } from './components/Loader';
import { ActionButton } from './components/ActionButton';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompletionEnhancements } from './components/CompletionEnhancements'; // New component
import { ErrorMessage } from './components/ErrorMessage';
import { processFilesForGemini } from './services/fileReaderService';
import { processTextsWithGemini } from './services/geminiService';
import { 
  MIN_FILES_REQUIRED, 
  SparklesIcon, LightBulbIcon, PencilSquareIcon, DocumentTextIcon,
  BeakerIcon, ChartBarIcon, UsersIcon, MagnifyingGlassIcon, FilmIcon, GlobeAltIcon, CodeBracketIcon, ClipboardDocumentIcon,
  TASKS_REQUIRING_COMPLETION_SCOPE,
  COMPLETION_ENHANCEMENT_OPTIONS, 
  TASK_LABELS, // Use short labels for UI
  TASK_CATEGORY_MAP
} from './constants';
import { useAppStore } from './store/appStore';
import { shallow } from 'zustand/shallow';


/**
 * Central orchestrator for the application workflow, wiring together file ingestion,
 * task selection, Gemini interactions, and result presentation via the shared state store.
 */
const App: React.FC = () => {
  const {
    uploadedFiles,
    processedFilesContent,
    selectedTask,
    specialRequirements,
    additionalInfo,
    completionScope,
    selectedCompletionEnhancements,
    previousCompletionContext,
    usePreviousContextForCompletion,
    geminiResult,
    error,
    submissionError,
    isLoading,
    apiKeyPresent,
    setSpecialRequirements,
    setAdditionalInfo,
    setCompletionScope,
    setProcessedFilesContent,
    setGeminiResult,
    setError,
    setSubmissionError,
    setIsLoading,
    setPreviousCompletionContext,
    setUsePreviousContextForCompletion,
    setApiKeyPresent,
    handleFilesUploaded: storeHandleFilesUploaded,
    handleTaskSelect: storeHandleTaskSelect,
    toggleCompletionEnhancement,
  } = useAppStore(
    (state) => ({
      uploadedFiles: state.uploadedFiles,
      processedFilesContent: state.processedFilesContent,
      selectedTask: state.selectedTask,
      specialRequirements: state.specialRequirements,
      additionalInfo: state.additionalInfo,
      completionScope: state.completionScope,
      selectedCompletionEnhancements: state.selectedCompletionEnhancements,
      previousCompletionContext: state.previousCompletionContext,
      usePreviousContextForCompletion: state.usePreviousContextForCompletion,
      geminiResult: state.geminiResult,
      error: state.error,
      submissionError: state.submissionError,
      isLoading: state.isLoading,
      apiKeyPresent: state.apiKeyPresent,
      setSpecialRequirements: state.setSpecialRequirements,
      setAdditionalInfo: state.setAdditionalInfo,
      setCompletionScope: state.setCompletionScope,
      setProcessedFilesContent: state.setProcessedFilesContent,
      setGeminiResult: state.setGeminiResult,
      setError: state.setError,
      setSubmissionError: state.setSubmissionError,
      setIsLoading: state.setIsLoading,
      setPreviousCompletionContext: state.setPreviousCompletionContext,
      setUsePreviousContextForCompletion: state.setUsePreviousContextForCompletion,
      setApiKeyPresent: state.setApiKeyPresent,
      handleFilesUploaded: state.handleFilesUploaded,
      handleTaskSelect: state.handleTaskSelect,
      toggleCompletionEnhancement: state.toggleCompletionEnhancement,
    }),
    shallow
  );

  const handleFilesUploaded = useCallback((files: File[]) => {
    storeHandleFilesUploaded(files);
  }, [storeHandleFilesUploaded]);

  const handleTaskSelect = useCallback((task: TaskType) => {
    storeHandleTaskSelect(task);
  }, [storeHandleTaskSelect]);

  const handleToggleEnhancement = useCallback((enhancementId: TaskType) => {
    toggleCompletionEnhancement(enhancementId);
  }, [toggleCompletionEnhancement]);

  const generateFileHash = useCallback((files: ProcessedFile[]): string => {
    if (!files || files.length === 0) return "";
    const names = files.map(f => f.name).sort().join(',');
    const totalSize = files.reduce((acc, f) => acc + f.size, 0);
    return `${names}-${totalSize}`;
  }, []);

  useEffect(() => {
    const processAndSetFiles = async () => {
      if (uploadedFiles.length > 0) {
        setIsLoading(true); 
        setError(null); 
        setSubmissionError(null); 
        setPreviousCompletionContext(null); 
        setUsePreviousContextForCompletion(false);
        try {
          const pFiles = await processFilesForGemini(uploadedFiles);
          setProcessedFilesContent(pFiles);
          const fileProcessingError = pFiles.some(f => f.content.startsWith('[Error:'));
          if (fileProcessingError) {
            setError("حدث خطأ أثناء معالجة بعض الملفات. يرجى التحقق من صلاحيتها.");
          }
        } catch (err: any) {
          console.error("Error processing files:", err);
          setError(err.message || "فشل في معالجة ملف واحد أو أكثر. يرجى التأكد من صلاحية الملفات.");
          setProcessedFilesContent([]);
        } finally {
          setIsLoading(false); 
        }
      } else {
        setProcessedFilesContent([]); 
        setError(null); 
        setPreviousCompletionContext(null);
      }
    };
    processAndSetFiles();
  }, [
    uploadedFiles,
    setIsLoading,
    setError,
    setSubmissionError,
    setPreviousCompletionContext,
    setUsePreviousContextForCompletion,
    setProcessedFilesContent,
  ]);


  const handleSubmit = useCallback(async () => {
    if (!selectedTask || processedFilesContent.length < MIN_FILES_REQUIRED) {
      setSubmissionError(`يرجى تحميل ${MIN_FILES_REQUIRED} ملف (ملفات) على الأقل، واختيار نوع الخدمة، والتأكد من معالجتها بنجاح قبل الإرسال.`);
      return;
    }
    if (TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask) && !completionScope.trim()) {
      setSubmissionError(`لهذه المهمة (${TASK_LABELS[selectedTask] || selectedTask}), يرجى تحديد "نطاق الاستكمال المطلوب".`);
      return;
    }

    setSubmissionError(null);
    setGeminiResult(null);
    setIsLoading(true);

    let previousContextText: string | undefined = undefined;
    if (usePreviousContextForCompletion && previousCompletionContext && generateFileHash(processedFilesContent) === previousCompletionContext.filesHash) {
      previousContextText = previousCompletionContext.lastCompletionOutput;
    }

    try {
      const result = await processTextsWithGemini({
        processedFiles: processedFilesContent,
        taskType: selectedTask,
        specialRequirements,
        additionalInfo,
        completionScope: TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask) ? completionScope : undefined,
        selectedCompletionEnhancements: selectedTask === TaskType.COMPLETION ? selectedCompletionEnhancements : undefined,
        previousContextText: previousContextText,
      });

      setGeminiResult(result); 

      if (result.error) {
        setSubmissionError(result.error); 
        if (result.error.toLowerCase().includes("api_key") || result.error.includes("مفتاح")) {
            setApiKeyPresent(false);
        }
      } else {
        setApiKeyPresent(true); 
        if (TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask) && result.rawText && completionScope) {
          const currentFilesHash = generateFileHash(processedFilesContent);
          let baseContentForNextIteration = "";
          if (usePreviousContextForCompletion && previousCompletionContext && previousCompletionContext.filesHash === currentFilesHash) {
            baseContentForNextIteration = previousCompletionContext.lastCompletionOutput + "\n\n---\n\n" + result.rawText;
          } else { 
            baseContentForNextIteration = processedFilesContent.map(f => f.content).join("\n\n---\n\n") + "\n\n---\n\n" + result.rawText;
          }
          
          setPreviousCompletionContext({
            filesHash: currentFilesHash,
            originalTask: selectedTask,
            completionScopeOfResult: completionScope,
            lastCompletionOutput: baseContentForNextIteration, 
          });
          setUsePreviousContextForCompletion(true); 
        } else if (!TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask)){
           setPreviousCompletionContext(null); 
           setUsePreviousContextForCompletion(false);
        }
      }
    } catch (e: any) {
      console.error("Submission error:", e);
      setSubmissionError(e.message || "حدث خطأ غير متوقع أثناء الإرسال.");
       if (e.message && (e.message.toLowerCase().includes("api_key") || e.message.includes("مفتاح"))) {
            setApiKeyPresent(false);
        }
    } finally {
      setIsLoading(false);
    }
  }, [
    processedFilesContent,
    selectedTask,
    specialRequirements,
    additionalInfo,
    completionScope,
    selectedCompletionEnhancements,
    usePreviousContextForCompletion,
    previousCompletionContext,
    generateFileHash,
    setSubmissionError,
    setGeminiResult,
    setIsLoading,
    setPreviousCompletionContext,
    setUsePreviousContextForCompletion,
    setApiKeyPresent,
  ]);

  const isProcessingFiles = isLoading && uploadedFiles.length > 0 && processedFilesContent.length !== uploadedFiles.length;

  const getButtonIconAndText = () => {
    if (!selectedTask) return { icon: <SparklesIcon className="w-5 h-5" />, text: 'ابدأ المعالجة' };
    
    const taskLabel = TASK_LABELS[selectedTask] || 'معالجة';
    const taskCategory = TASK_CATEGORY_MAP[selectedTask];

    let icon = <SparklesIcon className="w-5 h-5" />;

    switch (taskCategory) {
        case TaskCategory.CORE:
            if (selectedTask === TaskType.ANALYSIS) icon = <LightBulbIcon className="w-5 h-5" />;
            if (selectedTask === TaskType.CREATIVE) icon = <SparklesIcon className="w-5 h-5" />;
            if (selectedTask === TaskType.INTEGRATED) icon = <DocumentTextIcon className="w-5 h-5" />;
            if (selectedTask === TaskType.COMPLETION) icon = <PencilSquareIcon className="w-5 h-5" />;
            break;
        case TaskCategory.ANALYSIS:
            icon = <LightBulbIcon className="w-5 h-5" />;
            break;
        case TaskCategory.CREATIVE:
            icon = <SparklesIcon className="w-5 h-5" />;
            break;
        case TaskCategory.PREDICTIVE:
            icon = <BeakerIcon className="w-5 h-5" />;
            break;
        case TaskCategory.ADVANCED_MODULES:
            switch (selectedTask) {
                case TaskType.CHARACTER_DEEP_ANALYZER: icon = <UsersIcon className="w-5 h-5" />; break;
                case TaskType.DIALOGUE_ADVANCED_ANALYZER: icon = <MagnifyingGlassIcon className="w-5 h-5" />; break;
                case TaskType.VISUAL_CINEMATIC_ANALYZER: icon = <FilmIcon className="w-5 h-5" />; break;
                case TaskType.THEMES_MESSAGES_ANALYZER: icon = <LightBulbIcon className="w-5 h-5" />; break;
                case TaskType.CULTURAL_HISTORICAL_ANALYZER: icon = <GlobeAltIcon className="w-5 h-5" />; break;
                case TaskType.PRODUCIBILITY_ANALYZER: icon = <ChartBarIcon className="w-5 h-5" />; break;
                case TaskType.TARGET_AUDIENCE_ANALYZER: icon = <UsersIcon className="w-5 h-5" />; break;
                case TaskType.LITERARY_QUALITY_ANALYZER: icon = <PencilSquareIcon className="w-5 h-5" />; break;
                case TaskType.RECOMMENDATIONS_GENERATOR: icon = <SparklesIcon className="w-5 h-5" />; break;
                default: icon = <ClipboardDocumentIcon className="w-5 h-5" />; break;
            }
            break;
        default:
            break;
    }
    return { icon, text: taskLabel };
  };

  const { icon: buttonIcon, text: buttonText } = getButtonIconAndText();
  
  const isTaskRequiringScope = selectedTask && TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask);
  let submitDisabledReason = "";
    if (uploadedFiles.length < MIN_FILES_REQUIRED) {
        submitDisabledReason += `يرجى تحميل ${MIN_FILES_REQUIRED} ملف على الأقل. `;
    }
    if (!selectedTask) {
        submitDisabledReason += 'يرجى اختيار نوع الخدمة. ';
    }
    if (isTaskRequiringScope && !completionScope.trim()) {
      submitDisabledReason += `لهذه المهمة، يرجى تحديد "نطاق الاستكمال المطلوب". `;
    }
    if (isProcessingFiles) {
        submitDisabledReason += 'جاري معالجة الملفات المرفوعة. يرجى الانتظار. ';
    }
    if (error) { 
        submitDisabledReason += `يوجد خطأ في معالجة الملفات يمنع الإرسال. `;
    }

  const isSubmitDisabled = !!submitDisabledReason.trim() || isLoading || !apiKeyPresent;

  const showIterativeCompletionOption = 
    previousCompletionContext &&
    selectedTask && 
    TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask) &&
    generateFileHash(processedFilesContent) === previousCompletionContext.filesHash;


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {isLoading && <Loader message={isProcessingFiles ? "جاري معالجة الملفات..." : (selectedTask && TASK_LABELS[selectedTask] ? `جاري ${TASK_LABELS[selectedTask]}...` : "جاري معالجة طلبك...")} />}
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {!apiKeyPresent && (
            <div className="p-4 mb-6 bg-red-800 border border-red-600 text-red-100 rounded-lg shadow-lg" role="alert">
              <h3 className="font-bold text-lg">خطأ في مفتاح API</h3>
              <p>مفتاح Gemini API مفقود أو غير صالح. يرجى التأكد من أن متغير البيئة <code>API_KEY</code> قد تم تكوينه بشكل صحيح لبيئة التطبيق. هذا التطبيق لا يمكنه العمل بدون مفتاح API صالح.</p>
            </div>
          )}
          {error && (
            <ErrorMessage title="خطأ في معالجة الملفات" description={error} tone="warning" className="mb-6" />
          )}

          <FileUpload uploadedFiles={uploadedFiles} onFilesUploaded={handleFilesUploaded} />
          
          <TaskSelector selectedTask={selectedTask} onTaskSelect={handleTaskSelect} />

          {selectedTask === TaskType.COMPLETION && (
            <CompletionEnhancements
              availableEnhancements={COMPLETION_ENHANCEMENT_OPTIONS}
              selectedEnhancements={selectedCompletionEnhancements}
              onToggleEnhancement={handleToggleEnhancement}
            />
          )}

          {selectedTask && TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask) && (
            <div className="w-full p-6 bg-slate-800 rounded-xl shadow-xl border border-panel-border backdrop-blur-xs bg-panel space-y-4">
              <div>
                <label htmlFor="completionScope" className="block text-lg font-medium text-slate-200 mb-2">
                  نطاق الاستكمال المطلوب <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="completionScope"
                  name="completionScope"
                  className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md shadow-sm focus:ring-primary focus:border-primary text-slate-100 placeholder-slate-400 text-sm"
                  placeholder="مثال: فصل واحد، 3 مشاهد، حتى نهاية المسرحية، حلقتان..."
                  value={completionScope}
                  onChange={(e) => setCompletionScope(e.target.value)}
                  aria-describedby="completionScopeHelp"
                />
                <p id="completionScopeHelp" className="mt-2 text-xs text-slate-400">
                  يرجى تحديد مدى الاستكمال الذي ترغب به لهذه المهمة.
                </p>
              </div>
              {showIterativeCompletionOption && previousCompletionContext && (
                <div className="mt-4 p-4 bg-slate-700/50 rounded-md border border-slate-600">
                  <label htmlFor="usePreviousContext" className="flex items-center text-sm text-slate-200">
                    <input
                      type="checkbox"
                      id="usePreviousContext"
                      checked={usePreviousContextForCompletion}
                      onChange={(e) => setUsePreviousContextForCompletion(e.target.checked)}
                      className="me-2 h-4 w-4 rounded border-slate-500 bg-slate-600 text-primary focus:ring-primary-dark"
                    />
                    استخدام نتيجة الاستكمال السابقة ("{previousCompletionContext.completionScopeOfResult}") كجزء من السياق الحالي لهذه المجموعة من الملفات؟
                  </label>
                  <p className="mt-1 text-xs text-slate-400">
                    سيؤدي هذا إلى إرسال المحتوى الأصلي بالإضافة إلى الاستكمال السابق إلى النموذج لمواصلة العمل.
                  </p>
                </div>
              )}
            </div>
          )}
          
          <RequirementsForm
            specialRequirements={specialRequirements}
            additionalInfo={additionalInfo}
            onSpecialRequirementsChange={setSpecialRequirements}
            onAdditionalInfoChange={setAdditionalInfo}
          />
          
          <div className="text-center pt-4">
            <ActionButton
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
              icon={buttonIcon}
              aria-label={buttonText}
              title={submitDisabledReason.trim() || buttonText} 
            >
              {isLoading && !isProcessingFiles ? 'جاري الإرسال...' : buttonText}
            </ActionButton>
            {isSubmitDisabled && !isLoading && apiKeyPresent && (
                 <p className="text-sm text-yellow-400 mt-3" role="status">
                    {submitDisabledReason.trim()}
                </p>
            )}
             {isProcessingFiles && ( 
                <p className="text-sm text-blue-400 mt-3" role="status">
                    جاري معالجة الملفات قبل الإرسال...
                </p>
             )}
          </div>
          
          {submissionError && (
            <ErrorMessage title="خطأ في الإرسال" description={submissionError} className="mt-6" />
          )}

          {geminiResult && !geminiResult.error && (geminiResult.data || geminiResult.rawText) && (
            <ResultsDisplay
              resultData={geminiResult.data}
              rawText={geminiResult.rawText}
              error={null} 
              selectedTaskType={selectedTask}
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
