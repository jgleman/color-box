import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { setHsl } from "./setHsl";
import { hexString } from "./hexString";

test("set hue of 100 should return #559933", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { h: 100 }))).toBe("#559933");
});

test("set hue of 361 should thow an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setHsl(color, { h: 361 }));
  }).toThrow("Hue must be between 0 and 360");
});

test("set hsl missing object should return #336699", () => {
  const color = new Color("#336699");
  //@ts-ignore
  expect(hexString(setHsl(color))).toBe("#336699");
});

test("set hsl missing color should thow an error", () => {
  expect(() => {
    //@ts-ignore
    setHsl();
  }).toThrow("Invalid Color");
});

test("set hsl undefined color should thow an error", () => {
  expect(() => {
    //@ts-ignore
    setHsl(undefined, {});
  }).toThrow("Invalid Color");
});

test("set hsl invalid color should thow an error", () => {
  const color = new Color("#hsl");
  expect(() => {
    //@ts-ignore
    setHsl(color, {});
  }).toThrow("Invalid Color");
});

test("set lightness of 32 should return #29527A", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: 32 }))).toBe("#29527a");
});

test("set lightness of 100 should return #ffffff", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: 100 }))).toBe("#ffffff");
});

test("set lightness of 0 should return #000000", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: 0 }))).toBe("#000000");
});

test("set lightness of .5 should return #4080bf", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: 0.5 }))).toBe("#4080bf");
});

test("set lightness of 50 should return #4080bf", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: 50 }))).toBe("#4080bf");
});

test("set lightness of 1 should return #010304", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: 1 }))).toBe("#010304");
});

test("set lightness of 1 should return #010304", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: 1.0 }))).toBe("#010304");
});

test("set lightness of 1.0 (string) should return #FFFFFF", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: "1.0" }))).toBe("#ffffff");
});

test("set lightness of 0 should return #000000", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { l: 0 }))).toBe("#000000");
});

test("set lightness of 101 should thow an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setHsl(color, { l: 101 }));
  }).toThrow("Lightness must be between 0.0 and 1.0 or 0 and 100");
});

test("set saturation of 32 should return #456687", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { s: 32 }))).toBe("#456687");
});

test("set saturation of 100 should return #0066CC", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { s: 100 }))).toBe("#0066cc");
});

test("set saturation of 0 should return #666666", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { s: 0 }))).toBe("#666666");
});

test("set saturation of 101 should thow an error", () => {
  const color = new Color("#336699");
  expect(() => {
    hexString(setHsl(color, { s: 101 }));
  }).toThrow("Saturation must be between 0.0 and 1.0 or 0 and 100");
});

test("set saturation of 1 should return #656667", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { s: 1 }))).toBe("#656667");
});

test("set saturation of 1 should return #656667", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { s: 1.0 }))).toBe("#656667");
});

test("set saturation of 1.0 (string) should return #0066CC", () => {
  const color = new Color("#336699");
  expect(hexString(setHsl(color, { s: "1.0" }))).toBe("#0066cc");
});

test("set saturation of .5 should return #bf4040", () => {
  const color = new Color("#ff0000");
  expect(hexString(setHsl(color, { s: 0.5 }))).toBe("#bf4040");
});

test("set saturation of 50 should return #bf4040", () => {
  const color = new Color("#ff0000");
  expect(hexString(setHsl(color, { s: 50 }))).toBe("#bf4040");
});
