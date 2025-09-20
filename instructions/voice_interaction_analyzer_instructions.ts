import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description Instructions for the voice interaction analyzer task.
 * Guides the AI to examine dialogue flow for power dynamics in spoken exchanges.
 */
export const VOICE_INTERACTION_ANALYZER_INSTRUCTIONS = `
### محلل التفاعل الصوتي (TaskType.VOICE_INTERACTION_ANALYZER)
**الهدف:** تحليل الحوارات الصوتية أو الحوار المكتوب لكشف ديناميكيات القوة بين الشخصيات.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**بنية JSON المطلوبة في حقل \`details\`:**
\`\`\`json
{
  "powerDynamics": [
    {
      "character": "اسم الشخصية",
      "powerScore": 0.7,
      "dominantTraits": ["interruptions", "long statements"]
    }
  ],
  "keyPowerShifts": [
    {
      "sceneLocation": "صفحة 5، سطر 10",
      "trigger": "سؤال مباشر من شخصية X",
      "shiftDescription": "انتقلت القوة من X إلى Y."
    }
  ]
}
\`\`\`
**إرشادات إضافية:**
- اربط كل نتيجة بمقاطع محددة من النص أو الحوار المفرغ داخل قسم التحليل الحر في \`details\`.
- وضّح ما إذا كانت التحولات في القوة ثابتة أو مؤقتة، واذكر أسبابها في ملخص الوحدة.
- قدم توصيات مختصرة لتحسين توازن القوى إن اقتضى الأمر.
`;
