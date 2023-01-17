import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getSaturation } from "./getSaturation";

test("getSaturation of 336699", () => {
  const color = new Color("#336699");
  // really its 50% but internally numbers are not rounded
  expect(getSaturation(color)).toBe(0.49999999999999994);
});
