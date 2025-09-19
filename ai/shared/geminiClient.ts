import { GoogleGenAI, GenerateContentResponse, Part, Content, SafetySetting, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { GeminiServiceResponse, GeminiTaskResultData } from '../../types';

// Centralized Gemini API call
// Note: The prompt construction logic is kept separate to allow for more flexible use of this client.
// The caller is responsible for constructing the prompt parts.

/**
 * @interface GenerateContentParams
 * @description Defines the parameters for the generateContent function.
 * @property {Part[]} promptParts - The parts of the prompt to send to the Gemini API.
 * @property {string} [model] - The model to use for content generation.
 * @property {number} [maxOutputTokens] - The maximum number of tokens to generate.
 * @property {number} [temperature] - The temperature for sampling.
 * @property {number} [topK] - The top-K sampling parameter.
 * @property {number} [topP] - The top-P sampling parameter.
 * @property {boolean} [shouldExpectJson] - Whether the response is expected to be in JSON format.
 */
interface GenerateContentParams {
  promptParts: Part[];
  model?: string;
  maxOutputTokens?: number;
  temperature?: number;
  topK?: number;
  topP?: number;
  shouldExpectJson?: boolean;
}

const DEFAULT_MODEL = 'models/gemini-2.5-pro';

let ai: GoogleGenAI | null = null;

const resolveApiKey = (): string | undefined => {
  let browserKey: string | undefined;
  try {
    browserKey = (import.meta as ImportMeta).env?.GEMINI_API_KEY;
  } catch (error) {
    browserKey = undefined;
  }

  if (browserKey && browserKey.length > 0) {
    return browserKey;
  }

  if (typeof process !== 'undefined') {
    const nodeKey = process.env?.GEMINI_API_KEY || process.env?.API_KEY;
    if (nodeKey && nodeKey.length > 0) {
      return nodeKey;
    }
  }

  return undefined;
};

/**
 * @description Gets the singleton instance of the GoogleGenAI client.
 * @returns {GoogleGenAI} The GoogleGenAI instance.
 * @throws {Error} If the API_KEY environment variable is not set.
 */
const getAiInstance = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = resolveApiKey();
    if (!apiKey) {
      throw new Error("لم يتم تعيين متغير البيئة GEMINI_API_KEY أو أنه فارغ.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

/**
 * @description Attempts to fix a string that is not valid JSON by extracting the JSON object or array.
 * @param {string} jsonString - The string to fix.
 * @returns {string} The fixed JSON string or the original string if it cannot be fixed.
 */
const attemptToFixJson = (jsonString: string): string => {
    // Try to extract content between the first '{' and last '}' or first '[' and last ']'
    const objectMatch = jsonString.match(/\{(?:.|\n)*\}/s);
    if (objectMatch && objectMatch[0]) {
        try {
            JSON.parse(objectMatch[0]);
            return objectMatch[0];
        } catch (e) {
            // console.warn("attemptToFixJson: Extracted object substring is not valid JSON.", e);
        }
    }
    const arrayMatch = jsonString.match(/\[(?:.|\n)*\]/s);
    if (arrayMatch && arrayMatch[0]) {
        try {
            JSON.parse(arrayMatch[0]);
            return arrayMatch[0];
        } catch (e) {
            // console.warn("attemptToFixJson: Extracted array substring is not valid JSON.", e);
        }
    }
    // If no clear object/array found, or if parsing failed, return original string for further debugging
    return jsonString;
};


const MAX_RETRIES = 1;

/**
 * @description Generates content using the Gemini API with retry logic.
 * @param {GenerateContentParams} params - The parameters for content generation.
 * @param {number} [retries=0] - The number of retries attempted.
 * @returns {Promise<GeminiServiceResponse>} The response from the Gemini API.
 */
export const generateContent = async (params: GenerateContentParams, retries: number = 0): Promise<GeminiServiceResponse> => {
  const {
    promptParts,
    model = DEFAULT_MODEL, // Default model
    maxOutputTokens = 65000, // Default token limit
    temperature = 0.7,
    topK = 40,
    topP = 0.95,
    shouldExpectJson = false,
  } = params;

  try {
    const genAI = getAiInstance();
    const contents: Content[] = [{ role: "user", parts: promptParts }];

    const modelConfig: any = {
      temperature,
      topK,
      topP,
      maxOutputTokens,
      safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE }
      ] as SafetySetting[]
    };

    const response: GenerateContentResponse = await genAI.models.generateContent({
      model: model,
      contents: contents,
      config: modelConfig,
    });

    const rawTextOutput = response.text;

    if (!rawTextOutput) {
        if (response.candidates && response.candidates[0] && response.candidates[0].finishReason !== "STOP") {
             return { error: ` أنهى Gemini المعالجة بسبب: ${response.candidates[0].finishReason}. قد يكون المحتوى قد تم حظره أو انتهى بشكل غير متوقع.` };
        }
        return { error: "أرجع Gemini استجابة نصية فارغة." };
    }

    let jsonStr = rawTextOutput.trim();
    const fenceRegex = /^(?:\s*```(?:json)?\s*\n?)?([\s\S]*?)(?:\n?\s*```\s*)?$/s;
    const match = jsonStr.match(fenceRegex);
    if (match && match[1]) {
      jsonStr = match[1].trim();
    }

    // Only attempt to parse if it looks like a JSON object or array
    if (jsonStr.startsWith('{') || jsonStr.startsWith('[')) {
      try {
        const parsedData: GeminiTaskResultData = JSON.parse(jsonStr);
        return { data: parsedData, rawText: rawTextOutput };
      } catch (e) {
        // First parse failed, try to fix it.
        const fixedJsonStr = attemptToFixJson(jsonStr);
        try {
            const parsedData: GeminiTaskResultData = JSON.parse(fixedJsonStr);
            return { data: parsedData, rawText: rawTextOutput };
        } catch (e2) {
            console.error("فشل في تحليل JSON حتى بعد محاولة الإصلاح:", e2, "\nالنص الأصلي:", rawTextOutput, "\nالنص الذي تمت محاولة إصلاحه:", fixedJsonStr);
            // If it was *supposed* to be JSON, show the user the specific error.
            if (shouldExpectJson) {
                return { data: rawTextOutput, rawText: rawTextOutput, error: "تم استلام نص غير متوقع بدلاً من JSON. يتم عرض النص الخام." };
            }
            // Otherwise, for creative tasks, just fall back to raw text without an error.
            return { data: rawTextOutput, rawText: rawTextOutput };
        }
      }
    }

    // If it doesn't look like JSON, treat it as raw text.
    // If we were expecting JSON but got something else entirely, flag it.
    if (shouldExpectJson) {
        return { data: rawTextOutput, rawText: rawTextOutput, error: "تم استلام نص غير متوقع بدلاً من JSON. يتم عرض النص الخام." };
    }

    // Otherwise, it's a valid text response for a creative task.
    return { data: rawTextOutput, rawText: rawTextOutput };

  } catch (e: any) {
    console.error(`خطأ في معالجة النصوص مع Gemini (محاولة ${retries}/${MAX_RETRIES}):`, e);

    const statusCode: number | undefined = typeof e?.status === 'number'
      ? e.status
      : typeof e?.response?.status === 'number'
        ? e.response.status
        : undefined;

    if (
      retries < MAX_RETRIES &&
      ((statusCode !== undefined && statusCode >= 500) || (e.message && e.message.toLowerCase().includes("network error")))
    ) {
      console.log(`إعادة المحاولة (${retries + 1}/${MAX_RETRIES})...`);
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retries)));
      return generateContent(params, retries + 1);
    }

    let errorMessage = e.message || "حدث خطأ غير معروف مع Gemini API.";
    if (e.toString && e.toString().toLowerCase().includes("api_key")) {
        errorMessage = "مفتاح Gemini API مفقود أو غير صالح. يرجى التأكد من تكوين متغير البيئة API_KEY بشكل صحيح.";
    } else if (e.message && e.message.toLowerCase().includes("request entity size is larger than limit")) {
      errorMessage = "حجم الملفات المرسلة أو حجم السياق الكلي يتجاوز الحد المسموح به من Gemini API. يرجى محاولة تقليل حجم الملفات أو عددها، أو تقصير نطاق الاستكمال إذا كنت تستخدم الاستكمال التكراري.";
    } else if (e.message && (e.message.toLowerCase().includes("unsupported mime type") || e.message.toLowerCase().includes("invalid_argument"))) {
      errorMessage = "واجهت Gemini API مشكلة في معالجة أحد أنواع الملفات المرفوعة أو محتواها. يرجى التحقق من أن الملفات هي من الأنواع المدعومة (نصوص، صور، PDF، DOCX بعد المعالجة) وأنها غير تالفة.";
    } else if (statusCode === 400 || e.status === 'INVALID_ARGUMENT') {
      errorMessage = `طلب غير صالح إلى Gemini API. تحقق من تنسيق البيانات المرسلة وتأكد من أن جميع الحقول مطابقة للتعليمات المتوقعة.${e.message ? ` التفاصيل: ${e.message}` : ''}`;
    } else if (statusCode === 401 || statusCode === 403) {
      errorMessage = "تم رفض الطلب من قبل Gemini API. يرجى التأكد من صلاحية الأذونات ومفتاح API المستخدم.";
    } else if (statusCode === 429) {
      errorMessage = "تم تجاوز الحد المسموح به من طلبات Gemini API. يرجى الانتظار قليلاً قبل إعادة المحاولة أو تقليل معدل الإرسال.";
    } else if (statusCode !== undefined && statusCode >= 500) {
      errorMessage = `واجه خادم Gemini API مشكلة داخلية (خطأ ${statusCode}). يرجى المحاولة مرة أخرى لاحقًا.${e.message ? ` التفاصيل: ${e.message}` : ''}`;
    }

    const detailedMessage = e.response && e.response.error && e.response.error.message
      ? ` التفاصيل من الخادم: ${e.response.error.message}`
      : '';

    if (detailedMessage) {
      errorMessage += detailedMessage;
    } else if (e.message && e.message.includes("content") && e.message.includes("blocked")) {
        errorMessage = `تم حظر المحتوى بواسطة Gemini API بسبب سياسات الأمان. ${e.message}`;
    }

    return { error: errorMessage };
  }
};
