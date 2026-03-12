import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { triadic } from "./triadic.js";
import { hexString } from "./hexString.js";

test("triadic of #336699 returns array of 3 colors", () => {
  const color = new Color("#336699");
  expect(triadic(color)).toHaveLength(3);
});

test("triadic of #336699 index 0 equals #336699 (original)", () => {
  const color = new Color("#336699");
  expect(hexString(triadic(color)[0])).toBe("#336699");
});

test("triadic of #336699 index 1 equals #993366", () => {
  const color = new Color("#336699");
  expect(hexString(triadic(color)[1])).toBe("#993366");
});

test("triadic of #336699 index 2 equals #669933", () => {
  const color = new Color("#336699");
  expect(hexString(triadic(color)[2])).toBe("#669933");
});

test("triadic with invalid color throws Invalid Color", () => {
  expect(() => {
    //@ts-expect-error missing argument
    triadic();
  }).toThrow("Invalid Color");
});
