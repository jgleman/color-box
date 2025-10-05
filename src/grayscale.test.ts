import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { grayscale } from "./grayscale.js";
import { hexString } from "./hexString.js";

test("grayscale of 336699", () => {
  const color = new Color("#336699");
  // really its 50% but internally numbers are not rounded
  expect(hexString(grayscale(color))).toBe("#666666");
});

test("grayscale, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects one argument
    expect(grayscale());
  }).toThrow("Invalid Color");
});
