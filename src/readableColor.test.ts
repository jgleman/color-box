import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { readableColor } from "./readableColor.js";
import { hexString } from "./hexString.js";
import { isColorValid } from "./isColorValid.js";

test("readableColor of #ffffff (white bg) returns #000000", () => {
  const color = new Color("#ffffff");
  expect(hexString(readableColor(color))).toBe("#000000");
});

test("readableColor of #000000 (black bg) returns #ffffff", () => {
  const color = new Color("#000000");
  expect(hexString(readableColor(color))).toBe("#ffffff");
});

test("readableColor of #336699 (medium blue) returns #ffffff", () => {
  const color = new Color("#336699");
  expect(hexString(readableColor(color))).toBe("#ffffff");
});

test("readableColor of #ffff00 (yellow) returns #000000", () => {
  const color = new Color("#ffff00");
  expect(hexString(readableColor(color))).toBe("#000000");
});

test("readableColor of #ffffff returns a valid color", () => {
  const color = new Color("#ffffff");
  expect(isColorValid(readableColor(color))).toBe(true);
});

test("readableColor of #757575 (luminance just below threshold) returns #ffffff", () => {
  const color = new Color("#757575");
  expect(hexString(readableColor(color))).toBe("#ffffff");
});

test("readableColor of #767676 (luminance just above threshold) returns #000000", () => {
  const color = new Color("#767676");
  expect(hexString(readableColor(color))).toBe("#000000");
});

test("readableColor with invalid color throws Invalid Color", () => {
  expect(() => {
    //@ts-expect-error missing argument
    readableColor();
  }).toThrow("Invalid Color");
});
