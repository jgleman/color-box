import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { darken } from "./darken.js";
import { hexString } from "./hexString.js";

const color = new Color("#ff0000");

test("darken #ff0000 100% = #000000", () => {
  expect(hexString(darken(color, 100))).toBe("#000000");
});

test("darken #ff0000 50% = #000000", () => {
  expect(hexString(darken(color, 50))).toBe("#000000");
});

test("darken #ff0000 0% = #ff0000", () => {
  expect(hexString(darken(color, 0))).toBe("#ff0000");
});

test("darken #ff0000 14% = #b80000", () => {
  expect(hexString(darken(color, 14))).toBe("#b80000");
});

test("darken #ff0000 0.5% = #fc0000", () => {
  expect(hexString(darken(color, 0.5))).toBe("#fc0000");
});

test("darken #ff0000 by -14% (negative) = #ff4747 (same as lighten 14%)", () => {
  expect(hexString(darken(color, -14))).toBe("#ff4747");
});

test("darken, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects two arguments
    expect(darken());
  }).toThrow("Invalid Color");
});
