import React from 'react';

/**
 * @description A full-screen loader component with a message.
 * @param {object} props - The props for the component.
 * @param {string} [props.message="جاري معالجة طلبك..."] - The message to display below the loader.
 * @returns {React.ReactElement} The rendered loader element.
 */
export const Loader: React.FC<{ message?: string }> = ({ message = "جاري معالجة طلبك..." }) => {
  return (
    <div className="fixed inset-0 bg-slate-900 bg-opacity-75 flex flex-col items-center justify-center z-50 backdrop-blur-sm">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-xl text-slate-100 font-semibold">{message}</p>
      <p className="text-sm text-slate-300 mt-1">قد يستغرق هذا بضع لحظات.</p>
    </div>
  );
};
