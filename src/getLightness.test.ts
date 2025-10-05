import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { getLightness } from "./getLightness.js";

test("getLightness of 336699", () => {
  const color = new Color("#336699");
  expect(getLightness(color)).toBe(0.4);
});

test("getLightness, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects one argument
    expect(getLightness());
  }).toThrow("Invalid Color");
});
