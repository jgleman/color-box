import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { getHue } from "./getHue.js";

test("get hue of 336699 should be 210", () => {
  const color = new Color("#336699");
  expect(getHue(color)).toBe(210);
});

test("getHue of pure red #ff0000 = 0", () => {
  const color = new Color("#ff0000");
  expect(getHue(color)).toBe(0);
});

test("getHue of pure green #00ff00 = 120", () => {
  const color = new Color("#00ff00");
  expect(getHue(color)).toBe(120);
});

test("getHue of pure blue #0000ff = 240", () => {
  const color = new Color("#0000ff");
  expect(getHue(color)).toBe(240);
});

test("getHue of achromatic gray #808080 = 0", () => {
  const color = new Color("#808080");
  expect(getHue(color)).toBe(0);
});

test("getHue, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects an argument
    expect(getHue());
  }).toThrow("Invalid Color");
});
