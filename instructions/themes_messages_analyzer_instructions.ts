import { ADVANCED_MODULE_OUTPUT_STRUCTURE } from "./advanced_module_output_structure";

/**
 * @description Instructions for the themes and messages analyzer task.
 * These instructions guide the AI to extract and analyze main and sub-themes, as well as implicit and philosophical messages.
 */
export const THEMES_MESSAGES_ANALYZER_INSTRUCTIONS = `
### الوحدة 6: محلل الموضوعات والرسائل (TaskType.THEMES_MESSAGES_ANALYZER)
**الهدف:** استخراج وتحليل الموضوعات الرئيسية والفرعية والرسائل الضمنية والفلسفية.
${ADVANCED_MODULE_OUTPUT_STRUCTURE}
**تفاصيل حقل \`details\` المطلوبة لهذه الوحدة:**
\`\`\`json
{
  "mainThemesExtractor": [
    { "themeName": "اسم الموضوع الرئيسي", "description": "شرح للموضوع وكيفية ظهوره في النص", "keyExamples": ["أمثلة من النص تدعم الموضوع"] }
  ],
  "philosophicalDepthAnalyzer": {
    "identifiedPhilosophicalDimensions": ["البعد الفلسفي الأول (مثال: الوجودية، العدالة)", "البعد الفلسفي الثاني"],
    "discussionOfDepth": "نقاش حول العمق الفلسفي للعمل وكيفية معالجته لهذه الأبعاد.",
    "relatedPhilosophicalConcepts": ["مفاهيم فلسفية ذات صلة"]
  },
  "hiddenMessagesDetector": [
    { "inferredMessage": "الرسالة الضمنية أو المخفية المستنبطة", "supportingEvidence": "الأدلة من النص التي تدعم هذا الاستنباط", "potentialImpact": "التأثير المحتمل لهذه الرسالة على الجمهور." }
  ],
  "thematicCohesionAssessor": {
    "cohesionScore": 0.85,
    "analysisOfCohesion": "تحليل مدى ترابط الموضوعات المختلفة وكيف تخدم بعضها البعض.",
    "pointsOfPotentialConflictOrUnity": "نقاط قد تتعارض فيها الموضوعات أو تتحد."
  },
  "thematicOriginalityAnalyzer": {
    "originalityScore": 0.6,
    "comparisonToCommonThemes": "مقارنة بمعالجة الموضوعات الشائعة في هذا النوع.",
    "innovativeAspects": "الجوانب المبتكرة في معالجة الموضوعات."
  }
}
\`\`\`
`;
