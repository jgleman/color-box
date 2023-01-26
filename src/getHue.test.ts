import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getHue } from "./getHue";

test("get hue of 336699 should be 210", () => {
  const color = new Color("#336699");
  expect(getHue(color)).toBe(210);
});

test("getHue, color is missing, result should be error", () => {
  expect(() => {
    //@ts-ignore
    expect(getHue());
  }).toThrow("Invalid Color");
});
