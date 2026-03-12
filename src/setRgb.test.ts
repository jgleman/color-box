import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { setRgb } from "./setRgb.js";
import { hexString } from "./hexString.js";

test("setRgb of #336699 with { r: 255 } should return #ff6699", () => {
  const color = new Color("#336699");
  expect(hexString(setRgb(color, { r: 255 }))).toBe("#ff6699");
});

test("setRgb of #336699 with { g: 0 } should return #330099", () => {
  const color = new Color("#336699");
  expect(hexString(setRgb(color, { g: 0 }))).toBe("#330099");
});

test("setRgb of #336699 with { b: 0 } should return #336600", () => {
  const color = new Color("#336699");
  expect(hexString(setRgb(color, { b: 0 }))).toBe("#336600");
});

test("setRgb of #336699 with { r: 0, g: 0, b: 0 } should return #000000", () => {
  const color = new Color("#336699");
  expect(hexString(setRgb(color, { r: 0, g: 0, b: 0 }))).toBe("#000000");
});

test("setRgb with r: 256 should throw an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setRgb(color, { r: 256 }));
  }).toThrow("RGB values must be between 0 and 255");
});

test("setRgb with r: -1 should throw an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setRgb(color, { r: -1 }));
  }).toThrow("RGB values must be between 0 and 255");
});

test("setRgb with missing color should throw an error", () => {
  expect(() => {
    //@ts-expect-error missing arguments
    setRgb();
  }).toThrow("Invalid Color");
});

test("setRgb with missing object should return unchanged color", () => {
  const color = new Color("#336699");
  //@ts-expect-error missing second argument
  expect(hexString(setRgb(color))).toBe("#336699");
});
