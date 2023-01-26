import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getBlue } from "./getBlue";

test("getBlue of #000000 to equal 0", () => {
  const color = new Color("#000000");
  expect(getBlue(color)).toEqual(0);
});

test("getBlue of #FFFFFF to eqaul 255", () => {
  const color = new Color("#FFFFFF");
  expect(getBlue(color)).toEqual(255);
});

test("getBlue of #000000 as percentage to equal 0", () => {
  const color = new Color("#000000");
  expect(getBlue(color, "percentage")).toEqual(0);
});

test("getBlue of #FFFFFF as percentage to equal 100", () => {
  const color = new Color("#FFFFFF");
  expect(getBlue(color, "percentage")).toEqual(100);
});

test("getBlue of #336699 to equal 153", () => {
  const color = new Color("#336699");
  expect(getBlue(color)).toEqual(153);
});

test("getBlue of #336699 as percentage to equal 60", () => {
  const color = new Color("#336699");
  expect(getBlue(color, "percentage")).toEqual(60);
});

test("getBlue of #234567 as percentage to equal 40.3921568627451", () => {
  const color = new Color("#234567");
  expect(getBlue(color, "percentage")).toEqual(40.3921568627451);
});

test("getBlue of hsl(123, 45, 60) as raw to equal 111.68999999999997", () => {
  const color = new Color("hsl(123, 45%, 60%)");
  expect(getBlue(color, "raw")).toEqual(111.68999999999997);
});

test("getBlue passing no color, result should be error", () => {
  expect(() => {
    // @ts-ignore
    getBlue();
  }).toThrow("Invalid Color");
});
