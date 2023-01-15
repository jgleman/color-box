import { expect, test } from "@jest/globals";

import { Color } from "./Color";
import { adjustHue } from "./adjustHue";
import { hexString } from "./hexString";
//

test("adjust hue of 336699 by adding 100, result should be #993388", () => {
  const color = new Color("#336699");
  expect(hexString(adjustHue(color, 100))).toBe("#993388");
});

test("adjust hue of 336699 by subtracting 100, result should be #449933", () => {
  const color = new Color("#336699");
  expect(hexString(adjustHue(color, -100))).toBe("#449933");
});

test("adjust hue of 336699 by adding 300, result should be #339966", () => {
  const color = new Color("#336699");
  expect(hexString(adjustHue(color, 300))).toBe("#339966");
});

test("adjust hue of 336699 by adding 360, result should be #336699", () => {
  const color = new Color("#336699");
  expect(hexString(adjustHue(color, 360))).toBe("#336699");
});

test("adjust hue of 336699 by subtracting 360, result should be #336699", () => {
  const color = new Color("#336699");
  expect(hexString(adjustHue(color, -360))).toBe("#336699");
});

test("adjust hue of 336699 by add 540, result should be error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(adjustHue(color, 540));
  }).toThrow("Amount must be between -360 and 360");
});
