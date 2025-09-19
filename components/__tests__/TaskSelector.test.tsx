import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { TaskSelector } from '../TaskSelector';
import { TaskType } from '../../types';

describe('TaskSelector component', () => {
  it('updates local state in a wrapper when a task is selected', () => {
    const Wrapper: React.FC = () => {
      const [selectedTask, setSelectedTask] = React.useState<TaskType | null>(null);
      return (
        <div>
          <span data-testid="selected-task">{selectedTask ?? 'none'}</span>
          <TaskSelector selectedTask={selectedTask} onTaskSelect={setSelectedTask} />
        </div>
      );
    };

    render(<Wrapper />);

    const analysisButton = screen.getByRole('button', { name: /تحليل نقدي/ });
    fireEvent.click(analysisButton);
    expect(screen.getByTestId('selected-task')).toHaveTextContent(TaskType.ANALYSIS);

    const creativeButton = screen.getByRole('button', { name: /إبداع محاكاتي/ });
    fireEvent.click(creativeButton);
    expect(screen.getByTestId('selected-task')).toHaveTextContent(TaskType.CREATIVE);
  });

  it('invokes onTaskSelect with the chosen task and reflects selection state', () => {
    const onTaskSelect = vi.fn();
    const { rerender } = render(<TaskSelector selectedTask={null} onTaskSelect={onTaskSelect} />);

    const button = screen.getByRole('button', { name: /تحليل نقدي/ });
    fireEvent.click(button);
    expect(onTaskSelect).toHaveBeenCalledWith(TaskType.ANALYSIS);

    rerender(<TaskSelector selectedTask={TaskType.ANALYSIS} onTaskSelect={onTaskSelect} />);
    expect(button).toHaveAttribute('aria-pressed', 'true');
  });
});
