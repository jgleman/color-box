import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { relativeLuminance } from "./relativeLuminance.js";

test("relativeLuminance of #DDA0DD = 0.45734221587969115", () => {
  const color = new Color("#DDA0DD");
  expect(relativeLuminance(color)).toBe(0.45734221587969115);
});

test("relativeLuminance of #000000 (black) = 0", () => {
  const color = new Color("#000000");
  expect(relativeLuminance(color)).toBe(0);
});

test("relativeLuminance of #ffffff (white) = 1", () => {
  const color = new Color("#ffffff");
  expect(relativeLuminance(color)).toBe(1);
});

test("relativeLuminance of #00ff00 (pure green) = 0.7152", () => {
  const color = new Color("#00ff00");
  expect(relativeLuminance(color)).toBe(0.7152);
});

test("relativeLuminance, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects one argument
    expect(relativeLuminance());
  }).toThrow("Invalid Color");
});
