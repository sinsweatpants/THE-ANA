/**
 * @description Instructions for the thematic mining task.
 * These instructions guide the AI to extract and analyze the main and secondary themes of a text.
 */
export const THEMATIC_MINING_INSTRUCTIONS = `### مهمة التنقيب عن الموضوعات (TaskType.THEMATIC_MINING)
**الهدف:** استخراج وتحليل الموضوعات الرئيسية والفرعية.
**المخرجات المطلوبة (JSON - واجهة \`StyleFingerprintAnalysis\` مع التركيز على \`thematicSignature\`):**
\`\`\`json
{
  "content": "ملخص للموضوعات الرئيسية والفرعية وكيفية تطورها.",
  "thematicSignature": {
    "coreThemes": [{ "name": "موضوع رئيسي 1", "description": "شرح" }],
    "symbolSystem": [{ "symbol": "رمز1", "meaning": "معناه" }],
    "philosophicalUnderpinnings": ["فكرة فلسفية 1"]
  }
}
\`\`\`
`;
