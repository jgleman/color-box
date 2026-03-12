import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { saturate } from "./saturate.js";
import { hexString } from "./hexString.js";

test("saturate #DDA0DD by 100% = #ff7eff", () => {
  const color = new Color("#DDA0DD");
  expect(hexString(saturate(color, 100))).toBe("#ff7eff");
});

test("saturate #dda0dd by 53% = #ff7eff", () => {
  const color = new Color("#dda0dd");
  expect(hexString(saturate(color, 53))).toBe("#ff7eff");
});
//
test("saturate #dda0dd by 0% = #dda0dd", () => {
  const color = new Color("#dda0dd");
  expect(hexString(saturate(color, 0))).toBe("#dda0dd");
});

test("saturate #dda0dd by 14% = #e697e6", () => {
  const color = new Color("#dda0dd");
  expect(hexString(saturate(color, 14))).toBe("#e697e6");
});

test("saturate #dda0dd by -14% (negative) = #d4a9d4 (same as desaturate 14%)", () => {
  const color = new Color("#dda0dd");
  expect(hexString(saturate(color, -14))).toBe("#d4a9d4");
});

test("saturate, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects two arguments
    expect(saturate());
  }).toThrow("Invalid Color");
});
