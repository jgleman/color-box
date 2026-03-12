import { expect, test } from "@jest/globals";
import { isRGBColor, isHSLColor } from "./types.js";

// isRGBColor
test("isRGBColor returns true for a valid RGB object", () => {
  expect(isRGBColor({ r: 51, g: 102, b: 153 })).toBe(true);
});

test("isRGBColor returns true for a valid RGB object with alpha", () => {
  expect(isRGBColor({ r: 51, g: 102, b: 153, a: 0.5 })).toBe(true);
});

test("isRGBColor returns false when a key is missing", () => {
  expect(isRGBColor({ r: 51, g: 102 })).toBe(false);
});

test("isRGBColor returns false when values are strings instead of numbers", () => {
  expect(isRGBColor({ r: "51", g: "102", b: "153" })).toBe(false);
});

test("isRGBColor returns false for null", () => {
  expect(isRGBColor(null)).toBe(false);
});

test("isRGBColor returns false for undefined", () => {
  expect(isRGBColor(undefined)).toBe(false);
});

test("isRGBColor returns false for a plain string", () => {
  expect(isRGBColor("#336699")).toBe(false);
});

// isHSLColor
test("isHSLColor returns true for a valid HSL object", () => {
  expect(isHSLColor({ h: 210, s: 0.5, l: 0.4 })).toBe(true);
});

test("isHSLColor returns true for a valid HSL object with alpha", () => {
  expect(isHSLColor({ h: 210, s: 0.5, l: 0.4, a: 0.5 })).toBe(true);
});

test("isHSLColor returns false when a key is missing", () => {
  expect(isHSLColor({ h: 210, s: 0.5 })).toBe(false);
});

test("isHSLColor returns false when values are strings instead of numbers", () => {
  expect(isHSLColor({ h: "210", s: "50%", l: "40%" })).toBe(false);
});

test("isHSLColor returns false for null", () => {
  expect(isHSLColor(null)).toBe(false);
});

test("isHSLColor returns false for undefined", () => {
  expect(isHSLColor(undefined)).toBe(false);
});

test("isHSLColor returns false for a plain string", () => {
  expect(isHSLColor("#336699")).toBe(false);
});
