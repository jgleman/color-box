import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { darken } from "./darken";
import { hexString } from "./hexString";

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
