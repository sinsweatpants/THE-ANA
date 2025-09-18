export const STYLE_FINGERPRINT_INSTRUCTIONS = `### مهمة بصمة الأسلوب (TaskType.STYLE_FINGERPRINT)
**الهدف:** تحليل وتحديد الخصائص الأسلوبية الفريدة للمؤلف.
**المخرجات المطلوبة (JSON - واجهة \`StyleFingerprintAnalysis\`):**
\`\`\`json
{
  "content": "ملخص شامل لبصمة الأسلوب اللغوي والسردي والموضوعاتي.",
  "linguisticSignature": { "sentenceComplexity": { "avgLength": 15 }, "vocabularyRichness": 0.6 },
  "narrativeSignature": { "perspectivePreference": ["الشخص الثالث المحدود"] },
  "thematicSignature": { "coreThemes": [{"name": "العزلة", "description": "..."}] },
  "uniqueness": { "distinctiveFeatures": ["استخدام الاستعارات المعقدة"] }
}
\`\`\`
`;
