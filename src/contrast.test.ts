import { expect, test } from "@jest/globals";
import { Color } from "./Color";
import { contrast } from "./contrast";

test("contrast #ff0000 to #ff0000 is 1.0:1", () => {
  const color1 = new Color("#ff0000");
  const color2 = new Color("#ff0000");
  expect(contrast(color1, color2)).toBe("1.0:1");
});

test("contrast #000000 to #ffffff is 21.0:1", () => {
  const color1 = new Color("#000000");
  const color2 = new Color("#ffffff");
  expect(contrast(color1, color2)).toBe("21.0:1");
});
//

test("contrast #336699 to #ADADAD is 2.67:1", () => {
  const color1 = new Color("#336699");
  const color2 = new Color("#ADADAD");
  expect(contrast(color1, color2)).toBe("2.7:1");
});

test("contrast color1 is not valid, result should be error", () => {
  const color1 = new Color("#hsl");
  const color2 = new Color("#ADADAD");
  expect(() => {
    expect(contrast(color1, color2));
  }).toThrow("Invalid Color");
});

test("contrast color2 is not valid, result should be error", () => {
  const color1 = new Color("#ADADAD");
  const color2 = new Color("#hsl");
  expect(() => {
    expect(contrast(color1, color2));
  }).toThrow("Invalid Color");
});

test("contrast color2 is missing, result should be error", () => {
  const color1 = new Color("#ADADAD");
  expect(() => {
    //@ts-ignore
    expect(contrast(color1));
  }).toThrow("Invalid Color");
});
