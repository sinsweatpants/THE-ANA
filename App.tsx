
import React, { useState, useEffect, useCallback } from 'react';
import { TaskType, ProcessedFile, GeminiServiceResponse, PreviousCompletionContext, CompletionEnhancementOption, TaskCategory } from './types'; 
import { FileUpload } from './components/FileUpload';
import { TaskSelector } from './components/TaskSelector';
import { RequirementsForm } from './components/RequirementsForm';
import { ResultsDisplay } from './components/ResultsDisplay';
import { Loader } from './components/Loader';
import { ActionButton } from './components/ActionButton';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CompletionEnhancements } from './components/CompletionEnhancements'; // New component
import { processFilesForGemini } from './services/fileReaderService';
import { processTextsWithGemini } from './services/geminiService';
import { 
  MIN_FILES_REQUIRED, 
  SparklesIcon, LightBulbIcon, PencilSquareIcon, DocumentTextIcon,
  BeakerIcon, ChartBarIcon, UsersIcon, MagnifyingGlassIcon, FilmIcon, GlobeAltIcon, CodeBracketIcon, ClipboardDocumentIcon, // Added ClipboardDocumentIcon
  TASKS_REQUIRING_COMPLETION_SCOPE,
  COMPLETION_ENHANCEMENT_OPTIONS, 
  ENHANCED_TASK_DESCRIPTIONS as TASK_DESCRIPTIONS,
  TASK_CATEGORY_MAP
} from './constants';


