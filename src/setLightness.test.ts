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

test("set lightness of .5 should return #4080bf", () => {
  const color = new Color("#336699");
  expect(hexString(setLightness(color, 0.5))).toBe("#4080bf");
});

test("set lightness of 50 should return #4080bf", () => {
  const color = new Color("#336699");
  expect(hexString(setLightness(color, 50))).toBe("#4080bf");
});

test("set lightness of 1 should return #010304", () => {
  const color = new Color("#336699");
  expect(hexString(setLightness(color, 1))).toBe("#010304");
});

test("set lightness of 1 should return #010304", () => {
  const color = new Color("#336699");
  expect(hexString(setLightness(color, 1.0))).toBe("#010304");
});

test("set lightness of 1.0 (string) should return #FFFFFF", () => {
  const color = new Color("#336699");
  expect(hexString(setLightness(color, "1.0"))).toBe("#ffffff");
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
