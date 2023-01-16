import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { hslString } from "./hslString";

test("hsl string of 336699 is hsl(210 50% 40%)", () => {
  const color = new Color("336699");
  expect(hslString(color)).toBe("hsl(210 50% 40%)");
});

test("hsl string of 33669999 is hsl(210 50% 40% / 60%)", () => {
  const color = new Color("33669999");
  expect(hslString(color)).toBe("hsl(210 50% 40% / 60%)");
});

test("hsl string of rgb(51 102 153) is hsl(210 50% 40%)", () => {
  const color = new Color("rgb(51 102 153)");
  expect(hslString(color)).toBe("hsl(210 50% 40%)");
});

test("hsl string of hsl(210 50% 40%) is hsl(210 50% 40%)", () => {
  const color = new Color("hsl(210 50% 40%)");
  expect(hslString(color)).toBe("hsl(210 50% 40%)");
});

test("hsl string of empty string is empty", () => {
  const color = new Color("");
  expect(hslString(color)).toBe("");
});
