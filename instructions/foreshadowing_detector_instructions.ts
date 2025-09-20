import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description Instructions for the foreshadowing detector task.
 * Helps the AI highlight foreshadowing cues and evaluate their payoffs.
 */
export const FORESHADOWING_DETECTOR_INSTRUCTIONS = `
### كاشف التلميحات المسبقة (TaskType.FORESHADOWING_DETECTOR)
**الهدف:** تحديد العناصر أو الإشارات التي تمهد لأحداث لاحقة وتقييم فعاليتها.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**بنية JSON المطلوبة في حقل \`details\`:**
\`\`\`json
{
  "detectedElements": [
    {
      "element": "وصف العنصر (مثل: 'السكين المخبأة')",
      "location": "صفحة 3",
      "effectiveness": "subtle",
      "potentialPayoff": "قد يستخدم في الصراع الأخير."
    }
  ],
  "overallEffectivenessScore": 0.8
}
\`\`\`
**ملاحظات تنفيذية:**
- وضّح في قسم الملخص كيف يخدم كل تلميح بناء التوتر أو تطوير الشخصيات.
- صنّف مستوى الوضوح (صريح/ضمني/غامض) داخل التعليقات النصية المصاحبة.
- عند ملاحظة غياب تمهيد ضروري، اذكر ذلك في خانة التوصيات العامة.
`;
