import Color from "./Color";
import { RGBColor } from "./types";

// this is much more complicated than I thought
// I believe this link is to a description of the SASS mix algorithm
// will look into implementing this later. im tired now.
// https://github.com/sass/sass/blob/main/spec/built-in-modules/color.md#mix

export function mix(color1: Color, color2: Color, weight: number): Color {
  const rgbColor: RGBColor = { r: 0, g: 0, b: 0, a: undefined };
  console.log({ color1, color2, weight });
  return new Color(rgbColor);
}
