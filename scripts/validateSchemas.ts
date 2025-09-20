import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { zodToJsonSchema } from "zod-to-json-schema";
import { AdvancedScreenplayModuleResultSchema } from "../src/types/advanced";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const schemaPath = join(
  __dirname,
  "..",
  "src",
  "schemas",
  "advanced_screenplay_module_result.schema.json",
);

const generated = zodToJsonSchema(
  AdvancedScreenplayModuleResultSchema,
  "AdvancedScreenplayModuleResult",
);
const generatedJson = `${JSON.stringify(generated, null, 2)}\n`;

const writeSchema = async () => {
  await writeFile(schemaPath, generatedJson, "utf8");
  console.log("تم تحديث ملف JSON Schema بنجاح.");
};

try {
  const existing = await readFile(schemaPath, "utf8");
  const normalizedExisting = `${JSON.stringify(JSON.parse(existing), null, 2)}\n`;

  if (normalizedExisting !== generatedJson) {
    if (process.env.WRITE_SCHEMA === "true") {
      await writeSchema();
    } else {
      console.error("❌ ملف JSON Schema لا يتطابق مع تعريف Zod الحالي.");
      process.exit(1);
    }
  } else {
    console.log("✅ ملف JSON Schema مطابق لتعريف Zod.");
  }
} catch (error) {
  if ((error as NodeJS.ErrnoException).code === "ENOENT") {
    await writeSchema();
  } else {
    throw error;
  }
}
