import React from 'react';
import { TaskType, CompletionEnhancementOption } from '../types';
import { LightBulbIcon, SparklesIcon } from '../constants'; // Assuming these icons can be used or provide more specific ones

/**
 * @interface CompletionEnhancementsProps
 * @description Defines the props for the CompletionEnhancements component.
 * @property {CompletionEnhancementOption[]} availableEnhancements - The list of available enhancements.
 * @property {TaskType[]} selectedEnhancements - The list of selected enhancement IDs.
 * @property {(enhancementId: TaskType) => void} onToggleEnhancement - The function to call when an enhancement is toggled.
 */
interface CompletionEnhancementsProps {
  availableEnhancements: CompletionEnhancementOption[];
  selectedEnhancements: TaskType[];
  onToggleEnhancement: (enhancementId: TaskType) => void;
}

/**
 * @description A component that allows the user to select optional enhancements for the completion task.
 * @param {CompletionEnhancementsProps} props - The props for the component.
 * @returns {React.ReactElement | null} The rendered component or null if no enhancements are available.
 */
export const CompletionEnhancements: React.FC<CompletionEnhancementsProps> = ({
  availableEnhancements,
  selectedEnhancements,
  onToggleEnhancement,
}) => {
  if (availableEnhancements.length === 0) {
    return null;
  }

  return (
    <div className="w-full p-6 bg-slate-800 rounded-xl shadow-xl border border-panel-border backdrop-blur-xs bg-panel">
      <h4 className="text-lg font-semibold text-primary-light mb-3 flex items-center">
        <SparklesIcon className="w-6 h-6 me-2" />
        تحسينات وضع الاستكمال (اختياري)
      </h4>
      <p className="text-sm text-slate-400 mb-4">
        اختر قدرات إضافية لدمجها مع عملية الاستكمال لنتائج أكثر ثراءً وعمقًا.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {availableEnhancements.map((enhancement) => {
          const isSelected = selectedEnhancements.includes(enhancement.id);
          return (
            <button
              key={enhancement.id}
              onClick={() => onToggleEnhancement(enhancement.id)}
              className={`p-3 rounded-lg border-2 text-sm font-medium transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 flex items-center justify-center text-center
                ${isSelected 
                  ? 'bg-primary border-primary-light text-slate-900 shadow-md ring-primary-light' 
                  : 'bg-slate-700 border-slate-600 text-slate-200 hover:bg-slate-600 hover:border-slate-500 ring-transparent'}`}
              aria-pressed={isSelected}
              title={`دمج "${enhancement.label}"`}
            >
              {/* Consider adding unique icons per enhancement if available */}
              {/* <LightBulbIcon className="w-4 h-4 me-2 flex-shrink-0" /> */}
              {enhancement.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
