import { RGBColor } from "../types";

export function rgbToHex(rgbColor: RGBColor): string {
  return (
    Math.round(rgbColor.r).toString(16).padStart(2, "0") +
    Math.round(rgbColor.g).toString(16).padStart(2, "0") +
    Math.round(rgbColor.b).toString(16).padStart(2, "0")
  );
}
