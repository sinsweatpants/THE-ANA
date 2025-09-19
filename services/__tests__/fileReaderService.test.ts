import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import mammoth from 'mammoth';
import { processFilesForGemini } from '../fileReaderService';

vi.mock('mammoth', () => ({
  default: {
    extractRawText: vi.fn(),
  },
}));

type HandlerOutcome<T> = { result: T } | { error: Error };
type ReaderHandlerMap = {
  readAsText: (file: File) => HandlerOutcome<string>;
  readAsDataURL: (file: File) => HandlerOutcome<string>;
  readAsArrayBuffer: (file: File) => HandlerOutcome<ArrayBuffer>;
};

const defaultHandlers: ReaderHandlerMap = {
  readAsText: (file) => ({ result: `default-text:${file.name}` }),
  readAsDataURL: (file) => ({
    result: `data:${file.type};base64,${Buffer.from(`default-base64:${file.name}`).toString('base64')}`,
  }),
  readAsArrayBuffer: () => ({ result: new TextEncoder().encode('default-buffer').buffer }),
};

const handlerOverrides: Partial<ReaderHandlerMap> = {};

const getHandler = <K extends keyof ReaderHandlerMap>(key: K): ReaderHandlerMap[K] => {
  return handlerOverrides[key] ?? defaultHandlers[key];
};

const setFileReaderHandlers = (overrides: Partial<ReaderHandlerMap> = {}) => {
  handlerOverrides.readAsText = overrides.readAsText;
  handlerOverrides.readAsDataURL = overrides.readAsDataURL;
  handlerOverrides.readAsArrayBuffer = overrides.readAsArrayBuffer;
};

class MockFileReader {
  result: string | ArrayBuffer | null = null;
  onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => unknown) | null = null;
  onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => unknown) | null = null;

  readAsText(file: File) {
    this.handleOutcome(getHandler('readAsText')(file));
  }

  readAsDataURL(file: File) {
    this.handleOutcome(getHandler('readAsDataURL')(file));
  }

  readAsArrayBuffer(file: File) {
    this.handleOutcome(getHandler('readAsArrayBuffer')(file));
  }

  private handleOutcome(outcome: HandlerOutcome<string | ArrayBuffer>) {
    if ('error' in outcome) {
      this.onerror?.(outcome.error as unknown as ProgressEvent<FileReader>);
      return;
    }

    this.result = outcome.result;
    this.onload?.({} as ProgressEvent<FileReader>);
  }
}

beforeAll(() => {
  (globalThis as unknown as { FileReader: typeof MockFileReader }).FileReader = MockFileReader;
});

beforeEach(() => {
  setFileReaderHandlers();
  const mockedMammoth = mammoth as unknown as { extractRawText: ReturnType<typeof vi.fn> };
  mockedMammoth.extractRawText.mockReset();
});

describe('processFilesForGemini - text files', () => {
  it('processes a plain text file successfully', async () => {
    setFileReaderHandlers({
      readAsText: () => ({ result: 'نص تجريبي' }),
    });

    const file = new File(['dummy'], 'example.txt', { type: 'text/plain' });
    const [result] = await processFilesForGemini([file]);

    expect(result).toMatchObject({
      name: 'example.txt',
      mimeType: 'text/plain',
      content: 'نص تجريبي',
      isBase64: false,
    });
  });

  it('returns a descriptive error when reading text fails', async () => {
    setFileReaderHandlers({
      readAsText: () => ({ error: new Error('تعذر القراءة') }),
    });

    const file = new File(['dummy'], 'broken.txt', { type: 'text/plain' });
    const [result] = await processFilesForGemini([file]);

    expect(result.content).toContain('تعذر قراءة الملف النصي');
    expect(result.isBase64).toBe(false);
  });
});

describe('processFilesForGemini - DOCX files', () => {
  it('extracts text content from a DOCX file', async () => {
    const arrayBuffer = new TextEncoder().encode('doc content').buffer;
    setFileReaderHandlers({
      readAsArrayBuffer: () => ({ result: arrayBuffer }),
    });

    const mockedMammoth = mammoth as unknown as { extractRawText: ReturnType<typeof vi.fn> };
    mockedMammoth.extractRawText.mockResolvedValue({ value: 'محتوى المستند', messages: [] });

    const file = new File(['dummy'], 'document.docx', {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    const [result] = await processFilesForGemini([file]);

    expect(mockedMammoth.extractRawText).toHaveBeenCalledWith({ arrayBuffer });
    expect(result.content).toBe('محتوى المستند');
    expect(result.isBase64).toBe(false);
  });

  it('returns a note when the DOCX content is empty', async () => {
    setFileReaderHandlers({
      readAsArrayBuffer: () => ({ result: new ArrayBuffer(0) }),
    });

    const mockedMammoth = mammoth as unknown as { extractRawText: ReturnType<typeof vi.fn> };
    mockedMammoth.extractRawText.mockResolvedValue({ value: '   ', messages: ['warning'] });

    const file = new File(['dummy'], 'empty.docx', {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    const [result] = await processFilesForGemini([file]);

    expect(result.content).toContain('لم يتم استخراج أي نص');
    expect(result.isBase64).toBe(false);
  });

  it('returns an error message when DOCX extraction fails', async () => {
    setFileReaderHandlers({
      readAsArrayBuffer: () => ({ result: new ArrayBuffer(0) }),
    });

    const mockedMammoth = mammoth as unknown as { extractRawText: ReturnType<typeof vi.fn> };
    mockedMammoth.extractRawText.mockRejectedValue(new Error('فشل الاستخراج'));

    const file = new File(['dummy'], 'broken.docx', {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    const [result] = await processFilesForGemini([file]);

    expect(result.content).toContain('تعذر استخراج النص من ملف DOCX');
    expect(result.isBase64).toBe(false);
  });
});

describe('processFilesForGemini - base64 files', () => {
  it('reads a PDF file as base64 data', async () => {
    setFileReaderHandlers({
      readAsDataURL: () => ({ result: 'data:application/pdf;base64,UEZERkE=' }),
    });

    const file = new File(['dummy'], 'sample.pdf', { type: 'application/pdf' });
    const [result] = await processFilesForGemini([file]);

    expect(result).toMatchObject({
      name: 'sample.pdf',
      mimeType: 'application/pdf',
      content: 'UEZERkE=',
      isBase64: true,
    });
  });

  it('reads an image file as base64 data', async () => {
    setFileReaderHandlers({
      readAsDataURL: () => ({ result: 'data:image/png;base64,SU1BR0U=' }),
    });

    const file = new File(['dummy'], 'image.png', { type: 'image/png' });
    const [result] = await processFilesForGemini([file]);

    expect(result).toMatchObject({
      name: 'image.png',
      mimeType: 'image/png',
      content: 'SU1BR0U=',
      isBase64: true,
    });
  });

  it('returns an error message when base64 conversion fails', async () => {
    setFileReaderHandlers({
      readAsDataURL: () => ({ error: new Error('base64-failure') }),
    });

    const file = new File(['dummy'], 'bad-image.png', { type: 'image/png' });
    const [result] = await processFilesForGemini([file]);

    expect(result.content).toContain('تعذر تحويل ملف');
    expect(result.isBase64).toBe(false);
  });
});
