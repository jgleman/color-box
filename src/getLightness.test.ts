import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { getLightness } from "./getLightness.js";

test("getLightness of 336699", () => {
  const color = new Color("#336699");
  expect(getLightness(color)).toBe(0.4);
});

test("getLightness of #000000 (black) = 0", () => {
  const color = new Color("#000000");
  expect(getLightness(color)).toBe(0);
});

test("getLightness of #ffffff (white) = 1", () => {
  const color = new Color("#ffffff");
  expect(getLightness(color)).toBe(1);
});

test("getLightness of #808080 (mid gray) ≈ 0.502", () => {
  const color = new Color("#808080");
  expect(getLightness(color)).toBe(128 / 255);
});

test("getLightness, color is missing, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects one argument
    expect(getLightness());
  }).toThrow("Invalid Color");
});
