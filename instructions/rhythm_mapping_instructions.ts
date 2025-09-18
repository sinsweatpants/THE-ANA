export const RHYTHM_MAPPING_INSTRUCTIONS = `### مهمة رسم خرائط الإيقاع (TaskType.RHYTHM_MAPPING)
**الهدف:** تحليل الإيقاع الدرامي وتقديم تصور بياني له إن أمكن.
**المخرجات المطلوبة (JSON - واجهة \`RhythmAnalysis\`):**
\`\`\`json
{
  "overallPace": "variable",
  "content": "ملخص لتحليل الإيقاع، يصف التغيرات في السرعة والتوتر عبر النص.",
  "sceneAnalysis": [
    { "sceneId": "مشهد 1", "intensity": 0.4, "function": "exposition" }
  ],
  "criticalPoints": [
    { "location": "صفحة 50", "type": "acceleration", "recommendation": "تعزيز هذا التسارع." }
  ],
  "rhythmMap": [{ "x": 0, "y": 0.3, "label": "البداية" }, { "x": 50, "y": 0.8, "label": "الذروة" }]
}
\`\`\`
`;
