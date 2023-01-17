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
  const rawAlpha =
    hexColor.length === 8
      ? bind(parseInt(hexColor.substring(6, 8), 16), 255)
      : "undefined";

  rgbParts.r = parseInt(hexColor.substring(0, 2), 16);
  rgbParts.g = parseInt(hexColor.substring(2, 4), 16);
  rgbParts.b = parseInt(hexColor.substring(4, 6), 16);
  rgbParts.a = typeof rawAlpha === "number" ? round2(rawAlpha) : undefined;

  return rgbParts;
}
