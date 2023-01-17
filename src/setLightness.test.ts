import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { setLightness } from "./setLightness";
import { hexString } from "./hexString";

test("set lightness of 32 should return #29527A", () => {
  const color = new Color("#336699");
  expect(hexString(setLightness(color, 32))).toBe("#29527a");
});

test("set lightness of 100 should return #ffffff", () => {
  const color = new Color("#336699");
  expect(hexString(setLightness(color, 100))).toBe("#ffffff");
});

test("set lightness of 0 should return #000000", () => {
  const color = new Color("#336699");
  expect(hexString(setLightness(color, 0))).toBe("#000000");
});

test("set lightness of 101 should thow an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setLightness(color, 101));
  }).toThrow("Lightness must be between 0.0 and 1.0 or 0 and 100");
});
