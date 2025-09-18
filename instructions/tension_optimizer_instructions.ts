export const TENSION_OPTIMIZER_INSTRUCTIONS = `### مهمة محسن التوتر الدرامي (TaskType.TENSION_OPTIMIZER)
**الهدف:** تحليل واقتراح تعديلات لتعزيز التوتر الدرامي ضمن "نطاق الاستكمال المطلوب".
**المخرجات المطلوبة (JSON - واجهة \`TensionOptimizerResult\`):**
\`\`\`json
{
  "content": "ملخص لتحليل التوتر الحالي واقتراحات التحسين.",
  "currentTensionMap": [{ "x": "مشهد5", "y": 0.6, "label": "نقطة توتر حالية" }],
  "optimizationStrategy": {
    "insertionPoints": [{ "location": "صفحة 20", "suggestedElement": "revelation" }]
  },
  "predictedOutcome": {
    "newTensionCurve": [{ "x": "مشهد5", "y": 0.8, "label": "نقطة توتر محسنة" }]
  }
}
\`\`\`
`;
