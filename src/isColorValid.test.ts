import { expect, test } from "@jest/globals";
import { Color } from "./Color.js";
import { isColorValid } from "./isColorValid.js";

test("isColorValid #DDA0DD to be true", () => {
  const color = new Color("#DDA0DD");
  expect(isColorValid(color)).toBe(true);
});

test("isColorValid empty string to be false", () => {
  const color = new Color("");
  expect(isColorValid(color)).toBe(false);
});

test("isColorValid 3-digit hex #369 to be true", () => {
  const color = new Color("#369");
  expect(isColorValid(color)).toBe(true);
});

test("isColorValid 4-digit hex with alpha #3699 to be true", () => {
  const color = new Color("#3699");
  expect(isColorValid(color)).toBe(true);
});

test("isColorValid 8-digit hex with alpha #336699ff to be true", () => {
  const color = new Color("#336699ff");
  expect(isColorValid(color)).toBe(true);
});

test("isColorValid named color 'coral' to be true", () => {
  const color = new Color("coral");
  expect(isColorValid(color)).toBe(true);
});

test("isColorValid invalid string 'notacolor' to be false", () => {
  const color = new Color("notacolor");
  expect(isColorValid(color)).toBe(false);
});

test("isColorValid called twice on the same valid color returns true both times", () => {
  const color = new Color("#DDA0DD");
  expect(isColorValid(color)).toBe(true);
  expect(isColorValid(color)).toBe(true);
});
