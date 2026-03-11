import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { relativeLuminance } from "./relativeLuminance.js";

test("relativeLuminance of #DDA0DD = 0.45734221587969115", () => {
  const color = new Color("#DDA0DD");
  expect(relativeLuminance(color)).toBe(0.45734221587969115);
});

test("relativeLuminance, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects one argument
    expect(relativeLuminance());
  }).toThrow("Invalid Color");
});
