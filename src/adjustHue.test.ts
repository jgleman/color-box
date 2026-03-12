import { expect, test } from "@jest/globals";

import { Color } from "./Color.js";
import { adjustHue } from "./adjustHue.js";
import { hexString } from "./hexString.js";
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

test("adjust hue of #ff0000 by -10 wraps to hue 350, result should be #ff002b", () => {
  const red = new Color("#ff0000");
  expect(hexString(adjustHue(red, -10))).toBe("#ff002b");
});

test("adjust hue of #ff0000 by +10 should be #ff2a00", () => {
  const red = new Color("#ff0000");
  expect(hexString(adjustHue(red, 10))).toBe("#ff2a00");
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

test("color is not valid, result should be error", () => {
  const color = new Color("");
  expect(() => {
    hexString(adjustHue(color, 540));
  }).toThrow("Invalid Color");
});
test("color is not valid, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects two arguments
    hexString(adjustHue());
  }).toThrow("Invalid Color");
});
