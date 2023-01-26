import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { getAlpha } from "./getAlpha";

test("getAlpha of 33669980", () => {
  const color = new Color("#33669980");
  expect(getAlpha(color)).toBe(0.5);
});

test("getAlpha of 33669900", () => {
  const color = new Color("#33669900");
  expect(getAlpha(color)).toBe(0.0);
});

test("getAlpha of 336699FF", () => {
  const color = new Color("#336699FF");
  expect(getAlpha(color)).toBe(1.0);
});

test("getAlpha of 33669940", () => {
  const color = new Color("#33669940");
  expect(getAlpha(color)).toBe(0.25);
});

test("getAlpha of 336699", () => {
  const color = new Color("#336699");
  expect(getAlpha(color)).toBe(undefined);
});

test("getAlpha, color is missing, result should be error", () => {
  expect(() => {
    //@ts-ignore
    expect(getAlpha());
  }).toThrow("Invalid Color");
});
