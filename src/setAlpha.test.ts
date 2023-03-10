import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { setAlpha } from "./setAlpha";
import { hexString } from "./hexString";

test("set alpha of 1 should return #33669903", () => {
  const color = new Color("#336699");
  expect(hexString(setAlpha(color, 1))).toBe("#33669903");
});

test("set alpha of 1 (string) should return #33669903", () => {
  const color = new Color("#336699");
  expect(hexString(setAlpha(color, "1"))).toBe("#33669903");
});

test("set alpha of 1.0 (number) should return #33669903", () => {
  const color = new Color("#336699");
  expect(hexString(setAlpha(color, 1.0))).toBe("#33669903");
});

test("set alpha of 0.1 should return #33669903", () => {
  const color = new Color("#336699");
  expect(hexString(setAlpha(color, 1.0))).toBe("#33669903");
});

test("set alpha of 1.0 (string) should return #33669903ff", () => {
  const color = new Color("#336699");
  expect(hexString(setAlpha(color, "1.0"))).toBe("#336699ff");
});

test("set alpha of 0 should return #33669900", () => {
  const color = new Color("#336699");
  expect(hexString(setAlpha(color, 0))).toBe("#33669900");
});

test("set alpha of 0.5 should return #33669980", () => {
  const color = new Color("#336699");
  expect(hexString(setAlpha(color, 0.5))).toBe("#33669980");
});

test("set alpha of 50 should return #33669980", () => {
  const color = new Color("#336699");
  expect(hexString(setAlpha(color, 50))).toBe("#33669980");
});

test("set alpha of 101 should thow an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setAlpha(color, 101));
  }).toThrow("Alpha must be between 0.0 and 1.0 or 0 and 100");
});

test("setAlpha, color is missing, result should be error", () => {
  expect(() => {
    //@ts-ignore
    expect(setAlpha());
  }).toThrow("Invalid Color");
});
