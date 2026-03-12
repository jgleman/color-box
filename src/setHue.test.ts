import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { setHue } from "./setHue.js";
import { hexString } from "./hexString.js";

test("set hue of 100 should return #559933", () => {
  const color = new Color("#336699");
  expect(hexString(setHue(color, 100))).toBe("#559933");
});

test("set hue of 0 (boundary) should return #993333", () => {
  const color = new Color("#336699");
  expect(hexString(setHue(color, 0))).toBe("#993333");
});

test("set hue of 360 (boundary) should return #993333", () => {
  const color = new Color("#336699");
  expect(hexString(setHue(color, 360))).toBe("#993333");
});

test("set hue of -1 should throw an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setHue(color, -1));
  }).toThrow("Amount must be between 0 and 360");
});

test("set hue of 361 should thow an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setHue(color, 361));
  }).toThrow("Amount must be between 0 and 360");
});

test("setHue, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects two arguments
    expect(setHue());
  }).toThrow("Invalid Color");
});
