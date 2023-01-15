import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { complement } from "./complement";
import { hexString } from "./hexString";

//

test("complement of #ff0000 = #00ffff", () => {
  const color = new Color("#ff0000");
  expect(hexString(complement(color))).toBe("#00ffff");
});

test("complement of #40E0D0 = #e04050", () => {
  const color = new Color("#40E0D0");
  expect(hexString(complement(color))).toBe("#e04050");
});

test("complement of #808080 = #808080", () => {
  const color = new Color("#808080");
  expect(hexString(complement(color))).toBe("#808080");
});

test("complement of #ffffff = #ffffff", () => {
  const color = new Color("#ffffff");
  expect(hexString(complement(color))).toBe("#ffffff");
});

test("complement of #ff00ff = #00ff00", () => {
  const color = new Color("#ff00ff");
  expect(hexString(complement(color))).toBe("#00ff00");
});
