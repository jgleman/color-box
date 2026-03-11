import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { getGreen } from "./getGreen.js";

test("getGreen of #000000 to equal 0", () => {
  const color = new Color("#000000");
  expect(getGreen(color)).toEqual(0);
});

test("getGreen of #FFFFFF to eqaul 255", () => {
  const color = new Color("#FFFFFF");
  expect(getGreen(color)).toEqual(255);
});

test("getGreen of #000000 as percentage to equal 0", () => {
  const color = new Color("#000000");
  expect(getGreen(color, "percentage")).toEqual(0);
});

test("getGreen of #FFFFFF as percentage to equal 100", () => {
  const color = new Color("#FFFFFF");
  expect(getGreen(color, "percentage")).toEqual(100);
});

test("getGreen of #336699 to equal 102", () => {
  const color = new Color("#336699");
  expect(getGreen(color)).toEqual(102);
});

test("getGreen of #336699 as percentage to equal 40", () => {
  const color = new Color("#336699");
  expect(getGreen(color, "percentage")).toEqual(40);
});

test("getGreen of #234567 as percentage to equal 27.058823529411764", () => {
  const color = new Color("#234567");
  expect(getGreen(color, "percentage")).toEqual(27.058823529411764);
});

test("getGreen of hsl(123, 45, 60) as raw to equal 199", () => {
  const color = new Color("hsl(123, 45%, 60%)");
  expect(getGreen(color, "raw")).toEqual(199);
});

test("getGreen passing no color, result should be error", () => {
  expect(() => {
    //@ts-expect-error expects one or two arguments
    getGreen();
  }).toThrow("Invalid Color");
});
