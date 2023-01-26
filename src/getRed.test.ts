import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getRed } from "./getRed";

test("getRed of #000000 to equal 0", () => {
  const color = new Color("#000000");
  expect(getRed(color)).toEqual(0);
});

test("getRed of #FFFFFF to eqaul 255", () => {
  const color = new Color("#FFFFFF");
  expect(getRed(color)).toEqual(255);
});

test("getRed of #000000 as percentage to equal 0", () => {
  const color = new Color("#000000");
  expect(getRed(color, "percentage")).toEqual(0);
});

test("getRed of #FFFFFF as percentage to equal 100", () => {
  const color = new Color("#FFFFFF");
  expect(getRed(color, "percentage")).toEqual(100);
});

test("getRed of #336699 to equal 51", () => {
  const color = new Color("#336699");
  expect(getRed(color)).toEqual(51);
});

test("getRed of #336699 as percentage to equal 20", () => {
  const color = new Color("#336699");
  expect(getRed(color, "percentage")).toEqual(20);
});

test("getRed of #234567 as percentage to equal r: 13.725490196078432", () => {
  const color = new Color("#234567");
  expect(getRed(color, "percentage")).toEqual(13.725490196078432);
});

test("getRed of hsl(123, 45, 60) as raw to equal 107.09999999999998", () => {
  const color = new Color("hsl(123, 45%, 60%)");
  expect(getRed(color, "raw")).toEqual(107.09999999999998);
});

test("getRed passing no color, result should be error", () => {
  expect(() => {
    // @ts-ignore
    getRed();
  }).toThrow("Invalid Color");
});
