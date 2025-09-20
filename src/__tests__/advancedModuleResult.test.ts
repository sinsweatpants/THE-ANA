import { describe, expect, it } from "vitest";
import { AdvancedScreenplayModuleResultSchema } from "../types/advanced";
import { MODULE_EXAMPLES } from "../examples/advancedScreenplayModuleExamples";

const clone = <T>(value: T): T => {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }

  return JSON.parse(JSON.stringify(value)) as T;
};

describe("AdvancedScreenplayModuleResultSchema", () => {
  it("يقبل الأمثلة الرسمية لكل وحدة", () => {
    for (const [moduleKey, example] of Object.entries(MODULE_EXAMPLES)) {
      expect(() => AdvancedScreenplayModuleResultSchema.parse(example)).not.toThrow(
        `لم يجتز المثال الخاص بالوحدة ${moduleKey} التحقق من المخطط`,
      );
    }
  });

  it("يرفض قيم الثقة التي تتجاوز 1", () => {
    const example = clone(MODULE_EXAMPLES[Object.keys(MODULE_EXAMPLES)[0] as keyof typeof MODULE_EXAMPLES]);
    example.details[0].insights[0].confidence = 1.2;
    expect(() => AdvancedScreenplayModuleResultSchema.parse(example)).toThrow();
  });

  it("يرفض استخدام قيم خارج التعداد", () => {
    const example = clone(MODULE_EXAMPLES[Object.keys(MODULE_EXAMPLES)[0] as keyof typeof MODULE_EXAMPLES]);
    // @ts-expect-error اختبار قيمة غير مسموح بها
    example.metadata.workFormat = "novella";
    expect(() => AdvancedScreenplayModuleResultSchema.parse(example)).toThrow();
  });
});
