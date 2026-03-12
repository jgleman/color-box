import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { grayscale } from "./grayscale.js";
import { hexString } from "./hexString.js";

test("grayscale of 336699", () => {
  const color = new Color("#336699");
  // really its 50% but internally numbers are not rounded
  expect(hexString(grayscale(color))).toBe("#666666");
});

test("grayscale of pure red #ff0000 = #808080", () => {
  const color = new Color("#ff0000");
  expect(hexString(grayscale(color))).toBe("#808080");
});

test("grayscale of already-gray #808080 stays #808080", () => {
  const color = new Color("#808080");
  expect(hexString(grayscale(color))).toBe("#808080");
});

test("grayscale of #000000 (black) stays #000000", () => {
  const color = new Color("#000000");
  expect(hexString(grayscale(color))).toBe("#000000");
});

test("grayscale of #ffffff (white) stays #ffffff", () => {
  const color = new Color("#ffffff");
  expect(hexString(grayscale(color))).toBe("#ffffff");
});

test("grayscale, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects one argument
    expect(grayscale());
  }).toThrow("Invalid Color");
});
