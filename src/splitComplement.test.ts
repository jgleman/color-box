import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { splitComplement } from "./splitComplement.js";
import { hexString } from "./hexString.js";

test("splitComplement of #336699 returns array of 3 colors", () => {
  const color = new Color("#336699");
  expect(splitComplement(color)).toHaveLength(3);
});

test("splitComplement of #336699 index 0 equals #336699 (original)", () => {
  const color = new Color("#336699");
  expect(hexString(splitComplement(color)[0])).toBe("#336699");
});

test("splitComplement of #336699 index 1 equals #993333", () => {
  const color = new Color("#336699");
  expect(hexString(splitComplement(color)[1])).toBe("#993333");
});

test("splitComplement of #336699 index 2 equals #999933", () => {
  const color = new Color("#336699");
  expect(hexString(splitComplement(color)[2])).toBe("#999933");
});

test("splitComplement with invalid color throws Invalid Color", () => {
  expect(() => {
    //@ts-expect-error missing argument
    splitComplement();
  }).toThrow("Invalid Color");
});
