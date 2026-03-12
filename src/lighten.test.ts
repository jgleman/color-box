import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { lighten } from "./lighten.js";
import { hexString } from "./hexString.js";

const color = new Color("#ff0000");

test("lighten #ff0000 100% = #ffffff", () => {
  expect(hexString(lighten(color, 100))).toBe("#ffffff");
});

test("lighten #ff0000 50% = #ffffff", () => {
  expect(hexString(lighten(color, 50))).toBe("#ffffff");
});

test("lighten #ff0000 0% = #ff0000", () => {
  expect(hexString(lighten(color, 0))).toBe("#ff0000");
});

test("lighten #ff0000 14% = #ff4747", () => {
  expect(hexString(lighten(color, 14))).toBe("#ff4747");
});

test("lighten #ff0000 0.5% = #ff0303", () => {
  expect(hexString(lighten(color, 0.5))).toBe("#ff0303");
});

test("lighten #ff0000 by -14% (negative) = #b80000 (same as darken 14%)", () => {
  expect(hexString(lighten(color, -14))).toBe("#b80000");
});

test("lighten, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects two arguments
    expect(lighten());
  }).toThrow("Invalid Color");
});
