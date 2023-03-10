import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { relativeLuminence } from "./relativeLuminence";

test("relativeLuminence of #DDA0DD = 0.45734221587969115", () => {
  const color = new Color("#DDA0DD");
  expect(relativeLuminence(color)).toBe(0.45734221587969115);
});

test("relativeLuminence, color is missing, result should be error", () => {
  expect(() => {
    //@ts-ignore
    expect(relativeLuminence());
  }).toThrow("Invalid Color");
});
