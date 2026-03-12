import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { getSaturation } from "./getSaturation.js";

test("getSaturation of 336699", () => {
  const color = new Color("#336699");
  // really its 50% but internally numbers are not rounded
  expect(getSaturation(color)).toBe(0.49999999999999994);
});

test("getSaturation of pure red #ff0000 = 1 (fully saturated)", () => {
  const color = new Color("#ff0000");
  expect(getSaturation(color)).toBe(1);
});

test("getSaturation of gray #808080 = 0 (desaturated)", () => {
  const color = new Color("#808080");
  expect(getSaturation(color)).toBe(0);
});

test("getSaturation, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects two arguments
    expect(getSaturation());
  }).toThrow("Invalid Color");
});
