import { HSLColor } from "./types";
import { Color } from "./Color";

export function grayscale(color: Color): Color {
  const asHSL: HSLColor = { ...color.hsl };
  asHSL.s = 0;
  return new Color(asHSL);
}
