import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { FileUpload } from '../FileUpload';

const mockUseDropzone = vi.fn();

vi.mock('react-dropzone', () => ({
  useDropzone: (options: unknown) => mockUseDropzone(options),
}));

type DropzoneOptions = {
  onDrop: (acceptedFiles: File[], rejectedFiles: Array<{ file: File; errors: Array<{ code: string; message: string }> }>) => void;
};

describe('FileUpload component', () => {
  let latestOptions: DropzoneOptions | null = null;

  beforeEach(() => {
    latestOptions = null;
    mockUseDropzone.mockReset();
    mockUseDropzone.mockImplementation((options: DropzoneOptions) => {
      latestOptions = options;
      return {
        getRootProps: () => ({}),
        getInputProps: () => ({}),
        isDragActive: false,
      };
    });
  });

  it('calls onFilesUploaded when valid files are provided', async () => {
    const onFilesUploaded = vi.fn();
    const file = new File(['hello'], 'valid.txt', { type: 'text/plain' });

    const { rerender } = render(<FileUpload uploadedFiles={[]} onFilesUploaded={onFilesUploaded} />);
    expect(latestOptions).not.toBeNull();

    await act(async () => {
      latestOptions?.onDrop([file], []);
    });

    expect(onFilesUploaded).toHaveBeenCalledWith([file]);

    rerender(<FileUpload uploadedFiles={[file]} onFilesUploaded={onFilesUploaded} />);
    expect(screen.getByText(/الملفات المرفوعة \(1\)/)).toBeInTheDocument();
    expect(screen.getByText('valid.txt')).toBeInTheDocument();
  });

  it('shows an error when only invalid files are dropped', async () => {
    const onFilesUploaded = vi.fn();
    const invalidFile = new File(['binary'], 'invalid.exe', { type: 'application/x-msdownload' });

    render(<FileUpload uploadedFiles={[]} onFilesUploaded={onFilesUploaded} />);
    expect(latestOptions).not.toBeNull();

    await act(async () => {
      latestOptions?.onDrop([], [
        {
          file: invalidFile,
          errors: [{ code: 'file-invalid-type', message: 'نوع ملف غير مدعوم' }],
        },
      ]);
    });

    expect(onFilesUploaded).not.toHaveBeenCalled();
    expect(
      screen.getByText((content) => content.includes('نوع الملف "invalid.exe" غير مدعوم')),
    ).toBeInTheDocument();
  });
});
