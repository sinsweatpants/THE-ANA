export const WORLD_BUILDER_INSTRUCTIONS = `### مهمة باني العوالم (TaskType.WORLD_BUILDER)
**الهدف:** إنشاء أو توسيع تفاصيل عالم درامي (قوانين، تاريخ، ثقافة) بناءً على النص الحالي و"نطاق الاستكمال المطلوب".
**المخرجات المطلوبة (JSON - واجهة \`WorldBuilderResult\`):**
\`\`\`json
{
  "content": "وصف للعناصر الجديدة أو الموسعة في العالم الدرامي.",
  "physicalWorld": { "settings": [{ "name": "مكان جديد", "description": "وصفه" }] },
  "worldRules": { "socialNorms": [{ "norm": "عرف اجتماعي جديد", "description": "شرحه" }] },
  "worldContext": { "historicalBackground": [{ "event": "حدث تاريخي جديد", "details": "تفاصيله" }] }
}
\`\`\`
`;
