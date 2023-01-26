import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { invert } from "./invert";
import { hexString } from "./hexString";

test("invert of #ffffff = #00ffff", () => {
  const color = new Color("#ff0000");
  expect(hexString(invert(color))).toBe("#00ffff");
});

test("invert of #40E0D0 = #bf1f2f", () => {
  const color = new Color("#40E0D0");
  expect(hexString(invert(color))).toBe("#bf1f2f");
});

test("invert of #808080 = #7f7f7f", () => {
  const color = new Color("#808080");
  expect(hexString(invert(color))).toBe("#7f7f7f");
});

test("invert of #ffffff = #000000", () => {
  const color = new Color("#ffffff");
  expect(hexString(invert(color))).toBe("#000000");
});

test("invert of #ff00ff = #00ff00", () => {
  const color = new Color("#ff00ff");
  expect(hexString(invert(color))).toBe("#00ff00");
});

test("invert, color is missing, result should be error", () => {
  expect(() => {
    //@ts-ignore
    expect(invert());
  }).toThrow("Invalid Color");
});
