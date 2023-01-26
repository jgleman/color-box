import { RGBColor } from "../types";
import { bind } from "./bind";

function round2(n: number): number {
  // aped from https://stackoverflow.com/a/32605063
  const multiplicator = Math.pow(10, 2);
  const N = parseFloat((n * multiplicator).toFixed(11));
  return Math.round(N) / multiplicator;
}

export function hexToRGB(hexColor: string): RGBColor {
  const rgbParts: RGBColor = { r: 0, g: 0, b: 0, a: undefined };

  // if we have a 3 character or 4 character color, double each character
  const hexColorFull =
    hexColor.length === 3 || hexColor.length === 4
      ? hexColor
          .split("")
          .map((i) => i.concat(i))
          .join("")
      : hexColor;

  const rawAlpha =
    hexColorFull.length === 8
      ? bind(parseInt(hexColorFull.substring(6, 8), 16), 255)
      : "undefined";

  rgbParts.r = parseInt(hexColorFull.substring(0, 2), 16);
  rgbParts.g = parseInt(hexColorFull.substring(2, 4), 16);
  rgbParts.b = parseInt(hexColorFull.substring(4, 6), 16);
  rgbParts.a = typeof rawAlpha === "number" ? round2(rawAlpha) : undefined;

  return rgbParts;
}
