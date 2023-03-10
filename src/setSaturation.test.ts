import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { setSaturation } from "./setSaturation";
import { hexString } from "./hexString";

test("set saturation of 32 should return #456687", () => {
  const color = new Color("#336699");
  expect(hexString(setSaturation(color, 32))).toBe("#456687");
});

test("set saturation of 100 should return #0066CC", () => {
  const color = new Color("#336699");
  expect(hexString(setSaturation(color, 100))).toBe("#0066cc");
});

test("set saturation of 0 should return #666666", () => {
  const color = new Color("#336699");
  expect(hexString(setSaturation(color, 0))).toBe("#666666");
});

test("set saturation of 101 should thow an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setSaturation(color, 101));
  }).toThrow("Saturation must be between 0.0 and 1.0 or 0 and 100");
});

test("set saturation of 1 should return #656667", () => {
  const color = new Color("#336699");
  expect(hexString(setSaturation(color, 1))).toBe("#656667");
});

test("set saturation of 1 should return #656667", () => {
  const color = new Color("#336699");
  expect(hexString(setSaturation(color, 1.0))).toBe("#656667");
});

test("set saturation of 1.0 (string) should return #0066CC", () => {
  const color = new Color("#336699");
  expect(hexString(setSaturation(color, "1.0"))).toBe("#0066cc");
});

test("set saturation of .5 should return #bf4040", () => {
  const color = new Color("#ff0000");
  expect(hexString(setSaturation(color, 0.5))).toBe("#bf4040");
});

test("set saturation of 50 should return #bf4040", () => {
  const color = new Color("#ff0000");
  expect(hexString(setSaturation(color, 50))).toBe("#bf4040");
});

test("setSaturation, color is missing, result should be error", () => {
  expect(() => {
    //@ts-ignore
    expect(setSaturation());
  }).toThrow("Invalid Color");
});
