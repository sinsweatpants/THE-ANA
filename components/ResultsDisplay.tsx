

import React, { useState, useCallback } from 'react';
import { TaskType, GeminiTaskResultData } from '../types'; 
import { ClipboardDocumentIcon } from '../constants';
import { ENHANCED_TASK_DESCRIPTIONS as TASK_DESCRIPTIONS } from '../ai/orchestration';
import { ActionButton } from './ActionButton';

/**
 * @interface CopyButtonProps
 * @description Defines the props for the CopyButton component.
 * @property {string} textToCopy - The text to be copied to the clipboard.
 * @property {string} [className] - Optional additional CSS classes.
 */
interface CopyButtonProps {
  textToCopy: string;
  className?: string;
}

/**
 * @description A button that copies a given text to the clipboard.
 * @param {CopyButtonProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered copy button element.
 */
const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, className }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
      alert('فشل نسخ النص!');
    }
  }, [textToCopy]);

  return (
    <button
      onClick={handleCopy}
      title={copied ? "تم النسخ!" : "نسخ المحتوى"}
      className={`p-1.5 text-slate-400 hover:text-primary-light transition-colors duration-150 rounded-md hover:bg-slate-700 ${className}`}
      aria-live="polite"
    >
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <ClipboardDocumentIcon className="w-5 h-5" />
      )}
    </button>
  );
};

/**
 * @interface ResultSectionProps
 * @description Defines the props for the ResultSection component.
 * @property {string} title - The title of the result section.
 * @property {string} [content] - The content to be displayed in the section.
 * @property {boolean} [isError] - Whether the section should be styled as an error.
 * @property {React.ReactNode} [children] - Optional children to render within the section.
 */
interface ResultSectionProps {
  title: string;
  content?: string;
  isError?: boolean;
  children?: React.ReactNode;
}

/**
 * @description A component to display a section of the results with a title and content.
 * @param {ResultSectionProps} props - The props for the component.
 * @returns {React.ReactElement} The rendered result section element.
 */
const ResultSection: React.FC<ResultSectionProps> = ({ title, content, isError, children }) => {
  const cleanedContent = typeof content === 'string' ? content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "") : undefined;

  return (
    <div className={`p-6 rounded-xl shadow-xl border ${isError ? 'bg-red-900 border-red-700' : 'bg-slate-800 border-panel-border backdrop-blur-xs bg-panel'}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className={`text-2xl font-semibold ${isError ? 'text-red-200' : 'text-primary-light'}`}>{title}</h3>
        {cleanedContent && <CopyButton textToCopy={cleanedContent} />}
      </div>
      {cleanedContent && (
        <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed font-serif text-slate-200 max-h-[70vh] overflow-y-auto p-4 bg-slate-900/50 rounded-md">
          {cleanedContent}
        </pre>
      )}
      {children}
    </div>
  );
};

// Fix: Define the ResultsDisplayProps interface
/**
 * Props for the results container that renders Gemini outputs and structured payloads.
 *
 * @property resultData - Parsed JSON-like response returned by Gemini for data-rich tasks.
 * @property rawText - Plain text fallback when the service only returns unstructured content.
 * @property error - Optional error message to display instead of results.
 * @property selectedTaskType - Current task identifier used for titling and file naming.
 */
interface ResultsDisplayProps {
  resultData?: GeminiTaskResultData | null;
  rawText?: string | null;
  error?: string | null;
  selectedTaskType: TaskType | null;
}

/**
 * @description A component to display the results from the Gemini API, including structured data and raw text.
 * @param {ResultsDisplayProps} props - The props for the component.
 * @returns {React.ReactElement | null} The rendered results display element or null if there is no data.
 */
export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ resultData, rawText, error, selectedTaskType }) => {
  if (error) {
    return <ResultSection title="خطأ في المعالجة" content={error} isError />;
  }

  if (!resultData && !rawText) {
    return null; 
  }

  let displayTitle = "نتائج المعالجة";
  let mainDisplayContent: string | undefined;
  let fullJsonData: string | null = null;

  if (typeof resultData === 'string') {
    mainDisplayContent = resultData;
  } else if (typeof resultData === 'object' && resultData !== null) {
    fullJsonData = JSON.stringify(resultData, null, 2);
    // Attempt to extract a 'content' field if it exists for the main display
    if ('content' in resultData && typeof (resultData as any).content === 'string' && (resultData as any).content.trim() !== "") {
      mainDisplayContent = (resultData as any).content;
    } else {
      // If no 'content' or it's empty, use a summary of the JSON for main display, or the full JSON if short
      mainDisplayContent = fullJsonData.length < 1000 ? fullJsonData : `تم استلام بيانات منظمة (JSON). انظر "البيانات الكاملة (JSON)" أدناه أو قم بتنزيلها.`;
    }
    const taskLabel = selectedTaskType ? (TASK_DESCRIPTIONS[selectedTaskType]?.split(':')[0] || `مهمة ${selectedTaskType}`) : 'المهمة';
    displayTitle = `النتائج المتقدمة لـ: ${taskLabel}`;
  } else if (rawText) { // Fallback to rawText if resultData is not useful
    mainDisplayContent = rawText;
    displayTitle = "النص الخام المستلم";
  }


  if (!mainDisplayContent) { 
     if (rawText) { 
        mainDisplayContent = rawText;
        displayTitle = "النص الخام المستلم (كاحتياطي)";
     } else {
        return <ResultSection title="لا توجد نتائج" content="لم يتم إرجاع أي محتوى قابل للعرض." isError/>;
     }
  }

  // Further refine title based on specific task type
  if (selectedTaskType) {
      const taskDescription = TASK_DESCRIPTIONS[selectedTaskType];
      if (taskDescription) {
          displayTitle = taskDescription; // Use full description as title
      } else {
          displayTitle = `نتائج مهمة: ${selectedTaskType}`;
      }
  }
  
  const handleDownloadJson = () => {
    if (!fullJsonData) return;
    const blob = new Blob([fullJsonData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const fileName = selectedTaskType ? `gemini_result_${selectedTaskType}.json` : 'gemini_result.json';
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-8 mt-8">
      <ResultSection title={displayTitle} content={mainDisplayContent} />
      
      {fullJsonData && mainDisplayContent !== fullJsonData && ( 
        <div className={`p-6 rounded-xl shadow-xl border bg-slate-800 border-panel-border backdrop-blur-xs bg-panel`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className={`text-2xl font-semibold text-primary-light`}>البيانات الكاملة (JSON)</h3>
            <CopyButton textToCopy={fullJsonData} />
          </div>
           <pre className="whitespace-pre-wrap break-words text-sm leading-relaxed font-mono text-slate-300 max-h-[70vh] overflow-y-auto p-4 bg-slate-900/50 rounded-md">
            {fullJsonData}
          </pre>
        </div>
      )}

      {fullJsonData && (
        <div className="text-center">
          <ActionButton onClick={handleDownloadJson} variant="secondary">
            تنزيل النتائج (JSON)
          </ActionButton>
        </div>
      )}
    </div>
  );
};
