import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { lighten } from "./lighten";
import { hexString } from "./hexString";

const color = new Color("#ff0000");

test("lighten #ff0000 100% = #ffffff", () => {
  expect(hexString(lighten(color, 100))).toBe("#ffffff");
});

test("lighten #ff0000 50% = #ffffff", () => {
  expect(hexString(lighten(color, 50))).toBe("#ffffff");
});

test("lighten #ff0000 0% = #ff0000", () => {
  expect(hexString(lighten(color, 0))).toBe("#ff0000");
});

test("lighten #ff0000 14% = #ff4747", () => {
  expect(hexString(lighten(color, 14))).toBe("#ff4747");
});

test("lighten #ff0000 0.5% = #ff0303", () => {
  expect(hexString(lighten(color, 0.5))).toBe("#ff0303");
});

test("lighten, color is missing, result should be error", () => {
  expect(() => {
    //@ts-ignore
    expect(lighten());
  }).toThrow("Invalid Color");
});
