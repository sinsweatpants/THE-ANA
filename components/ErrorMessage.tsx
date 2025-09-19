import React from 'react';

type ErrorTone = 'error' | 'warning';

/**
 * Props for the standardised error banner used across the application.
 *
 * @property title - Short headline describing the failure category.
 * @property description - Detailed explanation surfaced to the user.
 * @property tone - Optional styling hint (error vs warning palette).
 * @property className - Additional utility classes forwarded to the container.
 */
interface ErrorMessageProps {
  title: string;
  description: string;
  tone?: ErrorTone;
  className?: string;
}

const toneStyles: Record<ErrorTone, { container: string; heading: string; body: string }> = {
  error: {
    container: 'bg-red-800 border-red-600 text-red-100',
    heading: 'text-red-100',
    body: 'text-red-100',
  },
  warning: {
    container: 'bg-yellow-700 border-yellow-500 text-yellow-100',
    heading: 'text-yellow-100',
    body: 'text-yellow-100',
  },
};

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ title, description, tone = 'error', className }) => {
  const palette = toneStyles[tone];

  return (
    <div
      role="alert"
      className={`p-4 border rounded-lg shadow-lg ${palette.container} ${className ?? ''}`}
    >
      <h3 className={`font-bold text-lg ${palette.heading}`}>{title}</h3>
      <p className={`mt-1 text-sm leading-relaxed ${palette.body}`}>{description}</p>
    </div>
  );
};
