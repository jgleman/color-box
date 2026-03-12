import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { analogous } from "./analogous.js";
import { hexString } from "./hexString.js";

test("analogous of #336699 returns array of 3 colors", () => {
  const color = new Color("#336699");
  expect(analogous(color)).toHaveLength(3);
});

test("analogous of #336699 index 0 equals #336699 (original)", () => {
  const color = new Color("#336699");
  expect(hexString(analogous(color)[0])).toBe("#336699");
});

test("analogous of #336699 index 1 equals #333399", () => {
  const color = new Color("#336699");
  expect(hexString(analogous(color)[1])).toBe("#333399");
});

test("analogous of #336699 index 2 equals #339999", () => {
  const color = new Color("#336699");
  expect(hexString(analogous(color)[2])).toBe("#339999");
});

test("analogous with invalid color throws Invalid Color", () => {
  expect(() => {
    //@ts-expect-error missing argument
    analogous();
  }).toThrow("Invalid Color");
});
