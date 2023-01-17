import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { isColorValid } from "./isColorValid";

test("isColorValid #DDA0DD to be true", () => {
  const color = new Color("#DDA0DD");
  expect(isColorValid(color)).toBe(true);
});

test("isColorValid empty string to be false", () => {
  const color = new Color("");
  expect(isColorValid(color)).toBe(false);
});
