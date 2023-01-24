import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getRgb } from "./getRgb";

test("getRGB of #000000 to equal {r: 0, g: 0, b: 0}", () => {
  const color = new Color("#000000");
  expect(getRgb(color)).toEqual({ r: 0, g: 0, b: 0 });
});

test("getRGB of #FFFFFF to eqaul {b: 255, g: 255, r: 255}", () => {
  const color = new Color("#FFFFFF");
  expect(getRgb(color)).toEqual({ b: 255, g: 255, r: 255 });
});

test("getRGB of #000000 as percentage to equal { b: 0, g: 0, r: 0 }", () => {
  const color = new Color("#000000");
  expect(getRgb(color, "percentage")).toEqual({ b: 0, g: 0, r: 0 });
});

test("getRGB of #FFFFFF as percentage to equal { b: 100, g: 100, r: 100 }", () => {
  const color = new Color("#FFFFFF");
  expect(getRgb(color, "percentage")).toEqual({ b: 100, g: 100, r: 100 });
});

test("getRGB of #336699 to equal { b: 153, g: 102, r: 51 }", () => {
  const color = new Color("#336699");
  expect(getRgb(color)).toEqual({ b: 153, g: 102, r: 51 });
});

test("getRGB of #336699 as percentage to equal { b: 60, g: 40, r: 20 }", () => {
  const color = new Color("#336699");
  expect(getRgb(color, "percentage")).toEqual({ b: 60, g: 40, r: 20 });
});

test("getRGB of #234567 as percentage to equal {r: 13.725490196078432, g: 27.058823529411764,  b: 40.3921568627451}", () => {
  const color = new Color("#234567");
  expect(getRgb(color, "percentage")).toEqual({
    r: 13.725490196078432,
    g: 27.058823529411764,
    b: 40.3921568627451,
  });
});
