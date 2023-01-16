import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { setHue } from "./setHue";
import { hexString } from "./hexString";

test("set hue of 100 should return #559933", () => {
  const color = new Color("#336699");
  expect(hexString(setHue(color, 100))).toBe("#559933");
});

test("set hue of 361 should thow an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setHue(color, 361));
  }).toThrow("Amount must be between 0 and 360");
});
