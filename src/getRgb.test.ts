import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getRgb } from "./getRgb";

test("getRgb of #000000 to equal {r: 0, g: 0, b: 0}", () => {
  const color = new Color("#000000");
  expect(getRgb(color)).toEqual({ r: 0, g: 0, b: 0 });
});

test("getRgb of #FFFFFF to eqaul {b: 255, g: 255, r: 255}", () => {
  const color = new Color("#FFFFFF");
  expect(getRgb(color)).toEqual({ b: 255, g: 255, r: 255 });
});

test("getRgb of #000000 as percentage to equal { b: 0, g: 0, r: 0 }", () => {
  const color = new Color("#000000");
  expect(getRgb(color, "percentage")).toEqual({ b: 0, g: 0, r: 0 });
});

test("getRgb of #FFFFFF as percentage to equal { b: 100, g: 100, r: 100 }", () => {
  const color = new Color("#FFFFFF");
  expect(getRgb(color, "percentage")).toEqual({ b: 100, g: 100, r: 100 });
});

test("getRgb of #336699 to equal { b: 153, g: 102, r: 51 }", () => {
  const color = new Color("#336699");
  expect(getRgb(color)).toEqual({ b: 153, g: 102, r: 51 });
});

test("getRgb of #336699 as percentage to equal { b: 60, g: 40, r: 20 }", () => {
  const color = new Color("#336699");
  expect(getRgb(color, "percentage")).toEqual({ b: 60, g: 40, r: 20 });
});

test("getRgb of #234567 as percentage to equal {r: 13.725490196078432, g: 27.058823529411764,  b: 40.3921568627451}", () => {
  const color = new Color("#234567");
  expect(getRgb(color, "percentage")).toEqual({
    r: 13.725490196078432,
    g: 27.058823529411764,
    b: 40.3921568627451,
  });
});

test("getRgb of hsl(123, 45, 60) as raw to equal { b: 111.68999999999997, g: 198.9, r: 107.09999999999998 }", () => {
  const color = new Color("hsl(123, 45%, 60%)");
  expect(getRgb(color, "raw")).toEqual({
    b: 111.68999999999997,
    g: 198.9,
    r: 107.09999999999998,
  });
});

test("getRgb passing no color, result should be error", () => {
  expect(() => {
    // @ts-ignore
    getRgb();
  }).toThrow("Invalid Color");
});
