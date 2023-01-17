import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { rgbString } from "./rgbString";

test("rgb string of 336699 is rgb(51 102 153)", () => {
  const color = new Color("336699");
  expect(rgbString(color)).toBe("rgb(51 102 153)");
});

test("rgb string of 33669999 is rgb(51 102 153 / 0.6)", () => {
  const color = new Color("33669999");
  expect(rgbString(color)).toBe("rgb(51 102 153 / 0.6)");
});

test("rgb string of rgb(51 102 153) is rgb(51 102 153)", () => {
  const color = new Color("rgb(51 102 153)");
  expect(rgbString(color)).toBe("rgb(51 102 153)");
});

test("rgb string of hsl(210 50% 40%) is rgb(51 102 153)", () => {
  const color = new Color("hsl(210 50% 40%)");
  expect(rgbString(color)).toBe("rgb(51 102 153)");
});

test("rgb string of empty string is empty", () => {
  const color = new Color("");
  expect(rgbString(color)).toBe("");
});
