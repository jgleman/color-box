import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getLightness } from "./getLightness";

test("getLightness of 336699", () => {
  const color = new Color("#336699");
  expect(getLightness(color)).toBe(0.4);
});

test("getLightness, color is missing, result should be error", () => {
  expect(() => {
    //@ts-ignore
    expect(getLightness());
  }).toThrow("Invalid Color");
});
