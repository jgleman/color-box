import { expect, test } from "@jest/globals";
import { Color } from "./Color";
//

test("test that #336699 creates a color with hex value 336699", () => {
  const color = new Color("#336699");
  expect(color.hex).toBe("336699");
});

test("test that 336699 creates a color with hex value 336699", () => {
  const color = new Color("336699");
  expect(color.hex).toBe("336699");
});

test("test that 33669991 creates a color with hex value 33669991", () => {
  const color = new Color("33669991");
  expect(color.hex).toBe("33669991");
});

test("test that rgb(51 102 153) creates a color with hex value 336699", () => {
  const color = new Color("rgb(51 102 153)");
  expect(color.hex).toBe("336699");
});

test("test that rgb(51 102 153 / 0.57) creates a color with hex value 33669991", () => {
  const color = new Color("rgb(51 102 153 / 0.57)");
  expect(color.hex).toBe("33669991");
});

test("test that rgb(51 102 153 / 57%) creates a color with hex value 33669991", () => {
  const color = new Color("rgb(51 102 153 / 57%)");
  expect(color.hex).toBe("33669991");
});

test("test that rgb(30% 20% 50%) creates a color with hex value 4d3380", () => {
  const color = new Color("rgb(30% 20% 50%)");
  expect(color.hex).toBe("4d3380");
});

test("test that hsl(210 50% 40%) creates a color with hex value 336699", () => {
  const color = new Color("hsl(210 50% 40%)");
  expect(color.hex).toBe("336699");
});

test("test that hsl(210 50%, 40% / 57%) creates a color with hex value 33669991", () => {
  const color = new Color("hsl(210 50% 40% / 57%)");
  expect(color.hex).toBe("33669991");
});

test("test that object { r: 51, g: 102, b: 153 } creates a color with hex value 336699", () => {
  const color = new Color({ r: 51, g: 102, b: 153 });
  expect(color.hex).toBe("336699");
});

test("test that object { h: 220, s: 100, l: 30 } creates a color with hex value 003399", () => {
  const color = new Color({ h: 220, s: 1, l: 0.3 });
  expect(color.hex).toBe("003399");
});

test("test that undefined creates a color with hex value 000000", () => {
  const color = new Color(undefined);
  expect(color.hex).toBe("000000");
});

test("test that rgb(30% 50%) (not enough parts) creates a color with hex value 000000", () => {
  const color = new Color("rgb(30% 50%)");
  expect(color.hex).toBe("000000");
});

test("test that hsl(210 50%) (not enough parts) creates a color with hex value 000000", () => {
  const color = new Color("hsl(210 50%)");
  expect(color.hex).toBe("000000");
});

test("test that hsl(200deg 50% 50%) creates a color with hex value 4095BF", () => {
  const color = new Color("hsl(200deg 50% 50%)");
  expect(color.hex).toBe("4095bf");
});

test("test that hsl(3.49rad 50% 50%) creates a color with hex value 4095bf", () => {
  const color = new Color("hsl(3.49rad 50% 50%)");
  expect(color.hex).toBe("4095bf");
});

test("test that hsl(222.2222grad 50% 50%) creates a color with hex value 4095bf", () => {
  const color = new Color("hsl(222.2222grad 50% 50%)");
  expect(color.hex).toBe("4095bf");
});

test("test that hsl(0.555turn 50% 50%) creates a color with hex value 4095bf", () => {
  const color = new Color("hsl(0.555turn 50% 50%)");
  expect(color.hex).toBe("4095bf");
});

test("test that empty string does... something", () => {
  const color = new Color("");
  expect(color.hex).toBe(undefined);
});
