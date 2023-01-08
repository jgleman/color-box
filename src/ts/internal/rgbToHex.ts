import { HexColor, RGBColor } from "../types";

export function rgbToHex(rgbColor: RGBColor): HexColor {
  const rPart = Math.round(rgbColor.r).toString(16);
  const gPart = Math.round(rgbColor.g).toString(16);
  const bPart = Math.round(rgbColor.b).toString(16);

  const hexColor: HexColor = [
    rPart.length === 1 ? "0" + rPart : rPart,
    gPart.length === 1 ? "0" + gPart : gPart,
    bPart.length === 1 ? "0" + bPart : bPart,
  ].join("");

  return hexColor;
}
