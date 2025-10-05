import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { desaturate } from "./desaturate.js";
import { hexString } from "./hexString.js";

test("desaturate #dda0dd by 100% = #bfbfbf", () => {
  const color = new Color("#dda0dd");
  expect(hexString(desaturate(color, 100))).toBe("#bfbfbf");
});

test("desaturate #dda0dd by 48% = #bfbfbf", () => {
  const color = new Color("#dda0dd");
  expect(hexString(desaturate(color, 48))).toBe("#bfbfbf");
});

test("desaturate #dda0dd by 0% = #dda0dd", () => {
  const color = new Color("#dda0dd");
  expect(hexString(desaturate(color, 0))).toBe("#dda0dd");
});

test("desaturate #dda0dd by 14% = #dda0dd", () => {
  const color = new Color("#dda0dd");
  expect(hexString(desaturate(color, 14))).toBe("#d4a9d4");
});

test("desaturate, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects two arguments
    expect(desaturate());
  }).toThrow("Invalid Color");
});
