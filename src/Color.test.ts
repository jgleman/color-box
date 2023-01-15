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

test("test that rgb(51, 102, 153) creates a color with hex value 336699", () => {
  const color = new Color("rgb(51, 102, 153)");
  expect(color.hex).toBe("336699");
});

test("test that hsl(210, 50%, 40%) creates a color with hex value 336699", () => {
  const color = new Color("hsl(210, 50%, 40%)");
  expect(color.hex).toBe("336699");
});

test("test that object { r: 51, g: 102, b: 153 } creates a color with hex value 336699", () => {
  const color = new Color({ r: 51, g: 102, b: 153 });
  expect(color.hex).toBe("336699");
});

test("test that undefined creates a color with hex value 000000", () => {
  const color = new Color(undefined);
  expect(color.hex).toBe("000000");
});
