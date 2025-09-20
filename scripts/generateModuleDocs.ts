import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { MODULE_DOCUMENTATION } from "../src/config/moduleDocumentation";
import { MODULE_EXAMPLES } from "../src/examples/advancedScreenplayModuleExamples";
import { AdvancedScreenplayModuleResultSchema } from "../src/types/advanced";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const docsDir = join(__dirname, "..", "docs", "modules");

await mkdir(docsDir, { recursive: true });

for (const entry of MODULE_DOCUMENTATION) {
  const example = MODULE_EXAMPLES[entry.taskType];
  if (!example) {
    throw new Error(`لا يوجد مثال معرف للوحدة ${entry.taskType}`);
  }

  const parsedExample = AdvancedScreenplayModuleResultSchema.parse(example);
  const exampleJson = JSON.stringify(parsedExample, null, 2);

  const detailList = entry.detailFields
    .map((field) => `1. **${field.field}**: ${field.description}`)
    .join("\n");

  const docContent = `# ${entry.displayName}

> ${entry.description}

## 🎯 نطاق التحليل
- **مجال التحليل الرئيس:** \`${entry.focus}\`
- **الفئات المتأثرة:** ${entry.categories.map((category) => `\`${category}\``).join(", ")}

## 📥 المدخلات المطلوبة
${entry.inputs.map((input) => `- ${input}`).join("\n")}

## 📤 المخرجات المتوقعة
${entry.outputs.map((output) => `- ${output}`).join("\n")}

## 🧩 حقول \`details\` المحورية
${detailList}

## 🧾 مثال JSON معتمد
\`\`\`json
${exampleJson}
\`\`\`
`;

  const filePath = join(docsDir, `${entry.taskType}.md`);
  await writeFile(filePath, docContent, "utf8");
}
