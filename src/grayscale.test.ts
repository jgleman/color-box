import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { grayscale } from "./grayscale";
import { hexString } from "./hexString";

test("grayscale of 336699", () => {
  const color = new Color("#336699");
  // really its 50% but internally numbers are not rounded
  expect(hexString(grayscale(color))).toBe("#666666");
});
