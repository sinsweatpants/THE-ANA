/**
 * @description Instructions for the integrated workflow task.
 * These instructions guide the AI to combine critical analysis with creative simulation.
 */
export const INTEGRATED_MODE_INSTRUCTIONS = `
### مهمة سير العمل المتكامل (TaskType.INTEGRATED)
**الهدف:** دمج التحليل النقدي مع الإبداع المحاكاتي.
**المخرجات المطلوبة (JSON - واجهة \`EnhancedAnalysisResult\`):** مشابهة لمهمة التحليل، ولكن يجب أن يتضمن حقل \`content\` أو \`recommendations.implementation\` إشارة إلى كيف تم تطبيق التحليل في الجزء الإبداعي.
**العملية:** ابدأ بالتحليل (المحطات السبع)، ثم استخدم نتائجه لتوجيه الإبداع (المراحل الثلاث).
`;
