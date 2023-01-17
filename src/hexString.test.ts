import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { hexString } from "./hexString";

test("hex string of 336699 is #336699", () => {
  const color = new Color("336699");
  expect(hexString(color)).toBe("#336699");
});

test("hex string of 336699AA is #336699AA", () => {
  const color = new Color("336699AA");
  expect(hexString(color)).toBe("#336699AA");
});

test("hex string of rgb(51 102 153 / .25) is #336699AA", () => {
  const color = new Color("rgb(51 102 153 / .25)");
  expect(hexString(color)).toBe("#33669940");
});

test("hex string of hsl(210 50% 40% / 25%) is #336699AA", () => {
  const color = new Color("rgb(51 102 153 / .25)");
  expect(hexString(color)).toBe("#33669940");
});

test("hex string of empty string is #000000", () => {
  const color = new Color("");
  expect(hexString(color)).toBe("");
});