const App: React.FC = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [processedFilesContent, setProcessedFilesContent] = useState<ProcessedFile[]>([]);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [specialRequirements, setSpecialRequirements] = useState<string>('');
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  const [completionScope, setCompletionScope] = useState<string>(''); 
  
  const [selectedCompletionEnhancements, setSelectedCompletionEnhancements] = useState<TaskType[]>([]);
  const [previousCompletionContext, setPreviousCompletionContext] = useState<PreviousCompletionContext | null>(null);
  const [usePreviousContextForCompletion, setUsePreviousContextForCompletion] = useState<boolean>(false);

  const [geminiResult, setGeminiResult] = useState<GeminiServiceResponse | null>(null);
  const [error, setError] = useState<string | null>(null); 
  const [submissionError, setSubmissionError] = useState<string | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiKeyPresent, setApiKeyPresent] = useState<boolean>(true); 

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
  }, [uploadedFiles]);


  const handleFilesUploaded = useCallback((files: File[]) => {
    setUploadedFiles(files); 
    setSubmissionError(null); 
    setGeminiResult(null);
    setPreviousCompletionContext(null);
    setUsePreviousContextForCompletion(false);
    setSelectedCompletionEnhancements([]);
  }, []); 

  const handleTaskSelect = useCallback((task: TaskType) => {
    setSelectedTask(task);
    setSubmissionError(null); 
    setGeminiResult(null);
    if (!TASKS_REQUIRING_COMPLETION_SCOPE.includes(task)) {
      setCompletionScope(''); 
    }
    if (task !== TaskType.COMPLETION) {
      setSelectedCompletionEnhancements([]);
    }
    if (!TASKS_REQUIRING_COMPLETION_SCOPE.includes(task)) {
        setUsePreviousContextForCompletion(false);
    }
  }, []); 

  const handleToggleEnhancement = useCallback((enhancementId: TaskType) => {
    setSelectedCompletionEnhancements(prev => 
      prev.includes(enhancementId) 
        ? prev.filter(id => id !== enhancementId)
        : [...prev, enhancementId]
    );
  }, []);

  const handleSubmit = useCallback(async () => {
    if (!selectedTask || processedFilesContent.length < MIN_FILES_REQUIRED) {
      setSubmissionError(`يرجى تحميل ${MIN_FILES_REQUIRED} ملف (ملفات) على الأقل، واختيار نوع الخدمة، والتأكد من معالجتها بنجاح قبل الإرسال.`);
      return;
    }
    if (TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask) && !completionScope.trim()) {
      setSubmissionError(`لهذه المهمة (${TASK_DESCRIPTIONS[selectedTask] || selectedTask}), يرجى تحديد "نطاق الاستكمال المطلوب".`);
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
        generateFileHash
    ]);

  const isProcessingFiles = isLoading && uploadedFiles.length > 0 && processedFilesContent.length !== uploadedFiles.length;
  
  const canSubmit = selectedTask !== null && 
                    uploadedFiles.length >= MIN_FILES_REQUIRED && 
                    processedFilesContent.length === uploadedFiles.length &&
                    !isProcessingFiles && 
                    !isLoading; 

  const getButtonIconAndText = () => {
    if (!selectedTask) return { icon: <SparklesIcon className="w-5 h-5" />, text: 'ابدأ المعالجة' };
    
    const taskDescriptionPart = TASK_DESCRIPTIONS[selectedTask] ? TASK_DESCRIPTIONS[selectedTask].split(':')[0] : 'معالجة';
    const taskLabelPartOnly = TASK_DESCRIPTIONS[selectedTask] ? TASK_DESCRIPTIONS[selectedTask].substring(0, TASK_DESCRIPTIONS[selectedTask].indexOf('(') !== -1 ? TASK_DESCRIPTIONS[selectedTask].indexOf('(') : TASK_DESCRIPTIONS[selectedTask].length).trim() : 'معالجة';
    const taskCategory = TASK_CATEGORY_MAP[selectedTask];

    switch (taskCategory) {
        case TaskCategory.CORE:
            if (selectedTask === TaskType.ANALYSIS) return { icon: <LightBulbIcon className="w-5 h-5" />, text: taskDescriptionPart };
            if (selectedTask === TaskType.CREATIVE) return { icon: <SparklesIcon className="w-5 h-5" />, text: taskDescriptionPart };
            if (selectedTask === TaskType.INTEGRATED) return { icon: <DocumentTextIcon className="w-5 h-5" />, text: taskDescriptionPart };
            if (selectedTask === TaskType.COMPLETION) return { icon: <PencilSquareIcon className="w-5 h-5" />, text: taskDescriptionPart };
            return { icon: <SparklesIcon className="w-5 h-5" />, text: taskDescriptionPart };

        case TaskCategory.ANALYSIS:
            return { icon: <LightBulbIcon className="w-5 h-5" />, text: taskDescriptionPart || 'تحليل الآن' };
        
        case TaskCategory.CREATIVE:
            return { icon: <SparklesIcon className="w-5 h-5" />, text: taskDescriptionPart || 'إنشاء الآن' };

        case TaskCategory.PREDICTIVE:
            return { icon: <BeakerIcon className="w-5 h-5" />, text: taskDescriptionPart || 'تنبؤ/تحسين' };
        
        case TaskCategory.ADVANCED_MODULES:
            let buttonTextForModule = taskLabelPartOnly || 'تشغيل الوحدة';
             if (buttonTextForModule.startsWith("الوحدة")) { // Remove "الوحدة X:" prefix for cleaner button text
                buttonTextForModule = buttonTextForModule.substring(buttonTextForModule.indexOf(':') + 1).trim();
            }

            switch (selectedTask) {
                case TaskType.CHARACTER_DEEP_ANALYZER: return { icon: <UsersIcon className="w-5 h-5" />, text: buttonTextForModule };
                case TaskType.DIALOGUE_ADVANCED_ANALYZER: return { icon: <MagnifyingGlassIcon className="w-5 h-5" />, text: buttonTextForModule };
                case TaskType.VISUAL_CINEMATIC_ANALYZER: return { icon: <FilmIcon className="w-5 h-5" />, text: buttonTextForModule };
                case TaskType.THEMES_MESSAGES_ANALYZER: return { icon: <LightBulbIcon className="w-5 h-5" />, text: buttonTextForModule };
                case TaskType.CULTURAL_HISTORICAL_ANALYZER: return { icon: <GlobeAltIcon className="w-5 h-5" />, text: buttonTextForModule };
                case TaskType.PRODUCIBILITY_ANALYZER: return { icon: <ChartBarIcon className="w-5 h-5" />, text: buttonTextForModule };
                case TaskType.TARGET_AUDIENCE_ANALYZER: return { icon: <UsersIcon className="w-5 h-5" />, text: buttonTextForModule };
                case TaskType.LITERARY_QUALITY_ANALYZER: return { icon: <PencilSquareIcon className="w-5 h-5" />, text: buttonTextForModule };
                case TaskType.RECOMMENDATIONS_GENERATOR: return { icon: <SparklesIcon className="w-5 h-5" />, text: buttonTextForModule };
                default: return { icon: <ClipboardDocumentIcon className="w-5 h-5" />, text: buttonTextForModule }; 
            }
            
        default:
            return { icon: <SparklesIcon className="w-5 h-5" />, text: taskDescriptionPart || 'ابدأ المعالجة' };
    }
  };

  const { icon: buttonIcon, text: buttonText } = getButtonIconAndText();
  
  let submitDisabledReason = "";
    if (uploadedFiles.length < MIN_FILES_REQUIRED) {
        submitDisabledReason += `يرجى تحميل ${MIN_FILES_REQUIRED} ملف على الأقل. `;
    }
    if (selectedTask === null) {
        submitDisabledReason += 'يرجى اختيار نوع الخدمة. ';
    }
    if (isProcessingFiles) {
        submitDisabledReason += 'جاري معالجة الملفات المرفوعة. يرجى الانتظار. ';
    }
    if (selectedTask && TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask) && !completionScope.trim()) {
      submitDisabledReason += `لهذه المهمة، يرجى تحديد "نطاق الاستكمال المطلوب". `;
    }
    if (error) { 
        submitDisabledReason += `خطأ في معالجة الملفات: ${error}. `;
    }

  const showIterativeCompletionOption = 
    previousCompletionContext &&
    selectedTask && 
    TASKS_REQUIRING_COMPLETION_SCOPE.includes(selectedTask) &&
    generateFileHash(processedFilesContent) === previousCompletionContext.filesHash;


  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900">
      {isLoading && <Loader message={isProcessingFiles ? "جاري معالجة الملفات..." : (selectedTask && TASK_DESCRIPTIONS[selectedTask!] ? `جاري ${TASK_DESCRIPTIONS[selectedTask!].split(':')[0]}...` : "جاري معالجة طلبك...")} />}
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
            <div className="p-4 mb-6 bg-yellow-700 border border-yellow-500 text-yellow-100 rounded-lg shadow-lg" role="alert">
              <h3 className="font-bold text-lg">خطأ في معالجة الملفات</h3>
              <p>{error}</p>
            </div>
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
              disabled={!canSubmit || isLoading || !apiKeyPresent || !!error} 
              icon={buttonIcon}
              aria-label={buttonText}
              title={submitDisabledReason.trim() || buttonText} 
            >
              {isLoading && !isProcessingFiles ? 'جاري الإرسال...' : buttonText}
            </ActionButton>
            {(!canSubmit || !!error) && apiKeyPresent && ( 
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
             <div className="p-4 mt-6 bg-red-800 border border-red-600 text-red-100 rounded-lg shadow-lg" role="alert">
                <h3 className="font-bold text-lg">خطأ في الإرسال</h3>
                <p>{submissionError}</p>
            </div>
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
