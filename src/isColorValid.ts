import Color from "./Color";

export function isColorValid(color: Color) {
  // validates that the hex color is a valid 6 digit hexadecimal number
  // or a valid 8 digit hexadecimal number for colors with alpha channel
  return color.hex?.match(/^([a-fA-F0-9]{6})([a-fA-F0-9]{2})?$/g)
    ? true
    : false || false;
}
