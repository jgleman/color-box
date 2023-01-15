import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { desaturate } from "./desaturate";
import { hexString } from "./hexString";

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
